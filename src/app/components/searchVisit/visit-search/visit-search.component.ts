import {Component, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
    selector: 'app-visit-search',
    templateUrl: './visit-search.component.html',
    styleUrls: ['./visit-search.component.scss']
})
export class VisitSearchComponent implements OnInit {

    isFormValid = true;

    isPrivateVisit = false;
    isNfzVisit = false;
    isEVisit = false;
    isFaceToFace = false;

    searchParms: FormGroup;

    constructor(private router:Router,private formBuilder:FormBuilder) {
        this.searchParms = this.formBuilder.group({
            city: [null,Validators.required],
            specialty : [null,Validators.required]
        })
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
        this.isFaceToFace = !this.isFaceToFace;
        if (this.isFaceToFace) {
            mb.color = 'primary';
        } else {
            mb.color = undefined;
        }
    }



    isValid() {
        if (
            (!this.searchParms.invalid) &&
            (this.isPrivateVisit || this.isNfzVisit) &&
            (this.isEVisit || this.isFaceToFace)
        ) {
            return true;
        }
        return false;
    }

    private getLocationTypes(): String[] {
        let toreturn:String[] = [];
        if (this.isEVisit) {
            toreturn.push("online")
        }
        if (this.isFaceToFace) {
            toreturn.push("face_to_face")
        }
        return toreturn;
    }

    private getVisitTypes() {
        let toreturn: String[] = [];
        if (this.isPrivateVisit) {
            toreturn.push("private")
        }
        if (this.isNfzVisit) {
            toreturn.push("nfz")
        }
        return toreturn;
    }

    onSubmit() {
        this.router.navigate(['/','visits','search'],
            {
                queryParams:{
                    pageNo: 1,
                    pageSize: 5,
                    location: this.getLocationTypes().join(","),
                    type: this.getVisitTypes().join(",")
                }
            })
    }
}
