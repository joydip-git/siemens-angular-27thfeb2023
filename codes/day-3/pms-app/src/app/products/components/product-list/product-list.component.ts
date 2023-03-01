import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  //providers: [ProductService]
})
export class ProductListComponent implements OnInit, OnDestroy {
  private productSubscription?: Subscription;
  products?: Product[];
  errorMessage = ''
  loadingCompleted = false

  constructor(private svc: ProductService) {
  }
  ngOnDestroy(): void {
    this.productSubscription?.unsubscribe()
  }

  ngOnInit(): void {
    this.productSubscription = this.svc
      .getProducts()
      .subscribe({
        next: (resp) => {
          if (resp.data !== null) {
            this.products = resp.data
            this.errorMessage = ''
            this.loadingCompleted = true
          } else {
            this.products = undefined
            this.errorMessage = resp.message
            this.loadingCompleted = true
          }
        },
        error: (err) => {
          this.products = undefined
          this.errorMessage = err.message
          this.loadingCompleted = true
        }
      })
  }
}
