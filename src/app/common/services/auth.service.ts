export class AuthService {
    isLoggedIn = false;

    isAuth(): boolean {
        return this.isLoggedIn;
    }

    login() {
        this.isLoggedIn = true;
    }

    logout() {
        this.isLoggedIn = false;
    }
}
