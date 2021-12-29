import {Injectable} from '@angular/core';
import {UserType} from "../../entities/UserType";
import {Authentication} from "../../entities/Authentication";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {


    mockUsers: { authority: UserType, email: string, password: string, id: number }[] = [
        {authority: UserType.DOCTOR, email: "doktor@example.com", password: "password", id: 1},
        {authority: UserType.PATIENT, email: "pacjent@example.com", password: "password", id: 2}
    ]
    private _auth: Authentication;

    constructor() {
        this._auth = new Authentication(null, UserType.NOT_LOGGED_ID, null, null);
    }

    public isLoggedIn():boolean {
        return this._auth.isLoggedIn()
    }

    public isNotLoggedIn():boolean {
        return this._auth.isNotLoggedIn();
    }

    public isDoctor(): boolean {
        return this._auth.isDoctor();
    }

    public isPatient(): boolean {
        return this._auth.isPatient();
    }

    get auth(): Authentication {
        return this._auth;
    }

    set auth(value: Authentication) {
        this._auth = value;
    }
}
