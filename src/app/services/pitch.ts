import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { state } from './mock-data/pitch-state';

const apiUrl = "http://localhost:3000"
@Injectable()
export class PitchService {
    state = {
        pitches: []
    }

    constructor(public http: HttpClient){
        this.state = state;
        // this.getPitches();
    }

    getPitches(){
        this.http.get(apiUrl+'/pitches').toPromise().then((data:any) => {
            this.state.pitches = data.data;
            console.log(this.state)
        })
    }
}