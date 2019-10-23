import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';
import { Routes, RouterModule } from '@angular/router';
import {HomeviewComponent} from '../homeview/homeview.component';

const routes: Routes = [
  {path: 'home', component: HomeviewComponent,
    children: [
      { path: 'signup', component: SignupComponent }
    ]
  }];
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  test() {
    console.log('hello');
  }
  gotoHome() {
    console.log('hello');
    this.router.navigate(['home/signup']);  // define your component where you want to go
}
}
