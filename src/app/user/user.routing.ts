import { UserComponent } from "./user.component";
import { UserAccountComponent } from "./user-account/user-account.component";
import { Routes, RouterModule } from "@angular/router";
import { UserLocateComponent } from "./user-locate/user-locate.component";
import { UserFavouriteProductsComponent } from "./user-favourite-products/user-favourite-products.component";

export const UserRoutes: Routes = [
  {
    path: "users",
    component: UserComponent,
    children: [
      {
        path: "",
        component: UserAccountComponent,
        outlet: "profileOutlet"
      },
      {
        path: "locate-users",
        component: UserLocateComponent,
        outlet: "profileOutlet"
      }
    ]
  },
  {
    path: "users/favourite-products",
    component: UserFavouriteProductsComponent
  }
];
