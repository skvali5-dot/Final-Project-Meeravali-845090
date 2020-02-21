using System;
using System.Collections.Generic;

namespace Emart.SellerService.Models
{
    public partial class Seller
    {
        public Seller()
        {
            PurchaseHistory = new HashSet<PurchaseHistory>();
        }

        public string Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Companyname { get; set; }
        public string Gstin { get; set; }
        public string Briefaboutcompany { get; set; }
        public string PostalAddress { get; set; }
        public string Website { get; set; }
        public string Emailid { get; set; }
        public string Contactnumber { get; set; }

        public virtual ICollection<PurchaseHistory> PurchaseHistory { get; set; }
    }
}
