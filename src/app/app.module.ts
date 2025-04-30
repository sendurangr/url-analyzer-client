import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {provideHttpClient, withFetch} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {providePrimeNG} from 'primeng/config';
import Aura from '@primeng/themes/aura';
import {ButtonModule} from 'primeng/button';
import {InputText} from 'primeng/inputtext';
import {Card} from "primeng/card";
import { definePreset } from '@primeng/themes';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,

    // primeng modules
    ButtonModule,
    InputText,
    Card,

  ],
  providers: [
    provideHttpClient(withFetch()),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: definePreset(Aura, {
          semantic: {
            colorScheme: {
              light: {
                primary: {
                  50: '{teal.50}',
                  100: '{teal.100}',
                  200: '{teal.200}',
                  300: '{teal.300}',
                  400: '{teal.400}',
                  500: '{teal.500}',
                  600: '{teal.600}',
                  700: '{teal.700}',
                  800: '{teal.800}',
                  900: '{teal.900}',
                  950: '{teal.950}'
                },
                surface: {
                  0: '#ffffff',
                  50: '{zinc.50}',
                  100: '{zinc.100}',
                  200: '{zinc.200}',
                  300: '{zinc.300}',
                  400: '{zinc.400}',
                  500: '{zinc.500}',
                  600: '{zinc.600}',
                  700: '{zinc.700}',
                  800: '{zinc.800}',
                  900: '{zinc.900}',
                  950: '{zinc.950}'
                }
              },
              dark: {
                surface: {
                  0: '#ffffff',
                  50: '{zinc.50}',
                  100: '{zinc.100}',
                  200: '{zinc.200}',
                  300: '{zinc.300}',
                  400: '{zinc.400}',
                  500: '{zinc.500}',
                  600: '{zinc.600}',
                  700: '{zinc.700}',
                  800: '{zinc.800}',
                  900: '{zinc.900}',
                  950: '{zinc.950}'
                }
              }
            }
          }
        }),
        options: {
          darkModeSelector: '.dark-mode',
        },
      },
      ripple: true,
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
