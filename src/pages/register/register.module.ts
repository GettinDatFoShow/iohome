import { ComponentsFormModule } from './../../components/component-forms.module';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';


@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
    ComponentsFormModule,
    AngularFireAuthModule
  ],
})
export class RegisterPageModule {}
