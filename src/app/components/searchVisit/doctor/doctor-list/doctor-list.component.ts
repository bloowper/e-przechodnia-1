import {Component, OnInit} from '@angular/core';
import {DoctorProviderService} from "../../../../services/search/doctor-provider.service";
import {DoctorEntity} from "../../../../entities/DoctorEntity";

@Component({
    selector: 'app-doctor-list',
    templateUrl: './doctor-list.component.html',
    styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit {

    loaded = false;
    doctors: DoctorEntity[];

    constructor(private doctorProviderService:DoctorProviderService) {
        this.doctors = doctorProviderService.fetchedDoctors;
    }

    ngOnInit(): void {
        this.doctorProviderService.fetchedDoctors
        setTimeout(()=>{
            this.loaded=true
        },100)
    }

}
