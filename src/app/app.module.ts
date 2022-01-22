import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
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
import {MatDialogModule} from "@angular/material/dialog";
import { DevpopupComponent } from './components/homepage/devpopup/devpopup.component';
import {MatListModule} from "@angular/material/list";
import {MatTableModule} from "@angular/material/table";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DoctorDetailsComponent } from './components/searchVisit/doctor/doctor-details/doctor-details.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { NotFoundComponent } from './components/homepage/not-found/not-found.component';
import {MatChipsModule} from "@angular/material/chips";
import {MatTooltipModule} from "@angular/material/tooltip";
import { PopupComponent } from './components/shared/popup/popup.component';
import {MatExpansionModule} from "@angular/material/expansion";
import { BarRatingModule } from "ngx-bar-rating";
import {MatMenuModule} from "@angular/material/menu";
import { RegisterVisitComponent } from './components/searchVisit/doctor/doctor-details/register-visit/register-visit.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatRadioModule} from "@angular/material/radio";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { PrescriptionListComponent } from './components/panels/patient/prescription-list/prescription-list.component';
import { SideNavComponent } from './components/shared/side-nav/side-nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { VisitListComponent } from './components/panels/patient/visit-list/visit-list.component';
import { DoctorPrescriptionListComponent } from './components/panels/doctor/doctor-prescription-list/doctor-prescription-list.component';
import { DoctorVisitListComponent } from './components/panels/doctor/doctor-visit-list/doctor-visit-list.component';
import {ToastContainerModule, ToastrModule, ToastrService} from "ngx-toastr";
import { FavoriteDoctorListComponent } from './components/panels/patient/favorite-doctor-list/favorite-doctor-list.component';

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
    DevpopupComponent,
    DoctorDetailsComponent,
    NotFoundComponent,
    PopupComponent,
    RegisterVisitComponent,
    PrescriptionListComponent,
    SideNavComponent,
    VisitListComponent,
    DoctorPrescriptionListComponent,
    DoctorVisitListComponent,
    FavoriteDoctorListComponent,
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
        MatDialogModule,
        MatListModule,
        MatTableModule,
        MatDatepickerModule,
        MatProgressSpinnerModule,
        MatChipsModule,
        MatTooltipModule,
        MatExpansionModule,
        BarRatingModule,
        MatMenuModule,
        MatStepperModule,
        ReactiveFormsModule,
        MatRadioModule,
        MatSlideToggleModule,
        MatSidenavModule,
        ToastrModule.forRoot({
            timeOut: 3000,
            progressBar: true,
            progressAnimation: "increasing",
            positionClass: 'inline'
        }),
        ToastContainerModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
