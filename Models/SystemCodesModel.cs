using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using Microsoft.AspNetCore.Mvc.Rendering;
using Newtonsoft.Json;

namespace RaidProject.Models {
    public class SystemCodes {
        [ReadOnly(true)]
        [Display(Name = "CD_Category")]
        public string CD_Category { get; set; }

        [ReadOnly(true)]
        [Display(Name = "CD_ORDER")]
        public byte CD_ORDER { get; set; }
        [ReadOnly(true)]

        [Display(Name = "CD_DISPLAY")]
        public string CD_DISPLAY { get; set; }

        [ReadOnly(true)]
        [Display(Name = "CD_DESCRIPT")]
        public string CD_DESCRIPT { get; set; }

        [ReadOnly(true)]
        [Display(Name = "CD_CODE")]
        public string CD_CODE { get; set; }

        [ReadOnly(true)]
        [Display(Name = "CD_EXTERNAL")]
        public string CD_EXTERNAL { get; set; }

        [ReadOnly(true)]
        [Display(Name = "CD_END_DT")]
        public DateTime CD_END_DT { get; set; }

        [ReadOnly(true)]
        [Display(Name = "CD_ID")]
        public int CD_ID { get; set; }

        [ReadOnly(true)]
        [Display(Name = "CD_CREATED_BY")]
        public string CD_CREATED_BY { get; set; }

        [ReadOnly(true)]
        [Display(Name = "CD_CREATED_DT")]
        public DateTime CD_CREATED_DT { get; set; }

        [ReadOnly(true)]
        [Display(Name = "CD_DIS_IND")]
        public string CD_DIS_IND { get; set; }

        [ReadOnly(true)]
        [Display(Name = "CD_MODIFIED_BY")]
        public string CD_MODIFIED_BY { get; set; }

        [ReadOnly(true)]
        [Display(Name = "CD_MODIFIED_DT")]
        public DateTime CD_MODIFIED_DT { get; set; }

        [ReadOnly(true)]
        [Display(Name = "CD_MODIFIED")]
        public byte CD_MODIFIED { get; set; }
    }
}
