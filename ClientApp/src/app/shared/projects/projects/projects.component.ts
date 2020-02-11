import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { IProjects } from '../projects';
import { ProjectsService } from '../_services';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent implements OnInit {
	id: number;
	projects: IProjects;

	constructor(private cdr: ChangeDetectorRef, private projectService: ProjectsService) {
		this.cdr.detach();

	}
	check(): void {
		this.cdr.detectChanges();
	}

	ngOnInit() {
		this.projectService.getProject().subscribe((data) => {
			this.projects = data;
			this.check();
		})
		
  }

}
