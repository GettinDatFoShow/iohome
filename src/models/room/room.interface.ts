import { History } from './../history/history.interface';
import { Device } from "../device/device.interface";

export interface Room {
    key?: string;
    name: string;
    description?: string;
    registered: Date;
    devices?: Device[];
    history?: History[];
    img: string;
    location?: string;
}

export class Room {
    key?: string;
    name: string;
    description?: string;
    registered: Date;
    devices?: Device[];
    history?: History[];
    img: string;
    location?: string;

    constructor(){};
}