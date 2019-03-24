import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ITask } from '../../interfaces/task.interface';

@Component({
    selector: 'app-task-edit',
    templateUrl: './task-edit.component.html',
    styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {
    taskId: number;
    formData: ITask[];
    taskItem: ITask;
    form: FormGroup;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder
    ) {}

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.taskId = +params.id;
        });
        this.formData = JSON.parse(localStorage.getItem('tasks'));
        this.formData.forEach(item => {
            if (+item.id === this.taskId) {
                this.taskItem = item;
            }
        });

        this.form = this.formBuilder.group({
            taskName: [this.taskItem.taskName, Validators.required],
            taskEmail: [this.taskItem.taskEmail, [Validators.required, Validators.email]],
            taskDesc: [this.taskItem.taskDesc, [Validators.required]]
        });
    }

    onSubmit() {
        const data = this.formData.map(item => {
            if (item.id === this.taskId) {
                item = this.form.value; // why do you need this?
                item.id = this.taskId;
            }
            return item;
        });
        localStorage.setItem('tasks', JSON.stringify(data));
        this.router.navigate(['/tasks']);
    }

}
