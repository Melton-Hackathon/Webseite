import RequestClass from '../core/request.class.js';

export default class LoginClass {
    constructor() {
        this.sessionKey = 'melton-login-session';
        this.sessionValue = 'true';
        this.r = new RequestClass();
    }

    async login(user, password) {
        return await this.r.create('/api/benutzer/auth', { user, password })
            .then(response => {
                console.log(response)
                if (response.success) {
                    sessionStorage.setItem(this.sessionKey, response.data);
                    sessionStorage.setItem('melton-session-username', user);

                    console.log(response)

                    return true;
                } else {
                    console.log('Failed to login')
                    return false;
                }
            })
    }

    async checkLogin() {
        if (sessionStorage.getItem(this.sessionKey) === this.sessionValue) {
            return true;
        }
        return false;
    }

    async logout() {
        sessionStorage.removeItem(this.sessionKey);
        sessionStorage.removeItem('melton-session-username');
    }

    async getSessionsVal(){
        console.log('getSessionsVal')
        var name = sessionStorage.getItem('melton-session-username');
        var login = sessionStorage.getItem('melton-login-session');

        const result = {
            name,
            login
        }
        return result;
    }
}