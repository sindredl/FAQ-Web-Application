import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

import { Question } from '../../models/Question';

@Component({
  selector: 'app-quesiton-list',
  templateUrl: './quesiton-list.component.html',
  styleUrls: ['./quesiton-list.component.css']
})
export class QuesitonListComponent implements OnInit {
  questions: Question[];



  constructor(public dataService: DataService) {


  }

  hideIt(hide) {
    console.log(hide);
  }


  ngOnInit() {
    this.questions = this.dataService.getQuestions();
  }

  addQuestion(question: Question) {
    this.dataService.addQuestion(question);
  }

}
