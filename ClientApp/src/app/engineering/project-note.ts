import { Binary } from '@angular/compiler';

export interface IProjectNote {
    eN: number;
    eN_ENG_ID: number;
    eN_ORDER: Binary;
    eN_MODIFIED: Binary;
    eN_ON_REPORT: string;
    eN_DIS_IND: string;
    eN_COMMENT: string;
    eN_CREATED_BY: string;
    eN_MODIFIED_BY: string;
    eN_CREATED_DT: Date;
    eN_MODIFIED_DT: Date;
}
