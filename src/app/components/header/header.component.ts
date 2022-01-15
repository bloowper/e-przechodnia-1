import {Component, Input, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/authentication/authentication.service";
import {AuthEntity} from "../../entities/AuthEntity";
import {UserType} from "../../entities/UserType";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Input() websiteName: string | undefined;


    authenticationService: AuthenticationService

    constructor(authenticationService: AuthenticationService,private router:Router,private toastr: ToastrService) {
        this.authenticationService = authenticationService;
    }

    ngOnInit(): void {
    }

    logout() {
        this.authenticationService.auth = new AuthEntity(null, UserType.NOT_LOGGED_ID, null, null);
        this.router.navigate(['/'])
        this.toastr.success("Poprawnie wylogowano użytkownika","Wylogowanie")
    }
}
