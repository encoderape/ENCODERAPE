import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ToastService } from 'src/app/modules/shared/services/toast.service';

@Component({
  selector: 'ape-successful',
  templateUrl: './successful.component.html',
  styleUrls: ['./successful.component.scss'],
})
export class SuccessfulComponent implements OnInit {
  message = '';
  title = '';
  isShown = false;

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    this.toastSubscription();
  }

  /**
   * Método que llama al Toast Component
   * @param message: string
   * @return void
   */
  showMessage(message: string): void {
    this.isShown = true;
    this.message = message;
    this.title = 'CORRECTO';

    const $subscription = of(null)
      .pipe(delay(4000))
      .subscribe({
        complete: () => {
          this.isShown = false;
          $subscription.unsubscribe();
        },
      });
  }

  /**
   * Método para subscribirse al Servicio de Toast
   * @return void
   */
  private toastSubscription(): void {
    this.toastService.$successfulToast.subscribe((value: string) => {
      this.message = value;
      this.showMessage(value);
    });
  }
}
