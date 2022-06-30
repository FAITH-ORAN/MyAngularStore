import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './composants/home/home.component';
import { AboutComponent } from './composants/about/about.component';


const routes: Routes = [ {path: '', component: HomeComponent},
{path: 'about', component: AboutComponent},
{path: '**', component: HomeComponent},
]


@NgModule({ 
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule] 
   }) 
   export class AppRoutingModule { } 