import { Device } from './../../../models/device/device.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-device-list',
  templateUrl: 'device-list.html'
})
export class DeviceListComponent {

  @Input() deviceList: Device[]; 
  @Input() listTitle: string;   
 
  constructor() {

  }

}
