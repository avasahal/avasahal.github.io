import { Router } from '@angular/router';
import { DataService } from './../data.service';
import { Movies } from './../model/movie.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  // @Output() update = new EventEmitter();

  movies: Movies[]= [];
  editedMovie: Movies;

  constructor(private dataService:DataService, private router: Router){}

  ngOnInit() {
  
    // this.getMovies();
    
    // this.dataService.getMovies()
    //   .then(res => this.movies = res.Search);
      
    this.movies = this.dataService.getAll();
    
  }

// getMovies() {
//   return this.dataService.get().then(movies => { 
//     this.movies = movies;
//     });
// }

  deleteMovie(imdbID:string): void {
    if(confirm("Are you sure to delete this movie ?")) {
        this.movies = this.movies.filter(elem => 
          elem.imdbID !== imdbID);
    };
  }

  update(id: string) {
    this.editedMovie = this.movies.find(obj => obj.imdbID === id);
  }

  
}
