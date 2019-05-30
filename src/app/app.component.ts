import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
   
    {title: 'Categorias', url: '/categorias',  component: 'CategoriasPage',  icon: ''   },
    {title: 'Profile',url: '/profile',  component: 'ProfilePage' ,con: ''    }
   // {title: 'Logout', url:'/home', component: '' ,con: ''    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthService,
    public router: Router

  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logoutClicked(){
    this.auth.logout();
    this.router.navigateByUrl('home');
  }
}
