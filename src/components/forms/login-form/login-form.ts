import { AuthService } from './../../../providers/auth/auth.service';
import { LoginResponse } from './../../../models/login/login-response.interface';
import { NavController, IonicModule, ToastController, LoadingController, Loading } from 'ionic-angular';
import { Component, EventEmitter, Output } from '@angular/core';
import { Account } from './../../../models/account/acount.interface';

@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.html'
})
export class LoginFormComponent {
  @Output() loginStatus: EventEmitter<LoginResponse>;
  account = {} as Account;
  loader: Loading; 


  constructor(
    private navCtrl: NavController, 
    private toast: ToastController,
    private auth: AuthService,
    private loading: LoadingController
    ) { 
    this.loginStatus = new EventEmitter<LoginResponse>();
  }

  presentLoader() {
    this.loader = this.loading.create({
      content: 'Logging in....',
      spinner: 'circles'
    });
    this.loader.present();
  }  

  async login() {
    this.presentLoader();
    const loginResponse = await this.auth.signInWithEmailAndPassword(this.account) 
    this.loginStatus.emit(loginResponse);
    this.loader.dismiss();
  }

  navigateToRegisterPage(): void {
    this.navCtrl.push('RegisterPage');
  }

}