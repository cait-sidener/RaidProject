import { Component, ChangeDetectorRef, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../shared/security/_services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
	//selector: 'app-login', //Used in routing; doesn't need a tag selector.
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit, OnDestroy {
	username: string;
	password: string;

	private returnUrl: string;

	private subscription: Subscription = new Subscription(); //Acts as a container for multiple subscriptions by using the Add function.

	constructor(private cdr: ChangeDetectorRef, private route: ActivatedRoute, private router: Router, private authService: AuthService) { }

	check(): void { //Always run check if changes in component need to be reflected on view.
		this.cdr.markForCheck();
	}

	ngOnInit(): void {
		this.check();
		this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Account';
	}

	ngOnDestroy(): void {
		if (!this.subscription.closed) //CYA; Always unsubscribe on destroy event to prevent memory leaks.
			this.subscription.unsubscribe();
	}

	loginWithAD() {
		this.subscription.add(this.authService.login().subscribe(() => {
			this.router.navigateByUrl(this.returnUrl);
		}, error => console.log(error)));
	}

	onSubmit() {
		this.subscription.add(this.authService.login({ username: this.username, password: this.password }).subscribe(() => {
			this.router.navigateByUrl(this.returnUrl);
		}, error => console.log(error)));
	}
}
