import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-transaction-chart',
  templateUrl: './transaction-chart.component.html',
  styleUrls: ['./transaction-chart.component.scss']
})
export class TransactionChartComponent implements OnInit {

  @Input() tran: any

  constructor() { }

  ngOnInit(): void {
    console.log(this.tran)
  }

}
