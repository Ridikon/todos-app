import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersDetailsComponent } from './components/users-details/users-details.component';
import { UsersRolesComponent } from './components/users-roles/users-roles.component';
import { UsersResolver } from './users-resolver.service';

const usersRoutes: Routes = [
    {
        path: '',
        component: UsersListComponent
    },
    {
        path: ':id',
        component: UsersDetailsComponent,
        resolve: {user: UsersResolver},
        children: [
            { path: 'roles', component: UsersRolesComponent, resolve: {user: UsersResolver} }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(usersRoutes)],
    exports: [RouterModule],
    providers: [UsersResolver]
})
export class UsersRoutingModule {}
