import { Room } from './../../../models/room/room.interface';
import { Component } from '@angular/core';
import { Loading, LoadingController } from 'ionic-angular';

@Component({
  selector: 'app-room-form',
  templateUrl: 'room-form.html'
})
export class RoomFormComponent {

  room: Room;  
  private loader: Loading;

  constructor(
    private loading: LoadingController
  ) {
    this.room = new Room();
  }

  addDevice() {

  }

  addImage() {

  }

  async createRoom() {

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
