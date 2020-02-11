import { Injectable, Inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

const jwtHelper = new JwtHelperService();

@Injectable({
	providedIn: 'root' //Singleton
})
export class AuthService {
	private apiUrl = 'api/Token';
	private localStorageName = "userStore";

	constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

	getStorageItem(): any {
		return JSON.parse(localStorage.getItem(this.localStorageName)); //Retreive from storage as a JSON object.
	}

	getTokenValue(key: string): any { //Retreive a value from the token, generally used for getting Claims. I.E. 'ClaimTypes.Name' is 'unique_name'.
		const storageItem: any = this.getStorageItem();
		return jwtHelper.decodeToken(storageItem.token)[key];
	}

	isAuthenticated(): boolean {
		const storageItem: any = this.getStorageItem();
		return storageItem ? !jwtHelper.isTokenExpired(storageItem.token) : false; //Verify that token exists and isn't expired.
	}

	login(args: { username: string, password: string } = undefined): Observable<boolean> {
		if (args) {
			return this.http.post(`${this.baseUrl}${this.apiUrl}/RequestToken`, {
				username: args.username, //Example params
				password: args.password
			}, { observe: 'response' }).pipe(
				map((response: HttpResponse<any>) => {
					if (response.body.token) {
						localStorage.setItem(this.localStorageName, JSON.stringify({ //Storage; add information about the user that is needed for later.
							username: args.username, //You can also store client side data as well if needed.
							token: response.body.token //IMPORTANT; Always store the token itself.
						}));
						return true;
					}
					return false;
				}), catchError(this.handleError)
			);
		}
		return this.http.get(`${this.baseUrl}${this.apiUrl}/RequestToken`, { observe: 'response' }).pipe(
			map((response: HttpResponse<any>) => {
				if (response.body.token) {
					localStorage.setItem(this.localStorageName, JSON.stringify({ //Storage; add information about the user that is needed for later.
						token: response.body.token //IMPORTANT; Always store the token itself.
					}));
					return true;
				}
				return false;
			}), catchError(this.handleError)
		);
	}

	logout(): void {
		localStorage.removeItem(this.localStorageName); //Removes token, effectivly logging the user out.
	}

	private handleError(err: HttpErrorResponse) {
		let errorMessage = '';
		if (err.error instanceof ErrorEvent) errorMessage = `Error: ${err.error.message}.`
		else errorMessage = `Status Code: ${err.status}, Error: ${err.message}.`
		return throwError(errorMessage);
	}
}
