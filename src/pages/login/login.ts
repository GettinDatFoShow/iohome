import { LoginResponse } from './../../models/login/login-response.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,
     private toast: ToastController
    ) {
  }

  login(event: LoginResponse) {
    if(!event.error) {
      this.navCtrl.setRoot('ProfilePage');
      this.toast.create({
        message: `Wecome to IoHome, ${event.result.email}`,
        duration: 3000
      }).present();
    } else{
      this.toast.create({
        message: `Uh Oh! ${event.error.message}`,
        duration: 3000
      }).present();
    }
  }

}
