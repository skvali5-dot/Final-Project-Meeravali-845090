using System;
using System.Collections.Generic;

namespace Emart.BuyerService.Models
{
    public partial class Items
    {
        public Items()
        {
            PurchaseHistory = new HashSet<PurchaseHistory>();
        }

        public string Id { get; set; }
        public string CategoryId { get; set; }
        public string SubcategoryId { get; set; }
        public string Sellerid { get; set; }
        public string Price { get; set; }
        public string ItemName { get; set; }
        public string Description { get; set; }
        public string StockNumber { get; set; }
        public string Remarks { get; set; }

        public virtual Category Category { get; set; }
        public virtual Seller Seller { get; set; }
        public virtual SubCategory Subcategory { get; set; }
        public virtual ICollection<PurchaseHistory> PurchaseHistory { get; set; }
    }
}
