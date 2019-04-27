import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home';
import { VoteRoundComponent } from './pages/vote-round/vote-round';
import { FinalistsRoundComponent } from './pages/finalists-round/finalists-round';
import { WinnerComponent } from './pages/winner/winner';
import { AddPitchComponent } from './pages/add-pitch/add-pitch.component';

const routes: Routes = [
  { path: '', redirectTo: '/home',  pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'vote', component: VoteRoundComponent },
  { path: 'finalists', component: FinalistsRoundComponent },
  { path: 'finalists/success/:quantity', component: FinalistsRoundComponent},
  { path: 'winner', component: WinnerComponent },
  { path: 'add', component: AddPitchComponent }

  // { path: 'pitch/:id',      component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
