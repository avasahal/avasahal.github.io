import { MovieListComponent } from './../movie-list/movie-list.component';
import { Movies } from './../model/movie.model';
import { Router } from '@angular/router';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import uuid from 'uuid';

@Component({
  providers:[MovieListComponent],
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  movies:Movies[];
 
  
  constructor(private formBuilder:FormBuilder, private dataService:DataService) { }

  addForm: FormGroup;
  submitted = false;
 

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      imdbID: [],
      Title: ['', Validators.required],
      Year: ['', Validators.required],
      Director: ['', Validators.required],
      Genre: ['', Validators.required],
      Runtime: ['', Validators.required]
    });
  }
  



 // convenience getter for easy access to form fields
    get f() { return this.addForm.controls; }

    onSubmit() {
      if (this.addForm.invalid) {
            return;
      } else {
      const movie = this.addForm.value as Movies;
     // you need to generate a uuid for every new entry
      //movie.imbdID = uuid.v4();
      this.dataService.add(movie);
      }
      
    }

}
