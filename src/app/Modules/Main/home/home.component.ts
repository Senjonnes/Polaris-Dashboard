import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/users/users.service';
import { SharedData } from 'src/app/Utilities/Shared/shared.component';
import { MatDialog } from '@angular/material/dialog';
import { takeWhile } from 'rxjs/operators';

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

  items = [
    {
      title: "Orders",
      rate: 80,
      pending: 20,
      reconcilled: 80,
      total: 100
    },
    {
      title: "Payments",
      rate: 80,
      pending: 20,
      reconcilled: 80,
      total: 100
    },
  ]
  
  currEvent;

  isAlive: boolean;
  isLoading: boolean;
  tableData: any;

  constructor(
    private  dialog:  MatDialog,
    public sharedData: SharedData,
    public usersSvc: UsersService
  ) {
    this.isAlive = true;
    this.isLoading = false;
  }

  ngOnInit(): void {
    this.get_all_todos();
  }

  get_all_todos() {
    this.usersSvc._get_todos();
    this.usersSvc.todos.pipe(takeWhile( () => this.isAlive)).subscribe(res => {
      if(res) {
        this.tableData = res;
      }
    })

  }

}
