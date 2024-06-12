import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { reducers, metaReducers} from './store/reducers';

export const appConfig: ApplicationConfig = {
  //provideAnimations(),
  providers: [provideRouter(routes),
    provideAnimations(),
    provideEffects([]),
    provideStore(reducers, {metaReducers}),
    //provideStore({ counter: counterReducer }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
// function provideAnimation() {
//   throw new Error('Function not implemented.');
// }

