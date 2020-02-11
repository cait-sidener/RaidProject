using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using RaidProject.DataManager;
using RaidProject.Models;

namespace RaidProject.Controllers
{
    [Route("api/[controller]")]
    public class CertTitleController : Controller
    {
        IConfiguration _configuration;
        CertTitleManager _certTitleManager;

        public CertTitleController(IConfiguration configuration) {
            _configuration = configuration;
            _certTitleManager = new CertTitleManager(configuration);
        }

        [HttpGet]
        [Route("[action]/{id}")]
        public async Task<CertTitle> GetCertTitle(int id) {
            return await _certTitleManager.GetCertTitle(id);
        }


        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> UpdateCertTitle(CertTitle certTitle) {
            try {
                await _certTitleManager.UpdateCertTitle(certTitle);
                return RedirectToAction(nameof(CertTitle));
            } catch {
                return View();
            }
        }

        public async Task<ActionResult> InsertCertTitle(CertTitle certTitle) {
            try {
                await _certTitleManager.InsertCertTitle(certTitle);
                return RedirectToAction(nameof(CertTitle));
            } catch {
                return View();
            }
        }

    }
}