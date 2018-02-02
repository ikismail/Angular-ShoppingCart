import { UserService } from "./shared/user.service";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserComponent } from "./user.component";

@NgModule({
  imports: [CommonModule],
  declarations: [UserComponent],
  providers: [UserService]
})
export class UserModule {}
