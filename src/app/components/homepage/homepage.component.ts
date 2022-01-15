import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ItemStorageService} from "../../services/item/item-storage.service";
import {AuthenticationService} from "../../services/authentication/authentication.service";
import {MatDialog} from "@angular/material/dialog";
import {DevpopupComponent} from "./devpopup/devpopup.component";
import {SessionMemoryService} from "../../services/utils/session-memory.service";
import {PopupComponent} from "../shared/popup/popup.component";

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
            this.matDialog.open(PopupComponent,
                {
                    width: '400px',
                    data:{
                        title: 'Early-development',
                        content: 'Strona nie jest responsywna. Prosimy o nie odświeżanie  strony, nie korzystamy z backendu tylko lokalnego storagu ktory zostanie rowniez zresetowany w przypadku odświeżenia (f5)'
                    }
                });
            this.memoryService.homepagePopupShowed = true;
        }
    }


    onTest() {
    }
}
