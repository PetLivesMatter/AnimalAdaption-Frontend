import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { advertisiment } from '../models/advertisiment';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})

export class AdvertisimentService {
  apiUrl = 'https://localhost:44335/api/'
  constructor(private httpClient:HttpClient) { }
  getAllAdvertisiment():Observable<ListResponseModel<advertisiment>>{
    let newPath=this.apiUrl+"advertisements/getall"
    return this.httpClient.get<ListResponseModel<advertisiment>>(newPath)
  }
  getAdvertisimentById(id:number):Observable<SingleResponseModel<advertisiment>>{
    let newPath=this.apiUrl+"advertisements/getbyid"
    return this.httpClient.get<SingleResponseModel<advertisiment>>(newPath)
  }
  addAdvertisiment(advertisement:advertisiment):Observable<SingleResponseModel<advertisiment>>{
    let newPath=this.apiUrl+"advertisements/add"
    return this.httpClient.post<SingleResponseModel<advertisiment>>(newPath,advertisement)
  }
  deleteAdvertisiment(advertisement:advertisiment):Observable<SingleResponseModel<advertisiment>>{
    let newPath=this.apiUrl+"advertisememnts/deletebyid"
    return this.httpClient.post<SingleResponseModel<advertisiment>>(newPath,advertisement.AdvertisementId)
  }

}
