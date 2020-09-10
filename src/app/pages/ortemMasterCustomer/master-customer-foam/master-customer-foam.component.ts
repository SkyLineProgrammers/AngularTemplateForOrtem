import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {
  NbComponentStatus,
  NbGlobalLogicalPosition,
  NbGlobalPhysicalPosition,
  NbGlobalPosition,
  NbToastrService,
  NbToastrConfig,
} from '@nebular/theme';
import { ServicesHelperService } from 'app/services-helper.service';
@Component({
  selector: 'ngx-master-customer-foam',
  templateUrl: './master-customer-foam.component.html',
  styleUrls: ['./master-customer-foam.component.scss']
})
export class MasterCustomerFoamComponent implements OnInit {

  formGroup: FormGroup;
  submitAttempt = false;

  //Toaster

  index = 1;
  destroyByClick = true;
  duration = 2000;
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates = false;
  status: NbComponentStatus = 'primary';

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: NbToastrService,
    private objServicesHelper: ServicesHelperService
  ) {
    this.reset()
  }

  reset() {
    this.formGroup = this.formBuilder.group({
      masterCustomerID: [this.createRandomID(), Validators.compose([Validators.required])],
      date: [new Date().toISOString().split("T")[0], Validators.compose([Validators.required])],
      companyName: ["", Validators.compose([Validators.required])],
      ownerName: ["", Validators.compose([Validators.required])],
      cnic: ["", Validators.compose([Validators.required])],
      ntn: [""],
      email: ["", Validators.compose([Validators.required])],
      number: ["", Validators.compose([Validators.required])],
      alternateNumber: [""],
      dob: ["", Validators.compose([Validators.required])],
      userName: ["", Validators.compose([Validators.required])],
      password: ["", Validators.compose([Validators.required])],
      natureOfBusiness: ["", Validators.compose([Validators.required])],
      webSite: [""],
      country: ["0", Validators.compose([Validators.required])],
      city: ["0", Validators.compose([Validators.required])],
      isActive: [false],
      address: ["", Validators.compose([Validators.required])],
    });
  }

  createRandomID() {
    let ID: string = new Date().getTime().toString();
    return "LS-" + ID.substring(ID.length - 6);
  }

  submitClick() {
    // this.objServicesHelper.getAll().subscribe(data => {
    //   debugger;
    // })
    let aa = this.formGroup.value;
    debugger;
    this.submitAttempt = true;
    if (this.formGroup.valid) {
      this.showToast('success', "Sucessfull", "Sucessfully saved master customer");
      this.submitAttempt = false;
    } else {
      this.showToast('danger', "Error", "Validation error");
    }
  }

  ngOnInit(): void {
  }

  private showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      hasIcon: this.hasIcon,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
    };
    const titleContent = title ? `. ${title}` : '';

    this.index += 1;
    this.toastrService.show(
      body,
      `Toast ${this.index}${titleContent}`,
      config);
  }

}
