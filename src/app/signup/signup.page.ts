import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CidadeService } from 'src/services/domain/cidade.service';
import { EstadoService } from 'src/services/domain/estado.service';
import { EstadoDTO } from 'src/models/estado.dto';
import { CidadeDTO } from 'src/models/cidade.dto';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage{

  formGroup: FormGroup;
  estados: EstadoDTO[];
  cidades: CidadeDTO[];

  constructor(
    public navCtrl: NavController,
    public router: Router,
    public formBuilder: FormBuilder,
    public cidadeService: CidadeService,
    public estadoService: EstadoService
    ) { 
      this.formGroup = this.formBuilder.group({
        nome: ['teste app', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
        email: ['testeapp@gmail.com', [Validators.required, Validators.email]],
        tipo: ['1',[Validators.required]],
        cpfOuCnpj: ['07280468497',[Validators.required, Validators.minLength(11),Validators.maxLength(14)]],
        senha: ['1234',[Validators.required]],
        logradouro: ['Rua belem',[Validators.required]],
        numero: ['571',[Validators.required]],
        complemento: ['galeria sao jorge',[Validators.required]],
        bairro: ['janga',[Validators.required]],
        cep: ['5343755',[Validators.required]],
        telefone1: ['997088008',[Validators.required]],
        telefone2: ['',[Validators.required]],
        telefone3: ['',[Validators.required]],
        estadoId: ['',[Validators.required]],
        cidadeId: ['',[Validators.required]]
      });
    }

  

  signupUser(){
    console.log("Enviado form")

  }
  ngOnInit() {
    this.estadoService.findAll()
    .subscribe(response => {
      this.estados = response
      this.formGroup.controls.estadoId.setValue(this.estados[0].id);
      console.log(this.estados);
      this.updateCidades();
    },
    error => {});
  }

  updateCidades(){
    let estado_id = this.formGroup.value.estadoId;
    this.cidadeService.findAll(estado_id)
    .subscribe(response => {
      this.cidades = response;
      this.formGroup.controls.cidadeId.setValue(null);

    },
    error => {});
  }

}
