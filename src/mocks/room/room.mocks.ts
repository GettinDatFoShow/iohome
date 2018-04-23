import { DEVICE_LIST, DEVICE_LIST_2 } from './../device/device.mocks';
import { Room } from './../../models/room/room.interface';
import { ROOM_HISTORY_LIST } from '../history/history.mocs';

const deviceList = DEVICE_LIST;
const roomHistory = ROOM_HISTORY_LIST;
const deviceList2 = DEVICE_LIST_2;

const roomList: Room[] = [
    { 
        name: 'Garage', 
        description: 'my home garage',
        registered: new Date(),
        devices: deviceList,
        history: roomHistory,
        img: '../assets/imgs/room256.png',
    },
    { 
        name: 'Living Room', 
        description: 'Front Living Room',
        registered: new Date(),
        devices: [],
        history: roomHistory,
        img: '../assets/imgs/room256.png',
    },
    { 
        name: 'Kitchen', 
        description: 'Home kitchen',
        registered: new Date(),
        devices: [],
        history: roomHistory,
        img: '../assets/imgs/room256.png',
    }
]

export const ROOM_LIST = roomList;