import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormsModule,ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage{

  formGroup: FormGroup;
  constructor(
    public navCtrl: NavController,
    public router: Router,
    public formBuilder: FormBuilder
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
        estadoId: [null,[Validators.required]],
        cidadeId: [null,[Validators.required]]
      });
    }

  

  signupUser(){
    console.log("Enviado form")

  }
}
