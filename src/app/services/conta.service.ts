import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../bases/base-crud.service';

@Injectable({
  providedIn: 'root'
})
export class ContaService extends BaseService {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
    this.endpoint = 'conta';
  }

}
