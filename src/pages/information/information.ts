import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
})
export class InformationPage {

  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages = [
      { title: 'Profile', component: 'ProfilePage'},
      { title: 'History', component: 'HistoryPage'},
      ];
  }

  openPage(page) {
    this.navCtrl.push(page.component);
  }

}
