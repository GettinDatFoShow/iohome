import { NgModule } from '@angular/core';
import { RoomFormComponent } from './room-form/room-form';
import { DeviceFormComponent } from './device-form/device-form';
import { ProfileFormComponent } from './profile-form/profile-form';
import { LoginFormComponent } from './login-form/login-form';
@NgModule({
	declarations: [RoomFormComponent,
    DeviceFormComponent,
    ProfileFormComponent,
    LoginFormComponent],
	imports: [],
	exports: [RoomFormComponent,
    DeviceFormComponent,
    ProfileFormComponent,
    LoginFormComponent]
})
export class ComponentsModule {}
