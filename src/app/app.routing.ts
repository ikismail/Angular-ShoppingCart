import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "./index/index.component";

export const AppRoutes: Routes = [
  {
    path: "",
    component: IndexComponent,
    children: []
  }
];
