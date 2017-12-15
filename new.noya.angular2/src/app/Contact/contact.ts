import {Component, OnDestroy, OnInit, Injector, AfterViewChecked, ViewChild} from '@angular/core'
import {trigger, state, style, transition, animate} from '@angular/animations'
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router'
import {NgModel} from '@angular/forms'

import {BaseComponent} from '../common/base.component'

import * as services from '../services/services'
import * as dal from '../dal/models'
import {Observable} from 'rxjs/Observable';


@Component({
  templateUrl: './contact.html',

  styleUrls: ['./contact.scss'],
  animations: [
    trigger('invalidAnimation', [
      state('in', style({transform: 'translateX(0)', opacity: 1})),

      transition('void => *', [
        style({transform: 'translateX(-100%)', opacity: 0}),
        animate(500)
      ]),
      transition('* => void', [
        animate(500, style({transform: 'translateX(-100%)', opacity: 0}),
        )
      ])
    ])

  ]
})

export class Contact extends BaseComponent implements OnDestroy {
  displaySubmitError: boolean;
  isSubmitting: boolean;
  submitted: boolean;
  message: dal.Message;
  contactForm: FormGroup;


  constructor(private dataservice: services.DataService, private cacheManager: services.CacheManager, private dialogService: services.DialogService, private dialogeService: services.DialogService, public router: Router, private injector: Injector, private fb: FormBuilder) {
    super(injector);
    this.buildForm();
  }


  get name(): FormControl {
    return this.contactForm.get('name') as FormControl
  }

  get email(): FormControl {
    return this.contactForm.get('email')  as FormControl
  }

  get content(): FormControl {
    return this.contactForm.get('content') as FormControl
  }


  canDeactivate(): boolean | Promise<boolean> | Observable<boolean> {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (!this.isSubmitting)
      return true;

    // Otherwise ask the user with the dialog service and return its
    // promise which resolves to true or false when the user decides
    return this.dialogService.confirm('Cancel submitting?');

  }

  get invalidEmail(): boolean {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !re.test(this.message.Sender.Email);

  }

  public invalidEmailInput(email: NgModel): boolean {
    return (!email.valid && !email.pristine) || (email.valid && !email.pristine && this.invalidEmail)
  }

  ngOnDestroy(): void {

    this.submitted = false;
    this.displaySubmitError = false;
    this.isSubmitting = false;
  }

  ngOnInit() {
    this.submitted = false;
    this.displaySubmitError = false;
    this.isSubmitting = false;
    //this.message = { Content: 'sds', Date: new Date(), IP: '', Sender: { Email: 'sdsd@sdsd', Name: 'sdsd' } };
    this.message = {Content: '', Date: new Date(), IP: '', Sender: {Email: '', Name: ''}};

  }

  get isEng(): boolean {
    let l = this.cacheManager.GetFromCache('lang', dal.Language.Hebrew) == dal.Language.English
    //console.log(l);
    return l;
  };

  get isHeb(): boolean {
    return !this.isEng
  };


  onSubmit() {
    this.isSubmitting = true;
    var req: dal.MessageRequest = {
      Language: dal.Language.Hebrew,
      Message: {Sender: {Name: this.name.value, Email: this.email.value}, IP: '', Date: new Date(), Date, Content: this.content.value}
    };
    this.dataservice.ConnectToApiData
    (req, 'SendMessage')
      .subscribe
      (
        (res: dal.MessageResponse) => {
          this.submitted = true;
          this.isSubmitting = false;
        },
        (err: dal.DataError) => {
          this.displaySubmitError = true;
          this.isSubmitting = false;
        }
      )
  }

  private buildForm() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      content: ['', [Validators.required, Validators.minLength(10)]],
    });
  }
}
