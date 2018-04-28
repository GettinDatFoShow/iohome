export interface Command {
    name: string;
    description?: string;
    hasResponse?: boolean;
}

export class Command {
    name: string;
    description?: string;
    hasResponse?: boolean;

    constructor(){};
}