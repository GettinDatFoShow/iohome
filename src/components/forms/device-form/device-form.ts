import { History } from './../../../models/history/history.interface';
import { Command } from './../../../models/command/command.interface';
import { User } from 'firebase/app';
import { Subscription } from 'rxjs/Subscription';
import { DataService } from './../../../providers/data/data.service';
import { LoadingController, Loading, ToastController } from 'ionic-angular';
import { Device } from './../../../models/device/device.interface';
import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../../providers/auth/auth.service';

@Component({
  selector: 'app-device-form',
  templateUrl: 'device-form.html'
})
export class DeviceFormComponent {

  @Output() saveDeviceResult: EventEmitter<Device>;  
  device: Device = new Device();
  addingCommand: boolean = false;
  private loader: Loading
  private authenticatedUser$: Subscription;
  private authenticatedUser: User;

  constructor(
    private loading: LoadingController,
    private data: DataService,
    private auth: AuthService,
    private toast: ToastController
  ) {
    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.authenticatedUser = user;
    });
    this.device.commands = new Array<Command>();
    this.device.history = new Array<History>();
    this.saveDeviceResult = new EventEmitter<Device>();
  }

  addImage() {

  }

  pushCommand(command: Command) {
    try {
      console.log(command);
      console.log(this.device);
      if(this.device.commands !== null){
        this.device.commands.push(command);
      }
      else {
        this.device.commands = [command];
      }
      this.toast.create({
        message: 'Command added!',
        duration: 3000
      }).present();
    } catch {
      this.toast.create({
        message: 'Uh Oh, Something when wrong!',
        duration: 3000
      }).present();
    }
    this.addingCommand = false;
  }

  addCommand() {
    this.addingCommand = true;
  }

  async createDevice() {
    this.presentLoader('Saving Device...');
    if(!this.device.avatar){
      this.device.avatar = "assets/imgs/avatars/light256.png"
    }
    if(this.authenticatedUser) {
      const result =  await this.data.insertDevice(this.authenticatedUser, this.device);
      if(result) {
        this.saveDeviceResult.emit(this.device);
      } else {
        this.toast.create({
          message: 'Uh oh! Device not saved..',
          duration: 3000
        }).present();
      }
    }
    this.dismissLoader();
  }

  private presentLoader(message: string) {
    this.loader = this.loading.create({
      content: `${message}`,
      spinner: 'bubbles'
    });
    this.loader.present();
  }  

  private dismissLoader() {
    this.loader.dismiss();
  }

}