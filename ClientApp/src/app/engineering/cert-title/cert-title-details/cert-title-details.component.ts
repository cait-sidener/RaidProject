import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { EngineeringService } from '../../_services';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from '../../../shared/modal/_services';
import { Subscription } from 'rxjs';
import { IEngineering } from '../../engineering';
import { IStaff, StaffService } from '../../../shared/_services';
import { CertificateOfTitleComponent } from '../certificate-of-title-home/certificate-of-title.component';

@Component({
    selector: 'app-cert-title-details',
    templateUrl: './cert-title-details.component.html',
    styleUrls: ['./cert-title-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CertTitleDetailsComponent implements OnInit {
    id: number;
    engineering: IEngineering;
    private subscription: Subscription = new Subscription();
    staff: IStaff[];

    constructor(private cdr: ChangeDetectorRef, private route: ActivatedRoute, private modalService: ModalService, private engineeringService: EngineeringService, private staffService: StaffService) {
        this.cdr.detach();
        this.ngOnInit();
    }

    check(): void {
        this.cdr.detectChanges();
    }

    ngOnInit(): void {
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

    addCertTitle(): void {
        this.modalService.show(CertificateOfTitleComponent);
    }
}
