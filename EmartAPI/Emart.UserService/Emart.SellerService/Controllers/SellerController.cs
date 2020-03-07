using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.SellerService.Models;
using Emart.SellerService.Repositories;
namespace Emart.SellerService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SellerController : ControllerBase
    {
        private readonly ISellerRepository _repo;
        public SellerController(ISellerRepository repo)
        {
            _repo = repo;
        }
        [HttpPut]
        [Route("EditProfile")]
        public IActionResult EditProfile(Seller seller)
        {
            try
            {
                _repo.EditProfile(seller);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }

        }
        [HttpGet]
        [Route("GetProfile/{id}")]
        public IActionResult GetProfie(string id)
        {
            try
            {
                return Ok(_repo.GetProfile(id));
            }
            catch(Exception ex)
            {
                return NotFound(ex.InnerException);
            }
        }
        [HttpGet]
        [Route("GetReports/{sellerid}")]
        public IActionResult GetReports(string sellerid)
        {
            try
            {
                return Ok(_repo.GetReports(sellerid));
            }
            catch(Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
    }
}