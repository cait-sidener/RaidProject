import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { InvalidIDCanActivateGuard } from './employee-detail/_guards';
import { AuthCanActivateGuard } from '../shared/security/_guards';

const routes: Routes = [
	{
		path: 'employees', component: EmployeeListComponent, children: [
			{
				path: ':id',
				component: EmployeeDetailComponent,
				canActivate: [InvalidIDCanActivateGuard],
				outlet: 'secondary'
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class EmployeeRoutingModule { }
