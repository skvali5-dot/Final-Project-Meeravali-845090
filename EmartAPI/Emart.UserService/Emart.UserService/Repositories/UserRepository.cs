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
        public Buyer BuyerLogin(string username, string password)
        {
            
          
            Buyer buyer=_context.Buyer.SingleOrDefault(i => i.Username == username && i.Password == password);
            return buyer;
            //if (buyer.Username == username && buyer.Password == password)
          //{
          //      Console.WriteLine("Login Successfulll");
          //    return buyer;
          //}
          //else
          //{
          //      Console.WriteLine("Login Failed");
          //      return null;
          //}
        }

        public void BuyerSignUp(Buyer buyer)
        {
            _context.Add(buyer);
            _context.SaveChanges();
        }

        public Seller SellerLogin(string username, string password)
        {
            
            Seller seller = _context.Seller.SingleOrDefault(i => i.Username == username && i.Password == password);
            return seller;
            //if (seller.Username == username && seller.Password == password)
            //{
            //    Console.WriteLine("Login Successfulll");
            //    return seller;
            //}
            //else
            //{
            //    Console.WriteLine("Login Failed");
            //    return null;               
            //}
        }

        public void SellerSignUp(Seller seller)
        {
            _context.Add(seller);
            _context.SaveChanges();
        }
    }
}
