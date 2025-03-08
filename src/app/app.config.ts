import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AddressBookService } from "./services/address-book.service"
import { FormsModule } from '@angular/forms';
import { provideHttpClient,withFetch } from '@angular/common/http';


import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes), 
     provideClientHydration(withEventReplay()),
     provideHttpClient(withFetch()),
     importProvidersFrom(MatButtonModule,FormsModule),
     AddressBookService
    ],
     
};
