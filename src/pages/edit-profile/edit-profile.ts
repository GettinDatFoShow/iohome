import { Profile } from './../../models/profile/profile.interface';
import { Component, Output } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  @Output() profile = {} as Profile;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  saveProfileResult(event: Boolean) {
    event ? this.navCtrl.setRoot('TabsPage') : console.error("Not Authenticated or Saved")
  }

  ionViewWillEnter() {
    if(this.navParams.get('profile')) {
      this.profile = this.navParams.get('profile');
    } 
  }

}
