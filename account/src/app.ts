import { Router, RouterConfiguration } from "aurelia-router";
import { PLATFORM } from "aurelia-pal";

export class App {
  public message: string = 'Hello World!';
  router: Router;
  configureRouter(config: RouterConfiguration, router: Router) {
    this.router = router;
    config.map([
      {route: '', name: 'accountEmpty', moduleId: PLATFORM.moduleName('./resources/elements/account-empty')},
      {route: 'account', name: 'accountCore', moduleId: PLATFORM.moduleName('./resources/elements/account-core')}
    ]);
    config.mapUnknownRoutes(PLATFORM.moduleName('./resources/elements/account-empty'))
  }
}
