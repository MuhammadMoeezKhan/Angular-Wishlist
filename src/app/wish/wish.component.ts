import { Component, OnInit } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { EventService } from '../../shared/services/EventService';
import { WishService } from './wish.service';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css'
})

export class WishComponent implements OnInit {
  filter : any = () => {};
  items : WishItem[] = [];
  private subscription : any = null;


  constructor(eventBus : EventService, private wishService: WishService ){
    this.subscription = eventBus.listen('removeWish', (wishToRemove) => {
      console.log(wishToRemove.wishText);
      let wishIndex = this.items.indexOf(wishToRemove);
      this.items.splice(wishIndex, 1);
    })
  }

  get filteredWishes() : any {
    return this.items.filter((item) => this.filter(item));
  }

  ngOnInit(): void {
    this.wishService.getWishes().subscribe(
      (responsePayload: any) => {this.items = responsePayload;}
    )
  }
}
