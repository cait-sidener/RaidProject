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
    public class SystemCodesController : Controller {

        IConfiguration _configuration;
        SystemCodesManager _systemCodesManager;

        public SystemCodesController(IConfiguration configuration) {
            _configuration = configuration;
            _systemCodesManager = new SystemCodesManager(configuration);
        }

        [HttpGet]
        [Route("[action]")]
        public async Task<List<SystemCodes>> GetAllSystemCodes() {
            var x = await _systemCodesManager.GetAllSystemCodes();
            var t = JsonConvert.DeserializeObject<List<SystemCodes>>(x);
            return t;
        }
    }
}