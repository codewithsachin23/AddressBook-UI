import { importProvidersFrom } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

export const materialProviders = importProvidersFrom(
    MatButtonModule,
  );