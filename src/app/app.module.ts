// Core Dependencies
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

// Modules
import { UserModule } from "./user/user.module";
import { ProductModule } from "./product/product.module";
import { IndexModule } from "./index/index.module";
import { LoaderSpinnerModule } from "./modules/loader-spinner/loader-spinner";

// Configurations
import { AppRoutes } from "./app.routing";

// Components
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IndexModule,
    ProductModule,
    UserModule,
    LoaderSpinnerModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
