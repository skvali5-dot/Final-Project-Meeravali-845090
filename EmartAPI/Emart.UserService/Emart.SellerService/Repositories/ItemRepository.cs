﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.SellerService.Models;
namespace Emart.SellerService.Repositories
{
    public class ItemRepository:IItemRepository
    {
        private readonly EmartDBContext _context;
        public ItemRepository(EmartDBContext context)
        {
            _context = context;
        }
        public void AddItems(Items item)
        {
            _context.Add(item);
            _context.SaveChanges();
        }

        public void DeleteItem(string id)
        {
            Items item = _context.Items.Find(id);
            _context.Items.Remove(item);
            _context.SaveChanges();
        }

        public List<Category> GetCategories()
        {
            return _context.Category.ToList();
        }

        public Items GetItem(string id)
        {
            return _context.Items.Find(id);
        }

        public List<SubCategory> GetSubCategories(string cid)
        {
            List<SubCategory> subcategory = _context.SubCategory.Where(i=>i.CategoryId==cid).ToList();
            return subcategory;
        }

        public void UpdateItemStock(Items item)
        {
            _context.Items.Update(item);
            _context.SaveChanges();
        }

        public List<Items> ViewItems(string id)
        {
            List<Items> item = _context.Items.Where(i => i.Sellerid == id).ToList();
            return item;
        }

        public string ViewStock(string id)
        {
            Items item = _context.Items.Find(id);
            return "No.of StockItems" + item.StockNumber;
        }

    }
}
