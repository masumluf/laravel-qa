class LocalAppStore {
    setToken(token) {
        localStorage.setItem('token', token)
    }
    setUser(user) {
        localStorage.setItem('user', user)
    }
    store(user, token) {
        this.setToken(token)
        this.setUser(user)
    }
    getToken() {
        return localStorage.getItem('token')
    }
    getUser() {
        return localStorage.getItem('user')
    }
    logdata() {
        console.log("working");
    }
    clearItem() {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    }
}

export default LocalAppStore = new LocalAppStore();
