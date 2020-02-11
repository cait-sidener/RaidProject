import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { IPlanFiles } from '../../plan-file';
import { EngineeringService } from '../../_services';
import { CountiesService } from '../../../shared/_services';
import { ICounty } from '../../../shared/county';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-plan-files',
    templateUrl: './plan-files.component.html',
    styleUrls: ['./plan-files.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanFilesComponent implements OnInit {
    planFile: IPlanFiles;
    counties: ICounty[];

    private subscription: Subscription = new Subscription();

    constructor(private cdr: ChangeDetectorRef, private engineeringService: EngineeringService, private countiesService: CountiesService) {
        this.cdr.detach();
    }

    check(): void {
        this.cdr.detectChanges();
    }

    ngOnInit(): void {
        this.planFile = {} as IPlanFiles;
        this.subscription.add(this.countiesService.getAllCounties().subscribe(
            (counties: ICounty[]) => {
                this.counties = counties;
                this.check();
            }
        ));
    }

    ngOnDestroy(): void {
        if (!this.subscription.closed)
            this.subscription.unsubscribe();
    }

    onSubmit() {
        console.log('Plan File: ', this.planFile);
        //    this.engineeringService.registerPlanFile(this.planFile)
        //        .subscribe(data => {
        //            this.planFile = data;
        //this.check()
        //        })
    }

}
