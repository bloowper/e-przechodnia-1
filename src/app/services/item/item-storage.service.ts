import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {ItemPageable} from "../../entities/ItemPageableEntity";
import {BehaviorSubject, Subject} from "rxjs";
import {PageEvent} from '@angular/material/paginator';
import {ItemEntity} from "../../entities/ItemEntity";


@Injectable({
    providedIn: 'root'
})
export class ItemStorageService {

    public items$ = new BehaviorSubject<ItemPageable | undefined>(undefined);//Reactive for requested items
    public pageEvent$ = new BehaviorSubject<PageEvent | null>(null);//Event for new page request

    constructor(private httpClient: HttpClient) {
        this.pageEvent$.subscribe(event => {
                if (event) {
                    this.fetchItems(event.pageIndex, event.pageSize, null, null);
                }
            },
            error => {

            })
    }

    public fetchItems(page: number,
                      pageSize: number | null,
                      sortBy: string | null,
                      sortDirection: string | null
    ) {
        var params = new HttpParams();
        params = params.set("page", page);
        if (pageSize) {
            params = params.set("pageSize", pageSize);
        }
        if (sortBy) {
            params = params.set("sortBy", sortBy)
        }
        if (sortDirection) {
            params = params.set("sortDirection", sortDirection);
        }
        //TODO externalize API
        this.httpClient.get<ItemPageable>("http://localhost:8080/ecommerce/api/items",
            {
                params: params
            }).subscribe(
            value => {
                console.log(value)
                this.items$.next(value);
            },
            error => {
                console.log(error);
                this.items$.next(error);
            });
    }

    //TODO externalize API
    public fetchSingleItem(id: number){
        const httpParams = new HttpParams();
        httpParams.set("id", id);
        return this.httpClient.get<ItemEntity>("http://localhost:8080/ecommerce/api/item/"+id)
    }
}





