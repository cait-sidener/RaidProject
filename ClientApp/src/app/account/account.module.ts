import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { AccountRoutingModule } from './account-routing.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
	declarations: [
		LoginComponent,
		ProfileComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		SharedModule,
		AccountRoutingModule
	]
})
export class AccountModule { }
