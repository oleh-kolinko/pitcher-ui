import { Component } from '@angular/core';
import { PitchService } from 'src/app/services/pitch';
import { Router } from '@angular/router';

@Component({
  selector: 'vote-round',
  templateUrl: './vote-round.html',
  styleUrls: ['./vote-round.scss']
})
export class VoteRoundComponent {
  constructor(public pitchService: PitchService, private router: Router){

  }
  navigate() {
    window.scroll(0,0);
    this.router.navigateByUrl('/finalists');
 }
}
