import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  constructor(
    private title: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  /**
   * Método para cambiar el título en cada página
   * @return void
   */
  initializeTitleService(): void {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe(() => {
        const { data } = this.activatedRoute.root.firstChild.snapshot;
        const mainTitle = 'ENCODERAPE';
        const lastTitle = this.title.getTitle();
        if (data?.title) {
          const title = `${data.title} | ${mainTitle}`;
          if (lastTitle !== title) {
            this.title.setTitle(title);
          }
        } else {
          if (lastTitle !== mainTitle) {
            this.title.setTitle(mainTitle);
          }
        }
      });
  }
}
