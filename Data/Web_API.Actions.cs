using Newtonsoft.Json;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RaidProject.Data
{

    public partial class Web_API
    { //Example API Service Actions

        #region GET

        #region Project

        public async Task<IEnumerable<object>> GetProject(string jurisdiction, string serial)
        {
            try
            {
                string
                    request = $"api/dsc/getstages?jurisdiction={jurisdiction}&serial={serial}",
                    responseBody = await APIRequestAsync(request);
                IEnumerable<object> projects = JsonConvert.DeserializeObject<IEnumerable<object>>(responseBody);
                return projects;
            }
            catch
            {
                return null;
            }
        }

        public async Task<object> GetProject(string jurisdiction, string serial, string stage)
        {
            try
            {
                string
                    request = $"api/dsc/getproject?jurisdiction={jurisdiction}&serial={serial}&stage={stage}",
                    responseBody = await APIRequestAsync(request);
                return JsonConvert.DeserializeObject<object>(responseBody);
            }
            catch
            {
                return null;
            }
        }

        #endregion Project

        #endregion GET
    }
}