import { CartProductsComponent } from "./cart-products/cart-products.component";
import { FavouriteProductsComponent } from "./favourite-products/favourite-products.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { Routes } from "@angular/router";
import { IndexComponent } from "../../index/index.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

export const ProductRoutes: Routes = [
  {
    path: "products",
    children: [
      {
        path: "",
        component: IndexComponent,
      },
      {
        path: "all-products",
        component: ProductListComponent,
      },
      {
        path: "favourite-products",
        component: FavouriteProductsComponent,
      },
      {
        path: "cart-items",
        component: CartProductsComponent,
      },
      {
        path: "checkouts",
        loadChildren: () =>
          import("./checkout/checkout.module").then((m) => m.CheckoutModule),
      },
      {
        path: "product/:id",
        component: ProductDetailComponent,
      },
    ],
  },
];
