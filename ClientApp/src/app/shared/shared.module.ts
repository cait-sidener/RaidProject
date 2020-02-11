import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConvertToBoolean } from './_pipes';
import { WeatherComponent } from './weather/weather.component';
import { TimeComponent } from './time/time.component';
import { ModalComponent } from './modal/modal.component';
import { PaginationComponent } from './pagination/pagination.component';
import { HttpClientModule } from '@angular/common/http';
import { DOMService } from './_services';
import { ModalService } from './modal/_services';
import { PaginatorService } from './pagination/_services';
import { AuthService } from './security/_services/auth.service';
import { AuthCanActivateGuard } from './security/_guards/auth.can-activate.guard';
import { TokenInterceptor } from './security/_interceptor';
import { WeatherService } from './weather/_services';
import { ProjectsComponent } from './projects/projects/projects.component';
import { NoProjectCanActivateGuard } from './projects/_guards';
import { CountiesService } from './_services/counties.service';
import { StaffService } from './_services/staff.service';
import { SystemCodesService } from './_services/system-codes.service';

@NgModule({
	declarations: [
		ConvertToBoolean,
		WeatherComponent,
		TimeComponent,
		ModalComponent,
		PaginationComponent,
		ProjectsComponent,
	],
	providers: [
		CountiesService,
		DOMService,
		ModalService,
		PaginatorService,
		AuthService,
		AuthCanActivateGuard,
		NoProjectCanActivateGuard,
		StaffService,
		SystemCodesService,
		TokenInterceptor,
		WeatherService
	],
	imports: [
		CommonModule,
		FormsModule,
		HttpClientModule
	],
	exports: [
		ConvertToBoolean,
		WeatherComponent,
		TimeComponent,
		ModalComponent,
		PaginationComponent
	]
})
export class SharedModule { }
