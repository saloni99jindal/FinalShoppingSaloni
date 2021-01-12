import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  useremail:any = sessionStorage.getItem('useremail');
  status : any;
  remove: any;
  add:any;
  prod : Product= new Product();
  subtot : any;
  // buystatus : any;
  userwishlist : any = []
  subtotal : any = []
  // afterorder : boolean = false; 
  constructor(private cartService:CartService,private wishlistService:WishlistService) 
  {

  }

  ngOnInit(): void {
    this.status=this.wishlistService.Getwishlist(this.useremail)
  }

  Removefromwishlist(wishlistid:number,productid : number){
    this.remove = this.wishlistService.RemoveFromWishlist(wishlistid, productid)
    // .subscribe(
    //   data =>{
    //     if(data == "Success"){
    //       if(this.afterorder){
    //         alert('Order placed Successfully');
    //       }else{
    //         alert('Item removed from cart');
    //       }
    //     }
    //   }
    // );
  }



   OpenModel(productid : number ,productname : string, productprice: number,productquantity : number,productdescription : string,productbrand : string ,productimage1 : string,retailerid : number,categoryid : number){
    this.prod.productid = productid;
    this.prod.productname = productname;
    this.prod.productprice = productprice;
    this.prod.productquantity = productquantity;
    this.prod.productdescription = productdescription;
    this.prod.productbrand = productbrand;
    this.prod.productimage1 = productimage1;
    this.prod.retailerid = retailerid;
    this.prod.categoryid = categoryid;
  }

  addtocart(productid:any,quantity : any){
    console.log(quantity);
    if(this.useremail != null){
      this.status = this.cartService.AddtoCart(this.useremail, productid,quantity)
      .subscribe(
        data => {
          if(data == "Success"){
            alert("Product successfully added");
          }
          else
          {
            alert('cannot add more than product quantity')
          }
        }
      )
     }
    else{
      alert("Please login to buy products");
    }
  }

}