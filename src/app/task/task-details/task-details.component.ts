import { Component, OnInit } from '@angular/core';

import { ITask } from '../../common/interfaces/task.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-task-details',
    templateUrl: './task-details.component.html',
    styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
    taskId: number;
    formData: ITask[];
    taskDetails: ITask;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.taskId = +this.route.snapshot.params.id;
        this.formData = JSON.parse(localStorage.getItem('tasks'));
        this.formData.forEach(item => {
            if (item.id === this.taskId) {
                this.taskDetails = item;
            }
        });
    }
}
