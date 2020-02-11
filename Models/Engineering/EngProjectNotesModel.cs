using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using Microsoft.AspNetCore.Mvc.Rendering;
namespace RaidProject.Models
{
    public class ProjectNotes
    {
        [ReadOnly(true)]
        [Display(Name = "EN_ID")]
        public int EN_ID { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EN_ENG_ID")]
        public int EN_ENG_ID { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EN_ORDER")]
        public byte EN_ORDER { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EN_MODIFIED")]
        public byte EN_MODIFIED { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EN_ON_REPORT")]
        public string EN_ON_REPORT { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EN_DIS_IND")]
        public string EN_DIS_IND { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EN_COMMENT")]
        public string EN_COMMENT { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EN_CREATED_BY")]
        public string EN_CREATED_BY { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EN_MODIFIED_BY")]
        public string EN_MODIFIED_BY { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EN_CREATED_DT")]
        [DisplayFormat(DataFormatString = "{0:MM-dd-yyyy}", ApplyFormatInEditMode = true)]
        public DateTime EN_CREATED_DT { get; set; }

        [ReadOnly(true)]
        [Display(Name = "EN_MODIFIED_DT")]
        [DisplayFormat(DataFormatString = "{0:MM-dd-yyyy}", ApplyFormatInEditMode = true)]
        public DateTime EN_MODIFIED_DT { get; set; }
    }
}
