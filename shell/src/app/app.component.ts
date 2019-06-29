import { Component, OnInit } from '@angular/core';
import { CONFIG } from './micro-app-settings';
import { StateService } from './state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'shell';

  constructor(private stateService: StateService) {
  }

  ngOnInit() {
    this.load('inspiration');
    this.load('product');
    this.load('payment');
    this.load('account');
    setTimeout(() => {
      this.load('support');
    }, 2000);
  }

  load(name: string): void {
    const configItem = CONFIG[name];
    if (configItem.loaded) { return; }

    const  content = document.getElementById('content');
    const script = document.createElement('script');
    script.src = configItem.path;
    content.appendChild(script);
    if (configItem.element) {
      const element: HTMLElement = document.createElement(configItem.element);
      content.appendChild(element);
      element.addEventListener('message', msg => this.handleMessage(msg));
      element.setAttribute('state', 'init');
      script.onerror = () => console.error(`error loading ${configItem.path}`);
      this.stateService.registerClient(element);
    }
  }

  handleMessage(msg) : void {
    console.log('Shell received message: ', msg.detail);
  }
}



