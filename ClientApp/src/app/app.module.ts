import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { EmployeeModule } from './employee/employee.module';
import { HomeModule } from './home/home.module';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { AccountModule } from './account/account.module';
import { TokenInterceptor } from './shared/security/_interceptor';
import { RailroadModule } from './railroad/railroad.module';
import { EngineeringModule } from './engineering/engineering.module';
import { CertTitleModule } from './cert-title/cert-title.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		CertTitleModule,
		HttpClientModule,
		SharedModule,
		AccountModule,
		HomeModule,
		EmployeeModule,
		EngineeringModule,
		RailroadModule,
		AppRoutingModule, //Contains '**' path, must come last; import order matters
	],
	entryComponents: [
		WelcomeComponent //Dynamically loaded components
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: TokenInterceptor,
			multi: true
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
