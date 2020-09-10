import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';

import { MasterCustomerRoutingModule, routedComponents } from './masterCustomer-routing.module';
import { MasterCustomerFoamComponent } from './master-customer-foam/master-customer-foam.component';
import { MasterCustomerListComponent } from './master-customer-list/master-customer-list.component';
import { MasterCustomerComponent } from './masterCustomer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsRoutingModule } from '../forms/forms-routing.module';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';

const components = [
  MasterCustomerFoamComponent,
  MasterCustomerListComponent
];

@NgModule({
  imports: [
    // FormsModule,
    ThemeModule,
    MasterCustomerRoutingModule,
    NbCardModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    FormsRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule
  ],
  declarations: [MasterCustomerComponent, MasterCustomerFoamComponent, MasterCustomerListComponent],
})
export class MasterCustomerModule { }
