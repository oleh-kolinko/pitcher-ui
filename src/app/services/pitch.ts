import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { state } from './mock-data/pitch-state';
import { Observable } from 'rxjs';

const apiUrl = "http://localhost:3000"
@Injectable()
export class PitchService {
  state = {
    pitches: []
  }

  votes = [];

  constructor(public http: HttpClient) {
    this.state = state;
    this.votes = [];
    // this.getPitches();
  }

  getPitches(): any{
    this.http.get(apiUrl + '/pitches').toPromise().then((data: any) => {
      this.state.pitches = data.data;
      console.log(this.state.pitches);
      return this.state.pitches;
    });
  }

  createPitch(body: any, options: any = null): any {
    const url = apiUrl + '/pitches/add';
    this.http.post(url, body, options).toPromise().then((data: any) => {
      console.log('pitch created');
    })
  }


}
