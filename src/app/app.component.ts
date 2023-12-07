import { Component } from '@angular/core';
import { CartService } from './service/cart.service';
import { ApiService } from './service/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecom';

  public productList : any;
  public filterCategory : any
  public totalItem : number =0;
  public searchTerm : string = '';

  constructor(private api : ApiService, private cartService : CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
      this.productList = res;
      this.filterCategory = res;

      this.productList.forEach((a:any) => {
        Object.assign(a, {quantity:1, total:a.price})
      })
    })

  }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }

  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category == ''){
        return a;
      }
    })
  }
}
