import {Injectable} from '@angular/core';
import {PatientEntity} from "../../entities/PatientEntity";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PatientProviderService {

    fetchedPatients: PatientEntity[]

    constructor() {
        this.fetchedPatients = [
            {
                id: 1,
                nick: "Eliqu",
                firstName: 'Anna',
                lastName: 'Nowak',
                age: 25,
                thumbnailImageUrl: 'https://i.pinimg.com/564x/e3/69/d7/e369d7e313c8dc041f24958d5d36ff67.jpg'
            }
        ]
    }

    getPatient(patientId: number): Observable<PatientEntity> {
        //mock fetch method, acth like request
        return new Observable(subscriber => {
            var patientEntity = this.fetchedPatients.find(value => value.id === patientId);
            setTimeout(() => {
                if (patientEntity != null) {
                    subscriber.next(patientEntity);
                } else {
                    subscriber.error(new Error(`Nie znaleziono pacjenta o podanym id = ${patientId}`))
                }
            }, 500);
        })
    }

}
