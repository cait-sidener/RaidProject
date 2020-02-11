import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IRailroad } from '../railroad';

@Injectable()
export class RailroadService {
    railroadList_Saved: IRailroad[] = [];
    railroadList_Show = true;
    private railroadURL = '/api/railroad';

    constructor(private http: HttpClient) { }

    register(userData: any) {
        return this.http.post<any>(`${this.railroadURL}`, userData).pipe(
            tap(data => console.log(data)), catchError(this.handleError)
        );
    }

    getRailroads(): Observable<IRailroad[]> {
        return this.http.get<IRailroad[]>(`${this.railroadURL}/getRailroads`).pipe(
            tap(data => console.log(data)), catchError(this.handleError)
        );
    }

    getRailroad(id: number): Observable<IRailroad> {
        return this.http.get<IRailroad>(`${this.railroadURL}/getRailroad/${id}`).pipe(
            tap(data => console.log(`Railroad ${id} Data: `, data)),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) errorMessage = `Error: ${err.error.message}.`
        else errorMessage = `Status Code: ${err.status}, Error: ${err.message}.`
        return throwError(errorMessage);
    }
}
