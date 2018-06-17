import {Component, Input} from "@angular/core";
import {CV} from "../../dal/models";

@Component({
  selector:'ny-biography',
  templateUrl: 'biography.component.html'
})
export class BiographyComponent {
  @Input() public cv: CV;
}
