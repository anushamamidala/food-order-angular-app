import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
    private BASE_URL = "http://localhost/"
    constructor(private http: HttpClient) { }

    getAllUsers() {
        this.http.get(this.BASE_URL + "api/v1/users")
    }

    getAllUserById(userId) {
        this.http.get(this.BASE_URL + "api/v1/users/" + userId)
    }

    registerUser(user): any{
        this.http.post(this.BASE_URL + "api/v1/register",{
            name: user.name,
            email: user.email,
            password: user.password
        })
    }

    loginUser(user): any{
        this.http.post(this.BASE_URL + "api/v1/login",{
            email: user.email,
            password: user.password
        })
    }
}