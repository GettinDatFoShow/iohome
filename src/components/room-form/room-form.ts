import { Component } from '@angular/core';

/**
 * Generated class for the RoomFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'room-form',
  templateUrl: 'room-form.html'
})
export class RoomFormComponent {

  text: string;

  constructor() {
    console.log('Hello RoomFormComponent Component');
    this.text = 'Hello World';
  }

}
