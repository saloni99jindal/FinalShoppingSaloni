import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  products:any=[];
pstatus=true;
product:Product;
status:any;
pnot:string="";
retaileremail = sessionStorage.getItem('retaileremail');
 
  constructor(private royter:Router,private productService:ProductService) { 
    this.product=new Product();
  }

  ngOnInit(): void {
    this.GetProductDetailsByRmail(this.retaileremail);
  }
  
  GetProductDetailsByRmail(retaileremail:any){
    
    this.productService.DisplayProductsByRmail(this.retaileremail)
    .subscribe(productdets=>{
      this.products=productdets
    })

  }

  Removeproduct(productid:number){
    
    this.productService.RemoveProductbyapi(productid)
    .subscribe(
        r =>{
          if(r==1){
              
              alert('Product removed successfully');
              // this.router.navigate(['retailerprofile']);
          }else{
            alert('Failed try again');
          }
        })
    

  }

}
