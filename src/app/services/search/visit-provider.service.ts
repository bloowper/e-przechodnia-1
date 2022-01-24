import {Injectable} from '@angular/core';
import {AddressType, VisitEntity} from "../../entities/VisitEntity";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class VisitProviderService {

    fetchedVisits: VisitEntity[]

    constructor() {
        this.fetchedVisits = [
            {
                id: 1,
                date: [
                    {day: 12, month: 10, year: 2022}
                ],
                time: [
                    {hour: 15, minute: 30}
                ],
                addresses: [
                    {type: AddressType.NORMAL, moreInformation:'Parter pokój 360 w srody i piatki. Dostepny parking przed budynkiem.', address: 'Lublin Zamkowa 32'}
                ],
                services: [
                    {name: "Kolejna wizyta ", price: 125}
                ],
                doctorAssessments:[
                    {firstName: "Elżbieta", lastName: "Kowalska"}
                ],
                patientAssessments:[
                    {firstName: "Anna", lastName: "Nowak"}
                ]

            }
        ]
    }

    getVisit(visitId: number): Observable<VisitEntity> {
        //mock fetch moethod, acth like request
        return new Observable(subscriber => {
            var visitEntity = this.fetchedVisits.find(value => value.id === visitId);
            setTimeout(() => {
                if (visitEntity != null) {
                    subscriber.next(visitEntity);
                } else {
                    subscriber.error(new Error(`Nie znaleziono wizyty o podanym id = ${visitId}`))
                }
            }, 500);
        })
    }

    isNormalVisit(addressType:AddressType):boolean {
        if (addressType === AddressType.NORMAL) {
            return true;
        } else {
            return false;
        }
    }

}
