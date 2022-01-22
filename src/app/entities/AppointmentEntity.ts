import {DoctorAddress, DoctorEntity, MedicalServiceEntity} from "./DoctorEntity";
import {AppointmentStatus} from "./AppointmentStatus";

export interface AppointmentEntity{
    id:number
    doctorAddress:DoctorAddress
    doctor:DoctorEntity
    date:Date
    status: AppointmentStatus
    medicalServiceEntity: MedicalServiceEntity
    paymentType: String,
    recommendations: String
}

