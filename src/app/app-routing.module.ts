import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from "@angular/router";
import {HomepageComponent} from "./components/homepage/homepage.component";
import {VisitSearchComponent} from "./components/visits/visit-search/visit-search.component";
import {SignInComponent} from "./components/sign/sign-in/sign-in.component";
import {SignUpComponent} from "./components/sign/sign-up/sign-up.component";


const routes: Routes = [
    {path: '', redirectTo: '/homepage', pathMatch: 'full'},
    {path: 'homepage', component: HomepageComponent},
    {path: 'szukaj', component: VisitSearchComponent, pathMatch: 'full'},
    {path: 'logowanie', component: SignInComponent},
    {path: 'rejestracja', component: SignUpComponent}

];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule {
}
