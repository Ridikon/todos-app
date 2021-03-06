import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { ITask } from '../../interfaces/task.interface';
import { AuthService } from '../../../../common/services/auth.service';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnDestroy, OnInit {
    tasks: ITask[] = [
        {
            taskName: 'Angular',
            taskEmail: 'angular@mail.com',
            taskDesc: 'Angular Bla-bla',
            id: 1
        },
        {
            taskName: 'React',
            taskEmail: 'react@mail.com',
            taskDesc: 'React Bla-bla',
            id: 2
        },
        {
            taskName: 'Vue',
            taskEmail: 'vue@mail.com',
            taskDesc: 'Vue Bla-bla',
            id: 3
        }
    ];

    constructor(private auth: AuthService,
                private router: Router) {}

    ngOnInit() {
        if (localStorage.getItem('tasks')) {
            this.tasks = JSON.parse(localStorage.getItem('tasks'));
        } else {
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        }
    }

    updateTaskList(task: ITask) {
        this.tasks.push(task);
    }

    deleteTask(index: number) {
        this.tasks.splice(index, 1);
    }

    isAuth() {
        return this.auth.isLoggedIn.getValue();
    }

    logOut() {
        this.auth.logout();
        this.router.navigate(['/']);
    }

    ngOnDestroy() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}
