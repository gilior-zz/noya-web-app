import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'ny-dialog',
  template: `
    <div id="modal-success" [ngStyle]="styles" class="modal modal-message modal-{{status}}"
         aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <i class="glyphicon glyphicon-check"></i>
          </div>
          <div class="modal-title">{{'Success' | translate}}</div>
          <div class="modal-body">
            <ng-content></ng-content>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-{{status}}" (click)="dismiss()">
              {{'Continue' | translate}}
            </button>
          </div>
        </div> <!-- / .modal-content -->
      </div> <!-- / .modal-dialog -->
    </div>
  `,
  styles: [`
    .modal-content {
      -webkit-border-radius: 0;
      -webkit-background-clip: padding-box;
      -moz-border-radius: 0;
      -moz-background-clip: padding;
      border-radius: 6px;
      background-clip: padding-box;
      -webkit-box-shadow: 0 0 40px rgba(0, 0, 0, .5);
      -moz-box-shadow: 0 0 40px rgba(0, 0, 0, .5);
      box-shadow: 0 0 40px rgba(0, 0, 0, .5);
      color: #000;
      background-color: #fff;
      border: rgba(0, 0, 0, 0);
    }

    .modal-message .modal-dialog {
      width: 300px;
    }

    .modal-message .modal-body, .modal-message .modal-footer, .modal-message .modal-header, .modal-message .modal-title {
      background: 0 0;
      border: none;
      margin: 0;
      padding: 0 20px;
      text-align: center !important;
    }

    .modal-message .modal-title {
      font-size: 17px;
      color: #737373;
      margin-bottom: 3px;
    }

    .modal-message .modal-body {
      color: #737373;
    }

    .modal-message .modal-header {
      color: #fff;
      margin-bottom: 10px;
      padding: 15px 0 8px;
    }

    .modal-message .modal-header .fa,
    .modal-message .modal-header
    .glyphicon, .modal-message
    .modal-header .typcn, .modal-message .modal-header .wi {
      font-size: 30px;
    }

    .modal-message .modal-footer {
      margin: 25px 0 20px;
      padding-bottom: 10px;
    }

    .modal-backdrop.in {
      zoom: 1;
      filter: alpha(opacity=75);
      -webkit-opacity: .75;
      -moz-opacity: .75;
      opacity: .75;
    }

    .modal-backdrop {
      background-color: #fff;
    }

    .modal-message.modal-success .modal-header {
      color: #53a93f;
      border-bottom: 3px solid #a0d468;
    }

    .modal-message.modal-danger .modal-header {
      color: #d73d32;
      border-bottom: 3px solid #e46f61;
    }
  `]
})
export class DialogComponent implements OnInit {
  @ViewChild('myModal') myModal: any;
  @Output() onDismiss = new EventEmitter();
  @Input() status: string


  constructor() {
  }

  get myModalDiv(): any {
    return this.myModal.nativeElement
  }

  get styles(): {} {
    return {opacity: '1', display: 'block'}
  }

  dismiss() {
    this.onDismiss.emit();
  }

  ngOnInit() {

    // setTimeout(() => {
    //   this.styles = {opacity: '1', display: 'block'}
    // }, 0)
  }

}
