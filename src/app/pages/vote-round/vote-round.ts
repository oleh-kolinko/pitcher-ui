import { Component } from '@angular/core';
import { PitchService } from 'src/app/services/pitch';

@Component({
  selector: 'vote-round',
  templateUrl: './vote-round.html',
  styleUrls: ['./vote-round.scss']
})
export class VoteRoundComponent {
  constructor(public pitchService: PitchService){
    
  }
}
