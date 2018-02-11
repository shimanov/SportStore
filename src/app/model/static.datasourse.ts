import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

@Injectable()
export class StaticDatasourse {
    private products: Product[] = [
        new Product(1, 'Product 1', 'Category 1', 'Product1 (Category 1)', 100),
        new Product(2, 'Product 1', 'Category 1', 'Product1 (Category 1)', 100),
        new Product(3, 'Product 1', 'Category 1', 'Product1 (Category 1)', 100),
        new Product(4, 'Product 1', 'Category 1', 'Product1 (Category 1)', 100),
        new Product(5, 'Product 1', 'Category 2', 'Product1 (Category 2)', 100),
        new Product(6, 'Product 1', 'Category 2', 'Product1 (Category 2)', 100),
        new Product(7, 'Product 1', 'Category 3', 'Product1 (Category 3)', 100),
        new Product(8, 'Product 1', 'Category 4', 'Product1 (Category 4)', 100),
        new Product(9, 'Product 1', 'Category 4', 'Product1 (Category 4)', 100),
        new Product(10, 'Product 1', 'Category 5', 'Product1 (Category 5)', 100),
        new Product(11, 'Product 1', 'Category 6', 'Product1 (Category 6)', 100),
        new Product(12, 'Product 1', 'Category 6', 'Product1 (Category 6)', 100),
        new Product(13, 'Product 1', 'Category 6', 'Product1 (Category 6)', 100),
    ];
    getProducts(): Observable<Product[]> {
        return Observable.from([this.products]);
    }
}
