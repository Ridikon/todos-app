import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Services
import { AuthGuard } from './common/services/auth-guard.service';
import { AuthService } from './common/services/auth.service';

// Modules
import { MaterialModule } from './common/modules/material.module';
import { TaskFormModule } from './task-form/task-form.module';

// Components
import { HomeComponent } from './home/home.component';
import { TaskDetailsComponent } from './task/task-details/task-details.component';
import { TaskEditComponent } from './task/task-edit/task-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        TaskDetailsComponent,
        TaskEditComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        MaterialModule,
        TaskFormModule
    ],
    providers: [AuthService, AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
