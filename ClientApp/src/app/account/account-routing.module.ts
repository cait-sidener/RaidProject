import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthCanActivateGuard } from '../shared/security/_guards/auth.can-activate.guard';

const routes: Routes = [
	{ path: 'account', component: ProfileComponent, canActivate: [AuthCanActivateGuard] },
	{ path: 'account/login', component: LoginComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AccountRoutingModule { }
