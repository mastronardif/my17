import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateService } from '../../services/state/state.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-thestore',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './thestore.component.html',
  styleUrl: './thestore.component.css'
})
export class ThestoreComponent implements OnInit {
  state$!: Observable<any>;

  constructor(private stateService: StateService) {}

  ngOnInit(): void {
   this.state$ = this.stateService.getState$('example');
  }

  updateState(): void {
    this.stateService.setState('example', 'New State');
  }

}
