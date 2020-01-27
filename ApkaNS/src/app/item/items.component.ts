import { Component, OnInit } from "@angular/core";
import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html",
    styleUrls: ["./items.component.css"]
})

export class ItemsComponent implements OnInit {
    imie: String;

    constructor(private itemService: ItemService, page: Page) { 
        page.actionBarHidden = true;
    } 

    ngOnInit(): void {
        this.imie = "Szymon";
    }

    onTap(event) {
        this.imie = "Damian";
    }
}


