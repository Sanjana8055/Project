import { Injectable, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  subject = new Subject();

  constructor() { }
  sendMsg(book) {
    
    this.subject.next(book);
  }
  getMsg() {
    return this.subject.asObservable();
  }
}
