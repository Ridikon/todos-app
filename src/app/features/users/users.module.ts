import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../common/modules/material.module';
import { UsersRoutingModule } from './users.routing.module';
import { UsersService } from './users.service';
import { UsersResolver } from './users-resolver.service';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersDetailsComponent } from './components/users-details/users-details.component';
import { UsersRolesComponent } from './components/users-roles/users-roles.component';

@NgModule({
    declarations: [
        UsersListComponent,
        UsersDetailsComponent,
        UsersRolesComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        UsersRoutingModule
    ],
    providers: [UsersService, UsersResolver]
})
export class UsersModule {}
