import { Component, OnInit } from '@angular/core';

import { Order } from 'src/app/shared/order';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css'],
})
export class SectionOrdersComponent implements OnInit {
  constructor() { }

  orders: Order[] = [
    {
      id: 1,
      customer: {
        id: 1,
        name: 'Main St Bakery',
        email: 'mainst@test.com',
        state: 'NSW'
      },
      total: 230,
      placed: new Date(2022, 6, 15),
      fulfilled: new Date(2022, 6, 16)
    },
    {
      id: 2,
      customer: {
        id: 1,
        name: 'Main St Bakery',
        email: 'mainst@test.com',
        state: 'NSW'
      },
      total: 230,
      placed: new Date(2022, 6, 15),
      fulfilled: new Date(2022, 6, 16)
    }
  ];

  ngOnInit(): void {}
}
