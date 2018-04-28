import { Device } from './../../models/device/device.interface';
import { DEVICE_LIST, DEVICE_LIST_2 } from './../../mocks/device/device.mocks';
import { Component, Output } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-devices',
  templateUrl: 'devices.html',
})
export class DevicesPage {


  @Output() devices: Device[] = DEVICE_LIST.concat(DEVICE_LIST_2); // for testing purposes: implement data service call for user device list
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navigateToPage(page: string) {
    this.navCtrl.push(page);
  }
  
}
