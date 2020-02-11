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
    public class ProjectsController : Controller
    {
        IConfiguration _configuration;
        ProjectsManager _projectsManager;

        public ProjectsController(IConfiguration configuration)
        {
            _configuration = configuration;
            _projectsManager = new ProjectsManager(configuration);
        }

        [HttpGet("[action]/{projectID}")]
        public async Task<List<Projects>> GetProject(string projectID)
        {
            return await _projectsManager.GetProjectByProjectID(projectID);
        }
    }
}