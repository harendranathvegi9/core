import {Component, trigger, style, animate, transition, state} from '@angular/core';

@Component({
  selector: 'ngb-modal-backdrop',
  template: '',
  host: {'class': 'modal-backdrop fade', '[@fade]': '"active"'},
  animations: [trigger(
      'fade',
      [
        state('active', style({opacity: 0.5})),
        transition(':enter', [animate('0.15s linear')]),
        transition(':leave', [animate('0.15s linear', style({opacity: 0}))]),
      ])]
})
export class NgbModalBackdrop {
}
