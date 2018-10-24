import { Device } from './../../models/device/device.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-device',
  templateUrl: 'add-device.html',
})
export class AddDevicePage {

  device: Device = new Device();

  constructor(
    private navCtrl: NavController, 
    private navParams: NavParams, 
    private toast: ToastController 
    ) {
  }

  savedDevice(event: Device) {
    this.toast.create({
      message: 'Device Saved!',
      duration: 3000
    }).present();
    this.navCtrl.setRoot('TabsPage');
  }

}
