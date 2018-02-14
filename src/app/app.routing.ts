import { PageNotFoundComponent } from "./index/page-not-found/page-not-found.component";
import { NoAccessComponent } from "./index/no-access/no-access.component";
import { UserComponent } from "./user/user.component";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "./index/index.component";
import { UserAccountComponent } from "./user/user-account/user-account.component";

export const AppRoutes: Routes = [
  {
    path: "",
    component: IndexComponent,
    children: [
      {
        path: "index",
        loadChildren: "./index/index.module#IndexModule"
      },
      {
        path: "products",
        loadChildren: "./product/product.module#ProductModule"
      },
      {
        path: "users",
        loadChildren: "./user/user.module#UserModule"
      }
    ]
  },
  { path: "no-access", component: NoAccessComponent },
  { path: "**", component: PageNotFoundComponent }
];
