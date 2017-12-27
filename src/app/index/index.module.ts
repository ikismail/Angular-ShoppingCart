import { AdminGaurd } from "./shared/admin-gaurd";
import { AuthGuard } from "./shared/auth_gaurd";
import { AuthServiceService } from "./shared/auth.service";
import { IndexRoutes } from "./index.routing";
import { RouterModule } from "@angular/router";
import { ProductModule } from "./../product/product.module";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireModule } from "angularfire2";

import { IndexComponent } from "./index.component";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { LoginComponent } from "./login/login.component";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FireBaseConfig } from "../../environments/firebaseConfig";
import { ToastyModule } from "ng2-toasty";
import { UserModule } from "../user/user.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    UserModule,
    MDBBootstrapModule.forRoot(),
    ProductModule,
    AngularFireModule.initializeApp(FireBaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ToastyModule.forRoot(),
    RouterModule.forChild(IndexRoutes)
  ],
  declarations: [
    IndexComponent,
    NavbarComponent,
    LoginComponent,
    FooterComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [NavbarComponent, FooterComponent],
  providers: [AuthServiceService, AuthGuard, AdminGaurd]
})
export class IndexModule {}
