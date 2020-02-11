import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ICertTitle } from '../certTitle';

@Injectable({
    providedIn: 'root'
})

export class CertTitleService {
    private _url = 'api/certtitle';
    private id = 100;

    constructor(private http: HttpClient) { }

    registerCertTitle(userData: ICertTitle) {
        return this.http.post<ICertTitle>(`${this._url}`, userData).pipe(
            tap(data => console.log(data)), catchError(this.handleError)
        );
    }

    getCertTitle(id: number): Observable<ICertTitle> {
        return this.http.get<ICertTitle>(`${this._url}/getCertTitle/${this.id}`).pipe(
            tap(data => console.log(`CertTitle ${this.id} Data: `, data)), catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) errorMessage = `Error: ${err.error.message}.`
        else errorMessage = `Status Code: ${err.status}, Error: ${err.message}.`
        return throwError(errorMessage);
    }
}
