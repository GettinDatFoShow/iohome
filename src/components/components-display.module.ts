import { ProfileDisplayComponent } from './displays/profile-display/profile-display';
import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

@NgModule({
	declarations: [
        ProfileDisplayComponent
    ],
	imports: [
        IonicModule
    ],
	exports: [
        ProfileDisplayComponent
    ]
})
export class ComponentsDisplayModule {}
