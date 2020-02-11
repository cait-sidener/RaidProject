import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, UrlTree, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjectsService } from '../_services';

@Injectable({
	providedIn: 'root' //Singleton
})
export class NoProjectCanActivateGuard implements CanActivate {
	constructor(private router: Router, private projectService: ProjectsService) { }

	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		if (this.projectService.projectID) {
			return false;
		}
		return true;
	}
}
