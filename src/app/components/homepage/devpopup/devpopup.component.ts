import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";


@Component({
  selector: 'app-devpopup',
  templateUrl: './devpopup.component.html',
  styleUrls: ['./devpopup.component.scss']
})
export class DevpopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DevpopupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
