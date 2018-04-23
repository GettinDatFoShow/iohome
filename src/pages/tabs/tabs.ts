import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root: string;
  tab2Root: string;
  tab3Root: string;
  tab4Root: string;

  constructor() {
    this.tab1Root = 'HomePage';
    this.tab2Root = 'RoomsPage';
    this.tab3Root = 'DevicesPage';
    this.tab4Root = 'InformationPage';
  }

}
