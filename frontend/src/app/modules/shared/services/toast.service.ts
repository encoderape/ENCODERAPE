import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  $errorToast = new Subject<string>();
  $infoToast = new Subject<string>();
  $successfulToast = new Subject<string>();
  $warningToast = new Subject<string>();

  /**
   * Método para crear un toast de Error
   * @param message: string
   * @return void
   */
  callErrorToast(message: string): void {
    this.$errorToast.next(message);
  }

  /**
   * Método para crear un toast de Info
   * @param message: string
   * @return void
   */
  callInfoToast(message: string): void {
    this.$infoToast.next(message);
  }

  /**
   * Método para crear un toast de Success
   * @param message: string
   * @return void
   */
  callSuccessfulToast(message: string): void {
    this.$successfulToast.next(message);
  }

  /**
   * Método para crear un toast de Warning
   * @param message: string
   * @return void
   */
  callWarningToast(message: string): void {
    this.$warningToast.next(message);
  }
}
