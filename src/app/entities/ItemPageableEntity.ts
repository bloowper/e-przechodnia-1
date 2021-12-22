import {ItemEntity} from "./ItemEntity";

export interface ItemPageable {
    content: Array<ItemEntity>,
    totalPages: number,
    totalElements: number,
    last: boolean,
    size: number,
    number: number,
    first: boolean,
    empty: boolean
}

export class ItemPageableEntity {

}


