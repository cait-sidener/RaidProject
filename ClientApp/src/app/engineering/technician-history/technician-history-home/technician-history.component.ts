import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ITechnician } from '../../technician';
import { EngineeringService } from '../../_services';
import { IStaff, StaffService } from '../../../shared/_services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-technician-history',
  templateUrl: './technician-history.component.html',
  styleUrls: ['./technician-history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TechnicianHistoryComponent implements OnInit {
    technician: ITechnician;
    staff: IStaff[];

    private subscription: Subscription = new Subscription();

    constructor(private cdr: ChangeDetectorRef, private engineeringService: EngineeringService, private staffService: StaffService) {
        this.cdr.detach();
    }

    check(): void {
        this.cdr.detectChanges();
    }

    ngOnInit(): void {
        this.technician = {} as ITechnician;
        this.subscription.add(this.staffService.getAllStaff().subscribe(
            (staff: IStaff[]) => {
                this.staff = staff;
                this.check();
            }));
    }

    onSubmit() {
        console.log(this.technician);
        //this.engineeringService.registerTechnician
        //    (this.technician)
        //    .subscribe(data => {
        //        this.technician = data;
        //        this.check();
        //    })
    }

}
