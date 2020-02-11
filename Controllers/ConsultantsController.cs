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

    public class ConsultantsController : Controller {
        IConfiguration _configuration;
        ConsultantsManager _consultantsManager;

        public ConsultantsController(IConfiguration configuration) {
            _configuration = configuration;
            _consultantsManager = new ConsultantsManager(configuration);
        }

        [HttpGet]
        [Route("[action]")]
        public async Task<List<Consultants>> GetAllConsultants() {

            var x = await _consultantsManager.GetAllConsultants();
            var t = JsonConvert.DeserializeObject<List<Consultants>>(x);
            return t;
        }
    }
}