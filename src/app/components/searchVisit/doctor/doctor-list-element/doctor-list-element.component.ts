import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-doctor-list-element',
    templateUrl: './doctor-list-element.component.html',
    styleUrls: ['./doctor-list-element.component.scss']
})
export class DoctorListElementComponent implements OnInit {

    medicalService: MedicalServiceEntity[] = [
        {name:"qui excepturi ",price: 125},
        {name:"eaque officiis",price: 125},
        {name:"tenetur nulla",price: 125},
        {name:"sint illum",price: 125}
    ];
    medicalServiceColumns = ['name','price'];

    constructor() {

    }

    ngOnInit(): void {
    }

}

interface MedicalServiceEntity{
    name: string;
    price: number;
}
