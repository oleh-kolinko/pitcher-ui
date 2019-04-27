import { Component, Input, Output } from '@angular/core';
import { PitchService } from 'src/app/services/pitch';

@Component({
  selector: 'vote-final',
  templateUrl: './vote-final.html',
  styleUrls: ['./vote-final.scss']
})
export class VoteFinalComponent {
  @Input() pitch;
}
