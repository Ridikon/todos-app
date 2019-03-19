import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../common/services/auth.service';
import { ITask } from '../task.interface';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    tasks: ITask[];

    constructor(public auth: AuthService, public router: Router) {
    }

    ngOnInit() {
        if (this.auth.isAuth()) {
            this.tasks = JSON.parse(localStorage.getItem('tasks'));
        }
    }

    changeLoginStatus(status: boolean) {
        status ? this.auth.login() : this.auth.logout();
        if (this.auth.isAuth()) {
            this.router.navigate(['task-list']);
            this.tasks = JSON.parse(localStorage.getItem('tasks'));
        } else {
            this.router.navigate(['/']);
        }
    }
}
