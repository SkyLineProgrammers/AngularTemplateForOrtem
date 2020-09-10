import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterCustomerFoamComponent } from './master-customer-foam/master-customer-foam.component';
import { MasterCustomerListComponent } from './master-customer-list/master-customer-list.component';
import { MasterCustomerComponent } from './masterCustomer.component';

const routes: Routes = [{
  path: '',
  component: MasterCustomerComponent,
  children: [{
    path: 'addMasterCustomer',
    component: MasterCustomerFoamComponent,
  }, {
    path: 'listMasterCustomer',
    component: MasterCustomerListComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterCustomerRoutingModule { }

export const routedComponents = [
  MasterCustomerFoamComponent,
  MasterCustomerListComponent,
];
