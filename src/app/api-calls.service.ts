import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiCallsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getPosts() {
    return this.httpClient.get<any[]>('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json');
  }

}