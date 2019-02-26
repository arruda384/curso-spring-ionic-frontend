import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
  constructor(
    public router: Router ,
    public menu: MenuController,
    )
    {
  
}
 

  ionViewWillEnter() {

   // this.menu.swipeEnable(false, 'myMenu')
   this.menu.enable(false);
  }
 
  ionViewDidLeave() {
  this.menu.enable(true);
  //  this.menu.swipeEnable(false, 'myMenu')

  }

  login(){
    this.router.navigateByUrl('categorias');

  }

}
