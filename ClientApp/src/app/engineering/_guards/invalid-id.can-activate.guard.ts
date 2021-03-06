import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, UrlTree, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root' //Singleton
})
export class InvalidIDCanActivateGuard implements CanActivate {
	constructor(private router: Router) { }

	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		let id: number = +next.paramMap.get('id');
		if (isNaN(id) || id < 1) {
			alert("Please log in!");
			this.router.navigate(['/engineering']);
			return false;
		}
		return true;
	}
}
