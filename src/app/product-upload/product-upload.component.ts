import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-product-upload',
  templateUrl: './product-upload.component.html',
  styleUrls: ['./product-upload.component.css']
})
export class ProductUploadComponent implements OnInit {
  imageUrl: string = "./assets/images/upload.jpg";
  
  //fileToUpload : File=null;
  fileToUpload:any
  status:any;
  retaileremail  = sessionStorage.getItem('retaileremail');
  retailerid : any=2;
 
  constructor(private productService : ProductService, private router : Router) { }

  ngOnInit() {

    //write code to get retailer id
  }

  handleFileInput(event:Event) {
    const input = event.target as HTMLInputElement;
      if (!input.files?.length) {
        return;
      }
    const file = input.files[0];
    this.fileToUpload = file;

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }


  OnSubmit(Retailerid:any,Productname:any,Productquantity:any,Productprice:any,
    Productdescription:any,Productbrand:any,Categoryid:any,Image:any){
    debugger
   this.productService.UploadProduct(Retailerid.value,Productname.value,Productquantity.value,Productprice.value,Productdescription.value,Productbrand.value,Categoryid.value,this.fileToUpload)
   .subscribe(
     data =>{
       console.log('done');
       Productname.value = null;
       Productquantity.value=null;
       Productdescription.value = null;
       Productprice.value=null;
       Categoryid.value=null;
     
       Image.value = null;
      
       this.imageUrl = "./assets/images/upload.jpg";
       alert('Product uploaded');
     }
   );
   
   //this.router.navigate(['retailerProfile']);
  }

}