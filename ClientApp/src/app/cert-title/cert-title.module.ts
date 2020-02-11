import { NgModule } from "@angular/core";
import { CertTitleDetailsComponent } from './cert-title-details/cert-title-details.component';
import { CertificateOfTitleComponent } from './certificate-of-title-home/certificate-of-title.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CertTitleRoutingModule } from './cert-title-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        CertTitleDetailsComponent,
        CertificateOfTitleComponent
    ],
    imports: [
        CertTitleRoutingModule,
        CommonModule,
        FormsModule,
        SharedModule
    ],
    entryComponents: [
        CertificateOfTitleComponent
    ],
    providers: []
})
export class CertTitleModule { }
