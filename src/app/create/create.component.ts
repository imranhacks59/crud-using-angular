import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  FormControl, FormArray } from '@angular/forms'  
import axios from 'axios';

interface DynamicField {
  label: string;
  type: string;
  name: string;
}
interface FormData{
  companyName:string,
  contactNumber:string,
  email:string,
  gstNumber:string,
  address: string;
  city: string;
  state: string;
  pincode:string
}
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent{
  
  formData:FormData={
      companyName:"",
      contactNumber:"",
      email:"",
      address:"",
      city:"",
      state:"",
      gstNumber:'',
      pincode:''
      
  }

  // dynamicFields: DynamicField[] = [];
  // constructor(){
  //   this.dynamicFields.push({
  //     label: 'Address ' ,
  //     type: 'text',
  //     name: 'address' 
  //   },
  //   {
  //     label: 'city ' ,
  //     type: 'text',
  //     name: 'city' 
  //   },
  //   {
  //     label: 'state ' ,
  //     type: 'text',
  //     name: 'state' 
  //   },
  //   {
  //     label: 'pincode ',
  //     type: 'text',
  //     name: 'pincode' 
  //   },
  //   )
  // }
  // addDynamicField() {
  //   this.dynamicFields.push({
  //     label: 'Address ' ,
  //     type: 'text',
  //     name: 'address' 
  //   },
  //   {
  //     label: 'city ',
  //     type: 'text',
  //     name: 'city' 
  //   },
  //   {
  //     label: 'state ' ,
  //     type: 'text',
  //     name: 'state' 
  //   },
  //   {
  //     label: 'pincode ',
  //     type: 'text',
  //     name: 'pincode' 
  //   },
  //   );
  // }
  ngOnInit(): void {  }
    submit(){
      axios.post('https://64018b32ab6b7399d0a724e8.mockapi.io/react-crud-app',this.formData)
      .then(response=>{
        console.log(response)
      })
      .catch(error=>{
        console.log(error)
      })
    } 
  
  
}
