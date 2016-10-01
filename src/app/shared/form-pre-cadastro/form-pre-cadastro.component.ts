import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { EmailValidator } from '../../../assets/validators/email.validator';

@Component({
  selector: 'app-form-pre-cadastro',
  templateUrl: './form-pre-cadastro.component.html',
  styleUrls: ['./form-pre-cadastro.component.scss']
})
export class FormPreCadastroComponent implements OnInit {

  public preCadastroForm: FormGroup;


  constructor(private _fb: FormBuilder) {
  }

  preCadastro(json){
    console.log(json.value);
  }

  ngOnInit() {
    this.preCadastroForm = this._fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, EmailValidator.validate] ]
    });

  }

}
