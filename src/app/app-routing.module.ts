import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'movies' }, 
  { path: 'movies/search', component: MovieSearchComponent }, 
  { path: 'movies', component: MoviesComponent }, 
  { path: 'movies/:id', component: MovieDetailsComponent }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
