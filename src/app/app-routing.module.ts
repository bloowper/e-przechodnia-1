import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {HomepageComponent} from "./components/homepage/homepage.component";


const routes: Routes = [
  {path: '', redirectTo: '/homepage',pathMatch:'full'},
  {path: 'homepage', component: HomepageComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
