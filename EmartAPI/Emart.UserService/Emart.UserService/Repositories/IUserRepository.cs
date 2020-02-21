using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.UserService.Models;

namespace Emart.UserService.Repositories
{
    public interface IUserRepository
    {
        bool BuyerLogin(string username,string password);
        bool SellerLogin(string username,string password);
        void SellerSignUp(Seller obj);
        void BuyerSignUp(Buyer obj);
    }
}
