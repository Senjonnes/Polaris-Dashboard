import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UsersList } from './table'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SharedData } from 'src/app/Utilities/Shared/shared.component';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.scss']
})
export class TransactionTableComponent implements OnInit {

  items = "Search";
  currEvent;
  ELEMENT_DATA: UsersList[];
  displayedColumns: string[];
  dataSource;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  isAlive: boolean;
  isLoading: boolean;

  constructor(
    private  dialog:  MatDialog,
    public sharedData: SharedData,
  ) {

    this.isAlive = true;
    this.isLoading = false;

  }

  ngOnInit(): void {
    this.get_all_users();
  }

  get_all_users() {
    let currentApp = JSON.parse(localStorage.getItem('currentApp'));
    if(this.sharedData.transactions.tableData.length > 0) {
      let res = this.sharedData.transactions.tableData;
      console.log(res)
      res.map((i, index) => {
        i['Sn'] = index + 1;
      })
      this.ELEMENT_DATA = res;
      this.displayedColumns = ['Sn', 'Name', 'AccountNumber', 'Status'];
      this.dataSource = new MatTableDataSource<UsersList>(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    }
    // console.log(currentApp)
    // this.ivyService._get_all_users(currentApp.AppId.toString())
    // this.ivyService.users.pipe( takeWhile( () => this.isAlive)).subscribe(res => {
    // })
  }

  userDetails(user) {
    console.log(user)
  }

  applyFilter() {
    // const filterValue = this.sharedData.ivy.searchResult[1];
    // this.dataSource.filter = filterValue.trim().toLowerCase();

    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }

}
