import Token from "../token/token"
import LocalAppStore from '../LocalStorage/lstore'

class User {
    login(form) {
        axios.post('/api/auth/login', form)
            .then(res => this.responseAfterLogin(res))
            .catch(error => console.log(error))
    }
    responseAfterLogin(res) {
        const access_token = res.data.access_token;
        const username = res.data.username
        const result = Token.isValidToken(access_token)

        //Token.payload(res)
        //console.log(res.data);

        if (Token.isValidToken(access_token)) {
            LocalAppStore.store(username, access_token)
            window.location = '/'

        } else {
            console.log("something is worng..");
        }
    }
    hasToken() {
        const storedToken = LocalAppStore.getToken();
        if (storedToken) {
            return Token.isValidToken(storedToken) ? true : false
        }
        return false;
    }

    logedIn() {
        return this.hasToken();
    }
    logout() {
        LocalAppStore.clearItem();
        window.location = '/';
    }
    getUserName() {
        if (this.logedIn()) {
            return LocalAppStore.getUser();
        }
    }
    getUserId() {
        if (this.logedIn()) {
            const payload = Token.payload(LocalAppStore.getToken());
            return payload;
        }
    }
}

export default User = new User();
