import { Component, OnInit, Input} from '@angular/core';
import {TraverseItem, DataRequest, Language, Message, MessageRequest, MessageResponse, DataError, Person} from '../dal/models'

import {DataService, CacheManager} from '../services/services'
@Component({
    selector: 'traverse-item',
    moduleId: module.id,
    templateUrl: './traverse-item.component.html',
    styleUrls: ['./traverse-item.component.css']
})
export class TraverseItemComponent implements OnInit {
    isCollapsed: boolean;
    @Input() traverseItem: TraverseItem;
    person: Person = { Email: '', Name: '' };
    constructor(private dataService: DataService) { }
    ngOnInit() {
        this.message = { Content: '', Date: new Date(), IP: '', Sender: { Email: this.person.Email, Name: this.person.Name } };
    }

    displaySubmitError: boolean;
    isSubmitting: boolean;
    submitted: boolean;
    message: Message;



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