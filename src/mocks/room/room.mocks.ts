import { DEVICE_LIST } from './../device/device.mocks';
import { Room } from './../../models/room/room.interface';
import { ROOM_HISTORY_LIST } from '../history/history.mocs';

const deviceList = DEVICE_LIST;
const roomHistory = ROOM_HISTORY_LIST;

const roomList: Room[] = [
    { 
        name: 'Garage', 
        registered: new Date(),
        devices: deviceList,
        history: roomHistory        
    }
]