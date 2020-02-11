using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace RaidProject.Models {
    public class CTAgents {
        [ReadOnly(true)]
        [Display(Name = "RVA_ID")]
        public int RVA_ID { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RVA_COMPANY_NAME")]
        public string RVA_COMPANY_NAME { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RVA_SALUTATION")]
        public int RVA_SALUTATION { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RVA_SALUTE_STRING")]
        public string RVA_SALUTE_STRING { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RVA_FIRST_NAME")]
        public string RVA_FIRST_NAME { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RVA_LAST_NAME")]
        public string RVA_LAST_NAME { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RVA_NICK_NAME")]
        public string RVA_NICK_NAME { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RVA_MI")]
        public string RVA_MI { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RVA_SUFFIX")]
        public string RVA_SUFFIX { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RVA_EMAIL")]
        public string RVA_EMAIL { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RVA_WORK_PHONE")]
        public string RVA_WORK_PHONE { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RVA_WORK_EXTENSION")]
        public string RVA_WORK_EXTENSION { get; set; }
        [ReadOnly(true)]
        [Display(Name = "RVA_MOBILE_PHONE")]
        public string RVA_MOBILE_PHONE { get; set; }
        [ReadOnly(true)]
        [Display(Name = "RVA_RW_SECTION")]
        public int RVA_RW_SECTION { get; set; }
        [ReadOnly(true)]
        [Display(Name = "RVA_DIS_IND")]
        public string RVA_DIS_IND { get; set; }
        [ReadOnly(true)]
        [Display(Name = "RVA_ACTIVE_IND")]
        public string RVA_ACTIVE_IND { get; set; }
    }
}
