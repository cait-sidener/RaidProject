using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using RaidProject.DataAccess;
using RaidProject.Models;

namespace RaidProject.DataManager
{
    public class RailroadManager
    {
        private readonly IConfiguration _configuration;
        private readonly RailroadDataAccess _railroadBitDataAccess;

        public RailroadManager(IConfiguration configuration)
        {
            _configuration = configuration;
            _railroadBitDataAccess = new RailroadDataAccess(_configuration);
        }

        public async Task<string> GetAllRailroad()
        {
            return await _railroadBitDataAccess.GetAllRailroad();
        }

        public async Task<string> GetRailroad(int id) {
            return await _railroadBitDataAccess.GetRailroad(id); ;
        }

        public async Task<string> UpdateRailroadAgreement(RailroadModel railroad)
        {
            return await _railroadBitDataAccess.UpdateRailroadAgreement(railroad);
        }

        public async Task<string> UpdateRailroadCompany(RailroadModel railroad)
        {
            return await _railroadBitDataAccess.UpdateRailroadCompany(railroad);
        }

        public async Task<string> InsertRailroadAgreement(RailroadModel railroad)
        {
            return await
                _railroadBitDataAccess.InsertRailroadAgreement(railroad);
        }

        public async Task<string> InsertRailroadCompany(RailroadModel railroad)
        {
            return await
                _railroadBitDataAccess.InsertRailroadCompany(railroad);
        }
    }
}
