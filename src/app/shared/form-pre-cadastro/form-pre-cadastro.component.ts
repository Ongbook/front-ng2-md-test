import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { EmailValidator } from '../../../assets/validators/email.validator';

@Component({
  selector: 'app-form-pre-cadastro',
  templateUrl: './form-pre-cadastro.component.html',
  styleUrls: ['./form-pre-cadastro.component.scss']
})
export class FormPreCadastroComponent implements OnInit {

  public preCadastroForm: FormGroup;
  public items: FirebaseListObservable<any>;

  constructor(private _fb: FormBuilder, af: AngularFire) {
    this.items = af.database.list('/pre_cadastro');
  }

  ngOnInit() {
    this.preCadastroForm = this._fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)] ],
      email: ['', [Validators.required, EmailValidator.validate] ]
    });

  }

  preCadastro(json){
    console.log(json.value);
    this.items.push({
      nome: json.value.nome,
      email: json.value.email
    });

  }

}
