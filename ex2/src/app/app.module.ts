import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ListeComponent } from './liste/liste.component';
import { FilmComponent } from './liste/film/film.component';
import { NoBlanksPipe } from './no-blanks.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ListeComponent,
    FilmComponent,
    NoBlanksPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
