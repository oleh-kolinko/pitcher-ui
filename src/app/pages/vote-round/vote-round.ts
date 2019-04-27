import { Component, OnInit } from '@angular/core';
import { PitchService } from 'src/app/services/pitch';
import { SocketsService } from '../../services/sockets.service';

@Component({
  selector: 'vote-round',
  templateUrl: './vote-round.html',
  styleUrls: ['./vote-round.scss']
})
export class VoteRoundComponent implements OnInit {

  public pitches: Array<object>;

  constructor(
    public pitchService: PitchService,
    public socketService: SocketsService
  ) { }

  ngOnInit() {
    this.getPithces();
    this.subscribeToSockets();
  }

  private subscribeToSockets(): void {
    this.socketService.getMessages().subscribe(success => {
      console.log('pitches update available');
      this.getPithces();
    })
  }


  private getPithces(): void {
    this.pitches = this.pitchService.getPitches();
  }

}
