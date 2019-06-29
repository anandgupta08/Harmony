import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { EventBusService } from './event-bus';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit {

  @Input('state')
  set state(state: string) {
    console.log('Inspiration received state', state);
  }

  @Output()message: EventEmitter<any> = new EventEmitter<any>();


  constructor(private router: Router, private eventBus: EventBusService) {

  }

  ngOnInit() {
    this.eventBus.registerForEvent('all', this);
    this.router.initialNavigation();
    if (environment.standalone) {
      console.log('navigating to /inspiration in standalone mode');
      this.router.navigate(['/inspiration']);
    }
  }

  public eventBusMessageReceived(message: any) {
    this.message.emit(message);
  }

}
