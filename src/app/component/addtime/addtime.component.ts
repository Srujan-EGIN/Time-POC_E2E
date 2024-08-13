import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-addtime',
  standalone: true,
  imports: [SidebarComponent, ReactiveFormsModule],
  templateUrl: './addtime.component.html',
  styleUrl: './addtime.component.scss'
})
export class AddtimeComponent implements OnInit {

  from = new FormControl("", Validators.required);
  to = new FormControl("", Validators.required);
  duration = new FormControl("", Validators.required);
  clientName = new FormControl("", Validators.required);
  caseNumber = new FormControl("", Validators.required);
  caseName = new FormControl("", Validators.required);
  workType = new FormControl("", Validators.required);
  description = new FormControl("", Validators.maxLength(250));



  myForm = new FormGroup({
    from: this.from,
    to: this.to,
    duration: this.duration,
    clientName: this.clientName,
    caseNumber: this.caseNumber,
    caseName: this.caseName,
    workType: this.workType,
    description: this.description
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }

  // onSubmit() 
  //   if (this.myForm.valid) {
  //     console.log(this.myForm.value);
  //     // Perform your submit logic here
  //   } else {
  //     console.log("Form is invalid");
  //   }
  }


  C:\Users\srsmu\OneDrive - EG A S\Desktop\EG_Training\Time-app\time-app-regi\src\app
