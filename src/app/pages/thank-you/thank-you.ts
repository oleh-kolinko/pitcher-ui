import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'thank-you',
  templateUrl: './thank-you.html',
  styleUrls: ['./thank-you.scss']
})
export class ThankYouComponent {
  

  constructor(private router: Router) {}

  navigate() {
    this.router.navigateByUrl('/winner');
 }
}
