using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using Microsoft.AspNetCore.Mvc.Rendering;
using Newtonsoft.Json;

namespace RaidProject.Models
{
    public class RailroadModel
    {
        [ReadOnly(true)]
        [Display(Name = "RRA_COUNTY_NAME")]
        public string RRA_COUNTY_NAME { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RRA_RR_COMPANY_NAME")]
        public string RRA_RR_COMPANY_NAME { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RRA_AGREEMENT_NUMBER")]
        public string RRA_AGREEMENT_NUMBER { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RRA_ROUTE")]
        public string RRA_ROUTE { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RRA_LOCATION")]
        public string RRA_LOCATION { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RRA_QTR_SECTION")]
        public string RRA_QTR_SECTION { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RRA_SECTION")]
        public byte RRA_SECTION { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RRA_TOWNSHIP")]
        public byte RRA_TOWNSHIP { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RRA_RANGE")]
        public byte RRA_RANGE { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RRA_RANGE_DIR")]
        public string RRA_RANGE_DIR { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RRA_AREA")]
        public decimal RRA_AREA { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RRA_LENGTH")]
        public decimal RRA_LENGTH { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RRA_SPOT?")]
        [JsonProperty("RRA_SPOT?")]
        public string RRA_SPOT { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RRA_LAST_AGREEMENT_DATE")]
        public DateTime RRA_LAST_AGREEMENT_DATE { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RRA_DURATION")]
        public int RRA_DURATION { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RRA_LAST_AGREEMENT_EXPIRATION_DATE")]
        public DateTime RRA_LAST_AGREEMENT_EXPIRATION_DATE { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RRA_RENT_AMOUNT")]
        public decimal RRA_RENT_AMOUNT { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RRA_LEASE_PURPOSE")]
        public string RRA_LEASE_PURPOSE { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RRA_REASON_FOR_TERMINATION")]
        public string RRA_REASON_FOR_TERMINATION { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RRA_DESCRIPTION")]
        public string RRA_DESCRIPTION { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RRA_CD_NUM")]
        public string RRA_CD_NUM { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RRA_AUDIT_NUM")]
        public string RRA_AUDIT_NUM { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RRA_LD_NUM")]
        public string RRA_LD_NUM { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RRA_HIGHWAY_STATUS")]
        public string RRA_HIGHWAY_STATUS { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RRA_PLANS_MARKED")]
        public string RRA_PLANS_MARKED { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RRA_ID")]
        public int RRA_ID { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RRA_CREATED_BY")]
        public string RRA_CREATED_BY { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RRA_CREATED_DT")]
        public DateTime RRA_CREATED_DT { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RRA_DIS_IND")]
        public string RRA_DIS_IND { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RRA_MODIFIED_BY")]
        public string RRA_MODIFIED_BY { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RRA_MODIFIED_DT")]
        public DateTime RRA_MODIFIED_DT { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RRA_MODIFIED")]
        public byte RRA_MODIFIED { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RRA_RRC_ID")]
        public int RRA_RRC_ID { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RRA_COUNTY")]
        public byte RRA_COUNTY { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RRA_DURATION_UNITS")]
        public int RRA_DURATION_UNITS { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RRA_TOWNSHIP_DIR")]
        public string RRA_TOWNSHIP_DIR { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RRC_CREATED_BY")]
        public string RRC_CREATED_BY { get; set; }
        [ReadOnly(true)]
        [Display(Name = "RRC_CREATED_DT")]
        public DateTime RRC_CREATED_DT { get; set; }
        [ReadOnly(true)]
        [Display(Name = "RRC_MODIFIED_BY")]
        public string RRC_MODIFIED_BY { get; set; }
        [ReadOnly(true)]
        [Display(Name = "RRC_MODIFIED_DT")]
        public DateTime RRC_MODIFIED_DT { get; set; }
        [ReadOnly(true)]
        [Display(Name = "RRC_MODIFIED")]
        public byte RRC_MODIFIED { get; set; }
        [ReadOnly(true)]
        [Display(Name = "RRC_COMPANY_NAME")]
        public string RRC_COMPANY_NAME { get; set; }
        [ReadOnly(true)]
        [Display(Name = "RRC_ABBREVIATION")]
        public string RRC_ABBREVIATION { get; set; }
        [ReadOnly(true)]
        [Display(Name = "RRC_OWNER")]
        public string RRC_OWNER { get; set; }
    }
}
