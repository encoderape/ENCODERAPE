import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { AyudaRouting } from 'src/app/modules/ayuda/ayuda.routing';
import { AyudaComponent } from 'src/app/modules/ayuda/ayuda/ayuda.component';

@NgModule({
  declarations: [AyudaComponent],
  imports: [CommonModule, FormsModule, SharedModule, AyudaRouting],
})
export class AyudaModule {}
