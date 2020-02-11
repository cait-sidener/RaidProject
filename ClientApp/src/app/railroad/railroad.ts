import { Binary } from '@angular/compiler';

export interface IRailroad {
	rrA_COUNTY_NAME: string;
	rrA_RR_COMPANY_NAME: string;
	rrA_AGREEMENT_NUMBER: string;
	rrA_ROUTE: string;
	rrA_LOCATION: string;
	rrA_QTR_SECTION: string;
	rrA_SECTION: Binary;
	rrA_TOWNSHIP: Binary;
	rrA_RANGE: Binary;
	rrA_RANGE_DIR: string;
	rrA_AREA: number;
	rrA_LENGTH: number;
	rrA_SPOT: string;
	rrA_LAST_AGREEMENT_DATE: Date;
	rrA_DURATION: number;
	rrA_LAST_AGREEMENT_EXPIRATION_DATE: Date;
	rrA_RENT_AMOUNT: number;
	rrA_LEASE_PURPOSE: string;
	rrA_REASON_FOR_TERMINATION: string;
	rrA_DESCRIPTION: string;
	rrA_CD_NUM: string;
	rrA_AUDIT_NUM: string;
	rrA_LD_NUM: string;
	rrA_HIGHWAY_STATUS: string;
	rrA_PLANS_MARKED: string;
	rrA_ID: number;
	rrA_CREATED_BY: string;
	rrA_CREATED_DT: Date;
	rrA_DIS_IND: string;
	rrA_MODIFIED_BY: string;
	rrA_MODIFIED_DT: Date;
	rrA_MODIFIED: Binary
	rrA_RRC_ID: number;
	rrA_COUNTY: Binary;
	rrA_DURATION_UNITS: number;
	rrA_TOWNSHIP_DIR: string;
	rrC_CREATED_BY: string;
	rrC_CREATED_DT: Date;
	rrC_MODIFIED_BY: string;
	rrC_MODIFIED_DT: Date;
	rrC_MODIFIED: Binary;
	rrC_COMPANY_NAME: string;
	rrC_ABBREVIATION: string;
	rrC_OWNER: string;
}
