using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace RaidProject.Models {
    public class Engineering {
        [ReadOnly(true)]
        [Display(Name = "ENG_ID")]
        public int ENG_ID { get; set; }
        [ReadOnly(true)]
        [Display(Name = "ENG_RC_ID")]
        public int ENG_RC_ID { get; set; }
        [ReadOnly(true)]
        [Display(Name = "ENG_RJ_ID")]
        public int ENG_RJ_ID { get; set; }
        [ReadOnly(true)]
        [Display(Name = "ENG_STATUS")]
        public int ENG_STATUS { get; set; }
        [ReadOnly(true)]
        [Display(Name = "ENG_TRACTS_AMT")]
        public byte ENG_TRACTS_AMT { get; set; }
        [ReadOnly(true)]
        [Display(Name = "ENG_CONSULTANT_NAME")]
        public string ENG_CONSULTANT_NAME { get; set; }
        [ReadOnly(true)]
        [Display(Name = "ENG_REQUEST_ON_DT")]
        public DateTime ENG_REQUEST_ON_DT { get; set; }
        [ReadOnly(true)]
        [Display(Name = "ENG_REQUEST_TAR_DT")]
        public DateTime ENG_REQUEST_TAR_DT { get; set; }
        [ReadOnly(true)]
        [Display(Name = "ENG_CHECKER_TAR_DT")]
        public DateTime ENG_CHECKER_TAR_DT { get; set; }
        [ReadOnly(true)]
        [Display(Name = "ENG_CHECKER_ACT_DT")]
        public DateTime ENG_CHECKER_ACT_DT { get; set; }
        [ReadOnly(true)]
        [Display(Name = "ENG_TO_CHECKER_TAR_DT")]
        public DateTime ENG_TO_CHECKER_TAR_DT { get; set; }
        [ReadOnly(true)]
        [Display(Name = "ENG_TO_CHECKER_ACT_DT")]
        public DateTime ENG_TO_CHECKER_ACT_DT { get; set; }
        [ReadOnly(true)]
        [Display(Name = "ENG_CHECKER")]
        public int ENG_CHECKER { get; set; }
        [ReadOnly(true)]
        [Display(Name = "ENG_PERCENT_COMP")]
        public byte ENG_PERCENT_COMP { get; set; }
        [ReadOnly(true)]
        [Display(Name = "ENG_TO_DESIGN_TAR_DT")]
        public DateTime ENG_TO_DESIGN_TAR_DT { get; set; }
        [ReadOnly(true)]
        [Display(Name = "ENG_TO_DESIGN_ACT_DT")]
        public DateTime ENG_TO_DESIGN_ACT_DT { get; set; }
        [ReadOnly(true)]
        [Display(Name = "ENG_REC_FC_PLANS_TAR_DT")]
        public DateTime ENG_REC_FC_PLANS_TAR_DT { get; set; }
        [ReadOnly(true)]
        [Display(Name = "ENG_REC_FC_PLANS_ACT_DT")]
        public DateTime ENG_REC_FC_PLANS_ACT_DT { get; set; }
        [ReadOnly(true)]
        [Display(Name = "ENG_CT_ORDER_DT")]
        public DateTime ENG_CT_ORDER_DT { get; set; }
        [ReadOnly(true)]
        [Display(Name = "ENG_CT_DUE_DT")]
        public DateTime ENG_CT_DUE_DT { get; set; }
        [ReadOnly(true)]
        [Display(Name = "ENG_CT_REC_DT")]
        public DateTime ENG_CT_REC_DT { get; set; }
        [ReadOnly(true)]
        [Display(Name = "ENG_CT_CONTACT")]
        public int ENG_CT_CONTACT { get; set; }
        [ReadOnly(true)]
        [Display(Name = "ENG_PURCHASE_MEMO_DT")]
        public DateTime ENG_PURCHASE_MEMO_DT { get; set; }
        [ReadOnly(true)]
        [Display(Name = "ENG_REC_OFF_PLANS_TAR_DT")]
        public DateTime ENG_REC_OFF_PLANS_TAR_DT { get; set; }
        [ReadOnly(true)]
        [Display(Name = "ENG_REC_OFF_PLANS_ACT_DT")]
        public DateTime ENG_REC_OFF_PLANS_ACT_DT { get; set; }
        [ReadOnly(true)]
        [Display(Name = "ENG_LEG_TO_CHECKER_TAR_DT")]
        public DateTime ENG_LEG_TO_CHECKER_TAR_DT { get; set; }
        [ReadOnly(true)]
        [Display(Name = "ENG_LEG_TO_CHECKER_ACT_DT")]
        public DateTime ENG_LEG_TO_CHECKER_ACT_DT { get; set; }
        [ReadOnly(true)]
        [Display(Name = "ENG_LEG_CHECKER_DUE_DT")]
        public DateTime ENG_LEG_CHECKER_DUE_DT { get; set; }
        [ReadOnly(true)]
        [Display(Name = "ENG_LEG_CHECKER")]
        public int ENG_LEG_CHECKER { get; set; }
        [ReadOnly(true)]
        [Display(Name = "ENG_LEG_CHECKER_ACT_DT")]
        public DateTime ENG_LEG_CHECKER_ACT_DT { get; set; }
        [ReadOnly(true)]
        [Display(Name = "ENG_RW_FINAL_MEETING_DT")]
        public DateTime ENG_RW_FINAL_MEETING_DT { get; set; }
        [ReadOnly(true)]
        [Display(Name = "ENG_REC_FINAL_PLANS_TAR_DT")]
        public DateTime ENG_REC_FINAL_PLANS_TAR_DT { get; set; }
        [ReadOnly(true)]
        [Display(Name = "ENG_REC_FINAL_PLANS_ACT_DT")]
        public DateTime ENG_REC_FINAL_PLANS_ACT_DT { get; set; }
        [ReadOnly(true)]
        [Display(Name = "ENG_TO_APPRAISAL_TAR_DT")]
        public DateTime ENG_TO_APPRAISAL_TAR_DT { get; set; }
        [ReadOnly(true)]
        [Display(Name = "ENG_TO_APPRAISAL_ACT_DT")]
        public DateTime ENG_TO_APPRAISAL_ACT_DT { get; set; }
        [ReadOnly(true)]
        [Display(Name = "ENG_TO_JOAN_IND")]
        public string ENG_TO_JOAN_IND { get; set; }
        [ReadOnly(true)]
        [Display(Name = "ENG_CREATED_BY")]
        public string ENG_CREATED_BY { get; set; }
        [ReadOnly(true)]
        [Display(Name = "ENG_CREATED_DT")]
        public DateTime ENG_CREATED_DT { get; set; }
        [ReadOnly(true)]
        [Display(Name = "ENG_DIS_IND")]
        public string ENG_DIS_IND { get; set; }
        [ReadOnly(true)]
        [Display(Name = "ENG_MODIFIED_BY")]
        public string ENG_MODIFIED_BY { get; set; }
        [ReadOnly(true)]
        [Display(Name = "ENG_MODIFIED_DT")]
        public DateTime ENG_MODIFIED_DT { get; set; }
        [ReadOnly(true)]
        [Display(Name = "ENG_MODIFIED")]
        public byte ENG_MODIFIED { get; set; }
      
    }
}
