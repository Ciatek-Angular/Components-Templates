import { Component, ViewChild, ViewChildren, OnInit, AfterViewInit, QueryList } from '@angular/core';

import { StudentComponent } from './Student.component'
import { VoteComponent } from './vote/vote.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild(StudentComponent) firststudentComp: StudentComponent
  @ViewChildren(VoteComponent) votesComp//: QueryList<VoteComponent>

  constructor(){
  }

  ngOnInit() {
    // it will give error since the component student is not created yet
    // console.log(this.studentComp.user1)
  }

  ngAfterViewInit() {
    // for view child
    console.log(this.firststudentComp.user1)
    
    // for view children
    this.votesComp.toArray().map( (comp)=>
      console.log(comp.name)
    )
  
  }

  title = 'ToDoApp';

  agreed = 0;
  disagreed = 0;

  user1 = {
    name: "Sami",
    course: "Angular",
    phoneNumber: 70000222,
    email: "sami@gmail.net"
  }

  user2 = {
    name: "Rami",
    course: "Angular",
    phoneNumber: 70324322,
    email: "rami@gmail.net"
  }

  user3 = {
    name: "Tahami",
    course: "Angular",
    phoneNumber: 71020444,
    email: "tahami@gmail.net"
  }

  voters = ['Mr. IQ', 'Ms. Universe', 'Bombasto'];

  onVoted(agreed: boolean){
    console.log(agreed)
    agreed ? this.agreed++ : this.disagreed++;
  }
}
