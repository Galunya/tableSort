import { Component, OnInit } from '@angular/core';
import { a } from './mock-data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  dataTable:any = [];
  dataTableBody:any = [];
  isActivColumn:number;
  directionUp:boolean=false;
  columnFilter:number;

  constructor() {

  }

  ngOnInit() {
    this.dataTable = JSON.parse(a);
    this.dataTableBody = this.dataTable.rows;
  }

  setFilter(columnFilter:number){
    this.isActivColumn =columnFilter;
    if(this.columnFilter == columnFilter)
      this.directionUp  =!this.directionUp;
    else{
      this.columnFilter = columnFilter;
      this.directionUp =true;
    }
  }
}
