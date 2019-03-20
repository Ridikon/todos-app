import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ITask } from '../../common/interfaces/task.interface';

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

    constructor(private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.taskId = +this.route.snapshot.params.id;
        this.formData = JSON.parse(localStorage.getItem('tasks'));
        this.formData.forEach(item => {
            if (item.id === this.taskId) {
                this.taskItem = item;
            }
        });
        this.form = new FormGroup({
            taskName: new FormControl(this.taskItem.taskName, Validators.required),
            taskEmail: new FormControl(this.taskItem.taskEmail, [Validators.required, Validators.email]),
            taskDesc: new FormControl(this.taskItem.taskDesc, [Validators.required])
        });
    }

    onSubmit() {
        const data = this.formData.map(item => {
            if (item.id === this.taskId) {
                item = this.form.value;
                item.id = this.taskId;
            }
            return item;
        });
        localStorage.setItem('tasks', JSON.stringify(data));
        this.router.navigate(['/']);
    }

}
