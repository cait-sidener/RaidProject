import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../security/_services/auth.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root' //Singleton
})
export class TokenInterceptor implements HttpInterceptor {
	constructor(private router: Router, private authService: AuthService) { }

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const
			exclude: string = "api/Token/RequestToken",
			storageItem: any = this.authService.getStorageItem(),
			authReq: HttpRequest<any> = request.clone({ setHeaders: { 'Authorization': `Bearer ${storageItem && storageItem.token}` } });
		if (request.url.search(exclude) !== -1) return next.handle(request);
		return next.handle(authReq).pipe(
			catchError((error: HttpErrorResponse) => {
				if (error.status === 401) {
					this.authService.logout();
					this.router.navigate(['account/login']);
				}
				return throwError(error);
			})
		);
	}
}
