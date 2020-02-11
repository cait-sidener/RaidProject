using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace RaidProject.Data
{

    public partial class Web_API
    {  //Example API Service
        private static readonly HttpClient httpClient = new HttpClient();

        public Web_API(string baseURL)
        {
            httpClient.DefaultRequestHeaders.Accept.Clear();
            httpClient.DefaultRequestHeaders.Accept.Add(
                new MediaTypeWithQualityHeaderValue("application/json")
            );
            httpClient.BaseAddress = new Uri(baseURL);
        }

        private async Task<string> APIRequestAsync(string request)
        {
            HttpResponseMessage response = await httpClient.GetAsync(request);
            response.EnsureSuccessStatusCode();
            return await response.Content.ReadAsStringAsync();
        }
    }
}