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

    constructor(public authenticationService: AuthenticationService,
                private router:Router,
                private toastr: ToastrService,
    ) {
    }

    ngOnInit(): void {
    }

    logout() {
        this.authenticationService.logout();
    }
}
