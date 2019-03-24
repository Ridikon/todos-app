import { Component, OnInit } from '@angular/core';

import { ITask } from '../../interfaces/task.interface'; // don't put interface in common if you use it in module only & with i
import { ActivatedRoute, Params } from '@angular/router'; // order of declaration

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
        this.route.params.subscribe((params: Params) => {
            this.taskId = +params.id;
        });
        this.formData = JSON.parse(localStorage.getItem('tasks'));
        this.formData.forEach(item => {
            if (item.id === this.taskId) {
                this.taskDetails = item;
            }
        });
    }
}
