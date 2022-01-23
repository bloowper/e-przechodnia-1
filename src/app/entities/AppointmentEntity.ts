import {DoctorAddress, DoctorEntity, MedicalServiceEntity} from "./DoctorEntity";
import {PatientEntity } from "./PatientEntity"
import {AppointmentStatus} from "./AppointmentStatus";

export interface AppointmentEntity{
    id:number|null
    doctorAddress:DoctorAddress|null
    doctor:DoctorEntity|null
    patient:PatientEntity|null
    date:Date|null
    status: AppointmentStatus|null
    medicalServiceEntity: MedicalServiceEntity|null
    paymentType: String|null
    recommendations: String|null
}

