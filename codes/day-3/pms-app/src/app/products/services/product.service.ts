import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { ApiResponse } from "../models/api-response";
import { Product } from "../models/product";

@Injectable()
export class ProductService {
    private url = 'http://127.0.0.1:3003/products'
    constructor(private _http: HttpClient) {
    }

    getProducts(): Observable<ApiResponse<Product[]>> {
        //send a request to the backend API server to fetch all products
        const resp: Observable<ApiResponse<Product[]>> = this._http.get<ApiResponse<Product[]>>(this.url)
        return resp
    }

    getProduct(id: number): Observable<ApiResponse<Product>> {
        const obs: Observable<any> = this._http.get(`${this.url}/${id}`)
        const resp: Observable<ApiResponse<Product>> =
            obs.pipe(
                map(
                    (actualResp: any): ApiResponse<Product> => {
                        return {
                            message: actualResp.message,
                            data: actualResp.data
                        }
                    }
                )
            )

        return resp
    }
    addproduct() {

    }
    deleteProduct() {

    }
    updateProduct() {

    }
}