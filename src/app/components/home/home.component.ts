import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../common/services/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'] // changeDetection
})
export class HomeComponent {
    constructor(private auth: AuthService, private router: Router) {}

    login() {
        this.auth.login();
        this.router.navigate(['/tasks']);
    }
}
