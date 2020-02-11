using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace RaidProject.Models
{
    public class Technicians
    {
        [ReadOnly(true)]
        [Display(Name = "TECH_ID")]
        public int TECH_ID { get; set; }

        [ReadOnly(true)]
        [Display(Name = "TECH_ENG_ID")]
        public int TECH_ENG_ID { get; set; }

        [ReadOnly(true)]
        [Display(Name = "TECH_ASSIGNED_DT")]
        [DisplayFormat(DataFormatString = "{0:MM-dd-yyyy}", ApplyFormatInEditMode = true)]
        public DateTime TECH_ASSIGNED_DT { get; set; }

        [ReadOnly(true)]
        [Display(Name = "TECH_UNASSIGNED_DT")]
        [DisplayFormat(DataFormatString = "{0:MM-dd-yyyy}", ApplyFormatInEditMode = true)]
        public DateTime TECH_UNASSIGNED_DT { get; set; }

        [ReadOnly(true)]
        [Display(Name = "TECH_DIS_IND")]
        public string TECH_DIS_IND { get; set; }

        [ReadOnly(true)]
        [Display(Name = "TECH_CREATED_BY")]
        public string TECH_CREATED_BY { get; set; }

        [ReadOnly(true)]
        [Display(Name = "TECH_CREATED_DT")]
        [DisplayFormat(DataFormatString = "{0:MM-dd-yyyy}", ApplyFormatInEditMode = true)]
        public DateTime TECH_CREATED_DT { get; set; }

        [ReadOnly(true)]
        [Display(Name = "TECH_MODIFIED_BY")]
        public string TECH_MODIFIED_BY { get; set; }

        [ReadOnly(true)]
        [Display(Name = "TECH_MODIFIED")]
        public byte TECH_MODIFIED { get; set; }

        [ReadOnly(true)]
        [Display(Name = "TECH_MODIFIED_DT")]
        [DisplayFormat(DataFormatString = "{0:MM-dd-yyyy}", ApplyFormatInEditMode = true)]
        public DateTime TECH_MODIFIED_DT { get; set; }

        [ReadOnly(true)]
        [Display(Name = "TECH_RS_ID")]
        public int TECH_RS_ID { get; set; }

        [ReadOnly(true)]
        [Display(Name = "TECH_TECHNAME")]
        public string TECH_TECHNAME { get; set; }
    }
}
