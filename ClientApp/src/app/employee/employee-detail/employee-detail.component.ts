import { Component, OnInit, ChangeDetectorRef, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { IEmployee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../_services';
import { Subscription } from 'rxjs';

@Component({
	//selector: 'app-employee-detail', //Used in routing; doesn't need a tag selector.
	templateUrl: './employee-detail.component.html',
	styleUrls: ['./employee-detail.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeDetailComponent implements OnInit, OnDestroy {
	id: number;
	employee: IEmployee;

	private initialized: boolean = false;

	private subscription: Subscription = new Subscription(); //Acts as a container for multiple subscriptions by using the Add function.

	constructor(private cdr: ChangeDetectorRef, private route: ActivatedRoute, private router: Router, private employeeService: EmployeeService) {
		this.cdr.detach();
		this.ngOnInit(); //Temp fix for bug where 'ngOnInit' is not called automatically.
	}

	check(): void { //Always run check if changes in component need to be reflected on view.
		this.cdr.detectChanges();
	}

	ngOnInit(): void {
		if (!this.initialized) { //If already ran, fall through
			this.subscription.add(this.route.paramMap.subscribe(
				paramMap => {
					this.id = +paramMap.get('id'); //'+' shortcut to convert to numeric from string.
					this.subscription.add(this.employeeService.getEmployee(this.id).subscribe(
						employee => {
							this.employee = employee;
							this.check();
						}, error => console.log(error)
					));
				}
			));
			this.initialized = true;
		}
	}

	ngOnDestroy(): void {
		if (!this.subscription.closed) //CYA; Always unsubscribe on destroy event to prevent memory leaks.
			this.subscription.unsubscribe();
	}

	onClose(): void {
		this.router.navigate(['/employees']);
	}
}
