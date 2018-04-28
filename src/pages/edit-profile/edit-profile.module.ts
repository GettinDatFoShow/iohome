import { ComponentsFormModule } from './../../components/component-forms.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditProfilePage } from './edit-profile';

@NgModule({
  declarations: [
    EditProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(EditProfilePage),
    ComponentsFormModule
  ],
})
export class EditProfilePageModule {}
