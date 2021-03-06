import { Injectable } from '@angular/core';
import { Order } from '../resource/order';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class OrderService {
  
    private ordersUrl = 'http://localhost:8080/order';
    private headers = new Headers({'Access-Control-Allow-Origin': '*', 'Accepts': 'application/json'});
  
    public constructor(private http: Http) {}
   
    public getOrders(): Promise<Order[]> {
        return this.http.get(this.ordersUrl, {headers: this.headers})
             .toPromise()
             .then(response => { 
                console.log(response.json());
                return response; 
             })
             .then(response => response.json() as Order[])
             .then(orders => { console.log(orders); return orders; })
             .catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
        console.error('Could not complete requested service operation', error);
        return Promise.reject(error.message || error);
    }
}
