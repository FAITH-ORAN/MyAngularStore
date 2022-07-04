import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { retry, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

 SERVER_URL = "http://localhost:3000/products";

  constructor(private httpClient: HttpClient) { }
  public get(){  
		return this.httpClient.get(this.SERVER_URL);  
	}  
  

}
