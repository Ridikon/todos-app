import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TaskFormComponent } from './task-form.component';
import { MaterialModule } from '../../../../common/modules/material.module';

@NgModule({
    declarations: [
        TaskFormComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
    ],
    exports: [
        TaskFormComponent
    ]
})
export class TaskFormModule {}
