
//for represent visit in list of visits
import {AddressType} from "./DoctorEntity"; // DRY : don't repeat yourself

export interface VisitEntity {
    id:number
    date: Date[]
    time: Time[]
    addresses: VisitAddress[]
    services: MedicalServiceEntity[]
    doctorAssessments: DoctorAssessment[];
    patientAssessments: PatientAssessment[];
}

export interface Date{
    day: number;
    month: number;
    year: number;
}

export interface Time{
    hour: number;
    minute: number;
}

export interface MedicalServiceEntity{
    name: string;
    price: number;
}

export interface VisitAddress {
    type: AddressType
    address: string;
    moreInformation: string;
}

export interface DoctorAssessment {
    firstName: string
    lastName: string
}

export interface PatientAssessment {
    firstName: string
    lastName: string
}

