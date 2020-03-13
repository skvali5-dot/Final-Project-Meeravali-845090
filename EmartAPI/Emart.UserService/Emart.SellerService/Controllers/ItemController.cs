using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.SellerService.Models;
using Emart.SellerService.Repositories;
using Microsoft.AspNetCore.Authorization;

namespace Emart.SellerService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemController : ControllerBase
    {
        private readonly IItemRepository _repo;
        public ItemController(IItemRepository repo)
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
            catch (Exception ex)
            {
                return NotFound(ex.Message);
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
                return NotFound(ex.Message);
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
        [HttpGet]
        [Route("ViewItems/{id}")]
        public IActionResult ViewItems(string id)
        {
            try
            {

                return Ok(_repo.ViewItems(id));
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetItem/{id}")]
        public IActionResult GetItem(string id)
        {
            try
            {
                return Ok(_repo.GetItem(id));
            }
            catch(Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetCategories")]
        public IActionResult GetCategories()
        {
            try
            {
                return Ok(_repo.GetCategories());
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpGet]
        [Route("GetSubCategories/{categoryId}")]
        public IActionResult GetSubCategories(string categoryId)
        {
            try
            {
                return Ok(_repo.GetSubCategories(categoryId));
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
    }
}