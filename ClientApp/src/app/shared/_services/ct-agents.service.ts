import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CTAgentsService {
    private _url = '/api/cTAgents/GetAllCTAgents';

    constructor(private http: HttpClient) { }

    getAllCTAgents(): Observable<ICTAgents[]> {
        return this.http.get<ICTAgents[]>(this._url).pipe(
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

export interface ICTAgents {
    rvA_ID: number;
    rvA_COMPANY_NAME: string;
    rvA_SALUTE_STRING: string;
    rvA_SALUTATION: number;
    rvA_FIRST_NAME: string;
    rvA_LAST_NAME: string;
    rvA_NICK_NAME: string;
    rvA_MI: string;
    rvA_SUFFIX: string;
    rvA_EMAIL: string;
    rvA_WORK_PHONE: string;
    rvA_WORK_EXTENSION: string;
    rvA_MOBILE_PHONE: string;
    rvA_RW_SECTION: number;
    rvA_DIS_IND: string;
    rvA_ACTIVE_IND: string;
}
