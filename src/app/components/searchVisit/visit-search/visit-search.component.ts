import {Component, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";

@Component({
    selector: 'app-visit-search',
    templateUrl: './visit-search.component.html',
    styleUrls: ['./visit-search.component.scss']
})
export class VisitSearchComponent implements OnInit {

    isPrivateVisit = false;
    isNfzVisit = false;
    isEVisit = false;
    isPersonal = false;

    constructor() {

    }

    ngOnInit(): void {

    }

    privateVisit(mb: MatButton) {
        // this.changeVisitProperties(mb, this.isPrivateVisit);
        this.isPrivateVisit = !this.isPrivateVisit;
        if (this.isPrivateVisit) {
            mb.color = 'primary';
        } else {
            mb.color = undefined;
        }
    }

    nonPrivateVisit(mb: MatButton) {
        this.isNfzVisit = !this.isNfzVisit;
        if (this.isNfzVisit) {
            mb.color = 'primary';
        } else {
            mb.color = undefined;
        }
    }

    eVisit(mb: MatButton) {
        this.isEVisit = !this.isEVisit;
        if (this.isEVisit) {
            mb.color = 'primary';
        } else {
            mb.color = undefined;
        }
    }

    personalVisit(mb: MatButton) {
        this.isPersonal = !this.isPersonal;
        if (this.isPersonal) {
            mb.color = 'primary';
        } else {
            mb.color = undefined;
        }
    }


    changeVisitProperties(mb:MatButton, b:boolean) {
        //TODO repair
        // how typescript pass references? can't change b value
        b = !b;
        if (b) {
            mb.color = 'primary';
        } else {
            mb.color = undefined;
        }
    }
}
