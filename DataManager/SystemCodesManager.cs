using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using RaidProject.DataAccess;
using RaidProject.Models;

namespace RaidProject.DataManager {
    public class SystemCodesManager {
        private readonly IConfiguration _configuration;
        private readonly SystemCodesDataAccess _systemCodesBitDataAccess;

        public SystemCodesManager(IConfiguration configuration) {
            _configuration = configuration;
            _systemCodesBitDataAccess = new SystemCodesDataAccess(_configuration);
        }

        public async Task<string> GetAllSystemCodes() {
            return await _systemCodesBitDataAccess.GetAllSystemCodes();
        }
    }
}
