(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/js/themes/html/main.js":[function(require,module,exports){
// Curriculum
require('./_curriculum');

// Scrolling behaviour
require('./_scroll');

// Quiz timer
require('./_countdown');

// Earnings chart
require('./_flotchart-earnings');
},{"./_countdown":"C:\\eclipseWorkspace\\bitlms\\src\\js\\themes\\html\\_countdown.js","./_curriculum":"C:\\eclipseWorkspace\\bitlms\\src\\js\\themes\\html\\_curriculum.js","./_flotchart-earnings":"C:\\eclipseWorkspace\\bitlms\\src\\js\\themes\\html\\_flotchart-earnings.js","./_scroll":"C:\\eclipseWorkspace\\bitlms\\src\\js\\themes\\html\\_scroll.js"}],"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\flot\\_helper.js":[function(require,module,exports){
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
},{"../lib/_skin":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\lib\\_skin.js"}],"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\lib\\_skin.js":[function(require,module,exports){
module.exports = (function () {
    var skin = $.cookie('skin');

    if (typeof skin == 'undefined') {
        skin = 'default';
    }
    return skin;
});
},{}],"C:\\eclipseWorkspace\\bitlms\\src\\js\\themes\\html\\_countdown.js":[function(require,module,exports){
(function ($) {
    "use strict";

    $.fn.tkCountdown = function () {
        this.countdown({
            until: moment().add(10, 'minute').toDate()
        });
    };

    $('.tk-countdown').tkCountdown();

})(jQuery);
},{}],"C:\\eclipseWorkspace\\bitlms\\src\\js\\themes\\html\\_curriculum.js":[function(require,module,exports){
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
},{}],"C:\\eclipseWorkspace\\bitlms\\src\\js\\themes\\html\\_flotchart-earnings.js":[function(require,module,exports){
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
},{"charts/js/flot/_helper":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\flot\\_helper.js","charts/js/lib/_skin":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\lib\\_skin.js"}],"C:\\eclipseWorkspace\\bitlms\\src\\js\\themes\\html\\_scroll.js":[function(require,module,exports){
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
},{}]},{},["./src/js/themes/html/main.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwic3JjXFxqc1xcdGhlbWVzXFxodG1sXFxtYWluLmpzIiwibGliXFxjaGFydHNcXGpzXFxmbG90XFxfaGVscGVyLmpzIiwibGliXFxjaGFydHNcXGpzXFxsaWJcXF9za2luLmpzIiwic3JjXFxqc1xcdGhlbWVzXFxodG1sXFxfY291bnRkb3duLmpzIiwic3JjXFxqc1xcdGhlbWVzXFxodG1sXFxfY3VycmljdWx1bS5qcyIsInNyY1xcanNcXHRoZW1lc1xcaHRtbFxcX2Zsb3RjaGFydC1lYXJuaW5ncy5qcyIsInNyY1xcanNcXHRoZW1lc1xcaHRtbFxcX3Njcm9sbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gQ3VycmljdWx1bVxucmVxdWlyZSgnLi9fY3VycmljdWx1bScpO1xuXG4vLyBTY3JvbGxpbmcgYmVoYXZpb3VyXG5yZXF1aXJlKCcuL19zY3JvbGwnKTtcblxuLy8gUXVpeiB0aW1lclxucmVxdWlyZSgnLi9fY291bnRkb3duJyk7XG5cbi8vIEVhcm5pbmdzIGNoYXJ0XG5yZXF1aXJlKCcuL19mbG90Y2hhcnQtZWFybmluZ3MnKTsiLCJ2YXIgc2tpbiA9IHJlcXVpcmUoJy4uL2xpYi9fc2tpbicpKCk7XG5cbnZhciBjaGFydHMgPVxue1xuICAgIC8vIHV0aWxpdHkgY2xhc3NcbiAgICB1dGlsaXR5OiB7XG4gICAgICAgIGNoYXJ0Q29sb3JzOiBbIGNvbmZpZy5za2luc1sgc2tpbiBdWyAncHJpbWFyeS1jb2xvcicgXSwgY29sb3JzWyAnZGVmYXVsdC1jb2xvcicgXSwgY29sb3JzWyAnZGFuZ2VyLWNvbG9yJyBdLCBjb2xvcnNbICdzdWNjZXNzLWNvbG9yJyBdLCBjb2xvcnNbICd3YXJuaW5nLWNvbG9yJyBdIF0sXG4gICAgICAgIGNoYXJ0QmFja2dyb3VuZENvbG9yczogWyBcInJnYmEoMjU1LDI1NSwyNTUsMClcIiwgXCJyZ2JhKDI1NSwyNTUsMjU1LDApXCIgXSxcblxuICAgICAgICBhcHBseVN0eWxlOiBmdW5jdGlvbiAodGhhdCkge1xuICAgICAgICAgICAgdGhhdC5vcHRpb25zLmNvbG9ycyA9IGNoYXJ0cy51dGlsaXR5LmNoYXJ0Q29sb3JzO1xuICAgICAgICAgICAgdGhhdC5vcHRpb25zLmdyaWQuYmFja2dyb3VuZENvbG9yID0geyBjb2xvcnM6IGNoYXJ0cy51dGlsaXR5LmNoYXJ0QmFja2dyb3VuZENvbG9ycyB9O1xuICAgICAgICAgICAgdGhhdC5vcHRpb25zLmdyaWQuYm9yZGVyQ29sb3IgPSBjaGFydHMudXRpbGl0eS5jaGFydENvbG9yc1sgMCBdO1xuICAgICAgICAgICAgdGhhdC5vcHRpb25zLmdyaWQuY29sb3IgPSBjaGFydHMudXRpbGl0eS5jaGFydENvbG9yc1sgMCBdO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIGdlbmVyYXRlIHJhbmRvbSBudW1iZXIgZm9yIGNoYXJ0c1xuICAgICAgICByYW5kTnVtOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxICsgNDAgLSAyMCkpICkgKyAyMDtcbiAgICAgICAgfVxuICAgIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjaGFydHM7IiwibW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBza2luID0gJC5jb29raWUoJ3NraW4nKTtcblxuICAgIGlmICh0eXBlb2Ygc2tpbiA9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBza2luID0gJ2RlZmF1bHQnO1xuICAgIH1cbiAgICByZXR1cm4gc2tpbjtcbn0pOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgJC5mbi50a0NvdW50ZG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jb3VudGRvd24oe1xuICAgICAgICAgICAgdW50aWw6IG1vbWVudCgpLmFkZCgxMCwgJ21pbnV0ZScpLnRvRGF0ZSgpXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAkKCcudGstY291bnRkb3duJykudGtDb3VudGRvd24oKTtcblxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICQuZm4udGtDdXJyaWN1bHVtID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHZhciBlID0gdGhpcztcblxuICAgICAgICBpZiAodHlwZW9mIGFuZ3VsYXIgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMuZmluZCgnLmxpc3QtZ3JvdXAtaXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gJCh0aGlzKS5kYXRhKCd0YXJnZXQnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5maW5kKCcuY29sbGFwc2UnKVxuICAgICAgICAgICAgLm9uKCdzaG93LmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGUuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ2hpZGUuYnMuY29sbGFwc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgfSk7XG4gICAgfTtcblxuICAgICQoJy5jdXJyaWN1bHVtJykudGtDdXJyaWN1bHVtKCk7XG5cbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgICB2YXIgc2tpbiA9IHJlcXVpcmUoJ2NoYXJ0cy9qcy9saWIvX3NraW4nKSgpO1xuICAgIHZhciBjaGFydHMgPSByZXF1aXJlKCdjaGFydHMvanMvZmxvdC9faGVscGVyJyk7XG5cbiAgICBpZiAodHlwZW9mIGNoYXJ0cyA9PSAndW5kZWZpbmVkJylcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgY2hhcnRzLmNoYXJ0X2Vhcm5pbmdzID1cbiAgICB7XG4gICAgICAgIC8vIGNoYXJ0IGRhdGFcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZDE6IFtdLFxuICAgICAgICAgICAgZDI6IFtdXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gd2lsbCBob2xkIHRoZSBjaGFydCBvYmplY3RcbiAgICAgICAgcGxvdDogbnVsbCxcblxuICAgICAgICAvLyBjaGFydCBvcHRpb25zXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGNvbG9yczogWyBjb2xvcnNbICd3YXJuaW5nLWNvbG9yJyBdLCBjb2xvcnNbICdzdWNjZXNzLWNvbG9yJyBdIF0sXG4gICAgICAgICAgICBncmlkOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yc1sgJ2RlZmF1bHQtbGlnaHQtY29sb3InIF0sXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgaG92ZXJhYmxlOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VyaWVzOiB7XG4gICAgICAgICAgICAgICAgZ3Jvdzoge2FjdGl2ZTogZmFsc2V9LFxuICAgICAgICAgICAgICAgIGxpbmVzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBsaW5lV2lkdGg6IDIsXG4gICAgICAgICAgICAgICAgICAgIHN0ZXBzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGNvbmZpZy5za2luc1sgc2tpbiBdWyAncHJpbWFyeS1jb2xvcicgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcG9pbnRzOiB7c2hvdzogZmFsc2V9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgbm9Db2x1bW5zOiAyLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcIm53XCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBudWxsLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRPcGFjaXR5OiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgICAgICB0aWNrczogMyxcbiAgICAgICAgICAgICAgICB0aWNrU2l6ZTogNDAsXG4gICAgICAgICAgICAgICAgdGlja0Zvcm1hdHRlcjogZnVuY3Rpb24gKHZhbCwgYXhpcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsICsgXCJrXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHhheGlzOiB7dGlja3M6IDQsIHRpY2tEZWNpbWFsczogMCwgdGlja0NvbG9yOiAndHJhbnNwYXJlbnQnfSxcbiAgICAgICAgICAgIHNoYWRvd1NpemU6IDAsXG4gICAgICAgICAgICB0b29sdGlwOiB0cnVlLFxuICAgICAgICAgICAgdG9vbHRpcE9wdHM6IHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIiVzIDogJXkuMFwiLFxuICAgICAgICAgICAgICAgIHNoaWZ0czoge1xuICAgICAgICAgICAgICAgICAgICB4OiAtIDMwLFxuICAgICAgICAgICAgICAgICAgICB5OiAtIDUwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0VGhlbWU6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gaW5pdGlhbGl6ZVxuICAgICAgICBpbml0OiBmdW5jdGlvbiAod3JhcHBlcikge1xuXG4gICAgICAgICAgICBpZiAoISB3cmFwcGVyLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgICAgICAvLyBnZW5lcmF0ZSBzb21lIGRhdGFcbiAgICAgICAgICAgIHRoaXMuZGF0YS5kMSA9IFsgWyAxLCAxMCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDIsIDIwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMywgNTAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyA0LCAxNjAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyA1LCAxMTAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyA2LCAzNiArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDcsIDcwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgOCwgMzAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyA5LCAzNiArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDEwLCA4MCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDExLCAxNDAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAxMiwgNDcgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAxMywgNTAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAxNCwgNTAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAxNSwgNDUgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAxNiwgMTAwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTcsIDUwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTgsIDUzICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTksIDU2ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjAsIDU5ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjEsIDYyICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjIsIDkwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjMsIDU2ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjQsIDU5ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjUsIDYyICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjYsIDY1ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjcsIDgwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjgsIDcxICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjksIDc1ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMzAsIDEyMCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdIF07XG4gICAgICAgICAgICB0aGlzLmRhdGEuZDIgPSBbIFsgMSwgMyArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDIsIDYgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAzLCAzMCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDQsIDExMCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDUsIDgwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgNiwgMTggKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyA3LCA1MCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDgsIDE1ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgOSwgMTggKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAxMCwgNjAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAxMSwgMTEwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTIsIDI3ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTMsIDMwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTQsIDMzICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTUsIDI0ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTYsIDgwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTcsIDMwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTgsIDMzICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTksIDM2ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjAsIDM5ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjEsIDQyICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjIsIDcwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjMsIDM2ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjQsIDM5ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjUsIDQyICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjYsIDQ1ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjcsIDYwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjgsIDUxICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjksIDU1ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMzAsIDEwMCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdIF07XG5cbiAgICAgICAgICAgIC8vIG1ha2UgY2hhcnRcbiAgICAgICAgICAgIHRoaXMucGxvdCA9ICQucGxvdChcbiAgICAgICAgICAgICAgICB3cmFwcGVyLCBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkdyb3NzIFJldmVudWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMuZGF0YS5kMVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJOZXQgUmV2ZW51ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy5kYXRhLmQyXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAgICAgKi9cbiAgICAkLmZuLnRrRmxvdENoYXJ0RWFybmluZ3MgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBjaGFydHMuY2hhcnRfZWFybmluZ3MuaW5pdCh0aGlzKTtcblxuICAgIH07XG5cbiAgICAkKCdbZGF0YS10b2dnbGU9XCJmbG90LWNoYXJ0LWVhcm5pbmdzXCJdJykudGtGbG90Q2hhcnRFYXJuaW5ncygpO1xuXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbiAoJCwgd2luZG93KSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICB2YXIgJHdpbmRvdyA9ICQod2luZG93KSxcbiAgICAgICAgJGNvbnRlbnQgPSAkKCcuc3QtY29udGVudC1pbm5lcicpO1xuXG4gICAgJC5mbi50a1Njcm9sbE5hdmJhclRyYW5zaXRpb24gPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdmFyIGhhbmRsZVNjcm9sbCA9IGZ1bmN0aW9uIChlKSB7XG5cbiAgICAgICAgICAgIHZhciAkbmF2YmFyID0gJCgnLm5hdmJhci1maXhlZC10b3AnKSxcbiAgICAgICAgICAgICAgICAkaHRtbCA9ICQoJ2h0bWwnKTtcblxuICAgICAgICAgICAgaWYgKE1vZGVybml6ci50b3VjaCB8fCAhICRuYXZiYXIubGVuZ3RoIHx8ICEgJGh0bWwuaXMoJy50cmFuc2l0aW9uLW5hdmJhci1zY3JvbGwnKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICB2YXIgc2Nyb2xsVG9wID0gcGFyc2VJbnQoJChlLmN1cnJlbnRUYXJnZXQpLnNjcm9sbFRvcCgpLCAxMCk7XG5cbiAgICAgICAgICAgIGlmICghIGlzTmFOKHNjcm9sbFRvcCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG9wID4gNTApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRuYXZiYXIuZGF0YSgneicpICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkbmF2YmFyLmF0dHIoJ2RhdGEteicsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICgkbmF2YmFyLmlzKCcubmF2YmFyLXNpemUteGxhcmdlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRuYXZiYXIucmVtb3ZlQ2xhc3MoJ25hdmJhci1zaXplLXhsYXJnZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICgkaHRtbC5pcygnLmxzLXRvcC1uYXZiYXIteGxhcmdlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRodG1sLnJlbW92ZUNsYXNzKCdscy10b3AtbmF2YmFyLXhsYXJnZScpLmFkZENsYXNzKCdscy10b3AtbmF2YmFyLWxhcmdlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCRodG1sLmlzKCcudG9wLW5hdmJhci14bGFyZ2UnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGh0bWwucmVtb3ZlQ2xhc3MoJ3RvcC1uYXZiYXIteGxhcmdlJykuYWRkQ2xhc3MoJ3RvcC1uYXZiYXItbGFyZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG9wIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgJG5hdmJhci5hdHRyKCdkYXRhLXonLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgJG5hdmJhci5hZGRDbGFzcygnbmF2YmFyLXNpemUteGxhcmdlJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkaHRtbC5pcygnLmxzLXRvcC1uYXZiYXItbGFyZ2UnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGh0bWwucmVtb3ZlQ2xhc3MoJ2xzLXRvcC1uYXZiYXItbGFyZ2UnKS5hZGRDbGFzcygnbHMtdG9wLW5hdmJhci14bGFyZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoJGh0bWwuaXMoJy50b3AtbmF2YmFyLWxhcmdlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRodG1sLnJlbW92ZUNsYXNzKCd0b3AtbmF2YmFyLWxhcmdlJykuYWRkQ2xhc3MoJ3RvcC1uYXZiYXIteGxhcmdlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNjcm9sbChoYW5kbGVTY3JvbGwpO1xuXG4gICAgfTtcblxuICAgIGlmICgkY29udGVudC5sZW5ndGgpIHtcbiAgICAgICAgJGNvbnRlbnQudGtTY3JvbGxOYXZiYXJUcmFuc2l0aW9uKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAkd2luZG93LnRrU2Nyb2xsTmF2YmFyVHJhbnNpdGlvbigpO1xuICAgIH1cblxufSkoalF1ZXJ5LCB3aW5kb3cpOyJdfQ==
