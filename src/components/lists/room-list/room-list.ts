import { Room } from './../../../models/room/room.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-room-list',
  templateUrl: 'room-list.html'
})
export class RoomListComponent {

  @Input() roomList: Room[] = undefined;
  @Input() listTitle: string = undefined;

  constructor() {

  }

}
