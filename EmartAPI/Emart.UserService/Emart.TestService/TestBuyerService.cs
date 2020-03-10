using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using Emart.BuyerService.Models;
using Emart.BuyerService.Repositories;
namespace Emart.TestService
{
    [TestFixture]
    class TestBuyerService
    {
        BuyerRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new BuyerRepository(new EmartDBContext());
        }
        [Test]
        [Description("Test SearchItemByName")]
        public void TestSearchItemByName()
        {
            var result = _repo.SearchItemByName("mi 4");
            Assert.IsNotNull(result);
            
        }
        [Test]
        [Description("Test SearchItemByCategory")]
        public void TestSearchItemByCategory()
        {
            var result = _repo.SearchItemByCategory("C01");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Test SearchItemByCategory")]
        public void TestSearchItemBySubCategory()
        {
            var result = _repo.SearchItemBySubCategory("SC01");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Test GetProfile()")]
        public void TestGetProfile()
        {
            var result = _repo.GetProfile("B001");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Test EditProfile()")]
        public void TestEditProfile()
        {
            Buyer buyer = _repo.GetProfile("B001");
            buyer.Mobilenumber = "9010565826";
            _repo.EditProfile(buyer);
            Buyer buyer1 = _repo.GetProfile("B001");
            Assert.AreSame(buyer,buyer1);
        }
        [Test]
        [Description("Test BuyItem()")]
        public void TestBuyItem()
        {
            _repo.BuyItem(new PurchaseHistory()
            {
               Id="TID09",
               ItemId="I002",
               BuyerId="B001",
               SellerId="S001",
               NumberOfItems="1",
               DateTime=DateTime.Now,
               Remarks="Nothing",
               TransactionType="Debit"
            });
            var result = _repo.GetPurchaseHistory("TID09");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Test GetpurchaseHistory()")]
        public void TestGetPurchaseHistory()
        {
            var result = _repo.GetPurchaseHistory("TID09");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Test purchaseHistory()")]
        public void TestPurchaseHistory()
        {
            var result = _repo.PurchaseHistory("B001");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Test GetCategories()")]
        public void TestGetCategories()
        {
            var result = _repo.GetCategories();
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Test GetSubCategories()")]
        public void TestGetSubCategories()
        {
            var result = _repo.GetSubCategories("C01");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Test GetAllItems()")]
        public void TestGetAllItems()
        {
            var result = _repo.GetAllItems();
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Test AddToCart()")]
        public void TestAddToCart()
        {
            _repo.AddtoCart(new Cart()
            {
                Cartid="CID99",
                Itemname="mi4",
                Id="I078",
                Categoryid="C01",
                Subcategoryid="SC01",
                Sellerid="S001",
                Buyerid="B001",
                Price="7999",
                Description="A cool mobile in low price",
                Stocknumber="567",
                Remarks="Best mobile in Low Budget",
                Imagename="mi4.jpg"
            });
            var result = _repo.CheckCartItem("CID99","B001");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Test GetCartItems()")]
        public void TestGetCartItems()
        {
            var result = _repo.GetCartItems("B001");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Test DeleteCartItem()")]
        public void TestDeleteCartItem()
        {
            _repo.DeleteCartItem("CID99");
            var result=_repo.GetCartItem("CID99");
            Assert.Null(result);
        }
        [Test]
        [Description("Test GetCount()")]
        public void TestGetCount()
        {
            var result = _repo.GetCount("B001");
            Assert.IsNotNull(result);
        }
    }
}
