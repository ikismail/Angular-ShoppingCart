import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "./index/index.component";

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
      }
    ]
  }
];
