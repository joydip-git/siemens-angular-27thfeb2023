import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "../models/product";

@Pipe({
    name: 'productfilter'
})
export class ProductFilterPipe implements PipeTransform {
    transform(value: Product[], ...args: string[]): Product[] {
        if (value.length > 0 && args[0] !== '') {
            return value.filter(
                (p) => {
                    return p.productName
                        .toLocaleLowerCase()
                        .indexOf(args[0].toLocaleLowerCase())
                        !== -1
                }
            )
        } else
            return value
    }
}