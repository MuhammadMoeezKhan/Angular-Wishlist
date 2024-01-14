import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import { catchError, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WishService {
  constructor(private http : HttpClient) { }

  private getStandardOptions(): any {
    return{
      headers: new HttpHeaders({
        "Content-Type": 'application/json'
      })
    }
  }

  getWishes(){
    let options = this.getStandardOptions();
    options.params = new HttpParams({
      fromObject: {
        'format': 'json'
      }
    })

    return this.http.get('../assets/wishes.json').pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse){
    if (error.status === 0){
      console.error('There is a client or network error', error.error);
    }
    else{
      console.error('There is a server error', error.error);
    }

    return throwError(() => new Error('We are unable to retrieve data, please try again!'));
  }

  private addWish(wish: WishItem){
    let options = this.getStandardOptions();
    options.headers = options.headers.set('Authorization', 'auth_token');
    this.http.post('../asssets/wishes.json', wish, options)
  }
}