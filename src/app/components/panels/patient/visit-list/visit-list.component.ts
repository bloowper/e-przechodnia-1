import {Component, OnInit} from '@angular/core';
import {AppointmentEntity} from "../../../../entities/AppointmentEntity";
import {DoctorProviderService} from "../../../../services/search/doctor-provider.service";
import {AppointmentStatus} from "../../../../entities/AppointmentStatus";
import {DoctorAppointmentService} from "../../../../services/visit/doctor-appointment.service";

@Component({
    selector: 'app-visit-list',
    templateUrl: './visit-list.component.html',
    styleUrls: ['./visit-list.component.scss']
})
export class VisitListComponent implements OnInit {

    loaded = false;
    awaiting: AppointmentEntity[] = [];

    constructor(private doctorProviderService:DoctorProviderService,private doctorAppointmentService:DoctorAppointmentService) {

    }

    ngOnInit(): void {
        var subscription = this.doctorAppointmentService.getAppointments().subscribe((appoinments: AppointmentEntity[]) => {
            this.awaiting = appoinments;
            this.loaded = true;
        });
    }

}
