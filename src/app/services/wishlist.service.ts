import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class WishlistService{
    url:string="http://localhost:58766/";
    constructor(private addtoWishlistHttp:HttpClient,private getWishlistHttp:HttpClient,
                private removeFromWishlist:HttpClient )
    {

    }
    Getwishlist(useremail:any)
    {
        return "wishlist"
    }
    RemoveFromWishlist(wishlistid : number, productid:number) 
    {
        return "Product" ;
    }
    AddToWishLIst(Productid:number,useremail:string)
    {

    }
  
}