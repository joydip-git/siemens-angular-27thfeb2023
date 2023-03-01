import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-product',
  templateUrl: './filter-product.component.html',
  styleUrls: ['./filter-product.component.css']
})
export class FilterProductComponent {

  @Input('filterData') filterValue = ''
  @Output('filterDataChanged') filterValueChanged = new EventEmitter<string>()
  submitFiterText(value: string) {
    this.filterValueChanged.emit(value)
  }
}
