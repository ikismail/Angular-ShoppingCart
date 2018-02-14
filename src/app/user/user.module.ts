import { FormsModule, FormBuilder } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { UserRoutes } from "./user.routing";
import { UserService } from "./shared/user.service";

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserComponent } from "./user.component";
import { UserAccountComponent } from "./user-account/user-account.component";

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(UserRoutes)],
  declarations: [UserComponent, UserAccountComponent],
  providers: [UserService, FormBuilder]
})
export class UserModule {}
