import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThestoreComponent } from './comps/thestore/thestore.component';
import { StateService } from './services/state/state.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from './store/actions/counter.actions';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ThestoreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private store =  inject(Store);
  title = 'my18';
  state$!: Observable<any>;
  count$: Observable<Number>;

  constructor(private stateService: StateService) {
    this.count$ = this.store.select('counter');
  }

  ngOnInit(): void {
    this.state$ = this.stateService.getState$('example');
   }

  updateState(strState: string): void {
    this.stateService.setState('example', strState);
  }

  //
  increment() {
    console.log('app.increment');
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
  //

}
