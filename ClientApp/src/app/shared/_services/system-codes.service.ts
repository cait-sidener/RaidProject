import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Binary } from '@angular/compiler';

@Injectable({
    providedIn: 'root'
})
export class SystemCodesService {
    private _url = '/api/systemCodes/GetAllSystemCodes';

    constructor(private http: HttpClient) { }

    getAllSystemCodes(): Observable<ISystemCodes[]> {
        return this.http.get<ISystemCodes[]>(this._url).pipe(
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

export interface ISystemCodes {
    cD_Category: string;
    cD_ORDER: Binary;
    cD_DISPLAY: string;
    cD_DESCRIPT: string;
    cD_CODE: string;
    cD_EXTERNAL: string;
    cD_END_DT: Date;
    cD_ID: number;
    cD_CREATED_BY: string;
    cD_CREATED_DT: Date;
    cD_DIS_IND: string;
    cD_MODIFIED_BY: string;
    cD_MODIFIED_DT: Date;
}
