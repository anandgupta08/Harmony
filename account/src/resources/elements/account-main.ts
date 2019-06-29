import {bindable, useShadowDOM, PLATFORM} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';

@useShadowDOM()
export class AccountMain {
  router: Router
  configureRouter(config: RouterConfiguration, router: Router) {
    this.router = router;
    config.map([
     { route: '', name:'accountEmpty', moduleId: PLATFORM.moduleName('./account-empty')},
     { route: 'account', name: 'accountCore', moduleId: PLATFORM.moduleName('./account-core')}
    ]);
    config.mapUnknownRoutes(PLATFORM.moduleName('./account-empty'));
  }
}
