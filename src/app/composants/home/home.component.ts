
import { Component, OnInit, OnDestroy  } from '@angular/core';
import {ApiService} from '../../services/api.service';
import { HttpResponse } from '@angular/common/http';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private readonly destroy$ = new Subject();
  alive = true;
  products !:[{id:any, name:string,description:string, price:string,imageUrl:string,quantity:number}];
  size!:number;
	constructor(private apiService: ApiService) { }
	ngOnInit() {
		this.apiService.get().subscribe((data:any)=>{  
			console.log(data);  
			this.products = data;  
      this.size = Object.keys(this.products).length;
		})  
  //   this.apiService.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>)=>{  
  //     console.log(res);  
  //     this.products = res.body;  
  //   })  
	// }

  
   
  }}


