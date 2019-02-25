import { Component } from '@angular/core';
import { NavController, MenuController} from '@ionic/angular';
import { CategoriasPage } from '../categorias/categorias.page';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
  constructor(public router: Router , public menu: MenuController){

  }

  /*ionViewWillEnter(){
    this.menu.swipeEnable(false);
  }
  
  ionViewDidLeave(){
    this.menu.swipeEnable(true);
  }*/

  login(){
    this.router.navigateByUrl('categorias');
   
    // this.navCtrl.navigateRoot('/categorias');
  }

}
