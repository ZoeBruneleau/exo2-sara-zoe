import {Component, Input, NgModule, OnInit, ViewChild} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import {Router} from "@angular/router";
import {ServiceService} from "../gestion/service/service.service";
import {LastForm} from "../LastForm";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})


export class ContactComponent implements OnInit {

  contactForm = new FormGroup({
    prenom : new FormControl('',Validators.required),
    nom : new FormControl('', Validators.required),
    age: new FormControl(''),
    email : new FormControl('',[Validators.required, Validators.email]),
    commentaire: new FormControl('',Validators.required),
    hide : new FormControl(''),
  })
  ishide:boolean = false ;
  isrequired:boolean = true ;
  isdisabled :boolean = false;
  mail: string = ""

  constructor(private router: Router, private service:ServiceService) {

  }

  ngOnInit(): void {
    this.service.setLastForm((this.contactForm))
  }

  //cache l input email quand la checkbox is checked
  //retire le validators required quand le champs mail est caché
  hide() {
    if (this.ishide){
      this.mail ="";

      this.ishide=false;
      this.isrequired=false;
      this.contactForm.controls['email'].setErrors({'incorrect': true});

    }
    else{
      this.ishide=true;
      this.contactForm.controls['email'].setErrors(null);


    }
  }

  save(){
    alert(this.contactForm.value);
    console.log(this.contactForm.value);
    this.router.navigate(['/gestion']);

  }




}
