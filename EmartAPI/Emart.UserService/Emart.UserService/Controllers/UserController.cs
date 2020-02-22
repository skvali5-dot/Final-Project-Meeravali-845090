using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.UserService.Repositories;
using Emart.UserService.Models;
namespace Emart.UserService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _repo;
        public UserController(IUserRepository repo)
        {
            _repo = repo;
        }
        [HttpGet]
        [Route("BuyerLogin/{username}/{password}")]
        public IActionResult BuyerLogin(string username,string password) 
        {
            try
            {
                return Ok(_repo.BuyerLogin(username,password));
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
            try
            {
                return Ok(_repo.SellerLogin(username, password));
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
    }
}