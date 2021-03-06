﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.AdminService.Models;
namespace Emart.AdminService.Repositories
{
    public interface IAdminRepository
    {
        void AddCategory(Category category);
        void AddSubCategory(SubCategory subcategory);
        void DeleteCategory(string cid);
        void DeleteSubCategory(string scid);
        List<Category> GetAllCategories();
        List<SubCategory> GetAllSubCategories();
        Category GetCategory(string cid);
        SubCategory GetSubCategory(string scid);
        void UpdateCategory(Category category);
        void UpdateSubCategory(SubCategory subCategory);
    }
}
