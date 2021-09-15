import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { SharedModule } from '../shared/shared.module';
import { PagingHeaderComponent } from '../shared/Component/paging-header/paging-header.component';



@NgModule({
  declarations: [
    ShopComponent,
    ProductItemComponent,
    SharedModule,
    PagingHeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShopModule { }
