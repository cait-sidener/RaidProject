import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ISurvey } from '../../survey';
import { EngineeringService } from '../../_services/engineering.service';
import { IStaff, StaffService } from '../../../shared/_services';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-survey-notes',
  templateUrl: './survey-notes.component.html',
  styleUrls: ['./survey-notes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SurveyNotesComponent implements OnInit {
    survey: ISurvey;
    staff: IStaff[];

    private subscription: Subscription = new Subscription();

    constructor(private cdr: ChangeDetectorRef, private engineeringService: EngineeringService, private staffService: StaffService) {
        this.cdr.detach();
    }

    check(): void {
        this.cdr.detectChanges();
    }

    ngOnInit(): void {
        this.survey = {} as ISurvey;
        this.subscription.add(this.staffService.getAllStaff().subscribe(
            (staff: IStaff[]) => {
                this.staff = staff;
                this.check();
            }));
    }

    onSubmit() {
        console.log(this.survey);
        //this.engineeringService.register(this.survey)
        //    .subscribe(data => {
        //        this.survey = data;
        //        this.check();
        //    })
    }

}
