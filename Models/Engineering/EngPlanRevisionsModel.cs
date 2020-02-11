using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace RaidProject.Models
{
    public class PlanRevisions
    {
        [ReadOnly(true)]
        [Display(Name = "EPR_ID")]
        public int EPR_ID { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EPR_ENG_ID")]
        public int EPR_ENG_ID { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EPR_MODIFIED")]
        public byte EPR_MODIFIED { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EPR_PLAN_CHANGE_REC_DT")]
        [DisplayFormat(DataFormatString = "{0:MM-dd-yyyy}", ApplyFormatInEditMode = true)]
        public DateTime EPR_PLAN_CHANGE_REC_DT { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EPR_REQUEST_REC_DT")]
        [DisplayFormat(DataFormatString = "{0:MM-dd-yyyy}", ApplyFormatInEditMode = true)]
        public DateTime EPR_REQUEST_REC_DT { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EPR_TO_DESIGN_DT")]
        public DateTime EPR_TO_DESIGN_DT { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EPR_COMPLETED_DT")]
        [DisplayFormat(DataFormatString = "{0:MM-dd-yyyy}", ApplyFormatInEditMode = true)]
        public DateTime EPR_COMPLETED_DT { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EPR_CREATED_DT")]
        [DisplayFormat(DataFormatString = "{0:MM-dd-yyyy}", ApplyFormatInEditMode = true)]
        public DateTime EPR_CREATED_DT { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EPR_MODIFIED_DT")]
        [DisplayFormat(DataFormatString = "{0:MM-dd-yyyy}", ApplyFormatInEditMode = true)]
        public DateTime EPR_MODIFIED_DT { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EPR_DIS_IND")]
        public string EPR_DIS_IND { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EPR_MODIFIED_BY")]
        public string EPR_MODIFIED_BY { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EPR_CREATED_BY")]
        public string EPR_CREATED_BY { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EPR_REQUESTOR")]
        public string EPR_REQUESTOR { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EPR_REQUEST")]
        public string EPR_REQUEST { get; set; }
    }
}
