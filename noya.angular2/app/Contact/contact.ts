import { Component, OnDestroy, OnInit, Injector, trigger, style, animate, state, transition } from '@angular/core'
import { Router } from '@angular/router'
import { NgModel } from '@angular/forms'
import { BaseComponent } from '../common/base.component'
import { MyCacheManager } from '../services/services'
import * as services from '../services/services'
import * as dal from '../dal/models'
import { Observable } from 'rxjs/Observable';
import * as pipes from '../pipes/pipes'


@Component({
    templateUrl: "./contact.html",
    moduleId: module.id,
    styleUrls: ['./contact.css'],
    animations: [
        trigger('invalidAnimation', [
            state('in', style({ transform: 'translateX(0)', opacity: 1 })),

            transition('void => *', [
                style({ transform: MyCacheManager.IsEnglishMode ? 'translateX(100%)' : 'translateX(-100%)', opacity: 0 }),
                animate(500)
            ]),
            transition('* => void', [
                animate(500, style({ transform: MyCacheManager.IsEnglishMode ? 'translateX(100%)' : 'translateX(-100%)', opacity: 0 }),
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


    constructor(private dataservice: services.DataService, private cacheManager: services.CacheManager, private dialogService: services.DialogService, private dialogeService: services.DialogService, public router: Router, private injector: Injector) {
        super(injector);
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

    public invalidEmailInput(email: NgModel): boolean { return (!email.valid && !email.pristine) || (email.valid && !email.pristine && this.invalidEmail) }

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
        this.message = { Content: '', Date: new Date(), IP: '', Sender: { Email: '', Name: '' } };

    }

    get isEng(): boolean {
        let l = this.cacheManager.GetFromCache('lang', dal.Language.Hebrew) == dal.Language.English
        //console.log(l);
        return l;
    };
    get isHeb(): boolean { return !this.isEng };


    onSubmit() {
        this.isSubmitting = true;
        var req: dal.MessageRequest = { Message: this.message, Language: dal.Language.Hebrew };
        this.dataservice.ConnectToApiData
            (req, 'api/Data/SendMessage')
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
}