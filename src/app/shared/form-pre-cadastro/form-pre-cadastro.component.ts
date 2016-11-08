import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { EmailValidator } from '../../../assets/validators/email.validator';

import {ShareButton, ShareProvider} from "ng2-sharebuttons";

@Component({
  selector: 'app-form-pre-cadastro',
  templateUrl: './form-pre-cadastro.component.html',
  styleUrls: ['./form-pre-cadastro.component.scss']
})
export class FormPreCadastroComponent implements OnInit {

  public preCadastroForm: FormGroup;
  public items: FirebaseListObservable<any>;

  // Botoes share
  twitterButton;
  faceButton;
  lkButton;
  gButton;
  tags = ['inovaçãosocial','SoulSolidario'];
  description = "Descubra você também, as causas que você vai gostar de ajudar";
  image = "http://www.centraldobarreiro.com/website-principal/content/uploads/o-amor-%C3%A9-exatamente-tudo-o-que-voc%C3%AA-precisa.jpghttp://3.bp.blogspot.com/-iOhRaIfLn5g/VKMVZMqbiSI/AAAAAAAAAI8/mvOPlVuBQco/s1600/10849946_541082072693568_46225141875496937_n.jpg";

  constructor(private _fb: FormBuilder, af: AngularFire) {
    this.items = af.database.list('/pre_cadastro');
  }

  ngOnInit() {
    this.preCadastroForm = this._fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)] ],
      email: ['', [Validators.required, EmailValidator.validate] ]
    });

    this.twitterButton = new ShareButton(
      ShareProvider.TWITTER,              //choose the button from ShareProvider
      "<i class='fa fa-bath fa-5x' aria-hidden='true' style='color:#3C5A99;cursor:pointer;'></i>",    //set button template
      'twitter'                           //set button classes
    );

    this.faceButton = new ShareButton(
      ShareProvider.FACEBOOK,              //choose the button from ShareProvider
      "<img style='cursor:pointer;' src='https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg'>",    //set button template
      'facebook'                           //set button classes
    );

    this.lkButton = new ShareButton(
      ShareProvider.LINKEDIN,              //choose the button from ShareProvider
      "<img style='cursor:pointer;' src='https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg'>",    //set button template
      'linkedin'                           //set button classes
    );

    this.gButton = new ShareButton(
      ShareProvider.GOOGLEPLUS,              //choose the button from ShareProvider
      "<img style='cursor:pointer;' src='https://upload.wikimedia.org/wikipedia/commons/5/5c/Google_plus.svg'>",    //set button template
      'googleplus'                           //set button classes
    );

  }

  preCadastro(json){
    console.log(json.value);
    this.items.push({
      nome: json.value.nome,
      email: json.value.email
    });

  }

}
