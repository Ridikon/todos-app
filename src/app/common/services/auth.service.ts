import { BehaviorSubject } from 'rxjs';

export class AuthService {
    isLoggedIn = new BehaviorSubject(localStorage.getItem('authStatus') === 'true');

    login() {
        localStorage.setItem('authStatus', 'true');
        this.isLoggedIn.next(true);
    }

    logout() {
        localStorage.removeItem('authStatus');
        this.isLoggedIn.next(false);
    }
}
