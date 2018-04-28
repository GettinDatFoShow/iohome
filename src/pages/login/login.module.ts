import { ComponentsFormModule } from './../../components/component-forms.module';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    ComponentsFormModule,
    AngularFireAuthModule
  ],
})
export class LoginPageModule {}
