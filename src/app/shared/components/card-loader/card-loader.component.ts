import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-card-loader",
  templateUrl: "./card-loader.component.html",
  styleUrls: ["./card-loader.component.scss"]
})
export class CardLoaderComponent implements OnInit {
  @Input() loop: number;
  @Input() height: number;

  constructor() {}

  ngOnInit() {}

  arrayOne(n: number): any[] {
    return Array(n);
  }
}
