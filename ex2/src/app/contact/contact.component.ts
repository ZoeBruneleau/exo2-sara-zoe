import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ishide:boolean = false ;
  isrequired:boolean = true ;
  isdisabled :boolean = false;


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
  //Validators à tester !!!
 mail: string = ""

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


}
