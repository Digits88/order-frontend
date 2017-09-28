import { Component, OnInit } from '@angular/core';
import { Order } from '../domain/order';
import { OrderService } from '../service/order.service';

@Component({
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.css'],
    selector: 'orders'
})
export class OrdersComponent implements OnInit {
  
    orders: Order[];

    constructor(private orderService: OrderService) { }

    ngOnInit() {
        this.orderService.getOrders().then(orders => this.orders = orders);
    }

}
