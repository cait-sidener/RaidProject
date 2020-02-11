using RaidProject.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace RaidProject.Utilities
{

    public interface IAuthenticateService
    {

        bool IsAuthenticated(TokenRequest request, out string token);

        bool IsAuthenticated(ClaimsPrincipal user, out string token);
    }

    public class TokenAuthenticationService : IAuthenticateService
    {

        public TokenAuthenticationService(IConfiguration configuration, IAuthorizationService authorizationService)
        {
            Configuration = configuration;
            AuthorizationService = authorizationService;
        }

        public IConfiguration Configuration { get; }
        public IAuthorizationService AuthorizationService { get; }

        public bool IsAuthenticated(ClaimsPrincipal user, out string token)
        {
            token = null;
            //Validate Here //TODO; Not reading groups correctly
            if (user == null || !(AuthorizationService.AuthorizeAsync(user, "AdUser").Result.Succeeded)) return false;
            //-------------
            token = CreateToken(new Claim[] {
                new Claim(ClaimTypes.Name, $"AD User: {user.Identity.GetDisplayName()}")
            });
            return true;
        }

        public bool IsAuthenticated(TokenRequest request, out string token)
        {
            token = null;
            //Validate Here
            if (request == null) return false;
            //-------------
            token = CreateToken(new Claim[] {
                new Claim(ClaimTypes.Name, "Non-AD User")
            });
            return true;
        }

        private string CreateToken(Claim[] claims)
        {
            JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();
            byte[] key = Encoding.ASCII.GetBytes(Configuration["TokenManagement:Secret"]);
            SecurityTokenDescriptor tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddDays(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            return tokenHandler.WriteToken(tokenHandler.CreateToken(tokenDescriptor));
        }
    }
}