using RaidProject.Data;
using RaidProject.Models;
using RaidProject.Utilities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace RaidProject.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class TokenController : BaseController
    {
        private readonly IAuthenticateService _authService;

        public TokenController(DB_Context context, IAuthenticateService authService) : base(context)
        {
            _authService = authService;
        }

        [HttpPost("[action]")]
        public ActionResult RequestToken([FromBody] TokenRequest request)
        { //Standard
            if (!ModelState.IsValid) return BadRequest(ModelState);
            if (_authService.IsAuthenticated(request, out string token)) return Ok(new { token });
            return BadRequest("Invalid Request");
        }

        //[Authorize(Policy = "AdUser")]
        //[Authorize(Roles = "Engineer")] //Examples
        [Authorize] //Needed to expose AD information. The only time the 'WWW-Authenticate: Negotiate {Token}' header will be passed.
        [HttpGet("[action]")]
        public ActionResult RequestToken()
        { //Windows AD
            if (_authService.IsAuthenticated(HttpContext.User, out string token)) return Ok(new { token });
            return BadRequest("Invalid Request");
        }
    }
}