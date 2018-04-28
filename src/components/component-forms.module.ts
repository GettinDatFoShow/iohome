import { EditProfileFormComponent } from './forms/edit-profile-form/edit-profile-form';
import { RegisterFormComponent } from './forms/register-form/register-form';
import { LoginFormComponent } from './forms/login-form/login-form';
import { ProfileFormComponent } from './forms/profile-form/profile-form';
import { DeviceFormComponent } from './forms/device-form/device-form';
import { RoomFormComponent } from './forms/room-form/room-form';
import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

@NgModule({
	declarations: [
        RoomFormComponent,
        DeviceFormComponent,
        ProfileFormComponent,
        LoginFormComponent,
        RegisterFormComponent,
        EditProfileFormComponent
    ],
	imports: [
        IonicModule
    ],
	exports: [
        RoomFormComponent,
        DeviceFormComponent,
        ProfileFormComponent,
        LoginFormComponent,
        RegisterFormComponent,
        EditProfileFormComponent
    ]
})
export class ComponentsFormModule {}