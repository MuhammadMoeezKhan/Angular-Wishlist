import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EventService } from '../../../shared/services/EventService';
import { WishItem } from '../../../shared/models/wishItem';

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})

export class WishListItemComponent {
  //property binding
  @Input() wish! : WishItem;

  // //two-way event binding
  // @Input() fullfilled! : boolean;
  // @Output() fullfilledChange = new EventEmitter<boolean>();

  constructor(private eventBus : EventService) {}

  get cssClasses(){
    return {'strike-out red-text' : this.wish.isComplete};
  }

  removeWish(){
    this.eventBus.emit('removeWish', this.wish);
  }

  toggleFullfilled(){
    // this.fullfilled = ! this.fullfilled;
    // this.fullfilledChange.emit(this.fullfilled)
    this.wish.isComplete = !this.wish.isComplete;
    console.log("toggle button has been clicked!");
  }
}