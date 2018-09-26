import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-result",
  templateUrl: "./result.component.html",
  styleUrls: ["./result.component.scss"]
})
export class ResultComponent implements OnInit {
  constructor() {
    /* Hiding Billing Tab Element */
    document.getElementById("billingTab").style.display = "none";
  }

  ngOnInit() {}
}
