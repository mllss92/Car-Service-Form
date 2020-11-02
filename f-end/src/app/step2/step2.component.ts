import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import * as mat from 'materialize-css';

import { SharedService } from './../shared/services/shared.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {

  categories = [
    { value: 'body', content: 'Body repair' },
    { value: 'engine', content: 'Engine repair' },
    { value: 'chassis', content: 'Сhassis repair' },
    { value: 'electronics', content: 'Electronics repair' },
  ];

  subcategories = {
    body: [
      { value: 'painting', content: 'Car painting' },
      { value: 'welding', content: 'Welding works' },
      { value: 'straightening', content: 'Auto straightening' },
    ]
  };

  emirates = [
    { value: 'Abu Dhabi', content: 'Abu Dhabi' },
    { value: 'Ajman', content: 'Ajman' },
    { value: 'Dubai', content: 'Dubai' },
    { value: 'Fujairah', content: 'Fujairah' },
    { value: 'Ras Al Khaimah', content: 'Ras Al Khaimah' },
    { value: 'Sharjah', content: 'Sharjah' },
    { value: 'Umm Al Quwain', content: 'Umm Al Quwain' }
  ];

  areas = [
    { value: 'Some area1', content: 'Some area 1' },
    { value: 'Some area2', content: 'Some area 2' },
    { value: 'Some area3', content: 'Some area 3' },
    { value: 'Some area4', content: 'Some area 4' }
  ];

  date: string;

  constructor(public shared: SharedService) { }

  ngOnInit(): void {

    mat.AutoInit();
    this.setSelectOptions();
    this.setDatePickerOptions();

    this.shared.formStep2 = new FormGroup({
      category: new FormControl('default', [Validators.required]),
      subcategory: new FormControl('default', [Validators.required]),
      emirate: new FormControl('default', [Validators.required]),
      area: new FormControl('default', [Validators.required]),
      needTow: new FormControl(false),
      needPickup: new FormControl(false),
      customParts: new FormControl(false),
      date: new FormControl('mm/dd/yyyy')
    });
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
    const options = { onClose: this.parseDate };
    $(document).ready(() => {
      ($('.datepicker') as mat).datepicker(options);
    });
  }

  parseDate(): void {
    const dateValue = ($('#date-picker')[0] as HTMLInputElement).value;
    if (dateValue) {
      this.date = dateValue;
    }

  }

  editFontColor(elem: mat): void {
    elem.input.style.color = '#000';
  }

}
