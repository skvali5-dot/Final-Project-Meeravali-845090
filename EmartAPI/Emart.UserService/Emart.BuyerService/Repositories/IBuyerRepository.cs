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
    }
}
