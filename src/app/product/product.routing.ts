import { AuthGuard } from "./../index/shared/auth_gaurd";
import { ProductListComponent } from "./product-list/product-list.component";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "../index/index.component";

export const ProductRoutes: Routes = [
  {
    path: "products",
    children: [
      {
        path: "",
        component: IndexComponent
      },
      {
        path: "all-products",
        component: ProductListComponent
      }
    ]
  }
];
