// Core Dependencies
import { FormsModule, FormBuilder } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA
} from "@angular/core";
import { CommonModule } from "@angular/common";

// Third Party Dependencies
import { AgmCoreModule } from "@agm/core";
import { NgxPaginationModule } from "ngx-pagination";

// Configuration and Services
import { UserRoutes } from "./user.routing";
import { UserService } from "./shared/user.service";

// Components
import { UserComponent } from "./user.component";
import { UserAccountComponent } from "./user-account/user-account.component";
import { UserFavouriteProductsComponent } from "./user-favourite-products/user-favourite-products.component";

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(UserRoutes),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDMbxW3MlwUP2vrAZVJyu7pYqZa1LthvTE"
    })
  ],
  declarations: [
    UserComponent,
    UserAccountComponent,
    UserFavouriteProductsComponent
  ],
  providers: [UserService, FormBuilder],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class UserModule {}
