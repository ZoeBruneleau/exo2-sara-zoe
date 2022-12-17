import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';

import { GifComponent } from './gif/gif.component';
import {NavbarComponent} from "./navbar/navbar.component";
import { ContactComponent } from './contact/contact.component';
import {ReactiveFormsModule} from "@angular/forms";

import { ListeComponent } from './liste/liste.component';
import { FilmComponent } from './liste/film/film.component';
import { NoBlanksPipe } from './no-blanks.pipe';
import { GestionComponent } from './gestion/gestion.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    GifComponent,
    NavbarComponent,
    ContactComponent,
    ListeComponent,
    FilmComponent,
    NoBlanksPipe,
    GestionComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


