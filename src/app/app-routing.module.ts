import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksComponent } from './task-list/tasks.component';
import { AuthGuard } from './common/services/auth-guard.service';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    // { path: 'details/:id', loadChildren: './task-details/task-details.module.module#TaskDetailsModule'},
    // { path: 'edit/:id', loadChildren: './task-edit/task-edit.module#TaskEditModule'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
