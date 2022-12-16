import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactComponent} from "./contact/contact.component";
import {GifComponent} from "./gif/gif.component";
import {ListeComponent} from "./liste/liste.component";

const routes: Routes = [
  { path : 'contact', component:ContactComponent },
  { path : 'home', component: GifComponent },
  { path : 'liste', component:ListeComponent  },
  { path : '**', component:GifComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



