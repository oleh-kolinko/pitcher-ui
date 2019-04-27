import { Component, Input } from '@angular/core';
import { SocketsService } from '../../../services/sockets.service';
import { PitchService } from '../../../services/pitch';

@Component({
  selector: 'vote-pitch',
  templateUrl: './vote-pitch.html',
  styleUrls: ['./vote-pitch.scss']
})
export class VotePitchComponent {
  @Input() pitch;

  constructor(public socketService: SocketsService, public pitchService: PitchService) { }

  public vote(id: number): void {
    let upvoted = this.pitchService.votes.some(x => x === id);
    if (!upvoted) {
      this.pitchService.votes.push(id);
      this.socketService.sendMessage('like', {
        id: id
      });
    }
    else {
      this.pitchService.votes = this.pitchService.votes.filter(x => x !== id);
      this.socketService.sendMessage('dislike', {
        id: id
      });
    }
    
  }

}
