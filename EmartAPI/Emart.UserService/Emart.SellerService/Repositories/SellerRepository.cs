using Emart.SellerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace Emart.SellerService.Repositories
{
    public class SellerRepository : ISellerRepository
    {
        private readonly EmartDBContext _context;
        public SellerRepository(EmartDBContext context)
        {
            _context = context;
        }
        public void AddItems(Items obj)
        {
            _context.Add(obj);
            _context.SaveChanges();
        }

        public void DeleteItem(string id)
        {
            Items item = _context.Items.Find(id);
            _context.Items.Remove(item);
            _context.SaveChanges();
        }
        public void UpdateItemStock(Items obj)
        {
            _context.Items.Update(obj);
            _context.SaveChanges();
        }

        public int ViewStock(string id)
        {
            Items item = _context.Items.Find(id);
            return item.StockNumber;
        }
    }
}
