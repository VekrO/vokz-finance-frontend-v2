import { Observable } from "rxjs";

export interface IBaseService<T = any> {
    endpoint: string;
    get(): Observable<T>;
    post(data: T): Observable<T>;
    put(id: number, data: T): Observable<T>;
    delete(id: number): Observable<void>;
}