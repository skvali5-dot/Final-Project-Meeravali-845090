using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emart.AdminService.Models;
using Emart.AdminService.Repositories;
namespace Emart.AdminService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IAdminRepository _repo;
        public AdminController(IAdminRepository repo)
        {
            _repo = repo;
        }
        [HttpPost]
        [Route("AddCategory")]
        public IActionResult AddCategory(Category item)
        {
            try
            {
                _repo.AddCategory(item);
                return Ok();
            }
            catch(Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }

        }
        [HttpPost]
        [Route("AddSubCategory")]
        public IActionResult AddSubCategory(SubCategory item)
        {
            try
            {
                _repo.AddSubCategory(item);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpDelete]
        [Route("DeleteCatrgory/{category_id}")]
        public IActionResult DeleteCategory(string category_id)
        {
            try
            {
                _repo.DeleteCategory(category_id);
                return Ok();
            }
            catch(Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpDelete]
        [Route("DeleteSubCatrgory/{subcategory_id}")]
        public IActionResult DeleteSubCategory(string subcategory_id)
        {
            try
            {
                _repo.DeleteCategory(subcategory_id);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpGet]
        [Route("GetAllCategories")]
        public IActionResult GetAllCategories() 
        {
            try
            {
               return Ok(_repo.GetAllCategories());
               
            }
            catch(Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpGet]
        [Route("GetCategory/{categoryId")]
        public IActionResult GetCategory(string categoryId)
        {
            try
            {
                return Ok(_repo.GetCategory(categoryId));
            }
            catch(Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpGet]
        [Route("GetSubCategory/{subcategoryId")]
        public IActionResult GetSubCategory(string subcategoryId)
        {
            try
            {
                return Ok(_repo.GetSubCategory(subcategoryId));
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
    }
}