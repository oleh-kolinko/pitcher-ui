import { Component, Input, Output } from '@angular/core';
import { PitchService } from 'src/app/services/pitch';

@Component({
  selector: 'vote-pitch',
  templateUrl: './vote-pitch.html',
  styleUrls: ['./vote-pitch.scss']
})
export class VotePitchComponent {
  @Input() pitch;
}
