import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RrtableComponent } from './rrtable/rrtable.component';
import { RrdetailsComponent } from './rrdetails/rrdetails.component';
import { InvalidIDCanActivateGuard } from '../employee/employee-detail/_guards';
import { AuthCanActivateGuard } from '../shared/security/_guards';
import { RrnewComponent } from './rrnew/rrnew.component';

const routes: Routes = [
	{
		path: 'rrtable', component: RrtableComponent,
		canActivate: [AuthCanActivateGuard],
		children: [
			{
				path: ':id',
				component: RrdetailsComponent,
				outlet: 'secondary'
			}]
	},
	{ path: 'rrnew', component: RrnewComponent }

];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class RailroadRoutingModule { }
