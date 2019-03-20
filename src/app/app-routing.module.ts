import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksComponent } from './task-list/tasks.component';
import { AuthGuard } from './common/services/auth-guard.service';
import { HomeComponent } from './home/home.component';
import {AddTaskComponent} from "./add-task/add-task.component";
import {TaskDetailsComponent} from "./task/task-details/task-details.component";
import {TaskEditComponent} from "./task/task-edit/task-edit.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'add-task', component: AddTaskComponent },
    { path: 'details/:id', component: TaskDetailsComponent},
    { path: 'edit/:id', component: TaskEditComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
