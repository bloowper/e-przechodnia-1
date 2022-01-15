import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {DoctorEntity} from "../../../../entities/DoctorEntity";
import {DoctorProviderService} from "../../../../services/search/doctor-provider.service";
import {MatDialog} from "@angular/material/dialog";
import {PopupComponent} from "../../../shared/popup/popup.component";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-doctor-details',
    templateUrl: './doctor-details.component.html',
    styleUrls: ['./doctor-details.component.scss']
})
export class DoctorDetailsComponent implements OnInit,OnDestroy {

    loaded = false;
    // @ts-ignore
    public doctorEntity: DoctorEntity ;
    public doctorInFavorite = false;
    public medicalServiceColumns = ['name','price'];
    private queryParamsSubscription: Subscription | undefined;

    constructor(private activatedRoute: ActivatedRoute,private router:Router, public doctorProviderService: DoctorProviderService,private matDialog: MatDialog) {
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
        this.matDialog.open(PopupComponent,
            {
                width: '400px',
                data:{
                    title: 'Udało się',
                    content: 'Dodano lekarza do ulubionych, znajdziesz go na liście w twoim panelu użytkownika'
                }
            });
        this.doctorInFavorite = true;
    }

    removeFromFavorites() {
        this.doctorInFavorite = false;
    }
}
