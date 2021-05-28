import { Component, OnInit } from '@angular/core';
import { questionModel } from 'src/app/models/questionModel';
import { QuestionAndAnswerService } from 'src/app/services/question-and-answer.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  Questions:questionModel[] = [];
  constructor(
    private questionAndAnswerService:QuestionAndAnswerService) { }

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions(){
    this.questionAndAnswerService.getQuestions().subscribe(res =>{
      this.Questions = res.data;
    })
  }
  addAnswer(id: number){
    //const userId = localStorage.getItem("userId");
    //this.questionAndAnswerService.addAnswer()
  }

  //eger soru eklendikten sonra gozuksun istiyorsan window.location.reload() cagir
}
