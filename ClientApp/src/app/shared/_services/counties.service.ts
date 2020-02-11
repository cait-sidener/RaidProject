import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ICounty } from '../county';

@Injectable({
    providedIn: 'root' // Singleton
})
export class CountiesService {
    private _url = '/api/County/GetAllCounties';

    constructor(private http: HttpClient) { }

    getAllCounties(): Observable<ICounty[]> {
        return this.http.get<ICounty[]>(this._url).pipe(
            tap(data => console.log(data)), catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) errorMessage = `Error: ${err.error.message}.`
        else errorMessage = `Status Code: ${err.status}, Error: ${err.message}.`
        return throwError(errorMessage);
    }
}

