using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using RaidProject.DataAccess;
using RaidProject.Models;

namespace RaidProject.DataManager {
    public class CTAgentsManager {
        private readonly IConfiguration _configuration;
        private readonly CTAgentsDataAccess _ctAgentsBitDataAccess;

        public CTAgentsManager(IConfiguration configuration) {
            _configuration = configuration;
            _ctAgentsBitDataAccess = new CTAgentsDataAccess(_configuration);
        }

        public async Task <List<CTAgents>> GetAllCTAgents() {
            return await _ctAgentsBitDataAccess.GetAllCTAgents();
        }
    }
}
