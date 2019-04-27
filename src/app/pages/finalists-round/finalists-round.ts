import { Component } from '@angular/core';
import { PitchService } from 'src/app/services/pitch';



@Component({
  selector: 'finalists-round',
  templateUrl: './finalists-round.html',
  styleUrls: ['./finalists-round.scss']
})
export class FinalistsRoundComponent {

  quantity = 1;
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
      successUrl: 'http://localhost:4200/finalists/success/'+quantity,
      cancelUrl: 'http://localhost:4200/',
      customerEmail: 'customer@example.com',
    }).then((result) => {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    });
    
  }

  
}
