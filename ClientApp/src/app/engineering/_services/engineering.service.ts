import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ISurvey } from '../survey';
import { IProjectNote } from '../project-note';
import { ITechnician } from '../technician';
import { IPlanRevisions } from '../plan-revisions';
import { IPlanFiles } from '../plan-file';
import { IEngineering } from '../engineering';

@Injectable({
    providedIn: 'root' // Singleton
})
export class EngineeringService {
    private _url = '/api/engineering';
    surveyList_Saved: ISurvey[] = [];
    surveyList_Show = true;
    private id = 656;
    private noteID = 5;

    constructor(private http: HttpClient) { }

    register(userData: any) {
        return this.http.post<any>(`${this._url}`, userData).pipe(
            tap(data => console.log(data)), catchError(this.handleError)
        );
    }

    getSurvey(id: number): Observable<ISurvey> {
        return this.http.get<ISurvey>(`${this._url}/getSurveyNote/${this.id}`).pipe(
            tap(data => console.log(`Project ${this.id} Data: `, data)), catchError(this.handleError)
        );
    }

    registerProjectNotes(userData: any) {
        return this.http.post<any>(`${this._url}`, userData).pipe(
            tap(data => console.log(data)), catchError(this.handleError)
        );
    }

    getProjectNote(id: number): Observable<IProjectNote> {
        console.log(`${this._url}/getProjectNote/${this.id}`);
        return this.http.get<IProjectNote>(`${this._url}/getProjectNote/${this.noteID}`).pipe(
            tap(data => console.log(`Project ${this.id} Data: `, data)), catchError(this.handleError)
        );
    }

    registerTechnician(userData: any) {
        return this.http.post<any>(`${this._url}`, userData).pipe(
            tap(data => console.log(data)), catchError(this.handleError)
        );
    }

    getTechnician(id: number): Observable<ITechnician> {
        console.log(`${this._url}/getTechnician/${id}`);

        return this.http.get<ITechnician>(`${this._url}/getTechnician/${this.id}`).pipe(
            tap(data => console.log(`Technician ${this.id} Data: `, data)), catchError(this.handleError)
        );
    }

    registerPlanRevision(userData: any) {
        return this.http.post<any>(`${this._url}`, userData).pipe(
            tap(data => console.log(data)), catchError(this.handleError)
        );
    }

    getPlanRevision(id: number): Observable<IPlanRevisions> {
        return this.http.get<IPlanRevisions>(`${this._url}/getPlanRevision/${this.id}`).pipe(
            tap(data => console.log(`Plan Revision ${this.id} Data: `, data)), catchError(this.handleError)
        );
    }

    registerPlanFile(userData: IPlanFiles) {
        return this.http.post<IPlanFiles>(`${this._url}`, userData).pipe(
            tap(data => console.log(data)), catchError(this.handleError)
        );
    }

    getPlanFile(id: number): Observable<IPlanFiles> {
        return this.http.get<IPlanFiles>(`${this._url}/getPlanFile/${this.id}`).pipe(
            tap(data => console.log(`Plan File ${this.id} Data: `, data)), catchError(this.handleError)
        );
    }

    registerEngineering(userData: IEngineering) {
        return this.http.post<IEngineering>(`${this._url}`, userData).pipe(
            tap(data => console.log(data)), catchError(this.handleError)
        );
    }

    getEngineering(id: number): Observable<IEngineering> {
        return this.http.get<IEngineering>(`${this._url}/getEngineering/${this.id}`).pipe(
            tap(data => console.log(`Engineering ${this.id} Data: `, data)), catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) errorMessage = `Error: ${err.error.message}.`
        else errorMessage = `Status Code: ${err.status}, Error: ${err.message}.`
        return throwError(errorMessage);
    }
}
