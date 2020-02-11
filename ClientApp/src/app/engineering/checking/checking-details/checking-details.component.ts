import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { IEngineering } from '../../engineering';
import { Subscription } from 'rxjs';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EngineeringService } from '../../_services';
import { ModalService } from '../../../shared/modal/_services';
import { CheckingComponent } from '../checking-home/checking.component';
import { IStaff, StaffService } from '../../../shared/_services';

@Component({
    selector: 'app-checking-details',
    templateUrl: './checking-details.component.html',
    styleUrls: ['./checking-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckingDetailsComponent implements OnInit {
    id: number;
    engineering: IEngineering;
    staff: IStaff[];

    private initialized: boolean = false;
    private subscription: Subscription = new Subscription();

    constructor(private cdr: ChangeDetectorRef, private route: ActivatedRoute, private router: Router, private engineeringService: EngineeringService, private modalService: ModalService, private staffService: StaffService) {
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
                    this.subscription.add(this.engineeringService.getEngineering(this.id).subscribe(
                        engineering => {
                            this.engineering = engineering;
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
        console.log(this.engineering);
        //this.engineeringService.registerEngineering(this.engineering)
        //	.subscribe(data => {
        //		this.engineering = data;
        //		this.check();
        //	})
    }

    addChecking(): void {
        this.modalService.show(CheckingComponent);
    }
}
