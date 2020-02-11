using RaidProject.Data;
using RaidProject.Utilities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;

namespace RaidProject.Controllers
{

    //[Authorize("AdUser")] //Restricts Entire site to the listed groups in "appsettings.json"; AdUser is defined in "startup.cs"
    [Route("api/[controller]")]
    public class SampleDataController : BaseController
    {

        public SampleDataController(DB_Context context) : base(context)
        {
        }

        #region SAMPLE DATA/MODEL

        private static readonly string[] Summaries = new[] { "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching" };

        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
        }

        #endregion SAMPLE DATA/MODEL

        [HttpGet("[action]")]
        public ActionResult<IEnumerable<WeatherForecast>> WeatherForecasts()
        {
            Random rng = new Random();
            Thread.Sleep(rng.Next(3, 7) * 1000); //Simulate Delayed Response; 3-6 Seconds (Max Value is not inclusive)
            return Ok(Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            }));
        }

        [Authorize]
        [HttpGet("[action]")]
        public ActionResult ProtectedResponse()
        {
            return Ok("This is a protected response from the local webhost. [Authorize]");
        }

        [HttpGet("[action]")]
        public ActionResult Download()
        { //Dummy File Download Example
            FileInfo file = new FileInfo(Path.GetTempFileName());
            using (FileStream fs = file.OpenWrite())
            {
                fs.Seek(1L * 1024 * 1024, SeekOrigin.Begin);
                fs.WriteByte(0);
            }
            return File(new TemporaryFileStream(file.FullName), "application/octet-stream", file.Name);
        }
    }
}