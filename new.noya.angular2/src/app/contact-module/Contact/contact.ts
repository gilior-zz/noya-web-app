import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';
import {QuestionControlService} from '../base/question-control.service';
import {QuestionBase} from '../base/question-base';
import {questions} from './questions';



@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ QuestionControlService ]
})
export class Contact implements OnInit {


  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}
