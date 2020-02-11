import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class StaffService {
    private _url = '/api/staff/GetAllStaff';

    constructor(private http: HttpClient) { }

    getAllStaff(): Observable<IStaff[]> {
        return this.http.get<IStaff[]>(this._url).pipe(
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

export interface IStaff {
    rS_RW_SECTION_NAME: string;
    rS_RW_JOB_TITLE_STRING: string;
    rS_SALUTE_STRING: string;
    rS_NICK_NAME: string;
    rS_FIRST_NAME: string;
    rS_MIDDLE_NAME: string;
    rS_LAST_NAME: string;
    rS_SUFFIX: string;
    rS_INITIALS: string;
    rS_EMAIL: string;
    rS_WORK_PHONE: string;
    rS_WORK_EXTENSION: string;
    rS_MOBILE_PHONE: string;
    rS_ACTIVE_IND: string;
    rS_COMMENT: string;
    rS_ID: number;
    rS_CREATED_BY: string;
    rS_CREATED_DT: Date;
    rS_DIS_IND: string;
    rS_MODIFIED_BY: string;
    rS_MODIFIED_DT: Date;
    rS_RW_SECTION: number;
    rS_SALUTATION: number;
    rS_RW_JOB_TITLE: number;
}
