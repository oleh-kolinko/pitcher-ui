import { Component, Input, Output } from '@angular/core';
import { PitchService } from 'src/app/services/pitch';

@Component({
  selector: 'vote-final',
  templateUrl: './vote-final.html',
  styleUrls: ['./vote-final.scss']
})
export class VoteFinalComponent {
  @Input() pitch;


  quantity = 0;
  stripe:any = null;

  constructor(public pitchService: PitchService){
    
  }

  onBuy(quantity){
    if(!this.stripe){
      this.stripe = window['Stripe']('pk_test_PdUq8HGX8Mzt15xwOkSVQFPg00SVqlKPAe');
    }
    this.stripe.redirectToCheckout({
      items: [
        // Replace with the ID of your SKU
        {sku: 'sku_Exod7d0O2fMqas', quantity: quantity}
      ],
      successUrl: 'http://localhost:4200/success/'+quantity,
      cancelUrl: 'http://localhost:4200/',
      customerEmail: 'customer@example.com',
    }).then((result) => {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    });
    
  }
}
