using System;
using System.Collections.Generic;

namespace Emart.BuyerService.Models
{
    public partial class Cart
    {
        public string Cartid { get; set; }
        public string Id { get; set; }
        public string Categoryid { get; set; }
        public string Subcategoryid { get; set; }
        public string Sellerid { get; set; }
        public string Buyerid { get; set; }
        public string Price { get; set; }
        public string Itemname { get; set; }
        public string Description { get; set; }
        public string Stocknumber { get; set; }
        public string Remarks { get; set; }
        public string Imagename { get; set; }

        public virtual Buyer Buyer { get; set; }
        public virtual Category Category { get; set; }
        public virtual Items IdNavigation { get; set; }
        public virtual Seller Seller { get; set; }
        public virtual SubCategory Subcategory { get; set; }
    }
}
