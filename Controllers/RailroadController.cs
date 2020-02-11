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

    public class RailroadController : Controller {
        IConfiguration _configuration;
        RailroadManager _railroadManager;

        public RailroadController(IConfiguration configuration) {
            _configuration = configuration;
            _railroadManager = new RailroadManager(configuration);
        }

        [HttpGet("[action]")]

        public async Task<List<RailroadModel>> GetRailroads() {
            var x = await _railroadManager.GetAllRailroad();
            var t = JsonConvert.DeserializeObject<List<RailroadModel>>
                (x);
            return t;
        }

        [HttpGet("[action]/{id}")]
        public async Task<RailroadModel> GetRailroad(int id) {
            var x = await _railroadManager.GetRailroad(id);
            var t = JsonConvert.DeserializeObject<List<RailroadModel>>
                (x).FirstOrDefault();
            return t;
        }

        [HttpPost]
        [ValidateAntiForgeryToken]

        public async Task<ActionResult> UpdateRailroadAgreement(RailroadModel railroad) {
            try {
                await _railroadManager.UpdateRailroadAgreement(railroad);
                return RedirectToAction(nameof(RailroadModel));
            } catch {
                return View();
            }
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> UpdateRailroadCompany(RailroadModel railroad) {
            try {
                await _railroadManager.UpdateRailroadCompany(railroad);
                return RedirectToAction(nameof(RailroadModel));
            } catch {
                return View();
            }
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> InsertRailroadAgreement
            (RailroadModel railroad) {
            try {
                await _railroadManager.InsertRailroadAgreement(railroad);
                return RedirectToAction(nameof(RailroadModel));
            } catch {
                return View();
            }
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> InsertRailroadCompany
    (RailroadModel railroad) {
            try {
                await _railroadManager.InsertRailroadCompany(railroad);
                return RedirectToAction(nameof(RailroadModel));
            } catch {
                return View();
            }
        }
    }

}