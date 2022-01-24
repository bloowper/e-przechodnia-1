import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {PatientProviderService} from "../../../../../services/search/patient-provider.service";
import {MatDialog} from "@angular/material/dialog";
import {PatientEntity} from "../../../../../entities/PatientEntity";

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit, OnDestroy {

    loaded = false;
    // @ts-ignore
    public patientEntity: PatientEntity;
    private queryParamsSubscription: Subscription | undefined;

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router,
                public patientProviderService: PatientProviderService,
                private matDialog: MatDialog,
    ) {

    }

    ngOnInit(): void {
        this.queryParamsSubscription = this.activatedRoute.queryParams.subscribe((params: Params) => {
            this.loaded = false;
            var patientId = Number(params['id']);
            if (patientId === undefined) {
                this.router.navigate(['/notfound'])
            } else {
                this.patientProviderService.getPatient(patientId).subscribe(
                    value => {
                        this.patientEntity = value;
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
}

