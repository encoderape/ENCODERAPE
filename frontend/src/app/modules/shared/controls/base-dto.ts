declare const $: any;

export class BaseDto {
  constructor(src?: any) {
    if (src) {
      $.extend(this, src);
    }
  }
}
