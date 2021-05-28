import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { animalType } from '../models/animalType';

@Injectable({
  providedIn: 'root'
})
export class AnimalTypeService {
  apiUrl="https://localhost:44391/"; //buraya link eklicezssd

  constructor(private httpClient: HttpClient) { }
  getAnimalTypes():Observable<ListResponseModel<animalType>>{
    return this.httpClient.get<ListResponseModel<animalType>>(this.apiUrl);
  }
}
