// Core Dependencies
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

// Configurations
import { AppRoutes } from "./app.routing";

// Components
import { AppComponent } from "./app.component";
import { LoaderSpinnerModule } from "./shared/loader-spinner/loader-spinner";
import { SharedModule } from "./shared/shared.module";
import { IndexModule } from "./index/index.module";
import { UserModule } from "./user/user.module";
import { ProductModule } from "./product/product.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IndexModule,
    ProductModule,
    UserModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
