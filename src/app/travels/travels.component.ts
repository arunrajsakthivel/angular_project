import { Component } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.scss']
})
export class TravelsComponent {
  form: FormGroup = new FormGroup({
    travelName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
    });
    
    constructor(private formBuilder: FormBuilder) 
    {
    this.form = this.formBuilder.group({
    
         travelName: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^TRl/)]],
         emails: this.formBuilder.array([
        
        this.createEmailControl()
        
      ]),
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
    });
    
    }
    
    ngOnInit() {
      
    }
    
    createEmailControl() {
      return this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]]
      });
    }
    
    onSubmit() {
    if (this.form.valid) {
    // Do something with the form data
    } else {
    // Show validation errors
    }
    }
    
    emailControls():AbstractControl[]
    {
      return (this.form.get('emails') as FormArray).controls;
    }
    
    addEmail(index:number) {
      this.emailControls().push(this.createEmailControl());
    }
    
    removeEmail(index:number) {
      return (this.form.get('emails') as FormArray).removeAt(index);
    }
    
}
