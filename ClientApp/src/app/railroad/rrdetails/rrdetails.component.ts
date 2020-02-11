import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { IRailroad } from '../railroad';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { RailroadService } from '../_services';
import { ICounty } from '../../shared/county';
import { CountiesService } from '../../shared/_services';

@Component({
    selector: 'app-rrdetails',
    templateUrl: './rrdetails.component.html',
    styleUrls: ['./rrdetails.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RrdetailsComponent implements OnInit {
    id: number;
    railroad: IRailroad; 
    counties: ICounty[];

    private subscription: Subscription = new Subscription();

    constructor(private cdr: ChangeDetectorRef, private route: ActivatedRoute, private router: Router, private railroadService: RailroadService, private countiesService: CountiesService) {
        this.cdr.detach();
    }

    check(): void {
        this.cdr.detectChanges();
    }

    ngOnInit(): void {
        this.subscription.add(this.route.paramMap.subscribe(
            paramMap => {
                this.id = +paramMap.get('id');
                this.subscription.add(this.railroadService.getRailroad
                    (this.id).subscribe(
                        railroad => {
                            this.railroad = railroad;
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
    }

    ngOnDestroy(): void {
        if (!this.subscription.closed)
            this.subscription.unsubscribe();
    }

    onSubmit() {
        console.log(this.railroad);
        //this.railroadService.register(this.railroad)
        //	.subscribe(data => {
        //		this.railroad = data;
        //		this.check();
        //	})
    }

}
