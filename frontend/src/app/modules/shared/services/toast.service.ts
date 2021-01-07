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

  callErrorToast(message: string): void {
    this.$errorToast.next(message);
  }

  callInfoToast(message: string): void {
    this.$infoToast.next(message);
  }

  callSuccessfulToast(message: string): void {
    this.$successfulToast.next(message);
  }

  callWarningToast(message: string): void {
    this.$warningToast.next(message);
  }
}
