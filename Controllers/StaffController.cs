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
    public class StaffController : Controller {
        IConfiguration _configuration;
        StaffManager _staffManager;

        public StaffController(IConfiguration configuration) {
            _configuration = configuration;
            _staffManager = new StaffManager(configuration);
        }

        [HttpGet]
        [Route("[action]")]
        public async Task<List<Staff>> GetAllStaff() {
            var x = await _staffManager.GetAllStaff();
            var t = JsonConvert.DeserializeObject<List<Staff>>(x);
            return t;
        }
    }
}