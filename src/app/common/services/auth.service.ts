export class AuthService {
    isLoggedIn = false;

    isAuth(): boolean {
        if (localStorage.getItem('authStatus') === 'authorized') {
	        this.isLoggedIn = true;
        } else if (localStorage.getItem('authStatus') === 'not-authorized') {
	        this.isLoggedIn = false;
        }

        return this.isLoggedIn;
    }

    login() {
        this.isLoggedIn = true;
    }

    logout() {
        this.isLoggedIn = false;
    }
}
