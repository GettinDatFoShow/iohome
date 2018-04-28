import { ComponentsListModule } from './../../components/components-list.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    ComponentsListModule
  ],
})
export class HomePageModule {}
