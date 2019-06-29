import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../event-bus';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private eventBus: EventBusService) { }

  ngOnInit() {
    this.eventBus.sendMessage('init', 'Inspiration Main Initialized');
  }

}
