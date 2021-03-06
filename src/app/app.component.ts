import { AuthService } from './../providers/auth/auth.service';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, 
    private statusBar: StatusBar, 
    private splashScreen: SplashScreen,
    private auth: AuthService
    ) {
    
    this.auth.getAuthenticatedUser().subscribe(user => {
      !user? this.rootPage = 'LoginPage': this.rootPage = 'TabsPage';
    })
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: 'TabsPage' },
      { title: 'Profile', component: 'ProfilePage'},
      { title: 'History', component: 'HistoryPage'},
      { title: 'Information', component: 'InformationPage'}
      ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
