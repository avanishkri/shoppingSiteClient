import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBrand } from '../shared/model/Brand';
import { IPagination } from '../shared/model/Pagination';
import { ITypes } from '../shared/model/ProductType';
import{map} from'rxjs/operators';
import { ShopParams } from '../shared/model/ShopParams';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  baseurl = 'https://localhost:44351/api/';

  constructor(private http: HttpClient) { }


  getProducts(shopParams:ShopParams) {
    let params = new HttpParams();

    if (shopParams.brandId!=0) {
      params = params.append('brandId', shopParams.brandId.toString());
    }


    if (shopParams.typeId!=0) {
      params = params.append('typeId', shopParams.typeId.toString());
    }

    
      params=params.append('sort',shopParams.sort);
      params=params.append('pageSize',shopParams.pageSize.toString());
      params=params.append('pageNumber',shopParams.pageNumber.toString());
    

    return this.http.get<IPagination>(this.baseurl + 'products',{observe:'response',params})
    .pipe(
      map(response=>{
        return response.body;
      })
    );
  }

  getProductBrands() {
    return this.http.get<IBrand[]>(this.baseurl + 'products/brands');
  }

  getProductTypes() {
    return this.http.get<ITypes[]>(this.baseurl + 'products/types');
  }

}
