import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {

 listFilm: string[] =["Avatar", "Baby driver","Mascarade","Interstellar","Fast and Furious"];

  constructor() { }

  ngOnInit(): void {
  }




}
