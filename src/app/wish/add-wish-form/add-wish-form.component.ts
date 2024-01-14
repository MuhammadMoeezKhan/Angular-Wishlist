import { Component, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../../shared/models/wishItem';

@Component({
  selector: 'add-wish-form',
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css'
})

export class AddWishFormComponent {
  //event-binding
  @Output() addWishEvent = new EventEmitter<WishItem>();

  newWishItemText: string = '';

  addNewWishItem(){
    console.log(this.newWishItemText);
    this.addWishEvent.emit(new WishItem(this.newWishItemText));
    this.newWishItemText = '';
  }
}