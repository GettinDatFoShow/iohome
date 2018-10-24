import { Profile } from './../../models/profile/profile.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  signOut() {
    this.navCtrl.setRoot('LoginPage');
  }

  navigateToEditProfilePage(event: Profile) {
    this.navCtrl.push('EditProfilePage', {
      profile: event
    })
  }

}
