import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { IStaff, ISystemCodes, ICTAgents, StaffService, SystemCodesService, CTAgentsService } from '../../../shared/_services';
import { Subscription } from 'rxjs';
import { EngineeringService } from '../../_services';
import { IEngineering } from '../../engineering';

@Component({
  selector: 'app-certificate-of-title',
  templateUrl: './certificate-of-title.component.html',
  styleUrls: ['./certificate-of-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CertificateOfTitleComponent implements OnInit {
    engineering: IEngineering
    staff: IStaff[];

    private subscription: Subscription = new Subscription();

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
