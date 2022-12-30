import { Component, OnInit } from '@angular/core';
import {ServiceService} from "./service/service.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {

  form: FormGroup = new FormGroup({
    prenom : new FormControl('',Validators.required),
    nom : new FormControl('',Validators.required),
    age: new FormControl('',Validators.required),
    email : new FormControl('', Validators.required),
    commentaire: new FormControl('', Validators.required),
    hide : new FormControl(''),

  }) ;


  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    console.log(this.form.value);
    this.form = this.service.getLastForm()

  }


}
