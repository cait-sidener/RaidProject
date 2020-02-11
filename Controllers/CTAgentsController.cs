using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using RaidProject.DataManager;
using RaidProject.Models;

namespace RaidProject.Controllers {
    [Route("api/[controller]")]
    public class CTAgentsController : Controller {
        IConfiguration _configuration;
        CTAgentsManager _ctAgentsManager;

        public CTAgentsController(IConfiguration configuration) {
            _configuration = configuration;
            _ctAgentsManager = new CTAgentsManager(configuration);
        }

        [HttpGet]
        [Route("[action]")]
        public async Task <List<CTAgents>> GetAllCTAgents() {
            return await _ctAgentsManager.GetAllCTAgents();
        }
    }
}