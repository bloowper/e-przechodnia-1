import {Component, Input, OnInit} from '@angular/core';
import {AppointmentEntity} from "../../../../../entities/AppointmentEntity";

@Component({
  selector: 'app-history-visit-element',
  templateUrl: './history-visit-element.component.html',
  styleUrls: ['./history-visit-element.component.scss']
})
export class HistoryVisitElementComponent implements OnInit {

    @Input()
    public historyAppointment!: AppointmentEntity;

    constructor() { }

    ngOnInit(): void {

    }

}
