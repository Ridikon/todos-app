import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './common/services/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { TaskDetailsComponent } from './task/task-details/task-details.component';
import { TaskEditComponent } from './task/task-edit/task-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'task-list', loadChildren: './task-list/task-list.module#TaskListModule', canLoad: [AuthGuard] },
    { path: 'details/:id', component: TaskDetailsComponent, canActivate: [AuthGuard] },
    { path: 'edit/:id', component: TaskEditComponent, canActivate: [AuthGuard] },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
