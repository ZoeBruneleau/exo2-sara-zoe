import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { GifComponent } from './gif/gif.component';
import {NavbarComponent} from "./navbar/navbar.component";
import { ContactComponent } from './contact/contact.component';
import {Routes} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    GifComponent,
    NavbarComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

const routes: Routes = [
  { path: '/contact', component: ContactComponent },
  { path: '/home', component: GifComponent },
  { path: '**', component:GifComponent}

];
