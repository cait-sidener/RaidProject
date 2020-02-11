import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ModalService } from './shared/modal/_services';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { HttpHeaders } from '@angular/common/http';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush //This applies to children as well. Prevents default change detection; it is inefficient to update EVERY component when one thing changes.
})
export class AppComponent {
	title = 'ANG-APP';

	constructor(private modalService: ModalService) { }

	showModalExampleA(): void { //Default Non Static
		this.modalService.show(WelcomeComponent, undefined, undefined, { id: 5 });
	}

	showModalExampleB(): void { //Static
		this.modalService.show(WelcomeComponent, true, undefined, { id: 1 });
	}

	showModalExampleC(): void { //FullPage
		this.modalService.show(WelcomeComponent, true, true, { id: 3 });
	}
}
