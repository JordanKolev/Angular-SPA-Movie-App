import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import MovieDetails from '../models/Movie-details';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  id: string;
  movie: any;
  genres: string;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.moviesService.getMovieById(this.id).subscribe(data => {
      this.movie = data;
      this.genres = data['genres'].map(el => el['name']).join(' ');
      console.log(this.movie);
      console.log(this.genres);
    });
  }

}
