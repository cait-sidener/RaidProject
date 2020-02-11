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
    public class EngineeringController : Controller {
        IConfiguration _configuration;
        EngineeringManager _engineeringManager;

        public EngineeringController(IConfiguration configuration) {
            _configuration = configuration;
            _engineeringManager = new EngineeringManager(configuration);
        }

        [HttpGet]
        [Route("[action]/{id}")]
        public async Task<SurveyNotes> GetSurveyNote(int id) {
            return await _engineeringManager.GetSurveyNote(id);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> UpdateSurveyNote(SurveyNotes surveyNote) {
          //  Newtonsoft.Json.JsonConvert.DeserializeObject<object>("JSONHERE");
            try {
                await _engineeringManager.UpdateSurveyNote(surveyNote);
                return RedirectToAction(nameof(SurveyNotes));
            } catch {
                return View();
            }
        }

        [HttpPost]
        [ValidateAntiForgeryToken]

        public async Task<ActionResult> InsertSurveyNote(SurveyNotes survey) {
            try {
                await _engineeringManager.InsertSurveyNote(survey);
                return RedirectToAction(nameof(SurveyNotes));
            } catch {
                return View();
            }
        }

        [HttpGet]
        [Route("[action]/{id}")]
        public async Task<ProjectNotes> GetProjectNote(int id) {
            return await _engineeringManager.GetProjectNote(id);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> UpdateProjectNote(ProjectNotes projectNote) {
            try {
                await _engineeringManager.UpdateProjectNote(projectNote);
                return RedirectToAction(nameof(ProjectNotes));
            } catch {
                return View();
            }
        }

        public async Task<ActionResult> InsertProjectNote(ProjectNotes project) {
            try {
                await _engineeringManager.InsertProjectNote(project);
                return RedirectToAction(nameof(ProjectNotes));
            } catch {
                return View();
            }
        }

        [HttpGet]
        [Route("[action]/{id}")]
        public async Task<Technicians> GetTechnician(int id) {
            return await _engineeringManager.GetTechnician(id);
        }


        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> UpdateTechnician(Technicians technician) {
            try {
                await _engineeringManager.UpdateTechnician(technician);
                return RedirectToAction(nameof(Technicians));
            } catch {
                return View();
            }
        }

        public async Task<ActionResult> InsertTechnician(Technicians technician) {
            try {
                await _engineeringManager.InsertTechnician(technician);
                return RedirectToAction(nameof(Technicians));
            } catch {
                return View();
            }
        }

        [HttpGet]
        [Route("[action]/{id}")]
        public async Task<PlanRevisions> GetPlanRevision(int id) {
            return await _engineeringManager.GetPlanRevision(id);
        }


        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> UpdatePlanRevision(PlanRevisions planRevision) {
            try {
                await _engineeringManager.UpdatePlanRevision(planRevision);
                return RedirectToAction(nameof(PlanRevisions));
            } catch {
                return View();
            }
        }

        public async Task<ActionResult> InsertPlanRevision(PlanRevisions planRevision) {
            try {
                await _engineeringManager.InsertPlanRevision(planRevision);
                return RedirectToAction(nameof(PlanRevisions));
            } catch {
                return View();
            }
        }

        [HttpGet]
        [Route("[action]/{id}")]
        public async Task<PlanFiles> GetPlanFile(int id) {
            return await _engineeringManager.GetPlanFile(id);
        }


        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> UpdatePlanFile(PlanFiles planFile) {
            try {
                await _engineeringManager.UpdatePlanFile(planFile);
                return RedirectToAction(nameof(PlanFiles));
            } catch {
                return View();
            }
        }

        public async Task<ActionResult> InsertPlanFile(PlanFiles planFile) {
            try {
                await _engineeringManager.InsertPlanFile(planFile);
                return RedirectToAction(nameof(PlanFiles));
            } catch {
                return View();
            }
        }

        [HttpGet]
        [Route("[action]/{id}")]
        public async Task<Engineering> GetEngineering(int id) {
            return await _engineeringManager.GetEngineering(id);
        }


        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> UpdateEngineering(Engineering engineering) {
            try {
                await _engineeringManager.UpdateEngineering(engineering);
                return RedirectToAction(nameof(Engineering));
            } catch {
                return View();
            }
        }

        public async Task<ActionResult> InsertEngineering(Engineering engineering) {
            try {
                await _engineeringManager.InsertEngineering(engineering);
                return RedirectToAction(nameof(Engineering));
            } catch {
                return View();
            }
        }
    }
}