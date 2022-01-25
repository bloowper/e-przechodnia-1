import {PatientEntity} from "./PatientEntity";
import {DoctorEntity} from "./DoctorEntity";

export interface PrescriptionEntity {
    id: number|null
    code: number
    doctor:DoctorEntity|null
    patient:PatientEntity|null
    issuedDate:Date|null
    deadline:Date|null
    medicine: string
    recommendations: string;
}
