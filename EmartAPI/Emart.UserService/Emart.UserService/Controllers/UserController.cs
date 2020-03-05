using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.UserService.Repositories;
using Emart.UserService.Models;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.Extensions.Configuration;

namespace Emart.UserService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _repo;
        private readonly IConfiguration configuration;
        public UserController(IUserRepository repo,IConfiguration configuration)
        {
            _repo = repo;
            this.configuration = configuration;
        }
        [HttpGet]
        [Route("BuyerLogin/{username}/{password}")]
        public IActionResult BuyerLogin(string username,string password) 
        {
            Token token = null;
            try
            {
                Buyer buyer = _repo.BuyerLogin(username, password);
                if (buyer != null)
                {
                    token = new Token() { buyerid = buyer.Id, token = GenerateJwtToken(username), message = "success",uname=username};
                }
                else
                {
                    token = new Token() { token = null, message = "unsuccess" };
                }
                return Ok(token);
            }
            catch(Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("SellerLogin/{username}/{password}")]
        public IActionResult SellerLogin(string username, string password)
        {
            Token token = null;
            try
            {
                Seller seller = _repo.SellerLogin(username, password);
                if (seller!= null)
                {
                    token = new Token() { sellerid = seller.Id, token = GenerateJwtToken(username), message = "success" };
                }
                else
                {
                    token = new Token() { token = null, message = "unsuccess" };
                }
                return Ok(token);
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpPost]
        [Route("BuyerSignUp")]
        public IActionResult BuyerSignUp(Buyer buyer)
        {
            try
            {
                _repo.BuyerSignUp(buyer);
                return Ok();
            }
            catch(Exception ex)
            {
                return Ok(ex.InnerException.Message);
            }
        }
        [HttpPost]
        [Route("SellerSignUp")]
        public IActionResult SellerSignUp(Seller seller)
        {
            try
            {
                _repo.SellerSignUp(seller);
                return Ok();
            }
            catch (Exception ex)
            {
                return Ok(ex.InnerException.Message);
            }
        }
        private string GenerateJwtToken(string uname)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, uname),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, uname),
                new Claim(ClaimTypes.Role,uname)
            };
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JwtKey"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            // recommended is 5 min
            var expires = DateTime.Now.AddDays(Convert.ToDouble(configuration["JwtExpireDays"]));
            var token = new JwtSecurityToken(
                configuration["JwtIssuer"],
                configuration["JwtIssuer"],
                claims,
                expires: expires,
                signingCredentials: credentials
            );
            return new JwtSecurityTokenHandler().WriteToken(token);
            //var response = new Token
            //{
            //    uname = uname,
            //    token = new JwtSecurityTokenHandler().WriteToken(token)
            //};
            //return "";
        }
    }
}