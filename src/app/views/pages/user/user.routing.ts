import { AuthGuard } from "./../../../shared/guards/auth_gaurd";
import { UserComponent } from "./user.component";
import { UserAccountComponent } from "./user-account/user-account.component";
import { Routes, RouterModule } from "@angular/router";

export const UserRoutes: Routes = [
  {
    path: "",
    component: UserComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        component: UserAccountComponent,
        outlet: "profileOutlet",
      },
    ],
  },
];
