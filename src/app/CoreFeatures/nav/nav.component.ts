import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  menu = [
    [
      {
        name: "Overview",
        icon: 'assets/img/overview.svg',
        status: 'active'
      }
    ],
    [
      {
        name: "All Payments",
        icon: 'assets/img/all_payments.svg',
        status: null
      },
      {
        name: "Reconcilled Payments",
        icon: 'assets/img/r_payment.svg',
        status: null
      },
      {
        name: "Un - Reconcilled Payments",
        icon: 'assets/img/u_payment.svg',
        status: null
      },
      {
        name: "Manual Settlement",
        icon: 'assets/img/m_set.svg',
        status: null
      },
    ],
    [
      {
        name: "All Orders",
        icon: 'assets/img/all_orders.svg',
        status: null
      },
      {
        name: "Pending Orders",
        icon: 'assets/img/p_orders.svg',
        status: null
      },
      {
        name: "Reconcilled Orders",
        icon: 'assets/img/r_orders.svg',
        status: null
      },
      {
        name: "Merchant Profile",
        icon: 'assets/img/person.svg',
        status: null
      },
    ]
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
