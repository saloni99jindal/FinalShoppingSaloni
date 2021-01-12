import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { CartComponent } from './cart/cart.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { ChangepassworduserComponent } from './changepassworduser/changepassworduser.component';
import { ChangepasswordretailerComponent } from './changepasswordretailer/changepasswordretailer.component';
import { ForgotpasswordretailerComponent } from './forgotpasswordretailer/forgotpasswordretailer.component';
import { ForgotpassworduserComponent } from './forgotpassworduser/forgotpassworduser.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { LoginretailerComponent } from './loginretailer/loginretailer.component';
import { ProductUploadComponent } from './product-upload/product-upload.component';
import { ProductcategoryComponent } from './productcategory/productcategory.component';
import { ProductsforapprovalComponent } from './productsforapproval/productsforapproval.component';
import { ProfileadminComponent } from './profileadmin/profileadmin.component';
import { ProfileretailerComponent } from './profileretailer/profileretailer.component';
import { ProfileuserComponent } from './profileuser/profileuser.component';
import { RegisterretailerComponent } from './registerretailer/registerretailer.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { RetailerdetailsComponent } from './retailerdetails/retailerdetails.component';
import { SearchComponent } from './search/search.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { RouterModule, Routes } from '@angular/router';
import {   FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

import { AdminService } from './services/admin.service';
import { CartService } from './services/cart.service';
import { ForgotPasswordRetailerService } from './services/forgotpasswordretailer.service';
import { ForgotPasswordUserService } from './services/forgotpassworduser.service';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { RetailerService } from './services/retailer.service';
import { UserService } from './services/user.service';
import { WishlistService } from './services/wishlist.service';
import { FilterService } from './services/filter.service';
import { FiltersComponent } from './filters/filters.component';

var myRoutes:Routes=[
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"registerUser",component:RegisteruserComponent},
  {path:"registerRetailer",component:RegisterretailerComponent},
  {path:"loginUser",component:LoginuserComponent},
  {path:"loginAdmin",component:LoginadminComponent},
  {path:"loginRetailer",component:LoginretailerComponent},
  {path:"profileUser",component:ProfileuserComponent},
  {path:"profileAdmin",component:ProfileadminComponent},
  {path:"profileRetailer",component:RetailerdetailsComponent},
  {path:"retailerdetails",component:RetailerdetailsComponent},
  {path:"changepasswordUser",component:ChangepassworduserComponent},
  {path:"changepasswordRetailer",component:ChangepasswordretailerComponent},
  {path:"forgotpasswordUser",component:ForgotpassworduserComponent},
  {path:"forgotpasswordRetailer",component:ForgotpasswordretailerComponent},
  {path:"addProduct",component:ProductUploadComponent},
  {path:"productcategory",component:ProductcategoryComponent},
  {path:"searchProduct",component:SearchComponent},
  {path:"allProducts",component:AllproductsComponent},
  {path:"productsForAdminApproval",component:ProductsforapprovalComponent},
  {path:"updateproduct",component:UpdateproductComponent},
  {path:"wishlist",component:WishlistComponent},
  {path:"cartUser",component:CartComponent},
  {path:"productdetails",component:ProductdetailsComponent},
  {path:"filters",component:FiltersComponent},
  
  
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    
    CartComponent,
   
    AllproductsComponent,
   
    ChangepassworduserComponent,
   
    ChangepasswordretailerComponent,
   
    ForgotpasswordretailerComponent,
   
    ForgotpassworduserComponent,
   
    LoginadminComponent,
   
    LoginuserComponent,
   
    LoginretailerComponent,
   
    ProductUploadComponent,
   
    ProductcategoryComponent,
   
    ProductsforapprovalComponent,
   
    ProfileadminComponent,
   
    ProfileretailerComponent,
   
    ProfileuserComponent,
   
    RegisterretailerComponent,
   
    RegisteruserComponent,
   
    RetailerdetailsComponent,
   
    SearchComponent,
   
    UpdateproductComponent,
   
    WishlistComponent,
   
    ProductdetailsComponent,
   
    FiltersComponent
   
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [AdminService,CartService,ForgotPasswordRetailerService,
                 ForgotPasswordUserService,OrderService,ProductService,RetailerService
                ,UserService,WishlistService,FilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
