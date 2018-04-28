import { GARAGE_HISTORY_LIST, LIGHT_HISTORY_LIST } from './../history/history.mocs';
import { GARAGE_COMMAND_LIST, LIGHT_COMMAND_LIST } from './../command/command.mocks';
import { Device } from './../../models/device/device.interface';

const garageCommandList = GARAGE_COMMAND_LIST;
const lightCommandList = LIGHT_COMMAND_LIST
const garageHistoryList = GARAGE_HISTORY_LIST;
const lightHistoryList = LIGHT_HISTORY_LIST

const deviceList: Device[] = [

    { 
        link: 'https://www.my-first-device.io',
        port: 8199,        
        name: 'Garage Door', 
        description: 'Server control for home garage door',
        state: false,
        img: 'assets/imgs/light.png',
        commands: garageCommandList,
        history: garageHistoryList,
    },
    { 
        link: 'https://www.my-second-device.io',
        port: 9100,
        name: 'Garage Light', 
        description: 'Light in the center of the garage ceiling',
        state: true,
        img: 'assets/imgs/light.png',
        commands: lightCommandList,
        history: lightHistoryList,
    }

]

const deviceList2: Device[] = [

    { 
        link: 'https://www.my-first-device.io',
        port: 6969,        
        name: 'TV LEDs', 
        description: 'LEDs on the back of the tv',
        state: false,
        img: 'assets/imgs/light.png',
        commands: garageCommandList,
        history: garageHistoryList,
    },
    { 
        link: 'https://www.my-second-device.io',
        port: 3178,
        name: 'Lamp', 
        description: 'Light on the right coffee table',
        state: true,
        img: 'assets/imgs/light.png',
        commands: lightCommandList,
        history: lightHistoryList,
    },
    { 
        link: 'https://www.my-second-device.io',
        port: 4679,
        name: 'Outlet', 
        description: 'Outlet to entertainment center',
        state: true,
        img: 'assets/imgs/light.png',
        commands: lightCommandList,
        history: lightHistoryList,
    }

]

export const DEVICE_LIST = deviceList;
export const DEVICE_LIST_2 = deviceList2;