import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public formStep1: FormGroup;
  public formStep2: FormGroup;

  constructor() { }
}
