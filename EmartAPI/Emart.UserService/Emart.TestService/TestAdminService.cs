using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using Emart.AdminService.Models;
using Emart.AdminService.Repositories;

namespace Emart.TestService
{
    [TestFixture]
    class TestAdminService
    {
        AdminRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new AdminRepository(new EmartDBContext());
        }
        [Test]
        [Description("Test AddCategory()")]
        public void TestAddCategory()
        {
            _repo.AddCategory(new Category()
            {
                CategoryId="C0767",
                CategoryName="XYZ",
                BriefDetails="vujh"
            });
            var result = _repo.GetCategory("C0767");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Test AddSubCategory()")]
        public void TestAddSubCategory()
        {
            _repo.AddSubCategory(new SubCategory()
            {
                CategoryId = "C0767",
                SubcategoryId = "SC99",
                SubcategoryName = "ASD",
                BriefDetails = "vujh",
                Gst = 9
            }) ;
            var result = _repo.GetSubCategory("SC99");
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("Test DeleteCategory")]
        public void TestDeleteCategory()
        {
            _repo.DeleteCategory("C0767");
            var result = _repo.GetCategory("C0767");
            Assert.Null(result);
        }
        [Test]
        [Description("Test DeleteSubCategory")]
        public void TestDeleteSubCategory()
        {
            _repo.DeleteSubCategory("SC99");
            var result = _repo.GetSubCategory("SC99");
            Assert.Null(result);
        }
    }
}
