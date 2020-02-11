using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace RaidProject.Models
{
    public class SurveyNotes
    {
        [ReadOnly(true)]
        [Display(Name = "SRV_ID")]
        public int SRV_ID { get; set; }
        [ReadOnly(true)]
        [Display(Name = "SRV_PROJ_NUM")]
        public string SRV_PROJ_NUM { get; set; }
        [ReadOnly(true)]
        [Display(Name = "SRV_REMARKS")]
        public string SRV_REMARKS { get; set; }
        [ReadOnly(true)]
        [Display(Name = "SRV_ASSIGNED")]
        public int SRV_ASSIGNED { get; set; }
        [ReadOnly(true)]
        [Display(Name = "SRV_ITEMS_RCVD")]
        public string SRV_ITEMS_RCVD { get; set; }
        [ReadOnly(true)]
        [Display(Name = "SRV_RCVD_DT")]
        [DisplayFormat(DataFormatString = "{0:MM-dd-yyyy}", ApplyFormatInEditMode = true)]
        public DateTime SRV_RCVD_DT { get; set; }
        [ReadOnly(true)]
        [Display(Name = "SRV_ASSIGNED_DT")]
        [DisplayFormat(DataFormatString = "{0:MM-dd-yyyy}", ApplyFormatInEditMode = true)]
        public DateTime SRV_ASSIGNED_DT { get; set; }
        [ReadOnly(true)]
        [Display(Name = "SRV_CREATED_BY")]
        public string SRV_CREATED_BY { get; set; }
        [ReadOnly(true)]
        [Display(Name = "SRV_CREATED_DT")]
        [DisplayFormat(DataFormatString = "{0:MM-dd-yyyy}", ApplyFormatInEditMode = true)]
        public DateTime SRV_CREATED_DT { get; set; }
        [ReadOnly(true)]
        [Display(Name = "SRV_DIS_IND")]
        public string SRV_DIS_IND { get; set; }
        [ReadOnly(true)]
        [Display(Name = "SRV_MODIFIED_BY")]
        public string SRV_MODIFIED_BY { get; set; }
        [ReadOnly(true)]
        [Display(Name = "SRV_MODIFIED_DT")]
        [DisplayFormat(DataFormatString = "{0:MM-dd-yyyy}", ApplyFormatInEditMode = true)]
        public DateTime SRV_MODIFIED_DT { get; set; }
        [ReadOnly(true)]
        [Display(Name = "SRV_MODIFIED")]
        public byte SRV_MODIFIED { get; set; }
    }
}
