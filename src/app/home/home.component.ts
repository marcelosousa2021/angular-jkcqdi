import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}
  clicked(path) {
    console.log('Marcelo');
    alert(path);
    mylogger('About to get something');

    this.router.navigate([path]);

    //this.router.navigate(['one']);
  }

  ngOnInit() {}
}

function mylogger(msg) {
  console.log(msg);
}
