import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ICertTitle } from '../certTitle';
import { IStaff, ISystemCodes, ICTAgents, StaffService, SystemCodesService, CTAgentsService } from '../../shared/_services';
import { Subscription } from 'rxjs';
import { CertTitleService } from '../_services';

@Component({
  selector: 'app-certificate-of-title',
  templateUrl: './certificate-of-title.component.html',
  styleUrls: ['./certificate-of-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CertificateOfTitleComponent implements OnInit {
    certTitle: ICertTitle;
    staff: IStaff[];
    systemCodes: ISystemCodes[];
    ctAgents: ICTAgents[];

    private subscription: Subscription = new Subscription();

    constructor(private cdr: ChangeDetectorRef, private certTitleService: CertTitleService, private staffService: StaffService, private systemCodesService: SystemCodesService, private ctAgentsService: CTAgentsService) {
        this.cdr.detach();
    }

    check(): void {
        this.cdr.detectChanges();
    }

    ngOnInit(): void {
        this.certTitle = {} as ICertTitle;
        this.subscription.add(this.staffService.getAllStaff().subscribe(
            (staff: IStaff[]) => {
                this.staff = staff;
                this.check();
            }));

        this.subscription.add(this.systemCodesService.getAllSystemCodes().subscribe(
            (systemCodes: ISystemCodes[]) => {
                this.systemCodes = systemCodes;
                this.check();
            }));

        this.subscription.add(this.ctAgentsService.getAllCTAgents().subscribe(
            (ctAgents: ICTAgents[]) => {
                this.ctAgents = ctAgents;
                this.check();
            }));
    }

    onSubmit() {
        console.log(this.certTitle);
        //this.certTitleService.registerCertTitle(this.certTitle)
        //    .subscribe(data => {
        //        this.certTitle = data;
        //        this.check();
        //    })
    }

}
