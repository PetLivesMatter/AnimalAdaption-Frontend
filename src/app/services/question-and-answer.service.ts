import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { answerModel } from '../models/answerModel';
import { ListResponseModel } from '../models/listResponseModel';
import { questionModel } from '../models/questionModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class QuestionAndAnswerService {
  apiUrl = 'https://localhost:44335/api/';
  constructor(private httpClient:HttpClient) { }
  getQuestions():Observable<ListResponseModel<questionModel>>{
    let newPath = this.apiUrl + 'questions/getall';
    return this.httpClient.get<ListResponseModel<questionModel>>(newPath);
  }
  getAnswers():Observable<ListResponseModel<answerModel>>{
    let newPath = this.apiUrl + 'answers/getall';
    return this.httpClient.get<ListResponseModel<answerModel>>(newPath);
  }
  getQuestionsById(questionId: number): Observable<SingleResponseModel<questionModel>> {
    let newPath =
      this.apiUrl + 'questions/getbyid' + questionId;
    return this.httpClient.get<SingleResponseModel<questionModel>>(newPath);
  }
  getAnswersById(answersId: number): Observable<SingleResponseModel<answerModel>> {
    let newPath =
      this.apiUrl + 'answers/getbyid' + answersId;
    return this.httpClient.get<SingleResponseModel<answerModel>>(newPath);
  }
  addQuestion(questionModel:questionModel ): Observable<SingleResponseModel<questionModel>> {
    console.log(questionModel);
    
    return this.httpClient.post<SingleResponseModel<questionModel>>(
      this.apiUrl + 'questions/add',questionModel
    );
  }
  addAnswer(answerModel:answerModel ): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'answers/add',  
      answerModel
    );
  }
  deleteQuestion(questionModel:questionModel):Observable<SingleResponseModel<questionModel>>{
    return this.httpClient.post<SingleResponseModel<questionModel>>(
      this.apiUrl+'',
      questionModel
    );
  }
  deleteAnswer(answerModel:answerModel):Observable<SingleResponseModel<answerModel>>{
    return this.httpClient.post<SingleResponseModel<answerModel>>(
      this.apiUrl+'',
      answerModel
    );
  }
  updateQuestion(questionModel:questionModel):Observable<SingleResponseModel<questionModel>>{
    return this.httpClient.post<SingleResponseModel<questionModel>>(
      this.apiUrl+'',
      questionModel
    );
  }








}
