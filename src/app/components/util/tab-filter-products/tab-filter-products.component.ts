import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-filter-products',
  templateUrl: './tab-filter-products.component.html',
  styleUrls: ['./tab-filter-products.component.scss']
})
export class TabFilterProductsComponent implements OnInit {

  active = 'top';

  constructor() { }

  ngOnInit(): void {
  }

}
