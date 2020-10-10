import { Component, OnInit } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';
import { ApiCallsService } from './api-calls.service';
import { GridActionComponent } from './grid-action/grid-action.component';
import { User } from './user';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  columnDefs = [
      // {
      //   headerName: 'ID',
      //   field: 'id'
      // },
      {
        headerName: 'First Name',
        field: 'firstName',
        sortable: true,
        filter: 'agTextColumnFilter'
      },
      { 
        headerName: 'Last Name',
        field: 'lastName',
        sortable: true,
        filter: 'agTextColumnFilter'
      },
      { 
        headerName: 'Mobile',
        field: 'mobile',
        sortable: true,
        filter: 'agNumberColumnFilter'
      },
      { 
        headerName: 'DOB',
        field: 'dob',
        sortable: true,
        filter: 'agTextColumnFilter',
        cellRenderer: (params) => {
          console.log(params);
          return `${params.value.day}/${params.value.month}/${params.value.year}`;
        }
      },
      { 
        headerName: 'Email',
        field: 'email',
        sortable: true,
        filter: 'agTextColumnFilter'
      },
      { 
        headerName: 'Address',
        field: 'address',
        sortable: true,
        filter: 'agTextColumnFilter'
      },
      { 
        headerName: 'Pincode',
        field: 'pincode',
        sortable: true,
        filter: 'agNumberColumnFilter'
      },
      {
        headerName: 'Action',
        width: 200,
        cellRenderer: 'btnCellRenderer',
        cellRendererParams: {
          clicked: (field: any, action: string) => {
            // alert(`${field} was clicked ${action}`);
            if ( action === 'edit') {
              this.editUser(field);
            } else if ( action === 'delete') {
              this.deleteUser(field);
            }
          }
        }
      }
  ];
  frameworkComponents = {
    btnCellRenderer: GridActionComponent
  };
  // modules: any[] = AllCommunityModules;
  defaultColDef = {
    width: 200,
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
  usersData: User[];
  gridApi;
  selectedUser: User;
  constructor(
    private apiCalls: ApiCallsService
  ) {}

  editUser(user: User) {
    this.selectedUser = user;
  }
  deleteUser(user: User) {
    this.apiCalls.removeUser(user);
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.apiCalls.users$.subscribe(usersResponse => {
      this.usersData = usersResponse;
      this.gridApi.setRowData(this.usersData);
    });
  }

  ngOnInit() {

  }
}
