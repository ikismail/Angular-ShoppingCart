import { ProductModule } from "./../product/product.module";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IndexComponent } from "./index.component";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { LoginComponent } from "./login/login.component";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
  imports: [CommonModule, MDBBootstrapModule.forRoot(), ProductModule],
  declarations: [
    IndexComponent,
    NavbarComponent,
    LoginComponent,
    FooterComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [NavbarComponent, FooterComponent]
})
export class IndexModule {}
