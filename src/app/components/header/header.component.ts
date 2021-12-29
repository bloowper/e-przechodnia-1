import {Component, Input, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/authentication/authentication.service";
import {Authentication} from "../../entities/Authentication";
import {UserType} from "../../entities/UserType";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Input() websiteName: string | undefined;


    authenticationService: AuthenticationService

    constructor(authenticationService: AuthenticationService) {
        this.authenticationService = authenticationService;
    }

    ngOnInit(): void {
    }

    logout() {

        this.authenticationService.auth = new Authentication(null, UserType.NOT_LOGGED_ID, null, null);
    }
}
