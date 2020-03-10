using System;
using System.Collections.Generic;
using System.Text;
using Emart.UserService.Models;
using Emart.UserService.Repositories;
using NUnit.Framework;

namespace Emart.TestService
{
    [TestFixture]
    public class TestUserService
    {
        UserRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new UserRepository(new EmartDBContext());
        }
        [Test]
        [Description("Test BuyerLogin()")]
        public void TestBuyerLogin()
        {
            var result = _repo.BuyerLogin("skvali5", "abcd12");
            //Buyer buyer = _repo.BuyerLogin("skvali5", "abcd1");
            //Assert.AreEqual(buyer.Username, "skvali5");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Test SellerLogin()")]
        public void TestSellerLogin()
        {
            var result = _repo.SellerLogin("seller2", "seller");
            //Buyer buyer = _repo.BuyerLogin("skvali5", "abcd1");
            //Assert.AreEqual(buyer.Username, "skvali5");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Test BuyerSignup()")]
        public void TestBuyerSignUp()
        {
            _repo.BuyerSignUp(new Buyer()
            {
                Id = "B045",
                Username = "vali5",
                Password = "xyz123",
                Emailid = "vali5@gmail.com",
                Mobilenumber = "7787989899",
                Createddatetime = DateTime.Now
            });
            var result=_repo.BuyerLogin("vali5", "xyz123");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Test SellerSignup()")]
        public void TestSellerSignUp()
        {
            _repo.SellerSignUp(new Seller()
            {
                Id = "S045",
                Username = "Seller5",
                Password = "seller5",
                Emailid = "seller5@gmail.com",
                Contactnumber = "8787989899",
                Companyname="Oppo",
                Website="Oppo.com",
                PostalAddress="676767",
                Gstin="Yes",
                Briefaboutcompany="Once A brand Ambassador For Cricket Indian Team"
            });
            var result = _repo.SellerLogin("Seller5", "seller5");
            Assert.IsNotNull(result);
        }
    }
}
