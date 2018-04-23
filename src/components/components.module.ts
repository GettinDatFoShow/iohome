import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { RoomFormComponent } from './room-form/room-form';
import { DeviceFormComponent } from './device-form/device-form';
import { ProfileFormComponent } from './profile-form/profile-form';
import { LoginFormComponent } from './login-form/login-form';
import { RegisterFormComponent } from './register-form/register-form';
import { EditProfileFormComponent } from './edit-profile-form/edit-profile-form';
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
export class ComponentsModule {}
