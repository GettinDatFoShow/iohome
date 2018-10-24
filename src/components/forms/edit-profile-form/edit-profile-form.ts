import { Loading, LoadingController } from 'ionic-angular';
import { AuthService } from './../../../providers/auth/auth.service';
import { DataService } from './../../../providers/data/data.service';
import { Profile } from './../../../models/profile/profile.interface';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnDestroy, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { User } from 'firebase/app';

@Component({
  selector: 'app-edit-profile-form',
  templateUrl: 'edit-profile-form.html'
})
export class EditProfileFormComponent implements OnDestroy, OnInit {

  @Output() saveProfileResult: EventEmitter<Boolean>;

  private authenticatedUser$: Subscription;
  private authenticatedUser: User;
  @Input() profile: Profile;
  loader: Loading;
  
  constructor(
    private data: DataService, 
    private auth: AuthService,
    private loading: LoadingController
    ) {
    this.saveProfileResult = new EventEmitter<Boolean>();
    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User) => {
    this.authenticatedUser = user;
    })
  }

  async saveProfile(){
    this.presentLoader('Saving profile...');
    if(!this.profile.avatar){
      this.profile.avatar = "assets/imgs/avatars/avatar_general_256_2.png"
    }
    if(this.authenticatedUser) {
      this.profile.email = this.authenticatedUser.email;
      const result =  await this.data.saveProfile(this.authenticatedUser, this.profile);
      this.saveProfileResult.emit(result);
    }
    this.dismissLoader();
  }
  
  ngOnDestroy(): void {
    this.authenticatedUser$.unsubscribe();
  } 

  ngOnInit() {
    if(!this.profile) {
      this.profile = {} as Profile;
    }
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
