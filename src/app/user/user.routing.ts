import { UserComponent } from "./user.component";
import { UserAccountComponent } from "./user-account/user-account.component";
import { Routes, RouterModule } from "@angular/router";
import { UserFavouriteProductsComponent } from "./user-favourite-products/user-favourite-products.component";
import { UserCartItemsComponent } from "./user-cart-items/user-cart-items.component";

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
        path: "favourite-products",
        component: UserFavouriteProductsComponent,
        outlet: "profileOutlet"
      },
      {
        path: "cart-items",
        component: UserCartItemsComponent,
        outlet: "profileOutlet"
      }
    ]
  }
];
