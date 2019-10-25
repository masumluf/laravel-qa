class Token {

    payload(token) {
        //console.log(token + "ok"); working
        const payload = token.split('.')[1]
        return this.decode(payload);
    }
    decode(payload) {
        return JSON.parse(atob(payload));
    }
    isValidToken(token) {
        // console.log(token); working
        const payload = this.payload(token);

        if (payload) {
            //console.log('done');
            return payload.iss == "http://127.0.0.1:8000/api/auth/login" || "http://127.0.0.1:8000/api/auth/login" ? true : false
        }
        return false

    }


    logdata() {
        console.log("working");
    }

}
export default Token = new Token();
