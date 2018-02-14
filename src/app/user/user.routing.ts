import { UserComponent } from "./user.component";
import { UserAccountComponent } from "./user-account/user-account.component";
import { Routes, RouterModule } from "@angular/router";

export const UserRoutes: Routes = [
  {
    path: "users",
    component: UserComponent,
    children: [
      {
        path: "",
        component: UserAccountComponent,
        outlet: "profileOutlet"
      }
    ]
  }
];
