import { Component } from '@angular/core';
import { ApiCallsService } from './api-calls.service';
import { AllCommunityModules } from '@ag-grid-community/all-modules';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  columnDefs = [
    // {
    //     headerName: 'ID',
    //     field: 'id',
    //     maxWidth: 75,
    //   },
      {
        headerName: 'Athlete',
        field: 'athlete',
        minWidth: 190,
        sortable: true,
        filter: 'agTextColumnFilter'
      },
      { headerName: 'Age', field: 'age', sortable: true, filter: 'agNumberColumnFilter' },
      { headerName: 'Date', field: 'date', sortable: true, type: ['dateColumn', 'nonEditableColumn'] },
      { headerName: 'Gold', field: 'gold', sortable: true, filter: 'agNumberColumnFilter' },
      { headerName: 'Silver', field: 'silver', sortable: true, filter: 'agNumberColumnFilter' },
      { headerName: 'Bronze', field: 'bronze', sortable: true, filter: 'agNumberColumnFilter' },
  ];
  // modules: any[] = AllCommunityModules;
  defaultColDef = {
    width: 150,
    editable: true,
    filter: 'agTextColumnFilter',
    floatingFilter: true,
    resizable: true,
  };
  columnTypes = {
    numberColumn: {
      width: 130,
      filter: 'agNumberColumnFilter',
    },
    nonEditableColumn: { editable: false },
    dateColumn: {
      filter: 'agDateColumnFilter',
      filterParams: {
        comparator: function (filterLocalDateAtMidnight, cellValue) {
          var dateParts = cellValue.split('/');
          var day = Number(dateParts[0]);
          var month = Number(dateParts[1]) - 1;
          var year = Number(dateParts[2]);
          var cellDate = new Date(year, month, day);
          if (cellDate < filterLocalDateAtMidnight) {
            return -1;
          } else if (cellDate > filterLocalDateAtMidnight) {
            return 1;
          } else {
            return 0;
          }
        },
      },
    }
  }
  paginationPageSize: number = 10;
  postData: any[] = [];
  constructor(
    private apiCalls: ApiCallsService
  ) {
    this.getPosts();
  }

  getPosts() {
    this.apiCalls.getPosts().subscribe(postRespons => {
      this.postData = postRespons;
    });
  }
}
