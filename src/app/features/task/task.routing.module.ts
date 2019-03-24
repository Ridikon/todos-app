import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksComponent } from './componets/task-list/tasks.component';
import { TaskDetailsComponent } from './componets/task-details/task-details.component';
import { TaskEditComponent } from './componets/task-edit/task-edit.component';

const taskListRoutes: Routes = [
    {
        path: '',
        component: TasksComponent
    },
    {
        path: ':id',
        component: TaskDetailsComponent
    },
    {
        path: ':id/edit',
        component: TaskEditComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(taskListRoutes)],
    exports: [RouterModule]
})
export class TaskRoutingModule {
}
