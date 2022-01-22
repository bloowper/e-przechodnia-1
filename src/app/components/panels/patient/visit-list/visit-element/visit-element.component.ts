import {Component, Input, OnInit} from '@angular/core';
import {AppointmentEntity} from "../../../../../entities/AppointmentEntity";
import {DoctorAppointmentService} from "../../../../../services/visit/doctor-appointment.service";

@Component({
    selector: 'app-visit-element',
    templateUrl: './visit-element.component.html',
    styleUrls: ['./visit-element.component.scss']
})
export class VisitElementComponent implements OnInit {

    @Input()
    public appointment!: AppointmentEntity;

    constructor(private doctorAppointmentService:DoctorAppointmentService) {
    }

    ngOnInit(): void {
    }

    cancel() {
        this.doctorAppointmentService.appointments.forEach((value, index) => {
            if (value.id = this.appointment.id) {
                this.doctorAppointmentService.appointments.splice(index, 1);
            }
        })
    }
}
