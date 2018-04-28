import { AuthService } from './../../../providers/auth/auth.service';
import { DataService } from './../../../providers/data/data.service';
import { Profile } from './../../../models/profile/profile.interface';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnDestroy, EventEmitter, Output } from '@angular/core';
import { User } from 'firebase/app';

@Component({
  selector: 'app-edit-profile-form',
  templateUrl: 'edit-profile-form.html'
})
export class EditProfileFormComponent implements OnDestroy {

  @Output() saveProfileResult: EventEmitter<Boolean>;

  private authenticatedUser$: Subscription;
  private authenticatedUser: User;
  profile = {} as Profile;
  
  constructor(private data: DataService, private auth: AuthService) {
    this.saveProfileResult = new EventEmitter<Boolean>();
    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User) => {
    this.authenticatedUser = user;
    })
  }

  async saveProfile(){
    if(!this.profile.avatar){
      this.profile.avatar = "assets/imgs/avatars/avatar_general_256_2.png"
    }
    if(this.authenticatedUser) {
      this.profile.email = this.authenticatedUser.email;
      const result =  await this.data.saveProfile(this.authenticatedUser, this.profile);
      this.saveProfileResult.emit(result);
    }
  }
  
  ngOnDestroy(): void {
    this.authenticatedUser$.unsubscribe();
  } 

}
