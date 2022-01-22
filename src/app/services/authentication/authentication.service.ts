import {Injectable, OnDestroy} from '@angular/core';
import {UserType} from "../../entities/UserType";
import {AuthEntity} from "../../entities/AuthEntity";
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService implements OnDestroy{

    mockUsers: mockUser[] = [
        {authority: UserType.DOCTOR, email: "doktor@example.com", password: "password", id: 1},
        {authority: UserType.PATIENT, email: "pacjent@example.com", password: "password", id: 2}
    ]

    private _auth: AuthEntity;

    private readonly local_storage_auth = 'auth';

    constructor() {
        var storageData = localStorage.getItem(this.local_storage_auth);
        if (storageData != null) {
            var parse = JSON.parse(storageData);
            this._auth = new AuthEntity(parse['token'], parse['authority'], parse['email'], parse['id']);
        } else {
            this._auth = new AuthEntity(null, UserType.NOT_LOGGED_ID, null, null);
        }
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


    login(email:string, password:string): Observable<AuthEntity> {
        return new Observable(subscriber => {
            this._auth = new AuthEntity(null, UserType.NOT_LOGGED_ID, null, null);
            setTimeout(()=>{
                var find:mockUser|undefined = this.mockUsers.find(value => value.email == email && value.password == password);
                if (find != undefined) {
                    console.log("AuthenticationService user found")
                    var authEntity = new AuthEntity("TOKEN",find.authority,find.email,find.id);
                    this.auth = authEntity;
                    subscriber.next(authEntity);
                    localStorage.setItem(this.local_storage_auth, JSON.stringify(authEntity));
                    subscriber.complete();
                } else {
                    console.log("AuthenticationService user not found")
                    subscriber.error("User not found")
                    subscriber.complete();
                }
            },250);
        });
    }

    ngOnDestroy(): void {
        console.log("AuthenticationService: destroy")
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
