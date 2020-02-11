import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ITechnician } from '../../technician';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { EngineeringService } from '../../_services';
import { ModalService } from '../../../shared/modal/_services';
import { TechnicianHistoryComponent } from '../technician-history-home/technician-history.component';
import { IStaff, StaffService } from '../../../shared/_services';

@Component({
    selector: 'app-technician-history-details',
    templateUrl: './technician-history-details.component.html',
    styleUrls: ['./technician-history-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TechnicianHistoryDetailsComponent implements OnInit {
    technicianID: number;
    technician: ITechnician;
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
                    this.technicianID = +paramMap.get('technicianID');
                    this.subscription.add(this.engineeringService.getTechnician(this.technicianID).subscribe(
                        technician => {
                            this.technician = technician;
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
        console.log(this.technician);
        //this.engineeringService.register(this.technician)
        //    .subscribe(data => {
        //        this.technician = data;
        //        this.check();
        //    })
    }

    addTechnician(): void {
        this.modalService.show(TechnicianHistoryComponent);
    }
}
