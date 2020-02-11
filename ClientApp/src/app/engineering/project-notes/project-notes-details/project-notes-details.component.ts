import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { IProjectNote } from '../../project-note';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { EngineeringService } from '../../_services';
import { ModalService } from '../../../shared/modal/_services';
import { ProjectNotesComponent } from '../project-notes-home/project-notes.component';
import { IStaff, StaffService } from '../../../shared/_services';

@Component({
  selector: 'app-project-notes-details',
  templateUrl: './project-notes-details.component.html',
  styleUrls: ['./project-notes-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectNotesDetailsComponent implements OnInit {
    id: number;
    projectNote: IProjectNote;
    staff: IStaff[];

    private initialized: boolean = false;
    private subscription: Subscription = new Subscription();

    constructor(private cdr: ChangeDetectorRef, private route: ActivatedRoute, private router: Router, private engineeringService: EngineeringService, private modalService: ModalService, private staffService: StaffService) {
        this.cdr.detach();
        this.ngOnInit();
    }

    check(): void {
        this.cdr.detectChanges();
    }

    ngOnInit(): void {
        if (!this.initialized) {
            this.subscription.add(this.route.paramMap.subscribe(
                paramMap => {
                    this.id = +paramMap.get('id');
                    this.subscription.add(this.engineeringService.getProjectNote
                        (this.id).subscribe(
                            projectNote => {
                                this.projectNote = projectNote;
                                this.check();
                            }, error => console.log(error)
                        ));
                }
            ));
            this.subscription.add(this.staffService.getAllStaff().subscribe(
                (staff: IStaff[]) => {
                    this.staff = staff;
                    this.check();
                }
            ));
            this.initialized = true;
        }
    }

    ngOnDestroy(): void {
        if (!this.subscription.closed)
            this.subscription.unsubscribe();
    }

    onSubmit() {
        console.log(this.projectNote);
        //this.engineeringService.register(this.projectNote)
        //    .subscribe(data => {
        //        this.projectNote = data;
        //        this.check();
        //    })
    }

    addProjectNote(): void {
        this.modalService.show(ProjectNotesComponent);
    }


}
