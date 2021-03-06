import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL = 'http://localhost:3000';
  TOKEN_KEY = 'x-access-token';
  no_nav:boolean=true;
  show_nav:boolean;
  constructor(private http: HttpClient, private router: Router) { 
    
    const role=localStorage.getItem('role');
    if(role==='admin'){
      this.isadmin();
    }
    else if(role==='user'){
      this.isuser();
    }
  }

   async additem(data):Promise<boolean>{
    return new Promise((resolve,reject)=>{
      this.http.post(this.API_URL+'/additem',data).subscribe(err=>{

      },res=>{

      })
    }) as Promise<boolean>;
  }

  get token() {
    return localStorage.getItem(this.TOKEN_KEY);
}

get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
}

logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    localStorage.removeItem("admin");
    localStorage.removeItem("user");
    this.no_nav=true;
    this.show_nav=false;
    this.router.navigateByUrl('/');
}
isadmin(){
  this.no_nav=false;
  this.show_nav=true;
}

isuser(){
  this.no_nav=false;
  this.show_nav=true;
}

get admin(){
    return localStorage.getItem("admin")
}

get users(){
    return localStorage.getItem("user");
}

 login(email: string, pass: string) {
    const headers = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' })
    };

    const data = {
        email: email,
        password: pass
    };
    console.log(data)

    this.http.post(this.API_URL + '/users/authenticate', data).subscribe(
        (res: any) => {
            console.log(res);
            localStorage.setItem(this.TOKEN_KEY, res.data.token);
            localStorage.setItem("email",email)
            localStorage.setItem("role", res.data.user.roles)
            if(res.data.user.roles=="admin")
            {
              this.isadmin();
              localStorage.setItem("admin", res.data.user.roles)
                this.router.navigateByUrl('/members');
            }
            else
            {
                this.isuser();
                localStorage.setItem("user", res.data.user.roles)
                this.router.navigateByUrl('/membersusers');
            }
        }
    );
}
register(name,email,password) {
    const obj = {
      name: name,
      email:email,
      password:password,
      "role":"user"
    };
    console.log(obj);

    const headers = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' }),
      
  };
  this.http.post(this.API_URL + '/users/register', obj,headers).subscribe(
    (res: any) => {
        console.log(res);
        alert("user created sucessfully");
        this.router.navigateByUrl('/login');
    })
  }

  registervendor(name,email,password) {
    const obj = {
      name: name,
      email:email,
      password:password,
      "role":"vendor"
    };
    console.log(obj);

    const headers = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' }),
      
  };
  this.http.post(this.API_URL + '/users/register', obj,headers).subscribe(
    (res: any) => {
        console.log(res);
        alert("vendor created sucessfully");
       // this.router.navigateByUrl('');
    })
  }
getAccount() {
   const data = {
        email: localStorage.getItem("email")
    }
    console.log(data);   
   
    return this.http.post(this.API_URL + '/users/getusers',data);
}

}
