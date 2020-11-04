import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import * as mat from 'materialize-css';

import { SharedService } from './../shared/services/shared.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit, OnDestroy {

  @Output() step2Validate = new EventEmitter<void>();

  constructor(public shared: SharedService) { }

  ngOnInit(): void {
    mat.AutoInit();
    this.setSelectOptions();
    this.setDatePickerOptions();

    this.shared.formStep2 = new FormGroup({
      category: new FormControl('default', [Validators.required, Validators.pattern('^((?!default).)*$')]),
      subcategory: new FormControl('default', [Validators.required, Validators.pattern('^((?!default).)*$')]),
      emirate: new FormControl('default', [Validators.required, Validators.pattern('^((?!default).)*$')]),
      area: new FormControl('default', [Validators.required, Validators.pattern('^((?!default).)*$')]),
      needTow: new FormControl(false),
      needPickup: new FormControl(false),
      customParts: new FormControl(false),
      date: new FormControl('mm/dd/yyyy')
    });
  }

  ngOnDestroy(): void {
    this.shared.isSubmited = false;
    this.shared.isSubcategoryInvalid = true;
  }

  setSelectOptions(): void {
    $(document).ready(() => {
      ($('select') as mat).formSelect();
    });

    setTimeout(() => {
      const select = $('.select-wrapper input');

      $('.select-wrapper input').css('color', '#9e9e9e');
      $('.select-wrapper input').css('box-sizing', 'border-box');

      for (const input of select) {
        input.addEventListener('focus', () => {
          (event.target as HTMLInputElement).style.borderBottom = '1px solid rgb(241, 183, 57)';
        });
        input.addEventListener('blur', () => {
          (event.target as HTMLInputElement).style.borderBottom = '1px solid #9e9e9e';
        });
      }
    }, 70);
  }

  setDatePickerOptions(): void {
    const options = { minDate: new Date(), format: 'mm-dd-yyyy' };
    $(document).ready(() => {
      ($('.datepicker') as mat).datepicker(options);
    });
  }

  editFontColor(elem: mat): void {
    elem.input.style.color = '#000';
  }

  subcategoryValidator(): void {
    if (this.shared.formStep2.controls.category.valid && this.shared.formStep2.controls.subcategory.valid) {
      const category = this.shared.formStep2.value.category;
      const subcategoryValue = this.shared.formStep2.value.subcategory;
      const subcategoryData = this.shared.data.subcategories[category];

      for (const key in subcategoryData) {
        if (Object.prototype.hasOwnProperty.call(subcategoryData, key)) {
          const value = subcategoryData[key].value;
          if (subcategoryValue === value) {
            this.shared.isSubcategoryInvalid = false;
            if (this.shared.isSubmited) {
              this.step2Validate.emit();
            }
            return;
          }
          this.shared.isSubcategoryInvalid = true;
          if (this.shared.isSubmited) {
            this.step2Validate.emit();
          }
        }
      }
    }
  }

  getDate(): any {
    return ($('.datepicker')[0] as HTMLInputElement).value;
  }

  removeValidateIfExist(): void {
    const checkBoxes = $('.need-box');
    checkBoxes.removeClass('valid-check-box');
  }
}
