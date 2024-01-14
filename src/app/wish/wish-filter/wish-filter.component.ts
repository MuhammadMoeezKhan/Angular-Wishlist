import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { WishItem } from '../../../shared/models/wishItem';

const filters = [
  (item: WishItem) => {return item},
  (item: WishItem) => {return !item.isComplete},
  (item: WishItem) => {return item.isComplete},
]

@Component({
  selector: 'wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})

export class WishFilterComponent implements OnInit {
  @Input() filter: any;
  @Output() filterChange = new EventEmitter<any>();
  listFilter: any = '0'

  ngOnInit(): void {
    this.listFilterChange('0');
  }

  listFilterChange(newSelection: any){
    this.filter = filters[newSelection];
    this.filterChange.emit(this.filter);
  }
}