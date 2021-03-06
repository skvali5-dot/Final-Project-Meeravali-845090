﻿using Emart.AdminService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.AdminService.Repositories
{
    public class AdminRepository : IAdminRepository
    {
        private readonly EmartDBContext _context;
        public AdminRepository(EmartDBContext context)
        {
            _context = context;
        }
        public void AddCategory(Category obj)
        {
            _context.Add(obj);
            _context.SaveChanges();
        }

        public void AddSubCategory(SubCategory obj)
        {
            _context.Add(obj);
            _context.SaveChanges();
        }

        public void DeleteCategory(string cid)
        {
            Category category = _context.Category.Find(cid);
            _context.Category.Remove(category);
            _context.SaveChanges();
        }

        public void DeleteSubCategory(string scid)
        {
            SubCategory subcategory = _context.SubCategory.Find(scid);
            _context.SubCategory.Remove(subcategory);
            _context.SaveChanges();
        }

        public List<Category> GetAllCategories()
        {
            return _context.Category.ToList();
        }

        public List<SubCategory> GetAllSubCategories()
        {
            return _context.SubCategory.ToList();
        }

        public Category GetCategory(string categoryid)
        {
            return _context.Category.Find(categoryid);
        }

        public SubCategory GetSubCategory(string subcategoryid)
        {
            return _context.SubCategory.Find(subcategoryid);
        }

        public void UpdateCategory(Category category)
        {
            _context.Category.Update(category);
            _context.SaveChanges();
        }

        public void UpdateSubCategory(SubCategory subCategory)
        {
            _context.SubCategory.Update(subCategory);
            _context.SaveChanges();
        }
    }
}
