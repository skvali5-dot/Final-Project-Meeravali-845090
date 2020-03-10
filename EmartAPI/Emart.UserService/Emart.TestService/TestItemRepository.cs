using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using Emart.SellerService.Repositories;
using Emart.SellerService.Models;
namespace Emart.TestService
{
    [TestFixture]
    class TestItemRepository
    {
        ItemRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new ItemRepository(new EmartDBContext());
        }
        [Test]
        [Description("Test AddItems()")]
        public void TestAddItems()
        {
            _repo.AddItems(new Items()
            {
                Id="I078",
                CategoryId="C01",
                SubcategoryId="SC01",
                ItemName="Mi 4",
                Sellerid="S001",
                Imagename="mi4.jpg",
                Price="7999",
                Description="A cool Mobile in Low price",
                StockNumber="855",
                Remarks="Best mobile in Low Budget"
            });
            var result = _repo.GetItem("I078");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Test DeleteItem()")]
        public void TestDeleteItem()
        {
            _repo.DeleteItem("I786");
            var result = _repo.GetItem("I786");
            Assert.Null(result);
        }
        [Test]
        [Description("Test UpdateItemStock()")]
        public void TestUpdateItemStock()
        {
            Items item = _repo.GetItem("I078");
            item.StockNumber = "567";
            _repo.UpdateItemStock(item);
            Items item1 = _repo.GetItem("I078");
            Assert.AreEqual(item, item1);
        }
        [Test]
        [Description("Test ViewStock()")]
        public void TestViewStock()
        {
            var result = _repo.ViewStock("I078");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Test ViewItems()")]
        public void TestViewItems()
        {
            var result = _repo.ViewItems("S001");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Test GetItem()")]
        public void TestGetItem()
        {
            var result = _repo.GetItem("I078");
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
    }
}
