import { Command } from './../command/command.interface';
import { History } from './../history/history.interface';

export interface Device {
    link?: string;
    name: string;
    images?: string[];
    state?: boolean;
    commands?: Command[];
    history?: History[];
}