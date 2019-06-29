import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private stateService: StateService) { }

  ngOnInit() {
  }

  sendState() {
    this.stateService.setState('Info from Shell');
  }

}
