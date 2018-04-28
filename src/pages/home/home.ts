import { DEVICE_LIST, DEVICE_LIST_2 } from './../../mocks/device/device.mocks';
import { Device } from './../../models/device/device.interface';
import { Component, Output, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements OnInit {

  @Output() deviceList: Device[] = undefined;
  devices: Device[] = DEVICE_LIST.concat(DEVICE_LIST_2); // todo: for testing only, needs to be a service call
  deviceListDepth: 3; // the depth of the recently used device list to display

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  prepareRecentList(depth: number, list: any) {
    return list.slice(0, depth);
  }

  ngOnInit() {
    this.deviceList = this.prepareRecentList(3, this.devices);
  }

}
