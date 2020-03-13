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
                Id = "B745",
                Username = "sallubhai",
                Password = "xyz123",
                Emailid = "sallubhai@gmail.com",
                Mobilenumber = "7787989899",
                Createddatetime = DateTime.Now
            });
            var result=_repo.BuyerLogin("sallubhai", "xyz123");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Test SellerSignup()")]
        public void TestSellerSignUp()
        {
            _repo.SellerSignUp(new Seller()
            {
                Id = "S090",
                Username = "Siddu",
                Password = "siddu123",
                Emailid = "siddu@gmail.com",
                Contactnumber = "8788888889",
                Companyname="vivo",
                Website="vivo.com",
                PostalAddress="676767",
                Gstin="Yes",
                Briefaboutcompany="Once A brand Ambassador For Cricket Indian Team"
            });
            var result = _repo.SellerLogin("Siddu", "siddu123");
            Assert.IsNotNull(result);
        }
    }
}
