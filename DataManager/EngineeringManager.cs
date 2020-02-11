using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using RaidProject.DataAccess;
using RaidProject.Models;

namespace RaidProject.DataManager {
    public class EngineeringManager {
        private readonly IConfiguration _configuration;
        private readonly EngineeringDataAccess _engineeringBitDataAccess;

        public EngineeringManager(IConfiguration configuration) {
            _configuration = configuration;
            _engineeringBitDataAccess = new EngineeringDataAccess(_configuration);
        }

        public async Task<SurveyNotes> GetSurveyNote(int id) {
            return (await _engineeringBitDataAccess.GetSurveyNote(id)).FirstOrDefault();
        }

        public async Task<string> UpdateSurveyNote(SurveyNotes surveyNote) {
            return await _engineeringBitDataAccess.UpdateSurveyNote(surveyNote);
        }

        public async Task<string> InsertSurveyNote(SurveyNotes survey) {
            return await _engineeringBitDataAccess.InsertSurveyNote(survey);
        }

        public async Task<ProjectNotes> GetProjectNote(int id) {
            return (await _engineeringBitDataAccess.GetProjectNote(id)).FirstOrDefault();
        }

        public async Task<string> UpdateProjectNote(ProjectNotes projectNote) {
            return await _engineeringBitDataAccess.UpdateProjectNote(projectNote);
        }

        public async Task<string> InsertProjectNote(ProjectNotes project) {
            return await _engineeringBitDataAccess.InsertProjectNote(project);
        }

        public async Task<Technicians> GetTechnician(int id) {
            return (await _engineeringBitDataAccess.GetTechnician(id)).FirstOrDefault();
        }

        public async Task<string> UpdateTechnician(Technicians technician) {
            return await _engineeringBitDataAccess.UpdateTechnician(technician);
        }

        public async Task<string> InsertTechnician(Technicians technician) {
            return await _engineeringBitDataAccess.InsertTechnician(technician);
        }

        public async Task<PlanRevisions> GetPlanRevision(int id) {
            return (await _engineeringBitDataAccess.GetPlanRevision(id)).FirstOrDefault();
        }

        public async Task<string> UpdatePlanRevision(PlanRevisions planRevision) {
            return await _engineeringBitDataAccess.UpdatePlanRevision(planRevision);
        }

        public async Task<string> InsertPlanRevision(PlanRevisions planRevision) {
            return await _engineeringBitDataAccess.InsertPlanRevision(planRevision);
        }

        public async Task<PlanFiles> GetPlanFile(int id) {
            return (await _engineeringBitDataAccess.GetPlanFile(id)).FirstOrDefault();
        }

        public async Task<string> UpdatePlanFile(PlanFiles planFile) {
            return await _engineeringBitDataAccess.UpdatePlanFile(planFile);
        }

        public async Task<string> InsertPlanFile(PlanFiles planFile) {
            return await _engineeringBitDataAccess.InsertPlanFile(planFile);
        }

        public async Task<Engineering> GetEngineering(int id) {
            return (await _engineeringBitDataAccess.GetEngineering(id)).FirstOrDefault();
        }

        public async Task<string> UpdateEngineering(Engineering engineering) {
            return await _engineeringBitDataAccess.UpdateEngineering(engineering);
        }

        public async Task<string> InsertEngineering(Engineering engineering) {
            return await _engineeringBitDataAccess.InsertEngineering(engineering);
        }
    }
}
