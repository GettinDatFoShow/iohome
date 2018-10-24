import { Device } from './../../models/device/device.interface';
import { Profile } from './../../models/profile/profile.interface';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { User } from 'firebase/app';
import { Room } from '../../models/room/room.interface';

@Injectable()
export class DataService {

  profileObject = {} as AngularFireObject<Profile>;
  deviceObject = {} as AngularFireObject<Device>;
  roomObject = {} as AngularFireObject<Room>;

  deviceList = {} as AngularFireList<Device>;
  roomList = {} as AngularFireList<Room>;

  constructor(private db: AngularFireDatabase) {

  }

  getProfile(user: User) {
    this.profileObject = this.db.object(`/profiles/${user.uid}`);
    return this.profileObject.valueChanges();
  }

  async saveProfile(user: User, profile: Profile) {
    this.profileObject = this.db.object(`/profiles/${user.uid}`);
    try {
      await this.profileObject.set(profile);
      return true;
    } catch(e) {
      console.error(e);
      return false;
    }
  }

  getDevices(user: User) {
    this.deviceList = this.db.list(`/devices/${user.uid}`);
    return this.deviceList.valueChanges();
  }

  async insertDevice(user: User, device: Device) {
    this.deviceList = this.db.list(`/devices/${user.uid}`);
    try {
      await this.deviceList.push(device);
      return true;
    } catch(e) {
      console.error(e);
      return false;
    }
  }

  getRooms(user: User) {
    this.deviceList = this.db.list(`/rooms/${user.uid}`);
    return this.deviceList.valueChanges();
  }

  async saveRoom(user: User, room: Room) {
    this.roomList = this.db.list(`/rooms/${user.uid}`);
    try {
      await this.roomList.push(room);
      return true;
    } catch(e) {
      console.error(e);
      return false;
    }
  }

}
