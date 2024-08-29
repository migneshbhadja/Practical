import { Component, OnInit } from '@angular/core';
import { Items } from '../_files/Items';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  constructor() { }

  searchItem: string = "";
  filterItems: any[] = Items;

  ngOnInit(): void {
  }

  searchItems(event: any) {
    this.filterItems = Items.filter((item: any) => String(item.name).toLowerCase().indexOf(String(event.target.value).toLowerCase().trim()) > -1)
    console.log(event.target.value)
  }

  sortItems(descending: boolean = false) {
    this.filterItems = this.filterItems.slice().sort((a, b) => {
      const comparison = a.name.localeCompare(b.name);
      return descending ? -comparison : comparison;
    });
  }

}
