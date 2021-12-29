import {Injectable} from '@angular/core';
import {UserType} from "../../entities/UserType";
import {AuthEntity} from "../../entities/AuthEntity";
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    mockUsers: mockUser[] = [
        {authority: UserType.DOCTOR, email: "doktor@example.com", password: "password", id: 1},
        {authority: UserType.PATIENT, email: "pacjent@example.com", password: "password", id: 2}
    ]

    public authObservable$ = new BehaviorSubject<AuthEntity|null>(null);
    private _auth: AuthEntity;

    constructor() {
        this._auth = new AuthEntity(null, UserType.NOT_LOGGED_ID, null, null);
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

    get auth(): AuthEntity {
        return this._auth;
    }

    set auth(value: AuthEntity) {
        this._auth = value;
    }


    login(email: string, password: string) {
        console.log(`email ${email} password ${password}`)
        var find:mockUser|undefined = this.mockUsers.find(value => value.email == email);
        if (find != undefined && find.password === password) {
            this.authObservable$.next(new AuthEntity("TOKEN", find.authority, find.email, find.id));
        } else {
            this.authObservable$.error(new Error("Nieprawidłowe dane"))
        }
    }
}

class mockUser{
    authority: UserType;
    email: string;
    password: string;
    id: number;


    constructor(authority: UserType, email: string, password: string, id: number) {
        this.authority = authority;
        this.email = email;
        this.password = password;
        this.id = id;
    }
}
