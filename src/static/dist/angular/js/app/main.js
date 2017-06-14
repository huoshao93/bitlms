(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/js/themes/angular/main.js":[function(require,module,exports){
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
require('./angular/router/home-router');
require('./angular/router/student-router');
require('./angular/router/instructor-router');
require('./angular/router/website-tutor-router');
require('./angular/router/course-router');
require('./angular/router/forum-router');
require('./angular/router/blog-router');

// Customer Controllers
require('./angular/controllers/app-ctrl');
require('./angular/controllers/home-ctrl');


},{"../html/_countdown":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\html\\_countdown.js","../html/_curriculum":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\html\\_curriculum.js","../html/_flotchart-earnings":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\html\\_flotchart-earnings.js","../html/_scroll":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\html\\_scroll.js","./angular/app":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\angular\\app.js","./angular/controllers/app-ctrl":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\angular\\controllers\\app-ctrl.js","./angular/controllers/home-ctrl":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\angular\\controllers\\home-ctrl.js","./angular/directives/countdown":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\angular\\directives\\countdown.js","./angular/directives/curriculum":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\angular\\directives\\curriculum.js","./angular/directives/flotchart-earnings":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\angular\\directives\\flotchart-earnings.js","./angular/directives/navbar-transition-scroll":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\angular\\directives\\navbar-transition-scroll.js","./angular/router/app-router":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\angular\\router\\app-router.js","./angular/router/blog-router":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\angular\\router\\blog-router.js","./angular/router/course-router":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\angular\\router\\course-router.js","./angular/router/forum-router":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\angular\\router\\forum-router.js","./angular/router/home-router":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\angular\\router\\home-router.js","./angular/router/instructor-router":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\angular\\router\\instructor-router.js","./angular/router/student-router":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\angular\\router\\student-router.js","./angular/router/website-tutor-router":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\angular\\router\\website-tutor-router.js","essential/js/angular/main":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\main.js","layout/js/angular/main":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\layout\\js\\angular\\main.js","maps/js/angular/_google-maps":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\maps\\js\\angular\\_google-maps.js","material/js/angular/main":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\material\\js\\angular\\main.js","media/js/angular/main":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\media\\js\\angular\\main.js","sidebar/js/angular/main":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\sidebar\\js\\angular\\main.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\flot\\_helper.js":[function(require,module,exports){
var skin = require('../lib/_skin')();

var charts =
{
    // utility class
    utility: {
        chartColors: [ config.skins[ skin ][ 'primary-color' ], colors[ 'default-color' ], colors[ 'danger-color' ], colors[ 'success-color' ], colors[ 'warning-color' ] ],
        chartBackgroundColors: [ "rgba(255,255,255,0)", "rgba(255,255,255,0)" ],

        applyStyle: function (that) {
            that.options.colors = charts.utility.chartColors;
            that.options.grid.backgroundColor = { colors: charts.utility.chartBackgroundColors };
            that.options.grid.borderColor = charts.utility.chartColors[ 0 ];
            that.options.grid.color = charts.utility.chartColors[ 0 ];
        },

        // generate random number for charts
        randNum: function () {
            return (Math.floor(Math.random() * (1 + 40 - 20)) ) + 20;
        }
    }

};

module.exports = charts;
},{"../lib/_skin":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\lib\\_skin.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\lib\\_skin.js":[function(require,module,exports){
module.exports = (function () {
    var skin = $.cookie('skin');

    if (typeof skin == 'undefined') {
        skin = 'default';
    }
    return skin;
});
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_carousel.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('carousel', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkCarousel();
                }
            };
        } ]);

})();
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_check-all.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    if (attrs.toggle == 'check-all') {
                        el.tkCheckAll();
                    }

                }
            };
        } ]);

})();
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_collapse.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {
                    if (attrs.toggle == 'collapse') {
                        el.tkCollapse();
                    }
                }
            };
        } ]);

})();
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_cover.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('cover', [ '$timeout', function ($timeout) {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    $timeout(function () {
                        el.tkCover();
                    }, 200);
                }
            };
        } ]);

})();
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_datepicker.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('datepicker', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkDatePicker();
                }
            };
        } ]);

})();
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_daterangepicker.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('daterangepickerReport', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkDaterangepickerReport();
                }
            };
        } ])
        .directive('daterangepickerReservation', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkDaterangepickerReservation();
                }
            };
        } ]);

})();
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_expandable.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('expandable', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkExpandable();
                }
            };
        } ]);

})();
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_minicolors.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('minicolors', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkMiniColors();
                }
            };
        } ]);

})();
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_modal.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    if (attrs.toggle == 'modal') {
                        el.tkModal();
                    }
                    if (attrs.toggle == 'tk-modal-demo') {
                        el.tkModalDemo();
                    }

                }
            };
        } ]);

})();
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_nestable.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('nestable', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkNestable();
                }
            };
        } ]);

})();
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_panel-collapse.js":[function(require,module,exports){
(function () {
    "use strict";

    var randomId = function () {
        /** @return String */
        var S4 = function () {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    };

    angular.module('app')
        .directive('toggle', [ '$compile', function ($compile) {
            return {
                restrict: 'A',
                priority: 100,
                compile: function (el, attrs) {

                    if (attrs.toggle !== 'panel-collapse') return;

                    var body = angular.element('.panel-body', el),
                        id = body.attr('id') || randomId(),
                        collapse = angular.element('<div/>');

                    collapse
                        .attr('id', id)
                        .addClass('collapse' + (el.data('open') ? ' in' : ''))
                        .append(body.clone());

                    body.remove();

                    el.append(collapse);

                    $('.panel-collapse-trigger', el)
                        .attr('data-toggle', 'collapse')
                        .attr('data-target', '#' + id)
                        .collapse({trigger: false})
                        .removeAttr('style');

                    return function (scope, el, attrs) {
                    };

                }
            };
        } ]);

})();
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_select2.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {
                    if (attrs.toggle == 'select2' || attrs.toggle == 'select2-tags') {
                        el.tkSelect2();
                    }
                }
            };
        } ]);

})();
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_selectpicker.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('selectpicker', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkSelectPicker();
                }
            };
        } ]);

})();
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_slider.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('slider', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    if (attrs.slider == 'default') {
                        el.tkSlider();
                    }

                    if (attrs.slider == 'formatter') {
                        el.tkSliderFormatter();
                    }

                }
            };
        } ]);

    angular.module('app')
        .directive('onSlide', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    el.tkSliderUpdate();

                }
            };
        } ]);

})();
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_summernote.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('summernote', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkSummernote();
                }
            };
        } ]);

})();
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_tables.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    if (attrs.toggle == 'data-table') {
                        el.tkDataTable();
                    }

                }
            };
        } ]);

})();
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_tabs.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    if (attrs.toggle == 'tab') {
                        el.click(function(e){
                            e.preventDefault();
                        });
                    }

                }
            };
        } ]);

})();
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_touchspin.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    if (attrs.toggle == 'touch-spin') {
                        el.tkTouchSpin();
                    }

                }
            };
        } ]);

})();
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_tree.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    if (attrs.toggle == 'tree') {
                        el.tkFancyTree();
                    }

                }
            };
        } ]);

})();
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_wizard.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {
                    if (attrs.toggle == 'wizard') {
                        el.tkWizard();
                    }
                }
            };
        } ]);

})();
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\main.js":[function(require,module,exports){
require('./_panel-collapse');
require('./_carousel');
require('./_check-all');
require('./_collapse');
require('./_cover');
require('./_datepicker');
require('./_daterangepicker');
require('./_expandable');
require('./_minicolors');
require('./_modal');
require('./_nestable');
require('./_select2');
require('./_selectpicker');
require('./_slider');
require('./_summernote');
require('./_touchspin');
require('./_tables');
require('./_tabs');
require('./_tree');
require('./_wizard');
},{"./_carousel":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_carousel.js","./_check-all":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_check-all.js","./_collapse":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_collapse.js","./_cover":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_cover.js","./_datepicker":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_datepicker.js","./_daterangepicker":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_daterangepicker.js","./_expandable":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_expandable.js","./_minicolors":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_minicolors.js","./_modal":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_modal.js","./_nestable":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_nestable.js","./_panel-collapse":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_panel-collapse.js","./_select2":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_select2.js","./_selectpicker":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_selectpicker.js","./_slider":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_slider.js","./_summernote":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_summernote.js","./_tables":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_tables.js","./_tabs":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_tabs.js","./_touchspin":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_touchspin.js","./_tree":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_tree.js","./_wizard":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_wizard.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\layout\\js\\angular\\_gridalicious.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ '$timeout', function ($timeout) {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {
                    if (attrs.toggle == 'gridalicious') {
                        $timeout(function(){
                            el.tkGridalicious();
                        }, 100);
                    }
                }
            };
        } ]);

})();
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\layout\\js\\angular\\_isotope.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ '$timeout', function ($timeout) {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {
                    if (attrs.toggle == 'isotope') {
                        $timeout(function(){
                            el.tkIsotope();
                        }, 100);
                    }
                }
            };
        } ]);

})();
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\layout\\js\\angular\\_parallax.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('parallax', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkParallax();
                }
            };
        } ]);

})();
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\layout\\js\\angular\\_scrollable.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('scrollable', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el) {
                    el.tkScrollable();
                }
            };
        } ])
        .directive('scrollableH', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el) {
                    el.tkScrollable({ horizontal: true });
                }
            };
        } ]);

})();
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\layout\\js\\angular\\_sidebar-pc.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {
                    if (attrs.toggle == 'sidebar-size-pc-demo') {
                        el.tkSidebarSizePcDemo();
                    }
                }
            };
        } ]);

})();
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\layout\\js\\angular\\main.js":[function(require,module,exports){
require('./_scrollable');
require('./_isotope');
require('./_parallax');
require('./_gridalicious');
require('./_sidebar-pc');
},{"./_gridalicious":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\layout\\js\\angular\\_gridalicious.js","./_isotope":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\layout\\js\\angular\\_isotope.js","./_parallax":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\layout\\js\\angular\\_parallax.js","./_scrollable":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\layout\\js\\angular\\_scrollable.js","./_sidebar-pc":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\layout\\js\\angular\\_sidebar-pc.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\maps\\js\\angular\\_google-maps.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    if (attrs.toggle !== 'google-maps') return;

                    el.tkGoogleMap();
                }
            };
        } ]);

})();
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\material\\js\\angular\\_forms.js":[function(require,module,exports){
(function ($) {
    "use strict";

    angular.module('app')
        .directive('formControlMaterial', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.find('.form-control').tkFormControlMaterial();
                }
            };
        } ]);

})(jQuery);
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\material\\js\\angular\\_ripple.js":[function(require,module,exports){
(function () {
    "use strict";

    var ripple = function (e) {

        var el, ink, d, x, y;

        el = angular.element(this);

        el.addClass('ripple');

        if (el.parents('.sidebar-skin-white').length) {
            el.addClass('ripple-dark-fade');
        }

        if (el.parents('.sidebar-skin-dark').length) {
            el.addClass('ripple-light-fade');
        }

        if (el.is('.btn-white')) {
            el.addClass('ripple-dark-fade');
        }

        if (el.attr('href') && ! el.data('toggle')) {

            e.preventDefault();
            e.stopPropagation();

            setTimeout(function () {
                document.location = el.attr('href');
            }, 400);
        }

        // create .ink element if it doesn't exist
        if (el.find(".ink").length === 0)
            el.prepend("<span class='ink'></span>");

        ink = el.find(".ink");
        // in case of quick double clicks stop the previous animation
        ink.removeClass("animate");

        // set size of .ink
        if (! ink.height() && ! ink.width()) {
            // use el's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
            d = Math.max(el.outerWidth(), el.outerHeight());
            ink.css({height: d, width: d});
        }

        // get click coordinates
        // logic = click coordinates relative to page - el's position relative to page - half of self height/width to make it controllable from the center;
        x = e.pageX - el.offset().left - ink.width() / 2;
        y = e.pageY - el.offset().top - ink.height() / 2;

        // set the position and add class .animate
        ink.css({top: y + 'px', left: x + 'px'}).addClass("animate");

    };

    angular.module('app')
        .directive('uiSref', [ function () {
            return {
                restrict: 'A',
                priority: 999,
                link: function (scope, el) {
                    if (el[ 0 ].nodeName == 'A' || el[ 0 ].nodeName == 'BUTTON') {
                        el.click(ripple);
                    }
                }
            };
        } ])
        .directive('btn', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.click(ripple);
                }
            };
        } ])
        .directive('sidebarMenu', [ '$timeout', function ($timeout) {
            return {
                restrict: 'C',
                priority: 999,
                link: function (scope, el) {
                    $timeout(function () {
                        el.find('>li>a').click(ripple);
                    });
                }
            };
        } ])
        .directive('navbarNav', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.find('>li>a').click(ripple);
                }
            };
        } ])
        .directive('dropdownMenu', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.find('>li>a').click(ripple);
                }
            };
        } ]);

})();
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\material\\js\\angular\\main.js":[function(require,module,exports){
require('./_ripple');
require('./_forms');
},{"./_forms":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\material\\js\\angular\\_forms.js","./_ripple":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\material\\js\\angular\\_ripple.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\media\\js\\angular\\_owl.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('owlBasic', [ '$timeout', function ($timeout) {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    $timeout(function(){
                        el.tkOwlDefault();
                    }, 200);
                }
            };
        } ])
        .directive('owlMixed', [ '$timeout', function ($timeout) {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    $timeout(function(){
                        el.tkOwlMixed();
                    }, 200);
                }
            };
        } ])
        .directive('owlPreview', [ '$timeout', function ($timeout) {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    $timeout(function(){
                        el.tkOwlPreview();
                    }, 200);
                }
            };
        } ]);

})();
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\media\\js\\angular\\_slick.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('slickBasic', [ '$timeout', function ($timeout) {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    $timeout(function(){
                        el.tkSlickDefault();
                    }, 200);
                }
            };
        } ]);

})();
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\media\\js\\angular\\main.js":[function(require,module,exports){
require('./_owl');
require('./_slick');
},{"./_owl":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\media\\js\\angular\\_owl.js","./_slick":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\media\\js\\angular\\_slick.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\sidebar\\js\\angular\\_sidebar-collapse.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('type', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    if (! el.is('.sidebar')) return;
                    if (attrs.type !== 'collapse') return;

                    el.tkSidebarCollapse();
                }
            };
        } ]);

})();
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\sidebar\\js\\angular\\_sidebar-dropdown.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('type', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    if (! el.is('.sidebar')) return;
                    if (attrs.type !== 'dropdown') return;

                    el.tkSidebarDropdown();
                }
            };
        } ]);

})();
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\sidebar\\js\\angular\\_sidebar-toggle-bar.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggleBar', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {
                    if (attrs.toggleBar) {
                        el.tkSidebarToggleBar();
                    }
                }
            };
        } ]);

})();
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\sidebar\\js\\angular\\main.js":[function(require,module,exports){
require('./_sidebar-dropdown');
require('./_sidebar-collapse');
require('./_sidebar-toggle-bar');
},{"./_sidebar-collapse":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\sidebar\\js\\angular\\_sidebar-collapse.js","./_sidebar-dropdown":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\sidebar\\js\\angular\\_sidebar-dropdown.js","./_sidebar-toggle-bar":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\sidebar\\js\\angular\\_sidebar-toggle-bar.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\angular\\app.js":[function(require,module,exports){
(function(){
    'use strict';

    angular.module('app', [
        'ngResource',
        'ngSanitize',
        'ngTouch',
        'ui.router',
        'ui.utils',
        'ui.jq'
    ]);

    var app = angular.module('app')
        .config(
        [ '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$interpolateProvider',
            function ($controllerProvider, $compileProvider, $filterProvider, $provide, $interpolateProvider) {
                app.controller = $controllerProvider.register;
                app.directive = $compileProvider.directive;
                app.filter = $filterProvider.register;
                app.factory = $provide.factory;
                app.service = $provide.service;
                app.constant = $provide.constant;
                app.value = $provide.value;

                $interpolateProvider.startSymbol('::');
                $interpolateProvider.endSymbol('::');
            }
        ]);

})();
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\angular\\controllers\\app-ctrl.js":[function(require,module,exports){
(function () {
    "use strict";

  var app = angular.module('app');
  
  app.controller('AppCtrl',
            function ($scope, $state) {
                $scope.app = {
                    settings: {
                        htmlClass: '',
                        bodyClass: ''
                    }
                };
                $scope.$state = $state;

            } );
  
  app.controller('navBarCtrl', 
                function ($scope, $state) {
                    $scope.user = {
                    		name:'Bill Gates2'
                    };
                } );

})(); 

},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\angular\\controllers\\home-ctrl.js":[function(require,module,exports){
(function () {
    "use strict";

  var app = angular.module('app');
  
  app.controller('homeCtrl',  function ($scope,$rootScope) {
	  	
		
      });

})(); 

},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\angular\\directives\\countdown.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('tkCountdown', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkCountdown();
                    scope.$on("$destroy", function(){
                        el.countdown('pause');
                    });
                }
            };
        } ]);

})();
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\angular\\directives\\curriculum.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('curriculum', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkCurriculum();
                    el.find('.list-group-item').click(function(){
                       scope.$state.go($(this).data('target'));
                    });
                }
            };
        } ]);

})();
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\angular\\directives\\flotchart-earnings.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {
                    if (attrs.toggle == 'flot-chart-earnings') {
                        el.tkFlotChartEarnings();
                    }
                }
            };
        } ]);

})();
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\angular\\directives\\navbar-transition-scroll.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('windowNavbarTransition', [ '$window', function ($window) {
            return function (scope, el) {
                angular.element($window).tkScrollNavbarTransition();
            };
        } ])
        .directive('stContentInner', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkScrollNavbarTransition();
                }
            };
        } ]);

})();
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\angular\\router\\app-router.js":[function(require,module,exports){
(function() {
	'use strict';

	var app = angular.module('app');

	app.run([ '$rootScope', '$state', '$stateParams',
			function($rootScope, $state, $stateParams) {
				$rootScope.$state = $state;
				$rootScope.$stateParams = $stateParams;
				$rootScope.htmlClass = {
						website : 'transition-navbar-scroll top-navbar-xlarge bottom-footer',
						websitePricing : 'top-navbar-xlarge bottom-footer app-desktop',
						websiteSurvey : 'top-navbar-xlarge bottom-footer app-desktop app-mobile',
						websiteLogin : 'hide-sidebar ls-bottom-footer',
						websiteTakeQuiz : 'transition-navbar-scroll top-navbar-xlarge bottom-footer app-desktop app-mobile',
						appl3 : 'st-layout ls-top-navbar-large ls-bottom-footer show-sidebar sidebar-l3',
						appl1r3 : 'st-layout ls-top-navbar-large ls-bottom-footer show-sidebar sidebar-l1 sidebar-r3'
					};
			} ]);
	
	app.config(function($stateProvider, $urlRouterProvider) {

				$urlRouterProvider.otherwise('/website-pages/home');

				$stateProvider.state('login', {
					url : '/login',
					templateUrl : 'website/login.html',
					controller : [ '$scope','$rootScope', function($scope,$rootScope) {
						$scope.app.settings.htmlClass = $rootScope.htmlClass.websiteLogin;
						$scope.app.settings.bodyClass = 'login';
					} ]
				}).state('sign-up', {
					url : '/sign-up',
					templateUrl : 'website/sign-up.html',
					controller : [ '$scope','$rootScope', function($scope,$rootScope) {
						$scope.app.settings.htmlClass = $rootScope.htmlClass.websiteLogin;
						$scope.app.settings.bodyClass = 'login';
					} ]
				});
			});

})();
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\angular\\router\\blog-router.js":[function(require,module,exports){
(function() {
	'use strict';

	var app = angular.module('app');

	app.run([ '$rootScope', '$state', '$stateParams',
			function($rootScope, $state, $stateParams) {
				$rootScope.$state = $state;
				$rootScope.$stateParams = $stateParams;
			} ]);

	app.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/website-pages/home');
				$stateProvider.state('website-blog', {
					abstract : true,
					url : '/website-blog',
					template : '<div ui-view class="ui-view-main" />'
				}).state('website-blog.listing', {
					url : '/listing',
					templateUrl : 'website/blog-listing.html',
					controller : [ '$scope','$rootScope', function($scope,$rootScope) {
						$scope.app.settings.htmlClass = $rootScope.htmlClass.website;
						$scope.app.settings.bodyClass = '';
					} ]
				}).state('website-blog.post', {
					url : '/post',
					templateUrl : 'website/blog-post.html',
					controller : [ '$scope','$rootScope', function($scope,$rootScope) {
						$scope.app.settings.htmlClass = $rootScope.htmlClass.website;
						$scope.app.settings.bodyClass = '';
					} ]
				});
			});
})();
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\angular\\router\\course-router.js":[function(require,module,exports){
(function(){
    'use strict';

    var app = angular.module('app');
       app.config(function ($stateProvider, $urlRouterProvider) {

                $urlRouterProvider.otherwise('/website-pages/home');

                $stateProvider
                    .state('website-courses', {
                        abstract: true,
                        url: '/website-courses',
                        template: '<div ui-view class="ui-view-main" />'
                    })
                    .state('website-courses.grid', {
                        url: '/grid',
                        templateUrl: 'website/courses-grid.html',
                        controller: ['$scope','$rootScope', function($scope,$rootScope){
                            $scope.app.settings.htmlClass = $rootScope.htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('website-courses.list', {
                        url: '/list',
                        templateUrl: 'website/courses-list.html',
                        controller: ['$scope','$rootScope', function($scope,$rootScope){
                            $scope.app.settings.htmlClass = $rootScope.htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('website-courses.single', {
                        url: '/single',
                        templateUrl: 'website/course.html',
                        controller: ['$scope','$rootScope', function($scope,$rootScope){
                            $scope.app.settings.htmlClass = $rootScope.htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    });
            });
})();
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\angular\\router\\forum-router.js":[function(require,module,exports){
(function() {
	'use strict';

	var app = angular.module('app');

	app.run([ '$rootScope', '$state', '$stateParams',
			function($rootScope, $state, $stateParams) {
				$rootScope.$state = $state;
				$rootScope.$stateParams = $stateParams;
			} ]);

	app.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/website-pages/home');
				$stateProvider.state('website-forum', {
					abstract : true,
					url : '/website-forum',
					template : '<div ui-view class="ui-view-main" />'
				}).state('website-forum.home', {
					url : '/home',
					templateUrl : 'website/forum-home.html',
					controller : [ '$scope','$rootScope', function($scope,$rootScope) {
						$scope.app.settings.htmlClass = $rootScope.htmlClass.website;
						$scope.app.settings.bodyClass = '';
					} ]
				}).state('website-forum.category', {
					url : '/category',
					templateUrl : 'website/forum-category.html',
					controller : [ '$scope','$rootScope', function($scope,$rootScope) {
						$scope.app.settings.htmlClass = $rootScope.htmlClass.website;
						$scope.app.settings.bodyClass = '';
					} ]
				}).state('website-forum.thread', {
					url : '/thread',
					templateUrl : 'website/forum-thread.html',
					controller : [ '$scope','$rootScope', function($scope,$rootScope) {
						$scope.app.settings.htmlClass = $rootScope.htmlClass.website;
						$scope.app.settings.bodyClass = '';
					} ]
				});
			});

})();
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\angular\\router\\home-router.js":[function(require,module,exports){
(function() {
	'use strict';

	var app = angular.module('app');

	app.config(function($stateProvider,$urlRouterProvider) {
		$urlRouterProvider.otherwise('/website-pages/home');
				$stateProvider
						.state('website-pages', {
							abstract : true,
							url : '/website-pages',
							template : '<div ui-view class="ui-view-main" />'
						})
						.state('website-pages.home', {
							url : '/home',
							templateUrl : 'website/home.html',
							controller : 'homeCtrl'
						})
						.state('website-pages.contact',
								{
									url : '/contact',
									templateUrl : 'website/contact.html',
									controller : [
											'$scope','$rootScope',
											function($scope, $rootScope) {
												$scope.app.settings.htmlClass = $rootScope.htmlClass.website;
												$scope.app.settings.bodyClass = '';
											} ]
								});
			});

})();
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\angular\\router\\instructor-router.js":[function(require,module,exports){
(function() {
	'use strict';

	var app = angular.module('app');

	app.config(function($stateProvider,$urlRouterProvider) {
		$urlRouterProvider.otherwise('/website-pages/home');
		 $stateProvider
         .state('app-instructor', {
             abstract: true,
             url: '/app-instructor',
             template: '<div ui-view class="ui-view-main" />'
         })
         .state('app-instructor.dashboard', {
             url: '/dashboard',
             templateUrl: 'app/instructor-dashboard.html',
             controller: ['$scope','$rootScope', function($scope, $rootScope){
                 $scope.app.settings.htmlClass = $rootScope.htmlClass.appl3;
                 $scope.app.settings.bodyClass = '';
             }]
         })
         .state('app-instructor.courses', {
             url: '/courses',
             templateUrl: 'app/instructor-courses.html',
             controller: ['$scope','$rootScope', function($scope, $rootScope){
                 $scope.app.settings.htmlClass = $rootScope.htmlClass.appl3;
                 $scope.app.settings.bodyClass = '';
             }]
         })
         .state('app-instructor.edit-course', {
             url: '/edit-course',
             templateUrl: 'app/instructor-edit-course.html',
             controller: ['$scope','$rootScope', function($scope, $rootScope){
                 $scope.app.settings.htmlClass = $rootScope.htmlClass.appl3;
                 $scope.app.settings.bodyClass = '';
             }]
         })
         .state('app-instructor.edit-course-meta', {
             url: '/edit-course-meta',
             templateUrl: 'app/instructor-edit-course-meta.html',
             controller: ['$scope','$rootScope', function($scope, $rootScope){
                 $scope.app.settings.htmlClass = $rootScope.htmlClass.appl3;
                 $scope.app.settings.bodyClass = '';
             }]
         })
         .state('app-instructor.edit-course-lessons', {
             url: '/edit-course-lessons',
             templateUrl: 'app/instructor-edit-course-lessons.html',
             controller: ['$scope','$rootScope', function($scope, $rootScope){
                 $scope.app.settings.htmlClass = $rootScope.htmlClass.appl3;
                 $scope.app.settings.bodyClass = '';
             }]
         })
         .state('app-instructor.earnings', {
             url: '/earnings',
             templateUrl: 'app/instructor-earnings.html',
             controller: ['$scope','$rootScope', function($scope, $rootScope){
                 $scope.app.settings.htmlClass = $rootScope.htmlClass.appl3;
                 $scope.app.settings.bodyClass = '';
             }]
         })
         .state('app-instructor.statement', {
             url: '/instructor',
             templateUrl: 'app/instructor-statement.html',
             controller: ['$scope','$rootScope', function($scope, $rootScope){
                 $scope.app.settings.htmlClass = $rootScope.htmlClass.appl3;
                 $scope.app.settings.bodyClass = '';
             }]
         })
         .state('app-instructor.messages', {
             url: '/messages',
             templateUrl: 'app/instructor-messages.html',
             controller: ['$scope','$rootScope', function($scope, $rootScope){
                 $scope.app.settings.htmlClass = $rootScope.htmlClass.appl3;
                 $scope.app.settings.bodyClass = '';
             }]
         })
         .state('app-instructor.private-profile', {
             url: '/private-profile',
             templateUrl: 'app/instructor-private-profile.html',
             controller: ['$scope','$rootScope', function($scope, $rootScope){
                 $scope.app.settings.htmlClass = $rootScope.htmlClass.appl3;
                 $scope.app.settings.bodyClass = '';
             }]
         })
         .state('app-instructor.billing', {
             url: '/billing',
             templateUrl: 'app/instructor-billing.html',
             controller: ['$scope','$rootScope', function($scope, $rootScope){
                 $scope.app.settings.htmlClass = $rootScope.htmlClass.appl3;
                 $scope.app.settings.bodyClass = '';
             }]
         });
	});

})();
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\angular\\router\\student-router.js":[function(require,module,exports){
(function() {
	'use strict';

	var app = angular.module('app');

	app.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/website-pages/home');
		$stateProvider
        .state('app-student', {
            abstract: true,
            url: '/app-student',
            template: '<div ui-view class="ui-view-main" />'
        })
        .state('app-student.dashboard', {
            url: '/dashboard',
            templateUrl: 'app/student-dashboard.html',
            controller: ['$scope','$rootScope', function($scope,$rootScope){
                $scope.app.settings.htmlClass = $rootScope.htmlClass.appl3;
                $scope.app.settings.bodyClass = '';
            }]
        })
        .state('app-student.messages', {
            url: '/messages',
            templateUrl: 'app/student-messages.html',
            controller: ['$scope','$rootScope', function($scope,$rootScope){
                $scope.app.settings.htmlClass = $rootScope.htmlClass.appl3;
                $scope.app.settings.bodyClass = '';
            }]
        })
        .state('app-student.private-profile', {
            url: '/profile',
            templateUrl: 'app/student-profile.html',
            controller: ['$scope','$rootScope', function($scope,$rootScope){
                $scope.app.settings.htmlClass = $rootScope.htmlClass.appl3;
                $scope.app.settings.bodyClass = '';
            }]
        })
        .state('app-student.billing', {
            url: '/billing',
            templateUrl: 'app/student-billing.html',
            controller: ['$scope','$rootScope', function($scope,$rootScope){
                $scope.app.settings.htmlClass = $rootScope.htmlClass.appl3;
                $scope.app.settings.bodyClass = '';
            }]
        })
        .state('app-student.courses', {
            url: '/courses',
            templateUrl: 'app/student-courses.html',
            controller: ['$scope','$rootScope', function($scope,$rootScope){
                $scope.app.settings.htmlClass = $rootScope.htmlClass.appl1r3;
                $scope.app.settings.bodyClass = '';
            }]
        })
        .state('app-student.course-forums', {
            url: '/course-forums',
            templateUrl: 'app/student-course-forums.html',
            controller: ['$scope','$rootScope', function($scope,$rootScope){
                $scope.app.settings.htmlClass = $rootScope.htmlClass.appl1r3;
                $scope.app.settings.bodyClass = '';
            }]
        })
        .state('app-student.course-forum-thread', {
            url: '/course-forum-thread',
            templateUrl: 'app/student-course-forum-thread.html',
            controller: ['$scope','$rootScope', function($scope,$rootScope){
                $scope.app.settings.htmlClass = $rootScope.htmlClass.appl1r3;
                $scope.app.settings.bodyClass = '';
            }]
        })
        .state('app-student.take-course', {
            url: '/take-course',
            templateUrl: 'app/student-take-course.html',
            controller: ['$scope','$rootScope', function($scope,$rootScope){
                $scope.app.settings.htmlClass = $rootScope.htmlClass.appl1r3;
                $scope.app.settings.bodyClass = '';
            }]
        })
        .state('app-student.take-quiz', {
            url: '/take-quiz',
            templateUrl: 'app/student-take-quiz.html',
            controller: ['$scope','$rootScope', function($scope,$rootScope){
                $scope.app.settings.htmlClass = $rootScope.htmlClass.appl1r3;
                $scope.app.settings.bodyClass = '';
            }]
        });		
	});

})();
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\angular\\router\\website-tutor-router.js":[function(require,module,exports){
(function(){
    'use strict';

    var app = angular.module('app');
       app.config(function ($stateProvider, $urlRouterProvider) {

                $urlRouterProvider.otherwise('/website-pages/home');

                $stateProvider
                    .state('website-tutors', {
                        abstract: true,
                        url: '/website-tutuos',
                        template: '<div ui-view class="ui-view-main" />'
                    })
                    .state('website-tutors.all',
							{
								url : '/all',
								templateUrl : 'website/tutors.html',
								controller : [
										'$scope','$rootScope',
										function($scope,$rootScope) {
											$scope.app.settings.htmlClass = $rootScope.htmlClass.website;
											$scope.app.settings.bodyClass = '';
										} ]
							})		
            });
})();
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\html\\_countdown.js":[function(require,module,exports){
(function ($) {
    "use strict";

    $.fn.tkCountdown = function () {
        this.countdown({
            until: moment().add(10, 'minute').toDate()
        });
    };

    $('.tk-countdown').tkCountdown();

})(jQuery);
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\html\\_curriculum.js":[function(require,module,exports){
(function ($) {
    "use strict";

    $.fn.tkCurriculum = function () {

        var e = this;

        if (typeof angular == 'undefined') {
            this.find('.list-group-item').on('click', function () {
                location.href = $(this).data('target');
            });
        }

        this.find('.collapse')
            .on('show.bs.collapse', function () {
                e.addClass('open');
            })
            .on('hide.bs.collapse', function () {
                e.removeClass('open');
            });
    };

    $('.curriculum').tkCurriculum();

})(jQuery);
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\html\\_flotchart-earnings.js":[function(require,module,exports){
(function ($) {

    var skin = require('charts/js/lib/_skin')();
    var charts = require('charts/js/flot/_helper');

    if (typeof charts == 'undefined')
        return;

    charts.chart_earnings =
    {
        // chart data
        data: {
            d1: [],
            d2: []
        },

        // will hold the chart object
        plot: null,

        // chart options
        options: {
            colors: [ colors[ 'warning-color' ], colors[ 'success-color' ] ],
            grid: {
                color: colors[ 'default-light-color' ],
                borderWidth: 1,
                borderColor: "transparent",
                clickable: true,
                hoverable: true
            },
            series: {
                grow: {active: false},
                lines: {
                    show: true,
                    fill: false,
                    lineWidth: 2,
                    steps: false,
                    color: config.skins[ skin ][ 'primary-color' ]
                },
                points: {show: false}
            },
            legend: {
                noColumns: 2,
                position: "nw",
                backgroundColor: null,
                backgroundOpacity: 0
            },
            yaxis: {
                ticks: 3,
                tickSize: 40,
                tickFormatter: function (val, axis) {
                    return val + "k";
                }
            },
            xaxis: {ticks: 4, tickDecimals: 0, tickColor: 'transparent'},
            shadowSize: 0,
            tooltip: true,
            tooltipOpts: {
                content: "%s : %y.0",
                shifts: {
                    x: - 30,
                    y: - 50
                },
                defaultTheme: false
            }
        },

        // initialize
        init: function (wrapper) {

            if (! wrapper.length) return;

            // generate some data
            this.data.d1 = [ [ 1, 10 + charts.utility.randNum() ], [ 2, 20 + charts.utility.randNum() ], [ 3, 50 + charts.utility.randNum() ], [ 4, 160 + charts.utility.randNum() ], [ 5, 110 + charts.utility.randNum() ], [ 6, 36 + charts.utility.randNum() ], [ 7, 70 + charts.utility.randNum() ], [ 8, 30 + charts.utility.randNum() ], [ 9, 36 + charts.utility.randNum() ], [ 10, 80 + charts.utility.randNum() ], [ 11, 140 + charts.utility.randNum() ], [ 12, 47 + charts.utility.randNum() ], [ 13, 50 + charts.utility.randNum() ], [ 14, 50 + charts.utility.randNum() ], [ 15, 45 + charts.utility.randNum() ], [ 16, 100 + charts.utility.randNum() ], [ 17, 50 + charts.utility.randNum() ], [ 18, 53 + charts.utility.randNum() ], [ 19, 56 + charts.utility.randNum() ], [ 20, 59 + charts.utility.randNum() ], [ 21, 62 + charts.utility.randNum() ], [ 22, 90 + charts.utility.randNum() ], [ 23, 56 + charts.utility.randNum() ], [ 24, 59 + charts.utility.randNum() ], [ 25, 62 + charts.utility.randNum() ], [ 26, 65 + charts.utility.randNum() ], [ 27, 80 + charts.utility.randNum() ], [ 28, 71 + charts.utility.randNum() ], [ 29, 75 + charts.utility.randNum() ], [ 30, 120 + charts.utility.randNum() ] ];
            this.data.d2 = [ [ 1, 3 + charts.utility.randNum() ], [ 2, 6 + charts.utility.randNum() ], [ 3, 30 + charts.utility.randNum() ], [ 4, 110 + charts.utility.randNum() ], [ 5, 80 + charts.utility.randNum() ], [ 6, 18 + charts.utility.randNum() ], [ 7, 50 + charts.utility.randNum() ], [ 8, 15 + charts.utility.randNum() ], [ 9, 18 + charts.utility.randNum() ], [ 10, 60 + charts.utility.randNum() ], [ 11, 110 + charts.utility.randNum() ], [ 12, 27 + charts.utility.randNum() ], [ 13, 30 + charts.utility.randNum() ], [ 14, 33 + charts.utility.randNum() ], [ 15, 24 + charts.utility.randNum() ], [ 16, 80 + charts.utility.randNum() ], [ 17, 30 + charts.utility.randNum() ], [ 18, 33 + charts.utility.randNum() ], [ 19, 36 + charts.utility.randNum() ], [ 20, 39 + charts.utility.randNum() ], [ 21, 42 + charts.utility.randNum() ], [ 22, 70 + charts.utility.randNum() ], [ 23, 36 + charts.utility.randNum() ], [ 24, 39 + charts.utility.randNum() ], [ 25, 42 + charts.utility.randNum() ], [ 26, 45 + charts.utility.randNum() ], [ 27, 60 + charts.utility.randNum() ], [ 28, 51 + charts.utility.randNum() ], [ 29, 55 + charts.utility.randNum() ], [ 30, 100 + charts.utility.randNum() ] ];

            // make chart
            this.plot = $.plot(
                wrapper, [
                    {
                        label: "Gross Revenue",
                        data: this.data.d1
                    },
                    {
                        label: "Net Revenue",
                        data: this.data.d2
                    }
                ],
                this.options
            );
        }
    };

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkFlotChartEarnings = function () {

        if (! this.length) return;

        charts.chart_earnings.init(this);

    };

    $('[data-toggle="flot-chart-earnings"]').tkFlotChartEarnings();

})(jQuery);
},{"charts/js/flot/_helper":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\flot\\_helper.js","charts/js/lib/_skin":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\lib\\_skin.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\html\\_scroll.js":[function(require,module,exports){
(function ($, window) {
    "use strict";

    var $window = $(window),
        $content = $('.st-content-inner');

    $.fn.tkScrollNavbarTransition = function () {

        var handleScroll = function (e) {

            var $navbar = $('.navbar-fixed-top'),
                $html = $('html');

            if (Modernizr.touch || ! $navbar.length || ! $html.is('.transition-navbar-scroll')) return false;

            var scrollTop = parseInt($(e.currentTarget).scrollTop(), 10);

            if (! isNaN(scrollTop)) {
                if (scrollTop > 50) {
                    if ($navbar.data('z') !== 1) {
                        $navbar.attr('data-z', 1);
                    }
                    if ($navbar.is('.navbar-size-xlarge')) {
                        $navbar.removeClass('navbar-size-xlarge');
                    }
                    if ($html.is('.ls-top-navbar-xlarge')) {
                        $html.removeClass('ls-top-navbar-xlarge').addClass('ls-top-navbar-large');
                    }
                    if ($html.is('.top-navbar-xlarge')) {
                        $html.removeClass('top-navbar-xlarge').addClass('top-navbar-large');
                    }
                }
                if (scrollTop <= 0) {
                    $navbar.attr('data-z', 0);
                    $navbar.addClass('navbar-size-xlarge');
                    if ($html.is('.ls-top-navbar-large')) {
                        $html.removeClass('ls-top-navbar-large').addClass('ls-top-navbar-xlarge');
                    }
                    if ($html.is('.top-navbar-large')) {
                        $html.removeClass('top-navbar-large').addClass('top-navbar-xlarge');
                    }
                }
            }

        };

        this.scroll(handleScroll);

    };

    if ($content.length) {
        $content.tkScrollNavbarTransition();
    }
    else {
        $window.tkScrollNavbarTransition();
    }

})(jQuery, window);
},{}]},{},["./src/js/themes/angular/main.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwic3JjXFxqc1xcdGhlbWVzXFxhbmd1bGFyXFxtYWluLmpzIiwibGliXFxjaGFydHNcXGpzXFxmbG90XFxfaGVscGVyLmpzIiwibGliXFxjaGFydHNcXGpzXFxsaWJcXF9za2luLmpzIiwibGliXFxlc3NlbnRpYWxcXGpzXFxhbmd1bGFyXFxfY2Fyb3VzZWwuanMiLCJsaWJcXGVzc2VudGlhbFxcanNcXGFuZ3VsYXJcXF9jaGVjay1hbGwuanMiLCJsaWJcXGVzc2VudGlhbFxcanNcXGFuZ3VsYXJcXF9jb2xsYXBzZS5qcyIsImxpYlxcZXNzZW50aWFsXFxqc1xcYW5ndWxhclxcX2NvdmVyLmpzIiwibGliXFxlc3NlbnRpYWxcXGpzXFxhbmd1bGFyXFxfZGF0ZXBpY2tlci5qcyIsImxpYlxcZXNzZW50aWFsXFxqc1xcYW5ndWxhclxcX2RhdGVyYW5nZXBpY2tlci5qcyIsImxpYlxcZXNzZW50aWFsXFxqc1xcYW5ndWxhclxcX2V4cGFuZGFibGUuanMiLCJsaWJcXGVzc2VudGlhbFxcanNcXGFuZ3VsYXJcXF9taW5pY29sb3JzLmpzIiwibGliXFxlc3NlbnRpYWxcXGpzXFxhbmd1bGFyXFxfbW9kYWwuanMiLCJsaWJcXGVzc2VudGlhbFxcanNcXGFuZ3VsYXJcXF9uZXN0YWJsZS5qcyIsImxpYlxcZXNzZW50aWFsXFxqc1xcYW5ndWxhclxcX3BhbmVsLWNvbGxhcHNlLmpzIiwibGliXFxlc3NlbnRpYWxcXGpzXFxhbmd1bGFyXFxfc2VsZWN0Mi5qcyIsImxpYlxcZXNzZW50aWFsXFxqc1xcYW5ndWxhclxcX3NlbGVjdHBpY2tlci5qcyIsImxpYlxcZXNzZW50aWFsXFxqc1xcYW5ndWxhclxcX3NsaWRlci5qcyIsImxpYlxcZXNzZW50aWFsXFxqc1xcYW5ndWxhclxcX3N1bW1lcm5vdGUuanMiLCJsaWJcXGVzc2VudGlhbFxcanNcXGFuZ3VsYXJcXF90YWJsZXMuanMiLCJsaWJcXGVzc2VudGlhbFxcanNcXGFuZ3VsYXJcXF90YWJzLmpzIiwibGliXFxlc3NlbnRpYWxcXGpzXFxhbmd1bGFyXFxfdG91Y2hzcGluLmpzIiwibGliXFxlc3NlbnRpYWxcXGpzXFxhbmd1bGFyXFxfdHJlZS5qcyIsImxpYlxcZXNzZW50aWFsXFxqc1xcYW5ndWxhclxcX3dpemFyZC5qcyIsImxpYlxcZXNzZW50aWFsXFxqc1xcYW5ndWxhclxcbWFpbi5qcyIsImxpYlxcbGF5b3V0XFxqc1xcYW5ndWxhclxcX2dyaWRhbGljaW91cy5qcyIsImxpYlxcbGF5b3V0XFxqc1xcYW5ndWxhclxcX2lzb3RvcGUuanMiLCJsaWJcXGxheW91dFxcanNcXGFuZ3VsYXJcXF9wYXJhbGxheC5qcyIsImxpYlxcbGF5b3V0XFxqc1xcYW5ndWxhclxcX3Njcm9sbGFibGUuanMiLCJsaWJcXGxheW91dFxcanNcXGFuZ3VsYXJcXF9zaWRlYmFyLXBjLmpzIiwibGliXFxsYXlvdXRcXGpzXFxhbmd1bGFyXFxtYWluLmpzIiwibGliXFxtYXBzXFxqc1xcYW5ndWxhclxcX2dvb2dsZS1tYXBzLmpzIiwibGliXFxtYXRlcmlhbFxcanNcXGFuZ3VsYXJcXF9mb3Jtcy5qcyIsImxpYlxcbWF0ZXJpYWxcXGpzXFxhbmd1bGFyXFxfcmlwcGxlLmpzIiwibGliXFxtYXRlcmlhbFxcanNcXGFuZ3VsYXJcXG1haW4uanMiLCJsaWJcXG1lZGlhXFxqc1xcYW5ndWxhclxcX293bC5qcyIsImxpYlxcbWVkaWFcXGpzXFxhbmd1bGFyXFxfc2xpY2suanMiLCJsaWJcXG1lZGlhXFxqc1xcYW5ndWxhclxcbWFpbi5qcyIsImxpYlxcc2lkZWJhclxcanNcXGFuZ3VsYXJcXF9zaWRlYmFyLWNvbGxhcHNlLmpzIiwibGliXFxzaWRlYmFyXFxqc1xcYW5ndWxhclxcX3NpZGViYXItZHJvcGRvd24uanMiLCJsaWJcXHNpZGViYXJcXGpzXFxhbmd1bGFyXFxfc2lkZWJhci10b2dnbGUtYmFyLmpzIiwibGliXFxzaWRlYmFyXFxqc1xcYW5ndWxhclxcbWFpbi5qcyIsInNyY1xcanNcXHRoZW1lc1xcYW5ndWxhclxcYW5ndWxhclxcYXBwLmpzIiwic3JjXFxqc1xcdGhlbWVzXFxhbmd1bGFyXFxhbmd1bGFyXFxjb250cm9sbGVyc1xcYXBwLWN0cmwuanMiLCJzcmNcXGpzXFx0aGVtZXNcXGFuZ3VsYXJcXGFuZ3VsYXJcXGNvbnRyb2xsZXJzXFxob21lLWN0cmwuanMiLCJzcmNcXGpzXFx0aGVtZXNcXGFuZ3VsYXJcXGFuZ3VsYXJcXGRpcmVjdGl2ZXNcXGNvdW50ZG93bi5qcyIsInNyY1xcanNcXHRoZW1lc1xcYW5ndWxhclxcYW5ndWxhclxcZGlyZWN0aXZlc1xcY3VycmljdWx1bS5qcyIsInNyY1xcanNcXHRoZW1lc1xcYW5ndWxhclxcYW5ndWxhclxcZGlyZWN0aXZlc1xcZmxvdGNoYXJ0LWVhcm5pbmdzLmpzIiwic3JjXFxqc1xcdGhlbWVzXFxhbmd1bGFyXFxhbmd1bGFyXFxkaXJlY3RpdmVzXFxuYXZiYXItdHJhbnNpdGlvbi1zY3JvbGwuanMiLCJzcmNcXGpzXFx0aGVtZXNcXGFuZ3VsYXJcXGFuZ3VsYXJcXHJvdXRlclxcYXBwLXJvdXRlci5qcyIsInNyY1xcanNcXHRoZW1lc1xcYW5ndWxhclxcYW5ndWxhclxccm91dGVyXFxibG9nLXJvdXRlci5qcyIsInNyY1xcanNcXHRoZW1lc1xcYW5ndWxhclxcYW5ndWxhclxccm91dGVyXFxjb3Vyc2Utcm91dGVyLmpzIiwic3JjXFxqc1xcdGhlbWVzXFxhbmd1bGFyXFxhbmd1bGFyXFxyb3V0ZXJcXGZvcnVtLXJvdXRlci5qcyIsInNyY1xcanNcXHRoZW1lc1xcYW5ndWxhclxcYW5ndWxhclxccm91dGVyXFxob21lLXJvdXRlci5qcyIsInNyY1xcanNcXHRoZW1lc1xcYW5ndWxhclxcYW5ndWxhclxccm91dGVyXFxpbnN0cnVjdG9yLXJvdXRlci5qcyIsInNyY1xcanNcXHRoZW1lc1xcYW5ndWxhclxcYW5ndWxhclxccm91dGVyXFxzdHVkZW50LXJvdXRlci5qcyIsInNyY1xcanNcXHRoZW1lc1xcYW5ndWxhclxcYW5ndWxhclxccm91dGVyXFx3ZWJzaXRlLXR1dG9yLXJvdXRlci5qcyIsInNyY1xcanNcXHRoZW1lc1xcaHRtbFxcX2NvdW50ZG93bi5qcyIsInNyY1xcanNcXHRoZW1lc1xcaHRtbFxcX2N1cnJpY3VsdW0uanMiLCJzcmNcXGpzXFx0aGVtZXNcXGh0bWxcXF9mbG90Y2hhcnQtZWFybmluZ3MuanMiLCJzcmNcXGpzXFx0aGVtZXNcXGh0bWxcXF9zY3JvbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxR0E7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBDdXJyaWN1bHVtXG5yZXF1aXJlKCcuLi9odG1sL19jdXJyaWN1bHVtJyk7XG5cbi8vIFNjcm9sbGluZyBiZWhhdmlvdXJcbnJlcXVpcmUoJy4uL2h0bWwvX3Njcm9sbCcpO1xuXG4vLyBRdWl6IHRpbWVyXG5yZXF1aXJlKCcuLi9odG1sL19jb3VudGRvd24nKTtcblxuLy8gRWFybmluZ3MgY2hhcnRcbnJlcXVpcmUoJy4uL2h0bWwvX2Zsb3RjaGFydC1lYXJuaW5ncycpO1xuXG4vLyBBbmd1bGFyIEFwcFxucmVxdWlyZSgnLi9hbmd1bGFyL2FwcCcpO1xuXG4vLyBMaWJyYXJ5IERpcmVjdGl2ZXNcbnJlcXVpcmUoJ2Vzc2VudGlhbC9qcy9hbmd1bGFyL21haW4nKTtcbnJlcXVpcmUoJ2xheW91dC9qcy9hbmd1bGFyL21haW4nKTtcbnJlcXVpcmUoJ3NpZGViYXIvanMvYW5ndWxhci9tYWluJyk7XG5yZXF1aXJlKCdtYXBzL2pzL2FuZ3VsYXIvX2dvb2dsZS1tYXBzJyk7XG5yZXF1aXJlKCdtZWRpYS9qcy9hbmd1bGFyL21haW4nKTtcbnJlcXVpcmUoJ21hdGVyaWFsL2pzL2FuZ3VsYXIvbWFpbicpO1xuXG4vLyBDdXN0b20gRGlyZWN0aXZlc1xucmVxdWlyZSgnLi9hbmd1bGFyL2RpcmVjdGl2ZXMvbmF2YmFyLXRyYW5zaXRpb24tc2Nyb2xsJyk7XG5yZXF1aXJlKCcuL2FuZ3VsYXIvZGlyZWN0aXZlcy9jb3VudGRvd24nKTtcbnJlcXVpcmUoJy4vYW5ndWxhci9kaXJlY3RpdmVzL2N1cnJpY3VsdW0nKTtcbnJlcXVpcmUoJy4vYW5ndWxhci9kaXJlY3RpdmVzL2Zsb3RjaGFydC1lYXJuaW5ncycpO1xuXG4vKlxuICogQmVsb3cgaXMgd2hhdCB3ZSBuZWVkIHRvIG1vZGlmeSBtb3N0IG9mdGVuXG4gKi9cbi8vIFJvdXRlciBjb25maWdcbnJlcXVpcmUoJy4vYW5ndWxhci9yb3V0ZXIvYXBwLXJvdXRlcicpO1xucmVxdWlyZSgnLi9hbmd1bGFyL3JvdXRlci9ob21lLXJvdXRlcicpO1xucmVxdWlyZSgnLi9hbmd1bGFyL3JvdXRlci9zdHVkZW50LXJvdXRlcicpO1xucmVxdWlyZSgnLi9hbmd1bGFyL3JvdXRlci9pbnN0cnVjdG9yLXJvdXRlcicpO1xucmVxdWlyZSgnLi9hbmd1bGFyL3JvdXRlci93ZWJzaXRlLXR1dG9yLXJvdXRlcicpO1xucmVxdWlyZSgnLi9hbmd1bGFyL3JvdXRlci9jb3Vyc2Utcm91dGVyJyk7XG5yZXF1aXJlKCcuL2FuZ3VsYXIvcm91dGVyL2ZvcnVtLXJvdXRlcicpO1xucmVxdWlyZSgnLi9hbmd1bGFyL3JvdXRlci9ibG9nLXJvdXRlcicpO1xuXG4vLyBDdXN0b21lciBDb250cm9sbGVyc1xucmVxdWlyZSgnLi9hbmd1bGFyL2NvbnRyb2xsZXJzL2FwcC1jdHJsJyk7XG5yZXF1aXJlKCcuL2FuZ3VsYXIvY29udHJvbGxlcnMvaG9tZS1jdHJsJyk7XG5cbiIsInZhciBza2luID0gcmVxdWlyZSgnLi4vbGliL19za2luJykoKTtcblxudmFyIGNoYXJ0cyA9XG57XG4gICAgLy8gdXRpbGl0eSBjbGFzc1xuICAgIHV0aWxpdHk6IHtcbiAgICAgICAgY2hhcnRDb2xvcnM6IFsgY29uZmlnLnNraW5zWyBza2luIF1bICdwcmltYXJ5LWNvbG9yJyBdLCBjb2xvcnNbICdkZWZhdWx0LWNvbG9yJyBdLCBjb2xvcnNbICdkYW5nZXItY29sb3InIF0sIGNvbG9yc1sgJ3N1Y2Nlc3MtY29sb3InIF0sIGNvbG9yc1sgJ3dhcm5pbmctY29sb3InIF0gXSxcbiAgICAgICAgY2hhcnRCYWNrZ3JvdW5kQ29sb3JzOiBbIFwicmdiYSgyNTUsMjU1LDI1NSwwKVwiLCBcInJnYmEoMjU1LDI1NSwyNTUsMClcIiBdLFxuXG4gICAgICAgIGFwcGx5U3R5bGU6IGZ1bmN0aW9uICh0aGF0KSB7XG4gICAgICAgICAgICB0aGF0Lm9wdGlvbnMuY29sb3JzID0gY2hhcnRzLnV0aWxpdHkuY2hhcnRDb2xvcnM7XG4gICAgICAgICAgICB0aGF0Lm9wdGlvbnMuZ3JpZC5iYWNrZ3JvdW5kQ29sb3IgPSB7IGNvbG9yczogY2hhcnRzLnV0aWxpdHkuY2hhcnRCYWNrZ3JvdW5kQ29sb3JzIH07XG4gICAgICAgICAgICB0aGF0Lm9wdGlvbnMuZ3JpZC5ib3JkZXJDb2xvciA9IGNoYXJ0cy51dGlsaXR5LmNoYXJ0Q29sb3JzWyAwIF07XG4gICAgICAgICAgICB0aGF0Lm9wdGlvbnMuZ3JpZC5jb2xvciA9IGNoYXJ0cy51dGlsaXR5LmNoYXJ0Q29sb3JzWyAwIF07XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gZ2VuZXJhdGUgcmFuZG9tIG51bWJlciBmb3IgY2hhcnRzXG4gICAgICAgIHJhbmROdW06IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEgKyA0MCAtIDIwKSkgKSArIDIwO1xuICAgICAgICB9XG4gICAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNoYXJ0czsiLCJtb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNraW4gPSAkLmNvb2tpZSgnc2tpbicpO1xuXG4gICAgaWYgKHR5cGVvZiBza2luID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNraW4gPSAnZGVmYXVsdCc7XG4gICAgfVxuICAgIHJldHVybiBza2luO1xufSk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gICAgICAgIC5kaXJlY3RpdmUoJ2Nhcm91c2VsJywgWyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXN0cmljdDogJ0MnLFxyXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLnRrQ2Fyb3VzZWwoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IF0pO1xyXG5cclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgICAgICAgLmRpcmVjdGl2ZSgndG9nZ2xlJywgWyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXN0cmljdDogJ0EnLFxyXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCwgYXR0cnMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJzLnRvZ2dsZSA9PSAnY2hlY2stYWxsJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC50a0NoZWNrQWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IF0pO1xyXG5cclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgICAgICAgLmRpcmVjdGl2ZSgndG9nZ2xlJywgWyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXN0cmljdDogJ0EnLFxyXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCwgYXR0cnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cnMudG9nZ2xlID09ICdjb2xsYXBzZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWwudGtDb2xsYXBzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IF0pO1xyXG5cclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgICAgICAgLmRpcmVjdGl2ZSgnY292ZXInLCBbICckdGltZW91dCcsIGZ1bmN0aW9uICgkdGltZW91dCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6ICdDJyxcclxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnRrQ292ZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAyMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gXSk7XHJcblxyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICBhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAgICAgICAuZGlyZWN0aXZlKCdkYXRlcGlja2VyJywgWyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXN0cmljdDogJ0MnLFxyXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLnRrRGF0ZVBpY2tlcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gXSk7XHJcblxyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICBhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAgICAgICAuZGlyZWN0aXZlKCdkYXRlcmFuZ2VwaWNrZXJSZXBvcnQnLCBbIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnQycsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwudGtEYXRlcmFuZ2VwaWNrZXJSZXBvcnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IF0pXHJcbiAgICAgICAgLmRpcmVjdGl2ZSgnZGF0ZXJhbmdlcGlja2VyUmVzZXJ2YXRpb24nLCBbIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnQycsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwudGtEYXRlcmFuZ2VwaWNrZXJSZXNlcnZhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gXSk7XHJcblxyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICBhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAgICAgICAuZGlyZWN0aXZlKCdleHBhbmRhYmxlJywgWyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXN0cmljdDogJ0MnLFxyXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLnRrRXhwYW5kYWJsZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gXSk7XHJcblxyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICBhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAgICAgICAuZGlyZWN0aXZlKCdtaW5pY29sb3JzJywgWyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXN0cmljdDogJ0MnLFxyXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLnRrTWluaUNvbG9ycygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gXSk7XHJcblxyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICBhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAgICAgICAuZGlyZWN0aXZlKCd0b2dnbGUnLCBbIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsLCBhdHRycykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cnMudG9nZ2xlID09ICdtb2RhbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWwudGtNb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cnMudG9nZ2xlID09ICd0ay1tb2RhbC1kZW1vJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC50a01vZGFsRGVtbygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBdKTtcclxuXHJcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gICAgICAgIC5kaXJlY3RpdmUoJ25lc3RhYmxlJywgWyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXN0cmljdDogJ0MnLFxyXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLnRrTmVzdGFibGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IF0pO1xyXG5cclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgdmFyIHJhbmRvbUlkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8qKiBAcmV0dXJuIFN0cmluZyAqL1xyXG4gICAgICAgIHZhciBTNCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuICgoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApIHwgMCkudG9TdHJpbmcoMTYpLnN1YnN0cmluZygxKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiAoUzQoKSArIFM0KCkgKyBcIi1cIiArIFM0KCkgKyBcIi1cIiArIFM0KCkgKyBcIi1cIiArIFM0KCkgKyBcIi1cIiArIFM0KCkgKyBTNCgpICsgUzQoKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gICAgICAgIC5kaXJlY3RpdmUoJ3RvZ2dsZScsIFsgJyRjb21waWxlJywgZnVuY3Rpb24gKCRjb21waWxlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXN0cmljdDogJ0EnLFxyXG4gICAgICAgICAgICAgICAgcHJpb3JpdHk6IDEwMCxcclxuICAgICAgICAgICAgICAgIGNvbXBpbGU6IGZ1bmN0aW9uIChlbCwgYXR0cnMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJzLnRvZ2dsZSAhPT0gJ3BhbmVsLWNvbGxhcHNlJykgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgYm9keSA9IGFuZ3VsYXIuZWxlbWVudCgnLnBhbmVsLWJvZHknLCBlbCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkID0gYm9keS5hdHRyKCdpZCcpIHx8IHJhbmRvbUlkKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlID0gYW5ndWxhci5lbGVtZW50KCc8ZGl2Lz4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2lkJywgaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnY29sbGFwc2UnICsgKGVsLmRhdGEoJ29wZW4nKSA/ICcgaW4nIDogJycpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKGJvZHkuY2xvbmUoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVsLmFwcGVuZChjb2xsYXBzZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoJy5wYW5lbC1jb2xsYXBzZS10cmlnZ2VyJywgZWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXRvZ2dsZScsICdjb2xsYXBzZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXRhcmdldCcsICcjJyArIGlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29sbGFwc2Uoe3RyaWdnZXI6IGZhbHNlfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoc2NvcGUsIGVsLCBhdHRycykge1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gXSk7XHJcblxyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICBhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAgICAgICAuZGlyZWN0aXZlKCd0b2dnbGUnLCBbIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsLCBhdHRycykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRycy50b2dnbGUgPT0gJ3NlbGVjdDInIHx8IGF0dHJzLnRvZ2dsZSA9PSAnc2VsZWN0Mi10YWdzJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC50a1NlbGVjdDIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBdKTtcclxuXHJcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gICAgICAgIC5kaXJlY3RpdmUoJ3NlbGVjdHBpY2tlcicsIFsgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6ICdDJyxcclxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbC50a1NlbGVjdFBpY2tlcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gXSk7XHJcblxyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICBhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAgICAgICAuZGlyZWN0aXZlKCdzbGlkZXInLCBbIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsLCBhdHRycykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cnMuc2xpZGVyID09ICdkZWZhdWx0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC50a1NsaWRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJzLnNsaWRlciA9PSAnZm9ybWF0dGVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC50a1NsaWRlckZvcm1hdHRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBdKTtcclxuXHJcbiAgICBhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAgICAgICAuZGlyZWN0aXZlKCdvblNsaWRlJywgWyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXN0cmljdDogJ0EnLFxyXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCwgYXR0cnMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZWwudGtTbGlkZXJVcGRhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBdKTtcclxuXHJcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gICAgICAgIC5kaXJlY3RpdmUoJ3N1bW1lcm5vdGUnLCBbIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnQycsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwudGtTdW1tZXJub3RlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBdKTtcclxuXHJcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gICAgICAgIC5kaXJlY3RpdmUoJ3RvZ2dsZScsIFsgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6ICdBJyxcclxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwsIGF0dHJzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRycy50b2dnbGUgPT0gJ2RhdGEtdGFibGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnRrRGF0YVRhYmxlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IF0pO1xyXG5cclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgICAgICAgLmRpcmVjdGl2ZSgndG9nZ2xlJywgWyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXN0cmljdDogJ0EnLFxyXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCwgYXR0cnMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJzLnRvZ2dsZSA9PSAndGFiJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IF0pO1xyXG5cclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgICAgICAgLmRpcmVjdGl2ZSgndG9nZ2xlJywgWyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXN0cmljdDogJ0EnLFxyXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCwgYXR0cnMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJzLnRvZ2dsZSA9PSAndG91Y2gtc3BpbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWwudGtUb3VjaFNwaW4oKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gXSk7XHJcblxyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICBhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAgICAgICAuZGlyZWN0aXZlKCd0b2dnbGUnLCBbIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsLCBhdHRycykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cnMudG9nZ2xlID09ICd0cmVlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC50a0ZhbmN5VHJlZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBdKTtcclxuXHJcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gICAgICAgIC5kaXJlY3RpdmUoJ3RvZ2dsZScsIFsgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6ICdBJyxcclxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwsIGF0dHJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJzLnRvZ2dsZSA9PSAnd2l6YXJkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC50a1dpemFyZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IF0pO1xyXG5cclxufSkoKTsiLCJyZXF1aXJlKCcuL19wYW5lbC1jb2xsYXBzZScpO1xucmVxdWlyZSgnLi9fY2Fyb3VzZWwnKTtcbnJlcXVpcmUoJy4vX2NoZWNrLWFsbCcpO1xucmVxdWlyZSgnLi9fY29sbGFwc2UnKTtcbnJlcXVpcmUoJy4vX2NvdmVyJyk7XG5yZXF1aXJlKCcuL19kYXRlcGlja2VyJyk7XG5yZXF1aXJlKCcuL19kYXRlcmFuZ2VwaWNrZXInKTtcbnJlcXVpcmUoJy4vX2V4cGFuZGFibGUnKTtcbnJlcXVpcmUoJy4vX21pbmljb2xvcnMnKTtcbnJlcXVpcmUoJy4vX21vZGFsJyk7XG5yZXF1aXJlKCcuL19uZXN0YWJsZScpO1xucmVxdWlyZSgnLi9fc2VsZWN0MicpO1xucmVxdWlyZSgnLi9fc2VsZWN0cGlja2VyJyk7XG5yZXF1aXJlKCcuL19zbGlkZXInKTtcbnJlcXVpcmUoJy4vX3N1bW1lcm5vdGUnKTtcbnJlcXVpcmUoJy4vX3RvdWNoc3BpbicpO1xucmVxdWlyZSgnLi9fdGFibGVzJyk7XG5yZXF1aXJlKCcuL190YWJzJyk7XG5yZXF1aXJlKCcuL190cmVlJyk7XG5yZXF1aXJlKCcuL193aXphcmQnKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgICAgICAgLmRpcmVjdGl2ZSgndG9nZ2xlJywgWyAnJHRpbWVvdXQnLCBmdW5jdGlvbiAoJHRpbWVvdXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsLCBhdHRycykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRycy50b2dnbGUgPT0gJ2dyaWRhbGljaW91cycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnRrR3JpZGFsaWNpb3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gXSk7XHJcblxyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICBhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAgICAgICAuZGlyZWN0aXZlKCd0b2dnbGUnLCBbICckdGltZW91dCcsIGZ1bmN0aW9uICgkdGltZW91dCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6ICdBJyxcclxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwsIGF0dHJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJzLnRvZ2dsZSA9PSAnaXNvdG9wZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnRrSXNvdG9wZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IF0pO1xyXG5cclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgICAgICAgLmRpcmVjdGl2ZSgncGFyYWxsYXgnLCBbIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnQycsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwudGtQYXJhbGxheCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gXSk7XHJcblxyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICBhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAgICAgICAuZGlyZWN0aXZlKCdzY3JvbGxhYmxlJywgWyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXN0cmljdDogJ0EnLFxyXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLnRrU2Nyb2xsYWJsZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gXSlcclxuICAgICAgICAuZGlyZWN0aXZlKCdzY3JvbGxhYmxlSCcsIFsgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6ICdBJyxcclxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbC50a1Njcm9sbGFibGUoeyBob3Jpem9udGFsOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gXSk7XHJcblxyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICBhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAgICAgICAuZGlyZWN0aXZlKCd0b2dnbGUnLCBbIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsLCBhdHRycykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRycy50b2dnbGUgPT0gJ3NpZGViYXItc2l6ZS1wYy1kZW1vJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC50a1NpZGViYXJTaXplUGNEZW1vKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gXSk7XHJcblxyXG59KSgpOyIsInJlcXVpcmUoJy4vX3Njcm9sbGFibGUnKTtcbnJlcXVpcmUoJy4vX2lzb3RvcGUnKTtcbnJlcXVpcmUoJy4vX3BhcmFsbGF4Jyk7XG5yZXF1aXJlKCcuL19ncmlkYWxpY2lvdXMnKTtcbnJlcXVpcmUoJy4vX3NpZGViYXItcGMnKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgICAgICAgLmRpcmVjdGl2ZSgndG9nZ2xlJywgWyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXN0cmljdDogJ0EnLFxyXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCwgYXR0cnMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJzLnRvZ2dsZSAhPT0gJ2dvb2dsZS1tYXBzJykgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBlbC50a0dvb2dsZU1hcCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gXSk7XHJcblxyXG59KSgpOyIsIihmdW5jdGlvbiAoJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgICAgICAgLmRpcmVjdGl2ZSgnZm9ybUNvbnRyb2xNYXRlcmlhbCcsIFsgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6ICdDJyxcclxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbC5maW5kKCcuZm9ybS1jb250cm9sJykudGtGb3JtQ29udHJvbE1hdGVyaWFsKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBdKTtcclxuXHJcbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIHZhciByaXBwbGUgPSBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgICAgICB2YXIgZWwsIGluaywgZCwgeCwgeTtcclxuXHJcbiAgICAgICAgZWwgPSBhbmd1bGFyLmVsZW1lbnQodGhpcyk7XHJcblxyXG4gICAgICAgIGVsLmFkZENsYXNzKCdyaXBwbGUnKTtcclxuXHJcbiAgICAgICAgaWYgKGVsLnBhcmVudHMoJy5zaWRlYmFyLXNraW4td2hpdGUnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ3JpcHBsZS1kYXJrLWZhZGUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlbC5wYXJlbnRzKCcuc2lkZWJhci1za2luLWRhcmsnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ3JpcHBsZS1saWdodC1mYWRlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZWwuaXMoJy5idG4td2hpdGUnKSkge1xyXG4gICAgICAgICAgICBlbC5hZGRDbGFzcygncmlwcGxlLWRhcmstZmFkZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGVsLmF0dHIoJ2hyZWYnKSAmJiAhIGVsLmRhdGEoJ3RvZ2dsZScpKSB7XHJcblxyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uID0gZWwuYXR0cignaHJlZicpO1xyXG4gICAgICAgICAgICB9LCA0MDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIC5pbmsgZWxlbWVudCBpZiBpdCBkb2Vzbid0IGV4aXN0XHJcbiAgICAgICAgaWYgKGVsLmZpbmQoXCIuaW5rXCIpLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgZWwucHJlcGVuZChcIjxzcGFuIGNsYXNzPSdpbmsnPjwvc3Bhbj5cIik7XHJcblxyXG4gICAgICAgIGluayA9IGVsLmZpbmQoXCIuaW5rXCIpO1xyXG4gICAgICAgIC8vIGluIGNhc2Ugb2YgcXVpY2sgZG91YmxlIGNsaWNrcyBzdG9wIHRoZSBwcmV2aW91cyBhbmltYXRpb25cclxuICAgICAgICBpbmsucmVtb3ZlQ2xhc3MoXCJhbmltYXRlXCIpO1xyXG5cclxuICAgICAgICAvLyBzZXQgc2l6ZSBvZiAuaW5rXHJcbiAgICAgICAgaWYgKCEgaW5rLmhlaWdodCgpICYmICEgaW5rLndpZHRoKCkpIHtcclxuICAgICAgICAgICAgLy8gdXNlIGVsJ3Mgd2lkdGggb3IgaGVpZ2h0IHdoaWNoZXZlciBpcyBsYXJnZXIgZm9yIHRoZSBkaWFtZXRlciB0byBtYWtlIGEgY2lyY2xlIHdoaWNoIGNhbiBjb3ZlciB0aGUgZW50aXJlIGVsZW1lbnQuXHJcbiAgICAgICAgICAgIGQgPSBNYXRoLm1heChlbC5vdXRlcldpZHRoKCksIGVsLm91dGVySGVpZ2h0KCkpO1xyXG4gICAgICAgICAgICBpbmsuY3NzKHtoZWlnaHQ6IGQsIHdpZHRoOiBkfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBnZXQgY2xpY2sgY29vcmRpbmF0ZXNcclxuICAgICAgICAvLyBsb2dpYyA9IGNsaWNrIGNvb3JkaW5hdGVzIHJlbGF0aXZlIHRvIHBhZ2UgLSBlbCdzIHBvc2l0aW9uIHJlbGF0aXZlIHRvIHBhZ2UgLSBoYWxmIG9mIHNlbGYgaGVpZ2h0L3dpZHRoIHRvIG1ha2UgaXQgY29udHJvbGxhYmxlIGZyb20gdGhlIGNlbnRlcjtcclxuICAgICAgICB4ID0gZS5wYWdlWCAtIGVsLm9mZnNldCgpLmxlZnQgLSBpbmsud2lkdGgoKSAvIDI7XHJcbiAgICAgICAgeSA9IGUucGFnZVkgLSBlbC5vZmZzZXQoKS50b3AgLSBpbmsuaGVpZ2h0KCkgLyAyO1xyXG5cclxuICAgICAgICAvLyBzZXQgdGhlIHBvc2l0aW9uIGFuZCBhZGQgY2xhc3MgLmFuaW1hdGVcclxuICAgICAgICBpbmsuY3NzKHt0b3A6IHkgKyAncHgnLCBsZWZ0OiB4ICsgJ3B4J30pLmFkZENsYXNzKFwiYW5pbWF0ZVwiKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gICAgICAgIC5kaXJlY3RpdmUoJ3VpU3JlZicsIFsgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6ICdBJyxcclxuICAgICAgICAgICAgICAgIHByaW9yaXR5OiA5OTksXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsWyAwIF0ubm9kZU5hbWUgPT0gJ0EnIHx8IGVsWyAwIF0ubm9kZU5hbWUgPT0gJ0JVVFRPTicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWwuY2xpY2socmlwcGxlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBdKVxyXG4gICAgICAgIC5kaXJlY3RpdmUoJ2J0bicsIFsgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6ICdDJyxcclxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbC5jbGljayhyaXBwbGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gXSlcclxuICAgICAgICAuZGlyZWN0aXZlKCdzaWRlYmFyTWVudScsIFsgJyR0aW1lb3V0JywgZnVuY3Rpb24gKCR0aW1lb3V0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXN0cmljdDogJ0MnLFxyXG4gICAgICAgICAgICAgICAgcHJpb3JpdHk6IDk5OSxcclxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLmZpbmQoJz5saT5hJykuY2xpY2socmlwcGxlKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IF0pXHJcbiAgICAgICAgLmRpcmVjdGl2ZSgnbmF2YmFyTmF2JywgWyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXN0cmljdDogJ0MnLFxyXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLmZpbmQoJz5saT5hJykuY2xpY2socmlwcGxlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IF0pXHJcbiAgICAgICAgLmRpcmVjdGl2ZSgnZHJvcGRvd25NZW51JywgWyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXN0cmljdDogJ0MnLFxyXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLmZpbmQoJz5saT5hJykuY2xpY2socmlwcGxlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IF0pO1xyXG5cclxufSkoKTsiLCJyZXF1aXJlKCcuL19yaXBwbGUnKTtcbnJlcXVpcmUoJy4vX2Zvcm1zJyk7IiwiKGZ1bmN0aW9uICgpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuICAgICAgICAuZGlyZWN0aXZlKCdvd2xCYXNpYycsIFsgJyR0aW1lb3V0JywgZnVuY3Rpb24gKCR0aW1lb3V0KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnQycsXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCkge1xuICAgICAgICAgICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwudGtPd2xEZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBdKVxuICAgICAgICAuZGlyZWN0aXZlKCdvd2xNaXhlZCcsIFsgJyR0aW1lb3V0JywgZnVuY3Rpb24gKCR0aW1lb3V0KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnQycsXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCkge1xuICAgICAgICAgICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwudGtPd2xNaXhlZCgpO1xuICAgICAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gXSlcbiAgICAgICAgLmRpcmVjdGl2ZSgnb3dsUHJldmlldycsIFsgJyR0aW1lb3V0JywgZnVuY3Rpb24gKCR0aW1lb3V0KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnQycsXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCkge1xuICAgICAgICAgICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwudGtPd2xQcmV2aWV3KCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBdKTtcblxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4gICAgICAgIC5kaXJlY3RpdmUoJ3NsaWNrQmFzaWMnLCBbICckdGltZW91dCcsIGZ1bmN0aW9uICgkdGltZW91dCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICByZXN0cmljdDogJ0MnLFxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnRrU2xpY2tEZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBdKTtcblxufSkoKTsiLCJyZXF1aXJlKCcuL19vd2wnKTtcbnJlcXVpcmUoJy4vX3NsaWNrJyk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gICAgICAgIC5kaXJlY3RpdmUoJ3R5cGUnLCBbIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsLCBhdHRycykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoISBlbC5pcygnLnNpZGViYXInKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRycy50eXBlICE9PSAnY29sbGFwc2UnKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVsLnRrU2lkZWJhckNvbGxhcHNlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBdKTtcclxuXHJcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gICAgICAgIC5kaXJlY3RpdmUoJ3R5cGUnLCBbIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsLCBhdHRycykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoISBlbC5pcygnLnNpZGViYXInKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRycy50eXBlICE9PSAnZHJvcGRvd24nKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVsLnRrU2lkZWJhckRyb3Bkb3duKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBdKTtcclxuXHJcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gICAgICAgIC5kaXJlY3RpdmUoJ3RvZ2dsZUJhcicsIFsgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6ICdBJyxcclxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwsIGF0dHJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJzLnRvZ2dsZUJhcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC50a1NpZGViYXJUb2dnbGVCYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBdKTtcclxuXHJcbn0pKCk7IiwicmVxdWlyZSgnLi9fc2lkZWJhci1kcm9wZG93bicpO1xucmVxdWlyZSgnLi9fc2lkZWJhci1jb2xsYXBzZScpO1xucmVxdWlyZSgnLi9fc2lkZWJhci10b2dnbGUtYmFyJyk7IiwiKGZ1bmN0aW9uKCl7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFtcbiAgICAgICAgJ25nUmVzb3VyY2UnLFxuICAgICAgICAnbmdTYW5pdGl6ZScsXG4gICAgICAgICduZ1RvdWNoJyxcbiAgICAgICAgJ3VpLnJvdXRlcicsXG4gICAgICAgICd1aS51dGlscycsXG4gICAgICAgICd1aS5qcSdcbiAgICBdKTtcblxuICAgIHZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJylcbiAgICAgICAgLmNvbmZpZyhcbiAgICAgICAgWyAnJGNvbnRyb2xsZXJQcm92aWRlcicsICckY29tcGlsZVByb3ZpZGVyJywgJyRmaWx0ZXJQcm92aWRlcicsICckcHJvdmlkZScsICckaW50ZXJwb2xhdGVQcm92aWRlcicsXG4gICAgICAgICAgICBmdW5jdGlvbiAoJGNvbnRyb2xsZXJQcm92aWRlciwgJGNvbXBpbGVQcm92aWRlciwgJGZpbHRlclByb3ZpZGVyLCAkcHJvdmlkZSwgJGludGVycG9sYXRlUHJvdmlkZXIpIHtcbiAgICAgICAgICAgICAgICBhcHAuY29udHJvbGxlciA9ICRjb250cm9sbGVyUHJvdmlkZXIucmVnaXN0ZXI7XG4gICAgICAgICAgICAgICAgYXBwLmRpcmVjdGl2ZSA9ICRjb21waWxlUHJvdmlkZXIuZGlyZWN0aXZlO1xuICAgICAgICAgICAgICAgIGFwcC5maWx0ZXIgPSAkZmlsdGVyUHJvdmlkZXIucmVnaXN0ZXI7XG4gICAgICAgICAgICAgICAgYXBwLmZhY3RvcnkgPSAkcHJvdmlkZS5mYWN0b3J5O1xuICAgICAgICAgICAgICAgIGFwcC5zZXJ2aWNlID0gJHByb3ZpZGUuc2VydmljZTtcbiAgICAgICAgICAgICAgICBhcHAuY29uc3RhbnQgPSAkcHJvdmlkZS5jb25zdGFudDtcbiAgICAgICAgICAgICAgICBhcHAudmFsdWUgPSAkcHJvdmlkZS52YWx1ZTtcblxuICAgICAgICAgICAgICAgICRpbnRlcnBvbGF0ZVByb3ZpZGVyLnN0YXJ0U3ltYm9sKCc6OicpO1xuICAgICAgICAgICAgICAgICRpbnRlcnBvbGF0ZVByb3ZpZGVyLmVuZFN5bWJvbCgnOjonKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSk7XG5cbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcpO1xuICBcbiAgYXBwLmNvbnRyb2xsZXIoJ0FwcEN0cmwnLFxuICAgICAgICAgICAgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmFwcCA9IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxDbGFzczogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5Q2xhc3M6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICRzY29wZS4kc3RhdGUgPSAkc3RhdGU7XG5cbiAgICAgICAgICAgIH0gKTtcbiAgXG4gIGFwcC5jb250cm9sbGVyKCduYXZCYXJDdHJsJywgXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS51c2VyID0ge1xuICAgICAgICAgICAgICAgICAgICBcdFx0bmFtZTonQmlsbCBHYXRlczInXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSApO1xuXG59KSgpOyBcbiIsIihmdW5jdGlvbiAoKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnKTtcbiAgXG4gIGFwcC5jb250cm9sbGVyKCdob21lQ3RybCcsICBmdW5jdGlvbiAoJHNjb3BlLCRyb290U2NvcGUpIHtcblx0ICBcdFxuXHRcdFxuICAgICAgfSk7XG5cbn0pKCk7IFxuIiwiKGZ1bmN0aW9uICgpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuICAgICAgICAuZGlyZWN0aXZlKCd0a0NvdW50ZG93bicsIFsgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICByZXN0cmljdDogJ0MnLFxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgZWwudGtDb3VudGRvd24oKTtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuJG9uKFwiJGRlc3Ryb3lcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNvdW50ZG93bigncGF1c2UnKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBdKTtcblxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4gICAgICAgIC5kaXJlY3RpdmUoJ2N1cnJpY3VsdW0nLCBbIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6ICdDJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLnRrQ3VycmljdWx1bSgpO1xuICAgICAgICAgICAgICAgICAgICBlbC5maW5kKCcubGlzdC1ncm91cC1pdGVtJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUuJHN0YXRlLmdvKCQodGhpcykuZGF0YSgndGFyZ2V0JykpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IF0pO1xuXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBhbmd1bGFyLm1vZHVsZSgnYXBwJylcbiAgICAgICAgLmRpcmVjdGl2ZSgndG9nZ2xlJywgWyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCwgYXR0cnMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJzLnRvZ2dsZSA9PSAnZmxvdC1jaGFydC1lYXJuaW5ncycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnRrRmxvdENoYXJ0RWFybmluZ3MoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gXSk7XG5cbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuICAgICAgICAuZGlyZWN0aXZlKCd3aW5kb3dOYXZiYXJUcmFuc2l0aW9uJywgWyAnJHdpbmRvdycsIGZ1bmN0aW9uICgkd2luZG93KSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHNjb3BlLCBlbCkge1xuICAgICAgICAgICAgICAgIGFuZ3VsYXIuZWxlbWVudCgkd2luZG93KS50a1Njcm9sbE5hdmJhclRyYW5zaXRpb24oKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gXSlcbiAgICAgICAgLmRpcmVjdGl2ZSgnc3RDb250ZW50SW5uZXInLCBbIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6ICdDJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLnRrU2Nyb2xsTmF2YmFyVHJhbnNpdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gXSk7XG5cbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnKTtcblxuXHRhcHAucnVuKFsgJyRyb290U2NvcGUnLCAnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsXG5cdFx0XHRmdW5jdGlvbigkcm9vdFNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcykge1xuXHRcdFx0XHQkcm9vdFNjb3BlLiRzdGF0ZSA9ICRzdGF0ZTtcblx0XHRcdFx0JHJvb3RTY29wZS4kc3RhdGVQYXJhbXMgPSAkc3RhdGVQYXJhbXM7XG5cdFx0XHRcdCRyb290U2NvcGUuaHRtbENsYXNzID0ge1xuXHRcdFx0XHRcdFx0d2Vic2l0ZSA6ICd0cmFuc2l0aW9uLW5hdmJhci1zY3JvbGwgdG9wLW5hdmJhci14bGFyZ2UgYm90dG9tLWZvb3RlcicsXG5cdFx0XHRcdFx0XHR3ZWJzaXRlUHJpY2luZyA6ICd0b3AtbmF2YmFyLXhsYXJnZSBib3R0b20tZm9vdGVyIGFwcC1kZXNrdG9wJyxcblx0XHRcdFx0XHRcdHdlYnNpdGVTdXJ2ZXkgOiAndG9wLW5hdmJhci14bGFyZ2UgYm90dG9tLWZvb3RlciBhcHAtZGVza3RvcCBhcHAtbW9iaWxlJyxcblx0XHRcdFx0XHRcdHdlYnNpdGVMb2dpbiA6ICdoaWRlLXNpZGViYXIgbHMtYm90dG9tLWZvb3RlcicsXG5cdFx0XHRcdFx0XHR3ZWJzaXRlVGFrZVF1aXogOiAndHJhbnNpdGlvbi1uYXZiYXItc2Nyb2xsIHRvcC1uYXZiYXIteGxhcmdlIGJvdHRvbS1mb290ZXIgYXBwLWRlc2t0b3AgYXBwLW1vYmlsZScsXG5cdFx0XHRcdFx0XHRhcHBsMyA6ICdzdC1sYXlvdXQgbHMtdG9wLW5hdmJhci1sYXJnZSBscy1ib3R0b20tZm9vdGVyIHNob3ctc2lkZWJhciBzaWRlYmFyLWwzJyxcblx0XHRcdFx0XHRcdGFwcGwxcjMgOiAnc3QtbGF5b3V0IGxzLXRvcC1uYXZiYXItbGFyZ2UgbHMtYm90dG9tLWZvb3RlciBzaG93LXNpZGViYXIgc2lkZWJhci1sMSBzaWRlYmFyLXIzJ1xuXHRcdFx0XHRcdH07XG5cdFx0XHR9IF0pO1xuXHRcblx0YXBwLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG5cblx0XHRcdFx0JHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL3dlYnNpdGUtcGFnZXMvaG9tZScpO1xuXG5cdFx0XHRcdCRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdsb2dpbicsIHtcblx0XHRcdFx0XHR1cmwgOiAnL2xvZ2luJyxcblx0XHRcdFx0XHR0ZW1wbGF0ZVVybCA6ICd3ZWJzaXRlL2xvZ2luLmh0bWwnLFxuXHRcdFx0XHRcdGNvbnRyb2xsZXIgOiBbICckc2NvcGUnLCckcm9vdFNjb3BlJywgZnVuY3Rpb24oJHNjb3BlLCRyb290U2NvcGUpIHtcblx0XHRcdFx0XHRcdCRzY29wZS5hcHAuc2V0dGluZ3MuaHRtbENsYXNzID0gJHJvb3RTY29wZS5odG1sQ2xhc3Mud2Vic2l0ZUxvZ2luO1xuXHRcdFx0XHRcdFx0JHNjb3BlLmFwcC5zZXR0aW5ncy5ib2R5Q2xhc3MgPSAnbG9naW4nO1xuXHRcdFx0XHRcdH0gXVxuXHRcdFx0XHR9KS5zdGF0ZSgnc2lnbi11cCcsIHtcblx0XHRcdFx0XHR1cmwgOiAnL3NpZ24tdXAnLFxuXHRcdFx0XHRcdHRlbXBsYXRlVXJsIDogJ3dlYnNpdGUvc2lnbi11cC5odG1sJyxcblx0XHRcdFx0XHRjb250cm9sbGVyIDogWyAnJHNjb3BlJywnJHJvb3RTY29wZScsIGZ1bmN0aW9uKCRzY29wZSwkcm9vdFNjb3BlKSB7XG5cdFx0XHRcdFx0XHQkc2NvcGUuYXBwLnNldHRpbmdzLmh0bWxDbGFzcyA9ICRyb290U2NvcGUuaHRtbENsYXNzLndlYnNpdGVMb2dpbjtcblx0XHRcdFx0XHRcdCRzY29wZS5hcHAuc2V0dGluZ3MuYm9keUNsYXNzID0gJ2xvZ2luJztcblx0XHRcdFx0XHR9IF1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcpO1xuXG5cdGFwcC5ydW4oWyAnJHJvb3RTY29wZScsICckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJyxcblx0XHRcdGZ1bmN0aW9uKCRyb290U2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zKSB7XG5cdFx0XHRcdCRyb290U2NvcGUuJHN0YXRlID0gJHN0YXRlO1xuXHRcdFx0XHQkcm9vdFNjb3BlLiRzdGF0ZVBhcmFtcyA9ICRzdGF0ZVBhcmFtcztcblx0XHRcdH0gXSk7XG5cblx0YXBwLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG5cdFx0JHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL3dlYnNpdGUtcGFnZXMvaG9tZScpO1xuXHRcdFx0XHQkc3RhdGVQcm92aWRlci5zdGF0ZSgnd2Vic2l0ZS1ibG9nJywge1xuXHRcdFx0XHRcdGFic3RyYWN0IDogdHJ1ZSxcblx0XHRcdFx0XHR1cmwgOiAnL3dlYnNpdGUtYmxvZycsXG5cdFx0XHRcdFx0dGVtcGxhdGUgOiAnPGRpdiB1aS12aWV3IGNsYXNzPVwidWktdmlldy1tYWluXCIgLz4nXG5cdFx0XHRcdH0pLnN0YXRlKCd3ZWJzaXRlLWJsb2cubGlzdGluZycsIHtcblx0XHRcdFx0XHR1cmwgOiAnL2xpc3RpbmcnLFxuXHRcdFx0XHRcdHRlbXBsYXRlVXJsIDogJ3dlYnNpdGUvYmxvZy1saXN0aW5nLmh0bWwnLFxuXHRcdFx0XHRcdGNvbnRyb2xsZXIgOiBbICckc2NvcGUnLCckcm9vdFNjb3BlJywgZnVuY3Rpb24oJHNjb3BlLCRyb290U2NvcGUpIHtcblx0XHRcdFx0XHRcdCRzY29wZS5hcHAuc2V0dGluZ3MuaHRtbENsYXNzID0gJHJvb3RTY29wZS5odG1sQ2xhc3Mud2Vic2l0ZTtcblx0XHRcdFx0XHRcdCRzY29wZS5hcHAuc2V0dGluZ3MuYm9keUNsYXNzID0gJyc7XG5cdFx0XHRcdFx0fSBdXG5cdFx0XHRcdH0pLnN0YXRlKCd3ZWJzaXRlLWJsb2cucG9zdCcsIHtcblx0XHRcdFx0XHR1cmwgOiAnL3Bvc3QnLFxuXHRcdFx0XHRcdHRlbXBsYXRlVXJsIDogJ3dlYnNpdGUvYmxvZy1wb3N0Lmh0bWwnLFxuXHRcdFx0XHRcdGNvbnRyb2xsZXIgOiBbICckc2NvcGUnLCckcm9vdFNjb3BlJywgZnVuY3Rpb24oJHNjb3BlLCRyb290U2NvcGUpIHtcblx0XHRcdFx0XHRcdCRzY29wZS5hcHAuc2V0dGluZ3MuaHRtbENsYXNzID0gJHJvb3RTY29wZS5odG1sQ2xhc3Mud2Vic2l0ZTtcblx0XHRcdFx0XHRcdCRzY29wZS5hcHAuc2V0dGluZ3MuYm9keUNsYXNzID0gJyc7XG5cdFx0XHRcdFx0fSBdXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG59KSgpOyIsIihmdW5jdGlvbigpe1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJyk7XG4gICAgICAgYXBwLmNvbmZpZyhmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuXG4gICAgICAgICAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL3dlYnNpdGUtcGFnZXMvaG9tZScpO1xuXG4gICAgICAgICAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCd3ZWJzaXRlLWNvdXJzZXMnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy93ZWJzaXRlLWNvdXJzZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6ICc8ZGl2IHVpLXZpZXcgY2xhc3M9XCJ1aS12aWV3LW1haW5cIiAvPidcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCd3ZWJzaXRlLWNvdXJzZXMuZ3JpZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9ncmlkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnd2Vic2l0ZS9jb3Vyc2VzLWdyaWQuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBbJyRzY29wZScsJyRyb290U2NvcGUnLCBmdW5jdGlvbigkc2NvcGUsJHJvb3RTY29wZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmFwcC5zZXR0aW5ncy5odG1sQ2xhc3MgPSAkcm9vdFNjb3BlLmh0bWxDbGFzcy53ZWJzaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5hcHAuc2V0dGluZ3MuYm9keUNsYXNzID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuc3RhdGUoJ3dlYnNpdGUtY291cnNlcy5saXN0Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2xpc3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd3ZWJzaXRlL2NvdXJzZXMtbGlzdC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IFsnJHNjb3BlJywnJHJvb3RTY29wZScsIGZ1bmN0aW9uKCRzY29wZSwkcm9vdFNjb3BlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuYXBwLnNldHRpbmdzLmh0bWxDbGFzcyA9ICRyb290U2NvcGUuaHRtbENsYXNzLndlYnNpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmFwcC5zZXR0aW5ncy5ib2R5Q2xhc3MgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnd2Vic2l0ZS1jb3Vyc2VzLnNpbmdsZScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9zaW5nbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd3ZWJzaXRlL2NvdXJzZS5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IFsnJHNjb3BlJywnJHJvb3RTY29wZScsIGZ1bmN0aW9uKCRzY29wZSwkcm9vdFNjb3BlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuYXBwLnNldHRpbmdzLmh0bWxDbGFzcyA9ICRyb290U2NvcGUuaHRtbENsYXNzLndlYnNpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmFwcC5zZXR0aW5ncy5ib2R5Q2xhc3MgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG59KSgpOyIsIihmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJyk7XG5cblx0YXBwLnJ1bihbICckcm9vdFNjb3BlJywgJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLFxuXHRcdFx0ZnVuY3Rpb24oJHJvb3RTY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMpIHtcblx0XHRcdFx0JHJvb3RTY29wZS4kc3RhdGUgPSAkc3RhdGU7XG5cdFx0XHRcdCRyb290U2NvcGUuJHN0YXRlUGFyYW1zID0gJHN0YXRlUGFyYW1zO1xuXHRcdFx0fSBdKTtcblxuXHRhcHAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcblx0XHQkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvd2Vic2l0ZS1wYWdlcy9ob21lJyk7XG5cdFx0XHRcdCRzdGF0ZVByb3ZpZGVyLnN0YXRlKCd3ZWJzaXRlLWZvcnVtJywge1xuXHRcdFx0XHRcdGFic3RyYWN0IDogdHJ1ZSxcblx0XHRcdFx0XHR1cmwgOiAnL3dlYnNpdGUtZm9ydW0nLFxuXHRcdFx0XHRcdHRlbXBsYXRlIDogJzxkaXYgdWktdmlldyBjbGFzcz1cInVpLXZpZXctbWFpblwiIC8+J1xuXHRcdFx0XHR9KS5zdGF0ZSgnd2Vic2l0ZS1mb3J1bS5ob21lJywge1xuXHRcdFx0XHRcdHVybCA6ICcvaG9tZScsXG5cdFx0XHRcdFx0dGVtcGxhdGVVcmwgOiAnd2Vic2l0ZS9mb3J1bS1ob21lLmh0bWwnLFxuXHRcdFx0XHRcdGNvbnRyb2xsZXIgOiBbICckc2NvcGUnLCckcm9vdFNjb3BlJywgZnVuY3Rpb24oJHNjb3BlLCRyb290U2NvcGUpIHtcblx0XHRcdFx0XHRcdCRzY29wZS5hcHAuc2V0dGluZ3MuaHRtbENsYXNzID0gJHJvb3RTY29wZS5odG1sQ2xhc3Mud2Vic2l0ZTtcblx0XHRcdFx0XHRcdCRzY29wZS5hcHAuc2V0dGluZ3MuYm9keUNsYXNzID0gJyc7XG5cdFx0XHRcdFx0fSBdXG5cdFx0XHRcdH0pLnN0YXRlKCd3ZWJzaXRlLWZvcnVtLmNhdGVnb3J5Jywge1xuXHRcdFx0XHRcdHVybCA6ICcvY2F0ZWdvcnknLFxuXHRcdFx0XHRcdHRlbXBsYXRlVXJsIDogJ3dlYnNpdGUvZm9ydW0tY2F0ZWdvcnkuaHRtbCcsXG5cdFx0XHRcdFx0Y29udHJvbGxlciA6IFsgJyRzY29wZScsJyRyb290U2NvcGUnLCBmdW5jdGlvbigkc2NvcGUsJHJvb3RTY29wZSkge1xuXHRcdFx0XHRcdFx0JHNjb3BlLmFwcC5zZXR0aW5ncy5odG1sQ2xhc3MgPSAkcm9vdFNjb3BlLmh0bWxDbGFzcy53ZWJzaXRlO1xuXHRcdFx0XHRcdFx0JHNjb3BlLmFwcC5zZXR0aW5ncy5ib2R5Q2xhc3MgPSAnJztcblx0XHRcdFx0XHR9IF1cblx0XHRcdFx0fSkuc3RhdGUoJ3dlYnNpdGUtZm9ydW0udGhyZWFkJywge1xuXHRcdFx0XHRcdHVybCA6ICcvdGhyZWFkJyxcblx0XHRcdFx0XHR0ZW1wbGF0ZVVybCA6ICd3ZWJzaXRlL2ZvcnVtLXRocmVhZC5odG1sJyxcblx0XHRcdFx0XHRjb250cm9sbGVyIDogWyAnJHNjb3BlJywnJHJvb3RTY29wZScsIGZ1bmN0aW9uKCRzY29wZSwkcm9vdFNjb3BlKSB7XG5cdFx0XHRcdFx0XHQkc2NvcGUuYXBwLnNldHRpbmdzLmh0bWxDbGFzcyA9ICRyb290U2NvcGUuaHRtbENsYXNzLndlYnNpdGU7XG5cdFx0XHRcdFx0XHQkc2NvcGUuYXBwLnNldHRpbmdzLmJvZHlDbGFzcyA9ICcnO1xuXHRcdFx0XHRcdH0gXVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXG59KSgpOyIsIihmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJyk7XG5cblx0YXBwLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwkdXJsUm91dGVyUHJvdmlkZXIpIHtcblx0XHQkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvd2Vic2l0ZS1wYWdlcy9ob21lJyk7XG5cdFx0XHRcdCRzdGF0ZVByb3ZpZGVyXG5cdFx0XHRcdFx0XHQuc3RhdGUoJ3dlYnNpdGUtcGFnZXMnLCB7XG5cdFx0XHRcdFx0XHRcdGFic3RyYWN0IDogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0dXJsIDogJy93ZWJzaXRlLXBhZ2VzJyxcblx0XHRcdFx0XHRcdFx0dGVtcGxhdGUgOiAnPGRpdiB1aS12aWV3IGNsYXNzPVwidWktdmlldy1tYWluXCIgLz4nXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0LnN0YXRlKCd3ZWJzaXRlLXBhZ2VzLmhvbWUnLCB7XG5cdFx0XHRcdFx0XHRcdHVybCA6ICcvaG9tZScsXG5cdFx0XHRcdFx0XHRcdHRlbXBsYXRlVXJsIDogJ3dlYnNpdGUvaG9tZS5odG1sJyxcblx0XHRcdFx0XHRcdFx0Y29udHJvbGxlciA6ICdob21lQ3RybCdcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQuc3RhdGUoJ3dlYnNpdGUtcGFnZXMuY29udGFjdCcsXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0dXJsIDogJy9jb250YWN0Jyxcblx0XHRcdFx0XHRcdFx0XHRcdHRlbXBsYXRlVXJsIDogJ3dlYnNpdGUvY29udGFjdC5odG1sJyxcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRyb2xsZXIgOiBbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JyRzY29wZScsJyRyb290U2NvcGUnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZ1bmN0aW9uKCRzY29wZSwgJHJvb3RTY29wZSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0JHNjb3BlLmFwcC5zZXR0aW5ncy5odG1sQ2xhc3MgPSAkcm9vdFNjb3BlLmh0bWxDbGFzcy53ZWJzaXRlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0JHNjb3BlLmFwcC5zZXR0aW5ncy5ib2R5Q2xhc3MgPSAnJztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IF1cblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXG59KSgpOyIsIihmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJyk7XG5cblx0YXBwLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwkdXJsUm91dGVyUHJvdmlkZXIpIHtcblx0XHQkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvd2Vic2l0ZS1wYWdlcy9ob21lJyk7XG5cdFx0ICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAuc3RhdGUoJ2FwcC1pbnN0cnVjdG9yJywge1xuICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgIHVybDogJy9hcHAtaW5zdHJ1Y3RvcicsXG4gICAgICAgICAgICAgdGVtcGxhdGU6ICc8ZGl2IHVpLXZpZXcgY2xhc3M9XCJ1aS12aWV3LW1haW5cIiAvPidcbiAgICAgICAgIH0pXG4gICAgICAgICAuc3RhdGUoJ2FwcC1pbnN0cnVjdG9yLmRhc2hib2FyZCcsIHtcbiAgICAgICAgICAgICB1cmw6ICcvZGFzaGJvYXJkJyxcbiAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9pbnN0cnVjdG9yLWRhc2hib2FyZC5odG1sJyxcbiAgICAgICAgICAgICBjb250cm9sbGVyOiBbJyRzY29wZScsJyRyb290U2NvcGUnLCBmdW5jdGlvbigkc2NvcGUsICRyb290U2NvcGUpe1xuICAgICAgICAgICAgICAgICAkc2NvcGUuYXBwLnNldHRpbmdzLmh0bWxDbGFzcyA9ICRyb290U2NvcGUuaHRtbENsYXNzLmFwcGwzO1xuICAgICAgICAgICAgICAgICAkc2NvcGUuYXBwLnNldHRpbmdzLmJvZHlDbGFzcyA9ICcnO1xuICAgICAgICAgICAgIH1dXG4gICAgICAgICB9KVxuICAgICAgICAgLnN0YXRlKCdhcHAtaW5zdHJ1Y3Rvci5jb3Vyc2VzJywge1xuICAgICAgICAgICAgIHVybDogJy9jb3Vyc2VzJyxcbiAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9pbnN0cnVjdG9yLWNvdXJzZXMuaHRtbCcsXG4gICAgICAgICAgICAgY29udHJvbGxlcjogWyckc2NvcGUnLCckcm9vdFNjb3BlJywgZnVuY3Rpb24oJHNjb3BlLCAkcm9vdFNjb3BlKXtcbiAgICAgICAgICAgICAgICAgJHNjb3BlLmFwcC5zZXR0aW5ncy5odG1sQ2xhc3MgPSAkcm9vdFNjb3BlLmh0bWxDbGFzcy5hcHBsMztcbiAgICAgICAgICAgICAgICAgJHNjb3BlLmFwcC5zZXR0aW5ncy5ib2R5Q2xhc3MgPSAnJztcbiAgICAgICAgICAgICB9XVxuICAgICAgICAgfSlcbiAgICAgICAgIC5zdGF0ZSgnYXBwLWluc3RydWN0b3IuZWRpdC1jb3Vyc2UnLCB7XG4gICAgICAgICAgICAgdXJsOiAnL2VkaXQtY291cnNlJyxcbiAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9pbnN0cnVjdG9yLWVkaXQtY291cnNlLmh0bWwnLFxuICAgICAgICAgICAgIGNvbnRyb2xsZXI6IFsnJHNjb3BlJywnJHJvb3RTY29wZScsIGZ1bmN0aW9uKCRzY29wZSwgJHJvb3RTY29wZSl7XG4gICAgICAgICAgICAgICAgICRzY29wZS5hcHAuc2V0dGluZ3MuaHRtbENsYXNzID0gJHJvb3RTY29wZS5odG1sQ2xhc3MuYXBwbDM7XG4gICAgICAgICAgICAgICAgICRzY29wZS5hcHAuc2V0dGluZ3MuYm9keUNsYXNzID0gJyc7XG4gICAgICAgICAgICAgfV1cbiAgICAgICAgIH0pXG4gICAgICAgICAuc3RhdGUoJ2FwcC1pbnN0cnVjdG9yLmVkaXQtY291cnNlLW1ldGEnLCB7XG4gICAgICAgICAgICAgdXJsOiAnL2VkaXQtY291cnNlLW1ldGEnLFxuICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2luc3RydWN0b3ItZWRpdC1jb3Vyc2UtbWV0YS5odG1sJyxcbiAgICAgICAgICAgICBjb250cm9sbGVyOiBbJyRzY29wZScsJyRyb290U2NvcGUnLCBmdW5jdGlvbigkc2NvcGUsICRyb290U2NvcGUpe1xuICAgICAgICAgICAgICAgICAkc2NvcGUuYXBwLnNldHRpbmdzLmh0bWxDbGFzcyA9ICRyb290U2NvcGUuaHRtbENsYXNzLmFwcGwzO1xuICAgICAgICAgICAgICAgICAkc2NvcGUuYXBwLnNldHRpbmdzLmJvZHlDbGFzcyA9ICcnO1xuICAgICAgICAgICAgIH1dXG4gICAgICAgICB9KVxuICAgICAgICAgLnN0YXRlKCdhcHAtaW5zdHJ1Y3Rvci5lZGl0LWNvdXJzZS1sZXNzb25zJywge1xuICAgICAgICAgICAgIHVybDogJy9lZGl0LWNvdXJzZS1sZXNzb25zJyxcbiAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9pbnN0cnVjdG9yLWVkaXQtY291cnNlLWxlc3NvbnMuaHRtbCcsXG4gICAgICAgICAgICAgY29udHJvbGxlcjogWyckc2NvcGUnLCckcm9vdFNjb3BlJywgZnVuY3Rpb24oJHNjb3BlLCAkcm9vdFNjb3BlKXtcbiAgICAgICAgICAgICAgICAgJHNjb3BlLmFwcC5zZXR0aW5ncy5odG1sQ2xhc3MgPSAkcm9vdFNjb3BlLmh0bWxDbGFzcy5hcHBsMztcbiAgICAgICAgICAgICAgICAgJHNjb3BlLmFwcC5zZXR0aW5ncy5ib2R5Q2xhc3MgPSAnJztcbiAgICAgICAgICAgICB9XVxuICAgICAgICAgfSlcbiAgICAgICAgIC5zdGF0ZSgnYXBwLWluc3RydWN0b3IuZWFybmluZ3MnLCB7XG4gICAgICAgICAgICAgdXJsOiAnL2Vhcm5pbmdzJyxcbiAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9pbnN0cnVjdG9yLWVhcm5pbmdzLmh0bWwnLFxuICAgICAgICAgICAgIGNvbnRyb2xsZXI6IFsnJHNjb3BlJywnJHJvb3RTY29wZScsIGZ1bmN0aW9uKCRzY29wZSwgJHJvb3RTY29wZSl7XG4gICAgICAgICAgICAgICAgICRzY29wZS5hcHAuc2V0dGluZ3MuaHRtbENsYXNzID0gJHJvb3RTY29wZS5odG1sQ2xhc3MuYXBwbDM7XG4gICAgICAgICAgICAgICAgICRzY29wZS5hcHAuc2V0dGluZ3MuYm9keUNsYXNzID0gJyc7XG4gICAgICAgICAgICAgfV1cbiAgICAgICAgIH0pXG4gICAgICAgICAuc3RhdGUoJ2FwcC1pbnN0cnVjdG9yLnN0YXRlbWVudCcsIHtcbiAgICAgICAgICAgICB1cmw6ICcvaW5zdHJ1Y3RvcicsXG4gICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvaW5zdHJ1Y3Rvci1zdGF0ZW1lbnQuaHRtbCcsXG4gICAgICAgICAgICAgY29udHJvbGxlcjogWyckc2NvcGUnLCckcm9vdFNjb3BlJywgZnVuY3Rpb24oJHNjb3BlLCAkcm9vdFNjb3BlKXtcbiAgICAgICAgICAgICAgICAgJHNjb3BlLmFwcC5zZXR0aW5ncy5odG1sQ2xhc3MgPSAkcm9vdFNjb3BlLmh0bWxDbGFzcy5hcHBsMztcbiAgICAgICAgICAgICAgICAgJHNjb3BlLmFwcC5zZXR0aW5ncy5ib2R5Q2xhc3MgPSAnJztcbiAgICAgICAgICAgICB9XVxuICAgICAgICAgfSlcbiAgICAgICAgIC5zdGF0ZSgnYXBwLWluc3RydWN0b3IubWVzc2FnZXMnLCB7XG4gICAgICAgICAgICAgdXJsOiAnL21lc3NhZ2VzJyxcbiAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9pbnN0cnVjdG9yLW1lc3NhZ2VzLmh0bWwnLFxuICAgICAgICAgICAgIGNvbnRyb2xsZXI6IFsnJHNjb3BlJywnJHJvb3RTY29wZScsIGZ1bmN0aW9uKCRzY29wZSwgJHJvb3RTY29wZSl7XG4gICAgICAgICAgICAgICAgICRzY29wZS5hcHAuc2V0dGluZ3MuaHRtbENsYXNzID0gJHJvb3RTY29wZS5odG1sQ2xhc3MuYXBwbDM7XG4gICAgICAgICAgICAgICAgICRzY29wZS5hcHAuc2V0dGluZ3MuYm9keUNsYXNzID0gJyc7XG4gICAgICAgICAgICAgfV1cbiAgICAgICAgIH0pXG4gICAgICAgICAuc3RhdGUoJ2FwcC1pbnN0cnVjdG9yLnByaXZhdGUtcHJvZmlsZScsIHtcbiAgICAgICAgICAgICB1cmw6ICcvcHJpdmF0ZS1wcm9maWxlJyxcbiAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9pbnN0cnVjdG9yLXByaXZhdGUtcHJvZmlsZS5odG1sJyxcbiAgICAgICAgICAgICBjb250cm9sbGVyOiBbJyRzY29wZScsJyRyb290U2NvcGUnLCBmdW5jdGlvbigkc2NvcGUsICRyb290U2NvcGUpe1xuICAgICAgICAgICAgICAgICAkc2NvcGUuYXBwLnNldHRpbmdzLmh0bWxDbGFzcyA9ICRyb290U2NvcGUuaHRtbENsYXNzLmFwcGwzO1xuICAgICAgICAgICAgICAgICAkc2NvcGUuYXBwLnNldHRpbmdzLmJvZHlDbGFzcyA9ICcnO1xuICAgICAgICAgICAgIH1dXG4gICAgICAgICB9KVxuICAgICAgICAgLnN0YXRlKCdhcHAtaW5zdHJ1Y3Rvci5iaWxsaW5nJywge1xuICAgICAgICAgICAgIHVybDogJy9iaWxsaW5nJyxcbiAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9pbnN0cnVjdG9yLWJpbGxpbmcuaHRtbCcsXG4gICAgICAgICAgICAgY29udHJvbGxlcjogWyckc2NvcGUnLCckcm9vdFNjb3BlJywgZnVuY3Rpb24oJHNjb3BlLCAkcm9vdFNjb3BlKXtcbiAgICAgICAgICAgICAgICAgJHNjb3BlLmFwcC5zZXR0aW5ncy5odG1sQ2xhc3MgPSAkcm9vdFNjb3BlLmh0bWxDbGFzcy5hcHBsMztcbiAgICAgICAgICAgICAgICAgJHNjb3BlLmFwcC5zZXR0aW5ncy5ib2R5Q2xhc3MgPSAnJztcbiAgICAgICAgICAgICB9XVxuICAgICAgICAgfSk7XG5cdH0pO1xuXG59KSgpOyIsIihmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJyk7XG5cblx0YXBwLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG5cdFx0JHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL3dlYnNpdGUtcGFnZXMvaG9tZScpO1xuXHRcdCRzdGF0ZVByb3ZpZGVyXG4gICAgICAgIC5zdGF0ZSgnYXBwLXN0dWRlbnQnLCB7XG4gICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICAgIHVybDogJy9hcHAtc3R1ZGVudCcsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJzxkaXYgdWktdmlldyBjbGFzcz1cInVpLXZpZXctbWFpblwiIC8+J1xuICAgICAgICB9KVxuICAgICAgICAuc3RhdGUoJ2FwcC1zdHVkZW50LmRhc2hib2FyZCcsIHtcbiAgICAgICAgICAgIHVybDogJy9kYXNoYm9hcmQnLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvc3R1ZGVudC1kYXNoYm9hcmQuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiBbJyRzY29wZScsJyRyb290U2NvcGUnLCBmdW5jdGlvbigkc2NvcGUsJHJvb3RTY29wZSl7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmFwcC5zZXR0aW5ncy5odG1sQ2xhc3MgPSAkcm9vdFNjb3BlLmh0bWxDbGFzcy5hcHBsMztcbiAgICAgICAgICAgICAgICAkc2NvcGUuYXBwLnNldHRpbmdzLmJvZHlDbGFzcyA9ICcnO1xuICAgICAgICAgICAgfV1cbiAgICAgICAgfSlcbiAgICAgICAgLnN0YXRlKCdhcHAtc3R1ZGVudC5tZXNzYWdlcycsIHtcbiAgICAgICAgICAgIHVybDogJy9tZXNzYWdlcycsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9zdHVkZW50LW1lc3NhZ2VzLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogWyckc2NvcGUnLCckcm9vdFNjb3BlJywgZnVuY3Rpb24oJHNjb3BlLCRyb290U2NvcGUpe1xuICAgICAgICAgICAgICAgICRzY29wZS5hcHAuc2V0dGluZ3MuaHRtbENsYXNzID0gJHJvb3RTY29wZS5odG1sQ2xhc3MuYXBwbDM7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmFwcC5zZXR0aW5ncy5ib2R5Q2xhc3MgPSAnJztcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0pXG4gICAgICAgIC5zdGF0ZSgnYXBwLXN0dWRlbnQucHJpdmF0ZS1wcm9maWxlJywge1xuICAgICAgICAgICAgdXJsOiAnL3Byb2ZpbGUnLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvc3R1ZGVudC1wcm9maWxlLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogWyckc2NvcGUnLCckcm9vdFNjb3BlJywgZnVuY3Rpb24oJHNjb3BlLCRyb290U2NvcGUpe1xuICAgICAgICAgICAgICAgICRzY29wZS5hcHAuc2V0dGluZ3MuaHRtbENsYXNzID0gJHJvb3RTY29wZS5odG1sQ2xhc3MuYXBwbDM7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmFwcC5zZXR0aW5ncy5ib2R5Q2xhc3MgPSAnJztcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0pXG4gICAgICAgIC5zdGF0ZSgnYXBwLXN0dWRlbnQuYmlsbGluZycsIHtcbiAgICAgICAgICAgIHVybDogJy9iaWxsaW5nJyxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3N0dWRlbnQtYmlsbGluZy5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6IFsnJHNjb3BlJywnJHJvb3RTY29wZScsIGZ1bmN0aW9uKCRzY29wZSwkcm9vdFNjb3BlKXtcbiAgICAgICAgICAgICAgICAkc2NvcGUuYXBwLnNldHRpbmdzLmh0bWxDbGFzcyA9ICRyb290U2NvcGUuaHRtbENsYXNzLmFwcGwzO1xuICAgICAgICAgICAgICAgICRzY29wZS5hcHAuc2V0dGluZ3MuYm9keUNsYXNzID0gJyc7XG4gICAgICAgICAgICB9XVxuICAgICAgICB9KVxuICAgICAgICAuc3RhdGUoJ2FwcC1zdHVkZW50LmNvdXJzZXMnLCB7XG4gICAgICAgICAgICB1cmw6ICcvY291cnNlcycsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9zdHVkZW50LWNvdXJzZXMuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiBbJyRzY29wZScsJyRyb290U2NvcGUnLCBmdW5jdGlvbigkc2NvcGUsJHJvb3RTY29wZSl7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmFwcC5zZXR0aW5ncy5odG1sQ2xhc3MgPSAkcm9vdFNjb3BlLmh0bWxDbGFzcy5hcHBsMXIzO1xuICAgICAgICAgICAgICAgICRzY29wZS5hcHAuc2V0dGluZ3MuYm9keUNsYXNzID0gJyc7XG4gICAgICAgICAgICB9XVxuICAgICAgICB9KVxuICAgICAgICAuc3RhdGUoJ2FwcC1zdHVkZW50LmNvdXJzZS1mb3J1bXMnLCB7XG4gICAgICAgICAgICB1cmw6ICcvY291cnNlLWZvcnVtcycsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9zdHVkZW50LWNvdXJzZS1mb3J1bXMuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiBbJyRzY29wZScsJyRyb290U2NvcGUnLCBmdW5jdGlvbigkc2NvcGUsJHJvb3RTY29wZSl7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmFwcC5zZXR0aW5ncy5odG1sQ2xhc3MgPSAkcm9vdFNjb3BlLmh0bWxDbGFzcy5hcHBsMXIzO1xuICAgICAgICAgICAgICAgICRzY29wZS5hcHAuc2V0dGluZ3MuYm9keUNsYXNzID0gJyc7XG4gICAgICAgICAgICB9XVxuICAgICAgICB9KVxuICAgICAgICAuc3RhdGUoJ2FwcC1zdHVkZW50LmNvdXJzZS1mb3J1bS10aHJlYWQnLCB7XG4gICAgICAgICAgICB1cmw6ICcvY291cnNlLWZvcnVtLXRocmVhZCcsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9zdHVkZW50LWNvdXJzZS1mb3J1bS10aHJlYWQuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiBbJyRzY29wZScsJyRyb290U2NvcGUnLCBmdW5jdGlvbigkc2NvcGUsJHJvb3RTY29wZSl7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmFwcC5zZXR0aW5ncy5odG1sQ2xhc3MgPSAkcm9vdFNjb3BlLmh0bWxDbGFzcy5hcHBsMXIzO1xuICAgICAgICAgICAgICAgICRzY29wZS5hcHAuc2V0dGluZ3MuYm9keUNsYXNzID0gJyc7XG4gICAgICAgICAgICB9XVxuICAgICAgICB9KVxuICAgICAgICAuc3RhdGUoJ2FwcC1zdHVkZW50LnRha2UtY291cnNlJywge1xuICAgICAgICAgICAgdXJsOiAnL3Rha2UtY291cnNlJyxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3N0dWRlbnQtdGFrZS1jb3Vyc2UuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiBbJyRzY29wZScsJyRyb290U2NvcGUnLCBmdW5jdGlvbigkc2NvcGUsJHJvb3RTY29wZSl7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmFwcC5zZXR0aW5ncy5odG1sQ2xhc3MgPSAkcm9vdFNjb3BlLmh0bWxDbGFzcy5hcHBsMXIzO1xuICAgICAgICAgICAgICAgICRzY29wZS5hcHAuc2V0dGluZ3MuYm9keUNsYXNzID0gJyc7XG4gICAgICAgICAgICB9XVxuICAgICAgICB9KVxuICAgICAgICAuc3RhdGUoJ2FwcC1zdHVkZW50LnRha2UtcXVpeicsIHtcbiAgICAgICAgICAgIHVybDogJy90YWtlLXF1aXonLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvc3R1ZGVudC10YWtlLXF1aXouaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiBbJyRzY29wZScsJyRyb290U2NvcGUnLCBmdW5jdGlvbigkc2NvcGUsJHJvb3RTY29wZSl7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmFwcC5zZXR0aW5ncy5odG1sQ2xhc3MgPSAkcm9vdFNjb3BlLmh0bWxDbGFzcy5hcHBsMXIzO1xuICAgICAgICAgICAgICAgICRzY29wZS5hcHAuc2V0dGluZ3MuYm9keUNsYXNzID0gJyc7XG4gICAgICAgICAgICB9XVxuICAgICAgICB9KTtcdFx0XG5cdH0pO1xuXG59KSgpOyIsIihmdW5jdGlvbigpe1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJyk7XG4gICAgICAgYXBwLmNvbmZpZyhmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuXG4gICAgICAgICAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL3dlYnNpdGUtcGFnZXMvaG9tZScpO1xuXG4gICAgICAgICAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCd3ZWJzaXRlLXR1dG9ycycsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3dlYnNpdGUtdHV0dW9zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnPGRpdiB1aS12aWV3IGNsYXNzPVwidWktdmlldy1tYWluXCIgLz4nXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnd2Vic2l0ZS10dXRvcnMuYWxsJyxcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHVybCA6ICcvYWxsJyxcblx0XHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZVVybCA6ICd3ZWJzaXRlL3R1dG9ycy5odG1sJyxcblx0XHRcdFx0XHRcdFx0XHRjb250cm9sbGVyIDogW1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQnJHNjb3BlJywnJHJvb3RTY29wZScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZ1bmN0aW9uKCRzY29wZSwkcm9vdFNjb3BlKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JHNjb3BlLmFwcC5zZXR0aW5ncy5odG1sQ2xhc3MgPSAkcm9vdFNjb3BlLmh0bWxDbGFzcy53ZWJzaXRlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRzY29wZS5hcHAuc2V0dGluZ3MuYm9keUNsYXNzID0gJyc7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gXVxuXHRcdFx0XHRcdFx0XHR9KVx0XHRcbiAgICAgICAgICAgIH0pO1xufSkoKTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICQuZm4udGtDb3VudGRvd24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY291bnRkb3duKHtcbiAgICAgICAgICAgIHVudGlsOiBtb21lbnQoKS5hZGQoMTAsICdtaW51dGUnKS50b0RhdGUoKVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgJCgnLnRrLWNvdW50ZG93bicpLnRrQ291bnRkb3duKCk7XG5cbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAkLmZuLnRrQ3VycmljdWx1bSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB2YXIgZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBhbmd1bGFyID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLmZpbmQoJy5saXN0LWdyb3VwLWl0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9ICQodGhpcykuZGF0YSgndGFyZ2V0Jyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZmluZCgnLmNvbGxhcHNlJylcbiAgICAgICAgICAgIC5vbignc2hvdy5icy5jb2xsYXBzZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBlLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdoaWRlLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGUucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAkKCcuY3VycmljdWx1bScpLnRrQ3VycmljdWx1bSgpO1xuXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbiAoJCkge1xuXG4gICAgdmFyIHNraW4gPSByZXF1aXJlKCdjaGFydHMvanMvbGliL19za2luJykoKTtcbiAgICB2YXIgY2hhcnRzID0gcmVxdWlyZSgnY2hhcnRzL2pzL2Zsb3QvX2hlbHBlcicpO1xuXG4gICAgaWYgKHR5cGVvZiBjaGFydHMgPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgIHJldHVybjtcblxuICAgIGNoYXJ0cy5jaGFydF9lYXJuaW5ncyA9XG4gICAge1xuICAgICAgICAvLyBjaGFydCBkYXRhXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGQxOiBbXSxcbiAgICAgICAgICAgIGQyOiBbXVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIHdpbGwgaG9sZCB0aGUgY2hhcnQgb2JqZWN0XG4gICAgICAgIHBsb3Q6IG51bGwsXG5cbiAgICAgICAgLy8gY2hhcnQgb3B0aW9uc1xuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBjb2xvcnM6IFsgY29sb3JzWyAnd2FybmluZy1jb2xvcicgXSwgY29sb3JzWyAnc3VjY2Vzcy1jb2xvcicgXSBdLFxuICAgICAgICAgICAgZ3JpZDoge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvcnNbICdkZWZhdWx0LWxpZ2h0LWNvbG9yJyBdLFxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGhvdmVyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlcmllczoge1xuICAgICAgICAgICAgICAgIGdyb3c6IHthY3RpdmU6IGZhbHNlfSxcbiAgICAgICAgICAgICAgICBsaW5lczoge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBmaWxsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbGluZVdpZHRoOiAyLFxuICAgICAgICAgICAgICAgICAgICBzdGVwczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBjb25maWcuc2tpbnNbIHNraW4gXVsgJ3ByaW1hcnktY29sb3InIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBvaW50czoge3Nob3c6IGZhbHNlfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgIG5vQ29sdW1uczogMixcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJud1wiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogbnVsbCxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kT3BhY2l0eTogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgICAgICAgdGlja3M6IDMsXG4gICAgICAgICAgICAgICAgdGlja1NpemU6IDQwLFxuICAgICAgICAgICAgICAgIHRpY2tGb3JtYXR0ZXI6IGZ1bmN0aW9uICh2YWwsIGF4aXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbCArIFwia1wiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB4YXhpczoge3RpY2tzOiA0LCB0aWNrRGVjaW1hbHM6IDAsIHRpY2tDb2xvcjogJ3RyYW5zcGFyZW50J30sXG4gICAgICAgICAgICBzaGFkb3dTaXplOiAwLFxuICAgICAgICAgICAgdG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICAgIHRvb2x0aXBPcHRzOiB7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCIlcyA6ICV5LjBcIixcbiAgICAgICAgICAgICAgICBzaGlmdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgeDogLSAzMCxcbiAgICAgICAgICAgICAgICAgICAgeTogLSA1MFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGVmYXVsdFRoZW1lOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIGluaXRpYWxpemVcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKHdyYXBwZXIpIHtcblxuICAgICAgICAgICAgaWYgKCEgd3JhcHBlci5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICAgICAgLy8gZ2VuZXJhdGUgc29tZSBkYXRhXG4gICAgICAgICAgICB0aGlzLmRhdGEuZDEgPSBbIFsgMSwgMTAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAyLCAyMCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDMsIDUwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgNCwgMTYwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgNSwgMTEwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgNiwgMzYgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyA3LCA3MCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDgsIDMwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgOSwgMzYgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAxMCwgODAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAxMSwgMTQwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTIsIDQ3ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTMsIDUwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTQsIDUwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTUsIDQ1ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTYsIDEwMCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDE3LCA1MCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDE4LCA1MyArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDE5LCA1NiArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDIwLCA1OSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDIxLCA2MiArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDIyLCA5MCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDIzLCA1NiArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDI0LCA1OSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDI1LCA2MiArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDI2LCA2NSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDI3LCA4MCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDI4LCA3MSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDI5LCA3NSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDMwLCAxMjAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSBdO1xuICAgICAgICAgICAgdGhpcy5kYXRhLmQyID0gWyBbIDEsIDMgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAyLCA2ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMywgMzAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyA0LCAxMTAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyA1LCA4MCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDYsIDE4ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgNywgNTAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyA4LCAxNSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDksIDE4ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTAsIDYwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTEsIDExMCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDEyLCAyNyArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDEzLCAzMCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDE0LCAzMyArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDE1LCAyNCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDE2LCA4MCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDE3LCAzMCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDE4LCAzMyArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDE5LCAzNiArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDIwLCAzOSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDIxLCA0MiArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDIyLCA3MCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDIzLCAzNiArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDI0LCAzOSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDI1LCA0MiArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDI2LCA0NSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDI3LCA2MCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDI4LCA1MSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDI5LCA1NSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDMwLCAxMDAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSBdO1xuXG4gICAgICAgICAgICAvLyBtYWtlIGNoYXJ0XG4gICAgICAgICAgICB0aGlzLnBsb3QgPSAkLnBsb3QoXG4gICAgICAgICAgICAgICAgd3JhcHBlciwgW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJHcm9zcyBSZXZlbnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLmRhdGEuZDFcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTmV0IFJldmVudWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMuZGF0YS5kMlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnNcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogalF1ZXJ5IHBsdWdpbiB3cmFwcGVyIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQW5ndWxhciBVSS5VdGlsczogalF1ZXJ5IFBhc3N0aHJvdWdoXG4gICAgICovXG4gICAgJC5mbi50a0Zsb3RDaGFydEVhcm5pbmdzID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgY2hhcnRzLmNoYXJ0X2Vhcm5pbmdzLmluaXQodGhpcyk7XG5cbiAgICB9O1xuXG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwiZmxvdC1jaGFydC1lYXJuaW5nc1wiXScpLnRrRmxvdENoYXJ0RWFybmluZ3MoKTtcblxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24gKCQsIHdpbmRvdykge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgdmFyICR3aW5kb3cgPSAkKHdpbmRvdyksXG4gICAgICAgICRjb250ZW50ID0gJCgnLnN0LWNvbnRlbnQtaW5uZXInKTtcblxuICAgICQuZm4udGtTY3JvbGxOYXZiYXJUcmFuc2l0aW9uID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHZhciBoYW5kbGVTY3JvbGwgPSBmdW5jdGlvbiAoZSkge1xuXG4gICAgICAgICAgICB2YXIgJG5hdmJhciA9ICQoJy5uYXZiYXItZml4ZWQtdG9wJyksXG4gICAgICAgICAgICAgICAgJGh0bWwgPSAkKCdodG1sJyk7XG5cbiAgICAgICAgICAgIGlmIChNb2Rlcm5penIudG91Y2ggfHwgISAkbmF2YmFyLmxlbmd0aCB8fCAhICRodG1sLmlzKCcudHJhbnNpdGlvbi1uYXZiYXItc2Nyb2xsJykpIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgdmFyIHNjcm9sbFRvcCA9IHBhcnNlSW50KCQoZS5jdXJyZW50VGFyZ2V0KS5zY3JvbGxUb3AoKSwgMTApO1xuXG4gICAgICAgICAgICBpZiAoISBpc05hTihzY3JvbGxUb3ApKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCA+IDUwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkbmF2YmFyLmRhdGEoJ3onKSAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJG5hdmJhci5hdHRyKCdkYXRhLXonLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoJG5hdmJhci5pcygnLm5hdmJhci1zaXplLXhsYXJnZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkbmF2YmFyLnJlbW92ZUNsYXNzKCduYXZiYXItc2l6ZS14bGFyZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoJGh0bWwuaXMoJy5scy10b3AtbmF2YmFyLXhsYXJnZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkaHRtbC5yZW1vdmVDbGFzcygnbHMtdG9wLW5hdmJhci14bGFyZ2UnKS5hZGRDbGFzcygnbHMtdG9wLW5hdmJhci1sYXJnZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICgkaHRtbC5pcygnLnRvcC1uYXZiYXIteGxhcmdlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRodG1sLnJlbW92ZUNsYXNzKCd0b3AtbmF2YmFyLXhsYXJnZScpLmFkZENsYXNzKCd0b3AtbmF2YmFyLWxhcmdlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICRuYXZiYXIuYXR0cignZGF0YS16JywgMCk7XG4gICAgICAgICAgICAgICAgICAgICRuYXZiYXIuYWRkQ2xhc3MoJ25hdmJhci1zaXplLXhsYXJnZScpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGh0bWwuaXMoJy5scy10b3AtbmF2YmFyLWxhcmdlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRodG1sLnJlbW92ZUNsYXNzKCdscy10b3AtbmF2YmFyLWxhcmdlJykuYWRkQ2xhc3MoJ2xzLXRvcC1uYXZiYXIteGxhcmdlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCRodG1sLmlzKCcudG9wLW5hdmJhci1sYXJnZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkaHRtbC5yZW1vdmVDbGFzcygndG9wLW5hdmJhci1sYXJnZScpLmFkZENsYXNzKCd0b3AtbmF2YmFyLXhsYXJnZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zY3JvbGwoaGFuZGxlU2Nyb2xsKTtcblxuICAgIH07XG5cbiAgICBpZiAoJGNvbnRlbnQubGVuZ3RoKSB7XG4gICAgICAgICRjb250ZW50LnRrU2Nyb2xsTmF2YmFyVHJhbnNpdGlvbigpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgJHdpbmRvdy50a1Njcm9sbE5hdmJhclRyYW5zaXRpb24oKTtcbiAgICB9XG5cbn0pKGpRdWVyeSwgd2luZG93KTsiXX0=
