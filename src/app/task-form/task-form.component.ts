import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ITask } from '../common/interfaces/task.interface';

@Component({
    selector: 'app-task-form',
    templateUrl: './task-form.component.html',
    styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
    @Output() addTask = new EventEmitter<ITask>();
    form: FormGroup;

    ngOnInit() {
        this.form = new FormGroup({
            taskName: new FormControl('', Validators.required),
            taskEmail: new FormControl('', [Validators.required, Validators.email]),
            taskDesc: new FormControl('', [Validators.required])
        });
    }

    onSubmit() {
        const formData = this.form.value;
        formData.id = Math.floor(Math.random() * 10000);
        this.addTask.emit(formData);
        this.form.reset();
    }
}
