import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../common/modules/material.module';
import { TaskRoutingModule } from './task.routing.module';
import { TaskComponent } from './componets/task/task.component';
import { TaskEditComponent } from './componets/task-edit/task-edit.component';
import { TaskDetailsComponent } from './componets/task-details/task-details.component';
import { TasksComponent } from './componets/task-list/tasks.component';
import { TaskFormComponent } from './componets/task-form/task-form.component';

@NgModule({
    declarations: [
        TaskComponent,
        TaskEditComponent,
        TaskDetailsComponent,
        TasksComponent,
        TaskFormComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        TaskRoutingModule
    ]
})
export class TaskModule {}
