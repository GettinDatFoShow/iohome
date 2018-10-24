import { LoadingController, Loading, NavController } from 'ionic-angular';
import { Profile } from './../../../models/profile/profile.interface';
import { User } from 'firebase/app';
import { AuthService } from './../../../providers/auth/auth.service';
import { DataService } from './../../../providers/data/data.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile-display',
  templateUrl: 'profile-display.html'
})
export class ProfileDisplayComponent implements OnInit {

  userProfile = {} as Profile;
  loader: Loading
  @Output() signOutEvent: EventEmitter<any>;
  @Output() editEvent: EventEmitter<Profile>;

  constructor(
    private data: DataService, 
    private auth: AuthService,
    private loading: LoadingController
  ) {

    this.signOutEvent = new EventEmitter<any>();
    this.editEvent = new EventEmitter<Profile>();
  }

  ngOnInit() {
    this.presentLoader('Retrieving Profile...');
    this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.data.getProfile(user).subscribe((profile: Profile) => {
        this.userProfile = <Profile>profile;
      })
    })
    this.dismissLoader();
  }

  signOut() {
    this.auth.signOut();
    this.signOutEvent.emit(null);
  }

  editProfile() {
    this.editEvent.emit(this.userProfile);
  }

  private presentLoader(message: string) {
    this.loader = this.loading.create({
      content: `${message}`,
      spinner: 'bubbles'
    });
    this.loader.present();
  }  

  private dismissLoader() {
    this.loader.dismiss();
  }

}
