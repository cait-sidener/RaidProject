using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using RaidProject.DataManager;
using RaidProject.Models;

namespace RaidProject.Controllers {
    [Route("api/[controller]")]
    public class CountyController : Controller {
        IConfiguration _configuration;
        CountyManager _countyManager;

        public CountyController(IConfiguration configuration) {
            _configuration = configuration;
            _countyManager = new CountyManager(configuration);
        }

        [HttpGet]
        [Route("[action]")]
        public async Task<List<County>> GetAllCounties() {

            var x = await _countyManager.GetAllCounties();
            var t = JsonConvert.DeserializeObject<List<County>>(x);
            return t;
        }
    }
}