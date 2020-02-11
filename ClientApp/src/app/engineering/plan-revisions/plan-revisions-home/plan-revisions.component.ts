import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { IPlanRevisions } from '../../plan-revisions';
import { EngineeringService } from '../../_services';

@Component({
  selector: 'app-plan-revisions',
  templateUrl: './plan-revisions.component.html',
  styleUrls: ['./plan-revisions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanRevisionsComponent implements OnInit {
    planRevision: IPlanRevisions;

    constructor(private cdr: ChangeDetectorRef, private engineeringService: EngineeringService) {
        this.cdr.detach();
    }

    check(): void {
        this.cdr.detectChanges();
    }

    ngOnInit(): void {
        this.planRevision = {} as IPlanRevisions;
        this.check();
    }

    onSubmit() {
        console.log(this.planRevision);
        //this.engineeringService.registerPlanRevision(this.planRevision)
        //    .subscribe(data => {
        //        this.planRevision = data;
        //        this.check();
        //    })
    }

    }
