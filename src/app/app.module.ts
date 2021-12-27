import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { VisitSearchComponent } from './components/visits/visit-search/visit-search.component';
import { DoctorListComponent } from './components/visits/doctor/doctor-list/doctor-list.component';
import { DoctorListElementComponent } from './components/visits/doctor/doctor-list-element/doctor-list-element.component';
import { SignInComponent } from './components/sign/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign/sign-up/sign-up.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from "@angular/material/divider";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    VisitSearchComponent,
    DoctorListComponent,
    DoctorListElementComponent,
    SignInComponent,
    SignUpComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatButtonModule,
        RouterModule,
        AppRoutingModule,
        MatIconModule,
        MatCardModule,
        MatPaginatorModule,
        HttpClientModule,
        MatFormFieldModule,
        MatInputModule,
        MatDividerModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
