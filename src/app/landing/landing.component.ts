import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  movieSearchVal: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

  }

  search() {
    const query = this.movieSearchVal;
    this.router.navigate(['/movies/search'], { queryParams: { search: query } });
  }
}
