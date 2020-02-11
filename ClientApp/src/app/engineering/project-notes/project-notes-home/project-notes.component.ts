import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { IProjectNote } from '../../project-note';
import { EngineeringService } from '../../_services/engineering.service';

@Component({
  selector: 'app-project-notes',
  templateUrl: './project-notes.component.html',
  styleUrls: ['./project-notes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectNotesComponent implements OnInit {
    projectNote: IProjectNote;

    constructor(private cdr: ChangeDetectorRef, private engineeringService: EngineeringService) {
        this.cdr.detach();
    }

    check(): void {
        this.cdr.detectChanges();
    }

    ngOnInit(): void {
        this.projectNote = {} as IProjectNote;
        this.check();
    }

    onSubmit() {
        console.log(this.projectNote);
        //this.engineeringService.registerProjectNotes(this.projectNote)
        //    .subscribe(data => {
        //        this.projectNote = data;
        //        this.check();
        //    }) 
    }
}
