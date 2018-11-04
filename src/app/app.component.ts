import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SignupPage} from '../pages/signup/signup';
import { DashboardPage } from '../pages/dashboard/dashboard';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage;
  currentUser;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.rootPage = this.currentUser? DashboardPage : SignupPage;
  }
}

