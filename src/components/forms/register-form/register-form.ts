import { LoginResponse } from './../../../models/login/login-response.interface';
import { AuthService } from './../../../providers/auth/auth.service';
import { IonicModule, ToastController, LoadingController, Loading } from 'ionic-angular';
import { Component, EventEmitter, Output } from '@angular/core';
import { Account } from './../../../models/account/acount.interface';

@Component({
  selector: 'app-register-form',
  templateUrl: 'register-form.html'
})
export class RegisterFormComponent {

  @Output() registerStatus: EventEmitter<LoginResponse>;
  account = {} as Account;
  loader: Loading;

  constructor(
    private auth: AuthService, 
    private toast: ToastController,
    private loading: LoadingController
  ) { 
    this.registerStatus = new EventEmitter<LoginResponse>();
  }

  presentLoader() {
    this.loader = this.loading.create({
      content: 'Logging in....',
      spinner: 'bubbles'
    });
    this.loader.present();
  }  

  async register() {
    this.presentLoader();
    try {
      const loginResponse: LoginResponse = await this.auth.createUserWithEmailAndPassword(this.account) 
      this.registerStatus.emit(loginResponse);
    } catch(e) {
      this.registerStatus.emit(e);
    }
    this.loader.dismiss();
  }

}
