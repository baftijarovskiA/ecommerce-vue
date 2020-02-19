class Auth {
    constructor(user, token) {
        this.token = token;
        this.name = user.name;
        this.email = user.email;
        this.roles = [];

        this.setRoles(user.role);
        this.setToken(token);
        this.setUser(this.name, this.email, this.roles);
    }

    logout(){
        localStorage.clear();
    }

    setToken(token){
        localStorage.setItem('_session',token);
    }

    setRoles(allRoles){
        let userRoles = [];
        allRoles.forEach( role => userRoles.push(role.name));
        this.roles = userRoles;
    }

    setUser(name, email, roles){
        const obj = {
            name: name,
            email: email,
            roles: roles
        };
        let obj_serialized = JSON.stringify(obj);

        localStorage.setItem('_user',obj_serialized);
    }

    getUser(){
        return JSON.parse(localStorage.getItem('_user'));
    }

    getToken(){
        return this.token;
    }

    getName(){
        return this.name;
    }

    getEmail(){
        return this.email;
    }

    getRoles(){
        return this.roles;
    }
}
export default Auth