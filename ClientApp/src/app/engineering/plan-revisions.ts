import { Binary } from '@angular/compiler';

export interface IPlanRevisions {
    epR_ID: number;
    epR_ENG_ID: number;
    epR_PLAN_CHANGE_REC_DT: Date;
    epR_MODIFIED: Binary;
    epR_REQUEST_REC_DT: Date;
    epR_TO_DESIGN_DT: Date;
    epR_COMPLETED_DT: Date;
    epR_MODIFIED_BY: string;
    epR_CREATED_BY: Date;
    epR_MODIFIED_DT: Date;
    epR_DIS_IND: string;
    epR_REQUESTOR: string;
    epR_REQUEST: string;
}
