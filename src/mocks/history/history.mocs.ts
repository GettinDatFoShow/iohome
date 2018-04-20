import { History } from './../../models/history/history.interface';

const garageHistoryList: History[] = [

    { action: 'registered', date: new Date()},    
    { action: 'openDoor', date: new Date()},
    { action: 'closeDoor', date: new Date()},
    { action: 'toggleDoor', date: new Date()},
    { action: 'checkDoor', date: new Date()}

]

const lightHistoryList: History[] = [
    { action: 'registered', date: new Date()},
    { action: 'lightOn', date: new Date()},
    { action: 'lightOff', date: new Date()},
    { action: 'toggleLight', date: new Date()}
]

const roomHistoryList: History[] = [
    { action: 'registered', date: new Date() },
    { action: 'changed name', date: new Date() },
    { action: 'added device', date: new Date() }
]

export const GARAGE_HISTORY_LIST = garageHistoryList;
export const LIGHT_HISTORY_LIST = lightHistoryList;
export const ROOM_HISTORY_LIST = roomHistoryList;