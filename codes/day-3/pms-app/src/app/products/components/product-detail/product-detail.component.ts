import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  private productSubscription?: Subscription;
  product?: Product;
  errorMessage = ''
  loadingCompleted = false

  constructor(
    private routeInfo: ActivatedRoute,
    private service: ProductService
  ) { }
  ngOnDestroy(): void {
    this.productSubscription?.unsubscribe()
  }
  ngOnInit(): void {
    const snapshot: ActivatedRouteSnapshot = this.routeInfo.snapshot
    const id = Number(snapshot.params['id'])
    this.productSubscription =
      this.service
        .getProduct(id)
        .subscribe({
          next: (resp) => {
            if (resp.data !== null) {
              this.product = resp.data
              this.errorMessage = ''
              this.loadingCompleted = true
            } else {
              this.product = undefined
              this.errorMessage = resp.message
              this.loadingCompleted = true
            }
          },
          error: (err: Error) => {
            this.product = undefined
            this.errorMessage = err.message
            this.loadingCompleted = true
          }
        })
  }
}
