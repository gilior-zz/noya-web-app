import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {QuestionBase} from './question-base';
import {ValidatorFn} from '@angular/forms/src/directives/validators';

@Injectable()
export class QuestionControlService {
  constructor() {
  }

  toFormGroup(questions: QuestionBase<any>[]) {
    let group: any = {};

    questions.forEach(question => {
        const validatorFn: ValidatorFn[] = [];
        if (question.required)
          validatorFn.push(Validators.required);
        if (question.minLength)
          validatorFn.push(Validators.minLength(question.minLength));
        const formControl = new FormControl(question.value, validatorFn);
        group[question.key] = formControl

      }
    )
    return new FormGroup(group);
  }
}
