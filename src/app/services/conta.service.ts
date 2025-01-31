import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseCrudService } from '../bases/base-crud.service';

@Injectable({
  providedIn: 'root'
})
export class ContaService extends BaseCrudService {

  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.endpoint = 'conta';
  }

}
