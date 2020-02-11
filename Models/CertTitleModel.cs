using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace RaidProject.Models {
    public class CertTitle {
        [ReadOnly(true)]
        [Display(Name = "RCT_ID")]
        public int RCT_ID { get; set; }
        [ReadOnly(true)]
        [Display(Name = "RCT_RJ_ID")]
        public int RCT_RJ_ID { get; set; }
        [ReadOnly(true)]
        [Display(Name = "RCT_STATUS")]
        public int RCT_STATUS { get; set; }
        [ReadOnly(true)]
        [Display(Name = "RCT_STATUS_STRING")]
        public string RCT_STATUS_STRING { get; set; }
        [ReadOnly(true)]
        [Display(Name = "RCT_REQUEST")]
        public int RCT_REQUEST { get; set; }
        [ReadOnly(true)]
        [Display(Name = "RCT_REQUEST_STRING")]
        public string RCT_REQUEST_STRING { get; set; }
        [ReadOnly(true)]
        [Display(Name = "RCT_ORDERED_BY")]
        public int RCT_ORDERED_BY { get; set; }
        [ReadOnly(true)]
        [Display(Name = "RCT_ORDERED_BY_STRING")]
        public string RCT_ORDERED_BY_STRING { get; set; }
        [ReadOnly(true)]
        [Display(Name = "RCT_RETURNED_TO")]
        public int RCT_RETURNED_TO { get; set; }
        [ReadOnly(true)]
        [Display(Name = "RCT_RETURNED_TO_STRING")]
        public string RCT_RETURNED_TO_STRING { get; set; }
        [ReadOnly(true)]
        [Display(Name = "RCT_ASSIGNED_TO")]
        public int RCT_ASSIGNED_TO { get; set; }
        [ReadOnly(true)]
        [Display(Name = "RCT_ASSIGNED_TO_STRING")]
        public string RCT_ASSIGNED_TO_STRING { get; set; }
        [ReadOnly(true)]
        [Display(Name = "RCT_TRACT_CT")]
        public string RCT_TRACT_CT { get; set; }
        [ReadOnly(true)]
        [Display(Name = "RCT_ORDERED_DT")]
        public DateTime RCT_ORDERED_DT { get; set; }
        [ReadOnly(true)]
        [Display(Name = "RCT_DUE_DT")]
        public DateTime RCT_DUE_DT { get; set; }
        [ReadOnly(true)]
        [Display(Name = "RCT_RETURNED_DT")]
        public DateTime RCT_RETURNED_DT { get; set; }
        [ReadOnly(true)]
        [Display(Name = "RCT_EST_COMP_DT")]
        public DateTime RCT_EST_COMP_DT { get; set; }
        [ReadOnly(true)]
        [Display(Name = "RCT_CREATED_BY")]
        public string RCT_CREATED_BY { get; set; }
        [ReadOnly(true)]
        [Display(Name = "RCT_CREATED_DT")]
        public DateTime RCT_CREATED_DT { get; set; }
        [ReadOnly(true)]
        [Display(Name = "RCT_DIS_IND")]
        public string RCT_DIS_IND { get; set; }
        [ReadOnly(true)]
        [Display(Name = "RCT_MODIFIED_BY")]
        public string RCT_MODIFIED_BY { get; set; }
        [ReadOnly(true)]
        [Display(Name = "RCT_MODIFIED_DT")]
        public DateTime RCT_MODIFIED_DT { get; set; }
        [ReadOnly(true)]
        [Display(Name = "RCT_MODIFIED")]
        public byte RCT_MODIFIED { get; set; }
        
    }
}
