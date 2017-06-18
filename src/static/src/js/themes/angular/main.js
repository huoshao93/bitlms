// Curriculum
require('../html/_curriculum');

// Scrolling behaviour
require('../html/_scroll');

// Quiz timer
require('../html/_countdown');

// Earnings chart
require('../html/_flotchart-earnings');

// Angular App
require('./angular/app');

// Library Directives
require('essential/js/angular/main');
require('layout/js/angular/main');
require('sidebar/js/angular/main');
require('maps/js/angular/_google-maps');
require('media/js/angular/main');
require('material/js/angular/main');

// Custom Directives
require('./angular/directives/navbar-transition-scroll');
require('./angular/directives/countdown');
require('./angular/directives/curriculum');
require('./angular/directives/flotchart-earnings');

/*
 * Below is what we need to modify most often
 */
// Router config
require('./angular/router/app-router');
require('./angular/router/home-page-router');
require('./angular/router/student-app-router');
require('./angular/router/instructor-web-router');
require('./angular/router/instructor-app-router');
require('./angular/router/program-web-router');
require('./angular/router/forum-web-router');
require('./angular/router/blog-web-router');

// Customer Controllers
require('./angular/controllers/app-ctrl');
require('./angular/controllers/home-ctrl');

