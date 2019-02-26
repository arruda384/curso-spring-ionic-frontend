import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/services/domain/categoria.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    public  categoriaService : CategoriaService ) { 
    }


    ngOnInit() {
      this.categoriaService.findAll()
      .subscribe(response =>{
        console.log(response);
        alert('foi');
      },
      error => {
        alert('error');
        console.log(error);
      });
    }
  
  }

  