import { Component, OnInit } from '@angular/core';
import {FormControl, FormControlName, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

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


}
