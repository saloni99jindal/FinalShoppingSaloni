//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace FinalShopping.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class tblWishlist
    {
        public int id { get; set; }
        public Nullable<int> Product_id { get; set; }
        public string useremail { get; set; }
    
        public virtual tblProduct tblProduct { get; set; }
        public virtual tblUser tblUser { get; set; }
    }
}
