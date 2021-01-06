import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { ToastService } from 'src/app/modules/shared/services/toast.service';

@Component({
  selector: 'ape-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.scss'],
})
export class WarningComponent implements OnInit {
  message = '';
  title = '';
  isShown = false;

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    this.toastService.$warningToast.subscribe((value: string) => {
      this.message = value;
      this.showMessage(value);
    });
  }

  showMessage(message: string): void {
    this.isShown = true;
    this.message = message;
    this.title = 'CUIDADO';

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
