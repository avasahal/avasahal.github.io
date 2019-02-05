import { MovieListComponent } from './../movie-list/movie-list.component';
import { Router } from '@angular/router';
import { Movies } from './../model/movie.model';
import { DataService } from './../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {first} from "rxjs/operators";

@Component({
  providers: [MovieListComponent],
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private dataService: DataService, private router: Router, private movieListComp:MovieListComponent) { }

  //@Output() update = new EventEmitter();

  editForm: FormGroup;
  movies:Movies[];

  @Input() editedMovie: Movies;

  ngOnInit() {
   
    this.editForm = this.formBuilder.group({
      imdbID:[],
      Title: ['', Validators.required],
      Year: ['', Validators.required],
      Director: ['', Validators.required],
      Genre: ['', Validators.required],
      Runtime: ['', Validators.required]
    });
  }



show() {
console.log('test', this.editedMovie);

}
  // updateMovie(movie, newValue) {
  //   movie.Title = newValue;
  //   return this.dataService.update(movie).then(() => {
  //     return this.movieListComp.getMovies();
  //   })
  // }

  onSubmit() {
    
  }
}
