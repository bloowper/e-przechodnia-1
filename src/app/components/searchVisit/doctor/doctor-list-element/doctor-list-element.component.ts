import {Component, Input, OnInit} from '@angular/core';
import {AddressType, DoctorEntity, MedicalServiceEntity} from "../../../../entities/DoctorEntity";
import {Router} from "@angular/router";
import {DoctorProviderService} from "../../../../services/search/doctor-provider.service";

@Component({
    selector: 'app-doctor-list-element',
    templateUrl: './doctor-list-element.component.html',
    styleUrls: ['./doctor-list-element.component.scss']
})
export class DoctorListElementComponent implements OnInit {

    medicalServiceColumns = ['name','price'];
    @Input() public doctorEntity: DoctorEntity | undefined;

    constructor(public router:Router,public doctorProviderService:DoctorProviderService) {
    }

    ngOnInit(): void {
    }

    isEvisit(type: AddressType) {
        return type === AddressType.EVISIT;
    }

    isNormalVisit(type: AddressType) {
        return type === AddressType.NORMAL;
    }

    redirect(id: number) {

        this.router.navigate(
            ['/visits','search','doctor'],
            {queryParams: {id:id}}
        )
    }
}


