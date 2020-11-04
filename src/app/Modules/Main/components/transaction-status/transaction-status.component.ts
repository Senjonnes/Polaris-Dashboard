import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-transaction-status',
  templateUrl: './transaction-status.component.html',
  styleUrls: ['./transaction-status.component.scss']
})
export class TransactionStatusComponent implements OnInit {

  public date;
  public dateForm = new FormGroup({
    date_: new FormControl(),
  });

  @Input() items: any;

  constructor() { }

  ngOnInit(): void { }

  update() {
    this.date = this.dateForm.get('date_').value;
    this.date = this.date && this.date.toISOString();
    this.date = this.date && this.date.split('T')[0];
  }

}
