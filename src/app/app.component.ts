import { Component, OnInit } from '@angular/core';
import { WishItem } from './../shared/models/wishItem';
import { EventService } from './../shared/services/EventService';
import { WishService } from './wish.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  private subscription : any = null;
  filter : any = () => {};
  items : WishItem[] = [];
   
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