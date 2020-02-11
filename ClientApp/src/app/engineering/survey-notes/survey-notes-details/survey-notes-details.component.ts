import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ISurvey } from '../../survey';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { EngineeringService } from '../../_services';
import { ModalService } from '../../../shared/modal/_services';
import { SurveyNotesComponent } from '../survey-notes-home/survey-notes.component';
import { IStaff, StaffService } from '../../../shared/_services';

@Component({
  selector: 'app-survey-notes-details',
  templateUrl: './survey-notes-details.component.html',
  styleUrls: ['./survey-notes-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SurveyNotesDetailsComponent implements OnInit {
	id: number;
	surveyNote: ISurvey;
	staff: IStaff[];

	private initialized: boolean = false;

	private subscription: Subscription = new Subscription();

	constructor(private cdr: ChangeDetectorRef, private route: ActivatedRoute, private router: Router, private engineeringService: EngineeringService, private staffService: StaffService, private modalService: ModalService) {
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
					this.id = +paramMap.get('id');
					this.subscription.add(this.engineeringService.getSurvey
						(this.id).subscribe(
							surveyNote => {
								this.surveyNote = surveyNote;
								this.check();
							}, error => console.log(error)
						));
				}
			));
			this.subscription.add(this.staffService.getAllStaff().subscribe(
				(staff: IStaff[]) => {
					this.staff = staff;
					this.check();
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
		console.log(this.surveyNote);
   //     this.engineeringService.register(this.surveyNote)
			//.subscribe(data => {
			//	this.surveyNote = data;
			//	this.check();
			//})
	}

	addSurvey(): void {
		this.modalService.show(SurveyNotesComponent);
	}

}
