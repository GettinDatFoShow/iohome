import { Device } from './../../../models/device/device.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-device-form',
  templateUrl: 'device-form.html'
})
export class DeviceFormComponent {

  device: Device;

  constructor() {
    this.device = new Device();
  }

  addImage() {

  }

  addCommand() {

  }

  createDevice() {

  }

}
