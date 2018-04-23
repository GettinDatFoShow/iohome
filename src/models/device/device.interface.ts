import { Command } from './../command/command.interface';
import { History } from './../history/history.interface';

export interface Device {
    key?: string;
    link?: string;
    port?: number;
    name: string;
    description?: string;
    img?: string;
    state?: boolean;
    commands?: Command[];
    history?: History[];
    type?: string;
    location?: string;
}

export class Device {
    key?: string;
    link?: string;
    port?: number;
    name: string;
    description?: string;
    img?: string;
    state?: boolean;
    commands?: Command[];
    history?: History[];
    type?: string;
    location?: string;

    constructor(){};
}