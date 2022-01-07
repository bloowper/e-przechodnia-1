import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SessionMemoryService {

    private _homepagePopupShowed=false;

    constructor() {
    }


    get homepagePopupShowed(): boolean {
        return this._homepagePopupShowed;
    }

    set homepagePopupShowed(value: boolean) {
        this._homepagePopupShowed = value;
    }
}
