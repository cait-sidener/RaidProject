using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace RaidProject.Models
{
    public class Projects
    {
        [ReadOnly(true)]
        [Display(Name = "PRJ_RAID_ROUTE")]
        public string PRJ_RAID_ROUTE { get; set; }

        [ReadOnly(true)]
        [Display(Name = "PRJ_RAID_COUNTY")]
        public string PRJ_RAID_COUNTY { get; set; }

        [ReadOnly(true)]
        [Display(Name = "PRJ_RAID_DISTRICT")]
        public byte PRJ_RAID_DISTRICT { get; set; }

        [ReadOnly(true)]
        [Display(Name = "PRJ_RAID_COUNTY_NUM")]
        public byte PRJ_RAID_COUNTY_NUM { get; set; }

        [ReadOnly(true)]
        [Display(Name = "PRJ_RAID_COUNTY_SEAT")]
        public string PRJ_RAID_COUNTY_SEAT { get; set; }

        [ReadOnly(true)]
        [Display(Name = "PRJ_RAID_COUNTY_ABBR")]
        public string PRJ_RAID_COUNTY_ABBR { get; set; }

        [ReadOnly(true)]
        [Display(Name = "PRJ_RAID_FED_PROJ_NUM")]
        public string PRJ_RAID_FED_PROJ_NUM { get; set; }

        [ReadOnly(true)]
        [Display(Name = "PRJ_CPMS_ROUTE")]
        public string PRJ_CPMS_ROUTE { get; set; }

        [ReadOnly(true)]
        [Display(Name = "PRJ_CPMS_COUNTY")]
        public string PRJ_CPMS_COUNTY { get; set; }

        [ReadOnly(true)]
        [Display(Name = "PRJ_CPMS_DISTRICT")]
        public byte PRJ_CPMS_DISTRICT { get; set; }

        [ReadOnly(true)]
        [Display(Name = "PRJ_CPMS_COUNTY_NUM")]
        public byte PRJ_CPMS_COUNTY_NUM { get; set; }

        [ReadOnly(true)]
        [Display(Name = "PRJ_CPMS_COUNTY_SEAT")]
        public string PRJ_CPMS_COUNTY_SEAT { get; set; }

        [ReadOnly(true)]
        [Display(Name = "PRJ_CPMS_COUNTY_ABBR")]
        public string PRJ_CPMS_COUNTY_ABBR { get; set; }

        [ReadOnly(true)]
        [Display(Name = "PRJ_CPMS_FED_PROJ_NUM")]
        public string PRJ_CPMS_FED_PROJ_NUM { get; set; }

        [ReadOnly(true)]
        [Display(Name = "PRJ_PROJ_NUM")]
        public string PRJ_PROJ_NUM { get; set; }

        [ReadOnly(true)]
        [Display(Name = "PRJ_LOCATION")]
        public string PRJ_LOCATION { get; set; }

        [ReadOnly(true)]
        [Display(Name = "PRJ_DESCRIPT")]
        public string PRJ_DESCRIPT { get; set; }

        [ReadOnly(true)]
        [Display(Name = "PRJ_STATUS")]
        public string PRJ_STATUS { get; set; }

        [ReadOnly(true)]
        [Display(Name = "PRJ_FED_FUNDED_IND")]
        public string PRJ_FED_FUNDED_IND { get; set; }

        [ReadOnly(true)]
        [Display(Name = "PRJ_PE_FUNDED_IND")]
        public string PRJ_PE_FUNDED_IND { get; set; }

        [ReadOnly(true)]
        [Display(Name = "PRJ_ROW_FUNDED_IND")]
        public string PRJ_ROW_FUNDED_IND { get; set; }

        [ReadOnly(true)]
        [Display(Name = "PRJ_UTIL_FUNDED_IND")]
        public string PRJ_UTIL_FUNDED_IND { get; set; }

        [ReadOnly(true)]
        [Display(Name = "PRJ_CE_FUNDED_IND")]
        public string PRJ_CE_FUNDED_IND { get; set; }

        [ReadOnly(true)]
        [Display(Name = "PRJ_CONST_FUNDED_IND")]
        public string PRJ_CONST_FUNDED_IND { get; set; }

        [ReadOnly(true)]
        [Display(Name = "PRJ_ROW_PROGRESS")]
        public decimal PRJ_ROW_PROGRESS { get; set; }

        [ReadOnly(true)]
        [Display(Name = "PRJ_ROW_EST")]
        public decimal PRJ_ROW_EST { get; set; }

        [ReadOnly(true)]
        [Display(Name = "PRJ_ROW_CTD")]
        public decimal PRJ_ROW_CTD { get; set; }

        [ReadOnly(true)]
        [Display(Name = "PRJ_COUNTY_SEAT")]
        public string PRJ_COUNTY_SEAT { get; set; }

        [ReadOnly(true)]
        [Display(Name = "PRJ_ROAD_PROGRESS")]
        public decimal PRJ_ROAD_PROGRESS { get; set; }

        [ReadOnly(true)]
        [Display(Name = "PRJ_ROAD_SQUAD")]
        public string PRJ_ROAD_SQUAD { get; set; }

        [ReadOnly(true)]
        [Display(Name = "PRJ_ROAD_CONSULTANT")]
        public string PRJ_ROAD_CONSULTANT { get; set; }

        [ReadOnly(true)]
        [Display(Name = "PRJ_BRIDGE_SQUAD")]
        public string PRJ_BRIDGE_SQUAD { get; set; }

        [ReadOnly(true)]
        [Display(Name = "PRJ_BRIDGE_CONSULTANT")]
        public string PRJ_BRIDGE_CONSULTANT { get; set; }

        [ReadOnly(true)]
        [Display(Name = "PRJ_WORK_TYPE")]
        public string PRJ_WORK_TYPE { get; set; }

        [ReadOnly(true)]
        [Display(Name = "PRJ_PROGRAM")]
        public string PRJ_PROGRAM { get; set; }

        [ReadOnly(true)]
        [Display(Name = "PRJ_INDEX")]
        public string PRJ_INDEX { get; set; }

        [ReadOnly(true)]
        [Display(Name = "PRJ_LENGTH")]
        public decimal PRJ_LENGTH { get; set; }

        [ReadOnly(true)]
        [Display(Name = "PRJ_OVERALL")]
        public string PRJ_OVERALL { get; set; }

        [ReadOnly(true)]
        [Display(Name = "PRJ_CITY_RURAL_IND")]
        public string PRJ_CITY_RURAL_IND { get; set; }

        [ReadOnly(true)]
        [Display(Name = "PRJ_COMPLETE_PERCENT")]
        public decimal PRJ_COMPLETE_PERCENT { get; set; }

        [ReadOnly(true)]
        [Display(Name = "PRJ_PROJ_EST")]
        public decimal PRJ_PROJ_EST { get; set; }

        [ReadOnly(true)]
        [Display(Name = "PRJ_PROJ_CTD")]
        public decimal PRJ_PROJ_CTD { get; set; }

        [ReadOnly(true)]
        [Display(Name = "PRJ_ACT_TRACT_AMT")]
        public int PRJ_ACT_TRACT_AMT { get; set; }

        [ReadOnly(true)]
        [Display(Name = "PRJ_CS_AGREE_IND")]
        public string PRJ_CS_AGREE_IND { get; set; }

        [ReadOnly(true)]
        [Display(Name = "PRJ_PLAN_ACCESS_CONTROL")]
        public string PRJ_PLAN_ACCESS_CONTROL { get; set; }

        [ReadOnly(true)]
        [Display(Name = "PRJ_LAST_LOADED")]
        [DisplayFormat(DataFormatString = "{0:MM-dd-yyyy}", ApplyFormatInEditMode = true)]
        public DateTime PRJ_LAST_LOADED { get; set; }
    }

}
