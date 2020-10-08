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
      { headerName: 'Year', field: 'year', sortable: true, filter: 'agNumberColumnFilter' },
      { headerName: 'Gold', field: 'gold', sortable: true, filter: 'agNumberColumnFilter' },
      { headerName: 'Silver', field: 'silver', sortable: true, filter: 'agNumberColumnFilter' },
      { headerName: 'Bronze', field: 'bronze', sortable: true, filter: 'agNumberColumnFilter' },
  ];
  modules: any[] = AllCommunityModules;
  defaultColDef = {
      width: 150,
      editable: true,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      resizable: true,
    };

  paginationPageSize: number = 50;
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
