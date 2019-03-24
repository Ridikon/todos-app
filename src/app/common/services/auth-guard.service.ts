import {
    CanLoad,
    Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanLoad {
    constructor(private auth: AuthService,
                private router: Router) {}

    canLoad(): Observable<boolean> | Promise<boolean> | boolean {
        if (this.auth.isLoggedIn.getValue()) {
            return true;
        }

        this.router.navigate(['/']);
    }
}
