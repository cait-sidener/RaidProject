import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { IEngineering } from '../engineering';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { EngineeringService } from '../_services';
import { ModalService } from '../../shared/modal/_services';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GeneralComponent implements OnInit {
    id: number;
    engineering: IEngineering;

    private initialized: boolean = false;
    private subscription: Subscription = new Subscription();

    constructor(private cdr: ChangeDetectorRef, private route: ActivatedRoute, private router: Router, private engineeringService: EngineeringService, private modalService: ModalService) {
        this.cdr.detach();
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

}
