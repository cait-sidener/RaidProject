import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { IPlanRevisions } from '../../plan-revisions';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { EngineeringService } from '../../_services';
import { ModalService } from '../../../shared/modal/_services';
import { PlanRevisionsComponent } from '../plan-revisions-home/plan-revisions.component';

@Component({
  selector: 'app-plan-revisions-details',
  templateUrl: './plan-revisions-details.component.html',
  styleUrls: ['./plan-revisions-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanRevisionsDetailsComponent implements OnInit {
	planRevisionID: number;
	planRevision: IPlanRevisions;

	private initialized: boolean = false;
	private subscription: Subscription = new Subscription();

	constructor(private cdr: ChangeDetectorRef, private route: ActivatedRoute, private router: Router, private engineeringService: EngineeringService, private modalService: ModalService) {
		this.cdr.detach();
		this.ngOnInit();
	}

	check(): void {
		this.cdr.detectChanges();
	}

	ngOnInit(): void {
		if (!this.initialized) {
			this.subscription.add(this.route.paramMap.subscribe(
				paramMap => {
					this.planRevisionID = +paramMap.get('planRevisionID');
					this.subscription.add(this.engineeringService.getPlanRevision(this.planRevisionID).subscribe(
						planRevision => {
							this.planRevision = planRevision;
							this.check();
						}, error => console.log(error)
					));
				}
			));
			this.initialized = true;
		}
		  }
	ngOnDestroy(): void {
		if (!this.subscription.closed)
			this.subscription.unsubscribe();
	}

	onSubmit() {
		console.log(this.planRevision);
   //     this.engineeringService.register(this.planRevision)
			//.subscribe(data => {
			//	this.planRevision = data;
			//	this.check();
			//})
	}

	addPlanRevision(): void {
		this.modalService.show(PlanRevisionsComponent);
	}
}
