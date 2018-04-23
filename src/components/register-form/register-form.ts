import { LoginResponse } from './../../models/login/login-response.interface';
import { AuthService } from './../../providers/auth/auth.service';
import { IonicModule, ToastController } from 'ionic-angular';
import { Component, EventEmitter, Output } from '@angular/core';
import { Account } from '../../models/account/acount.interface';

@Component({
  selector: 'app-register-form',
  templateUrl: 'register-form.html'
})
export class RegisterFormComponent {

  account = {} as Account;
  @Output() registerStatus: EventEmitter<LoginResponse>;

  constructor(
    private auth: AuthService, 
    private toast: ToastController
  ) { 
    this.registerStatus = new EventEmitter<LoginResponse>();
   }

  async register() {
    try {
      const loginResponse: LoginResponse = await this.auth.createUserWithEmailAndPassword(this.account) 
      this.registerStatus.emit(loginResponse);
    } catch(e) {
      this.registerStatus.emit(e);
    }
  }

}
