using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using Microsoft.AspNetCore.Mvc.Rendering;
using Newtonsoft.Json;

namespace RaidProject.Models {
    public class Consultants {
        [ReadOnly(true)]
        [Display(Name = "RC_ACTIVE_IND")]
        public string RC_ACTIVE_IND { get; set; }
        [ReadOnly(true)]
        [Display(Name = "RW_SECTION_NAME")]
        public string RW_SECTION_NAME { get; set; }
        [ReadOnly(true)]
        [Display(Name = "RC_COMPANY_NAME")]
        public string RC_COMPANY_NAME { get; set; }
        [ReadOnly(true)]
        [Display(Name = "RC_WEB_SITE")]
        public string RC_WEB_SITE { get; set; }
        [ReadOnly(true)]
        [Display(Name = "RC_ID")]
        public int RC_ID { get; set; }
        [ReadOnly(true)]
        [Display(Name = "RC_CREATED_BY")]
        public string RC_CREATED_BY { get; set; }
        [ReadOnly(true)]
        [Display(Name = "RC_CREATED_DT")]
        public DateTime RC_CREATED_DT { get; set; }
        [ReadOnly(true)]
        [Display(Name = "RC_DIS_IND")]
        public string RC_DIS_IND { get; set; }
        [ReadOnly(true)]
        [Display(Name = "RC_MODIFIED_BY")]
        public string RC_MODIFIED_BY { get; set; }
        [ReadOnly(true)]
        [Display(Name = "RC_MODIFIED_DT")]
        public DateTime RC_MODIFIED_DT { get; set; }
        [ReadOnly(true)]
        [Display(Name = "RC_MODIFIED")]
        public byte RC_MODIFIED { get; set; }
        [ReadOnly(true)]
        [Display(Name = "RC_RW_SECTION")]
        public int RC_RW_SECTION { get; set; }
    }
}
