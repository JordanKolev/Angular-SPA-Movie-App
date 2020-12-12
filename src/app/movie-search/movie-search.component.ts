import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import Movie from '../models/Movie';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  searchedMovies: Movie[]; 
  query: string; 
  

  constructor(private movieService: MoviesService, private route: ActivatedRoute) { }

  ngOnInit() { 
    this.route.queryParams.subscribe((params: Params) => { 
      this.query = params['search']; 
      this.movieService.searchMovie(this.query).subscribe(data => {
        this.searchedMovies = data['results'];  
      }); 
    }); 
  } 
}
