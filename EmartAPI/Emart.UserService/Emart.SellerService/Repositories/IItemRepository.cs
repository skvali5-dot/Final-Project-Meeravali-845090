using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.SellerService.Models;
namespace Emart.SellerService.Repositories
{
    public interface IItemRepository
    {
        void AddItems(Items item);
        void DeleteItem(string id);
        void UpdateItemStock(Items item);
        string ViewStock(string id);
        List<Items> ViewItems(string id);
        Items GetItem(string id);
        List<Category> GetCategories();
        List<SubCategory> GetSubCategories(string cid);
    }
}
