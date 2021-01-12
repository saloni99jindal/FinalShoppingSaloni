import { HttpClient ,HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../models/product.model";
import { Retailer } from "../models/retailer.model";


@Injectable({
    providedIn: 'root'
  })

export class ProductService{
   url:string="http://localhost:54405/";
    constructor(private uploadProductHttp:HttpClient,private getProducts:HttpClient,
        private searchProducts:HttpClient,private httpClient:HttpClient)
    {
        
    }


    GetProduct()
    {
        return this.getProducts.get(this.url+"GetAllPoduct");
    }


    UploadProduct(retailerid:string,productname: string,productquantity:string,productprice: string,productdescription: string,productbrand: string,categoryid:string,fileToUpload: File) {
        debugger
        const formData: FormData = new FormData();
        console.log(fileToUpload)
        console.log(fileToUpload.name)
         retailerid="2"
        console.log(retailerid);
        formData.append('Image', fileToUpload,fileToUpload.name); 
        //, fileToUpload.name
        formData.append('RetailerId',retailerid);
        formData.append('ProductName', productname);
        formData.append('ProductQuantity', productquantity);
        formData.append('ProductPrice', productprice);
        formData.append('ProductDescription', productdescription);
        formData.append('ProductBrand', productbrand);
        formData.append('CategoryId', categoryid);
       
        
        return this.uploadProductHttp
          .post(this.url+"ProductUpload", formData);
    }
    
    SearchProducts(search:string)
    {
        return this.searchProducts.get(this.url+"SearchProduct?search="+search)
    }
    public RemoveProductbyapi(productid:any) 
    {
        const httpheader={headers:new HttpHeaders({'Content-Type':'text/html'})};
        return this.httpClient.post("http://localhost:57202/Remove-Product?id="+productid,httpheader);
        
    }
   
    

    public DisplayProductsByRmail(retaileremail:any){
        return this.httpClient.get("http://localhost:57202/Retailer-ProductDetails?remail="+retaileremail);
    }

    public UpdateProduct(retaileremail:any,product:Product){
        return this.httpClient.post("http://localhost:57202/Retailer-UpdateProduct?remail="+retaileremail,product);
    }
   
}