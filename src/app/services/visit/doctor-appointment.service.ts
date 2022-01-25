import {Injectable} from '@angular/core';
import {AppointmentEntity} from "../../entities/AppointmentEntity";
import {Observable} from "rxjs";
import {DoctorProviderService} from "../search/doctor-provider.service";
import {PatientProviderService} from "../search/patient-provider.service";
import {AppointmentStatus} from "../../entities/AppointmentStatus";

@Injectable({
    providedIn: 'root'
})
export class DoctorAppointmentService {

    appointments: AppointmentEntity[] = []
    historyAppointments: AppointmentEntity[] = []

    constructor(private doctorProviderService:DoctorProviderService, private patientProviderService:PatientProviderService) {

        this.appointments.push({
            id: 1,
            date: new Date("2022-02-01"),
            doctor: this.doctorProviderService.fetchedDoctors[0],
            doctorAddress: this.doctorProviderService.fetchedDoctors[0].addresses[0],
            patient: this.patientProviderService.fetchedPatients[0],
            status: AppointmentStatus.AWAITING,
            medicalServiceEntity: this.doctorProviderService.fetchedDoctors[0].services[0],
            paymentType: "przelew 24",
            recommendations: "Prosze przyjść 20 minut przed wizytą"
        })
        this.appointments.push({
            id: 2,
            date: new Date("2022-02-01"),
            doctor: this.doctorProviderService.fetchedDoctors[0],
            doctorAddress: this.doctorProviderService.fetchedDoctors[0].addresses[0],
            patient: this.patientProviderService.fetchedPatients[0],
            status: AppointmentStatus.AWAITING,
            medicalServiceEntity: this.doctorProviderService.fetchedDoctors[0].services[0],
            paymentType: "Blik",
            recommendations: "Proszę przygotować badnia krwi zlecone wcześniej"
        })
        this.historyAppointments.push({
            id: 1,
            date: new Date("2021-12-07"),
            doctor: this.doctorProviderService.fetchedDoctors[0],
            doctorAddress: this.doctorProviderService.fetchedDoctors[0].addresses[0],
            patient: this.patientProviderService.fetchedPatients[0],
            status: AppointmentStatus.COMPLETED,
            medicalServiceEntity: this.doctorProviderService.fetchedDoctors[0].services[0],
            paymentType: "NFZ",
            recommendations: "Prosze przyjść na czczo"
        })
        this.historyAppointments.push({
            id: 2,
            date: new Date("2021-09-15"),
            doctor: this.doctorProviderService.fetchedDoctors[0],
            doctorAddress: this.doctorProviderService.fetchedDoctors[0].addresses[0],
            patient: this.patientProviderService.fetchedPatients[0],
            status: AppointmentStatus.COMPLETED,
            medicalServiceEntity: this.doctorProviderService.fetchedDoctors[0].services[0],
            paymentType: "przelew 24",
            recommendations: "Proszę przyjść bez soczewek"
        })
        this.historyAppointments.push({
            id: 3,
            date: new Date("2021-08-17"),
            doctor: this.doctorProviderService.fetchedDoctors[0],
            doctorAddress: this.doctorProviderService.fetchedDoctors[0].addresses[0],
            patient: this.patientProviderService.fetchedPatients[0],
            status: AppointmentStatus.COMPLETED,
            medicalServiceEntity: this.doctorProviderService.fetchedDoctors[0].services[0],
            paymentType: "przelew 24",
            recommendations: "Proszę przyjść 10min wcześniej"
        })
    }


    getAppointments():Observable<AppointmentEntity[]> {
        return new Observable<AppointmentEntity[]>(subscriber => {
            setTimeout(()=>{
                subscriber.next(this.appointments);
                subscriber.complete();
            },750)
        })
    }

    getHistoryAppointments():Observable<AppointmentEntity[]> {
        return new Observable<AppointmentEntity[]>(subscriber => {
            setTimeout(()=>{
                subscriber.next(this.historyAppointments);
                subscriber.complete();
            },750)
        })
    }

    private getNewId() {
        let value = 0;
        for (let appointment of this.appointments) {
            if (appointment.id!=undefined &&  appointment.id >= value) {
                value = appointment.id;
            }
        }
        return value++;
    }

    private getNewHistoryId() {
        let value = 0;
        for (let historyAppointment of this.historyAppointments) {
            if (historyAppointment.id!=undefined &&  historyAppointment.id >= value) {
                value = historyAppointment.id;
            }
        }
        return value++;
    }

    addAppointment(appointmentEntity:AppointmentEntity):number {
        var newId = this.getNewId();
        appointmentEntity.id = newId;
        this.appointments.push(appointmentEntity);
        return newId;
    }

    addHistoryAppointment(appointmentEntity:AppointmentEntity):number {
        var newId = this.getNewId();
        appointmentEntity.id = newId;
        this.historyAppointments.push(appointmentEntity);
        return newId;
    }
}
