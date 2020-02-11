import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, UrlTree, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';

@Injectable({
	providedIn: 'root' //Singleton
})
export class AuthCanActivateGuard implements CanActivate {
	constructor(private router: Router, private authService: AuthService) { }

	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		if (this.authService.isAuthenticated()) return true;
		this.router.navigate(['account/login'], { queryParams: { returnUrl: state.url } });
		return false;
	}
}
