import { Room } from './../../models/room/room.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-room',
  templateUrl: 'add-room.html',
})
export class AddRoomPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  
}
