import { Routes, RouterModule } from "@angular/router";
import { CertTitleDetailsComponent } from './cert-title-details/cert-title-details.component';
import { AuthCanActivateGuard } from '../shared/security/_guards';
import { CertificateOfTitleComponent } from './certificate-of-title-home/certificate-of-title.component';
import { NgModule } from '@angular/core';


const routes: Routes = [
    {
        path: 'certtitle',
        component: CertTitleDetailsComponent,
        canActivate: [AuthCanActivateGuard],
        children: [
            {
                path: 'certnew',
                component: CertificateOfTitleComponent,
                outlet: 'secondary'
            }]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CertTitleRoutingModule { }
