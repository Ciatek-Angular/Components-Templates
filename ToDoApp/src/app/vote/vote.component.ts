import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  didVote = false;
  
  constructor() { }

  ngOnInit() {
  }

  @Input() name: string;
  @Output()voted = new EventEmitter()

  vote(agreed: boolean) {
    this.voted.emit(agreed);
    this.didVote = true;
  }

}
