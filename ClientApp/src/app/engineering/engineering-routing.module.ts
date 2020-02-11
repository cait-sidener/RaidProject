import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { GeneralComponent } from './general/general.component';
import { ExistingRwComponent } from './existing-rw/existing-rw.component';
import { PlanningComponent } from './planning/planning.component';
import { LegalComponent } from './legal/legal.component';
import { SurveyNotesComponent } from './survey-notes/survey-notes-home/survey-notes.component';
import { NgModule } from '@angular/core';
import { InvalidIDCanActivateGuard } from '../engineering/_guards';
import { AuthCanActivateGuard } from '../shared/security/_guards';
import { SurveyNotesDetailsComponent } from './survey-notes/survey-notes-details/survey-notes-details.component';
import { ProjectNotesDetailsComponent } from './project-notes/project-notes-details/project-notes-details.component';
import { ProjectNotesComponent } from './project-notes/project-notes-home/project-notes.component';
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

const routes: Routes = [
	{
		path: 'engineering-home',
		component: HomeComponent,
		canActivate: [AuthCanActivateGuard],
		children: [
			{
				path: 'general',
				component: GeneralComponent,
				outlet: 'secondary'
			},
			{
				path: 'existing-rw',
				component: ExistingRwComponent,
				outlet: 'secondary'
			},
			{
				path: 'checking',
				component: CheckingDetailsComponent,
				outlet: 'secondary',
				children: [
					{
						path: 'id',
						component: CheckingComponent,
						outlet: 'tertiary'
					}]
			},
			{
				path: 'planning',
				component: PlanningComponent,
				outlet: 'secondary'
			},
			{
				path: 'certificate-of-title',
				component: CertTitleDetailsComponent,
				outlet: 'secondary',
				children: [
					{
						path: 'id',
						component: CertificateOfTitleComponent,
						outlet: 'tertiary'
					}]
			},
			{
				path: 'legal',
				component: LegalComponent,
				outlet: 'secondary'
			},
			{
				path: 'technician-history',
				component: TechnicianHistoryDetailsComponent,
				outlet: 'secondary',
				children: [
					{
						path: 'id',
						component: TechnicianHistoryComponent,
						outlet: 'tertiary'
					}]
			},
			{
				path: 'project-notes',
				component: ProjectNotesDetailsComponent,
				outlet: 'secondary',
				children: [
					{
						path: 'id',
						component: ProjectNotesComponent,
						outlet: 'tertiary'
					}]
			},
			{
				path: 'survey-notes',
				component: SurveyNotesDetailsComponent,
				outlet: 'secondary',
				children: [
					{
						path: ':id',
						component: SurveyNotesComponent,
						outlet: 'tertiary'
					}]
			},
			{
				path: 'plan-files',
				component: PlanFilesDetailsComponent,
				outlet: 'secondary',
				children: [
					{
						path: ':id',
						component: PlanFilesComponent,
						outlet: 'tertiary'
					}]
			},
			{
				path: 'plan-revisions',
				component: PlanRevisionsDetailsComponent,
				outlet: 'secondary',
				children: [
					{
						path: ':id',
						component: PlanRevisionsComponent,
						outlet: 'tertiary'
					}]
			}
		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class EngineeringRoutingModule { }
