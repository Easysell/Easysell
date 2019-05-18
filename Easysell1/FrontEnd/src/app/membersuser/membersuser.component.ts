import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-membersuser',
  templateUrl: './membersuser.component.html',
  styleUrls: ['./membersuser.component.css']
})
export class MembersuserComponent implements OnInit {
  accountData: any;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
      this.authService.getAccount().subscribe(
          (res: any) => {
              console.log("hai:",res);
              console.log(res.data.user.email)
              this.accountData = res.data.user.email;
          }, (err: any) => {
              this.router.navigateByUrl('/login');
          }
      );
  }

}
