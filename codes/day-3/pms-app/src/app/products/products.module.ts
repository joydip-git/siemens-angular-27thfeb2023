import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ProductService } from './services/product.service';
import { FilterProductComponent } from './components/filter-product/filter-product.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    AddProductComponent,
    EditProductComponent,
    FilterProductComponent
  ],
  imports: [
    CommonModule, HttpClientModule
  ],
  providers: [ProductService],
  exports: [ProductListComponent]
})
export class ProductsModule { }
