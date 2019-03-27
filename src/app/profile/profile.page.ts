import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { StorageService } from 'src/services/storage.service';
import { Router } from '@angular/router';
import { ClienteDTO } from 'src/models/cliente.dto';
import { ClienteService } from 'src/services/domain/cliente.service';
import { API_CONFIG } from 'src/config/api.config';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  cliente: ClienteDTO;
  constructor(
    public navCtrl : NavController,
    public router: Router,
    public storage: StorageService,
    public clienteService: ClienteService ) {

     }

  ngOnInit() {
    let localUser = this.storage.getLocalUser();
    if(localUser && localUser.email){
      this.clienteService.findByEmail(localUser.email)
      .subscribe(response => {
        this.cliente = response;
        this.getImageIfExists();
      },
      erro =>{});
    }
  }

  getImageIfExists(){
    this.clienteService.getImageFromBucket(this.cliente.id)
    .subscribe(response => {
     this.cliente.imageUrl = API_CONFIG.bucketBaseUrl+'/cp'+this.cliente.id + '.jpg';
    // this.cliente.imageUrl = API_CONFIG.bucketBaseUrl+'/cp2.jpg';

    },
    erro =>{});
  }

}
