import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../common/services/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    constructor(public auth: AuthService, public router: Router) {
    }

    login() {
        this.auth.login();
        this.router.navigate(['/task-list']);
    }
}
