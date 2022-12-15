import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import Movie from '../models/Movie';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  popularMovies: Observable<Movie[]>;
  inTheatresMovies: Observable<Movie[]>;

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
    this.moviesService.getPopularMovies().subscribe(data => {
      this.popularMovies = data['results'].slice(0, 6);
      console.log(this.popularMovies);
    });

    this.moviesService.getInTheatresMovies().subscribe(data => {
      this.inTheatresMovies = data['results'].slice(0, 6);
      console.log(this.inTheatresMovies);
    });
  }

}
