import 'core-js/stable';
import {Aurelia} from 'aurelia-framework'
import environment from './environment';
import {PLATFORM} from 'aurelia-pal';
import {CustomElementRegistry} from 'aurelia-web-components';
import { bootstrap } from 'aurelia-bootstrapper';

bootstrap(configure);

export function configure(aurelia: Aurelia) {
  console.log('Inside main of aurelia app');
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'));

  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }

  aurelia.start().then(() => {
    // aurelia.setRoot(PLATFORM.moduleName('app'));
    const registry = aurelia.container.get(CustomElementRegistry);    
    registry.useGlobalElements();
  })
  .then(() => {
    //aurelia.setRoot('app');
  });
}
