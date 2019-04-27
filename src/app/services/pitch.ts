import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { state } from './mock-data/pitch-state';

@Injectable()
export class PitchService {
    state = {}

    constructor(){
        this.state = state;
    }

    getPitches(){

    }
}