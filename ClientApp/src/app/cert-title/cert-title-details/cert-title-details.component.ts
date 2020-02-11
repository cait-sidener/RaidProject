import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CertificateOfTitleComponent } from '../certificate-of-title-home/certificate-of-title.component';
import { ICertTitle } from '../certTitle';
import { IStaff, ISystemCodes, ICTAgents, StaffService, SystemCodesService, CTAgentsService } from '../../shared/_services';
import { ModalService } from '../../shared/modal/_services';
import { CertTitleService } from '../_services';

@Component({
    selector: 'app-cert-title-details',
    templateUrl: './cert-title-details.component.html',
    styleUrls: ['./cert-title-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CertTitleDetailsComponent implements OnInit {
    certTitle: ICertTitle;
    id: number;
    staff: IStaff[];
    systemCodes: ISystemCodes[];
    ctAgents: ICTAgents[];

    private subscription: Subscription = new Subscription();
    private initialized: boolean = false;

    constructor(private cdr: ChangeDetectorRef, private route: ActivatedRoute, private modalService: ModalService, private certTitleService: CertTitleService, private staffService: StaffService, private systemCodesService: SystemCodesService, private ctAgentsService: CTAgentsService) {
        this.cdr.detach();
        this.ngOnInit();
    }

    check(): void {
        this.cdr.detectChanges();
    }

    ngOnInit(): void {
        if (!this.initialized) {
            this.subscription.add
                (this.route.paramMap.subscribe(
                    paramMap => {
                        this.id = +paramMap.get('id');
                        this.subscription.add
                            (this.certTitleService.getCertTitle
                                (this.id).subscribe(
                                    certTitle => {
                                        this.certTitle = certTitle;
                                        this.check();
                                    }, error => console.log(error)
                                ));
                    }));
            this.subscription.add(this.staffService.getAllStaff().subscribe(
                (staff: IStaff[]) => {
                    this.staff = staff;
                    this.check();
                }
            ));
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
            this.initialized = true;
        }
    }

    ngOnDestroy(): void {
        if (!this.subscription.closed)
            this.subscription.unsubscribe();
    }

    onSubmit() {
        console.log(this.certTitle);
        // this.certTitleService.register(this.certTitle)
        //		.subscribe(data => {
        //		this.certTitle = data;
        //		this.check();
        //	})
    }

    addCertTitle(): void {
        this.modalService.show(CertificateOfTitleComponent);
    }
}
