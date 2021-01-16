import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AyudaRouting } from 'src/app/modules/ayuda/ayuda.routing';
import { AyudaComponent } from './ayuda/ayuda.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  declarations: [AyudaComponent],
  imports: [CommonModule, AyudaRouting, FormsModule, SharedModule],
})
export class AyudaModule {}
