import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UsersList } from './table'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SharedData } from 'src/app/Utilities/Shared/shared.component';
import { takeWhile } from 'rxjs/operators';
import { UsersService } from 'src/app/Services/users/users.service';

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
  @Input() tableData: any;

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
    this.ELEMENT_DATA = this.tableData;
    this.displayedColumns = ['id', 'userId', 'title', 'completed'];
    this.dataSource = new MatTableDataSource<UsersList>(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;

  }

  userDetails(user) {}

  applyFilter(event: Event) {
    if(event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  }

}
