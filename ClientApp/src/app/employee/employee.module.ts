import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SharedModule } from '../shared/shared.module';
import { EmployeeService } from './_services';

@NgModule({
	declarations: [
		EmployeeListComponent,
		EmployeeDetailComponent
	],
	providers: [
		EmployeeService
	],
	imports: [
		CommonModule,
		FormsModule,
		SharedModule,
		EmployeeRoutingModule
	]
})
export class EmployeeModule { }
