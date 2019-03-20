import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksComponent } from './tasks.component';

const taskListRoutes: Routes = [
    {
        path: '',
        component: TasksComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(taskListRoutes)],
    exports: [RouterModule]
})
export class TaskListRoutingModule {
}
