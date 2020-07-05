import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
  selector: "app-product",
  template: ` <p>
    product works!
  </p>`,
  styleUrls: [],
})
export class ProductComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}
}
