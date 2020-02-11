import { Binary } from '@angular/compiler';

export interface IPlanFiles {
    epF_ID: number;
    epF_RJ_ID: number;
    epF_BOX: string;
    epF_COUNTY: Binary;
    epF_COUNTY_NAME: string;
    epF_FILE_STATUS: number;
    epF_FILE_STATUS_STRING: string;
    epF_FILE_LOCATION: number;
    epF_FILE_LOCATION_STRING: string;
    epF_FOLDER_COLOR: number;
    epF_FOLDER_COLOR_STRING: string;
    epF_FILE_NUM: number;
    epF_FILE_PART: string;
    epF_COMMENTS: string;
    epF_CLEARED_SIDE: string;
    epF_CLEARED_DT: Date;
    epF_COND_CLEAR_DT: Date;
    epF_MISSING: string;
    epF_SCANNED: string;
    epF_DGN: string;
    epF_PLAN_FILE_MISSING: string;
    epF_MicroFilmed: string;
    epF_ACTIVE_SIDE: string;
    epF_TO_SCANNER_DT: Date;
    epF_TRACTS: string;
    epF_DESCRIPT: string;
    epF_CREATED_BY: string;
    epF_CREATED_DT: Date;
    epF_MODIFIED_BY: string;
    epF_MODIFIED_DT: Date;
    epF_MODIFIED: Binary;
    epF_DIS_IND: string;
}
