import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { IRailroad } from '../railroad';
import { RailroadService } from '../_services';
import { Subscription, Subject } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { ModalService } from '../../shared/modal/_services';
import { RrnewComponent } from '../rrnew/rrnew.component';

@Component({
  selector: 'app-rrtable',
  templateUrl: './rrtable.component.html',
  styleUrls: ['./rrtable.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
   
})
export class RrtableComponent implements OnInit {
    railroads: IRailroad[];
    showRailroads: boolean;
    filteredRailroads: IRailroad[] = [];
    pagedRailroads: IRailroad[] = [];

    private _listFilter: string;
    get listFilter(): string {
        return this._listFilter; //Avoid manipulating the data in the getter, formatting/etc. should be done with pipes.
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredRailroads = this._listFilter ? this.performFilter(this.listFilter) : this.railroads;
        this.check();
    }

    private subscription: Subscription = new Subscription();
    private refreshData: Subject<void> = new Subject<void>();

    constructor(private cdr: ChangeDetectorRef, private railroadService: RailroadService, private modalService: ModalService) {
        this.cdr.detach();
    }

    check(): void {
        this.cdr.detectChanges();
    }

    ngOnInit() {
        this.showRailroads =
            this.railroadService.railroadList_Show;
        this.filteredRailroads = this.railroads =
            this.railroadService.railroadList_Saved;
        this.check();

        this.subscription.add(this.refreshData.pipe(
            startWith(0),
            switchMap(() => this.railroadService.getRailroads())
        ).subscribe(
            railroads => {
                this.filteredRailroads = this.railroads =
                    railroads;
                this.check();
            }, error => console.log(error)
        ));
    }

    ngOnDestroy(): void {
        this.railroadService.railroadList_Show = this.showRailroads;
        this.railroadService.railroadList_Saved = this.railroads;
        if (!this.subscription.closed)
            this.subscription.unsubscribe();
    }

    onChangePage(pageItems: IRailroad[]) {
        this.pagedRailroads = pageItems;
        this.check();
    }

    trackById(index: number, railroad: IRailroad): number {
        if (!railroad) return null;
        return railroad.rrA_ID;
    }

    performFilter(filterBy: string): IRailroad[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.railroads.filter((railroad: IRailroad) => railroad.rrA_RR_COMPANY_NAME.toLocaleLowerCase().indexOf(filterBy) !== -1);
        this.check();
    }

    toggleRailroads(): void {
        this.showRailroads = !this.showRailroads;
        this.check();
    }

    refreshRailroads(): void {
        this.refreshData.next();
    }

    addRailroad(): void {
        this.modalService.show(RrnewComponent);
    }

}


