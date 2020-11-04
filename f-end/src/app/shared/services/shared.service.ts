import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';

import { Data } from './../interfaces/data';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public formStep1: FormGroup;
  public formStep2: FormGroup;

  public data: Data;

  public isSubmited = false;

  public isSubcategoryInvalid = true;

  constructor() { }
}
