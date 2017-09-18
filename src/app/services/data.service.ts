import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
  questions: Question[];

  constructor() {
/*
    this.questions = [
      {
        question: '1+1?',
        answer: '2',
        hide: true
      },
      {
        question: 'Pls toppscorer',
        answer: 'luka',
        hide: true
      },
      {
        question: 'Er det ledige plasser?',
        answer: 'Nei',
        hide: true
      }
    ];
*/

  }

  // Get questions from localstorage
  getQuestions() {
    if (localStorage.getItem('questions') === null) {
      this.questions = [];
    } else {
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }

    return this.questions;
  }

  // Add questions to localstorage
  addQuestion(question: Question) {
    this.questions.unshift(question);

    // Inti local var
    let questions;

    if (localStorage.getItem('questions') === null) {
      questions = [];
      // Push new question
      questions.unshift(question);
      // Set new arr to localstorage
      localStorage.setItem('questions', JSON.stringify(questions));

    } else {
      // Get the questions that are already in localStorage
      questions = JSON.parse(localStorage.getItem('questions'));
      // Add the new questions to ui
      questions.unshift(question);
      // Reset localStorage
      localStorage.setItem('questions', JSON.stringify(questions));
    }
  }

  // Remove questions from localstorage
  removeQuestion(question: Question) {

    for (let i = 0; i < this.questions.length; i++) {
      if (question === this.questions[i]) {
        this.questions.splice(i, 1);
        localStorage.setItem('questions', JSON.stringify(this.questions));
      }
    }
  }

}
