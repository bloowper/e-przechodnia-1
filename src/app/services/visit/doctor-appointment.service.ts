import {Injectable} from '@angular/core';
import {AppointmentEntity} from "../../entities/AppointmentEntity";
import {Observable} from "rxjs";
import {DoctorProviderService} from "../search/doctor-provider.service";
import {AppointmentStatus} from "../../entities/AppointmentStatus";

@Injectable({
    providedIn: 'root'
})
export class DoctorAppointmentService {

    appointments: AppointmentEntity[] = []

    constructor(private doctorProviderService:DoctorProviderService) {

        this.appointments.push({
            id: 1,
            date: new Date("2022-02-01"),
            doctor: this.doctorProviderService.fetchedDoctors[0],
            doctorAddress: this.doctorProviderService.fetchedDoctors[0].addresses[0],
            status: AppointmentStatus.AWAITING,
            medicalServiceEntity: this.doctorProviderService.fetchedDoctors[0].services[0],
            paymentType: "przelew 24",
            recommendations: "Prosze przyjść 20 minut przed wizytą"
        })
        this.appointments.push({
            id: 1,
            date: new Date("2022-02-01"),
            doctor: this.doctorProviderService.fetchedDoctors[0],
            doctorAddress: this.doctorProviderService.fetchedDoctors[0].addresses[0],
            status: AppointmentStatus.AWAITING,
            medicalServiceEntity: this.doctorProviderService.fetchedDoctors[0].services[0],
            paymentType: "Blik",
            recommendations: "Proszę przygotować badnia krwi zlecone wcześniej"
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

    private getNewId() {
        let value = 0;
        for (let appointment of this.appointments) {
            if (appointment.id!=undefined &&  appointment.id >= value) {
                value = appointment.id;
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
}
