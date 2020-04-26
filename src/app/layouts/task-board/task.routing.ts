import { TaskBoardComponent } from "./task-board.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "tasks",
    children: [
      {
        path: "",
        component: TaskBoardComponent,
      },
    ],
  },
];

export const TaskRoutes = RouterModule.forChild(routes);
