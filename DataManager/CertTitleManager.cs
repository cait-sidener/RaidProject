using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using RaidProject.DataAccess;
using RaidProject.Models;

namespace RaidProject.DataManager {
    public class CertTitleManager {
        private readonly IConfiguration _configuration;
        private readonly CertTitleDataAccess _certTitleBitDataAccess;

        public CertTitleManager(IConfiguration configuration) {
            _configuration = configuration;
            _certTitleBitDataAccess = new CertTitleDataAccess(_configuration);
        }

        public async Task<CertTitle> GetCertTitle(int id) {
            return (await _certTitleBitDataAccess.GetCertTitle(id)).FirstOrDefault();
        }

        public async Task<string> UpdateCertTitle(CertTitle certTitle) {
            return await _certTitleBitDataAccess.UpdateCertTitle(certTitle);
        }

        public async Task<string> InsertCertTitle(CertTitle certTitle) {
            return await _certTitleBitDataAccess.InsertCertTitle(certTitle);
        }

    }
}
