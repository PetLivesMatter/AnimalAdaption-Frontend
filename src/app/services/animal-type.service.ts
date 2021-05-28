import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { animalType } from '../models/animalType';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AnimalTypeService {
  apiUrl="https://localhost:44335/api/"; //buraya link eklicezssd

  constructor(private httpClient: HttpClient) { }
  getAnimalTypes():Observable<ListResponseModel<animalType>>{
    let newPath = this.apiUrl + 'animaltypes/getall';
    return this.httpClient.get<ListResponseModel<animalType>>(newPath);
  }
  addAnimalTypes(animalType:animalType):Observable<SingleResponseModel<animalType>>{
    let newPath = this.apiUrl + 'animaltypes/getall';
    return this.httpClient.post<SingleResponseModel<animalType>>(newPath,animalType);
  } 
  deleteAnimalTypes(animalType:animalType):Observable<SingleResponseModel<animalType>>{
    let newPath = this.apiUrl + 'animaltypes/getall';
    return this.httpClient.post<SingleResponseModel<animalType>>(newPath,animalType);
  }

}
