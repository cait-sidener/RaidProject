import { Binary } from '@angular/compiler';

export interface ICertTitle {
	rcT_ID: number;
	rcT_RJ_ID: number;
	rcT_STATUS: number;
	rcT_STATUS_STRING: string;
	rcT_REQUEST: number;
	rcT_REQUEST_STRING: string;
	rcT_ORDERED_BY: number;
	rcT_ORDERED_BY_STRING: string;
	rcT_RETURNED_TO: number;
	rcT_RETURNED_TO_STRING: string;
	rcT_ASSIGNED_TO: number;
	rcT_ASSIGNED_TO_STRING: string;
	rcT_TRACT_CT: string;
	rcT_ORDERED_DT: Date;
	rcT_DUE_DT: Date;
	rcT_RETURNED_DT: Date;
	rcT_EST_COMP_DT: Date;
	rcT_CREATED_BY: string;
	rcT_CREATED_DT: Date;
	rcT_DIS_IND: string;
	rcT_MODIFIED_BY: string;
	rcT_MODIFIED_DT: Date;
	rcT_MODIFIED: Binary;
}
