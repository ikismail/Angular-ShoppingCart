import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireModule } from "angularfire2";

// Router Module
import { AppRouterModule } from "./app-router.module";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LoginFromComponent } from "./components/login-from/login-from.component";
import { ProductModule } from "./product-module/product-module.module";
import { PageNotFoundComponent } from './components/pageNotFound/pageNotFound.component';
import { FooterComponent } from './components/footer/footer.component';

// Configurations
import { FireBaseConfig } from "../environments/firebaseConfig";



@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent, LoginFromComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    ProductModule,
    AppRouterModule,
    MDBBootstrapModule.forRoot(),
    AngularFireModule.initializeApp(FireBaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
