import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";
import { NoAccessComponent } from "./shared/components/no-access/no-access.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        loadChildren: "./index/index.module#IndexModule",
      },
      {
        path: "products",
        loadChildren: "./layouts/product/product.module#ProductModule",
      },
      {
        path: "users",
        loadChildren: "./layouts/user/user.module#UserModule",
      },
      {
        path: "task-board",
        loadChildren: "./layouts/task-board/task-board.module#TaskBoardModule",
      },
    ],
  },
  { path: "no-access", component: NoAccessComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
