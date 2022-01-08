import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ItemStorageService} from "../../services/item/item-storage.service";
import {AuthenticationService} from "../../services/authentication/authentication.service";
import {MatDialog} from "@angular/material/dialog";
import {DevpopupComponent} from "./devpopup/devpopup.component";
import {SessionMemoryService} from "../../services/utils/session-memory.service";

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, AfterViewInit {

    constructor(public authenticationService: AuthenticationService, private matDialog: MatDialog,private memoryService:SessionMemoryService) {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        if (!this.memoryService.homepagePopupShowed) {
            this.matDialog.open(DevpopupComponent,
                {
                    width: '400px',
                    data:{
                        test: 'testing testing'
                    }
                });
            this.memoryService.homepagePopupShowed = true;
        }
    }


    onTest() {
    }
}
