import { Injectable } from "@angular/core";
import { provideAnimations } from "@angular/platform-browser/animations";
import { Observable, Subject, Subscription } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class EventService{
    private subject = new Subject();                                        //
    private subscriptions: Map<string, Subscription> = new Map();           //

    emit(eventName: string, payload: any){
        this.subject.next({eventName, payload});
    }

    listen(eventName: string, callback: (event: any) => void){
        const subscription = this.subject.asObservable().subscribe((nextObjectFromEvent : any) => {
            if(nextObjectFromEvent.eventName === eventName){
                callback(nextObjectFromEvent.payload);
            }
        })

        this.subscriptions.set(eventName, subscription);
        return subscription;
    }

    unsubscribe(eventName: string){
        const subscription = this.subscriptions.get(eventName);
        if (subscription){
            subscription.unsubscribe();
            this.subscriptions.delete(eventName);
        }
    }
}