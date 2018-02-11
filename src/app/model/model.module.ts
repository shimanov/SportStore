import { NgModule } from '@angular/core';
import { ProductRepository } from './product.repository';
import { StaticDatasourse } from './static.datasourse';

@NgModule({
    providers: [ProductRepository, StaticDatasourse]
})

export class ModelModule { }
