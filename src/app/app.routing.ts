import { Routes } from "@angular/router";
import { IndexComponent } from "./index/index.component";
import { NoAccessComponent } from "./shared/components/no-access/no-access.component";
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";

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
