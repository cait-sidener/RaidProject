using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using Microsoft.AspNetCore.Mvc.Rendering;
using Newtonsoft.Json;

namespace RaidProject.Models {
    public class County {
        [ReadOnly(true)]
        [Display(Name = "RCO_NUM")]
        public int RCO_NUM { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RCO_DISTRICT")]
        public int RCO_DISTRICT { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RCO_ABBR")]
        public string RCO_ABBR { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RCO_NAME")]
        public string RCO_NAME { get; set; }

        [ReadOnly(true)]
        [Display(Name = "RCO_SEAT")]
        public string RCO_SEAT { get; set; }
    }
}
