import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const modules = [MatIconModule, MatProgressSpinnerModule];

@NgModule({
  imports: [...modules],
  exports: [...modules],
  providers: [],
})
export class AppMaterialModule {}
