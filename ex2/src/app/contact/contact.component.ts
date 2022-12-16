import { Component, OnInit } from '@angular/core';
import {FormControl, FormControlName, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ishide:boolean = false ;
  isrequired:boolean = true ;
  isdisabled :boolean = true;

  ngOnInit(): void {
  }

  contactForm = new FormGroup({
    prenom : new FormControl('',Validators.required),
    nom : new FormControl('', Validators.required),
    age: new FormControl('',Validators.required),
    email : new FormControl('',Validators.required),
    commentaire: new FormControl('',Validators.required),
    hide : new FormControl(''),

  })


  //cache l input email quand la checkbox is checked
  //retire le validators required quand le champs mail est caché
  // et inversement
  //Validators à tester !!!
  hide() {
    if (this.ishide){
      this.ishide=false;
      this.isrequired=true;

    }
    else{
      this.ishide=true;
      this.isrequired=false;
    }
  }


}
