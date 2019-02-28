import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/services/domain/categoria.service';
import { NavController } from '@ionic/angular';
import { CategoriaDTO } from 'src/models/categoria.dto';
import { API_CONFIG } from 'src/config/api.config';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  bucketUrl: string = API_CONFIG.bucketBaseUrl;

  items : CategoriaDTO[];

  constructor(
    public navCtrl: NavController,
    public  categoriaService : CategoriaService,
    public router: Router,
    public toastController: ToastController ) { 
    }


    ngOnInit() {
      this.categoriaService.findAll()
      .subscribe(response =>{
        this.items = response;      
        console.log(this.items);
  
      },
      error => {});
    }
 
  }

  