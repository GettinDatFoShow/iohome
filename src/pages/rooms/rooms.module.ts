import { ComponentsListModule } from './../../components/components-list.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RoomsPage } from './rooms';

@NgModule({
  declarations: [
    RoomsPage,
  ],
  imports: [
    IonicPageModule.forChild(RoomsPage),
    ComponentsListModule
  ],
})
export class RoomsPageModule {}
