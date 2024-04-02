import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { HotelInfo } from './hotel-info';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent {
  public Hotel: HotelInfo;
  public HotelCollection: HotelInfo[];
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.Hotel = new HotelInfo();
    this.HotelCollection = [];
    this.form = this.formBuilder.group({
      emails: this.formBuilder.array([
        this.createEmailControl()
      ])
    });
  }
  ngOnInit() {
      
  }

  createEmailControl(): FormGroup {
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get emailControls(): AbstractControl[] {
    return (this.form.get('emails') as FormArray).controls;
  }

  addEmail() {
    const emails = this.form.get('emails') as FormArray;
    emails.push(this.createEmailControl());
  }

  removeEmail(index: number) {
    const emails = this.form.get('emails') as FormArray;
    emails.removeAt(index);
  }

  onSubmit(): void {
    if (this.form.valid) {
      
      } else {
      
      }
  }
}
