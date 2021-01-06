import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { ToastService } from 'src/app/modules/shared/services/toast.service';

@Component({
  selector: 'ape-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
  message = '';
  title = '';
  isShown = false;

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    this.toastService.$errorToast.subscribe((value: string) => {
      this.message = value;
      this.showMessage(value);
    });
  }

  showMessage(message: string): void {
    this.isShown = true;
    this.message = message;
    this.title = 'ERROR';

    const $subscription = of(null)
      .pipe(delay(4500))
      .subscribe({
        complete: () => {
          this.isShown = false;
          $subscription.unsubscribe();
        },
      });
  }
}
