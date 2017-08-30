import { RegisterService } from './register.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
 user:any={};
 user2:any={}
 user3:any={}
 
  constructor(private registerSvc:RegisterService){
 }

 addEmployee(){
  var self=this
  console.log(this.user);
  this.registerSvc.registerUser(this.user)
  .then((res)=>{
    console.log(res);
    self.user = this.user2;
   this.user2={};
  })
  .catch((err)=>{
    console.log(err);
  })
    
  }


 deleteemployee(i){
    this.user2.splice(i,1);
    }

  myvalue:any={};
  editemployee(k){
    this.user3.firstname=this.user[k].firstname;
    this.user3.lastname=this.user[k].lastname;
  this.myvalue=k;
  }
}
