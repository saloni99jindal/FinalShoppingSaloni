import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable()
export class ForgotPasswordRetailerService{
    url:string="http://localhost:58766/";
    
    constructor(private sendOTPHttp:HttpClient,private updateRetailerHttp:HttpClient)
    {
        
    }

    SendOTP(email:any)
    {
        return this.sendOTPHttp.get(this.url+"SendOTPEmailRetailer?retaileremail="+email);
    }
    UpdateRetailer(retaileremail:any,retailerpassword:any)
    {
        const httpheader={headers:new HttpHeaders({'Content-Type':'text/html'})};
        return this.updateRetailerHttp.put(this.url+"UpdatePasswordRetailer?retaileremail="+retaileremail+"&retailerpassword="+retailerpassword,httpheader)
    }
}