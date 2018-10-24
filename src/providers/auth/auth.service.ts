import { LoginResponse } from './../../models/login/login-response.interface';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Account } from '../../models/account/acount.interface';

@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {
  }

  getAuthenticatedUser() {
    return this.afAuth.authState;
  }

  async createUserWithEmailAndPassword(account: Account) {
    try {
      return <LoginResponse> {
        result: await this.afAuth.auth.createUserWithEmailAndPassword(account.email, account.password)
      }
    } catch (e) {
        return <LoginResponse> {
          error: e 
        }
    }
  }

  async signInWithEmailAndPassword(account: Account) {
    try {
      return <LoginResponse> {
        result: await this.afAuth.auth.signInWithEmailAndPassword(account.email, account.password)
      }
    } catch (e) {
        return <LoginResponse> {
          error: e 
        }
    }
  }

  signOut() {
    this.afAuth.auth.signOut();
  }
  
}
