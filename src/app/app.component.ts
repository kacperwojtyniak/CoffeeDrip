import { Component, ViewChild } from '@angular/core';

import { Platform, IonRouterOutlet } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  @ViewChild(IonRouterOutlet) routerOutlet: IonRouterOutlet;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);
      this.splashScreen.hide();
    });
    this.initTranslate();
    this.platform.backButton.subscribe(() => {      
      
      if(this.router.url === '/tabs/(coffees:coffees)' || this.router.url === '/tabs/(about:about)')
      {         
        navigator['app'].exitApp();
      }     
      
    }
    );
  }

  initTranslate(): void {
    this.translate.setDefaultLang('pl');

    this.translate.use('pl'); // Set your language here



  }
}
