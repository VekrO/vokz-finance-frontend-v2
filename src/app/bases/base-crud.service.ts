import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.development";
import { IBaseService } from "./base-crud-service.interface";

export class BaseCrudService<T = any> implements IBaseService<T> {
    
    endpoint: string = '';

    constructor(public http: HttpClient) {}

    get(): Observable<T> {
        return this.http.get<T>(environment.API + this.endpoint + '/id');
    }

    post(data: T): Observable<T> {
        return this.http.post<T>(environment.API + this.endpoint, data);
    }

    put(id: number, data: T): Observable<T> {
        return this.http.put<T>(environment.API + this.endpoint + '/' + id, data);
    }

    delete(id: number): Observable<void> {
        return this.http.delete<void>(environment.API + this.endpoint + '/' + id);
    }

}