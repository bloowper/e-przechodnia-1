import { Component, OnInit } from '@angular/core';
import {FavoriteDoctorService} from "../../../../services/patient/favorite-doctor.service";
import {DoctorProviderService} from "../../../../services/search/doctor-provider.service";
import {DoctorEntity} from "../../../../entities/DoctorEntity";

@Component({
    selector: 'app-favorite-doctor-list',
    templateUrl: './favorite-doctor-list.component.html',
    styleUrls: ['./favorite-doctor-list.component.scss']
})
export class FavoriteDoctorListComponent implements OnInit {

    loaded = false;
    doctors: DoctorEntity[];

    constructor(private favoriteDoctorService: FavoriteDoctorService, private doctorProviderService: DoctorProviderService) {
        this.doctors = [];
    }

    ngOnInit(): void {
        var favoriteDoctors = this.favoriteDoctorService.getFavoriteDoctors();
        favoriteDoctors.forEach(value => {
            console.log(value);
        });
        this.doctorProviderService.getDoctorsById(favoriteDoctors).subscribe(doctorList=>{
            this.loaded = true;
            this.doctors = doctorList;
        },error => {

        });
    }

}
