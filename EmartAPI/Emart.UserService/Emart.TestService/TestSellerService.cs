using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using Emart.SellerService.Models;
using Emart.SellerService.Repositories;

namespace Emart.TestService
{
    [TestFixture]
    class TestSellerService
    {
        SellerRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new SellerRepository(new EmartDBContext());
        }
        [Test]
        [Description("Test EditProfile()")]
        public void TestEditProfile()
        {
            Seller seller = _repo.GetProfile("S001");
            seller.PostalAddress = "600096";
            _repo.EditProfile(seller);
            Seller seller1 = _repo.GetProfile("S001");
            Assert.AreSame(seller, seller1);
        }
        [Test]
        [Description("Test GetProfile()")]
        public void TestGetProfile()
        {
            var result = _repo.GetProfile("S001");
            Assert.IsNotNull(result);
        }
    }
}
