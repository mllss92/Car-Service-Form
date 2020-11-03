import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';


import { Data } from './../shared/interfaces/data';
import { HttpService } from './../shared/services/http.service';
import { Step2Component } from './../step2/step2.component';
import { SharedService } from './../shared/services/shared.service';


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  @ViewChild(Step2Component, { static: false })
  private step2component: Step2Component;

  date: string;

  constructor(public shared: SharedService, public http: HttpService) { }

  ngOnInit(): void {
    this.http.getData().subscribe(
      (res: Data) => {
        this.shared.data = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  // по итогам данной функции будет скрыта или доступна форма "Step2" элемента.
  // можно было давать доступ к "Step2" элементу и без этой функции через проверку валидности формы "Step1" элемента
  // но тогда мы бы никогда не увидели ситуацию из ТЗ - "... якщо перевірка не вдалася, виділіть поля червоним кольором..."
  checkStep1(): boolean {
    let result = true;
    if (this.shared.isSubmited) {
      return result;
    }
    const step1value = Object.assign({}, this.shared.formStep1.value);
    delete step1value.details;

    for (const key in step1value) {
      if (Object.prototype.hasOwnProperty.call(step1value, key)) {
        const elem = step1value[key];
        if (!elem) {
          result = false;
        }
      }
    }
    return result;
  }

  isSubmitAvailable(): any {
    const step2 = $('.step2')[0];
    if (step2) {
      if (this.shared.formStep2) {
        if (this.shared.formStep2.valid) {
          return false;
        }
      }
    }
    return true;
  }

  clearForms(): void {
    if (this.shared.formStep1) {
      this.shared.formStep1.reset();
    }
    if (this.step2component) {
      this.shared.formStep2.reset();
    }
    this.shared.isSubmited = false;
  }

  trySibmit(): void {
    this.shared.isSubmited = true;
    this.step2Validate();
    this.step2DateValidate();
    this.step2CheckBoxValidate();

    if (this.shared.formStep1.valid && this.shared.formStep2.valid && !this.shared.isSubcategoryInvalid) {
      const value = Object.assign({}, this.shared.formStep1.value, this.shared.formStep2.value);
      console.log(value);

      console.log('100% VALID!!!!');
    }
  }

  step2Validate(): void {
    const form = this.shared.formStep2.controls;
    for (const key in form) {
      if (Object.prototype.hasOwnProperty.call(form, key)) {
        const elem = form[key];
        if (elem.validator) {
          const input = $(`.input-field.${key} input`);
          if (elem.valid) {
            input.css('border-bottom', '1px solid #4CAF50');
            input.css('box-shadow', '0 1px 0 0 #4CAF50');

            if (key === 'subcategory' && this.shared.isSubcategoryInvalid) {
              input.css('border-bottom', '1px solid #F44336');
              input.css('box-shadow', '0 1px 0 0 #F44336');
            }
          } else {
            input.css('border-bottom', '1px solid #F44336');
            input.css('box-shadow', '0 1px 0 0 #F44336');
          }
        }
      }
    }
  }

  step2DateValidate(): void {
    const date = new Date(this.step2component.getDate());
    if (moment(date).isValid()) {
      this.shared.formStep2.value.date = moment(date).format('MMMM DD, yyyy');

      const datePicker = $('#date-picker');
      datePicker.css('border-bottom', '1px solid #4CAF50');
      datePicker.css('box-shadow', '0 1px 0 0 #4CAF50');
    }
  }

  step2CheckBoxValidate(): void {
    const checkBoxes = $('.need-box');
    checkBoxes.addClass('valid-check-box');
  }

}

