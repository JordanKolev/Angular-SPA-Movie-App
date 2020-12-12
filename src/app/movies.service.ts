import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 
import Movie from './models/Movie'; 
import MovieDetails from './models/Movie-details';

const BASE_URL = 'https://api.themoviedb.org/3'; 
const API_KEY = '&api_key=3dbdc6aa16bfc24ecf1a485ee1bfe8ab'; 
const API_KEY_ALT = '?api_key=3dbdc6aa16bfc24ecf1a485ee1bfe8ab'; 

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  popularMoviesEndPoint = '/discover/movie?sort_by=popularity.desc'; 
  inTheatresEndPoint = '/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2020-10-22'; 

  constructor(private http: HttpClient) { } 

  getPopularMovies() {
    return this.http.get<Movie[]>(BASE_URL + this.popularMoviesEndPoint + API_KEY);  
  } 

  getInTheatresMovies() {
    return this.http.get<Movie[]>(BASE_URL + this.inTheatresEndPoint + API_KEY); 
  } 

  getMovieById(id: string) { 
    return this.http.get<MovieDetails[]>(BASE_URL + `/movie/${id}` + API_KEY_ALT); 
  } 

  searchMovie(query: string) {
    return this.http.get<Movie[]>(BASE_URL + '/search/movie' + API_KEY_ALT + `&query=${query}`); 
  }

}
