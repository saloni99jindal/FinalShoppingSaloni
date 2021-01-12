import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-productcategory',
  templateUrl: './productcategory.component.html',
  styleUrls: ['./productcategory.component.css']
})
export class ProductcategoryComponent implements OnInit {

  categoryname:string="";
  description:string="";
  registerForm:FormGroup;
  submitted:boolean=false;
  constructor(private formBuilder: FormBuilder,private router:Router,private adminService:AdminService)
  {
    this.registerForm=formBuilder.group({})
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      categoryname:['',Validators.required],
      description:['',[Validators.minLength(20),Validators.required]]
    });
  }
  get f() { 
    return this.registerForm.controls; 
  }
  register()
  {
    this.submitted=true;
    if (this.registerForm.invalid) {
      console.log(this.registerForm)
      return;
    }
    else
    {
      console.log(this.categoryname)
      console.log(this.description)
      this.adminService.InsertCategory(this.categoryname,this.description)
      .subscribe(data=>
        {
          if(data='success')
          {
            alert("category added successfully");
            this.router.navigate(['profileAdmin']);
          }
          else{
            alert("category not added");
            window.location.reload();
          }
        })
    }
  }

}