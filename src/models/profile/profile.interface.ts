import { History } from "../history/history.interface";

export interface Profile {
    firstName?: string;
    lastName?: string;
    email: string;
    avatar?: string;
    dateOfBirth?: Date;
    history?: History[];
}

export class Profile {
    firstName?: string;
    lastName?: string;
    email: string;
    avatar?: string;
    dateOfBirth?: Date;
    history?: History[];

    constructor(){};
}