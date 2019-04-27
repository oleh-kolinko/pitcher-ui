import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
    state = {
        email: 'oleh.kolinko@gmail.com',
        role: 'investor'
    }

    getUser() {
        
    }
}