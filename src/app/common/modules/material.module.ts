import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule, MatRadioModule, MatToolbarModule
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatListModule,
        MatIconModule,
        MatToolbarModule,
        MatRadioModule
    ],
    exports: [
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatListModule,
        MatIconModule,
        MatToolbarModule,
        MatRadioModule
    ]
})
export class MaterialModule {}
