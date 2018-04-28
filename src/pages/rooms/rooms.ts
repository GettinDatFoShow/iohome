import { ROOM_LIST } from './../../mocks/room/room.mocks';
import { Room } from './../../models/room/room.interface';
import { Component, OnInit, Output } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-rooms',
  templateUrl: 'rooms.html',
})
export class RoomsPage implements OnInit {

  @Output() rooms: Room[] = ROOM_LIST;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    // add future services to load room list here.
  }

  navigateToPage(page: string) {
    this.navCtrl.push(page);
  }

}
