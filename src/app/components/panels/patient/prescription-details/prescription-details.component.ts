import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-prescription-details',
  templateUrl: './prescription-details.component.html',
  styleUrls: ['./prescription-details.component.scss']
})
export class PrescriptionDetailsComponent implements OnInit {

    public id: any;
    constructor(private route:ActivatedRoute) { }

    ngOnInit(): void {
        this.id = this.route.snapshot.paramMap.get('id');

    }

    public receipts: any[]= [
        {title: "Tardyferon FOL tabl.", number: 28034, date: "11.02.2019r.", dose: "Dwa razy dziennie, rano oraz wieczorem. Spożywać po posiłku, lek wchłania się najlepiej w obecności tłuszczów nasyconych."},
        {title: "Tardyferon FOL tabl.", number: 24066, date: "09.01.2019r.", dose: "Dwa razy dziennie, rano oraz wieczorem. Spożywać po posiłku, lek wchłania się najlepiej w obecności tłuszczów nasyconych."},
        {title: "Flegamina tabl.", number: 15032, date: "20.12.2018r.", dose: "Pół tabletki, dwa razy na dobę."},
        {title: "Octeangin past.", number: 15031, date:"20.12.2018r.", dose: "Jedną pastylkę twardą rozpuścić w jamie ustej co 2-3 godziny."},
        {title: "Izotek kaps.", number: 12066, date:"06.07.2017r.", dose: "Dwie kapsułki dziennie rano i wieczorem, stosować po posiłku."}
    ]

}
