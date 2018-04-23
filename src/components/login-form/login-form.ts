import { AuthService } from './../../providers/auth/auth.service';
import { LoginResponse } from './../../models/login/login-response.interface';
import { NavController, IonicModule, ToastController } from 'ionic-angular';
import { Component, EventEmitter, Output } from '@angular/core';
import { Account } from '../../models/account/acount.interface';

@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.html'
})
export class LoginFormComponent {
  @Output() loginStatus: EventEmitter<LoginResponse>;
  account = {} as Account;


  constructor(
    private navCtrl: NavController, 
    private toast: ToastController,
    private auth: AuthService
  ) { 
    this.loginStatus = new EventEmitter<LoginResponse>();
   }

  async login() {
    const loginResponse = await this.auth.signInWithEmailAndPassword(this.account) 
    this.loginStatus.emit(loginResponse);
  }

  navigateToRegisterPage(): void {
    this.navCtrl.push('RegisterPage');
  }

}