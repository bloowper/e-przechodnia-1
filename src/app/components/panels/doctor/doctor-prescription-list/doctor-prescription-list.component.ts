import {Component, Input, OnInit} from '@angular/core';
import {DoctorProviderService} from "../../../../services/search/doctor-provider.service";
import {PatientProviderService} from "../../../../services/search/patient-provider.service";
import {PrescriptionService} from "../../../../services/doctor/prescription.service";
import {MatDialog} from "@angular/material/dialog";
import {DoctorEntity} from "../../../../entities/DoctorEntity";
import {PatientEntity} from "../../../../entities/PatientEntity";
import {PrescriptionEntity} from "../../../../entities/PrescriptionEntity";
import {Form, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-doctor-prescription-list',
  templateUrl: './doctor-prescription-list.component.html',
  styleUrls: ['./doctor-prescription-list.component.scss']
})
export class DoctorPrescriptionListComponent implements OnInit {


    @Input() public doctorEntity!: DoctorEntity;
    @Input() public patientEntity!: PatientEntity;
    @Input() public prescriptionEntity!: PrescriptionEntity;


    patientForm: FormGroup
    medicineForm: FormGroup;
    recomendationsForm: FormGroup;

    constructor(public doctorProviderService: DoctorProviderService,
                public prescriptionService: PrescriptionService,
                private matDialog: MatDialog,
                private formBuilder: FormBuilder,
                private toastrService: ToastrService,
                private router: Router,
    ) {

        this.patientForm = this.formBuilder.group(
            {
                patient: [null, Validators.required],
            }
        );

        this.medicineForm = this.formBuilder.group(
            {
                medicine: [toString, Validators.nullValidator]
            }
        );

        this.recomendationsForm = this.formBuilder.group(
            {
                recomendations: [toString, Validators.nullValidator]
            }
        );
    }

    ngOnInit(): void {

    }

    submitAllForm() {
        this.toastrService.success("Recepta została wypisana","Sukces")
        this.prescriptionService.addPrescription({
            id: null,
            code: 5555,
            doctor: this.doctorEntity,
            patient: this.patientEntity,
            issuedDate: this.prescriptionEntity.issuedDate,
            deadline: this.prescriptionEntity.deadline,
            medicine: this.prescriptionEntity.medicine[this.medicineForm.value.medicine-1],
            recommendations: this.prescriptionEntity.recommendations[this.recomendationsForm.value.recommendations-1],
        })
        this.router.navigate(['/patientPanel/visits'], {
            queryParams: {newid: 2}
        });
    }
/*
    disableAddressSubmit() {
        if (this.addressForm.value.addressId != null) {
            console.log("1")
            return false;
        }
        if (this.addressForm.value.address == null && !this.addressForm.value.isOnline) {
            console.log("2")
            return true;
        }
        console.log("3");
        return false;
    }*/
/*

    getPysicalAdress() :DoctorAddress[]{
        let toreturn: DoctorAddress[] = [];
        this.doctorEntity?.addresses.forEach(value => {
            if (value.type == AddressType.NORMAL) {
                toreturn.push(value);
            }
        })
        return toreturn;
    }

    submitAddress() {
        console.log(this.addressForm.value);
    }

    submitData() {
        console.log(this.dateForm.value)
    }


    submitType() {
        console.log(this.typeForm.value);
    }
*/
    submitPatient() {
        console.log(this.patientForm.value);
        this.submitAllForm();
    }



}
