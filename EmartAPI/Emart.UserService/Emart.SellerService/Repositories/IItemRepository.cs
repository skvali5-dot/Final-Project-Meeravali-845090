using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.SellerService.Models;
namespace Emart.SellerService.Repositories
{
    public interface IItemRepository
    {
        void AddItems(Items obj);
        void DeleteItem(string id);
        void UpdateItemStock(Items obj);
        string ViewStock(string id);
        List<Items> ViewItems(string id);
        Items GetItem(string id);
    }
}
