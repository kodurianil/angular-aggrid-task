import { Component, OnDestroy } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-grid-action',
  templateUrl: './grid-action.component.html',
  styleUrls: ['./grid-action.component.css']
})
export class GridActionComponent implements ICellRendererAngularComp, OnDestroy {
  colApi;
  constructor() { }

  agInit(params: any) {
    this.colApi = params;
  }
  editUser() {
    // console.log(this.colApi);
    this.colApi.clicked(this.colApi.data, 'edit');
  }
  deleteUser() {
    this.colApi.clicked(this.colApi.data, 'delete');
  }
  refresh() {
    return false;
  }
  ngOnDestroy() {
  }

}