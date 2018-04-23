import { DEVICE_LIST, DEVICE_LIST_2 } from './../../mocks/device/device.mocks';
import { Device } from './../../models/device/device.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  recentDevices: Device[] = DEVICE_LIST.concat(DEVICE_LIST_2);

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
