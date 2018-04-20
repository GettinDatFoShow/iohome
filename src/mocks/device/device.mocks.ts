import { GARAGE_HISTORY_LIST, LIGHT_HISTORY_LIST } from './../history/history.mocs';
import { GARAGE_COMMAND_LIST, LIGHT_COMMAND_LIST } from './../command/command.mocks';
import { Device } from './../../models/device/device.interface';

const garageCommandList = GARAGE_COMMAND_LIST;
const lightCommandList = LIGHT_COMMAND_LIST
const garageHistoryList = GARAGE_HISTORY_LIST;
const lightHistoryList = LIGHT_HISTORY_LIST

const deviceList: Device[] = [

    { 
        link: 'https://www.my-first-device.io:4200/',
        name: 'Garage', 
        state: false,
        commands: garageCommandList,
        history: garageHistoryList,
    },
    { 
        link: 'https://www.my-second-device.io:3100/',
        name: 'Light', 
        state: true,
        commands: lightCommandList,
        history: lightHistoryList,
    }

]

export const DEVICE_LIST = deviceList;;;