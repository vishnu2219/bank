import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    data="YOUR PERFECT BANKING PARTNER"
    data1="Enter account number"
    data2="Enter password"
    accno:any
    pass:any

    userDetails:any={
      1003:{username:"manil",accno:"1003",password:"manil123",balance:"0"},
      1006:{username:"vijesh",accno:"1006",password:"vijesh123",balance:"0"},
      1009:{username:"chugesh",accno:"1009",password:"chugesh123",balance:"0"}

   }

   constructor(){}
   ngOnInit():void{

   }
   //method

   login(){
    var acnum=this.accno
    var password=this.pass
    var userDetails=this.userDetails
    // alert('login sucksexfully')
    if(acnum in userDetails){
      if(password==userDetails[acnum]["password"]){
        alert("login success")
      }
      else{
        alert("inccorect password")
      }
    }
    else{
      alert("incorrect account number")
    }
 }
 accnoChange(event:any){
  this.accno=event.target.value
  console.log(this.accno);
  
  
}

passChange(event:any){
  this.pass=event.target.value
  console.log(this.pass);
  
}
}
