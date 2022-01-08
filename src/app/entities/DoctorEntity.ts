
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
}

export interface MedicalServiceEntity{
    name: string;
    price: number;
}

export interface DoctorAddress {
    type:AddressType
    address: string;
    moreInformation: string;
}

export enum AddressType {
    EVISIT,
    NORMAL
}
