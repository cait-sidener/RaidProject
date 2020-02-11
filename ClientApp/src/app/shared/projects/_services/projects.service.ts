import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IProjects } from '../projects';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root' // Singleton
})
export class ProjectsService {
    projectID: string;

    private apiUrl = '/project';

    constructor(private http: HttpClient) { }

    getProject(): Observable<IProjects> {
        console.log(this.projectID);
        return this.http.get<IProjects>(`${this.apiUrl}/${this.projectID}`).pipe(
            tap(data => console.log(`Project ${this.projectID} Data: `, data)), catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) errorMessage = `Error: ${err.error.message}.`
        else errorMessage = `Status Code: ${err.status}, Error: ${err.message}.`
        return throwError(errorMessage);
    }
}
