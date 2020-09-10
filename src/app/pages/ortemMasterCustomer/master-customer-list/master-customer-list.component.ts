import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-master-customer-list',
  templateUrl: './master-customer-list.component.html',
  styleUrls: ['./master-customer-list.component.scss']
})
export class MasterCustomerListComponent implements OnInit {

  data = [
    {
      MasterCustomerID: 1,
      Ownername: 'Ibtesam Ahmed',
      CellNumber: '0333',
      Email: 'mdo@gmail.com',
      Address: 'ABC pakistan',
      IsActive: 'true',
    }, {
      MasterCustomerID: 2,
      Ownername: 'Arqam Rafay',
      CellNumber: '0333',
      Email: 'mdo@gmail.com',
      Address: 'ABC pakistan',
      IsActive: 'true',
    }, {
      MasterCustomerID: 1,
      Ownername: 'Haroon Sattaar',
      CellNumber: '0333',
      Email: 'mdo@gmail.com',
      Address: 'ABC pakistan',
      IsActive: 'true',
    },
    {
      MasterCustomerID: 1,
      Ownername: 'Ibtesam Ahmed',
      CellNumber: '0333',
      Email: 'mdo@gmail.com',
      Address: 'ABC pakistan',
      IsActive: 'true',
    }, {
      MasterCustomerID: 2,
      Ownername: 'Arqam Rafay',
      CellNumber: '0333',
      Email: 'mdo@gmail.com',
      Address: 'ABC pakistan',
      IsActive: 'true',
    }, {
      MasterCustomerID: 1,
      Ownername: 'Haroon Sattaar',
      CellNumber: '0333',
      Email: 'mdo@gmail.com',
      Address: 'ABC pakistan',
      IsActive: 'true',
    },
    {
      MasterCustomerID: 1,
      Ownername: 'Ibtesam Ahmed',
      CellNumber: '0333',
      Email: 'mdo@gmail.com',
      Address: 'ABC pakistan',
      IsActive: 'true',
    }, {
      MasterCustomerID: 2,
      Ownername: 'Arqam Rafay',
      CellNumber: '0333',
      Email: 'mdo@gmail.com',
      Address: 'ABC pakistan',
      IsActive: 'true',
    }, {
      MasterCustomerID: 1,
      Ownername: 'Haroon Sattaar',
      CellNumber: '0333',
      Email: 'mdo@gmail.com',
      Address: 'ABC pakistan',
      IsActive: 'true',
    },
    {
      MasterCustomerID: 1,
      Ownername: 'Ibtesam Ahmed',
      CellNumber: '0333',
      Email: 'mdo@gmail.com',
      Address: 'ABC pakistan',
      IsActive: 'true',
    }, {
      MasterCustomerID: 2,
      Ownername: 'Arqam Rafay',
      CellNumber: '0333',
      Email: 'mdo@gmail.com',
      Address: 'ABC pakistan',
      IsActive: 'true',
    }, {
      MasterCustomerID: 1,
      Ownername: 'Haroon Sattaar',
      CellNumber: '0333',
      Email: 'mdo@gmail.com',
      Address: 'ABC pakistan',
      IsActive: 'true',
    },
    {
      MasterCustomerID: 1,
      Ownername: 'Ibtesam Ahmed',
      CellNumber: '0333',
      Email: 'mdo@gmail.com',
      Address: 'ABC pakistan',
      IsActive: 'true',
    }, {
      MasterCustomerID: 2,
      Ownername: 'Arqam Rafay',
      CellNumber: '0333',
      Email: 'mdo@gmail.com',
      Address: 'ABC pakistan',
      IsActive: 'true',
    }, {
      MasterCustomerID: 1,
      Ownername: 'Haroon Sattaar',
      CellNumber: '0333',
      Email: 'mdo@gmail.com',
      Address: 'ABC pakistan',
      IsActive: 'true',
    },
    {
      MasterCustomerID: 1,
      Ownername: 'Ibtesam Ahmed',
      CellNumber: '0333',
      Email: 'mdo@gmail.com',
      Address: 'ABC pakistan',
      IsActive: 'true',
    }, {
      MasterCustomerID: 2,
      Ownername: 'Arqam Rafay',
      CellNumber: '0333',
      Email: 'mdo@gmail.com',
      Address: 'ABC pakistan',
      IsActive: 'true',
    }, {
      MasterCustomerID: 1,
      Ownername: 'Haroon Sattaar',
      CellNumber: '0333',
      Email: 'mdo@gmail.com',
      Address: 'ABC pakistan',
      IsActive: 'true',
    },
    {
      MasterCustomerID: 1,
      Ownername: 'Ibtesam Ahmed',
      CellNumber: '0333',
      Email: 'mdo@gmail.com',
      Address: 'ABC pakistan',
      IsActive: 'true',
    }, {
      MasterCustomerID: 2,
      Ownername: 'Arqam Rafay',
      CellNumber: '0333',
      Email: 'mdo@gmail.com',
      Address: 'ABC pakistan',
      IsActive: 'true',
    }, {
      MasterCustomerID: 1,
      Ownername: 'Haroon Sattaar',
      CellNumber: '0333',
      Email: 'mdo@gmail.com',
      Address: 'ABC pakistan',
      IsActive: 'true',
    },
    {
      MasterCustomerID: 1,
      Ownername: 'Ibtesam Ahmed',
      CellNumber: '0333',
      Email: 'mdo@gmail.com',
      Address: 'ABC pakistan',
      IsActive: 'true',
    }, {
      MasterCustomerID: 2,
      Ownername: 'Arqam Rafay',
      CellNumber: '0333',
      Email: 'mdo@gmail.com',
      Address: 'ABC pakistan',
      IsActive: 'true',
    }, {
      MasterCustomerID: 1,
      Ownername: 'Haroon Sattaar',
      CellNumber: '0333',
      Email: 'mdo@gmail.com',
      Address: 'ABC pakistan',
      IsActive: 'true',
    },
    {
      MasterCustomerID: 1,
      Ownername: 'Ibtesam Ahmed',
      CellNumber: '0333',
      Email: 'mdo@gmail.com',
      Address: 'ABC pakistan',
      IsActive: 'true',
    }, {
      MasterCustomerID: 2,
      Ownername: 'Arqam Rafay',
      CellNumber: '0333',
      Email: 'mdo@gmail.com',
      Address: 'ABC pakistan',
      IsActive: 'true',
    }, {
      MasterCustomerID: 1,
      Ownername: 'Haroon Sattaar',
      CellNumber: '0333',
      Email: 'mdo@gmail.com',
      Address: 'ABC pakistan',
      IsActive: 'true',
    },
    {
      MasterCustomerID: 1,
      Ownername: 'Ibtesam Ahmed',
      CellNumber: '0333',
      Email: 'mdo@gmail.com',
      Address: 'ABC pakistan',
      IsActive: 'true',
    }, {
      MasterCustomerID: 2,
      Ownername: 'Arqam Rafay',
      CellNumber: '0333',
      Email: 'mdo@gmail.com',
      Address: 'ABC pakistan',
      IsActive: 'true',
    }, {
      MasterCustomerID: 1,
      Ownername: 'Haroon Sattaar',
      CellNumber: '0333',
      Email: 'mdo@gmail.com',
      Address: 'ABC pakistan',
      IsActive: 'true',
    },
  ];
  source: LocalDataSource = new LocalDataSource();

  constructor() {
    this.source.load(this.data);
  }

  settings = {
    actions: { add: false, edit: false, delete: false },
    columns: {
      MasterCustomerID: {
        title: 'Master Customer ID',
        type: 'string',
      },
      Ownername: {
        title: 'Owner name',
        type: 'string',
      },
      CellNumber: {
        title: 'Cell Number',
        type: 'string',
      },
      Email: {
        title: 'Email',
        type: 'string',
      },
      Address: {
        title: 'Address',
        type: 'string',
      },
      IsActive: {
        title: 'isActive',
        type: 'number',
      },
    },
  };

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  ngOnInit(): void {
  }

}
