using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using Microsoft.AspNetCore.Mvc.Rendering;
using Newtonsoft.Json;

namespace RaidProject.Models {
    public class Staff {
        [ReadOnly(true)]
        [Display(Name = "RS_RW_SECTION_NAME")]
        public string RS_RW_SECTION_NAME { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RS_RW_JOB_TITLE_STRING")]
        public string RS_RW_JOB_TITLE_STRING { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RS_SALUTE_STRING")]
        public string RS_SALUTE_STRING { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RS_NICK_NAME")]
        public string RS_NICK_NAME { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RS_FIRST_NAME")]
        public string RS_FIRST_NAME { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RS_MIDDLE_NAME")]
        public string RS_MIDDLE_NAME { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RS_LAST_NAME")]
        public string RS_LAST_NAME { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RS_SUFFIX")]
        public string RS_SUFFIX { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RS_INITIALS")]
        public string RS_INITIALS { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RS_EMAIL")]
        public string RS_EMAIL { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RS_WORK_PHONE")]
        public string RS_WORK_PHONE { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RS_WORK_EXTENSION")]
        public string RS_WORK_EXTENSION { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RS_MOBILE_PHONE")]
        public string RS_MOBILE_PHONE { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RS_ACTIVE_IND")]
        public string RS_ACTIVE_IND { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RS_COMMENT")]
        public string RS_COMMENT { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RS_ID")]
        public int RS_ID { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RS_CREATED_BY")]
        public string RS_CREATED_BY { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RS_CREATED_DT")]
        public DateTime RS_CREATED_DT { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RS_DIS_IND")]
        public string RS_DIS_IND { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RS_MODIFIED_BY")]
        public string RS_MODIFIED_BY { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RS_MODIFIED_DT")]
        public DateTime RS_MODIFIED_DT { get; set; }
        
        [ReadOnly(true)]
        [Display(Name = "RS_RW_SECTION")]
        public int RS_RW_SECTION { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RS_SALUTATION")]
        public int RS_SALUTATION { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RS_RW_JOB_TITLE")]
        public int RS_RW_JOB_TITLE { get; set; }
    }
}
