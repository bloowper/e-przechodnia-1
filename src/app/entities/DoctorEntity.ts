
//for represent doctor in list of doctors
export interface DoctorEntity {
    id:number
    firstName:string
    lastName:string
    thumbnailImageUrl:string
    briefDescription: string
    description: string
    addresses: DoctorAddress[]
    services: MedicalServiceEntity[]
    specialties: String[]
    education:String[]
    treatedDiseases:String[]
    patientAssessments: PatientAssessment[];
}

export interface MedicalServiceEntity{
    id: number;
    name: string;
    price: number;
}

export interface DoctorAddress {
    id: number,
    type:AddressType
    address: string;
    moreInformation: string;
}

export interface PatientAssessment {
    id: number
    rating:number
    patientNick:string
    content:string
}

export enum AddressType {
    EVISIT,
    NORMAL
}
