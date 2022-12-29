import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return 'SIGNUP 1';
  }
  signin() {
    return 'SIGNIN 1';
  }
}
