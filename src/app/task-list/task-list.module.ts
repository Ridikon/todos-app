import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../common/modules/material.module';
import { TaskListRoutingModule } from './task-list.routing.module';
import { TaskFormModule } from '../task-form/task-form.module';

import { TasksComponent } from './tasks.component';
import { TaskComponent } from '../task/task.component';

@NgModule({
    declarations: [
        TasksComponent,
        TaskComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        TaskFormModule,
        ReactiveFormsModule,
        TaskListRoutingModule
    ]
})
export class TaskListModule {
}
