import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import * as mat from 'materialize-css';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {

  formStep1: FormGroup;

  constructor() { }

  ngOnInit(): void {
    mat.AutoInit();
    this.setTextAreaOptions();

    this.formStep1 = new FormGroup({
      mark: new FormControl(undefined, [Validators.required]),
      model: new FormControl(undefined, [Validators.required]),
      year: new FormControl(undefined, [Validators.required]),
      details: new FormControl(undefined)
    });
  }

  setTextAreaOptions(): void {
    const txtArea = $('#txtArea')[0];
    mat.textareaAutoResize(txtArea);
  }

  setParentHeight(): void {
    const txtArea = $('#txtArea')[0];
    const height = txtArea.style.height.slice(0, -2);
    const parent = txtArea.parentElement;
    parent.style.height = `${height}px`;
  }

}
