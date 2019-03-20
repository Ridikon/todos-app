import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {TaskDetailsComponent} from "./task-details/task-details.component";
import {TaskEditComponent} from "./task-edit/task-edit.component";

const taskRoutes: Routes = [
	{ path: 'details/:id', component: TaskDetailsComponent },
	{ path: 'edit/:id', component: TaskEditComponent }
]
@NgModule({
	imports: [RouterModule.forChild(taskRoutes)],
	exports: [RouterModule]
})
export class TaskRoutingModule {}