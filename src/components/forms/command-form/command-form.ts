import { Component, Output, EventEmitter } from '@angular/core';
import { Command } from '../../../models/command/command.interface';

/**
 * Generated class for the CommandFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'command-form',
  templateUrl: 'command-form.html'
})
export class CommandFormComponent {

  command: Command = new Command();
  @Output() saveCommand: EventEmitter<Command> = new EventEmitter();

  constructor() {

  }

  save() {
    this.saveCommand.emit(this.command);
  }

}
