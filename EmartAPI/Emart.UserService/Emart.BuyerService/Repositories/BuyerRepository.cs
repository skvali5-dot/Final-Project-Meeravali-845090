using Emart.BuyerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.BuyerService.Repositories
{
    public class BuyerRepository : IBuyerRepository
    {
        private readonly EmartDBContext _context;
        public BuyerRepository(EmartDBContext context)
        {
            _context = context;
        }

        public void AddtoCart(Cart cart)
        {
            _context.Add(cart);
            _context.SaveChanges();
        }

        public void BuyItem(PurchaseHistory obj)
        {
            _context.Add(obj);
            _context.SaveChanges();
        }

        public bool CheckCartItem(string itemid,string buyerid)
        {
            Cart cart=_context.Cart.SingleOrDefault(i=>i.Id==itemid &&i.Buyerid==buyerid);
            if (cart != null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public void DeleteCartItem(string cartid)
        {
            Cart cart = _context.Cart.Find(cartid);
            _context.Cart.Remove(cart);
            _context.SaveChanges();
        }

        public void EditProfile(Buyer buyer)
        {
            _context.Buyer.Update(buyer);
            _context.SaveChanges();
        }

        public List<Items> GetAllItems()
        {
            return _context.Items.ToList();
        }

        public Cart GetCartItem(string cartid)
        {
            return _context.Cart.Find(cartid);
        }

        public List<Cart> GetCartItems(string bid)
        {
            return _context.Cart.Where(e=>e.Buyerid==bid).ToList();
        }

        public List<Category> GetCategories()
        {
            return _context.Category.ToList();
        }

        public int GetCount(string bid)
        {
            return _context.Cart.Where(i => i.Buyerid == bid).ToList().Count;
        }

        public Buyer GetProfile(string id)
        {
            return _context.Buyer.Find(id);
        }

        public PurchaseHistory GetPurchaseHistory(string id)
        {
            return _context.PurchaseHistory.Find(id); 
        }
        public List<SubCategory> GetSubCategories(string cid)
        {
            return _context.SubCategory.Where(i => i.CategoryId == cid).ToList();
        }

        public List<PurchaseHistory> PurchaseHistory(string bid)
        {
            List<PurchaseHistory> item= _context.PurchaseHistory.Where(i => i.BuyerId == bid).ToList();
            return item;
        }

        public List<Items> SearchItemByCategory(string id)
        {
            return _context.Items.Where(i => i.CategoryId == id).ToList();
        }

        public Items SearchItemByName(string name)
        {
            return _context.Items.SingleOrDefault(i => i.ItemName == name);
        }

        public List<Items> SearchItemBySubCategory(string id)
        {
            return _context.Items.Where(i => i.SubcategoryId == id).ToList();
        }
    }
}
