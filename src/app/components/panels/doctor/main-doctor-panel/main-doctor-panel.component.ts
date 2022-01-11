import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-doctor-panel',
  templateUrl: './main-doctor-panel.component.html',
  styleUrls: ['./main-doctor-panel.component.scss']
})
export class MainDoctorPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    visits: any[] = [
        {name: "22.03.2022    9:00   Pacjent: Katarzyna Liwo"},
        {name: "22.03.2022    9:30   Pacjent: Anna Kiljan"},
        {name: "22.03.2022   10:00   Pacjent: Patryk Bedzio"},
        {name: "22.03.2022   10:30   Pacjent: Iwo Szyld"},
        {name: "22.03.2022   11:00   Pacjent: Piotr Sudoku"},
        {name: "22.03.2022   11:30   Pacjent: Katarzyna Nogaj"},
    ]

}
