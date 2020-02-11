using RaidProject.Data;
using RaidProject.Models;
using RaidProject.Utilities;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Server.IISIntegration;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Net.Http.Headers;
using SimpleImpersonation;
using System;
using System.Text;

namespace RaidProject
{

    public class Startup
    {

        public Startup(IConfiguration configuration, IHostingEnvironment environment)
        {
            Configuration = configuration;
            HostingEnvironment = environment;
        }

        public IConfiguration Configuration { get; }
        public IHostingEnvironment HostingEnvironment { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSingleton(new DB_Context( //Database Example with Impersonation
                Configuration["ConnectionStrings:DBSource"],
                new UserCredentials(
                    Configuration["Impersonation:Domain"],
                    Configuration["Impersonation:User"],
                    Configuration["Impersonation:Password"]
                ),
                Configuration.GetValue<int>("ConnectionTimeout")
            ));
            services.AddSingleton(new Web_API( //API Example
                Configuration["API_Connections:APINameUrl"]
            ));
            services.AddScoped<IAuthenticateService, TokenAuthenticationService>();
            services.Configure<TokenManagement>(Configuration.GetSection("TokenManagement"));
            TokenManagement token = Configuration.GetSection("TokenManagement").Get<TokenManagement>();
            byte[] secret = Encoding.ASCII.GetBytes(token.Secret);

            #region Bearer - JWT

            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(options =>
            {
                options.RequireHttpsMetadata = !HostingEnvironment.IsDevelopment();
                options.SaveToken = true;
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(token.Secret)),
                    ValidIssuer = token.Issuer,
                    ValidAudience = token.Audience,
                    ValidateIssuer = false,
                    ValidateAudience = false,
                };
            });

            #endregion Bearer - JWT

            #region Windows

            services.AddAuthentication(IISDefaults.AuthenticationScheme);
            services.Configure<IISOptions>(options =>
            {
                options.AutomaticAuthentication = true;
                options.ForwardClientCertificate = true;
            });
            services.AddAuthorization(options =>
            {  
                options.AddPolicy("AdUser", policy =>
                {
                    policy.RequireRole(Configuration.GetSection("AuthorizedAdUsers").Get<string[]>());
                });
            });

            #endregion Windows

            services.AddMvc(options =>
            {
                options.Filters.Add(new RequireHttpsAttribute()); //IF IIS SUPPORTS HTTPS
            }).SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
            services.AddSpaStaticFiles(options =>
            {
                options.RootPath = "ClientApp/dist"; //The Angular files will be served from here
            });
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment() || env.IsStaging()) app.UseDeveloperExceptionPage();
            else app.UseExceptionHandler("/Base/Error");
            app.Use(async (context, next) =>
            {
                context.Response.Headers.Add("Content-Security-Policy", //CSP Header
                        "default-src 'none'; " +
                        "script-src 'self' 'unsafe-eval'; " +
                        "style-src 'self' 'unsafe-inline'; " +
                        "img-src 'self' data: https:; " +
                        "base-uri 'self'; " +
                        "manifest-src 'self'; " +
                        "worker-src 'self'; " +
                        "upgrade-insecure-requests; " + //IF IIS SUPPORTS HTTPS
                        "form-action 'self'; " +
                        "frame-ancestors 'none'; " +
                        "connect-src 'self' https://jsonplaceholder.typicode.com;" + //Add other Domains here to avoid CORS errors, best practice would be to call through the API and pass down to client.
                        "object-src 'none'; ");
                context.Response.Headers.Add("X-Xss-Protection", "1");
                context.Response.Headers.Add("X-Content-Type-Options", "nosniff");
                await next();
            });
            app.UseHttpsRedirection(); //IF IIS SUPPORTS HTTPS
            app.UseSpaStaticFiles(new StaticFileOptions
            {
                OnPrepareResponse = ctx =>
                    ctx.Context.Response.Headers[HeaderNames.CacheControl] = $"public,max-age={TimeSpan.FromDays(7)}"
            });
            app.UseAuthentication();
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller}/{action=Index}/{id?}");
            });
            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";
            });
        }
    }
}