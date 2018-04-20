import { History } from './../history/history.interface';
import { Device } from "../device/device.interface";

export interface Room {
    name: string;
    registered: Date;
    devices?: Device[];
    history?: History[];
    images?: string[];
}