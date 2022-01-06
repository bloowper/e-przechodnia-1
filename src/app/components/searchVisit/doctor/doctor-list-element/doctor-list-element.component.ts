import {Component, Input, OnInit} from '@angular/core';
import {AddressType, DoctorEntity, MedicalServiceEntity} from "../../../../entities/DoctorEntity";

@Component({
    selector: 'app-doctor-list-element',
    templateUrl: './doctor-list-element.component.html',
    styleUrls: ['./doctor-list-element.component.scss']
})
export class DoctorListElementComponent implements OnInit {

    medicalServiceColumns = ['name','price'];
    @Input() public doctorEntity: DoctorEntity;

    constructor() {
        this.doctorEntity = {
            id: 1,
            firstName: 'Roman',
            lastName: 'Nowak',
            thumbnailImageUrl: 'https://i.pinimg.com/564x/e3/69/d7/e369d7e313c8dc041f24958d5d36ff67.jpg',
            briefDescription: 'error qui hic libero assumenda id soluta autem esse dicta quia doloremque veritatis nemo illum accusamus in doloremque vel odio',
            addresses: [
                {type:AddressType.EVISIT,information:'Dokładne instrukcje zostaną przesłane przed wizytą. W przypadku chęci umówienia dokładnej drogi kontaktu prosze o sms 123 123 123'},
                {type:AddressType.NORMAL,information:'Lublin Zamkowa 32. Parter pokój 360 w srody i piatki'},
                {type:AddressType.NORMAL,information:'Lublin Zamkowa 32. Parter pokój 360 w srody i piatki'},
            ],
            services: [
                {name:"qui excepturi ",price: 125},
                {name:"eaque officiis",price: 125},
                {name:"tenetur nulla",price: 125},
                {name:"sint illum",price: 125}
            ]
        }
    }

    ngOnInit(): void {
    }

    isEvisit(type: AddressType) {
        return type === AddressType.EVISIT;
    }

    isNormalVisit(type: AddressType) {
        return type === AddressType.NORMAL;
    }
}


