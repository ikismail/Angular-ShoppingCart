import { TaskBoardComponent } from "./task-board.component";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "src/app/shared/services/auth_gaurd";

const routes: Routes = [{
    path: "tasks",
    children: [
        {
            path: '',
            component: TaskBoardComponent
        }
    ]
}];

export const TaskRoutes = RouterModule.forChild(routes);
