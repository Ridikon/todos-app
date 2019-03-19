import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../common/modules/material.module';

import { NotFoundComponent } from './not-found.component';
import { NotFoundRoutingModule } from './not-found-routing.module';

@NgModule({
    declarations: [
        NotFoundComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        // NotFoundRoutingModule
    ],
    exports: [
        NotFoundComponent
    ]
})
export class NotFoundModule {}
