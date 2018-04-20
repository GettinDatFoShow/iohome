import { Command } from './../../models/command/command.interface';


const garageCommandList: Command[] = [
    { name: 'openDoor', description: 'Opens Door'},
    { name: 'closeDoor', description: 'Closes Door'},
    { name: 'checkDoor', description: 'Check State of Garage Door'},
    { name: 'toggleDoor', description: 'Toggles State of Garage Door'}  
]

const lightCommandList: Command[] = [
        { name: 'lightOn', description: 'Switches Light On'},
    { name: 'lightOff', description: 'Switches Light Off'},
    { name: 'toggleLight', description: 'Toggles State of Light'}
]

export const GARAGE_COMMAND_LIST = garageCommandList;
export const LIGHT_COMMAND_LIST = lightCommandList;