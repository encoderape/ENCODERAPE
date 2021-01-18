import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ape-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit {
  private redirectCount = 5;

  constructor(private router: Router) {}

  /**
   * Método que coge el mensaje de redirección
   * @return string
   */
  public get redirectMessage(): string {
    if (this.redirectCount <= 0) {
      return 'Redireccionando ...';
    }
    return `Redireccionándote a la página principal ${this.redirectCount}`;
  }

  ngOnInit(): void {
    this.redirect();
  }

  /**
   * Método que redirige al Home pasados unos segundos
   * @return void
   */
  redirect(): void {
    setInterval(() => {
      this.redirectCount--;
      if (this.redirectCount <= 0) {
        this.router.navigate(['']).then(() => {
          window.location.reload();
        });
      }
    }, 1000);
  }
}
