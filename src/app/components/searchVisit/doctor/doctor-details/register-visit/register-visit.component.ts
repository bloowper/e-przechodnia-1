import { Component, OnInit } from '@angular/core';
import {DoctorProviderService} from "../../../../../services/search/doctor-provider.service";
import {MatDialog} from "@angular/material/dialog";
import {PopupComponent} from "../../../../shared/popup/popup.component";

@Component({
  selector: 'app-register-visit',
  templateUrl: './register-visit.component.html',
  styleUrls: ['./register-visit.component.scss']
})
export class RegisterVisitComponent implements OnInit {

  constructor(public doctorProviderService: DoctorProviderService,private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

    approveVisit() {
        this.matDialog.open(PopupComponent,
            {
                width: '400px',
                data:{
                    title: 'Informacja',
                    content: 'Dalszy proces nie jest zaimplementowany'
                }
            });
    }
}
