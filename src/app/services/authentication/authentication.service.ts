import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../../bases/base-crud.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends BaseService {
  constructor(http: HttpClient) {
    super(http);
    this.endpoint = 'authentication';
  }
}
