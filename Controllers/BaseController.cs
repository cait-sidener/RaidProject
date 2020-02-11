using RaidProject.Data;
using Microsoft.AspNetCore.Mvc;

namespace RaidProject.Controllers
{

    public class BaseController : Controller
    {
        protected DB_Context Context { get; }

        public BaseController(DB_Context context) => Context = context;
    }
}