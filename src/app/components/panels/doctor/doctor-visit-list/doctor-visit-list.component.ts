import {Component, OnInit} from '@angular/core';
import {AppointmentEntity} from "../../../../entities/AppointmentEntity";
import {DoctorProviderService} from "../../../../services/search/doctor-provider.service";
import {PatientProviderService } from "../../../../services/search/patient-provider.service";
import {DoctorAppointmentService} from "../../../../services/visit/doctor-appointment.service";

@Component({
    selector: 'app-visit-list',
    templateUrl: './doctor-visit-list.component.html',
    styleUrls: ['./doctor-visit-list.component.scss']
})
export class DoctorVisitListComponent implements OnInit {

    loaded = false;
    awaiting: AppointmentEntity[] = [];

    constructor(private patientProviderService:PatientProviderService,private doctorAppointmentService:DoctorAppointmentService) {

    }

    ngOnInit(): void {
        var subscription = this.doctorAppointmentService.getAppointments().subscribe((appoinments: AppointmentEntity[]) => {
            this.awaiting = appoinments;
            this.loaded = true;
        });
    }

}
