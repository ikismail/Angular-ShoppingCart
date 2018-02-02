import { LoginComponent } from "./login/login.component";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "./index.component";

export const IndexRoutes: Routes = [
  {
    path: "index",
    children: [
      {
        path: "",
        component: IndexComponent
      },
      {
        path: "login",
        component: LoginComponent
      }
    ]
  }
];
