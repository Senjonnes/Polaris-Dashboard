import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  transactions = [
    {
      title: 'Daily Transaction Volume',
      value: 2342
    },
    {
      title: 'Daily Transaction Value',
      value: 4000000
    },
    {
      title: 'Total Transaction Volume',
      value: 452000
    },
    {
      title: 'Total Transaction Value',
      value: 4000000
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
