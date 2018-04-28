import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { DeviceListComponent } from './lists/device-list/device-list';
import { RoomListComponent } from './lists/room-list/room-list';

@NgModule({
	declarations: [
        DeviceListComponent,
        RoomListComponent
    ],
	imports: [
        IonicModule
    ],
	exports: [
        DeviceListComponent,
        RoomListComponent
    ]
})
export class ComponentsListModule {}