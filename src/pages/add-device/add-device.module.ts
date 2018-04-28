import { ComponentsFormModule } from './../../components/component-forms.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddDevicePage } from './add-device';

@NgModule({
  declarations: [
    AddDevicePage,
  ],
  imports: [
    IonicPageModule.forChild(AddDevicePage),
    ComponentsFormModule
  ],
})
export class AddDevicePageModule {}
