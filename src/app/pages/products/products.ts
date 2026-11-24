import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-products',
  styleUrl: './products.css',
  templateUrl: './products.html',
})
export class Products {

  private router = inject(Router);
  viewDetails(productId: number) {
    this.router.navigate(['/pages/product-details', productId])
    console.log(productId)
  }
}
