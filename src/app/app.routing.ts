import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';



const routes: Routes = [
    { path: 'movie-list', component:MovieListComponent},
    { path: 'add-movie', component:AddMovieComponent},
    { path: 'edit-movie', component:EditMovieComponent},
]

export const routing = RouterModule.forRoot(routes);