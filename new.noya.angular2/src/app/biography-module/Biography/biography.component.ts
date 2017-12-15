import {Component, Input, OnInit} from '@angular/core';
import {CV} from '../../dal/models';

@Component({
  selector: 'ny-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.scss']
})
export class BiographyComponent implements OnInit {
@Input() cv:CV
  constructor() { }

  ngOnInit() {
  }

}
