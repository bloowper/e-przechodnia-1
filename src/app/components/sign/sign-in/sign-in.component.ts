import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../../services/authentication/authentication.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

    error: boolean = false;

    constructor(public authenticationService: AuthenticationService,private router:Router) {

    }

    ngOnInit(): void {
    }

    onSubmit(form: NgForm) {
        this.authenticationService.login(form.value.email,form.value.password)
        this.authenticationService.authObservable$.subscribe(value => {
            console.log("Login success on submit")
            if (value != null) {
                this.router.navigate(['/'])
            }
        }, error => {
            console.log(`Error while submit login ${error}`)
            error = true;
        });
    }
}
