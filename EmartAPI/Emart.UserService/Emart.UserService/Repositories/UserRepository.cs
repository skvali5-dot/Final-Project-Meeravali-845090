using Emart.UserService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace Emart.UserService.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly EmartDBContext _context;
        public UserRepository(EmartDBContext context)
        {
            _context = context;
        }
        public bool BuyerLogin(string username, string password)
        {
            
          Buyer item=_context.Buyer.SingleOrDefault(i => i.Username == username && i.Password == password);
          if (item.Username == username && item.Password == password)
          {
                Console.WriteLine("Login Successfulll");
              return true;
          }
          else
          {
                Console.WriteLine("Login Failed" +
                    "");
                return false;
          }
        }

        public void BuyerSignUp(Buyer obj)
        {
            _context.Add(obj);
            _context.SaveChanges();
        }

        public bool SellerLogin(string username, string password)
        {
            
            Seller item = _context.Seller.SingleOrDefault(i => i.Username == username && i.Password == password);
            if (item.Username == username && item.Password == password)
            {
                Console.WriteLine("Login Successfulll");
                return true;
            }
            else
            {
                Console.WriteLine("Login Failed");
                return false;
            }
        }

        public void SellerSignUp(Seller obj)
        {
            _context.Add(obj);
            _context.SaveChanges();
        }
    }
}
