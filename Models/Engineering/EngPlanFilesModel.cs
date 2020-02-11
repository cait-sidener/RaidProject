using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using Microsoft.AspNetCore.Mvc.Rendering;
using Newtonsoft.Json;

namespace RaidProject.Models {
    public class PlanFiles {
        [ReadOnly(true)]
        [Display(Name = "EPF_ID")]
        public int EPF_ID { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EPF_RJ_ID")]
        public int EPF_RJ_ID { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EPF_BOX")]
        public string EPF_BOX { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EPF_COUNTY")]
        public byte EPF_COUNTY { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EPF_COUNTY_NAME")]
        public string EPF_COUNTY_NAME { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EPF_FILE_STATUS")]
        public int EPF_FILE_STATUS { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EPF_FILE_STATUS_STRING")]
        public string EPF_FILE_STATUS_STRING { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EPF_FILE_LOCATION")]
        public int EPF_FILE_LOCATION { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EPF_FILE_LOCATION_STRING")]
        public string EPF_FILE_LOCATION_STRING { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EPF_FOLDER_COLOR")]
        public int EPF_FOLDER_COLOR { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EPF_FOLDER_COLOR_STRING")]
        public string EPF_FOLDER_COLOR_STRING { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EPF_FILE_NUM")]
        public int EPF_FILE_NUM { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EPF_FILE_PART")]
        public string EPF_FILE_PART { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EPF_COMMENTS")]
        public string EPF_COMMENTS { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EPF_CLEARED_SIDE")]
        public string EPF_CLEARED_SIDE { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EPF_CLEARED_DT")]
        public DateTime EPF_CLEARED_DT { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EPF_COND_CLEAR_DT")]
        public DateTime EPF_COND_CLEAR_DT { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EPF_MISSING")]
        public string EPF_MISSING { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EPF_SCANNED")]
        public string EPF_SCANNED { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EPF_DGN")]
        public string EPF_DGN { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EPF_PLAN_FILE_MISSING")]
        public string EPF_PLAN_FILE_MISSING { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EPF_MicroFilmed")]
        public string EPF_MicroFilmed { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EPF_ACTIVE_SIDE")]
        public string EPF_ACTIVE_SIDE { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EPF_TO_SCANNER_DT")]
        public DateTime EPF_TO_SCANNER_DT { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EPF_TRACTS")]
        public string EPF_TRACTS { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EPF_DESCRIPT")]
        public string EPF_DESCRIPT { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EPF_CREATED_BY")]
        public string EPF_CREATED_BY { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EPF_CREATED_DT")]
        public DateTime EPF_CREATED_DT { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EPF_MODIFIED_BY")]
        public string EPF_MODIFIED_BY { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EPF_MODIFIED_DT")]
        public DateTime EPF_MODIFIED_DT { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EPF_MODIFIED")]
        public byte EPF_MODIFIED { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EPF_DIS_IND")]
        public string EPF_DIS_IND { get; set; }
    }
}
