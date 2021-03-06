import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header';
import { HomeComponent } from './pages/home/home';
import { WinnerComponent } from './pages/winner/winner';
import { FinalistsRoundComponent } from './pages/finalists-round/finalists-round';
import { VoteRoundComponent } from './pages/vote-round/vote-round';
import { PitchService } from './services/pitch';
import { UserService } from './services/user';
import { VotePitchComponent } from './pages/vote-round/vote-pitch/vote-pitch';
import { ButtonsModule } from 'ngx-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VoteFinalComponent } from './pages/finalists-round/vote-final/vote-final';
import { HttpClientModule } from '@angular/common/http';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { CountdownModule } from 'ngx-countdown';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };
import { RecordRtcComponent } from './pages/record-rtc/record-rtc.component';
import { ThankYouComponent } from './pages/thank-you/thank-you';
import { AddPitchComponent } from './pages/add-pitch/add-pitch.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    WinnerComponent,
    FinalistsRoundComponent,
    VoteRoundComponent,
    VotePitchComponent,
    VoteFinalComponent,
    RecordRtcComponent,
    ThankYouComponent,
    AddPitchComponent,
  ],
  imports: [
    ButtonsModule.forRoot(),
    SocketIoModule.forRoot(config),
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    CountdownModule,
    ReactiveFormsModule
  ],
  providers: [
    PitchService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
