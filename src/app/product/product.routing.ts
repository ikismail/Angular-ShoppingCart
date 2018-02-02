import { AuthGuard } from "./../index/shared/auth_gaurd";
import { ProductListComponent } from "./product-list/product-list.component";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "../index/index.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

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
      },
      {
        path: "product/:id",
        component: ProductDetailComponent
      }
    ]
  }
];
