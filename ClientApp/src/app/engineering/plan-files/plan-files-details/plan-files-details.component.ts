import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';
import { IPlanFiles } from '../../plan-file';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { EngineeringService } from '../../_services';
import { ModalService } from '../../../shared/modal/_services';
import { PlanFilesComponent } from '../plan-files-home/plan-files.component';
import { CountiesService } from '../../../shared/_services';
import { ICounty } from '../../../shared/county';

@Component({
    selector: 'app-plan-files-details',
    templateUrl: './plan-files-details.component.html',
    styleUrls: ['./plan-files-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanFilesDetailsComponent implements OnInit {
    planID: number;
    planFile: IPlanFiles;
    counties: ICounty[];

    private initialized: boolean = false;
    private subscription: Subscription = new Subscription();

    constructor(private cdr: ChangeDetectorRef, private route: ActivatedRoute, private router: Router, private engineeringService: EngineeringService, private modalService: ModalService, private countiesService: CountiesService) {
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
                    this.planID = +paramMap.get('planID');
                    this.subscription.add(this.engineeringService.getPlanFile(this.planID).subscribe(
                        planFile => {
                            this.planFile = planFile;
                            this.check();
                        }, error => console.log(error)
                    ));
                }
            ));
            this.subscription.add(this.countiesService.getAllCounties().subscribe(
                (counties: ICounty[]) => {
                    this.counties = counties;
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
        console.log(this.planFile);
        //this.engineeringService.registerPlanFile(this.planFile)
        //	.subscribe(data => {
        //		this.planFile = data;
        //		this.check();
        //	})
    }

    addPlanFile(): void {
        this.modalService.show(PlanFilesComponent);
    }
}
