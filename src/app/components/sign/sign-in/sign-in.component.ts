import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthenticationService} from "../../../services/authentication/authentication.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit,OnDestroy {
    private subscription: Subscription|undefined;

    constructor(public authenticationService: AuthenticationService,private router:Router,private toastr: ToastrService) {

    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
    }


    onSubmit(form: NgForm) {
        this.authenticationService.login(form.value.email, form.value.password).subscribe(value => {
            console.log("SignInComponent login sucess")
            this.router.navigate(['/'])
            this.toastr.success("Poprawnie zalogowano użytkownika", "Logowanie")
        }, error => {
            console.log("SignInComponent login error")
            console.log("SignInComponent: " + error);
            this.toastr.error("Użytkownik o podanych danych logowania nie istnieje", "Logowanie")
        });
    }
}
