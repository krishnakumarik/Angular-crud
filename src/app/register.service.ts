import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs';
import { Observable } from "rxjs/Observable";
@Injectable()
export class RegisterService{
    constructor(private http:Http){

    }

    registerUser(data){
      
        return this.http.post("https://reqres.in/api/users",data)
        .map(res=>{
        var response =res.json();
            console.log(res);
             })
        .toPromise();
    }


UpdateUser(data){
      return  this.http.put("https://reqres.in/api/",data)
        .map(res=>{
            var response = res.json();
            console.log(res);
          })
    .toPromise();
    
}


}
