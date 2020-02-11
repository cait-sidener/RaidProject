import { Component, ChangeDetectorRef, Input, Output, EventEmitter, SimpleChanges, OnInit, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { PaginatorService } from './_services';

@Component({
	selector: 'app-pagination',
	templateUrl: './pagination.component.html',
	styleUrls: ['./pagination.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent implements OnInit, OnChanges {
	@Input() items: Array<any>;
	@Input() initialPage = 1;
	@Input() pageSize = 15;
	@Input() maxPages = 8;

	@Output() changePage = new EventEmitter<any>(true);

	pager: any = {};

	constructor(private cdr: ChangeDetectorRef, private pagerService: PaginatorService) {
	}

	check(): void { //Always run check if changes in component need to be reflected on view.
		this.cdr.markForCheck(); //Utilize OnPush change detection on parent.
	}

	ngOnInit() {
		if (this.items && this.items.length) this.setPage(this.initialPage);
		this.check();
	}

	ngOnChanges(changes: SimpleChanges) {
		if (changes.items.currentValue !== changes.items.previousValue) {
			this.setPage(this.initialPage);
		} else this.check();
	}

	private setPage(page: number) {
		this.pager = this.pagerService.paginate(this.items.length, page, this.pageSize, this.maxPages);
		var pageOfItems = this.items.slice(this.pager.startIndex, this.pager.endIndex + 1);
		this.changePage.emit(pageOfItems);
		this.check();
	}
}
