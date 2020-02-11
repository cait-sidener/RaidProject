import { NgModule } from "@angular/core";
import { GeneralComponent } from './general/general.component';
import { HomeComponent } from './home/home.component';
import { ExistingRwComponent } from './existing-rw/existing-rw.component';
import { LegalComponent } from './legal/legal.component';
import { SurveyNotesComponent } from './survey-notes/survey-notes-home/survey-notes.component';
import { PlanningComponent } from './planning/planning.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EngineeringRoutingModule } from './engineering-routing.module';
import { SharedModule } from '../shared/shared.module';
import { EngineeringService } from './_services/engineering.service';
import { SurveyNotesDetailsComponent } from './survey-notes/survey-notes-details/survey-notes-details.component';
import { ProjectNotesComponent } from './project-notes/project-notes-home/project-notes.component';
import { ProjectNotesDetailsComponent } from './project-notes/project-notes-details/project-notes-details.component';
import { TechnicianHistoryComponent } from './technician-history/technician-history-home/technician-history.component';
import { TechnicianHistoryDetailsComponent } from './technician-history/technician-history-details/technician-history-details.component';
import { PlanRevisionsDetailsComponent } from './plan-revisions/plan-revisions-details/plan-revisions-details.component';
import { PlanRevisionsComponent } from './plan-revisions/plan-revisions-home/plan-revisions.component';
import { PlanFilesDetailsComponent } from './plan-files/plan-files-details/plan-files-details.component';
import { PlanFilesComponent } from './plan-files/plan-files-home/plan-files.component';
import { CertTitleDetailsComponent } from './cert-title/cert-title-details/cert-title-details.component';
import { CertificateOfTitleComponent } from './cert-title/certificate-of-title-home/certificate-of-title.component';
import { CheckingDetailsComponent } from './checking/checking-details/checking-details.component';
import { CheckingComponent } from './checking/checking-home/checking.component';

@NgModule({
	declarations: [
		CertificateOfTitleComponent,
		CheckingComponent,
		ExistingRwComponent,
		GeneralComponent,
		HomeComponent,
		LegalComponent,
		PlanFilesComponent,
		PlanningComponent,
		PlanRevisionsComponent,
		ProjectNotesComponent,
		SurveyNotesComponent,
		SurveyNotesDetailsComponent,
		ProjectNotesDetailsComponent,
		TechnicianHistoryComponent,
		TechnicianHistoryDetailsComponent,
		PlanRevisionsDetailsComponent,
		PlanFilesDetailsComponent,
		CertTitleDetailsComponent,
		CheckingDetailsComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		EngineeringRoutingModule,
		ReactiveFormsModule,
		SharedModule
	],
	providers: [
		EngineeringService
	],
	entryComponents: [
		CertificateOfTitleComponent,
		CheckingComponent,
		PlanFilesComponent,
		PlanRevisionsComponent,
		ProjectNotesComponent,
		SurveyNotesComponent,
		TechnicianHistoryComponent
		
	]
})
export class EngineeringModule { }
