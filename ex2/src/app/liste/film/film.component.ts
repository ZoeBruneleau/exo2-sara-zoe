import {Component, EventEmitter, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  @Input() film: string | undefined;
  

  constructor() {
  }

  ngOnInit(): void {
  }





}
