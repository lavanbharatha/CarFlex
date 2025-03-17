import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app/app.routes';
import { CarService } from './app/car.service';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(),CarService,provideRouter(routes, withComponentInputBinding()),provideAnimations()]
})
  .catch((err) => console.error(err));
