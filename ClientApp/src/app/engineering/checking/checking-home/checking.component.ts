import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { IEngineering } from '../../engineering';
import { IStaff, StaffService } from '../../../shared/_services';
import { Subscription } from 'rxjs';
import { EngineeringService } from '../../_services';

@Component({
  selector: 'app-checking',
  templateUrl: './checking.component.html',
  styleUrls: ['./checking.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckingComponent implements OnInit {
    engineering: IEngineering;
    staff: IStaff[];

    private subscription: Subscription = new Subscription;

    constructor(private cdr: ChangeDetectorRef, private engineeringService: EngineeringService, private staffService: StaffService) {
        this.cdr.detach();
    }

    check(): void {
        this.cdr.detectChanges();
    }

    ngOnInit(): void {
        this.engineering = {} as IEngineering;
        this.subscription.add(this.staffService.getAllStaff().subscribe(
            (staff: IStaff[]) => {
                this.staff = staff;
                this.check();
            }));
    }

    onSubmit() {
        console.log(this.engineering);
        //this.engineeringService.registerEngineering(this.engineering)
        //    .subscribe(data => {
        //        this.engineering = data;
        //        this.check();
        //    })
    }

}
