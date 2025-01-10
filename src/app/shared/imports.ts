import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export const sharedImports = [
  CommonModule,
  RouterModule,
  TranslateModule
] as const;