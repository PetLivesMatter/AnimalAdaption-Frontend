import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { answerModel } from 'src/app/models/answerModel';
import { questionModel } from 'src/app/models/questionModel';
import { QuestionAndAnswerService } from 'src/app/services/question-and-answer.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  Questions:questionModel[] = [];
  Answers:answerModel[]=[];
  questionAddForm:FormGroup;
  answerAddForm:FormGroup;
  constructor(
    private questionAndAnswerService:QuestionAndAnswerService,
    private formBuilder:FormBuilder,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getQuestions();
    this.createAnswerAddForm();
    this.addAnswer();
    this.createQuestionAddForm();
  }
  createQuestionAddForm(){
    this.questionAddForm=this.formBuilder.group({
      title:["",Validators.required],
      content:["",Validators.required],
      //questionId:1,
      userId:1
      // ıd ve userıd saklıyacağız BURAK GEL
      /*
      "questionId": 1,
        "userId": 2,
      */
    })
  }
  createAnswerAddForm(){
    this.answerAddForm=this.formBuilder.group({
      content:["",Validators.required],
      /*answerId:-1,
      questionId:-1,
      userId:-1,*/
    })
  }

  getQuestions(){
    this.questionAndAnswerService.getQuestions().subscribe(res =>{
      this.Questions = res.data;
    })
  }
  getAnswer(){
    this.questionAndAnswerService.getAnswers().subscribe(res=>{
      this.Answers= res.data;
    })
  }
  addQuestion(){
    if(this.questionAddForm.valid){
      let questionForm=this.questionAddForm.value
      //let userId:number =questionModel.userId
      this.questionAndAnswerService.addQuestion(questionForm).subscribe((res)=>{
        this.toastrService.success("Soru eklendi","Başarılı")
      })
    }else{
      this.toastrService.warning("Soru Eklenemedi","Uyarı Başarısız")
    }
    
  }
  addAnswer(){
    if(this.answerAddForm.valid){
      let answerForm= this.answerAddForm.value
      //userId+questionId düzenlenicek
      this.questionAndAnswerService.addAnswer(answerForm).subscribe((res)=>{
        this.toastrService.success("Yanıt eklendi","Başarılı")
      })

    }else{
      this.toastrService.warning("Yanıt eklenemedi","Uyarı Başarısız")
    }
  }





  

  //eger soru eklendikten sonra gozuksun istiyorsan window.location.reload() cagir
}
