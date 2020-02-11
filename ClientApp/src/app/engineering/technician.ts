import { Binary } from '@angular/compiler';

export interface ITechnician {
    tecH_ID: number;
    tecH_ENG_ID: number;
    tecH_ASSIGNED_DT: Date;
    tecH_UNASSIGNED_DT: Date;
    tecH_DIS_IND: string;
    tecH_CREATED_BY: string;
    tecH_CREATED_DT: Date;
    tecH_MODIFIED_BY: string;
    tecH_MODIFIED_DT: Date;
    tecH_MODIFIED: Binary;
    tecH_RS_ID: number;
    tecH_TECHNAME: string;
}

