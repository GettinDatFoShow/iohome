import { Component } from '@angular/core';

/**
 * Generated class for the DeviceFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'device-form',
  templateUrl: 'device-form.html'
})
export class DeviceFormComponent {

  text: string;

  constructor() {
    console.log('Hello DeviceFormComponent Component');
    this.text = 'Hello World';
  }

}
