import {Injectable} from '@angular/core';
import {AppointmentEntity} from "../../entities/AppointmentEntity";
import {Observable} from "rxjs";
import {DoctorProviderService} from "../search/doctor-provider.service";
import {PatientProviderService} from "../search/patient-provider.service";
import {AppointmentStatus} from "../../entities/AppointmentStatus";
import {PrescriptionEntity} from "../../entities/PrescriptionEntity";
import {DoctorEntity} from "../../entities/DoctorEntity";
import {PatientEntity} from "../../entities/PatientEntity";
import {getLocaleDateFormat} from "@angular/common";

@Injectable({
    providedIn: 'root'
})
export class PrescriptionService {

    prescription: PrescriptionEntity[] = []

    constructor(private doctorProviderService:DoctorProviderService, private patientProviderService:PatientProviderService) {

        this.prescription.push({
            id: 1,
            code: 2222,
            doctor: this.doctorProviderService.fetchedDoctors[0],
            patient: this.patientProviderService.fetchedPatients[0],
            issuedDate: new Date("2022-01-25"),
            deadline: new Date("2023-01-25"),
            medicine: "Tardyferon FOL tabl.",
            recommendations: "Dwa razy dziennie, rano oraz wieczorem. Spożywać po posiłku, lek wchłania się najlepiej w obecności tłuszczów nasyconych.",
        })
    }


    getPrescription():Observable<PrescriptionEntity[]> {
        return new Observable<PrescriptionEntity[]>(subscriber => {
            setTimeout(()=>{
                subscriber.next(this.prescription);
                subscriber.complete();
            },750)
        })
    }

    private getNewId() {
        let value = 0;
        for (let prescription of this.prescription) {
            if (prescription.id!=undefined &&  prescription.id >= value) {
                value = prescription.id;
            }
        }
        return value++;
    }


    addPrescription(prescriptionEntity:PrescriptionEntity):number {
        var newId = this.getNewId();
        prescriptionEntity.id = newId;
        this.prescription.push(prescriptionEntity);
        return newId;
    }

}
