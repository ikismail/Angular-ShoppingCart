import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-no-products-found",
  templateUrl: "./no-products-found.component.html",
  styleUrls: ["./no-products-found.component.scss"]
})
export class NoProductsFoundComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input("title") title: String;
  // tslint:disable-next-line:no-input-rename
  @Input("description") description: String;
  constructor() {}

  ngOnInit() {}
}
