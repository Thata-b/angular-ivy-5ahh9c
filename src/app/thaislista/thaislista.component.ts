import { Component, OnInit } from '@angular/core';
import { ThaisdisciplinasService } from '../thaisdisciplinas.service';

@Component({
  selector: 'app-thaislista',
  templateUrl: './thaislista.component.html',
  styleUrls: ['./thaislista.component.css']
})
export class ThaislistaComponent implements OnInit {

  constructor(public disciplinas: ThaisdisciplinasService) {}

  ngOnInit() {
  }

}