export class LastForm {

  prenom: string | null | undefined ="";
  nom: string ="";
  age: number =0;
  email: string ="";
  commentaire: string ="";

   constructor(values: Object = {}) {
     Object.assign(this, values);
   }
}
