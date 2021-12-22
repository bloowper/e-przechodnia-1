
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

// @Id
// @GeneratedValue(generator = "UUID") private UUID uuid; @NotNull private String title; @NotNull private String
// subTitle;
//
// @NotNull
// private String mainPhotoUrl;
//
// @NotNull
// @Lob
// private String shortDescription;
//
// @NotNull
// @Lob
// private String description;
//
// @Singular
// @ElementCollection
// @CollectionTable(
//     name = "ITEM_PHOTO"
// )
// private List<String> photos;
