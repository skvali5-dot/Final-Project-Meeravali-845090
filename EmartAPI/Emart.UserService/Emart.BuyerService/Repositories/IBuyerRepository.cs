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
    }
}
