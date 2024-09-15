// second-chance.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondChanceComponent } from './second-chance.component';
import { BouquetIconComponent } from '../bouquet-icon/bouquet-icon.component';
import { PleadingFaceComponent } from '../pleading-face/pleading-face.component';

@NgModule({
  declarations: [SecondChanceComponent],
  imports: [CommonModule, BouquetIconComponent, PleadingFaceComponent],
  exports: [SecondChanceComponent, CommonModule],
})
export class SecondChanceModule {}
