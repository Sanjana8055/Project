import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { 

  }
  setLocal(user) {
    localStorage.setItem('user',user);

  }
  getLocal() {
    return localStorage.getItem('user')
  }
  setLocalOrders(orders) {
    localStorage.setItem('orders',orders);

  }
  getLocalOrders() {
    return localStorage.getItem('orders')
  }

  logout() {
  return localStorage.removeItem('user');
  }

}
