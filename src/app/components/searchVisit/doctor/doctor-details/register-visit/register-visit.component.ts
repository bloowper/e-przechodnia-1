import {Component, Input, OnInit} from '@angular/core';
import {DoctorProviderService} from "../../../../../services/search/doctor-provider.service";
import {MatDialog} from "@angular/material/dialog";
import {AddressType, DoctorAddress, DoctorEntity} from "../../../../../entities/DoctorEntity";
import {PatientEntity} from "../../../../../entities/PatientEntity";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {DoctorAppointmentService} from "../../../../../services/visit/doctor-appointment.service";
import {AppointmentStatus} from "../../../../../entities/AppointmentStatus";

@Component({
    selector: 'app-register-visit',
    templateUrl: './register-visit.component.html',
    styleUrls: ['./register-visit.component.scss']
})
export class RegisterVisitComponent implements OnInit {


    @Input() public doctorEntity!: DoctorEntity;
    @Input() public patientEntity!: PatientEntity;

    addressForm: FormGroup;
    dateForm: FormGroup;
    typeForm: FormGroup;
    paymentForm: FormGroup;

    constructor(public doctorProviderService: DoctorProviderService,
                private matDialog: MatDialog,
                private formBuilder: FormBuilder,
                private toastrService: ToastrService,
                private router: Router,
                private doctorAppointmentService:DoctorAppointmentService
    ) {

        this.addressForm = this.formBuilder.group(
            {
                addressId: [null],
                isOnline: [false]
            }
        );

        this.dateForm = this.formBuilder.group(
            {
                date: [null, Validators.required],
                hour: [null, Validators.required]
            }
        );

        this.typeForm = this.formBuilder.group({
            serviceId: [null, Validators.required]
        })

        this.paymentForm = this.formBuilder.group({
            paymentType: [null, Validators.required]
        })
    }

    ngOnInit(): void {

    }

    submitAllForm() {
        this.toastrService.success("Zarejestrowałeś się na wizytę","Sukces")
        this.doctorAppointmentService.addAppointment({
            id:null,
            paymentType:this.paymentForm.value.paymentType,
            date:this.dateForm.value.date,
            doctorAddress:this.doctorEntity.addresses[this.addressForm.value.addressId-1],
            patient: this.patientEntity,
            recommendations:null,
            medicalServiceEntity:this.doctorEntity.services[this.typeForm.value.serviceId-1],
            doctor: this.doctorEntity,
            status: AppointmentStatus.AWAITING
        })
        this.router.navigate(['/patientPanel/visits'], {
            queryParams: {newid: 2}
        });
    }

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
    }


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

    submitPayment() {
        console.log(this.paymentForm.value);
        this.submitAllForm();
    }

}
