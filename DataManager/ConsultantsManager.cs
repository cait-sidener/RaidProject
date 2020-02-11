using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using RaidProject.DataAccess;
using RaidProject.Models;

namespace RaidProject.DataManager {
    public class ConsultantsManager {
        private readonly IConfiguration _configuration;
        private readonly ConsultantsDataAccess _consultantsBitDataAccess;

        public ConsultantsManager(IConfiguration configuration) {
            _configuration = configuration;
            _consultantsBitDataAccess = new ConsultantsDataAccess(_configuration);
        }

        public async Task<string> GetAllConsultants() {
            return await _consultantsBitDataAccess.GetAllConsultants();
        }
    }
}
