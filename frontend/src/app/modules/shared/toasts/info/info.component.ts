import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { ToastService } from 'src/app/modules/shared/services/toast.service';

@Component({
  selector: 'ape-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  message = '';
  title = '';
  isShown = false;

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    this.toastService.$infoToast.subscribe((value: string) => {
      this.message = value;
      this.showMessage(value);
    });
  }

  showMessage(message: string): void {
    this.isShown = true;
    this.message = message;
    this.title = 'INFORMACIÓN';

    const $subscription = of(null)
      .pipe(delay(4000))
      .subscribe({
        complete: () => {
          this.isShown = false;
          $subscription.unsubscribe();
        },
      });
  }
}
