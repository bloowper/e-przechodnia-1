import {Component, OnInit} from '@angular/core';
import {ItemStorageService} from "../../services/item/item-storage.service";
import {AuthenticationService} from "../../services/authentication/authentication.service";

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

    constructor(public authenticationService: AuthenticationService) {
    }

    ngOnInit(): void {
    }

    onTest() {

    }
}
