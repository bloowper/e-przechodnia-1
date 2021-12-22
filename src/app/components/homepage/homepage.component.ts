import {Component, OnInit} from '@angular/core';
import {ItemStorageService} from "../../services/item/item-storage.service";

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

    constructor(private itemStorageServiceService: ItemStorageService) {
    }

    ngOnInit(): void {
    }

    onTest() {
        this.itemStorageServiceService.fetchItems(0, 16, null, null);
    }
}
