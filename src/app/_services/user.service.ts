import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(environment.apiUrl + '/v1/user');
    }

    getById(id: number) {
        return this.http.get(environment.apiUrl + '/v1/user/' + id);
    }

    register(user: User) {
        return this.http.post(environment.apiUrl + '/v1/user', user);
    }

    update(user: User) {
        return this.http.put(environment.apiUrl + '/v1/user/' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(environment.apiUrl + '/v1/user/' + id);
    }
}
