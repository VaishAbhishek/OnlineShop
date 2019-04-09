import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService) { }

  product;
  date = new Date();
  ngOnInit() {
    this.dataService.getProduct(this.route.snapshot.paramMap.get('pid')).subscribe(productdoc => {
      this.product = productdoc;
      console.log(this.product);
    });
  }

}
