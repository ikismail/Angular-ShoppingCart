// Core Dependencies
import { RouterModule } from "@angular/router";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

// Third Party Dependencies
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireModule } from "angularfire2";
import { ToastyModule } from "ng2-toasty";
import { MDBBootstrapModule } from "angular-bootstrap-md";

// Configurations
import { IndexRoutes } from "./index.routing";
import { FireBaseConfig } from "../../environments/firebaseConfig";

// Child Modules
import { ProductModule } from "./../product/product.module";
import { UserModule } from "../user/user.module";

// Components
import { IndexComponent } from "./index.component";
import { LoginComponent } from "./login/login.component";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { NoAccessComponent } from "./no-access/no-access.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

// Services and Gaurds
import { AdminGaurd } from "./shared/admin-gaurd";
import { AuthGuard } from "./shared/auth_gaurd";
import { AuthService } from "./shared/auth.service";
import { LocalFavouritePageComponent } from "./local-favourite-page/local-favourite-page.component";

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
    FooterComponent,
    NoAccessComponent,
    PageNotFoundComponent,
    LocalFavouritePageComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [NavbarComponent, FooterComponent],
  providers: [AuthService, AuthGuard, AdminGaurd]
})
export class IndexModule {}
