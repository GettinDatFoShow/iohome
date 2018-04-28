import { ComponentsListModule } from './../../components/components-list.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DevicesPage } from './devices';

@NgModule({
  declarations: [
    DevicesPage,
  ],
  imports: [
    IonicPageModule.forChild(DevicesPage),
    ComponentsListModule
  ],
})
export class DevicesPageModule {}
