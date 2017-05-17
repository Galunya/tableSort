import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterColumn'
})
export class FilterColumnPipe implements PipeTransform {
  transform(data:any[], directionUp:boolean, columnFilter:number):any {
    if (directionUp) {
      return this.sortAsc(data, columnFilter);
    }
    else {
      return this.sortDesc(data, columnFilter);
    }
  }

  sortAsc(data:any[], columnFilter:number) {
    return data.sort((a, b) => {
      if (a[columnFilter] > b[columnFilter]) {
        return 1;
      }
      if (a[columnFilter] < b[columnFilter]) {
        return -1;
      }
      return 0;
    });
  }

  sortDesc(data:any[], columnFilter:number) {
    return data.sort((a, b) => {
      if (a[columnFilter] < b[columnFilter]) {
        return 1;
      }
      if (a[columnFilter] > b[columnFilter]) {
        return -1;
      }
      return 0;
    });
  }
}
