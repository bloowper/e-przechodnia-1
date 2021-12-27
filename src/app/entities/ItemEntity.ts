
export class ItemEntity {

    constructor(public id: number,
                public title: string,
                public subTitle: string,
                public mainPhotoUrl: string,
                public shortDescription:string,
                public  description: string,
                public photos: string[]
    ) {
    }

}
