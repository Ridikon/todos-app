import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ITask } from '../../interfaces/task.interface';

@Component({
    selector: 'app-task-form',
    templateUrl: './task-form.component.html',
    styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
    @Output() addTask = new EventEmitter<ITask>();
    form: FormGroup;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.form = this.formBuilder.group({
            taskName: ['', Validators.required],
            taskEmail: ['', [Validators.required, Validators.email]],
            taskDesc: ['', [Validators.required]]
        });
    }

    onSubmit() {
        const formData = this.form.value;
        formData.id = Math.floor(Math.random() * 10000);
        this.addTask.emit(formData);
        this.form.reset();
    }
}
