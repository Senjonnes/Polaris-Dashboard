import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-item-main',
  templateUrl: './nav-item-main.component.html',
  styleUrls: ['./nav-item-main.component.scss']
})
export class NavItemMainComponent implements OnInit {

  @Input() mainMenu: any;
  @Input() index: any;

  constructor() { }

  ngOnInit(): void { }

}
