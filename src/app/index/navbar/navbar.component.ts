import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../shared/services/auth.service";
import { ProductService } from "../../shared/services/product.service";
import { TranslateService } from "../../shared/services/translate.service";
declare var $: any;

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  constructor(
    public authService: AuthService,
    private router: Router,
    public productService: ProductService,
    public translate: TranslateService
  ) {
    console.log(translate.data);
  }

  ngOnInit() {}
  logout() {
    this.authService.logout();
    this.router.navigate(["/"]);
  }

  setLang(lang: string) {
    console.log("Language", lang);
    this.translate.use(lang).then(() => {});
  }
}
