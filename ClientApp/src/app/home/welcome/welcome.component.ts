import { Component, Input, ChangeDetectorRef, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../shared/security/_services/auth.service';

@Component({
	//selector: 'app-welcome', //Used in routing; doesn't need a tag selector.
	templateUrl: './welcome.component.html',
	styleUrls: ['./welcome.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeComponent implements OnInit, OnDestroy {
	@Input() id: number; //Value isn't set on creation but is available on init.

	displayName: string;

	private subscription: Subscription = new Subscription(); //Acts as a container for multiple subscriptions by using the Add function.

	constructor(private cdr: ChangeDetectorRef, private authService: AuthService) {
		this.cdr.detach();
	}

	check(): void { //Always run check if changes in component need to be reflected on view.
		this.cdr.detectChanges();
	}

	ngOnInit(): void {
		let
			updated: boolean = false,
			storageItem: any = this.authService.getStorageItem();
		if (this.id) updated = true;
		if (storageItem) {
			this.displayName = this.authService.getTokenValue('unique_name'); //Retreive the Name Claim from the token.
			updated = true;
		}
		if (updated) this.check(); //Changes were made and need to be rendered.
	}

	ngOnDestroy(): void {
		if (!this.subscription.closed) //CYA; Always unsubscribe on destroy event to prevent memory leaks.
			this.subscription.unsubscribe();
	}
}
