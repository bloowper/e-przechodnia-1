/*To represent CURRENTLY USER OF APPLICATION
NOT TO LIST OTHER USERS*/
import {UserType} from "./UserType";

export class AuthEntity {

  constructor(
    public token:string|null,
    public authority:UserType,
    public email:string|null,
    public id:number|null,
  ) {}

  public isLoggedIn():boolean {
    return this.authority != UserType.NOT_LOGGED_ID;
  }

  public isNotLoggedIn():boolean {
    return !this.isLoggedIn();
  }

  public isDoctor(): boolean {
    return this.authority == UserType.DOCTOR;
  }

  public isPatient(): boolean {
    return this.authority == UserType.PATIENT;
  }

}

