using System;
using System.Collections.Generic;

namespace Emart.UserService.Models
{
    public partial class Cart
    {
        public string Id { get; set; }
        public string Categoryid { get; set; }
        public string Subcategoryid { get; set; }
        public string Price { get; set; }
        public string Itemname { get; set; }
        public string Sellerid { get; set; }
        public string Description { get; set; }
        public string Stocknumber { get; set; }
        public string Remarks { get; set; }
        public string Imagename { get; set; }
    }
}
