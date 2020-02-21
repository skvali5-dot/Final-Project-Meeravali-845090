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
        [HttpPost]
        [Route("AddItems")]
        public IActionResult AddItems(Items item)
        {
            try
            {
                _repo.AddItems(item);
                return Ok();
            }
            catch(Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }

        }
        [HttpDelete]
        [Route("DeleteItem/{id}")]
        public IActionResult DeleteItem(string id)
        {
            try
            {
                _repo.DeleteItem(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }

        }
        [HttpPut]
        [Route("UpdateItemsStock")]
        public IActionResult UpdateItemsStock(Items item)
        {
            try
            {
                _repo.UpdateItemStock(item);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }

        }
        [HttpGet]
        [Route("ViewStock/{id}")]
        public IActionResult ViewStock(string id)
        {
            try
            {
                return Ok(_repo.ViewStock(id));
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }

        }
    }
}