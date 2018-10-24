import { CommandFormComponent } from './forms/command-form/command-form';
import { EditProfileFormComponent } from './forms/edit-profile-form/edit-profile-form';
import { RegisterFormComponent } from './forms/register-form/register-form';
import { LoginFormComponent } from './forms/login-form/login-form';
import { DeviceFormComponent } from './forms/device-form/device-form';
import { RoomFormComponent } from './forms/room-form/room-form';
import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

@NgModule({
	declarations: [
        RoomFormComponent,
        DeviceFormComponent,
        LoginFormComponent,
        RegisterFormComponent,
        EditProfileFormComponent,
        CommandFormComponent
    ],
	imports: [
        IonicModule
    ],
	exports: [
        RoomFormComponent,
        DeviceFormComponent,
        LoginFormComponent,
        RegisterFormComponent,
        EditProfileFormComponent,
        CommandFormComponent
    ]
})
export class ComponentsFormModule {}