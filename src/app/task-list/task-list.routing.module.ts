import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksComponent } from './tasks.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskEditComponent } from './task-edit/task-edit.component';

const taskListRoutes: Routes = [
    {
        path: 'task-list',
        component: TasksComponent,
        children: [
            { path: 'details/:id', component: TaskDetailsComponent },
            { path: 'edit/:id', component: TaskEditComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(taskListRoutes)],
    exports: [RouterModule]
})
export class TaskListRoutingModule {
}
