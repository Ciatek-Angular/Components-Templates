import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  constructor() { }

  animal_input: string
  animals: any[]

  ngOnInit() {
    this.animals = ['dog', 'cat', 'lion','elephant']
  }

  addAnimal(animalHtml: any) {
    // console.log(animalHtml.value)
    if(animalHtml.value == ''){
      return
    }
    this.animals.push(animalHtml.value)
  }

  removeAnimal(animal) {
    console.log(animal)
    if(animal < -1){
      return
    }
    let index = this.animals.indexOf(animal)
    this.animals.splice(index, 1)
  }

}
