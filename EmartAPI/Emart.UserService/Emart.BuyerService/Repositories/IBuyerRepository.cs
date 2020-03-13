using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.BuyerService.Models;
namespace Emart.BuyerService
{
    public interface IBuyerRepository
    {
        List<Items> SearchItemByName(string name);
        List<Items> SearchItemByCategory(string id);
        List<Items> SearchItemBySubCategory(string id);
        Buyer GetProfile(string id);
        void EditProfile(Buyer buyer);
        void BuyItem(PurchaseHistory obj);
        List<PurchaseHistory> PurchaseHistory(string bid);
        List<Category> GetCategories();
        List<SubCategory> GetSubCategories(string cid);
        List<Items> GetAllItems();
        void AddtoCart(Cart cart);
        List<Cart> GetCartItems(string bid);
        void DeleteCartItem(string cartid);
        int GetCount(string bid);
        bool CheckCartItem(string itemid,string buyerid);
        PurchaseHistory GetPurchaseHistory(string id);
        Cart GetCartItem(string cartid);
        //List<Items> FilterByPrice(string price,string price1);
    }
}
