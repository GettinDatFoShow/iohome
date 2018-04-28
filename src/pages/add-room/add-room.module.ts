import { ComponentsFormModule } from './../../components/component-forms.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddRoomPage } from './add-room';

@NgModule({
  declarations: [
    AddRoomPage,
  ],
  imports: [
    IonicPageModule.forChild(AddRoomPage),
    ComponentsFormModule
  ],
})
export class AddRoomPageModule {}
