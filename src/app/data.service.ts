import { map } from 'rxjs/operators';

import { Movies } from './model/movie.model';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
private movies: Movies[] = [
    { imdbID: "1", Title: 'Avatar', Year: 2009, Director: 'James Cameron', Genre: 'Fiction', Runtime: '176min' },
    { imdbID: "2", Title: 'Harry Potter', Year: 2001, Director: 'J.K. Rowling', Genre: 'Fiction', Runtime: '154min' },
    { imdbID: "3", Title: 'Spiderman', Year: 2008, Director: 'Sam Raimi', Genre: 'Marvel', Runtime: '119min' },
    { imdbID: "4", Title: 'Batman', Year: 1989, Director: 'Christopher Nolan', Genre: 'Fiction', Runtime: '176min' },
    { imdbID: "5", Title: 'Space Jam', Year: 1994, Director: 'Joe Pytka', Genre: 'Cartoon', Runtime: '154min' },
    { imdbID: "6", Title: 'BirdBox', Year: 2008, Director: 'Susanne Bier', Genre: 'Horror', Runtime: '119min' },
  ];

  constructor(private http: HttpClient) { 
    
  }
  

  getMovies() {
    return fetch('https://www.omdbapi.com/?s=batman&apikey=9fa6058b')
    .then(function (resp) {
      return resp.json()
    });
    
  }
  

  getMovieById(imdbID:string) {
    return this.http.get<Movies[]>(imdbID);
  }

  getAll(): Movies[]{
    return this.movies;
  }
  

  get() {
    return new Promise(resolve => resolve(this.movies));
  }

 update(id) {
   return new Promise (resolve => {
    const idx = this.movies.findIndex(m => id === m.imdbID);
    this.movies[idx].imdbID = id;
    resolve(id);
  })
}

  add(movie: Movies) {
    this.movies.push(movie);
  }

  
}
