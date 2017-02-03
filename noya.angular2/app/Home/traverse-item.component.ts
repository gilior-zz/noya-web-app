import { Component, OnInit, Input, animate, state, style, transition, trigger } from '@angular/core';
import { TraverseItem, DataRequest, Language, Message, MessageRequest, MessageResponse, DataError, Person } from '../dal/models'

import { DataService, CacheManager } from '../services/services'
@Component({
    selector: 'traverse-item',
    moduleId: module.id,
    templateUrl: './traverse-item.component.html',
    styleUrls: ['./traverse-item.component.css'],
    animations: [
        trigger('modalState', [

            transition('inactive => active', animate(1000, style({ transform: 'rotate(720deg) scale(1)' }))),
            transition('active => inactive', animate(1000, style({ transform: 'rotate(720deg)  scale(0)' })))
        ])
    ]
})
export class TraverseItemComponent implements OnInit {
    isCollapsed: boolean;
    @Input() traverseItem: TraverseItem;
    person: Person = { Email: '', Name: '' };
    constructor(private dataService: DataService) { }
    ngOnInit() {
        this.message = { Content: '', Date: new Date(), IP: '', Sender: { Email: this.person.Email, Name: this.person.Name } };



        $('.modal').on('hidden.bs.modal', () => {
            console.log("myModal closed");
            this.modalState = 'inactive';
        })
    }

    displaySubmitError: boolean;
    isSubmitting: boolean;
    submitted: boolean;
    message: Message;

    modalState: string = 'inactive';

    toggleModalState() {
        this.modalState = this.modalState == 'inactive' ? 'active' : 'inactive';

    }



    onSubmit() {
        console.log(this.message);
        this.isSubmitting = true;
        var req: MessageRequest = { Message: this.message, Language: Language.Hebrew };
        this.dataService.ConnectToApiData
            (req, 'api/Data/SendMessage')
            .subscribe
            (
            (res: MessageResponse) => {
                this.submitted = true;
                this.isSubmitting = false;
            },
            (err: DataError) => {
                this.displaySubmitError = true;
                this.isSubmitting = false;
            }
            )
    }
}