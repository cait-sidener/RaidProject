using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using RaidProject.DataAccess;
using RaidProject.Models;

namespace RaidProject.DataManager {
    public class StaffManager {
        private readonly IConfiguration _configuration;
        private readonly StaffDataAccess _staffBitDataAccess;

        public StaffManager(IConfiguration configuration) {
            _configuration = configuration;
            _staffBitDataAccess = new StaffDataAccess(_configuration);
        }

        public async Task<string> GetAllStaff() {
            return await _staffBitDataAccess.GetAllStaff();
        }
    }
}
