import { Binary } from '@angular/compiler';

export interface ISurvey {
    srV_ID: number;
    srV_PROJ_NUM: string;
    srV_REMARKS: string;
    srV_ASSIGNED: number;
    srV_ITEMS_RCVD: string;
    srV_RCVD_DT: Date;
    srV_ASSIGNED_DT: Date;
    srV_CREATED_BY: string;
    srV_CREATED_DT: Date;
    srV_DIS_IND: string;
    srV_MODIFIED_BY: string;
    srV_MODIFIED_DT: Date;
    srV_MODIFIED: Binary;
}
