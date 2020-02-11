using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using RaidProject.DataAccess;
using RaidProject.Models;

namespace RaidProject.DataManager
{
    public class ProjectsManager
    {
        private readonly IConfiguration _configuration;
        private readonly ProjectsDataAccess _projectsBitDataAccess;

        public ProjectsManager(IConfiguration configuration)
        {
            _configuration = configuration;
            _projectsBitDataAccess = new ProjectsDataAccess(_configuration);
        }

        public async Task<List<Projects>>GetProjectByProjectID(string projectID)
        {
            return await _projectsBitDataAccess.GetProjectByProjectID(projectID);
        }
    }
}
