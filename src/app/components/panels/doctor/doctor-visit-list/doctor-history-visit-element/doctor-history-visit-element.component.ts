import {Component, Input, OnInit} from '@angular/core';
import {AppointmentEntity} from "../../../../../entities/AppointmentEntity";

@Component({
  selector: 'app-doctor-history-visit-element',
  templateUrl: './doctor-history-visit-element.component.html',
  styleUrls: ['./doctor-history-visit-element.component.scss']
})
export class DoctorHistoryVisitElementComponent implements OnInit {

    @Input()
    public historyAppointment!: AppointmentEntity;

    constructor() {
    }

    ngOnInit(): void {
    }
}
