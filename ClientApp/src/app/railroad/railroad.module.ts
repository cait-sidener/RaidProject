import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RailroadRoutingModule } from './railroad-routing.module';
import { RrtableComponent } from './rrtable/rrtable.component';
import { RrdetailsComponent } from './rrdetails/rrdetails.component';
import { RailroadService } from './_services';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RrnewComponent } from './rrnew/rrnew.component';

@NgModule({
    declarations: [
    RrtableComponent,
        RrdetailsComponent,
        RrnewComponent,
        RrtableComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RailroadRoutingModule,
        ReactiveFormsModule,
        SharedModule,
    ],
    entryComponents: [
        RrnewComponent
    ],
    providers: [
        RailroadService
    ]
})
export class RailroadModule { }
