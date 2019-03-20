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
import { NotFoundModule } from './not-found/not-found.module';
import { TaskListModule } from './task-list/task-list.module';
import { TaskFormModule } from './task-form/task-form.module';

// Components
import { HomeComponent } from './home/home.component';
import { AddTaskComponent } from './add-task/add-task.component';
import {TaskDetailsComponent} from "./task/task-details/task-details.component";
import {TaskEditComponent} from "./task/task-edit/task-edit.component";
import {TaskModule} from "./task/task.module";
import {TaskComponent} from "./task/task.component";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AddTaskComponent,
	    TaskDetailsComponent,
	    TaskEditComponent,

    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        MaterialModule,
        NotFoundModule,
        TaskListModule,
        TaskFormModule,
	    // TaskModule
    ],
    providers: [AuthService, AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
