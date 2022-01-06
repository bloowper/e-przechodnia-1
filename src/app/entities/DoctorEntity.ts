
//for represent doctor in list of doctors
export interface DoctorEntity {
    id:number,
    firstName:string,
    lastName:string,
    thumbnailImageUrl:string,
    briefDescription: string,
    addresses: DoctorAddress[];
    services: MedicalServiceEntity[]
}

export interface MedicalServiceEntity{
    name: string;
    price: number;
}

export interface DoctorAddress {
    type:AddressType
    information: string;
}

export enum AddressType {
    EVISIT,
    NORMAL
}
