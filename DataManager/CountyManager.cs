using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using RaidProject.DataAccess;
using RaidProject.Models;

namespace RaidProject.DataManager {
    public class CountyManager {
        private readonly IConfiguration _configuration;
        private readonly CountyDataAccess _countyBitDataAccess;

        public CountyManager(IConfiguration configuration) {
            _configuration = configuration;
            _countyBitDataAccess = new CountyDataAccess(_configuration);
        }

        public async Task<string> GetAllCounties() {
            return await _countyBitDataAccess.GetAllCounties();
        }
    }
}
