import {DoctorAddress, DoctorEntity, MedicalServiceEntity} from "./DoctorEntity";
import {AppointmentStatus} from "./AppointmentStatus";

export interface AppointmentEntity{
    id:number|null
    doctorAddress:DoctorAddress|null
    doctor:DoctorEntity|null
    date:Date|null
    status: AppointmentStatus|null
    medicalServiceEntity: MedicalServiceEntity|null
    paymentType: String|null
    recommendations: String|null
}

