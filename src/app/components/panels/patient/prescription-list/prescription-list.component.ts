import { Component, OnInit } from '@angular/core';

interface medicine {
    name:String;
}

@Component({
  selector: 'app-prescription-list',
  templateUrl: './prescription-list.component.html',
  styleUrls: ['./prescription-list.component.scss']
})
export class PrescriptionListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


    medicines: any[] = [
        {name: "11.02.2019r. Tardyferon FOL tabl. 0,08g"},
        {name: "09.01.2019r. Tardyferon FOL tabl. 0,08g"},
        {name: "20.12.2018r. Flegamina tabl. 0,08g"},
        {name: "20.12.2018r. Octeangin past. 24szt. 0,025g"},
        {name: "06.07.2017r. Izotek kaps. 60szt. 0,02g"}
    ]
}
