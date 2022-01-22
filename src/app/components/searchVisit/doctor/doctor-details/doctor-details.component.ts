import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {DoctorEntity} from "../../../../entities/DoctorEntity";
import {DoctorProviderService} from "../../../../services/search/doctor-provider.service";
import {MatDialog} from "@angular/material/dialog";
import {PopupComponent} from "../../../shared/popup/popup.component";
import {Subscription} from "rxjs";
import {FavoriteDoctorService} from "../../../../services/patient/favorite-doctor.service";
import {ToastrService} from "ngx-toastr";

@Component({
    selector: 'app-doctor-details',
    templateUrl: './doctor-details.component.html',
    styleUrls: ['./doctor-details.component.scss']
})
export class DoctorDetailsComponent implements OnInit, OnDestroy {

    loaded = false;
    // @ts-ignore
    public doctorEntity: DoctorEntity;
    public medicalServiceColumns = ['name', 'price'];
    private queryParamsSubscription: Subscription | undefined;

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router,
                public doctorProviderService: DoctorProviderService,
                private matDialog: MatDialog,
                public favoriteDoctorService: FavoriteDoctorService,
                private toastr: ToastrService
    ) {

    }

    ngOnInit(): void {
        this.queryParamsSubscription = this.activatedRoute.queryParams.subscribe((params: Params) => {
            this.loaded = false;
            var doctorId = Number(params['id']);
            if (doctorId === undefined) {
                this.router.navigate(['/notfound'])
            } else {
                this.doctorProviderService.getDoctor(doctorId).subscribe(
                    value => {
                        this.doctorEntity = value;
                        console.table(value);
                        this.loaded = true;
                    },
                    error => {
                        this.router.navigate(['/notfound'])
                    });
            }
        });
    }

    ngOnDestroy(): void {
        this.queryParamsSubscription?.unsubscribe();
    }


    addToFavorites() {
        this.favoriteDoctorService.addToFavorite(this.doctorEntity.id);
    }

    removeFromFavorites() {
        this.favoriteDoctorService.removeFromFavorite(this.doctorEntity.id);
    }
}
