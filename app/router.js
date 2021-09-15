import EmberRouter from '@ember/routing/router';
import config from 'test-template-only-3-24/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {});
