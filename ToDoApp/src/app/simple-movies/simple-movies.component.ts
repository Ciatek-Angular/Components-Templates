import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-movies',
  templateUrl: './simple-movies.component.html',
  styleUrls: ['./simple-movies.component.css']
})
export class SimpleMoviesComponent implements OnInit {

  constructor() { }
  movies: any[]

  ngOnInit() {
    this.movies = ['Harry Potter', 'Naruto', 'One Piece']
  }

  addMovie(movieHTML){
    console.log(movieHTML)

    if(movieHTML.value == ''){
      return
    }
    this.movies.push(movieHTML.value)
  }

  removeMovie(movie){
    let index = this.movies.indexOf(movie)
    this.movies.splice(index, 1)
  }
}
