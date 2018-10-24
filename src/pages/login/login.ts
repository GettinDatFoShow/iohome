import { User } from 'firebase/app';
import { DataService } from './../../providers/data/data.service';
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
     private toast: ToastController,
     private data: DataService,
     private navParams: NavParams
    ) { }

  login(event: LoginResponse) {
    if(!event.error) {
      this.toast.create({
        message: `Wecome to IoHome, ${event.result.email}`,
        duration: 2500
      }).present();

      this.data.getProfile(<User>event.result).subscribe(profile => {
        profile ? this.navCtrl.setRoot('TabsPage') : this.navCtrl.setRoot('EditProfilePage');
      })
    } else{
      this.toast.create({
        message: `Uh Oh! ${event.error.message}`,
        duration: 2500
      }).present();
    }
  }
  

}
