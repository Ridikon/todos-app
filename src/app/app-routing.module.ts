import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './common/services/auth-guard.service';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'tasks', loadChildren: './features/task/task.module#TaskModule', canLoad: [AuthGuard] },
    { path: 'users', loadChildren: './features/users/users.module#UsersModule', canLoad: [AuthGuard] },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    providers: [AuthGuard],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
