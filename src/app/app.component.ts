import { Component, NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  title = 'my-app';
  constructor(private router: Router) { }

  gotoList() {
    this.router.navigate(['/employees']);
  }
}
