import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {QuestionControlService} from '../model/question-control.service';
import {QuestionBase} from '../model/question-base';
import {questions} from './questions';
import {CacheManager, DataService} from '../../services/services';
import {DataError, Language, MessageRequest, MessageResponse} from '../../dal/models';


@Component({

  templateUrl: './contact.html',
  providers: [QuestionControlService]
})
export class Contact implements OnInit {

  isSubmitting: boolean = false;
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService, public cache: CacheManager,private dataService:DataService) {
  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(questions);
  }

  onSubmit() {
    this.isSubmitting = true;
    var req: MessageRequest = {
      Language: Language.Hebrew,
      Message: {Sender: {Name: this.form.controls['name'].value, Email: this.form.controls['email'].value}, IP: '', Date: new Date(), Content: this.form.controls['content'].value}
    };
    this.dataService.ConnectToApiData
    (req, 'SendMessage')
      .subscribe
      (
        (res: MessageResponse) => {
          // this.submitted = true;
          this.isSubmitting = false;
        },
        (err: DataError) => {
          // this.displaySubmitError = true;
          this.isSubmitting = false;
        }
      )
  }

  get isEng(): boolean {
    let l = this.cache.GetFromCache('lang', Language.Hebrew) == Language.English
    //console.log(l);
    return l;
  };

  get isHeb(): boolean {
    return !this.isEng
  };

  get questions(): QuestionBase<any>[] {
    return questions;
  }
}
