import { Room } from './../../../models/room/room.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-room-form',
  templateUrl: 'room-form.html'
})
export class RoomFormComponent {

  room: Room;  

  constructor() {
    this.room = new Room();
  }

  addDevice() {

  }

  addImage() {

  }

  createRoom() {

  }

}
