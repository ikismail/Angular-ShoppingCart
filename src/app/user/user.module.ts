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

// Configuration and Services
import { UserRoutes } from "./user.routing";
import { UserService } from "./shared/user.service";

// Components
import { UserComponent } from "./user.component";
import { UserAccountComponent } from "./user-account/user-account.component";
import { UserLocateComponent } from "./user-locate/user-locate.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(UserRoutes),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDMbxW3MlwUP2vrAZVJyu7pYqZa1LthvTE"
    })
  ],
  declarations: [UserComponent, UserAccountComponent, UserLocateComponent],
  providers: [UserService, FormBuilder],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class UserModule {}
