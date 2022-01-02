import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
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
import { VisitSearchComponent } from './components/searchVisit/visit-search/visit-search.component';
import { DoctorListComponent } from './components/searchVisit/doctor/doctor-list/doctor-list.component';
import { DoctorListElementComponent } from './components/searchVisit/doctor/doctor-list-element/doctor-list-element.component';
import { SignInComponent } from './components/sign/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign/sign-up/sign-up.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from "@angular/material/divider";
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { FooterComponent } from './components/homepage/footer/footer.component';
import { MainDoctorPanelComponent } from './components/panels/doctor/main-doctor-panel/main-doctor-panel.component';
import { MainPatientPanelComponent } from './components/panels/patient/main-patient-panel/main-patient-panel.component';
import {MatBadgeModule} from "@angular/material/badge";
import {MatSelectModule} from "@angular/material/select";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatTabsModule} from "@angular/material/tabs";
import {ScrollingModule} from "@angular/cdk/scrolling";


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
    FooterComponent,
    MainDoctorPanelComponent,
    MainPatientPanelComponent,
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
        MatDividerModule,
        MdbAccordionModule,
        MdbCarouselModule,
        MdbCheckboxModule,
        MdbCollapseModule,
        MdbDropdownModule,
        MdbFormsModule,
        MdbModalModule,
        MdbPopoverModule,
        MdbRadioModule,
        MdbRangeModule,
        MdbRippleModule,
        MdbScrollspyModule,
        MdbTabsModule,
        MdbTooltipModule,
        MdbValidationModule,
        FormsModule,
        MatBadgeModule,
        MatSelectModule,
        MatGridListModule,
        MatTabsModule,
        ScrollingModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
