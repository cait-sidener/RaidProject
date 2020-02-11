import { Component, ChangeDetectorRef, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../shared/security/_services';
import { Router } from '@angular/router';
import { ProfileService } from './_services';
import { Subscription } from 'rxjs';

@Component({
	//selector: 'app-profile', //Used in routing; doesn't need a tag selector.
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit, OnDestroy {
	protectedData: string;

	private subscription: Subscription = new Subscription(); //Acts as a container for multiple subscriptions by using the Add function.

	constructor(private cdr: ChangeDetectorRef, private router: Router, private authService: AuthService, private profileService: ProfileService) {
		this.cdr.detach(); //Detach from main CDR Tree.
	}

	check(): void { //Always run check if changes in component need to be reflected on view.
		this.cdr.detectChanges();
	}

	ngOnInit(): void {
		this.subscription.add(this.profileService.getData().subscribe(
			data => {
				this.protectedData = data;
				this.check();
			}, error => console.log(error)
		));
	}

	ngOnDestroy(): void {
		if (!this.subscription.closed) //CYA; Always unsubscribe on destroy event to prevent memory leaks.
			this.subscription.unsubscribe();
	}

	logout(): void {
		this.authService.logout();
		this.router.navigate(["account/login"]);
	}
}
