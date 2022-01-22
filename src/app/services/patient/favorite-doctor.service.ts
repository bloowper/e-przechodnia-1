import { Injectable } from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class FavoriteDoctorService {
    //TODO przepisać na observable(łatwiej podmienić mockowe listy na normalne api)

    favoriteDoctors = new Set<number>();

    constructor(private toastrService: ToastrService) {
        this.favoriteDoctors.add(1);//TODO remove this is only for testing
    }

    addToFavorite(id: number | undefined) {
        if (id != undefined) {
            this.favoriteDoctors.add(id);
            this.toastrService.success("Dodano lekarza do ulubionych znajdziesz go w 'Mój panel'","Dodano")
        }
        return true;
    }

    removeFromFavorite(id: number|undefined) {
        if (id != undefined) {
            var b = this.favoriteDoctors.delete(id);
            this.toastrService.success("Usunięto lekarza z ulubionych","Usunieto")
            return b;
        }
        return false;

    }

    isFavorite(id: number | undefined) {
        if (id != undefined) {
            var b = this.favoriteDoctors.has(id);

            return b;
        }
        return false;
    }


    getFavoriteDoctors() {
        return this.favoriteDoctors;
    }
}
