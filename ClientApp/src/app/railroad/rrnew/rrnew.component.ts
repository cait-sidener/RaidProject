import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { IRailroad } from '../railroad';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RailroadService } from '../_services';

@Component({
  selector: 'app-rrnew',
  templateUrl: './rrnew.component.html',
  styleUrls: ['./rrnew.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RrnewComponent implements OnInit {
    railroad: IRailroad;

    constructor(private cdr: ChangeDetectorRef, private railroadService: RailroadService) {
        this.cdr.detach();
    }

    check(): void {
        this.cdr.detectChanges();
    }

    ngOnInit() {
        this.railroad = {} as IRailroad;
        this.check();

    }
    onSubmit() {
        console.log(this.railroad);
        //this.railroadService.register(this.railroad)
        //    .subscribe(data => {
        //        this.railroad = data;
        //        this.check();
        //    })
    }

}
