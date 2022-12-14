import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  form: FormGroup | undefined

  constructor() {

  }

  getLastForm():FormGroup
  {
    return <FormGroup<any>>this.form
  }

  setLastForm(contactForm: FormGroup):void
  {
    this.form = contactForm
  }



}
