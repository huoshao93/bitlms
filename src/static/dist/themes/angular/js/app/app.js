(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/js/themes/angular/app.js":[function(require,module,exports){
// Essentials
require('essential/js/main');

// Layout
require('layout/js/main');

// Sidebar
require('sidebar/js/main');

// Charts
require('charts/js/main');

// Messages
require('messages/js/main');

// Media
require('media/js/main');

// Material
require('material/js/main');

// Maps
window.initGoogleMaps = require('maps/js/google/main');

// CORE
require('./main');
},{"./main":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\main.js","charts/js/main":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\main.js","essential/js/main":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\main.js","layout/js/main":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\layout\\js\\main.js","maps/js/google/main":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\maps\\js\\google\\main.js","material/js/main":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\material\\js\\main.js","media/js/main":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\media\\js\\main.js","messages/js/main":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\messages\\js\\main.js","sidebar/js/main":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\sidebar\\js\\main.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\easy-pie\\_easy-pie.js":[function(require,module,exports){
(function ($) {
    "use strict";

    var skin = require('../lib/_skin')();

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkEasyPie = function () {

        if (! this.length) return;

        if (!$.fn.easyPieChart) return;

        var color = config.skins[ skin ][ 'primary-color' ];
        if (this.is('.info')) color = colors[ 'info-color' ];
        if (this.is('.danger')) color = colors[ 'danger-color' ];
        if (this.is('.success')) color = colors[ 'success-color' ];
        if (this.is('.warning')) color = colors[ 'warning-color' ];
        if (this.is('.inverse')) color = colors[ 'inverse-color' ];

        this.easyPieChart({
            barColor: color,
            animate: ($('html').is('.ie') ? false : 3000),
            lineWidth: 4,
            size: 50
        });

    };

    $.each($('.easy-pie'), function (k, v) {
        $(this).tkEasyPie();
    });

})(jQuery);
},{"../lib/_skin":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\lib\\_skin.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\easy-pie\\main.js":[function(require,module,exports){
require('./_easy-pie');
},{"./_easy-pie":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\easy-pie\\_easy-pie.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\flot\\_autoupdate.js":[function(require,module,exports){
(function ($) {

    var charts = require('./_helper');

    if (typeof charts == 'undefined')
        return;

    charts.chart_live =
    {
        // chart data
        data: [],
        totalPoints: 300,
        updateInterval: 200,

        // we use an inline data source in the example, usually data would
        // be fetched from a server
        getRandomData: function () {
            if (this.data.length > 0)
                this.data = this.data.slice(1);

            // do a random walk
            while (this.data.length < this.totalPoints) {
                var prev = this.data.length > 0 ? this.data[ this.data.length - 1 ] : 50;
                var y = prev + Math.random() * 10 - 5;
                if (y < 0)
                    y = 0;
                if (y > 100)
                    y = 100;
                this.data.push(y);
            }

            // zip the generated y values with the x values
            var res = [];
            for (var i = 0; i < this.data.length; ++ i)
                res.push([ i, this.data[ i ] ]);
            return res;
        },

        // will hold the chart object
        plot: null,

        // chart options
        options: {
            series: {
                grow: {active: false},
                shadowSize: 0,
                lines: {
                    show: true,
                    fill: true,
                    lineWidth: 2,
                    steps: false
                }
            },
            grid: {
                show: true,
                aboveData: false,
                color: colors[ 'default-light-color' ],
                labelMargin: 5,
                axisMargin: 0,
                borderWidth: 0,
                borderColor: null,
                minBorderMargin: 5,
                clickable: true,
                hoverable: true,
                autoHighlight: false,
                mouseActiveRadius: 20,
                backgroundColor: {}
            },
            colors: [],
            tooltip: true,
            tooltipOpts: {
                content: "Value is : %y.0",
                shifts: {
                    x: - 30,
                    y: - 50
                },
                defaultTheme: false
            },
            yaxis: {
                min: 0,
                max: 100,
                tickColor: '#efefef'
            },
            xaxis: {
                show: false
            }
        },

        // initialize
        init: function (wrapper) {

            if (!wrapper.length) return;

            // apply styling
            charts.utility.applyStyle(this);

            this.plot = $.plot(wrapper, [ this.getRandomData() ], this.options);
            setTimeout(this.update, charts.chart_live.updateInterval);
        },

        // update
        update: function () {
            charts.chart_live.plot.setData([ charts.chart_live.getRandomData() ]);
            charts.chart_live.plot.draw();

            setTimeout(charts.chart_live.update, charts.chart_live.updateInterval);
        }
    };

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkFlotChartLive = function () {

        if (! this.length) return;

        charts.chart_live.init(this);

    };

    $('[data-toggle="flot-chart-live"]').tkFlotChartLive();

})(jQuery);
},{"./_helper":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\flot\\_helper.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\flot\\_bars-ordered.js":[function(require,module,exports){
(function ($) {

    var charts = require('./_helper');

    if (typeof charts == 'undefined')
        return;

    charts.chart_ordered_bars =
    {
        // chart data
        data: null,

        // will hold the chart object
        plot: null,

        // chart options
        options: {
            bars: {
                show: true,
                barWidth: 0.2,
                fill: 1
            },
            grid: {
                show: true,
                aboveData: false,
                color: colors[ 'default-light-color' ],
                labelMargin: 5,
                axisMargin: 0,
                borderWidth: 0,
                borderColor: null,
                minBorderMargin: 5,
                clickable: true,
                hoverable: true,
                autoHighlight: false,
                mouseActiveRadius: 20,
                backgroundColor: {}
            },
            series: {
                grow: {active: false}
            },
            legend: {
                position: "ne",
                backgroundColor: null,
                backgroundOpacity: 0,
                noColumns: 3
            },
            yaxis: {
                ticks: 3,
                tickColor: '#efefef'
            },
            xaxis: {
                ticks: 4,
                tickDecimals: 0,
                tickColor: 'transparent'
            },
            colors: [],
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

            // apply styling
            charts.utility.applyStyle(this);

            //some data
            var d1 = [];
            for (var i = 0; i <= 10; i += 1)
                d1.push([ i, parseInt(Math.random() * 30) ]);

            var d2 = [];
            for (var j = 0; j <= 10; j += 1)
                d2.push([ j, parseInt(Math.random() * 30) ]);

            var d3 = [];
            for (var k = 0; k <= 10; k += 1)
                d3.push([ k, parseInt(Math.random() * 30) ]);

            var ds = [];

            ds.push({
                label: "Data One",
                data: d1,
                bars: {order: 1}
            });
            ds.push({
                label: "Data Two",
                data: d2,
                bars: {order: 2}
            });
            ds.push({
                label: "Data Three",
                data: d3,
                bars: {order: 3}
            });

            this.data = ds;

            this.plot = $.plot(wrapper, this.data, this.options);
        }
    };

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkFlotChartOrderedBars = function () {

        if (! this.length) return;

        charts.chart_ordered_bars.init(this);

    };

    $('[data-toggle="flot-chart-ordered-bars"]').tkFlotChartOrderedBars();

})(jQuery);
},{"./_helper":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\flot\\_helper.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\flot\\_bars-stacked.js":[function(require,module,exports){
(function ($) {

    var charts = require('./_helper');

    if (typeof charts == 'undefined')
        return;

    charts.chart_stacked_bars =
    {
        // chart data
        data: null,

        // will hold the chart object
        plot: null,

        // chart options
        options: {
            grid: {
                show: true,
                aboveData: false,
                color: colors[ 'default-light-color' ],
                labelMargin: 5,
                axisMargin: 0,
                borderWidth: 0,
                borderColor: null,
                minBorderMargin: 5,
                clickable: true,
                hoverable: true,
                autoHighlight: true,
                mouseActiveRadius: 20,
                backgroundColor: {}
            },
            series: {
                grow: {active: false},
                stack: 0,
                lines: {show: false, fill: true, steps: false},
                bars: {show: true, barWidth: 0.5, fill: 1}
            },
            yaxis: {
                ticks: 3,
                tickColor: '#efefef'
            },
            xaxis: {
                ticks: 11,
                tickDecimals: 0,
                tickColor: 'transparent'
            },
            legend: {
                position: "ne",
                backgroundColor: null,
                backgroundOpacity: 0,
                noColumns: 3
            },
            colors: [],
            shadowSize: 1,
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

            // apply styling
            charts.utility.applyStyle(this);

            var d1 = [];
            for (var i = 0; i <= 10; i += 1)
                d1.push([ i, parseInt(Math.random() * 30) ]);

            var d2 = [];
            for (var j = 0; j <= 10; j += 1)
                d2.push([ j, parseInt(Math.random() * 20) ]);

            var d3 = [];
            for (var k = 0; k <= 10; k += 1)
                d3.push([ k, parseInt(Math.random() * 20) ]);

            this.data = [];

            this.data.push({
                label: "Data One",
                data: d1
            });
            this.data.push({
                label: "Data Two",
                data: d2
            });
            this.data.push({
                label: "Data Tree",
                data: d3
            });

            this.plot = $.plot(wrapper, this.data, this.options);
        }
    };

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkFlotChartStackedBars = function () {

        if (! this.length) return;

        charts.chart_stacked_bars.init(this);

    };

    $('[data-toggle="flot-chart-stacked-bars"]').tkFlotChartStackedBars();

})(jQuery);
},{"./_helper":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\flot\\_helper.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\flot\\_donut.js":[function(require,module,exports){
(function ($) {

    var charts = require('./_helper');

    if (typeof charts == 'undefined')
        return;

    charts.chart_donut =
    {
        // chart data
        data: [
            {label: "USA", data: 38},
            {label: "Brazil", data: 23},
            {label: "India", data: 15},
            {label: "Turkey", data: 9},
            {label: "France", data: 7},
            {label: "China", data: 5},
            {label: "Germany", data: 3}
        ],

        // will hold the chart object
        plot: null,

        // chart options
        options: {
            series: {
                pie: {
                    show: true,
                    innerRadius: 0.4,
                    highlight: {
                        opacity: 0.1
                    },
                    radius: 1,
                    stroke: {
                        color: '#fff',
                        width: 8
                    },
                    startAngle: 2,
                    combine: {
                        color: '#EEE',
                        threshold: 0.05
                    },
                    label: {
                        show: true,
                        radius: 1,
                        formatter: function (label, series) {
                            return '<div class="label label-default">' + label + '&nbsp;' + Math.round(series.percent) + '%</div>';
                        }
                    }
                },
                grow: {active: false}
            },
            legend: {show: false},
            grid: {
                hoverable: true,
                clickable: true,
                backgroundColor: {}
            },
            colors: [],
            tooltip: true,
            tooltipOpts: {
                content: "%s : %y.1" + "%",
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

            // apply styling
            charts.utility.applyStyle(this);

            this.plot = $.plot(wrapper, this.data, this.options);
        }
    };

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkFlotChartDonut = function () {

        if (! this.length) return;

        charts.chart_donut.init(this);

    };

    $('[data-toggle="flot-chart-donut"]').tkFlotChartDonut();

})(jQuery);
},{"./_helper":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\flot\\_helper.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\flot\\_helper.js":[function(require,module,exports){
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
},{"../lib/_skin":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\lib\\_skin.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\flot\\_horizontal.js":[function(require,module,exports){
(function ($) {

    var skin = require('../lib/_skin')();
    var charts = require('./_helper');

    if (typeof charts == 'undefined')
        return;

    charts.chart_horizontal_bars =
    {
        // chart data
        data: null,

        // will hold the chart object
        plot: null,

        // chart options
        options: {
            grid: {
                color: "#dedede",
                borderWidth: 1,
                borderColor: "transparent",
                clickable: true,
                hoverable: true
            },
            series: {
                grow: {active: false},
                bars: {
                    show: true,
                    horizontal: true,
                    barWidth: 0.2,
                    fill: 1
                }
            },
            legend: {position: "nw", backgroundColor: null, backgroundOpacity: 0},
            yaxis: {
                ticks: 3,
                tickColor: 'transparent',
                tickFormatter: function (val, axis) {
                    return val + "k";
                }
            },
            xaxis: {
                ticks: 4,
                tickDecimals: 0
            },
            colors: [ config.skins[ skin ][ 'primary-color' ] ],
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

            if (!wrapper.length) return;

            // apply styling
            // charts.utility.applyStyle(this);

            var d1 = [];
            for (var i = 1; i <= 5; i += 1)
                d1.push([ parseInt(Math.random() * 30), i ]);

            this.data = [];

            this.data.push({
                label: "Sales Volume",
                data: d1,
                bars: {
                    horizontal: true,
                    show: true,
                    barWidth: 0.5
                }
            });

            this.plot = $.plot(wrapper, this.data, this.options);
        }
    };

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkFlotChartHorizontalBars = function () {

        if (! this.length) return;

        charts.chart_horizontal_bars.init(this);

    };

    $('[data-toggle="flot-chart-horizontal-bars"]').tkFlotChartHorizontalBars();

})(jQuery);
},{"../lib/_skin":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\lib\\_skin.js","./_helper":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\flot\\_helper.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\flot\\_line.js":[function(require,module,exports){
(function ($) {

    var skin = require('../lib/_skin')();
    var charts = require('./_helper');

    if (typeof charts == 'undefined')
        return;

    charts.chart_lines_fill_nopoints_3 =
    {
        // chart data
        data: {
            d1: []
        },

        // will hold the chart object
        plot: null,

        // chart options
        options: {
            colors: [  colors[ 'success-color' ]],
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
            legend: {position: "nw", backgroundColor: null, backgroundOpacity: 0},
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

            if (!wrapper.length) return;

            // generate some data
            this.data.d1 = [ [ 1, 3 + charts.utility.randNum() ], [ 2, 6 + charts.utility.randNum() ], [ 3, 30 + charts.utility.randNum() ], [ 4, 110 + charts.utility.randNum() ], [ 5, 80 + charts.utility.randNum() ], [ 6, 18 + charts.utility.randNum() ], [ 7, 50 + charts.utility.randNum() ], [ 8, 15 + charts.utility.randNum() ], [ 9, 18 + charts.utility.randNum() ], [ 10, 60 + charts.utility.randNum() ], [ 11, 110 + charts.utility.randNum() ], [ 12, 27 + charts.utility.randNum() ], [ 13, 30 + charts.utility.randNum() ], [ 14, 33 + charts.utility.randNum() ], [ 15, 24 + charts.utility.randNum() ], [ 16, 80 + charts.utility.randNum() ], [ 17, 30 + charts.utility.randNum() ], [ 18, 33 + charts.utility.randNum() ], [ 19, 36 + charts.utility.randNum() ], [ 20, 39 + charts.utility.randNum() ], [ 21, 42 + charts.utility.randNum() ], [ 22, 70 + charts.utility.randNum() ], [ 23, 36 + charts.utility.randNum() ], [ 24, 39 + charts.utility.randNum() ], [ 25, 42 + charts.utility.randNum() ], [ 26, 45 + charts.utility.randNum() ], [ 27, 60 + charts.utility.randNum() ], [ 28, 51 + charts.utility.randNum() ], [ 29, 55 + charts.utility.randNum() ], [ 30, 100 + charts.utility.randNum() ] ];

            // make chart
            this.plot = $.plot(
                wrapper,
                [ {
                    label: "Net Revenue",
                    data: this.data.d1
                } ],
                this.options
            );
        }
    };

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkFlotChartLines3 = function () {

        if (! this.length) return;

        charts.chart_lines_fill_nopoints_3.init(this);

    };

    $('[data-toggle="flot-chart-lines-3"]').tkFlotChartLines3();

})(jQuery);
},{"../lib/_skin":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\lib\\_skin.js","./_helper":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\flot\\_helper.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\flot\\_line_fill_nopoints.js":[function(require,module,exports){
(function ($) {

    var skin = require('../lib/_skin')();
    var charts = require('./_helper');

    if (typeof charts == 'undefined')
        return;

    charts.chart_lines_fill_nopoints =
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
            grid: {
                show: true,
                aboveData: false,
                color: colors[ 'default-color' ],
                labelMargin: 5,
                axisMargin: 0,
                borderWidth: 0,
                borderColor: null,
                minBorderMargin: 5,
                clickable: true,
                hoverable: true,
                mouseActiveRadius: 20,
                backgroundColor: {}
            },
            series: {
                grow: {
                    active: false
                },
                lines: {
                    show: true,
                    fill: true,
                    lineWidth: 2,
                    steps: false
                },
                points: {
                    show: false
                }
            },
            legend: {
                position: "nw",
                noColumns: 2
            },
            yaxis: {
                ticks: 4,
                tickDecimals: 0,
                tickColor: '#efefef'
            },
            xaxis: {
                ticks: 11,
                tickDecimals: 0,
                tickColor: 'transparent'
            },
            colors: [],
            shadowSize: 1,
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

            // apply styling
            charts.utility.applyStyle(this);

            // generate some data
            this.data.d1 = [ [ 1, 3 + charts.utility.randNum() ], [ 2, 6 + charts.utility.randNum() ], [ 3, 9 + charts.utility.randNum() ], [ 4, 12 + charts.utility.randNum() ], [ 5, 15 + charts.utility.randNum() ], [ 6, 18 + charts.utility.randNum() ], [ 7, 21 + charts.utility.randNum() ], [ 8, 15 + charts.utility.randNum() ], [ 9, 18 + charts.utility.randNum() ], [ 10, 21 + charts.utility.randNum() ], [ 11, 24 + charts.utility.randNum() ], [ 12, 27 + charts.utility.randNum() ], [ 13, 30 + charts.utility.randNum() ], [ 14, 33 + charts.utility.randNum() ], [ 15, 24 + charts.utility.randNum() ], [ 16, 27 + charts.utility.randNum() ], [ 17, 30 + charts.utility.randNum() ], [ 18, 33 + charts.utility.randNum() ], [ 19, 36 + charts.utility.randNum() ], [ 20, 39 + charts.utility.randNum() ], [ 21, 42 + charts.utility.randNum() ], [ 22, 45 + charts.utility.randNum() ], [ 23, 36 + charts.utility.randNum() ], [ 24, 39 + charts.utility.randNum() ], [ 25, 42 + charts.utility.randNum() ], [ 26, 45 + charts.utility.randNum() ], [ 27, 38 + charts.utility.randNum() ], [ 28, 51 + charts.utility.randNum() ], [ 29, 55 + charts.utility.randNum() ], [ 30, 60 + charts.utility.randNum() ] ];
            this.data.d2 = [ [ 1, charts.utility.randNum() - 5 ], [ 2, charts.utility.randNum() - 4 ], [ 3, charts.utility.randNum() - 4 ], [ 4, charts.utility.randNum() ], [ 5, 4 + charts.utility.randNum() ], [ 6, 4 + charts.utility.randNum() ], [ 7, 5 + charts.utility.randNum() ], [ 8, 5 + charts.utility.randNum() ], [ 9, 6 + charts.utility.randNum() ], [ 10, 6 + charts.utility.randNum() ], [ 11, 6 + charts.utility.randNum() ], [ 12, 2 + charts.utility.randNum() ], [ 13, 3 + charts.utility.randNum() ], [ 14, 4 + charts.utility.randNum() ], [ 15, 4 + charts.utility.randNum() ], [ 16, 4 + charts.utility.randNum() ], [ 17, 5 + charts.utility.randNum() ], [ 18, 5 + charts.utility.randNum() ], [ 19, 2 + charts.utility.randNum() ], [ 20, 2 + charts.utility.randNum() ], [ 21, 3 + charts.utility.randNum() ], [ 22, 3 + charts.utility.randNum() ], [ 23, 3 + charts.utility.randNum() ], [ 24, 2 + charts.utility.randNum() ], [ 25, 4 + charts.utility.randNum() ], [ 26, 4 + charts.utility.randNum() ], [ 27, 5 + charts.utility.randNum() ], [ 28, 2 + charts.utility.randNum() ], [ 29, 2 + charts.utility.randNum() ], [ 30, 3 + charts.utility.randNum() ] ];

            // make chart
            this.plot = $.plot(
                wrapper,
                [ {
                    label: "Visits",
                    data: this.data.d1
                },
                {
                    label: "Unique Visits",
                    data: this.data.d2
                } ],
                this.options
            );
        }
    };

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkFlotChartLines1 = function () {

        if (! this.length) return;

        charts.chart_lines_fill_nopoints.init(this);

    };

    $('[data-toggle="flot-chart-lines-1"]').tkFlotChartLines1();

})(jQuery);
},{"../lib/_skin":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\lib\\_skin.js","./_helper":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\flot\\_helper.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\flot\\_line_fill_nopoints_2.js":[function(require,module,exports){
(function ($) {

    var skin = require('../lib/_skin')();
    var charts = require('./_helper');

    if (typeof charts == 'undefined')
        return;

    charts.chart_lines_fill_nopoints_2 =
    {
        // chart data
        data: {
            d1: []
        },

        // will hold the chart object
        plot: null,

        // chart options
        options: {
            colors: [ config.skins[ skin ][ 'primary-color' ] ],
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
                    lineWidth: 5,
                    steps: false,
                    color: config.skins[ skin ][ 'primary-color' ]
                },
                points: {show: false}
            },
            legend: {position: "nw", backgroundColor: null, backgroundOpacity: 0},
            yaxis: {
                ticks: 3,
                tickSize: 40,
                tickFormatter: function (val, axis) {
                    return val + "k";
                }
            },
            xaxis: {
                ticks: 4,
                tickDecimals: 0,
                tickColor: 'transparent'
            },
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
            this.data.d1 = [ [ 1, 3 + charts.utility.randNum() ], [ 2, 6 + charts.utility.randNum() ], [ 3, 30 + charts.utility.randNum() ], [ 4, 110 + charts.utility.randNum() ], [ 5, 80 + charts.utility.randNum() ], [ 6, 18 + charts.utility.randNum() ], [ 7, 50 + charts.utility.randNum() ], [ 8, 15 + charts.utility.randNum() ], [ 9, 18 + charts.utility.randNum() ], [ 10, 60 + charts.utility.randNum() ], [ 11, 110 + charts.utility.randNum() ], [ 12, 27 + charts.utility.randNum() ], [ 13, 30 + charts.utility.randNum() ], [ 14, 33 + charts.utility.randNum() ], [ 15, 24 + charts.utility.randNum() ], [ 16, 80 + charts.utility.randNum() ], [ 17, 30 + charts.utility.randNum() ], [ 18, 33 + charts.utility.randNum() ], [ 19, 36 + charts.utility.randNum() ], [ 20, 39 + charts.utility.randNum() ], [ 21, 42 + charts.utility.randNum() ], [ 22, 70 + charts.utility.randNum() ], [ 23, 36 + charts.utility.randNum() ], [ 24, 39 + charts.utility.randNum() ], [ 25, 42 + charts.utility.randNum() ], [ 26, 45 + charts.utility.randNum() ], [ 27, 60 + charts.utility.randNum() ], [ 28, 51 + charts.utility.randNum() ], [ 29, 55 + charts.utility.randNum() ], [ 30, 100 + charts.utility.randNum() ] ];

            // make chart
            this.plot = $.plot(
                wrapper,
                [ {
                    label: "Net Revenue",
                    data: this.data.d1
                } ],
                this.options
            );
        }
    };

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkFlotChartLines2 = function () {

        if (! this.length) return;

        charts.chart_lines_fill_nopoints_2.init(this);

    };

    $('[data-toggle="flot-chart-lines-2"]').tkFlotChartLines2();

})(jQuery);
},{"../lib/_skin":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\lib\\_skin.js","./_helper":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\flot\\_helper.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\flot\\_mixed.js":[function(require,module,exports){
(function ($) {

    var skin = require('../lib/_skin')();
    var charts = require('./_helper');

    if (typeof charts == 'undefined')
        return;

    charts.chart_mixed_1 =
    {
        // chart data
        data: {
            d1: []
        },

        // will hold the chart object
        plot: null,

        // chart options
        options: {
            colors: [ "#dedede", config.skins[ skin ][ 'primary-color' ] ],
            grid: {
                color: "#dedede",
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
            legend: {position: "nw", backgroundColor: null, backgroundOpacity: 0},
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
            this.data.d1 = [ [ 1, 3 + charts.utility.randNum() ], [ 2, 6 + charts.utility.randNum() ], [ 3, 30 + charts.utility.randNum() ], [ 4, 110 + charts.utility.randNum() ], [ 5, 80 + charts.utility.randNum() ], [ 6, 18 + charts.utility.randNum() ], [ 7, 50 + charts.utility.randNum() ], [ 8, 15 + charts.utility.randNum() ], [ 9, 18 + charts.utility.randNum() ], [ 10, 60 + charts.utility.randNum() ], [ 11, 110 + charts.utility.randNum() ], [ 12, 27 + charts.utility.randNum() ], [ 13, 30 + charts.utility.randNum() ] ];

            // make chart
            this.plot = $.plot(
                wrapper,
                [ {
                    label: "Net Revenue",
                    data: this.data.d1,
                    bars: {show: true, fill: 1, barWidth: 0.75, align: "center"}
                },
                {
                    data: this.data.d1,
                    lines: {show: true, fill: false},
                    points: {
                        show: true,
                        radius: 5,
                        symbol: "circle",
                        fill: true,
                        fillColor: config.skins[ skin ][ 'primary-color' ],
                        borderColor: "#fff"
                    }
                } ],
                this.options
            );
        }
    };

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkFlotChartMixed = function () {

        if (! this.length) return;

        charts.chart_mixed_1.init(this);

    };

    $('[data-toggle="flot-chart-mixed"]').tkFlotChartMixed();

})(jQuery);
},{"../lib/_skin":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\lib\\_skin.js","./_helper":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\flot\\_helper.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\flot\\_pie.js":[function(require,module,exports){
(function ($) {

    var charts = require('./_helper');

    if (typeof charts == 'undefined')
        return;

    charts.chart_pie =
    {
        // chart data
        data: [
            {label: "USA", data: 38},
            {label: "Brazil", data: 23},
            {label: "India", data: 15},
            {label: "Turkey", data: 9},
            {label: "France", data: 7},
            {label: "China", data: 5},
            {label: "Germany", data: 3}
        ],

        // will hold the chart object
        plot: null,

        // chart options
        options: {
            series: {
                pie: {
                    show: true,
                    highlight: {
                        opacity: 0.1
                    },
                    radius: 1,
                    stroke: {
                        color: '#fff',
                        width: 2
                    },
                    startAngle: 2,
                    combine: {
                        color: '#353535',
                        threshold: 0.05
                    },
                    label: {
                        show: true,
                        radius: 1,
                        formatter: function (label, series) {
                            return '<div class="label label-default">' + label + '&nbsp;' + Math.round(series.percent) + '%</div>';
                        }
                    }
                },
                grow: {active: false}
            },
            colors: [],
            legend: {show: false},
            grid: {
                hoverable: true,
                clickable: true,
                backgroundColor: {}
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : %y.1" + "%",
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

            // apply styling
            charts.utility.applyStyle(this);

            this.plot = $.plot(wrapper, this.data, this.options);
        }
    };

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkFlotChartPie = function () {

        if (! this.length) return;

        charts.chart_pie.init(this);

    };

    $('[data-toggle="flot-chart-pie"]').tkFlotChartPie();

})(jQuery);
},{"./_helper":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\flot\\_helper.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\flot\\_simple.js":[function(require,module,exports){
(function ($) {

    var skin = require('../lib/_skin')();
    var charts = require('./_helper');

    if (typeof charts == 'undefined')
        return;

    charts.chart_simple =
    {
        // data
        data: {
            sin: [],
            cos: []
        },

        // will hold the chart object
        plot: null,

        // chart options
        options: {
            colors: [ config.skins[ skin ][ 'primary-color' ], colors[ 'default-color' ] ],
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
                    lineWidth: 4,
                    steps: false
                },
                points: {
                    show: true,
                    radius: 5,
                    symbol: "circle",
                    fill: true,
                    borderColor: "#fff"
                }
            },
            legend: {position: "se", backgroundColor: null, backgroundOpacity: 0, noColumns: 2},
            shadowSize: 0,
            yaxis: {ticks: 3},
            xaxis: {ticks: 4, tickDecimals: 0, tickColor: 'transparent'},
            tooltip: true, //activate tooltip
            tooltipOpts: {
                content: "%s : %y.3",
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

            if (this.plot === null) {
                for (var i = 0; i < 14; i += 0.5) {
                    this.data.sin.push([ i, Math.sin(i) ]);
                    this.data.cos.push([ i, Math.cos(i) ]);
                }
            }
            this.plot = $.plot(
                wrapper,
                [ {
                    label: "Sin",
                    data: this.data.sin,
                    lines: {fillColor: colors[ 'default-color' ]},
                    points: {fillColor: "#fff"}
                },
                {
                    label: "Cos",
                    data: this.data.cos,
                    lines: {fillColor: "#444"},
                    points: {fillColor: "#fff"}
                } ],
                this.options
            );
        }
    };

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkFlotChartSimple = function () {

        if (! this.length) return;

        charts.chart_simple.init(this);

    };

    $('[data-toggle="flot-chart-simple"]').tkFlotChartSimple();

})(jQuery);
},{"../lib/_skin":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\lib\\_skin.js","./_helper":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\flot\\_helper.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\flot\\main.js":[function(require,module,exports){
require('./_simple');
require('./_mixed');
require('./_line');
require('./_horizontal');
require('./_line_fill_nopoints');
require('./_line_fill_nopoints_2');
require('./_bars-ordered');
require('./_donut');
require('./_bars-stacked');
require('./_pie');
require('./_autoupdate');
},{"./_autoupdate":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\flot\\_autoupdate.js","./_bars-ordered":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\flot\\_bars-ordered.js","./_bars-stacked":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\flot\\_bars-stacked.js","./_donut":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\flot\\_donut.js","./_horizontal":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\flot\\_horizontal.js","./_line":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\flot\\_line.js","./_line_fill_nopoints":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\flot\\_line_fill_nopoints.js","./_line_fill_nopoints_2":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\flot\\_line_fill_nopoints_2.js","./_mixed":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\flot\\_mixed.js","./_pie":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\flot\\_pie.js","./_simple":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\flot\\_simple.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\lib\\_skin.js":[function(require,module,exports){
module.exports = (function () {
    var skin = $.cookie('skin');

    if (typeof skin == 'undefined') {
        skin = 'default';
    }
    return skin;
});
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\main.js":[function(require,module,exports){
require('./morris/main');
require('./sparkline/main');
require('./flot/main');
require('./easy-pie/main');

},{"./easy-pie/main":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\easy-pie\\main.js","./flot/main":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\flot\\main.js","./morris/main":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\morris\\main.js","./sparkline/main":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\sparkline\\main.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\morris\\_area.js":[function(require,module,exports){
(function ($) {
    "use strict";

    $.fn.tkMorrisChartArea = function () {

        if (! this.length) return;

        if (! this.attr('id')) return;

        var skin = require('../lib/_skin')();

        this.empty();

        new Morris.Area({
            lineColors: [ config.skins[ skin ][ 'primary-color' ], colors[ 'danger-color' ] ],
            pointFillColors: config.skins[ skin ][ 'primary-color' ],
            fillOpacity: '0.3',
            element: this.attr('id'),
            data: [
                {y: '1.1.', a: 30, b: 90},
                {y: '2.1.', a: 35, b: 65},
                {y: '3.1.', a: 50, b: 40},
                {y: '4.1.', a: 75, b: 65},
                {y: '5.1.', a: 50, b: 40},
                {y: '6.1.', a: 75, b: 65},
                {y: '7.1.', a: 60, b: 90}
            ],
            xkey: 'y',
            ykeys: [ 'a' ],
            labels: [ 'Series A' ],
            gridTextColor: colors[ 'default-color' ],
            gridTextWeight: 'bold',
            resize: true
        });

    };

    $(function () {

        $('[data-toggle="morris-chart-area"]').tkMorrisChartArea();

        $('[data-skin]').on('click', function () {
            $('[data-toggle="morris-chart-area"]').tkMorrisChartArea();
        });

    });

})(jQuery);
},{"../lib/_skin":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\lib\\_skin.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\morris\\_bar.js":[function(require,module,exports){
(function ($) {
    "use strict";

    $.fn.tkMorrisChartBar = function () {

        if (! this.length) return;

        if (! this.attr('id')) return;

        var skin = require('../lib/_skin')();

        this.empty();

        new Morris.Bar({
            barColors: [ config.skins[ skin ][ 'primary-color' ], colors[ 'default-color' ], colors[ 'danger-color' ] ],
            element: this.attr('id'),
            data: [
                {y: '2006', a: 100, b: 90, c: 40},
                {y: '2007', a: 75, b: 65, c: 100},
                {y: '2008', a: 50, b: 40, c: 30},
                {y: '2009', a: 75, b: 65, c: 85},
                {y: '2010', a: 50, b: 40, c: 45},
                {y: '2011', a: 75, b: 65, c: 90},
                {y: '2012', a: 100, b: 90, c: 80}
            ],
            gridTextColor: colors[ 'default-color' ],
            gridTextWeight: 'bold',
            resize: true,
            xkey: 'y',
            ykeys: [ 'a', 'b', 'c' ],
            labels: [ 'Series A', 'Series B', 'Series C' ]
        });
    };

    $(function () {

        $('[data-toggle="morris-chart-bar"]').tkMorrisChartBar();

        $('[data-skin]').on('click', function(){

            $('[data-toggle="morris-chart-bar"]').tkMorrisChartBar();

        });

    });

})(jQuery);

},{"../lib/_skin":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\lib\\_skin.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\morris\\_donut.js":[function(require,module,exports){
(function ($) {
    "use strict";

    $.fn.tkMorrisChartDonut = function () {

        if (! this.length) return;

        if (! this.attr('id')) return;

        var skin = require('../lib/_skin')();

        this.empty();

        new Morris.Donut({
            element: this.attr('id'),
            colors: [ colors[ 'danger-color' ], config.skins[ skin ][ 'primary-color' ], colors[ 'default-color' ] ],
            data: [
                {label: "Download Sales", value: 12},
                {label: "In-Store Sales", value: 30},
                {label: "Mail-Order Sales", value: 20}
            ]
        });

    };

    $(function () {

        $('[data-toggle="morris-chart-donut"]').tkMorrisChartDonut();

        $('[data-skin]').on('click', function(){

            $('[data-toggle="morris-chart-donut"]').tkMorrisChartDonut();

        });

    });

})(jQuery);
},{"../lib/_skin":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\lib\\_skin.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\morris\\_line.js":[function(require,module,exports){
(function ($) {
    "use strict";

    $.fn.tkMorrisChartLine = function () {

        if (! this.length) return;

        if (! this.attr('id')) return;

        var skin = require('../lib/_skin')();

        this.empty();

        new Morris.Line({
            lineColors: [ config.skins[ skin ][ 'primary-color' ], colors[ 'danger-color' ] ],
            pointFillColors: [ config.skins[ skin ][ 'primary-color' ], colors[ 'danger-color' ] ],
            pointStrokeColors: [ '#ffffff', '#ffffff' ],
            gridTextColor: colors[ 'default-color' ],
            gridTextWeight: 'bold',

            // ID of the element in which to draw the chart.
            element: this.attr('id'),
            // Chart data records -- each entry in this array corresponds to a point on
            // the chart.
            data: [
                {date: '2014-02', a: 2000, b: 2400},
                {date: '2014-03', a: 1200, b: 2500},
                {date: '2014-04', a: 3200, b: 2000},
                {date: '2014-05', a: 1600, b: 1440},
                {date: '2014-06', a: 1290, b: 2830},
                {date: '2014-07', a: 1930, b: 1200},
                {date: '2014-08', a: 2120, b: 3000}
            ],
            // The name of the data record attribute that contains x-values.
            xkey: 'date',
            // A list of names of data record attributes that contain y-values.
            ykeys: [ 'a', 'b' ],
            // Labels for the ykeys -- will be displayed when you hover over the
            // chart.
            labels: [ 'Series A', 'Series B' ],
            resize: true
        });

    };

    $(function () {

        $('[data-toggle="morris-chart-line"]').tkMorrisChartLine();

        $('[data-skin]').on('click', function(){

            $('[data-toggle="morris-chart-line"]').tkMorrisChartLine();

        });

    });

})(jQuery);
},{"../lib/_skin":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\lib\\_skin.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\morris\\main.js":[function(require,module,exports){
require('./_area');
require('./_bar');
require('./_donut');
require('./_line');
},{"./_area":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\morris\\_area.js","./_bar":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\morris\\_bar.js","./_donut":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\morris\\_donut.js","./_line":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\morris\\_line.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\sparkline\\_sparkline.js":[function(require,module,exports){
(function ($) {
    "use strict";

    var skin = require('../lib/_skin')();

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkSparkLine = function () {

        if (! this.length) return;

        this.sparkline(
            this.data('data') || "html", {
                type: 'line',
                height: '24',
                width: '100%',
                spotRadius: '3.2',
                spotColor: config.skins[ skin ][ 'primary-color' ],
                minSpotColor: config.skins[ skin ][ 'primary-color' ],
                maxSpotColor: config.skins[ skin ][ 'primary-color' ],
                highlightSpotColor: colors[ 'danger-color' ],
                lineWidth: '2',
                lineColor: config.skins[ skin ][ 'primary-color' ],
                fillColor: colors[ 'body-bg' ]
            }
        );

    };

    $.fn.tkSparkBar = function () {

        if (! this.length) return;

        this.text(this.find('span').text());

        this.sparkline(
            this.data('data') || "html", {
                type: 'bar',
                height: '70',
                barWidth: 10,
                barSpacing: 8,
                zeroAxis: false,
                stackedBarColor: [ config.skins[ skin ][ 'primary-color' ], colors[ 'default-light-color' ] ],
                colorMap: this.data('colors') ? [ config.skins[ skin ][ 'primary-color' ], colors[ 'success-color' ], colors[ 'danger-color' ], colors[ 'default-light-color' ] ] : [],
                enableTagOptions: true
            }
        );

    };

    $(".sparkline-bar").each(function () {
        $(this).tkSparkBar();
    });

    $(".sparkline-line").each(function () {
        $(this).tkSparkLine();
    });

})(jQuery);
},{"../lib/_skin":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\lib\\_skin.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\sparkline\\main.js":[function(require,module,exports){
require('./_sparkline');

},{"./_sparkline":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\sparkline\\_sparkline.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_bootstrap-carousel.js":[function(require,module,exports){
(function ($) {
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkCarousel = function () {

        if (! this.length) return;

        this.carousel();

        this.find('[data-slide]').click(function (e) {
            e.preventDefault();
        });

    };

})(jQuery);
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_bootstrap-collapse.js":[function(require,module,exports){
(function ($) {
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkCollapse = function () {

        if (! this.length) return;

        var target = this.attr('href') || this.attr('target');
        if (! target) return;

        this.click(function(e){
            e.preventDefault();
        });

        $(target).collapse({toggle: false});

    };

})(jQuery);
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_bootstrap-modal.js":[function(require,module,exports){
(function ($) {
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkModal = function () {

        if (! this.length) return;

        var target = this.attr('href') || this.attr('target');
        if (! target) return;

        this.click(function (e) {
            e.preventDefault();
        });

        $(target).modal({show: false});

    };

    /**
     * Modal creator for the demo page.
     * Allows to explore different modal types.
     * For demo purposes only.
     */

    // Process the modal via Handlebars templates
    var modal = function (options) {
        var source = $("#" + options.template).html();
        var template = Handlebars.compile(source);
        return template(options);
    };

    var randomId = function () {
        /** @return String */
        var S4 = function () {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    };

    $.fn.tkModalDemo = function () {

        if (! this.length) return;

        var targetId = this.attr('href') || this.attr('target'),
            target = $(targetId);

        if (! targetId) {
            targetId = randomId();
            this.attr('data-target', '#' + targetId);
        }

        targetId.replace('#', '');

        if (! target.length) {
            target = $(modal({
                id: targetId,
                template: this.data('template') || 'tk-modal-demo',
                modalOptions: this.data('modalOptions') || '',
                dialogOptions: this.data('dialogOptions') || '',
                contentOptions: this.data('contentOptions') || ''
            }));
            $('body').append(target);
            target.modal({show: false});
        }

        this.click(function (e) {
            e.preventDefault();
            target.modal('toggle');
        });

    };

    $('[data-toggle="tk-modal-demo"]').each(function () {
        $(this).tkModalDemo();
    });

})(jQuery);
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_bootstrap-switch.js":[function(require,module,exports){
(function ($) {
    "use strict";

    $('[data-toggle="switch-checkbox"]').each(function () {

        $(this).bootstrapSwitch({
            offColor: 'danger'
        });

    });

})(jQuery);
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_check-all.js":[function(require,module,exports){
(function ($) {
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkCheckAll = function(){

        if (! this.length) return;

        this.on('click', function () {
            $($(this).data('target')).find(':checkbox').prop('checked', this.checked);
        });

    };

    // Check All Checkboxes
    $('[data-toggle="check-all"]').tkCheckAll();

})(jQuery);
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_cover.js":[function(require,module,exports){
(function ($) {
    "use strict";

    /**
     * Conserve aspect ratio of the orignal region. Useful when shrinking/enlarging
     * images to fit into a certain area.
     *
     * @param {Number} srcWidth Source area width
     * @param {Number} srcHeight Source area height
     * @param {Number} maxWidth Fittable area maximum available width
     * @param {Number} maxHeight Fittable area maximum available height
     * @return {Object} { width, heigth }
     */
    var aspectRatioFit = function (srcWidth, srcHeight, maxWidth, maxHeight) {

        var wRatio = maxWidth / srcWidth,
            hRatio = maxHeight / srcHeight,
            width = srcWidth,
            height = srcHeight;

        if (srcWidth / maxWidth < srcHeight / maxHeight) {
            width = maxWidth;
            height = srcHeight * wRatio;
        } else {
            width = srcWidth * hRatio;
            height = maxHeight;
        }

        return {width: width, height: height};
    };

    $.fn.tkCover = function () {

        if (! this.length) return;

        this.filter(':visible').not('[class*="height"]').each(function () {
            var t = $(this),
                i = t.find('img:first');

            if (i.length) {
                $.loadImage(i.attr('src')).done(function (img) {
                    t.height(i.height());
                    $('.overlay-full', t).innerHeight(i.height());
                    $(document).trigger('domChanged');
                });
            }
            else {
                i = t.find('.img:first');
                t.height(i.height());
                $('.overlay-full', t).innerHeight(i.height());
                $(document).trigger('domChanged');
            }
        });

        this.filter(':visible').filter('[class*="height"]').each(function () {
            var t = $(this),
                img = t.find('img') || t.find('.img');

            img.each(function () {
                var i = $(this);
                if (i.data('autoSize') === false) {
                    return true;
                }
                if (i.is('img')) {
                    $.loadImage(i.attr('src')).done(function (img) {
                        i.removeAttr('style');
                        i.css(aspectRatioFit(i.width(), i.height(), t.width(), t.height()));
                    });
                }
                else {
                    i.removeAttr('style');
                    i.css(aspectRatioFit(i.width(), i.height(), t.width(), t.height()));
                }
            });
        });

    };

    function height() {

        $('.cover.overlay').each(function () {
            $(this).tkCover();
        });

    }

    $(document).ready(height);
    $(window).on('load', height);

    var t;
    $(window).on("debouncedresize", function () {
        clearTimeout(t);
        t = setTimeout(height, 200);
    });

})(jQuery);

},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_datepicker.js":[function(require,module,exports){
(function ($) {
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkDatePicker = function () {

        if (! this.length) return;

        if (typeof $.fn.datepicker != 'undefined') {

            this.datepicker();

        }

    };

    $('.datepicker').tkDatePicker();

})(jQuery);
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_daterangepicker.js":[function(require,module,exports){
(function ($) {
    "use strict";

    $.fn.tkDaterangepickerReport = function () {
        var e = this;
        this.daterangepicker(
            {
                ranges: {
                    'Today': [ moment(), moment() ],
                    'Yesterday': [ moment().subtract('days', 1), moment().subtract('days', 1) ],
                    'Last 7 Days': [ moment().subtract('days', 6), moment() ],
                    'Last 30 Days': [ moment().subtract('days', 29), moment() ],
                    'This Month': [ moment().startOf('month'), moment().endOf('month') ],
                    'Last Month': [ moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month') ]
                },
                startDate: moment().subtract('days', 29),
                endDate: moment()
            },
            function (start, end) {
                var output = start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY');
                e.find('span').html(output);
            }
        );
    };

    $.fn.tkDaterangepickerReservation = function () {
        this.daterangepicker({
            timePicker: true,
            timePickerIncrement: 30,
            format: 'MM/DD/YYYY h:mm A'
        });
    };

    $('.daterangepicker-report').tkDaterangepickerReport();

    $('.daterangepicker-reservation').tkDaterangepickerReservation();

})(jQuery);
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_expandable.js":[function(require,module,exports){
(function ($) {
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     * @todo: Angular directive.
     */
    $.fn.tkExpandable = function () {

        if (! this.length) return;

        this.find('.expandable-content').append('<div class="expandable-indicator"><i></i></div>');

    };

    $('.expandable').each(function () {
        $(this).tkExpandable();
    });

    $('body').on('click', '.expandable-indicator', function(){
        $(this).closest('.expandable').toggleClass('expandable-open');
    });

    $('body').on('click', '.expandable-trigger:not(.expandable-open)', function(){
        $(this).addClass('expandable-open');
    });

}(jQuery));
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_iframe.js":[function(require,module,exports){
(function () {
    "use strict";

    // if we're inside an iframe, reload without iframe
    if (window.location != window.parent.location)
        top.location.href = document.location.href;

})();

},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_minicolors.js":[function(require,module,exports){
(function ($) {
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     * @todo: Angular directive.
     */
    $.fn.tkMiniColors = function () {

        if (! this.length) return;

        if (typeof $.fn.minicolors != 'undefined') {

            this.minicolors({
                control: this.attr('data-control') || 'hue',
                defaultValue: this.attr('data-defaultValue') || '',
                inline: this.attr('data-inline') === 'true',
                letterCase: this.attr('data-letterCase') || 'lowercase',
                opacity: this.attr('data-opacity'),
                position: this.attr('data-position') || 'bottom left',
                change: function (hex, opacity) {
                    if (! hex) return;
                    if (opacity) hex += ', ' + opacity;
                    if (typeof console === 'object') {
                        console.log(hex);
                    }
                },
                theme: 'bootstrap'
            });

        }

    };

    $('.minicolors').each(function () {

        $(this).tkMiniColors();

    });

})(jQuery);
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_nestable.js":[function(require,module,exports){
(function ($) {
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     * @todo: Angular directive.
     */
    $.fn.tkNestable = function () {

        if (! this.length) return;

        if (typeof $.fn.nestable != 'undefined') {

            this.nestable({
                rootClass: 'nestable',
                listNodeName: 'ul',
                listClass: 'nestable-list',
                itemClass: 'nestable-item',
                dragClass: 'nestable-drag',
                handleClass: 'nestable-handle',
                collapsedClass: 'nestable-collapsed',
                placeClass: 'nestable-placeholder',
                emptyClass: 'nestable-empty'
            });

        }

    };

    $('.nestable').tkNestable();

})(jQuery);

},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_panel-collapse.js":[function(require,module,exports){
(function ($) {
    "use strict";

    var randomId = function() {
        /** @return String */
        var S4 = function() {
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    };

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkPanelCollapse = function () {

        if (! this.length) return;

        var body = $('.panel-body', this),
            id = body.attr('id') || randomId(),
            collapse = $('<div/>');

        collapse
            .attr('id', id)
            .addClass('collapse' + (this.data('open') ? ' in' : ''))
            .append(body.clone());

        body.remove();

        $(this).append(collapse);

        $('.panel-collapse-trigger', this)
            .attr('data-toggle', 'collapse' )
            .attr('data-target', '#' + id)
            .collapse({ trigger: false });

    };

    $('[data-toggle="panel-collapse"]').each(function(){
        $(this).tkPanelCollapse();
    });

})(jQuery);

},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_progress-bars.js":[function(require,module,exports){
(function ($) {

    // Progress Bar Animation
    $('.progress-bar').each(function () {
        $(this).width($(this).attr('aria-valuenow') + '%');
    });

})(jQuery);
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_select2.js":[function(require,module,exports){
(function ($) {
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkSelect2 = function () {

        if (! this.length) return;

        if (typeof $.fn.select2 != 'undefined') {

            var t = this,
                options = {
                    allowClear: t.data('allowClear')
                };

            if (t.is('button')) return true;
            if (t.is('input[type="button"]')) return true;

            if (t.is('[data-toggle="select2-tags"]')) {
                options.tags = t.data('tags').split(',');
            }

            t.select2(options);

        }

    };

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkSelect2Enable = function () {

        if (! this.length) return;

        if (typeof $.fn.select2 != 'undefined') {

            this.click(function () {
                $($(this).data('target')).select2("enable");
            });

        }

    };

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkSelect2Disable = function () {

        if (! this.length) return;

        if (typeof $.fn.select2 != 'undefined') {

            this.click(function () {
                $(this.data('target')).select2("disable");
            });

        }

    };

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkSelect2Flags = function () {

        if (! this.length) return;

        if (typeof $.fn.select2 != 'undefined') {

            // templating
            var format = function (state) {
                if (! state.id) return state.text;
                return "<img class='flag' src='http://select2.github.io/select2/images/flags/" + state.id.toLowerCase() + ".png'/>" + state.text;
            };

            this.select2({
                formatResult: format,
                formatSelection: format,
                escapeMarkup: function (m) {
                    return m;
                }
            });

        }

    };

    $('[data-toggle*="select2"]').each(function() {

        $(this).tkSelect2();

    });

    $('[data-toggle="select2-enable"]').tkSelect2Enable();

    $('[data-toggle="select2-disable"]').tkSelect2Disable();

    $("#select2_7").tkSelect2Flags();

})(jQuery);

},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_selectpicker.js":[function(require,module,exports){
(function ($) {
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkSelectPicker = function () {

        if (! this.length) return;

        if (typeof $.fn.selectpicker != 'undefined') {

            this.selectpicker({
                width: this.data('width') || '100%'
            });

        }

    };

    $(function () {

        $('.selectpicker').each(function () {
           $(this).tkSelectPicker();
        });

    });

})(jQuery);

},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_show-hover.js":[function(require,module,exports){
(function ($) {

    var showHover = function () {
        $('[data-show-hover]').hide().each(function () {
            var self = $(this),
                parent = $(this).data('showHover');

            self.closest(parent).on('mouseover', function (e) {
                e.stopPropagation();
                self.show();
            }).on('mouseout', function () {
                self.hide();
            });
        });
    };

    showHover();

    window.showHover = showHover;

})(jQuery);
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_skin.js":[function(require,module,exports){
module.exports=require("C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\lib\\_skin.js")
},{"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\lib\\_skin.js":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\lib\\_skin.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_slider.js":[function(require,module,exports){
(function ($) {
    "use strict";

    var bars = function(el){
        $('.slider-handle', el).html('<i class="fa fa-bars fa-rotate-90"></i>');
    };

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkSlider = function () {

        if (! this.length) return;

        if (typeof $.fn.slider != 'undefined') {

            this.slider();

            bars(this);

        }

    };

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkSliderFormatter = function () {

        if (! this.length) return;

        if (typeof $.fn.slider != 'undefined') {

            this.slider({
                formatter: function (value) {
                    return 'Current value: ' + value;
                }
            });

            bars(this);

        }

    };

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkSliderUpdate = function () {

        if (! this.length) return;

        if (typeof $.fn.slider != 'undefined') {

            this.on("slide", function (slideEvt) {
                $(this.attr('data-on-slide')).text(slideEvt.value);
            });

            bars(this);

        }

    };

    $('[data-slider="default"]').tkSlider();

    $('[data-slider="formatter"]').tkSliderFormatter();

    $('[data-on-slide]').tkSliderUpdate();

})(jQuery);
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_summernote.js":[function(require,module,exports){
(function ($) {
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkSummernote = function () {

        if (! this.length) return;

        if (typeof $.fn.summernote != 'undefined') {

            this.summernote({
                height: 300
            });

        }

    };

    $(function () {

        $('.summernote').each(function () {
           $(this).tkSummernote();
        });

    });

})(jQuery);

},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_tables.js":[function(require,module,exports){
(function ($) {
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkDataTable = function(){

        if (! this.length) return;

        if (typeof $.fn.dataTable != 'undefined') {

            this.dataTable();

        }

    };

    $('[data-toggle="data-table"]').tkDataTable();

})(jQuery);
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_tabs.js":[function(require,module,exports){
(function ($) {

    var skin = require('./_skin')();

    $('.tabbable .nav-tabs').each(function(){
        var tabs = $(this).niceScroll({
            cursorborder: 0,
            cursorcolor: config.skins[ skin ][ 'primary-color' ],
            horizrailenabled: true,
            oneaxismousemode: true
        });

        var _super = tabs.getContentSize;
        tabs.getContentSize = function() {
            var page = _super.call(tabs);
            page.h = tabs.win.height();
            return page;
        };
    });

    $('[data-scrollable]').getNiceScroll().resize();

    $('.tabbable .nav-tabs a').on('shown.bs.tab', function(e){
        var tab = $(this).closest('.tabbable');
        var target = $(e.target),
            targetPane = target.attr('href') || target.data('target');

        // refresh tabs with horizontal scroll
        tab.find('.nav-tabs').getNiceScroll().resize();

        // refresh [data-scrollable] within the activated tab pane
        $(targetPane).find('[data-scrollable]').getNiceScroll().resize();
    });

}(jQuery));
},{"./_skin":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_skin.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_tooltip.js":[function(require,module,exports){
(function ($) {
    "use strict";

    // Tooltip
    $("body").tooltip({selector: '[data-toggle="tooltip"]', container: "body"});

})(jQuery);
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_touchspin.js":[function(require,module,exports){
(function ($) {
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkTouchSpin = function () {

        if (! this.length) return;

        if (typeof $.fn.TouchSpin != 'undefined') {

            this.TouchSpin();

        }

    };

    $('[data-toggle="touch-spin"]').tkTouchSpin();

}(jQuery));
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_tree.js":[function(require,module,exports){
(function ($) {

    var tree_glyph_options = {
        map: {
            checkbox: "fa fa-square-o",
            checkboxSelected: "fa fa-check-square",
            checkboxUnknown: "fa fa-check-square fa-muted",
            error: "fa fa-exclamation-triangle",
            expanderClosed: "fa fa-caret-right",
            expanderLazy: "fa fa-angle-right",
            expanderOpen: "fa fa-caret-down",
            doc: "fa fa-file-o",
            noExpander: "",
            docOpen: "fa fa-file",
            loading: "fa fa-refresh fa-spin",
            folder: "fa fa-folder",
            folderOpen: "fa fa-folder-open"
        }
    },
    tree_dnd_options = {
        autoExpandMS: 400,
            focusOnClick: true,
            preventVoidMoves: true, // Prevent dropping nodes 'before self', etc.
            preventRecursiveMoves: true, // Prevent dropping nodes on own descendants
            dragStart: function(node, data) {
            /** This function MUST be defined to enable dragging for the tree.
             *  Return false to cancel dragging of node.
             */
            return true;
        },
        dragEnter: function(node, data) {
            /** data.otherNode may be null for non-fancytree droppables.
             *  Return false to disallow dropping on node. In this case
             *  dragOver and dragLeave are not called.
             *  Return 'over', 'before, or 'after' to force a hitMode.
             *  Return ['before', 'after'] to restrict available hitModes.
             *  Any other return value will calc the hitMode from the cursor position.
             */
            // Prevent dropping a parent below another parent (only sort
            // nodes under the same parent)
            /*
            if(node.parent !== data.otherNode.parent){
                return false;
            }
            // Don't allow dropping *over* a node (would create a child)
            return ["before", "after"];
            */
            return true;
        },
        dragDrop: function(node, data) {
            /** This function MUST be defined to enable dropping of items on
             *  the tree.
             */
            data.otherNode.moveTo(node, data.hitMode);
        }
    };

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkFancyTree = function(){

        if (! this.length) return;

        if (typeof $.fn.fancytree == 'undefined') return;

        var extensions = [ "glyph" ];
        if (typeof this.attr('data-tree-dnd') !== "undefined") {
            extensions.push( "dnd" );
        }
        this.fancytree({
            extensions: extensions,
            glyph: tree_glyph_options,
            dnd: tree_dnd_options,
            clickFolderMode: 3,
            checkbox: typeof this.attr('data-tree-checkbox') !== "undefined" || false,
            selectMode: typeof this.attr('data-tree-select') !== "undefined" ? parseInt(this.attr('data-tree-select')) : 2
        });

    };

    // using default options
    $('[data-toggle="tree"]').each(function () {
        $(this).tkFancyTree();
    });

}(jQuery));
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_wizard.js":[function(require,module,exports){
(function ($) {
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkWizard = function () {

        if (! this.length) return;

        if (typeof $.fn.slick == 'undefined') return;

        var t = this,
            container = t.closest('.wizard-container');

        t.slick({
            dots: false,
            arrows: false,
            slidesToShow: 1,
            rtl: this.data('rtl'),
            slide: 'fieldset',
            onAfterChange: function (wiz, index) {
                $(document).trigger('after.wizard.step', {
                    wiz: wiz,
                    target: index,
                    container: container,
                    element: t
                });
            }
        });

        container.find('.wiz-next').click(function (e) {
            e.preventDefault();
            t.slickNext();
        });

        container.find('.wiz-prev').click(function (e) {
            e.preventDefault();
            t.slickPrev();
        });

        container.find('.wiz-step').click(function (e) {
            e.preventDefault();
            t.slickGoTo($(this).data('target'));
        });

        $(document).on('show.bs.modal', function () {
            t.closest('.modal-body').hide();
        });

        $(document).on('shown.bs.modal', function () {
            t.closest('.modal-body').show();
            t.slickSetOption('dots', false, true);
        });

    };

    $('[data-toggle="wizard"]').each(function () {
        $(this).tkWizard();
    });

    /**
     * By leveraging events we can hook into the wizard to add functionality.
     * This example updates the progress bar after the wizard step changes.
     */
    $(document).on('after.wizard.step', function (event, data) {

        if (data.container.is('#wizard-demo-1')) {

            var target = data.container.find('.wiz-progress li:eq(' + data.target + ')');

            data.container.find('.wiz-progress li').removeClass('active complete');

            target.addClass('active');

            target.prevAll().addClass('complete');

        }

    });

}(jQuery));
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
},{"./_carousel":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_carousel.js","./_check-all":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_check-all.js","./_collapse":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_collapse.js","./_cover":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_cover.js","./_datepicker":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_datepicker.js","./_daterangepicker":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_daterangepicker.js","./_expandable":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_expandable.js","./_minicolors":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_minicolors.js","./_modal":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_modal.js","./_nestable":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_nestable.js","./_panel-collapse":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_panel-collapse.js","./_select2":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_select2.js","./_selectpicker":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_selectpicker.js","./_slider":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_slider.js","./_summernote":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_summernote.js","./_tables":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_tables.js","./_tabs":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_tabs.js","./_touchspin":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_touchspin.js","./_tree":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_tree.js","./_wizard":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\_wizard.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\main.js":[function(require,module,exports){
require('./_tabs');
require('./_tree');
require('./_show-hover');
require('./_daterangepicker');
require('./_expandable');
require('./_nestable');
require('./_cover');
require('./_tooltip');
require('./_tables');
require('./_check-all');
require('./_progress-bars');
require('./_iframe');
require('./_bootstrap-collapse');
require('./_bootstrap-carousel');
require('./_bootstrap-modal');
require('./_panel-collapse');

// Forms
require('./_touchspin');
require('./_select2');
require('./_slider');
require('./_selectpicker');
require('./_datepicker');
require('./_minicolors');
require('./_bootstrap-switch');
require('./_wizard');
require('./_summernote');
},{"./_bootstrap-carousel":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_bootstrap-carousel.js","./_bootstrap-collapse":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_bootstrap-collapse.js","./_bootstrap-modal":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_bootstrap-modal.js","./_bootstrap-switch":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_bootstrap-switch.js","./_check-all":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_check-all.js","./_cover":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_cover.js","./_datepicker":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_datepicker.js","./_daterangepicker":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_daterangepicker.js","./_expandable":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_expandable.js","./_iframe":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_iframe.js","./_minicolors":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_minicolors.js","./_nestable":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_nestable.js","./_panel-collapse":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_panel-collapse.js","./_progress-bars":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_progress-bars.js","./_select2":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_select2.js","./_selectpicker":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_selectpicker.js","./_show-hover":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_show-hover.js","./_slider":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_slider.js","./_summernote":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_summernote.js","./_tables":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_tables.js","./_tabs":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_tabs.js","./_tooltip":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_tooltip.js","./_touchspin":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_touchspin.js","./_tree":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_tree.js","./_wizard":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\_wizard.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\layout\\js\\_async.js":[function(require,module,exports){
function contentLoaded(win, fn) {

    var done = false, top = true,

        doc = win.document,
        root = doc.documentElement,
        modern = doc.addEventListener,

        add = modern ? 'addEventListener' : 'attachEvent',
        rem = modern ? 'removeEventListener' : 'detachEvent',
        pre = modern ? '' : 'on',

        init = function (e) {
            if (e.type == 'readystatechange' && doc.readyState != 'complete') return;
            (e.type == 'load' ? win : doc)[ rem ](pre + e.type, init, false);
            if (! done && (done = true)) fn.call(win, e.type || e);
        },

        poll = function () {
            try {
                root.doScroll('left');
            } catch (e) {
                setTimeout(poll, 50);
                return;
            }
            init('poll');
        };

    if (doc.readyState == 'complete') fn.call(win, 'lazy');
    else {
        if (! modern && root.doScroll) {
            try {
                top = ! win.frameElement;
            } catch (e) {
            }
            if (top) poll();
        }
        doc[ add ](pre + 'DOMContentLoaded', init, false);
        doc[ add ](pre + 'readystatechange', init, false);
        win[ add ](pre + 'load', init, false);
    }
}

module.exports = function(urls, callback) {

    var asyncLoader = function (urls, callback) {

        urls.foreach(function (i, file) {
            loadCss(file);
        });

        // checking for a callback function
        if (typeof callback == 'function') {
            // calling the callback
            contentLoaded(window, callback);
        }
    };

    var loadCss = function (url) {
        var link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = url;
        document.getElementsByTagName('head')[ 0 ].appendChild(link);
    };

    // simple foreach implementation
    Array.prototype.foreach = function (callback) {
        for (var i = 0; i < this.length; i ++) {
            callback(i, this[ i ]);
        }
    };

    asyncLoader(urls, callback);

};
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\layout\\js\\_breakpoints.js":[function(require,module,exports){
(function ($) {

    $(window).setBreakpoints({
        distinct: true,
        breakpoints: [ 320, 480, 768, 1024 ]
    });

})(jQuery);
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\layout\\js\\_gridalicious.js":[function(require,module,exports){
(function ($) {
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkGridalicious = function () {

        if (! this.length) return;

        this.gridalicious({
            gutter: this.data('gutter') || 15,
            width: this.data('width') || 370,
            selector: '> div',
            animationOptions: {
                complete: function () {
                    $(window).trigger('resize');
                }
            }
        });

    };

    $('[data-toggle*="gridalicious"]').each(function () {
        $(this).tkGridalicious();
    });

})(jQuery);
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\layout\\js\\_isotope.js":[function(require,module,exports){
(function ($) {
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkIsotope = function () {

        if (! this.length) return;

        this.isotope({
            layoutMode: this.data('layoutMode') || "packery",
            itemSelector: '.item'
        });

        /*
        this.isotope('on', 'layoutComplete', function(){
            $(window).trigger('resize');
        });
        */

    };

    $(function(){

        setTimeout(function () {
            $('[data-toggle="isotope"]').each(function () {
                $(this).tkIsotope();
            });
        }, 300);

        $(document).on('domChanged', function(){
            $('[data-toggle="isotope"]').each(function(){
                $(this).isotope();
            });
        });

    });

})(jQuery);

},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\layout\\js\\_parallax.js":[function(require,module,exports){
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
// MIT license
(function () {
    var lastTime = 0;
    var vendors = [ 'ms', 'moz', 'webkit', 'o' ];
    for (var x = 0; x < vendors.length && ! window.requestAnimationFrame; ++ x) {
        window.requestAnimationFrame = window[ vendors[ x ] + 'RequestAnimationFrame' ];
        window.cancelAnimationFrame = window[ vendors[ x ] + 'CancelAnimationFrame' ] || window[ vendors[ x ] + 'CancelRequestAnimationFrame' ];
    }

    if (! window.requestAnimationFrame)
        window.requestAnimationFrame = function (callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function () {
                    callback(currTime + timeToCall);
                },
                timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (! window.cancelAnimationFrame)
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
}());

(function ($, window) {
    "use strict";

    $.fn.tkParallax = function () {

        if (Modernizr.touch) return;

        var getOptions = function (e) {
            return {
                speed: e.data('speed') || 4,
                translate: e.data('speed') || true,
                translateWhen: e.data('translateWhen') || 'inViewportTop',
                autoOffset: e.data('autoOffset'),
                offset: e.data('offset') || 0,
                opacity: e.data('opacity')
            };
        };

        var $window = $(window),
            $windowContent = $('.st-content-inner'),
            $element = this;

        var ticking = false,
            $scrollable = null,
            lastScrollTop = 0;

        var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);

        var requestTick = function (e) {
            if (! ticking) {
                $scrollable = $(e.currentTarget);
                // although Safari has support for requestAnimationFrame,
                // the animation in this case is choppy so we'll just run it directly
                if (isSafari) {
                    animate();
                } else {
                    window.requestAnimationFrame(animate);
                    ticking = true;
                }
            }
        };

        // Translates an element on the Y axis using translate3d to ensure
        // that the rendering is done by the GPU
        var translateY = function (elm, value) {
            var translate = 'translate3d(0px,' + value + 'px, 0px)';
            elm.style[ '-webkit-transform' ] = translate;
            elm.style[ '-moz-transform' ] = translate;
            elm.style[ '-ms-transform' ] = translate;
            elm.style[ '-o-transform' ] = translate;
            elm.style.transform = translate;
        };

        var layers = $element.find('.parallax-layer');

        var init = function () {
            layers.each(function () {

                var layer = $(this),
                    layerOptions = getOptions(layer),
                    height = $element.outerHeight(true);

                if (layerOptions.translate) {
                    if (layer.is('img') && layerOptions.autoOffset) {
                        $.loadImage(layer.attr('src')).done(function () {
                            layer.removeAttr('style');
                            var layerHeight = layer.height();
                            var offset = layerHeight * 0.33;
                            if ((offset + height) > layerHeight) {
                                offset = layerHeight - height;
                            }
                            offset = offset * - 1;
                            layer.attr('data-offset', offset);
                            translateY(layer.get(0), offset);
                        });
                    }
                }

            });
        };

        init();
        $(window).on("debouncedresize", init);

        var animate = function () {
            var scrollTop = parseInt($scrollable.scrollTop());
            var scrollableTop = $scrollable.is($window) ? 0 : $scrollable.offset().top;
            var height = $element.outerHeight(true);
            var bodyPadding = {
                top: parseInt($(document.body).css('padding-top')),
                bottom: parseInt($(document.body).css('padding-bottom'))
            };
            var windowHeight = $scrollable.innerHeight();
            var windowBottom = scrollTop + windowHeight - (bodyPadding.bottom + bodyPadding.top);
            var top = $element.offset().top - scrollableTop - bodyPadding.top;
            var bottom = top + height;
            var topAbs = Math.abs(top);
            var pos = top / windowHeight * 100;
            var opacityKey = height * 0.5;
            var when = {};

            /*
             * ONLY when the scrollable element IS NOT the window
             */

            // when the element is anywhere in viewport
            when.inViewport = (bottom > 0) && (top < windowHeight);

            // when the top of the viewport is crossing the element
            when.inViewportTop = (bottom > 0) && (top < 0);

            // when the bottom of the viewport is crossing the element
            when.inViewportBottom = (bottom > 0) && (top < windowHeight) && (bottom > windowHeight);

            /*
             * ONLY when the scrollable element IS the window
             */

            if ($scrollable.is($window)) {

                // when the window is scrollable and the element is completely in the viewport
                when.inWindowViewportFull = (top >= scrollTop) && (bottom <= windowBottom);

                when.inWindowViewport2 = (top >= scrollTop) && (top <= windowBottom);

                when.inWindowViewport3 = (bottom >= scrollTop) && (bottom <= windowBottom);

                when.inWindowViewport4 = (bottom >= scrollTop) && (bottom >= windowHeight) && (height > windowHeight);

                // when the window is scrollable and the top of the viewport is crossing the element
                when.inWindowViewportTop = ! when.inWindowViewport2 && (when.inWindowViewport3 || when.inWindowViewport4);

                // when the window is scrollable and the bottom of the viewport is crossing the element
                when.inWindowViewportBottom = when.inWindowViewport2 && ! when.inWindowViewport3;

                // when the window is scrollable and the element is anywhere in viewport
                when.inWindowViewport = when.inWindowViewportTop || when.inWindowViewportBottom || when.inWindowViewportFull;

                when.inViewport = when.inWindowViewport;
                when.inViewportTop = when.inWindowViewportTop;
                when.inViewportBottom = when.inWindowViewportBottom;

                pos = (top - scrollTop) / windowHeight * 100;
            }

            if (when.inViewportTop && when.inViewportBottom) {
                when.inViewportBottom = false;
            }

            if (! isNaN(scrollTop)) {
                layers.each(function () {

                    var layer = $(this);
                    var layerOptions = getOptions(layer);

                    var ty = (windowHeight + height) - bottom;

                    if ($scrollable.is($window)) {
                        ty = windowBottom - top;
                    }

                    if (layerOptions.translate) {

                        var layerPos = (- 1 * pos * layerOptions.speed) + layerOptions.offset;
                        var layerHeight = layer.height();

                        if (when.inViewport && ! when.inViewportTop && ! when.inViewportBottom) {
                            if (layer.is('img') && layerHeight > height) {
                                if ((Math.abs(layerPos) + height) > layerHeight) {
                                    layerPos = (layerHeight - height) * - 1;
                                }
                            }
                            if (! layer.is('img')) {
                                layerPos = 0;
                            }
                        }

                        if (when.inViewportTop && ((layer.is('img') && layerHeight == height) || ! layer.is('img') )) {
                            layerPos = Math.abs(layerPos);
                        }

                        if (when.inViewportBottom && ! layer.is('img')) {
                            layerPos = height - ty;

                            // scrolling up
                            if (scrollTop < lastScrollTop) {
                                layerPos = layerPos * - 1;
                            }
                        }

                        if (when.inViewport) {
                            layerPos = (layerPos).toFixed(5);
                            if (layerHeight > $window.height() && scrollTop <= 0) {
                                layerPos = 0;
                            }
                            translateY(layer.get(0), layerPos);
                        }

                    }

                    if (layerOptions.opacity) {

                        // fade in
                        if (when.inViewportBottom) {

                            var y, yP;

                            if ($scrollable.is($window)) {

                                y = ty;
                                yP = (y / height).toFixed(5);

                                if (y > opacityKey) {
                                    layer.css({opacity: yP});
                                }
                                else {
                                    layer.css({opacity: 0});
                                }
                            }
                            else {
                                if (bottom < (windowHeight + opacityKey)) {

                                    y = (windowHeight + opacityKey) - bottom;
                                    yP = (y / opacityKey).toFixed(5);

                                    layer.css({opacity: yP});
                                } else {
                                    layer.css({opacity: 0});
                                }
                            }
                        }

                        // fade out
                        else if (when.inViewportTop) {
                            var topOrigin = $scrollable.is($window) ? scrollTop - top : topAbs;
                            if (topOrigin > opacityKey) {
                                layer.css({
                                    'opacity': (1 - (topOrigin / height)).toFixed(5)
                                });
                            } else {
                                layer.css({'opacity': 1});
                            }
                        }

                        // reset
                        else {
                            layer.css({'opacity': 1});
                        }

                        if (when.inViewportBottom && scrollTop <= 0) {
                            layer.css({'opacity': 1});
                        }

                    }

                });

                lastScrollTop = scrollTop;
            }

            ticking = false;
        };

        if ($windowContent.length) {
            $windowContent.scroll(requestTick);
        } else {
            $window.scroll(requestTick);
        }

    };

    $('.parallax').each(function () {
        $(this).tkParallax();
    });

})(jQuery, window);
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\layout\\js\\_scrollable.js":[function(require,module,exports){
(function ($) {
    "use strict";

    var skin = require('./_skin')();

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkScrollable = function (options) {

        if (! this.length) return;

        var settings = $.extend({
            horizontal: false
        }, options);

        var nice = this.niceScroll({
            cursorborder: 0,
            cursorcolor: config.skins[ skin ][ 'primary-color' ],
            horizrailenabled: settings.horizontal
        });

        if (! settings.horizontal) return;

        var _super = nice.getContentSize;

        nice.getContentSize = function () {
            var page = _super.call(nice);
            page.h = nice.win.height();
            return page;
        };

    };

    $('[data-scrollable]').tkScrollable();

    $('[data-scrollable-h]').each(function () {

       $(this).tkScrollable({ horizontal: true });

    });

    var t;
    $(window).on('debouncedresize', function () {
        clearTimeout(t);
        t = setTimeout(function () {
            $('[data-scrollable], [data-scrollable-h]').getNiceScroll().resize();
        }, 100);
    });

}(jQuery));
},{"./_skin":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\layout\\js\\_skin.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\layout\\js\\_sidebar-pc.js":[function(require,module,exports){
(function ($) {
    "use strict";

    $.fn.tkSidebarSizePcDemo = function(){

        var t, spc_demo = this;

        if (! spc_demo.length) return;

        $(document)
            .on('sidebar.show', function(){
                $('#pc-open').prop('disabled', true);
            })
            .on('sidebar.hidden', function(){
                $('#pc-open').prop('disabled', false);
            });

        spc_demo.on('submit', function (e) {
            e.preventDefault();
            var s = $('.sidebar'), ve = $('#pc-value'), v = ve.val();
            ve.blur();
            if (! v.length || v < 25) {
                v = 25;
                ve.val(v);
            }
            s[ 0 ].className = s[ 0 ].className.replace(/sidebar-size-([\d]+)pc/ig, 'sidebar-size-' + v + 'pc');
            sidebar.open('sidebar-menu');
            clearTimeout(t);
            t = setTimeout(function () {
                sidebar.close('sidebar-menu');
            }, 5000);
        });

    };

    $('[data-toggle="sidebar-size-pc-demo"]').tkSidebarSizePcDemo();

})(jQuery);
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\layout\\js\\_skin.js":[function(require,module,exports){
module.exports=require("C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\lib\\_skin.js")
},{"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\lib\\_skin.js":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\lib\\_skin.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\layout\\js\\_skins.js":[function(require,module,exports){
var asyncLoader = require('./_async');

(function ($) {

    var changeSkin = function () {
        var skin = $.cookie("skin"),
            file = $.cookie("skin-file");
        if (typeof skin != 'undefined') {
            asyncLoader([ 'css/' + file + '.min.css' ], function () {
                $('[data-skin]').removeProp('disabled').parent().removeClass('loading');
            });
        }
    };

    $('[data-skin]').on('click', function () {

        if ($(this).prop('disabled')) return;

        $('[data-skin]').prop('disabled', true);

        $(this).parent().addClass('loading');

        $.cookie("skin", $(this).data('skin'));

        $.cookie("skin-file", $(this).data('file'));

        changeSkin();

    });

    var skin = $.cookie("skin");

    if (typeof skin != 'undefined' && skin != 'default') {
        changeSkin();
    }

})(jQuery);
},{"./_async":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\layout\\js\\_async.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\layout\\js\\angular\\_gridalicious.js":[function(require,module,exports){
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
},{"./_gridalicious":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\layout\\js\\angular\\_gridalicious.js","./_isotope":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\layout\\js\\angular\\_isotope.js","./_parallax":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\layout\\js\\angular\\_parallax.js","./_scrollable":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\layout\\js\\angular\\_scrollable.js","./_sidebar-pc":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\layout\\js\\angular\\_sidebar-pc.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\layout\\js\\main.js":[function(require,module,exports){
require('./_breakpoints.js');
require('./_gridalicious.js');
require('./_scrollable.js');
require('./_skins');
require('./_isotope');
require('./_parallax');

// Sidebar Percentage Sizes Demo
require('./_sidebar-pc');
},{"./_breakpoints.js":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\layout\\js\\_breakpoints.js","./_gridalicious.js":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\layout\\js\\_gridalicious.js","./_isotope":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\layout\\js\\_isotope.js","./_parallax":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\layout\\js\\_parallax.js","./_scrollable.js":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\layout\\js\\_scrollable.js","./_sidebar-pc":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\layout\\js\\_sidebar-pc.js","./_skins":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\layout\\js\\_skins.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\maps\\js\\_skin.js":[function(require,module,exports){
module.exports=require("C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\lib\\_skin.js")
},{"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\lib\\_skin.js":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\charts\\js\\lib\\_skin.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\maps\\js\\angular\\_google-maps.js":[function(require,module,exports){
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
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\maps\\js\\google\\_edit.js":[function(require,module,exports){
(function ($) {
    "use strict";

    var find = function (mapData, location, marker, markerData) {

        var eventData = $.extend({}, {marker: marker}, markerData, mapData),
            state = '',
            country = '',
            address = '';

        mapData.container.gmap('search', {'location': location}, function (results, status) {

            if (status === 'OK') {
                address = results[ 0 ].formatted_address;
                $.each(results[ 0 ].address_components, function (i, v) {
                    if (v.types[ 0 ] == "administrative_area_level_1" || v.types[ 0 ] == "administrative_area_level_2") {
                        state = v.long_name;
                    } else if (v.types[ 0 ] == "country") {
                        country = v.long_name;
                    }
                });
                eventData = $.extend({}, eventData, {state: state, country: country, address: address});
            }

            $(document).trigger('map.marker.find', eventData);

        });

    };

    var bindFind = function(marker, markerData, data) {

        if (typeof markerData.open !== 'undefined' && markerData.open === true) {
            find(data, markerData.latLng, marker, markerData);
        }

        google.maps.event.addListener(marker, 'dragend', function (e) {
            find(data, e.latLng, this, markerData);
        });

        google.maps.event.addListener(marker, 'click', function (e) {
            find(data, e.latLng, this, markerData);
        });

    };

    $(document).on('map.init', function (event, data) {

        if (data.container.data('id') == 'map-edit') {

            var markers = data.container.gmap('get', 'markers'),
                markerOptions = {
                    "draggable": true
                },
                markerData = {
                    "open": true,
                    "template": "tpl-edit",
                    "icon": "building-01"
                };

            google.maps.event.addListener(data.map, 'click', function (event) {

                markerData = $.extend({}, markerData, {"latLng": event.latLng});

                var marker = data.addMarker(markers.length, markerData, markerOptions);

                bindFind(marker, markerData, data);

            });

            google.maps.event.addListener(data.iw.window, 'domready', function () {

                $('#map-delete-marker').on('click', function (e) {
                    e.stopPropagation();
                    var id = $(this).data('id');
                    data.iw.close(id);
                    markers[ id ].setMap(null);
                });

            });

            $.each(markers, function(i, marker){

                var markerData = marker.get('content');

                bindFind(marker, markerData, data);

            });

        }

    });

    $(document).on('map.marker.find', function (event, data) {

        data.marker.setTitle(data.address);

        if (data.iw.window.isOpen === false) return;

        data.iw.open(data.marker.get('id'), data);

    });

})(jQuery);
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\maps\\js\\google\\_filters.js":[function(require,module,exports){
(function ($) {
    "use strict";

    var arrayUnique = function(a) {
        return a.reduce(function(p, c) {
            if (p.indexOf(c) < 0) p.push(c);
            return p;
        }, []);
    };

    var filter = function(data){

        data.iw.close();
        data.container.gmap('set', 'bounds', null);

        var filters = [];

        $('#radios :checked').each(function (i, checkbox) {
            filters.push($(checkbox).val());
        });

        if (filters.length) {
            data.container.gmap('find', 'markers', {
                'property': 'tags',
                'value': filters,
                'operator': 'OR'
            }, function (marker, found) {
                if (found) {
                    data.container.gmap('addBounds', marker.position);
                }
                marker.setVisible(found);
            });
        } else {
            $.each(data.container.gmap('get', 'markers'), function (i, marker) {
                data.container.gmap('addBounds', marker.position);
                marker.setVisible(false);
            });
        }

    };

    $(document).on('map.init', function (event, data) {

        if (data.container.data('filters') === true) {

            var map = data,
                markers = data.container.gmap('get', 'markers'),
                tags = [],
                templateId = data.container.data('filtersTemplate') || '#map-filters-template';

            $.each(markers, function(i, marker){
                $.each(marker.tags, function(i, tag){
                    tags.push(tag);
                });
            });

            tags = arrayUnique(tags);

            var source = $(templateId).html();
            var template = Handlebars.compile(source);
            var $el = $(template({ tags: tags }));

            $el.insertAfter(data.container);

            var skin = require('../../../layout/js/_skin')();

            $('[data-scrollable]', $el).niceScroll({
                cursorborder: 0,
                cursorcolor: config.skins[ skin ][ 'primary-color' ],
                horizrailenabled: false
            });

            setTimeout(function(){
                filter(data);
            }, 100);

            $('body').on('click', '#radios :checkbox', function(){
                filter(data);
            });

        }

    });

})(jQuery);
},{"../../../layout/js/_skin":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\layout\\js\\_skin.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\maps\\js\\google\\_library.js":[function(require,module,exports){
module.exports = function () {

    var centerWindow = function (container, map, data) {

        if (data.lat && data.lng) {

            container.gmap('option', 'center', new google.maps.LatLng(data.lat, data.lng));

            map.panBy(0, -170);

            return true;

        }
        return false;
    };

    var centerMap = function (container, data) {

        if (data && data.length === 2) {

            container.gmap('option', 'center', new google.maps.LatLng(data[ 0 ], data[ 1 ]));

            return true;

        }
        return false;
    };

    var resize = function (container, map, windowData, mapData) {

        if (typeof google == 'undefined') return;

        google.maps.event.trigger(map, 'resize');

        if (! centerMap(container, mapData)) centerWindow(container, map, windowData);

    };

    return {
        centerWindow: centerWindow,
        centerMap: centerMap,
        resize: resize
    };

};
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\maps\\js\\google\\main.js":[function(require,module,exports){
function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +
    'callback=initGoogleMaps';
    document.body.appendChild(script);
}

window.onload = loadScript;

function initScripts() {
    var $scripts = [
        "js/vendor/maps/google/jquery-ui-map/ui/jquery.ui.map.js",
        "js/vendor/maps/google/jquery-ui-map/ui/jquery.ui.map.extensions.js",
        "js/vendor/maps/google/jquery-ui-map/ui/jquery.ui.map.services.js",
        "js/vendor/maps/google/jquery-ui-map/ui/jquery.ui.map.microdata.js",
        "js/vendor/maps/google/jquery-ui-map/ui/jquery.ui.map.microformat.js",
        "js/vendor/maps/google/jquery-ui-map/ui/jquery.ui.map.overlays.js",
        "js/vendor/maps/google/jquery-ui-map/ui/jquery.ui.map.rdfa.js",
        "js/vendor/maps/google/jquery-ui-map/addons/infobox_packed.js",
        "js/vendor/maps/google/jquery-ui-map/addons/markerclusterer.min.js"
    ];

    $.each($scripts, function (k, v) {
        if ($('[src="' + v + '"]').length) return true;
        var scriptNode = document.createElement('script');

        scriptNode.src = v;
        $('head').prepend($(scriptNode));
    });

    $.extend($.ui.gmap.prototype, {
        pagination: function (prop, mapData) {
            var source = $("#map-pagination").html();
            var template = Handlebars.compile(source);
            var $el = $(template());

            var self = this, i = 0;
            prop = prop || 'title';
            self.set('pagination', function (a, b) {
                if (a) {
                    i = i + b;
                    var m = self.get('markers')[ i ];
                    mapData.iw.open(i, m.get('content'));
                    $el.find('.display').text(m[ prop ]);
                    self.get('map').panTo(m.getPosition());
                }
            });
            self.get('pagination')(true, 0);
            $el.find('.back-btn').click(function (e) {
                e.preventDefault();
                self.get('pagination')((i > 0), - 1, this);
            });
            $el.find('.fwd-btn').click(function (e) {
                e.preventDefault();
                self.get('pagination')((i < self.get('markers').length - 1), 1, this);
            });
            self.addControl($el, google.maps.ControlPosition[ mapData.options.paginationPosition ]);
        }
    });
}

var library = require('./_library.js')();

// Holds google maps styles
var styles = {
    "light-grey": require('./styles/_light-grey.js'),
    "light-monochrome": require('./styles/_light-monochrome.js'),
    "cool-grey": require('./styles/_cool-grey.js'),
    "blue-gray": require('./styles/_blue-gray.js'),
    "paper": require('./styles/_paper.js'),
    "apple": require('./styles/_apple.js'),
    "light-green": require('./styles/_light-green.js'),
    "lemon-tree": require('./styles/_lemon-tree.js'),
    "clean-cut": require('./styles/_clean-cut.js'),
    "nature": require('./styles/_nature.js')
};

// Process the infoWindow content via Handlebars templates
var infoWindowContent = function (marker) {
    var source = $("#" + marker.template).html();
    var template = Handlebars.compile(source);
    return template(marker);
};

/**
 * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
 */
$.fn.tkGoogleMap = function () {

    if (! this.length) return;

    var container = this;

    if (typeof google == 'undefined' || typeof InfoBox == 'undefined') {
        setTimeout(function(){
            container.tkGoogleMap();
        }, 200);

        return;
    }

    var options = {
        mapZoomPosition: container.data('zoomPosition') || "TOP_LEFT",
        mapZoom: container.data('zoom') || 16,
        mapStyle: container.data('style') || "light-grey",
        mapType: container.data('type') || "ROADMAP",
        file: container.data('file'),
        center: container.data('center') ? container.data('center').split(",") : false,
        pagination: container.data('pagination') || false,
        paginationPosition: container.data('paginationPosition') || 'TOP_LEFT',
        draggable: container.data('draggable') !== false
    };

    var mapData;

    // provide a default object for data collected from the currently opened infoWindow
    var infoWindowData = {
        lat: false,
        lng: false
    };

    var infoWindowOpen = function (i, marker) {

        var markerInst = container.gmap('get', 'markers')[ i ];

        infoWindow.setContent(infoWindowContent(marker));
        infoWindow.open(map, markerInst);
        infoWindow.isOpen = i;

        infoWindowData = {
            lat: marker.latitude,
            lng: marker.longitude
        };
    };

    var infoWindowClose = function (i) {
        if (typeof i == 'undefined') {
            infoWindow.close();
            infoWindow.isOpen = false;
            return true;
        }
        if (typeof infoWindow.isOpen != 'undefined' && infoWindow.isOpen === i) {
            infoWindow.close();
            infoWindow.isOpen = false;
            return true;
        }
        return false;
    };

    /* InfoBox */
    var infoWindow = new InfoBox({
        maxWidth: 240,
        alignBottom: true
    });

    var addMarker = function (i, marker, options) {
        var iconBase = 'images/markers/';
        var position = typeof marker.latLng !== 'undefined' ? marker.latLng : false;
        if (! position && typeof marker.latitude !== 'undefined' && typeof marker.longitude !== 'undefined') position = new google.maps.LatLng(marker.latitude, marker.longitude);
        if (! position) return false;

        var markerOptions = {
            "id": i,
            "position": position,
            "draggable": true,
            "icon": iconBase + marker.icon + ".png"
        };

        if (typeof options == 'object') markerOptions = $.extend({}, markerOptions, options);

        var open = typeof marker.open !== 'undefined' && marker.open === true;

        container.gmap('addMarker', markerOptions);

        var markerInst = container.gmap('get', 'markers')[ i ];

        markerInst.setTitle(marker.title);

        google.maps.event.addListener(markerInst, 'click', function () {
            if (! infoWindowClose(i)) {
                infoWindowOpen(i, marker);
                library.centerWindow(container, map, infoWindowData);
            }
        });

        google.maps.event.addListener(markerInst, 'dragend', function () {
            var lat = markerInst.getPosition().lat();
            var lng = markerInst.getPosition().lng();
            console.log('"latitude": ' + lat + ', "longitude": ' + lng);
        });

        var markerData = $.extend({}, marker, {
            "id": i,
            "latLng": new google.maps.LatLng(marker.latitude, marker.longitude)
        });

        markerInst.set('content', markerData);

        if (open) infoWindowOpen(i, marker);

        return markerInst;
    };

    container.gmap(
        {
            'zoomControl': true,
            'zoomControlOptions': {
                'style': google.maps.ZoomControlStyle.SMALL,
                'position': google.maps.ControlPosition[ options.mapZoomPosition ]
            },
            'panControl': false,
            'streetViewControl': false,
            'mapTypeControl': false,
            'overviewMapControl': false,
            'scrollwheel': false,
            'draggable': options.draggable,
            'mapTypeId': google.maps.MapTypeId[ options.mapType ],
            'zoom': options.mapZoom,
            'styles': styles[ options.mapStyle ]
        })
        .bind('init', function () {

            mapData = {
                container: container,
                map: map,
                options: options,
                addMarker: addMarker,
                library: library,
                iw: {
                    data: infoWindowData,
                    window: infoWindow,
                    content: infoWindowContent,
                    open: infoWindowOpen,
                    close: infoWindowClose
                }
            };

            if (options.file) {

                $.getJSON(options.file, function (data) {

                    $.each(data.markers, function (i, marker) {
                        var o = typeof marker.options !== 'undefined' ? marker.options : {};
                        addMarker(i, marker, o);
                    });

                    google.maps.event.addListenerOnce(map, 'idle', function () {

                        library.resize(container, map, infoWindowData, options.center);

                        if (options.pagination) {
                            container.gmap('pagination', 'title', mapData);
                        }

                    });
                });

            }
            else {
                library.centerMap(container, options.center);
            }

            google.maps.event.addListenerOnce(map, 'idle', function () {

                $(document).trigger('map.init', mapData);

            });

            google.maps.event.addListener(infoWindow, 'domready', function () {
                var iw = $('.infoBox');
                infoWindow.setOptions({
                    pixelOffset: new google.maps.Size(- Math.abs(iw.width() / 2), - 45)
                });
                setTimeout(function(){

                    $('.cover', iw).each(function(){
                        $(this).tkCover();
                    });

                }, 200);
            });
        });

    var map = container.gmap('get', 'map');

    var t;
    $(window).on('debouncedresize', function () {
        clearTimeout(t);
        t = setTimeout(function () {
            library.resize(container, map, infoWindowData, options.center);
        }, 100);
    });

    // handle maps in collapsibles
    $('.collapse').on('shown.bs.collapse', function(){
        if ($(container, this).length) {
            library.resize(container, map, infoWindowData, options.center);
        }
    });

};

module.exports = function () {
    initScripts();

    /*
     * Clustering
     */
    if ($('#google-map-clustering').length) {
        // We need to bind the map with the "init" event otherwise bounds will be null
        $('#google-map-clustering').gmap({'zoom': 2, 'disableDefaultUI': true}).bind('init', function (evt, map) {
            var bounds = map.getBounds();
            var southWest = bounds.getSouthWest();
            var northEast = bounds.getNorthEast();
            var lngSpan = northEast.lng() - southWest.lng();
            var latSpan = northEast.lat() - southWest.lat();

            function openInfoWindow() {
                $('#google-map-clustering').gmap('openInfoWindow', {content: 'Hello world!'}, this);
            }

            for (var i = 0; i < 1000; i ++) {
                var lat = southWest.lat() + latSpan * Math.random();
                var lng = southWest.lng() + lngSpan * Math.random();
                $('#google-map-clustering').gmap('addMarker', {
                    'position': new google.maps.LatLng(lat, lng)
                }).click(openInfoWindow);
            }

            $('#google-map-clustering').gmap('set', 'MarkerClusterer', new MarkerClusterer(map, $(this).gmap('get', 'markers')));
        });
    }

};

(function($){
    "use strict";

    $(document).on('map.init', function (event, data) {

        var styleTpl = $('#map-style-switch'),
            toggleStyleWrapper = $('[data-toggle="map-style-switch"]');

        if (styleTpl.length && toggleStyleWrapper.length) {

            var target = $(toggleStyleWrapper.data('target'));

            if (! target) return;

            if (data.container.is(target)) {

                var s = styleTpl.html();
                var t = Handlebars.compile(s);

                toggleStyleWrapper.html(t({
                    styles: styles
                }));

                $('select', toggleStyleWrapper).val(data.options.mapStyle);

                if (typeof $.fn.selectpicker != 'undefined') {

                    $('.selectpicker', toggleStyleWrapper).each(function () {
                        $(this).selectpicker({
                            width: $(this).data('width') || '100%'
                        });
                    });

                }

                var skin = require('../_skin')();

                $('[data-scrollable]', toggleStyleWrapper).niceScroll({
                    cursorborder: 0,
                    cursorcolor: config.skins[ skin ][ 'primary-color' ],
                    horizrailenabled: false
                });

                $('select', toggleStyleWrapper).on('change', function () {
                    var style = typeof styles[ $(this).val() ] ? styles[ $(this).val() ] : false;
                    if (! style) return;

                    target.gmap('option', 'styles', style);
                });

            }

        }

    });

    $('[data-toggle="google-maps"]').each(function () {

        $(this).tkGoogleMap();

    });

})(jQuery);

require('./_edit');
require('./_filters');
},{"../_skin":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\maps\\js\\_skin.js","./_edit":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\maps\\js\\google\\_edit.js","./_filters":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\maps\\js\\google\\_filters.js","./_library.js":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\maps\\js\\google\\_library.js","./styles/_apple.js":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\maps\\js\\google\\styles\\_apple.js","./styles/_blue-gray.js":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\maps\\js\\google\\styles\\_blue-gray.js","./styles/_clean-cut.js":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\maps\\js\\google\\styles\\_clean-cut.js","./styles/_cool-grey.js":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\maps\\js\\google\\styles\\_cool-grey.js","./styles/_lemon-tree.js":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\maps\\js\\google\\styles\\_lemon-tree.js","./styles/_light-green.js":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\maps\\js\\google\\styles\\_light-green.js","./styles/_light-grey.js":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\maps\\js\\google\\styles\\_light-grey.js","./styles/_light-monochrome.js":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\maps\\js\\google\\styles\\_light-monochrome.js","./styles/_nature.js":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\maps\\js\\google\\styles\\_nature.js","./styles/_paper.js":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\maps\\js\\google\\styles\\_paper.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\maps\\js\\google\\styles\\_apple.js":[function(require,module,exports){
module.exports = [ {
    "featureType": "landscape.man_made",
    "elementType": "geometry",
    "stylers": [ {"color": "#f7f1df"} ]
}, {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [ {"color": "#d0e3b4"} ]
}, {
    "featureType": "landscape.natural.terrain",
    "elementType": "geometry",
    "stylers": [ {"visibility": "off"} ]
}, {
    "featureType": "poi",
    "elementType": "labels",
    "stylers": [ {"visibility": "off"} ]
}, {
    "featureType": "poi.business",
    "elementType": "all",
    "stylers": [ {"visibility": "off"} ]
}, {
    "featureType": "poi.medical",
    "elementType": "geometry",
    "stylers": [ {"color": "#fbd3da"} ]
}, {"featureType": "poi.park", "elementType": "geometry", "stylers": [ {"color": "#bde6ab"} ]}, {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [ {"visibility": "off"} ]
}, {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [ {"visibility": "off"} ]
}, {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [ {"color": "#ffe15f"} ]
}, {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [ {"color": "#efd151"} ]
}, {
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [ {"color": "#ffffff"} ]
}, {
    "featureType": "road.local",
    "elementType": "geometry.fill",
    "stylers": [ {"color": "black"} ]
}, {
    "featureType": "transit.station.airport",
    "elementType": "geometry.fill",
    "stylers": [ {"color": "#cfb2db"} ]
}, {"featureType": "water", "elementType": "geometry", "stylers": [ {"color": "#a2daf2"} ]} ];
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\maps\\js\\google\\styles\\_blue-gray.js":[function(require,module,exports){
module.exports = [ {
    "featureType": "water",
    "stylers": [ {"visibility": "on"}, {"color": "#b5cbe4"} ]
}, {"featureType": "landscape", "stylers": [ {"color": "#efefef"} ]}, {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [ {"color": "#83a5b0"} ]
}, {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [ {"color": "#bdcdd3"} ]
}, {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [ {"color": "#ffffff"} ]
}, {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [ {"color": "#e3eed3"} ]
}, {
    "featureType": "administrative",
    "stylers": [ {"visibility": "on"}, {"lightness": 33} ]
}, {"featureType": "road"}, {
    "featureType": "poi.park",
    "elementType": "labels",
    "stylers": [ {"visibility": "on"}, {"lightness": 20} ]
}, {}, {"featureType": "road", "stylers": [ {"lightness": 20} ]} ];
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\maps\\js\\google\\styles\\_clean-cut.js":[function(require,module,exports){
module.exports = [ {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [ {"lightness": 100}, {"visibility": "simplified"} ]
}, {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [ {"visibility": "on"}, {"color": "#C6E2FF"} ]
}, {"featureType": "poi", "elementType": "geometry.fill", "stylers": [ {"color": "#C5E3BF"} ]}, {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [ {"color": "#D1D1B8"} ]
} ];
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\maps\\js\\google\\styles\\_cool-grey.js":[function(require,module,exports){
module.exports = [ {
    "featureType": "landscape",
    "elementType": "labels",
    "stylers": [ {"visibility": "off"} ]
}, {"featureType": "transit", "elementType": "labels", "stylers": [ {"visibility": "off"} ]}, {
    "featureType": "poi",
    "elementType": "labels",
    "stylers": [ {"visibility": "off"} ]
}, {"featureType": "water", "elementType": "labels", "stylers": [ {"visibility": "off"} ]}, {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [ {"visibility": "off"} ]
}, {"stylers": [ {"hue": "#00aaff"}, {"saturation": - 100}, {"gamma": 2.15}, {"lightness": 12} ]}, {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [ {"visibility": "on"}, {"lightness": 24} ]
}, {"featureType": "road", "elementType": "geometry", "stylers": [ {"lightness": 57} ]} ];
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\maps\\js\\google\\styles\\_lemon-tree.js":[function(require,module,exports){
module.exports = [ {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [ {"hue": "#ffffff"}, {"saturation": - 100}, {"lightness": 100}, {"visibility": "off"} ]
}, {
    "featureType": "landscape.natural",
    "elementType": "all",
    "stylers": [ {"hue": "#ffffff"}, {"saturation": - 100}, {"lightness": 100}, {"visibility": "on"} ]
}, {
    "featureType": "road",
    "elementType": "all",
    "stylers": [ {"hue": "#ffe94f"}, {"saturation": 100}, {"lightness": 4}, {"visibility": "on"} ]
}, {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [ {"hue": "#ffe94f"}, {"saturation": 100}, {"lightness": 4}, {"visibility": "on"} ]
}, {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [ {"hue": "#333333"}, {"saturation": - 100}, {"lightness": - 74}, {"visibility": "off"} ]
} ];
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\maps\\js\\google\\styles\\_light-green.js":[function(require,module,exports){
module.exports = [ {"stylers": [ {"hue": "#baf4c4"}, {"saturation": 10} ]}, {
    "featureType": "water",
    "stylers": [ {"color": "#effefd"} ]
}, {
    "featureType": "all",
    "elementType": "labels",
    "stylers": [ {"visibility": "off"} ]
}, {
    "featureType": "administrative",
    "elementType": "labels",
    "stylers": [ {"visibility": "on"} ]
}, {"featureType": "road", "elementType": "all", "stylers": [ {"visibility": "off"} ]}, {
    "featureType": "transit",
    "elementType": "all",
    "stylers": [ {"visibility": "off"} ]
} ];
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\maps\\js\\google\\styles\\_light-grey.js":[function(require,module,exports){
module.exports = [ {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [ {"color": "#e9e9e9"}, {"lightness": 17} ]
}, {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [ {"color": "#f5f5f5"}, {"lightness": 20} ]
}, {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [ {"color": "#ffffff"}, {"lightness": 17} ]
}, {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [ {"color": "#ffffff"}, {"lightness": 29}, {"weight": 0.2} ]
}, {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [ {"color": "#ffffff"}, {"lightness": 18} ]
}, {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [ {"color": "#ffffff"}, {"lightness": 16} ]
}, {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [ {"color": "#f5f5f5"}, {"lightness": 21} ]
}, {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [ {"color": "#dedede"}, {"lightness": 21} ]
}, {
    "elementType": "labels.text.stroke",
    "stylers": [ {"visibility": "on"}, {"color": "#ffffff"}, {"lightness": 16} ]
}, {
    "elementType": "labels.text.fill",
    "stylers": [ {"saturation": 36}, {"color": "#333333"}, {"lightness": 40} ]
}, {"elementType": "labels.icon", "stylers": [ {"visibility": "off"} ]}, {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [ {"color": "#f2f2f2"}, {"lightness": 19} ]
}, {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [ {"color": "#fefefe"}, {"lightness": 20} ]
}, {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [ {"color": "#fefefe"}, {"lightness": 17}, {"weight": 1.2} ]
} ];
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\maps\\js\\google\\styles\\_light-monochrome.js":[function(require,module,exports){
module.exports = [ {
    "featureType": "administrative.locality",
    "elementType": "all",
    "stylers": [ {"hue": "#2c2e33"}, {"saturation": 7}, {"lightness": 19}, {"visibility": "on"} ]
}, {
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [ {"hue": "#ffffff"}, {"saturation": - 100}, {"lightness": 100}, {"visibility": "simplified"} ]
}, {
    "featureType": "poi",
    "elementType": "all",
    "stylers": [ {"hue": "#ffffff"}, {"saturation": - 100}, {"lightness": 100}, {"visibility": "off"} ]
}, {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [ {"hue": "#bbc0c4"}, {"saturation": - 93}, {"lightness": 31}, {"visibility": "simplified"} ]
}, {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [ {"hue": "#bbc0c4"}, {"saturation": - 93}, {"lightness": 31}, {"visibility": "on"} ]
}, {
    "featureType": "road.arterial",
    "elementType": "labels",
    "stylers": [ {"hue": "#bbc0c4"}, {"saturation": - 93}, {"lightness": - 2}, {"visibility": "simplified"} ]
}, {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [ {"hue": "#e9ebed"}, {"saturation": - 90}, {"lightness": - 8}, {"visibility": "simplified"} ]
}, {
    "featureType": "transit",
    "elementType": "all",
    "stylers": [ {"hue": "#e9ebed"}, {"saturation": 10}, {"lightness": 69}, {"visibility": "on"} ]
}, {
    "featureType": "water",
    "elementType": "all",
    "stylers": [ {"hue": "#e9ebed"}, {"saturation": - 78}, {"lightness": 67}, {"visibility": "simplified"} ]
} ];
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\maps\\js\\google\\styles\\_nature.js":[function(require,module,exports){
module.exports = [ {
    "featureType": "landscape",
    "stylers": [ {"hue": "#FFA800"}, {"saturation": 0}, {"lightness": 0}, {"gamma": 1} ]
}, {
    "featureType": "road.highway",
    "stylers": [ {"hue": "#53FF00"}, {"saturation": - 73}, {"lightness": 40}, {"gamma": 1} ]
}, {
    "featureType": "road.arterial",
    "stylers": [ {"hue": "#FBFF00"}, {"saturation": 0}, {"lightness": 0}, {"gamma": 1} ]
}, {
    "featureType": "road.local",
    "stylers": [ {"hue": "#00FFFD"}, {"saturation": 0}, {"lightness": 30}, {"gamma": 1} ]
}, {
    "featureType": "water",
    "stylers": [ {"hue": "#00BFFF"}, {"saturation": 6}, {"lightness": 8}, {"gamma": 1} ]
}, {
    "featureType": "poi",
    "stylers": [ {"hue": "#679714"}, {"saturation": 33.4}, {"lightness": - 25.4}, {"gamma": 1} ]
} ];
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\maps\\js\\google\\styles\\_paper.js":[function(require,module,exports){
module.exports = [ {
    "featureType": "administrative",
    "elementType": "all",
    "stylers": [ {"visibility": "off"} ]
}, {
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [ {"visibility": "simplified"}, {"hue": "#0066ff"}, {"saturation": 74}, {"lightness": 100} ]
}, {"featureType": "poi", "elementType": "all", "stylers": [ {"visibility": "simplified"} ]}, {
    "featureType": "road",
    "elementType": "all",
    "stylers": [ {"visibility": "simplified"} ]
}, {
    "featureType": "road.highway",
    "elementType": "all",
    "stylers": [ {"visibility": "off"}, {"weight": 0.6}, {"saturation": - 85}, {"lightness": 61} ]
}, {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [ {"visibility": "on"} ]
}, {
    "featureType": "road.arterial",
    "elementType": "all",
    "stylers": [ {"visibility": "off"} ]
}, {"featureType": "road.local", "elementType": "all", "stylers": [ {"visibility": "on"} ]}, {
    "featureType": "transit",
    "elementType": "all",
    "stylers": [ {"visibility": "simplified"} ]
}, {
    "featureType": "water",
    "elementType": "all",
    "stylers": [ {"visibility": "simplified"}, {"color": "#5f94ff"}, {"lightness": 26}, {"gamma": 5.86} ]
} ];
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\material\\js\\_forms.js":[function(require,module,exports){
(function ($) {
    "use strict";

    $.fn.tkFormControlMaterial = function(){
        this
            .blur(function () {
                if (this.val())
                    this.addClass('used');
                else
                    this.removeClass('used');
            })
            .after('<span class="ma-form-highlight"></span><span class="ma-form-bar"></span>');
    };

    $('.form-control-material .form-control').each(function () {
        $(this).tkFormControlMaterial();
    });

    $(document).on('show.bs.dropdown', function (e) {

        if (Modernizr.touch && $(window).width() < 768) return true;

        var dd = $(e.relatedTarget).next('.dropdown-menu');
        var ddHeight = dd.outerHeight();
        dd.css({
            height: 0,
            display: 'block',
            overflow: 'hidden'
        });
        dd.velocity({opacity: 1}, {duration: 650, queue: false, easing: 'easeOutQuad'});
        dd.velocity({
            height: ddHeight,
            top: dd.data('top') || 0
        }, {
            duration: 650,
            queue: false,
            easing: 'easeOutCubic',
            complete: function () {
                dd.css({overflow: 'visible'});
            }
        });
    });

    $(document).on('hide.bs.dropdown', function (e) {

        if (Modernizr.touch && $(window).width() < 768) return true;

        var dd = $(e.relatedTarget).next('.dropdown-menu');
        dd.velocity({
            opacity: 0,
            top: '100%'
        }, {
            duration: 650, queue: false, easing: 'easeOutQuad', complete: function () {
                dd.css({
                    display: 'none',
                    height: 'auto'
                });
            }
        });
    });

})(jQuery);

},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\material\\js\\_ripple.js":[function(require,module,exports){
(function ($) {
    "use strict";

    var ripple = function (e) {

        var el, ink, d, x, y;

        el = $(this);

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
            if (el.closest('.dropdown-menu').length) {
                e.stopPropagation();
            }
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

    var listGroupMenu = $('.list-group-menu > .list-group-item > a'),
        button = $('.btn'),
        navbarNav = $('.navbar-nav > li > a'),
        dropdownMenu = $('.dropdown-menu > li > a'),
        sidebarMenu = $('.sidebar-menu > li > a');

    var addRipple = $()
        .add(listGroupMenu)
        .add(button)
        .add(navbarNav)
        .add(dropdownMenu)
        .add(sidebarMenu);

    if (addRipple.length) {
        addRipple.click(ripple);
    }

})(jQuery);
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
},{"./_forms":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\material\\js\\angular\\_forms.js","./_ripple":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\material\\js\\angular\\_ripple.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\material\\js\\main.js":[function(require,module,exports){
require('./_forms');
require('./_ripple');
},{"./_forms":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\material\\js\\_forms.js","./_ripple":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\material\\js\\_ripple.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\media\\js\\_responsive-videos.js":[function(require,module,exports){
(function ($) {

    // Find all YouTube videos
    var $allVideos = $("iframe[src^='http://player.vimeo.com'], iframe[src^='http://www.youtube.com']"),

    // The element that is fluid width
    $fluidEl = $("panel");

    // Figure out and save aspect ratio for each video
    $allVideos.each(function() {

        $(this)
            .data('aspectRatio', this.height / this.width)

            // and remove the hard coded width/height
            .removeAttr('height')
            .removeAttr('width');

    });

    // When the window is resized
    $(".gallery-grid .panel").resize(function() {

        var newWidth = $fluidEl.width();

        // Resize all videos according to their own aspect ratio
        $allVideos.each(function() {

            var $el = $(this);
            $el
                .width(newWidth)
                .height(newWidth * $el.data('aspectRatio'));

        });

    // Kick off one resize to fix all videos on page load
    }).resize();

})(jQuery);
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\media\\js\\angular\\_owl.js":[function(require,module,exports){
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
},{"./_owl":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\media\\js\\angular\\_owl.js","./_slick":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\media\\js\\angular\\_slick.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\media\\js\\carousel\\main.js":[function(require,module,exports){
require('./owl/main');
require('./slick/_default');
},{"./owl/main":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\media\\js\\carousel\\owl\\main.js","./slick/_default":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\media\\js\\carousel\\slick\\_default.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\media\\js\\carousel\\owl\\_default.js":[function(require,module,exports){
(function ($) {
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkOwlDefault = function () {

        if (! this.length) return;

        var c = this;
        c.owlCarousel({
            dots: true,
            items: c.data('items') || 4,
            responsive: {
                1200: {
                    items: c.data('itemsLg') || 4
                },
                992: {
                    items: c.data('itemsMg') || 3
                },
                768: {
                    items: c.data('itemsSm') || 3
                },
                480: {
                    items: c.data('itemsXs') || 2
                },
                0: {
                    items: 1
                }
            },
            rtl: this.data('rtl'),
            afterUpdate: function () {
                $(window).trigger('resize');
            }
        });

    };

    $(".owl-basic").each(function () {
        $(this).tkOwlDefault();
    });

})(jQuery);
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\media\\js\\carousel\\owl\\_mixed.js":[function(require,module,exports){
(function ($) {
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkOwlMixed = function () {

        if (! this.length) return;

        this.owlCarousel({
            items: 2,
            nav: true,
            dots: false,
            rtl: this.data('rtl'),
            navText: [ '<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>' ],
            responsive: {
                1200: {
                    items: 2
                },
                0: {
                    items: 1
                }
            }
        });

    };

    $(".owl-mixed").tkOwlMixed();

})(jQuery);
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\media\\js\\carousel\\owl\\_preview.js":[function(require,module,exports){
(function ($) {
    "use strict";

    var syncPosition = function (e, target) {
        if (e.namespace && e.property.name === 'items') {
            target.trigger('to.owl.carousel', [e.item.index, 300, true]);
        }
    };

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkOwlPreview = function () {

        if (! this.length) return;

        var target = $(this.data('sync')),
            preview = this,
            rtl = this.data('rtl');

        if (! target.length) return;

        this.owlCarousel({
            items: 1,
            slideSpeed: 1000,
            dots: false,
            responsiveRefreshRate: 200,
            rtl: rtl,
            nav: true,
            navigationText: [ '<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>' ]
        });

        this.on('change.owl.carousel', function(e){
            syncPosition(e, target);
        });

        target.owlCarousel({
            items: 5,
            responsive: {
                1200: {
                    items: 7
                },
                768: {
                    items: 6
                },
                480: {
                    items: 3
                },
                0: {
                    items: 2
                }
            },
            dots: false,
            nav: true,
            responsiveRefreshRate: 100,
            rtl: rtl,
            afterInit: function (el) {
                el.find(".owl-item").eq(0).addClass("synced");
            }
        });

        target.on('change.owl.carousel', function(e){
            syncPosition(e, preview);
        });

        target.find('.owl-item').click(function (e) {
            e.preventDefault();
            var item = $(this).data("owl-item");
            preview.trigger("to.owl.carousel", [item.index, 300, true]);
        });

    };

    $(".owl-preview").tkOwlPreview();

})(jQuery);
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\media\\js\\carousel\\owl\\main.js":[function(require,module,exports){
require('./_default');
require('./_mixed');
require('./_preview');
},{"./_default":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\media\\js\\carousel\\owl\\_default.js","./_mixed":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\media\\js\\carousel\\owl\\_mixed.js","./_preview":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\media\\js\\carousel\\owl\\_preview.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\media\\js\\carousel\\slick\\_default.js":[function(require,module,exports){
(function ($) {
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkSlickDefault = function () {

        if (! this.length) return;

        if (typeof $.fn.slick == 'undefined') return;

        var c = this;
        
        c.slick({
            dots: true,
            slidesToShow: c.data('items') || 3,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: c.data('itemsLg') || 4
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: c.data('itemsMd') || 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: c.data('itemsSm') || 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: c.data('itemsXs') || 2
                    }
                },
                {
                    breakpoint: 0,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ],
            rtl: this.data('rtl'),
            onSetPosition: function () {
                $(window).trigger('resize');
            }
        });

        $(document).on('sidebar.shown', function(){
            c.slickSetOption('dots', true, true);
        });

    };

    $(".slick-basic").each(function () {
        $(this).tkSlickDefault();
    });

})(jQuery);
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\media\\js\\main.js":[function(require,module,exports){
// Carousels
require('./carousel/main');

// Responsive Video iFrame Fix
require('./_responsive-videos');
},{"./_responsive-videos":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\media\\js\\_responsive-videos.js","./carousel/main":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\media\\js\\carousel\\main.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\messages\\js\\_breakpoints.js":[function(require,module,exports){
(function ($) {
    "use strict";

    $(window).bind('enterBreakpoint320', function () {
        var img = $('.messages-list .panel ul img');
        $('.messages-list .panel ul').width(img.first().width() * img.length);
    });

    $(window).bind('exitBreakpoint320', function () {
        $('.messages-list .panel ul').width('auto');
    });

})(jQuery);

},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\messages\\js\\main.js":[function(require,module,exports){
require('./_breakpoints');
},{"./_breakpoints":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\messages\\js\\_breakpoints.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\sidebar\\js\\_breakpoints.js":[function(require,module,exports){
(function ($) {
    "use strict";

    var restore = function () {
            $("html").addClass('show-sidebar');
            $('.sidebar.sidebar-visible-desktop').not(':visible').each(function () {
                var options = sidebar.options($(this));
                sidebar.open($(this).attr('id'), options);
            });
        },
        hide = function () {
            $("html").removeClass('show-sidebar');
            $('.sidebar:visible').each(function () {
                sidebar.close($(this).attr('id'));
            });
        };

    $(window).bind('enterBreakpoint768', function () {
        if (! $('.sidebar').length) return;
        if ($('.hide-sidebar').length) return;
        restore();
    });

    $(window).bind('enterBreakpoint1024', function () {
        if (! $('.sidebar').length) return;
        if ($('.hide-sidebar').length) return;
        restore();
    });

    $(window).bind('enterBreakpoint480', function () {
        if (! $('.sidebar').length) return;
        hide();
    });

    if ($(window).width() <= 480) {
        if (! $('.sidebar').length) return;
        hide();
    }

})(jQuery);

},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\sidebar\\js\\_collapsible.js":[function(require,module,exports){
(function ($) {
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkSidebarCollapse = function () {

        if (! this.length) return;

        var sidebar = this;

        sidebar.find('.sidebar-menu > li > a').off('mouseenter');
        sidebar.find('.sidebar-menu > li.dropdown > a').off('mouseenter');
        sidebar.find('.sidebar-menu > li > a').off('mouseenter');
        sidebar.find('.sidebar-menu > li > a').off('click');
        sidebar.off('mouseleave');
        sidebar.find('.dropdown').off('mouseover');
        sidebar.find('.dropdown').off('mouseout');

        $('body').off('mouseout', '#dropdown-temp .dropdown');

        sidebar.find('ul.collapse')
            .off('shown.bs.collapse')
            .off('show.bs.collapse')
            .off('hide.bs.collapse')
            .off('hidden.bs.collapse');

        sidebar.find('#dropdown-temp').remove();

        sidebar.find('.hasSubmenu').removeClass('dropdown')
            .find('> ul').addClass('collapse').removeClass('dropdown-menu submenu-hide submenu-show')
            .end()
            .find('> a').attr('data-toggle', 'collapse').on('click', function(e){
                e.preventDefault();
            });

        sidebar.find('.collapse').on('shown.bs.collapse', function () {
            sidebar.find('[data-scrollable]').getNiceScroll().resize();
        });

        // Collapse
        sidebar.find('.collapse').on('show.bs.collapse', function (e) {
            e.stopPropagation();
            var parents = $(this).parents('ul:first').find('> li.open > ul');
            if (parents.length) {
                parents.collapse('hide').closest('.hasSubmenu').removeClass('open');
            }
            $(this).closest('.hasSubmenu').addClass('open');
        });

        sidebar.find('.collapse').on('hidden.bs.collapse', function (e) {
            e.stopPropagation();
            $(this).closest('.hasSubmenu').removeClass('open');
        });

        sidebar.find('.collapse').collapse({ toggle: false });

    };

    $('.sidebar[data-type="collapse"]').each(function(){
        $(this).tkSidebarCollapse();
    });

})(jQuery);
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\sidebar\\js\\_dropdown.js":[function(require,module,exports){
(function ($) {
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkSidebarDropdown = function () {

        if (! this.length) return;

        var sidebar = this;

        sidebar.find('.collapse')
            .off('shown.bs.collapse')
            .off('show.bs.collapse')
            .off('hidden.bs.collapse');

        var nice = sidebar.find('[data-scrollable]').getNiceScroll()[ 0 ];

        nice.scrollstart(function () {
            if (! sidebar.is('[data-type="dropdown"]')) return;
            sidebar.addClass('scrolling');
            sidebar.find('#dropdown-temp > ul > li').empty();
            sidebar.find('#dropdown-temp').hide();
            sidebar.find('.open').removeClass('open');
        });

        nice.scrollend(function () {
            if (! sidebar.is('[data-type="dropdown"]')) return;
            $.data(this, 'lastScrollTop', nice.getScrollTop());
            sidebar.removeClass('scrolling');
        });

        sidebar.find('.hasSubmenu').addClass('dropdown').removeClass('open')
            .find('> ul').addClass('dropdown-menu').removeClass('collapse in').removeAttr('style')
            .end()
            .find('> a').removeClass('collapsed')
            .removeAttr('data-toggle');

        sidebar.find('.sidebar-menu > li.dropdown > a').on('mouseenter', function () {

            var c = sidebar.find('#dropdown-temp');

            sidebar.find('.open').removeClass('open');
            c.hide();

            if (! $(this).parent('.dropdown').is('.open') && ! sidebar.is('.scrolling')) {
                var p = $(this).parent('.dropdown'),
                    t = p.find('> .dropdown-menu').clone().removeClass('submenu-hide');

                if (! c.length) {
                    c = $('<div/>').attr('id', 'dropdown-temp').appendTo(sidebar);
                    c.html('<ul><li></li></ul>');
                }

                c.show();
                c.find('.dropdown-menu').remove();
                c = c.find('> ul > li').css({overflow: 'visible'}).addClass('dropdown open');

                p.addClass('open');
                t.appendTo(c).css({
                    top: p.offset().top - c.offset().top,
                    left: '100%'
                }).show();

                if (sidebar.is('.right')) {
                    t.css({
                        left: 'auto',
                        right: '100%'
                    });
                }
            }
        });

        sidebar.find('.sidebar-menu > li > a').on('mouseenter', function () {

            if (! $(this).parent().is('.dropdown')) {
                var sidebar = $(this).closest('.sidebar');
                sidebar.find('.open').removeClass('open');
                sidebar.find('#dropdown-temp').hide();
            }

        });

        sidebar.find('.sidebar-menu > li > a').on('click', function (e) {
            if ($(this).parent().is('.dropdown')) {
                e.preventDefault();
                e.stopPropagation();
            }
        });

        sidebar.on('mouseleave', function () {
            $(this).find('#dropdown-temp').hide();
            $(this).find('.open').removeClass('open');
        });

        sidebar.find('.dropdown').on('mouseover', function () {
            $(this).addClass('open').children('ul').removeClass('submenu-hide').addClass('submenu-show');
        }).on('mouseout', function () {
            $(this).children('ul').removeClass('.submenu-show').addClass('submenu-hide');
        });

        $('body').on('mouseout', '#dropdown-temp .dropdown', function () {
            $('.sidebar-menu .open', $(this).closest('.sidebar')).removeClass('.open');
        });

    };

    var transform_dd = function(){

        $('.sidebar[data-type="dropdown"]').each(function(){
            $(this).tkSidebarDropdown();
        });

    };

    var transform_collapse = function(){

        $('.sidebar[data-type="collapse"]').each(function(){
            $(this).tkSidebarCollapse();
        });

    };

    transform_dd();

    $(window).bind('enterBreakpoint480', function () {
        if (! $('.sidebar[data-type="dropdown"]').length) return;
        $('.sidebar[data-type="dropdown"]').attr('data-type', 'collapse').attr('data-transformed', true);
        transform_collapse();
    });

    function make_dd() {
        if (! $('.sidebar[data-type="collapse"][data-transformed]').length) return;
        $('.sidebar[data-type="collapse"][data-transformed]').attr('data-type', 'dropdown').attr('data-transformed', true);
        transform_dd();
    }

    $(window).bind('enterBreakpoint768', make_dd);

    $(window).bind('enterBreakpoint1024', make_dd);

})(jQuery);
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\sidebar\\js\\_options.js":[function(require,module,exports){
module.exports = function (sidebar) {
    return {
        "transform-button": sidebar.data('transformButton') === true,
        "transform-button-icon": sidebar.data('transformButtonIcon') || 'fa-ellipsis-h'
    };
};
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\sidebar\\js\\_sidebar-menu.js":[function(require,module,exports){
(function ($) {

    var sidebars = $('.sidebar');

    sidebars.each(function () {

        var sidebar = $(this);
        var options = require('./_options')(sidebar);

        if (options[ 'transform-button' ]) {
            var button = $('<button type="button"></button>');

            button
                .attr('data-toggle', 'sidebar-transform')
                .addClass('btn btn-default')
                .html('<i class="fa ' + options[ 'transform-button-icon' ] + '"></i>');

            sidebar.find('.sidebar-menu').append(button);
        }
    });

}(jQuery));
},{"./_options":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\sidebar\\js\\_options.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\sidebar\\js\\_sidebar-toggle.js":[function(require,module,exports){
(function ($) {
    "use strict";

    $('#subnav').collapse({'toggle': false});

    function mobilecheck() {
        var check = false;
        (function (a) {
            if (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
                check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    }

    (function () {

        var defaults = {
                effect: 'st-effect-1',
                duration: 550,
                overlay: false
            },

            containerSelector = '.st-container',

            eventtype = mobilecheck() ? 'touchstart' : 'click',

            getLayoutClasses = function (sidebar, direction) {

                var layoutClasses = sidebar.data('layoutClasses');

                if (! layoutClasses) {
                    var toggleLayout = sidebar.data('toggleLayout');
                    if (typeof toggleLayout == 'string') {
                        layoutClasses = toggleLayout.split(",").join(" ");
                        sidebar.data('layoutClasses', layoutClasses);
                        return layoutClasses;
                    }

                    var match = new RegExp('sidebar-' + direction + '(\\S+)', 'ig');
                    layoutClasses = $('html').get(0).className.match(match);
                    if (layoutClasses !== null && layoutClasses.length) {
                        layoutClasses = layoutClasses.join(" ");
                        sidebar.data('layoutClasses', layoutClasses);
                    }
                }

                return layoutClasses;

            },

            getSidebarDataOptions = function(sidebar){

                return {
                    effect: sidebar.data('effect'),
                    overlay: sidebar.data('overlay')
                };

            },

            animating = function () {

                if ($('body').hasClass('animating')) return true;
                $('body').addClass('animating');

                setTimeout(function () {
                    $('body').removeClass('animating');
                }, defaults.duration);

                return false;

            },

            reset = function (id, options) {

                var container = $(containerSelector);

                var target = typeof id !== 'undefined' ? '#' + id : container.data('stMenuTarget'),
                    sidebar = $(target);

                if (! sidebar.length) return false;
                if (! sidebar.is(':visible')) return false;
                if (sidebar.hasClass('sidebar-closed')) return false;

                var effect = typeof options !== 'undefined' && options.effect ? options.effect : container.data('stMenuEffect'),
                    direction = sidebar.is('.left') ? 'l' : 'r',
                    size = sidebar.get(0).className.match(/sidebar-size-(\S+)/).pop(),
                    htmlClass = 'st-effect-' + direction + size,
                    toggleLayout = sidebar.data('toggleLayout'),
                    layoutClasses = getLayoutClasses(sidebar, direction),
                    eventData = {
                        sidebar: sidebar,
                        target: target
                    };

                $(document).trigger('sidebar.hide', eventData);

                $('[data-toggle="sidebar-menu"][href="' + target + '"]')
                    .removeClass('active')
                    .closest('li')
                    .removeClass('active');

                $('html').addClass(htmlClass);
                sidebar.addClass(effect);
                container.addClass(effect);

                container.removeClass('st-menu-open st-pusher-overlay');

                setTimeout(function () {
                    $('html').removeClass(htmlClass);
                    if (toggleLayout) $('html').removeClass(layoutClasses);
                    sidebar.removeClass(effect);
                    container.get(0).className = 'st-container'; // clear
                    sidebar.addClass('sidebar-closed').hide();
                    $(document).trigger('sidebar.hidden', eventData);
                }, defaults.duration);

            },

            open = function (target, options) {

                var container = $(containerSelector);

                var sidebar = $(target);
                if (! sidebar.length) return false;

                // on mobile, allow only one sidebar to be open at the same time
                if ($(window).width() < 768 && container.hasClass('st-menu-open')) {
                    return reset();
                }

                $('[data-toggle="sidebar-menu"][href="' + target + '"]')
                    .addClass('active')
                    .closest('li')
                    .addClass('active');

                var effect = options.effect,
                    overlay = options.overlay;

                var direction = sidebar.is('.left') ? 'l' : 'r',
                    size = sidebar.get(0).className.match(/sidebar-size-(\S+)/).pop(),
                    htmlClass = 'st-effect-' + direction + size,
                    toggleLayout = sidebar.data('toggleLayout'),
                    layoutClasses = getLayoutClasses(sidebar, direction),
                    eventData = {
                        sidebar: sidebar,
                        target: target
                    };

                $(document).trigger('sidebar.show', eventData);

                $('html').addClass(htmlClass);
                sidebar.show().removeClass('sidebar-closed');

                container.data('stMenuEffect', effect);
                container.data('stMenuTarget', target);

                sidebar.addClass(effect);
                container.addClass(effect);
                if (overlay) container.addClass('st-pusher-overlay');

                setTimeout(function () {
                    container.addClass('st-menu-open');
                    sidebar.find('[data-scrollable]').getNiceScroll().resize();
                    $(window).trigger('resize');
                }, 25);

                setTimeout(function () {
                    if (toggleLayout) $('html').addClass(layoutClasses);
                    $(document).trigger('sidebar.shown', eventData);
                }, defaults.duration);

            },

            toggle = function (e) {

                e.stopPropagation();
                e.preventDefault();

                var a = animating();
                if (a) return false;

                var button = $(this),
                    target = button.attr('href'),
                    sidebar;

                if (target.length > 3) {
                    sidebar = $(target);
                    if (! sidebar.length) return false;
                }

                if (target.length < 3) {
                    var currentActiveElement = $('[data-toggle="sidebar-menu"]').not(this).closest('li').length ? $('[data-toggle="sidebar-menu"]').not(this).closest('li') : $('[data-toggle="sidebar-menu"]').not(this);
                    var activeElement = $(this).closest('li').length ? $(this).closest('li') : $(this);

                    currentActiveElement.removeClass('active');
                    activeElement.addClass('active');

                    if ($('html').hasClass('show-sidebar')) activeElement.removeClass('active');

                    $('html').removeClass('show-sidebar');

                    if (activeElement.hasClass('active')) $('html').addClass('show-sidebar');
                    return;
                }

                var dataOptions = getSidebarDataOptions(sidebar),
                    buttonOptions = {};

                if (button.data('effect')) buttonOptions.effect = button.data('effect');
                if (button.data('overlay')) buttonOptions.overlay = button.data('overlay');

                var options = $.extend({}, defaults, dataOptions, buttonOptions);

                if (! sidebar.hasClass('sidebar-closed') && sidebar.is(':visible')) {
                    reset(sidebar.attr('id'), options);
                    return;
                }

                open(target, options);

            };

        $('body').on(eventtype, '[data-toggle="sidebar-menu"]', toggle);

        $(document).on('keydown', null, 'esc', function () {

            var container = $(containerSelector);

            if (container.hasClass('st-menu-open')) {
                reset();
                return false;
            }

        });

        /**
         * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
         */
        $.fn.tkSidebarToggleBar = function () {

            if (! this.length) return;

            var sidebar = this;

            /* Sidebar Toggle Bar */
            if (sidebar.data('toggleBar')) {
                var bar = $('<a></a>');
                bar.attr('href', '#' + sidebar.attr('id'))
                    .attr('data-toggle', 'sidebar-menu')
                    .addClass('sidebar-toggle-bar');

                sidebar.append(bar);
            }

        };

        $('.sidebar').each(function(){
            $(this).tkSidebarToggleBar();
        });

        window.sidebar = {

            open: function (id, options) {

                var a = animating();
                if (a) return false;

                options = $.extend({}, defaults, options);

                return open('#' + id, options);

            },

            close: function (id, options) {

                options = $.extend({}, defaults, options);

                return reset(id, options);

            },

            options: getSidebarDataOptions

        };

    })();

})(jQuery);
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\sidebar\\js\\angular\\_sidebar-collapse.js":[function(require,module,exports){
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
},{"./_sidebar-collapse":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\sidebar\\js\\angular\\_sidebar-collapse.js","./_sidebar-dropdown":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\sidebar\\js\\angular\\_sidebar-dropdown.js","./_sidebar-toggle-bar":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\sidebar\\js\\angular\\_sidebar-toggle-bar.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\sidebar\\js\\main.js":[function(require,module,exports){
require('./_breakpoints');
require('./_sidebar-menu');
require('./_collapsible');
require('./_dropdown');
require('./_sidebar-toggle');

(function($){
    "use strict";

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkSidebar = function (options) {

        if (! this.length) return;

        var settings = $.extend({
            menuType: false,
            toggleBar: false
        }, options);

        var sidebar = this;

        if (settings.menuType == "collapse") {
            sidebar.tkSidebarCollapse();
        }

        if (settings.menuType == "dropdown") {
            sidebar.tkSidebarDropdown();
        }

        if (settings.toggleBar === true) {
            sidebar.tkSidebarToggleBar();
        }

    };

})(jQuery);
},{"./_breakpoints":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\sidebar\\js\\_breakpoints.js","./_collapsible":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\sidebar\\js\\_collapsible.js","./_dropdown":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\sidebar\\js\\_dropdown.js","./_sidebar-menu":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\sidebar\\js\\_sidebar-menu.js","./_sidebar-toggle":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\sidebar\\js\\_sidebar-toggle.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\angular\\app.js":[function(require,module,exports){
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
},{}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\main.js":[function(require,module,exports){
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


},{"../html/_countdown":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\html\\_countdown.js","../html/_curriculum":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\html\\_curriculum.js","../html/_flotchart-earnings":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\html\\_flotchart-earnings.js","../html/_scroll":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\html\\_scroll.js","./angular/app":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\angular\\app.js","./angular/controllers/app-ctrl":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\angular\\controllers\\app-ctrl.js","./angular/controllers/home-ctrl":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\angular\\controllers\\home-ctrl.js","./angular/directives/countdown":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\angular\\directives\\countdown.js","./angular/directives/curriculum":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\angular\\directives\\curriculum.js","./angular/directives/flotchart-earnings":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\angular\\directives\\flotchart-earnings.js","./angular/directives/navbar-transition-scroll":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\angular\\directives\\navbar-transition-scroll.js","./angular/router/app-router":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\angular\\router\\app-router.js","./angular/router/blog-router":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\angular\\router\\blog-router.js","./angular/router/course-router":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\angular\\router\\course-router.js","./angular/router/forum-router":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\angular\\router\\forum-router.js","./angular/router/home-router":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\angular\\router\\home-router.js","./angular/router/instructor-router":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\angular\\router\\instructor-router.js","./angular/router/student-router":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\angular\\router\\student-router.js","./angular/router/website-tutor-router":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\angular\\angular\\router\\website-tutor-router.js","essential/js/angular/main":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\essential\\js\\angular\\main.js","layout/js/angular/main":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\layout\\js\\angular\\main.js","maps/js/angular/_google-maps":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\maps\\js\\angular\\_google-maps.js","material/js/angular/main":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\material\\js\\angular\\main.js","media/js/angular/main":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\media\\js\\angular\\main.js","sidebar/js/angular/main":"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\lib\\sidebar\\js\\angular\\main.js"}],"C:\\1attf\\px\\gitRepo\\bitlms\\src\\static\\src\\js\\themes\\html\\_countdown.js":[function(require,module,exports){
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
},{}]},{},["./src/js/themes/angular/app.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwic3JjXFxqc1xcdGhlbWVzXFxhbmd1bGFyXFxhcHAuanMiLCJsaWJcXGNoYXJ0c1xcanNcXGVhc3ktcGllXFxfZWFzeS1waWUuanMiLCJsaWJcXGNoYXJ0c1xcanNcXGVhc3ktcGllXFxtYWluLmpzIiwibGliXFxjaGFydHNcXGpzXFxmbG90XFxfYXV0b3VwZGF0ZS5qcyIsImxpYlxcY2hhcnRzXFxqc1xcZmxvdFxcX2JhcnMtb3JkZXJlZC5qcyIsImxpYlxcY2hhcnRzXFxqc1xcZmxvdFxcX2JhcnMtc3RhY2tlZC5qcyIsImxpYlxcY2hhcnRzXFxqc1xcZmxvdFxcX2RvbnV0LmpzIiwibGliXFxjaGFydHNcXGpzXFxmbG90XFxfaGVscGVyLmpzIiwibGliXFxjaGFydHNcXGpzXFxmbG90XFxfaG9yaXpvbnRhbC5qcyIsImxpYlxcY2hhcnRzXFxqc1xcZmxvdFxcX2xpbmUuanMiLCJsaWJcXGNoYXJ0c1xcanNcXGZsb3RcXF9saW5lX2ZpbGxfbm9wb2ludHMuanMiLCJsaWJcXGNoYXJ0c1xcanNcXGZsb3RcXF9saW5lX2ZpbGxfbm9wb2ludHNfMi5qcyIsImxpYlxcY2hhcnRzXFxqc1xcZmxvdFxcX21peGVkLmpzIiwibGliXFxjaGFydHNcXGpzXFxmbG90XFxfcGllLmpzIiwibGliXFxjaGFydHNcXGpzXFxmbG90XFxfc2ltcGxlLmpzIiwibGliXFxjaGFydHNcXGpzXFxmbG90XFxtYWluLmpzIiwibGliXFxjaGFydHNcXGpzXFxsaWJcXF9za2luLmpzIiwibGliXFxjaGFydHNcXGpzXFxtYWluLmpzIiwibGliXFxjaGFydHNcXGpzXFxtb3JyaXNcXF9hcmVhLmpzIiwibGliXFxjaGFydHNcXGpzXFxtb3JyaXNcXF9iYXIuanMiLCJsaWJcXGNoYXJ0c1xcanNcXG1vcnJpc1xcX2RvbnV0LmpzIiwibGliXFxjaGFydHNcXGpzXFxtb3JyaXNcXF9saW5lLmpzIiwibGliXFxjaGFydHNcXGpzXFxtb3JyaXNcXG1haW4uanMiLCJsaWJcXGNoYXJ0c1xcanNcXHNwYXJrbGluZVxcX3NwYXJrbGluZS5qcyIsImxpYlxcY2hhcnRzXFxqc1xcc3BhcmtsaW5lXFxtYWluLmpzIiwibGliXFxlc3NlbnRpYWxcXGpzXFxfYm9vdHN0cmFwLWNhcm91c2VsLmpzIiwibGliXFxlc3NlbnRpYWxcXGpzXFxfYm9vdHN0cmFwLWNvbGxhcHNlLmpzIiwibGliXFxlc3NlbnRpYWxcXGpzXFxfYm9vdHN0cmFwLW1vZGFsLmpzIiwibGliXFxlc3NlbnRpYWxcXGpzXFxfYm9vdHN0cmFwLXN3aXRjaC5qcyIsImxpYlxcZXNzZW50aWFsXFxqc1xcX2NoZWNrLWFsbC5qcyIsImxpYlxcZXNzZW50aWFsXFxqc1xcX2NvdmVyLmpzIiwibGliXFxlc3NlbnRpYWxcXGpzXFxfZGF0ZXBpY2tlci5qcyIsImxpYlxcZXNzZW50aWFsXFxqc1xcX2RhdGVyYW5nZXBpY2tlci5qcyIsImxpYlxcZXNzZW50aWFsXFxqc1xcX2V4cGFuZGFibGUuanMiLCJsaWJcXGVzc2VudGlhbFxcanNcXF9pZnJhbWUuanMiLCJsaWJcXGVzc2VudGlhbFxcanNcXF9taW5pY29sb3JzLmpzIiwibGliXFxlc3NlbnRpYWxcXGpzXFxfbmVzdGFibGUuanMiLCJsaWJcXGVzc2VudGlhbFxcanNcXF9wYW5lbC1jb2xsYXBzZS5qcyIsImxpYlxcZXNzZW50aWFsXFxqc1xcX3Byb2dyZXNzLWJhcnMuanMiLCJsaWJcXGVzc2VudGlhbFxcanNcXF9zZWxlY3QyLmpzIiwibGliXFxlc3NlbnRpYWxcXGpzXFxfc2VsZWN0cGlja2VyLmpzIiwibGliXFxlc3NlbnRpYWxcXGpzXFxfc2hvdy1ob3Zlci5qcyIsImxpYlxcZXNzZW50aWFsXFxqc1xcX3NsaWRlci5qcyIsImxpYlxcZXNzZW50aWFsXFxqc1xcX3N1bW1lcm5vdGUuanMiLCJsaWJcXGVzc2VudGlhbFxcanNcXF90YWJsZXMuanMiLCJsaWJcXGVzc2VudGlhbFxcanNcXF90YWJzLmpzIiwibGliXFxlc3NlbnRpYWxcXGpzXFxfdG9vbHRpcC5qcyIsImxpYlxcZXNzZW50aWFsXFxqc1xcX3RvdWNoc3Bpbi5qcyIsImxpYlxcZXNzZW50aWFsXFxqc1xcX3RyZWUuanMiLCJsaWJcXGVzc2VudGlhbFxcanNcXF93aXphcmQuanMiLCJsaWJcXGVzc2VudGlhbFxcanNcXGFuZ3VsYXJcXF9jYXJvdXNlbC5qcyIsImxpYlxcZXNzZW50aWFsXFxqc1xcYW5ndWxhclxcX2NoZWNrLWFsbC5qcyIsImxpYlxcZXNzZW50aWFsXFxqc1xcYW5ndWxhclxcX2NvbGxhcHNlLmpzIiwibGliXFxlc3NlbnRpYWxcXGpzXFxhbmd1bGFyXFxfY292ZXIuanMiLCJsaWJcXGVzc2VudGlhbFxcanNcXGFuZ3VsYXJcXF9kYXRlcGlja2VyLmpzIiwibGliXFxlc3NlbnRpYWxcXGpzXFxhbmd1bGFyXFxfZGF0ZXJhbmdlcGlja2VyLmpzIiwibGliXFxlc3NlbnRpYWxcXGpzXFxhbmd1bGFyXFxfZXhwYW5kYWJsZS5qcyIsImxpYlxcZXNzZW50aWFsXFxqc1xcYW5ndWxhclxcX21pbmljb2xvcnMuanMiLCJsaWJcXGVzc2VudGlhbFxcanNcXGFuZ3VsYXJcXF9tb2RhbC5qcyIsImxpYlxcZXNzZW50aWFsXFxqc1xcYW5ndWxhclxcX25lc3RhYmxlLmpzIiwibGliXFxlc3NlbnRpYWxcXGpzXFxhbmd1bGFyXFxfcGFuZWwtY29sbGFwc2UuanMiLCJsaWJcXGVzc2VudGlhbFxcanNcXGFuZ3VsYXJcXF9zZWxlY3QyLmpzIiwibGliXFxlc3NlbnRpYWxcXGpzXFxhbmd1bGFyXFxfc2VsZWN0cGlja2VyLmpzIiwibGliXFxlc3NlbnRpYWxcXGpzXFxhbmd1bGFyXFxfc2xpZGVyLmpzIiwibGliXFxlc3NlbnRpYWxcXGpzXFxhbmd1bGFyXFxfc3VtbWVybm90ZS5qcyIsImxpYlxcZXNzZW50aWFsXFxqc1xcYW5ndWxhclxcX3RhYmxlcy5qcyIsImxpYlxcZXNzZW50aWFsXFxqc1xcYW5ndWxhclxcX3RhYnMuanMiLCJsaWJcXGVzc2VudGlhbFxcanNcXGFuZ3VsYXJcXF90b3VjaHNwaW4uanMiLCJsaWJcXGVzc2VudGlhbFxcanNcXGFuZ3VsYXJcXF90cmVlLmpzIiwibGliXFxlc3NlbnRpYWxcXGpzXFxhbmd1bGFyXFxfd2l6YXJkLmpzIiwibGliXFxlc3NlbnRpYWxcXGpzXFxhbmd1bGFyXFxtYWluLmpzIiwibGliXFxlc3NlbnRpYWxcXGpzXFxtYWluLmpzIiwibGliXFxsYXlvdXRcXGpzXFxfYXN5bmMuanMiLCJsaWJcXGxheW91dFxcanNcXF9icmVha3BvaW50cy5qcyIsImxpYlxcbGF5b3V0XFxqc1xcX2dyaWRhbGljaW91cy5qcyIsImxpYlxcbGF5b3V0XFxqc1xcX2lzb3RvcGUuanMiLCJsaWJcXGxheW91dFxcanNcXF9wYXJhbGxheC5qcyIsImxpYlxcbGF5b3V0XFxqc1xcX3Njcm9sbGFibGUuanMiLCJsaWJcXGxheW91dFxcanNcXF9zaWRlYmFyLXBjLmpzIiwibGliXFxsYXlvdXRcXGpzXFxfc2tpbnMuanMiLCJsaWJcXGxheW91dFxcanNcXGFuZ3VsYXJcXF9ncmlkYWxpY2lvdXMuanMiLCJsaWJcXGxheW91dFxcanNcXGFuZ3VsYXJcXF9pc290b3BlLmpzIiwibGliXFxsYXlvdXRcXGpzXFxhbmd1bGFyXFxfcGFyYWxsYXguanMiLCJsaWJcXGxheW91dFxcanNcXGFuZ3VsYXJcXF9zY3JvbGxhYmxlLmpzIiwibGliXFxsYXlvdXRcXGpzXFxhbmd1bGFyXFxfc2lkZWJhci1wYy5qcyIsImxpYlxcbGF5b3V0XFxqc1xcYW5ndWxhclxcbWFpbi5qcyIsImxpYlxcbGF5b3V0XFxqc1xcbWFpbi5qcyIsImxpYlxcbWFwc1xcanNcXGFuZ3VsYXJcXF9nb29nbGUtbWFwcy5qcyIsImxpYlxcbWFwc1xcanNcXGdvb2dsZVxcX2VkaXQuanMiLCJsaWJcXG1hcHNcXGpzXFxnb29nbGVcXF9maWx0ZXJzLmpzIiwibGliXFxtYXBzXFxqc1xcZ29vZ2xlXFxfbGlicmFyeS5qcyIsImxpYlxcbWFwc1xcanNcXGdvb2dsZVxcbWFpbi5qcyIsImxpYlxcbWFwc1xcanNcXGdvb2dsZVxcc3R5bGVzXFxfYXBwbGUuanMiLCJsaWJcXG1hcHNcXGpzXFxnb29nbGVcXHN0eWxlc1xcX2JsdWUtZ3JheS5qcyIsImxpYlxcbWFwc1xcanNcXGdvb2dsZVxcc3R5bGVzXFxfY2xlYW4tY3V0LmpzIiwibGliXFxtYXBzXFxqc1xcZ29vZ2xlXFxzdHlsZXNcXF9jb29sLWdyZXkuanMiLCJsaWJcXG1hcHNcXGpzXFxnb29nbGVcXHN0eWxlc1xcX2xlbW9uLXRyZWUuanMiLCJsaWJcXG1hcHNcXGpzXFxnb29nbGVcXHN0eWxlc1xcX2xpZ2h0LWdyZWVuLmpzIiwibGliXFxtYXBzXFxqc1xcZ29vZ2xlXFxzdHlsZXNcXF9saWdodC1ncmV5LmpzIiwibGliXFxtYXBzXFxqc1xcZ29vZ2xlXFxzdHlsZXNcXF9saWdodC1tb25vY2hyb21lLmpzIiwibGliXFxtYXBzXFxqc1xcZ29vZ2xlXFxzdHlsZXNcXF9uYXR1cmUuanMiLCJsaWJcXG1hcHNcXGpzXFxnb29nbGVcXHN0eWxlc1xcX3BhcGVyLmpzIiwibGliXFxtYXRlcmlhbFxcanNcXF9mb3Jtcy5qcyIsImxpYlxcbWF0ZXJpYWxcXGpzXFxfcmlwcGxlLmpzIiwibGliXFxtYXRlcmlhbFxcanNcXGFuZ3VsYXJcXF9mb3Jtcy5qcyIsImxpYlxcbWF0ZXJpYWxcXGpzXFxhbmd1bGFyXFxfcmlwcGxlLmpzIiwibGliXFxtYXRlcmlhbFxcanNcXGFuZ3VsYXJcXG1haW4uanMiLCJsaWJcXG1hdGVyaWFsXFxqc1xcbWFpbi5qcyIsImxpYlxcbWVkaWFcXGpzXFxfcmVzcG9uc2l2ZS12aWRlb3MuanMiLCJsaWJcXG1lZGlhXFxqc1xcYW5ndWxhclxcX293bC5qcyIsImxpYlxcbWVkaWFcXGpzXFxhbmd1bGFyXFxfc2xpY2suanMiLCJsaWJcXG1lZGlhXFxqc1xcYW5ndWxhclxcbWFpbi5qcyIsImxpYlxcbWVkaWFcXGpzXFxjYXJvdXNlbFxcbWFpbi5qcyIsImxpYlxcbWVkaWFcXGpzXFxjYXJvdXNlbFxcb3dsXFxfZGVmYXVsdC5qcyIsImxpYlxcbWVkaWFcXGpzXFxjYXJvdXNlbFxcb3dsXFxfbWl4ZWQuanMiLCJsaWJcXG1lZGlhXFxqc1xcY2Fyb3VzZWxcXG93bFxcX3ByZXZpZXcuanMiLCJsaWJcXG1lZGlhXFxqc1xcY2Fyb3VzZWxcXG93bFxcbWFpbi5qcyIsImxpYlxcbWVkaWFcXGpzXFxjYXJvdXNlbFxcc2xpY2tcXF9kZWZhdWx0LmpzIiwibGliXFxtZWRpYVxcanNcXG1haW4uanMiLCJsaWJcXG1lc3NhZ2VzXFxqc1xcX2JyZWFrcG9pbnRzLmpzIiwibGliXFxtZXNzYWdlc1xcanNcXG1haW4uanMiLCJsaWJcXHNpZGViYXJcXGpzXFxfYnJlYWtwb2ludHMuanMiLCJsaWJcXHNpZGViYXJcXGpzXFxfY29sbGFwc2libGUuanMiLCJsaWJcXHNpZGViYXJcXGpzXFxfZHJvcGRvd24uanMiLCJsaWJcXHNpZGViYXJcXGpzXFxfb3B0aW9ucy5qcyIsImxpYlxcc2lkZWJhclxcanNcXF9zaWRlYmFyLW1lbnUuanMiLCJsaWJcXHNpZGViYXJcXGpzXFxfc2lkZWJhci10b2dnbGUuanMiLCJsaWJcXHNpZGViYXJcXGpzXFxhbmd1bGFyXFxfc2lkZWJhci1jb2xsYXBzZS5qcyIsImxpYlxcc2lkZWJhclxcanNcXGFuZ3VsYXJcXF9zaWRlYmFyLWRyb3Bkb3duLmpzIiwibGliXFxzaWRlYmFyXFxqc1xcYW5ndWxhclxcX3NpZGViYXItdG9nZ2xlLWJhci5qcyIsImxpYlxcc2lkZWJhclxcanNcXGFuZ3VsYXJcXG1haW4uanMiLCJsaWJcXHNpZGViYXJcXGpzXFxtYWluLmpzIiwic3JjXFxqc1xcdGhlbWVzXFxhbmd1bGFyXFxhbmd1bGFyXFxhcHAuanMiLCJzcmNcXGpzXFx0aGVtZXNcXGFuZ3VsYXJcXGFuZ3VsYXJcXGNvbnRyb2xsZXJzXFxhcHAtY3RybC5qcyIsInNyY1xcanNcXHRoZW1lc1xcYW5ndWxhclxcYW5ndWxhclxcY29udHJvbGxlcnNcXGhvbWUtY3RybC5qcyIsInNyY1xcanNcXHRoZW1lc1xcYW5ndWxhclxcYW5ndWxhclxcZGlyZWN0aXZlc1xcY291bnRkb3duLmpzIiwic3JjXFxqc1xcdGhlbWVzXFxhbmd1bGFyXFxhbmd1bGFyXFxkaXJlY3RpdmVzXFxjdXJyaWN1bHVtLmpzIiwic3JjXFxqc1xcdGhlbWVzXFxhbmd1bGFyXFxhbmd1bGFyXFxkaXJlY3RpdmVzXFxmbG90Y2hhcnQtZWFybmluZ3MuanMiLCJzcmNcXGpzXFx0aGVtZXNcXGFuZ3VsYXJcXGFuZ3VsYXJcXGRpcmVjdGl2ZXNcXG5hdmJhci10cmFuc2l0aW9uLXNjcm9sbC5qcyIsInNyY1xcanNcXHRoZW1lc1xcYW5ndWxhclxcYW5ndWxhclxccm91dGVyXFxhcHAtcm91dGVyLmpzIiwic3JjXFxqc1xcdGhlbWVzXFxhbmd1bGFyXFxhbmd1bGFyXFxyb3V0ZXJcXGJsb2ctcm91dGVyLmpzIiwic3JjXFxqc1xcdGhlbWVzXFxhbmd1bGFyXFxhbmd1bGFyXFxyb3V0ZXJcXGNvdXJzZS1yb3V0ZXIuanMiLCJzcmNcXGpzXFx0aGVtZXNcXGFuZ3VsYXJcXGFuZ3VsYXJcXHJvdXRlclxcZm9ydW0tcm91dGVyLmpzIiwic3JjXFxqc1xcdGhlbWVzXFxhbmd1bGFyXFxhbmd1bGFyXFxyb3V0ZXJcXGhvbWUtcm91dGVyLmpzIiwic3JjXFxqc1xcdGhlbWVzXFxhbmd1bGFyXFxhbmd1bGFyXFxyb3V0ZXJcXGluc3RydWN0b3Itcm91dGVyLmpzIiwic3JjXFxqc1xcdGhlbWVzXFxhbmd1bGFyXFxhbmd1bGFyXFxyb3V0ZXJcXHN0dWRlbnQtcm91dGVyLmpzIiwic3JjXFxqc1xcdGhlbWVzXFxhbmd1bGFyXFxhbmd1bGFyXFxyb3V0ZXJcXHdlYnNpdGUtdHV0b3Itcm91dGVyLmpzIiwic3JjXFxqc1xcdGhlbWVzXFxhbmd1bGFyXFxtYWluLmpzIiwic3JjXFxqc1xcdGhlbWVzXFxodG1sXFxfY291bnRkb3duLmpzIiwic3JjXFxqc1xcdGhlbWVzXFxodG1sXFxfY3VycmljdWx1bS5qcyIsInNyY1xcanNcXHRoZW1lc1xcaHRtbFxcX2Zsb3RjaGFydC1lYXJuaW5ncy5qcyIsInNyY1xcanNcXHRoZW1lc1xcaHRtbFxcX3Njcm9sbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekRBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzREE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxR0E7QUFDQTs7QUNEQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBOztBQ0RBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNFQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gRXNzZW50aWFsc1xucmVxdWlyZSgnZXNzZW50aWFsL2pzL21haW4nKTtcblxuLy8gTGF5b3V0XG5yZXF1aXJlKCdsYXlvdXQvanMvbWFpbicpO1xuXG4vLyBTaWRlYmFyXG5yZXF1aXJlKCdzaWRlYmFyL2pzL21haW4nKTtcblxuLy8gQ2hhcnRzXG5yZXF1aXJlKCdjaGFydHMvanMvbWFpbicpO1xuXG4vLyBNZXNzYWdlc1xucmVxdWlyZSgnbWVzc2FnZXMvanMvbWFpbicpO1xuXG4vLyBNZWRpYVxucmVxdWlyZSgnbWVkaWEvanMvbWFpbicpO1xuXG4vLyBNYXRlcmlhbFxucmVxdWlyZSgnbWF0ZXJpYWwvanMvbWFpbicpO1xuXG4vLyBNYXBzXG53aW5kb3cuaW5pdEdvb2dsZU1hcHMgPSByZXF1aXJlKCdtYXBzL2pzL2dvb2dsZS9tYWluJyk7XG5cbi8vIENPUkVcbnJlcXVpcmUoJy4vbWFpbicpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgdmFyIHNraW4gPSByZXF1aXJlKCcuLi9saWIvX3NraW4nKSgpO1xuXG4gICAgLyoqXG4gICAgICogalF1ZXJ5IHBsdWdpbiB3cmFwcGVyIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQW5ndWxhciBVSS5VdGlsczogalF1ZXJ5IFBhc3N0aHJvdWdoXG4gICAgICovXG4gICAgJC5mbi50a0Vhc3lQaWUgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBpZiAoISQuZm4uZWFzeVBpZUNoYXJ0KSByZXR1cm47XG5cbiAgICAgICAgdmFyIGNvbG9yID0gY29uZmlnLnNraW5zWyBza2luIF1bICdwcmltYXJ5LWNvbG9yJyBdO1xuICAgICAgICBpZiAodGhpcy5pcygnLmluZm8nKSkgY29sb3IgPSBjb2xvcnNbICdpbmZvLWNvbG9yJyBdO1xuICAgICAgICBpZiAodGhpcy5pcygnLmRhbmdlcicpKSBjb2xvciA9IGNvbG9yc1sgJ2Rhbmdlci1jb2xvcicgXTtcbiAgICAgICAgaWYgKHRoaXMuaXMoJy5zdWNjZXNzJykpIGNvbG9yID0gY29sb3JzWyAnc3VjY2Vzcy1jb2xvcicgXTtcbiAgICAgICAgaWYgKHRoaXMuaXMoJy53YXJuaW5nJykpIGNvbG9yID0gY29sb3JzWyAnd2FybmluZy1jb2xvcicgXTtcbiAgICAgICAgaWYgKHRoaXMuaXMoJy5pbnZlcnNlJykpIGNvbG9yID0gY29sb3JzWyAnaW52ZXJzZS1jb2xvcicgXTtcblxuICAgICAgICB0aGlzLmVhc3lQaWVDaGFydCh7XG4gICAgICAgICAgICBiYXJDb2xvcjogY29sb3IsXG4gICAgICAgICAgICBhbmltYXRlOiAoJCgnaHRtbCcpLmlzKCcuaWUnKSA/IGZhbHNlIDogMzAwMCksXG4gICAgICAgICAgICBsaW5lV2lkdGg6IDQsXG4gICAgICAgICAgICBzaXplOiA1MFxuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICAkLmVhY2goJCgnLmVhc3ktcGllJyksIGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgICAgICQodGhpcykudGtFYXN5UGllKCk7XG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7IiwicmVxdWlyZSgnLi9fZWFzeS1waWUnKTsiLCIoZnVuY3Rpb24gKCQpIHtcblxuICAgIHZhciBjaGFydHMgPSByZXF1aXJlKCcuL19oZWxwZXInKTtcblxuICAgIGlmICh0eXBlb2YgY2hhcnRzID09ICd1bmRlZmluZWQnKVxuICAgICAgICByZXR1cm47XG5cbiAgICBjaGFydHMuY2hhcnRfbGl2ZSA9XG4gICAge1xuICAgICAgICAvLyBjaGFydCBkYXRhXG4gICAgICAgIGRhdGE6IFtdLFxuICAgICAgICB0b3RhbFBvaW50czogMzAwLFxuICAgICAgICB1cGRhdGVJbnRlcnZhbDogMjAwLFxuXG4gICAgICAgIC8vIHdlIHVzZSBhbiBpbmxpbmUgZGF0YSBzb3VyY2UgaW4gdGhlIGV4YW1wbGUsIHVzdWFsbHkgZGF0YSB3b3VsZFxuICAgICAgICAvLyBiZSBmZXRjaGVkIGZyb20gYSBzZXJ2ZXJcbiAgICAgICAgZ2V0UmFuZG9tRGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5zbGljZSgxKTtcblxuICAgICAgICAgICAgLy8gZG8gYSByYW5kb20gd2Fsa1xuICAgICAgICAgICAgd2hpbGUgKHRoaXMuZGF0YS5sZW5ndGggPCB0aGlzLnRvdGFsUG9pbnRzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByZXYgPSB0aGlzLmRhdGEubGVuZ3RoID4gMCA/IHRoaXMuZGF0YVsgdGhpcy5kYXRhLmxlbmd0aCAtIDEgXSA6IDUwO1xuICAgICAgICAgICAgICAgIHZhciB5ID0gcHJldiArIE1hdGgucmFuZG9tKCkgKiAxMCAtIDU7XG4gICAgICAgICAgICAgICAgaWYgKHkgPCAwKVxuICAgICAgICAgICAgICAgICAgICB5ID0gMDtcbiAgICAgICAgICAgICAgICBpZiAoeSA+IDEwMClcbiAgICAgICAgICAgICAgICAgICAgeSA9IDEwMDtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEucHVzaCh5KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gemlwIHRoZSBnZW5lcmF0ZWQgeSB2YWx1ZXMgd2l0aCB0aGUgeCB2YWx1ZXNcbiAgICAgICAgICAgIHZhciByZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5kYXRhLmxlbmd0aDsgKysgaSlcbiAgICAgICAgICAgICAgICByZXMucHVzaChbIGksIHRoaXMuZGF0YVsgaSBdIF0pO1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfSxcblxuICAgICAgICAvLyB3aWxsIGhvbGQgdGhlIGNoYXJ0IG9iamVjdFxuICAgICAgICBwbG90OiBudWxsLFxuXG4gICAgICAgIC8vIGNoYXJ0IG9wdGlvbnNcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgc2VyaWVzOiB7XG4gICAgICAgICAgICAgICAgZ3Jvdzoge2FjdGl2ZTogZmFsc2V9LFxuICAgICAgICAgICAgICAgIHNoYWRvd1NpemU6IDAsXG4gICAgICAgICAgICAgICAgbGluZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbGluZVdpZHRoOiAyLFxuICAgICAgICAgICAgICAgICAgICBzdGVwczogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ3JpZDoge1xuICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgYWJvdmVEYXRhOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb2xvcjogY29sb3JzWyAnZGVmYXVsdC1saWdodC1jb2xvcicgXSxcbiAgICAgICAgICAgICAgICBsYWJlbE1hcmdpbjogNSxcbiAgICAgICAgICAgICAgICBheGlzTWFyZ2luOiAwLFxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAwLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBudWxsLFxuICAgICAgICAgICAgICAgIG1pbkJvcmRlck1hcmdpbjogNSxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgaG92ZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGF1dG9IaWdobGlnaHQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1vdXNlQWN0aXZlUmFkaXVzOiAyMCxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29sb3JzOiBbXSxcbiAgICAgICAgICAgIHRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgICB0b29sdGlwT3B0czoge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiVmFsdWUgaXMgOiAleS4wXCIsXG4gICAgICAgICAgICAgICAgc2hpZnRzOiB7XG4gICAgICAgICAgICAgICAgICAgIHg6IC0gMzAsXG4gICAgICAgICAgICAgICAgICAgIHk6IC0gNTBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRlZmF1bHRUaGVtZTogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgICAgICAgICB0aWNrQ29sb3I6ICcjZWZlZmVmJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvLyBpbml0aWFsaXplXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICh3cmFwcGVyKSB7XG5cbiAgICAgICAgICAgIGlmICghd3JhcHBlci5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICAgICAgLy8gYXBwbHkgc3R5bGluZ1xuICAgICAgICAgICAgY2hhcnRzLnV0aWxpdHkuYXBwbHlTdHlsZSh0aGlzKTtcblxuICAgICAgICAgICAgdGhpcy5wbG90ID0gJC5wbG90KHdyYXBwZXIsIFsgdGhpcy5nZXRSYW5kb21EYXRhKCkgXSwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQodGhpcy51cGRhdGUsIGNoYXJ0cy5jaGFydF9saXZlLnVwZGF0ZUludGVydmFsKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyB1cGRhdGVcbiAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjaGFydHMuY2hhcnRfbGl2ZS5wbG90LnNldERhdGEoWyBjaGFydHMuY2hhcnRfbGl2ZS5nZXRSYW5kb21EYXRhKCkgXSk7XG4gICAgICAgICAgICBjaGFydHMuY2hhcnRfbGl2ZS5wbG90LmRyYXcoKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dChjaGFydHMuY2hhcnRfbGl2ZS51cGRhdGUsIGNoYXJ0cy5jaGFydF9saXZlLnVwZGF0ZUludGVydmFsKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAgICAgKi9cbiAgICAkLmZuLnRrRmxvdENoYXJ0TGl2ZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIGNoYXJ0cy5jaGFydF9saXZlLmluaXQodGhpcyk7XG5cbiAgICB9O1xuXG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwiZmxvdC1jaGFydC1saXZlXCJdJykudGtGbG90Q2hhcnRMaXZlKCk7XG5cbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgICB2YXIgY2hhcnRzID0gcmVxdWlyZSgnLi9faGVscGVyJyk7XG5cbiAgICBpZiAodHlwZW9mIGNoYXJ0cyA9PSAndW5kZWZpbmVkJylcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgY2hhcnRzLmNoYXJ0X29yZGVyZWRfYmFycyA9XG4gICAge1xuICAgICAgICAvLyBjaGFydCBkYXRhXG4gICAgICAgIGRhdGE6IG51bGwsXG5cbiAgICAgICAgLy8gd2lsbCBob2xkIHRoZSBjaGFydCBvYmplY3RcbiAgICAgICAgcGxvdDogbnVsbCxcblxuICAgICAgICAvLyBjaGFydCBvcHRpb25zXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGJhcnM6IHtcbiAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgIGJhcldpZHRoOiAwLjIsXG4gICAgICAgICAgICAgICAgZmlsbDogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdyaWQ6IHtcbiAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgIGFib3ZlRGF0YTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yc1sgJ2RlZmF1bHQtbGlnaHQtY29sb3InIF0sXG4gICAgICAgICAgICAgICAgbGFiZWxNYXJnaW46IDUsXG4gICAgICAgICAgICAgICAgYXhpc01hcmdpbjogMCxcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMCxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogbnVsbCxcbiAgICAgICAgICAgICAgICBtaW5Cb3JkZXJNYXJnaW46IDUsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGhvdmVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhdXRvSGlnaGxpZ2h0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtb3VzZUFjdGl2ZVJhZGl1czogMjAsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlcmllczoge1xuICAgICAgICAgICAgICAgIGdyb3c6IHthY3RpdmU6IGZhbHNlfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcIm5lXCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBudWxsLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRPcGFjaXR5OiAwLFxuICAgICAgICAgICAgICAgIG5vQ29sdW1uczogM1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgICAgICAgdGlja3M6IDMsXG4gICAgICAgICAgICAgICAgdGlja0NvbG9yOiAnI2VmZWZlZidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgICAgIHRpY2tzOiA0LFxuICAgICAgICAgICAgICAgIHRpY2tEZWNpbWFsczogMCxcbiAgICAgICAgICAgICAgICB0aWNrQ29sb3I6ICd0cmFuc3BhcmVudCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb2xvcnM6IFtdLFxuICAgICAgICAgICAgdG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICAgIHRvb2x0aXBPcHRzOiB7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCIlcyA6ICV5LjBcIixcbiAgICAgICAgICAgICAgICBzaGlmdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgeDogLSAzMCxcbiAgICAgICAgICAgICAgICAgICAgeTogLSA1MFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGVmYXVsdFRoZW1lOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIGluaXRpYWxpemVcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKHdyYXBwZXIpIHtcblxuICAgICAgICAgICAgaWYgKCEgd3JhcHBlci5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICAgICAgLy8gYXBwbHkgc3R5bGluZ1xuICAgICAgICAgICAgY2hhcnRzLnV0aWxpdHkuYXBwbHlTdHlsZSh0aGlzKTtcblxuICAgICAgICAgICAgLy9zb21lIGRhdGFcbiAgICAgICAgICAgIHZhciBkMSA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gMTA7IGkgKz0gMSlcbiAgICAgICAgICAgICAgICBkMS5wdXNoKFsgaSwgcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIDMwKSBdKTtcblxuICAgICAgICAgICAgdmFyIGQyID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8PSAxMDsgaiArPSAxKVxuICAgICAgICAgICAgICAgIGQyLnB1c2goWyBqLCBwYXJzZUludChNYXRoLnJhbmRvbSgpICogMzApIF0pO1xuXG4gICAgICAgICAgICB2YXIgZDMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDw9IDEwOyBrICs9IDEpXG4gICAgICAgICAgICAgICAgZDMucHVzaChbIGssIHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAzMCkgXSk7XG5cbiAgICAgICAgICAgIHZhciBkcyA9IFtdO1xuXG4gICAgICAgICAgICBkcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJEYXRhIE9uZVwiLFxuICAgICAgICAgICAgICAgIGRhdGE6IGQxLFxuICAgICAgICAgICAgICAgIGJhcnM6IHtvcmRlcjogMX1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZHMucHVzaCh7XG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiRGF0YSBUd29cIixcbiAgICAgICAgICAgICAgICBkYXRhOiBkMixcbiAgICAgICAgICAgICAgICBiYXJzOiB7b3JkZXI6IDJ9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRzLnB1c2goe1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcIkRhdGEgVGhyZWVcIixcbiAgICAgICAgICAgICAgICBkYXRhOiBkMyxcbiAgICAgICAgICAgICAgICBiYXJzOiB7b3JkZXI6IDN9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5kYXRhID0gZHM7XG5cbiAgICAgICAgICAgIHRoaXMucGxvdCA9ICQucGxvdCh3cmFwcGVyLCB0aGlzLmRhdGEsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogalF1ZXJ5IHBsdWdpbiB3cmFwcGVyIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQW5ndWxhciBVSS5VdGlsczogalF1ZXJ5IFBhc3N0aHJvdWdoXG4gICAgICovXG4gICAgJC5mbi50a0Zsb3RDaGFydE9yZGVyZWRCYXJzID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgY2hhcnRzLmNoYXJ0X29yZGVyZWRfYmFycy5pbml0KHRoaXMpO1xuXG4gICAgfTtcblxuICAgICQoJ1tkYXRhLXRvZ2dsZT1cImZsb3QtY2hhcnQtb3JkZXJlZC1iYXJzXCJdJykudGtGbG90Q2hhcnRPcmRlcmVkQmFycygpO1xuXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbiAoJCkge1xuXG4gICAgdmFyIGNoYXJ0cyA9IHJlcXVpcmUoJy4vX2hlbHBlcicpO1xuXG4gICAgaWYgKHR5cGVvZiBjaGFydHMgPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgIHJldHVybjtcblxuICAgIGNoYXJ0cy5jaGFydF9zdGFja2VkX2JhcnMgPVxuICAgIHtcbiAgICAgICAgLy8gY2hhcnQgZGF0YVxuICAgICAgICBkYXRhOiBudWxsLFxuXG4gICAgICAgIC8vIHdpbGwgaG9sZCB0aGUgY2hhcnQgb2JqZWN0XG4gICAgICAgIHBsb3Q6IG51bGwsXG5cbiAgICAgICAgLy8gY2hhcnQgb3B0aW9uc1xuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBncmlkOiB7XG4gICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhYm92ZURhdGE6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvcnNbICdkZWZhdWx0LWxpZ2h0LWNvbG9yJyBdLFxuICAgICAgICAgICAgICAgIGxhYmVsTWFyZ2luOiA1LFxuICAgICAgICAgICAgICAgIGF4aXNNYXJnaW46IDAsXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDAsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IG51bGwsXG4gICAgICAgICAgICAgICAgbWluQm9yZGVyTWFyZ2luOiA1LFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBob3ZlcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYXV0b0hpZ2hsaWdodDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtb3VzZUFjdGl2ZVJhZGl1czogMjAsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlcmllczoge1xuICAgICAgICAgICAgICAgIGdyb3c6IHthY3RpdmU6IGZhbHNlfSxcbiAgICAgICAgICAgICAgICBzdGFjazogMCxcbiAgICAgICAgICAgICAgICBsaW5lczoge3Nob3c6IGZhbHNlLCBmaWxsOiB0cnVlLCBzdGVwczogZmFsc2V9LFxuICAgICAgICAgICAgICAgIGJhcnM6IHtzaG93OiB0cnVlLCBiYXJXaWR0aDogMC41LCBmaWxsOiAxfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgICAgICAgdGlja3M6IDMsXG4gICAgICAgICAgICAgICAgdGlja0NvbG9yOiAnI2VmZWZlZidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgICAgIHRpY2tzOiAxMSxcbiAgICAgICAgICAgICAgICB0aWNrRGVjaW1hbHM6IDAsXG4gICAgICAgICAgICAgICAgdGlja0NvbG9yOiAndHJhbnNwYXJlbnQnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwibmVcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IG51bGwsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZE9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgICAgbm9Db2x1bW5zOiAzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29sb3JzOiBbXSxcbiAgICAgICAgICAgIHNoYWRvd1NpemU6IDEsXG4gICAgICAgICAgICB0b29sdGlwOiB0cnVlLFxuICAgICAgICAgICAgdG9vbHRpcE9wdHM6IHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIiVzIDogJXkuMFwiLFxuICAgICAgICAgICAgICAgIHNoaWZ0czoge1xuICAgICAgICAgICAgICAgICAgICB4OiAtIDMwLFxuICAgICAgICAgICAgICAgICAgICB5OiAtIDUwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0VGhlbWU6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gaW5pdGlhbGl6ZVxuICAgICAgICBpbml0OiBmdW5jdGlvbiAod3JhcHBlcikge1xuXG4gICAgICAgICAgICBpZiAoISB3cmFwcGVyLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgICAgICAvLyBhcHBseSBzdHlsaW5nXG4gICAgICAgICAgICBjaGFydHMudXRpbGl0eS5hcHBseVN0eWxlKHRoaXMpO1xuXG4gICAgICAgICAgICB2YXIgZDEgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IDEwOyBpICs9IDEpXG4gICAgICAgICAgICAgICAgZDEucHVzaChbIGksIHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAzMCkgXSk7XG5cbiAgICAgICAgICAgIHZhciBkMiA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPD0gMTA7IGogKz0gMSlcbiAgICAgICAgICAgICAgICBkMi5wdXNoKFsgaiwgcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIDIwKSBdKTtcblxuICAgICAgICAgICAgdmFyIGQzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8PSAxMDsgayArPSAxKVxuICAgICAgICAgICAgICAgIGQzLnB1c2goWyBrLCBwYXJzZUludChNYXRoLnJhbmRvbSgpICogMjApIF0pO1xuXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBbXTtcblxuICAgICAgICAgICAgdGhpcy5kYXRhLnB1c2goe1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcIkRhdGEgT25lXCIsXG4gICAgICAgICAgICAgICAgZGF0YTogZDFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5kYXRhLnB1c2goe1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcIkRhdGEgVHdvXCIsXG4gICAgICAgICAgICAgICAgZGF0YTogZDJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5kYXRhLnB1c2goe1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcIkRhdGEgVHJlZVwiLFxuICAgICAgICAgICAgICAgIGRhdGE6IGQzXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5wbG90ID0gJC5wbG90KHdyYXBwZXIsIHRoaXMuZGF0YSwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAgICAgKi9cbiAgICAkLmZuLnRrRmxvdENoYXJ0U3RhY2tlZEJhcnMgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBjaGFydHMuY2hhcnRfc3RhY2tlZF9iYXJzLmluaXQodGhpcyk7XG5cbiAgICB9O1xuXG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwiZmxvdC1jaGFydC1zdGFja2VkLWJhcnNcIl0nKS50a0Zsb3RDaGFydFN0YWNrZWRCYXJzKCk7XG5cbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgICB2YXIgY2hhcnRzID0gcmVxdWlyZSgnLi9faGVscGVyJyk7XG5cbiAgICBpZiAodHlwZW9mIGNoYXJ0cyA9PSAndW5kZWZpbmVkJylcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgY2hhcnRzLmNoYXJ0X2RvbnV0ID1cbiAgICB7XG4gICAgICAgIC8vIGNoYXJ0IGRhdGFcbiAgICAgICAgZGF0YTogW1xuICAgICAgICAgICAge2xhYmVsOiBcIlVTQVwiLCBkYXRhOiAzOH0sXG4gICAgICAgICAgICB7bGFiZWw6IFwiQnJhemlsXCIsIGRhdGE6IDIzfSxcbiAgICAgICAgICAgIHtsYWJlbDogXCJJbmRpYVwiLCBkYXRhOiAxNX0sXG4gICAgICAgICAgICB7bGFiZWw6IFwiVHVya2V5XCIsIGRhdGE6IDl9LFxuICAgICAgICAgICAge2xhYmVsOiBcIkZyYW5jZVwiLCBkYXRhOiA3fSxcbiAgICAgICAgICAgIHtsYWJlbDogXCJDaGluYVwiLCBkYXRhOiA1fSxcbiAgICAgICAgICAgIHtsYWJlbDogXCJHZXJtYW55XCIsIGRhdGE6IDN9XG4gICAgICAgIF0sXG5cbiAgICAgICAgLy8gd2lsbCBob2xkIHRoZSBjaGFydCBvYmplY3RcbiAgICAgICAgcGxvdDogbnVsbCxcblxuICAgICAgICAvLyBjaGFydCBvcHRpb25zXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIHNlcmllczoge1xuICAgICAgICAgICAgICAgIHBpZToge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBpbm5lclJhZGl1czogMC40LFxuICAgICAgICAgICAgICAgICAgICBoaWdobGlnaHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuMVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByYWRpdXM6IDEsXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0QW5nbGU6IDIsXG4gICAgICAgICAgICAgICAgICAgIGNvbWJpbmU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI0VFRScsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJlc2hvbGQ6IDAuMDVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICByYWRpdXM6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uIChsYWJlbCwgc2VyaWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8ZGl2IGNsYXNzPVwibGFiZWwgbGFiZWwtZGVmYXVsdFwiPicgKyBsYWJlbCArICcmbmJzcDsnICsgTWF0aC5yb3VuZChzZXJpZXMucGVyY2VudCkgKyAnJTwvZGl2Pic7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGdyb3c6IHthY3RpdmU6IGZhbHNlfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlZ2VuZDoge3Nob3c6IGZhbHNlfSxcbiAgICAgICAgICAgIGdyaWQ6IHtcbiAgICAgICAgICAgICAgICBob3ZlcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjoge31cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb2xvcnM6IFtdLFxuICAgICAgICAgICAgdG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICAgIHRvb2x0aXBPcHRzOiB7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCIlcyA6ICV5LjFcIiArIFwiJVwiLFxuICAgICAgICAgICAgICAgIHNoaWZ0czoge1xuICAgICAgICAgICAgICAgICAgICB4OiAtIDMwLFxuICAgICAgICAgICAgICAgICAgICB5OiAtIDUwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0VGhlbWU6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gaW5pdGlhbGl6ZVxuICAgICAgICBpbml0OiBmdW5jdGlvbiAod3JhcHBlcikge1xuXG4gICAgICAgICAgICBpZiAoISB3cmFwcGVyLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgICAgICAvLyBhcHBseSBzdHlsaW5nXG4gICAgICAgICAgICBjaGFydHMudXRpbGl0eS5hcHBseVN0eWxlKHRoaXMpO1xuXG4gICAgICAgICAgICB0aGlzLnBsb3QgPSAkLnBsb3Qod3JhcHBlciwgdGhpcy5kYXRhLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIGpRdWVyeSBwbHVnaW4gd3JhcHBlciBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEFuZ3VsYXIgVUkuVXRpbHM6IGpRdWVyeSBQYXNzdGhyb3VnaFxuICAgICAqL1xuICAgICQuZm4udGtGbG90Q2hhcnREb251dCA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIGNoYXJ0cy5jaGFydF9kb251dC5pbml0KHRoaXMpO1xuXG4gICAgfTtcblxuICAgICQoJ1tkYXRhLXRvZ2dsZT1cImZsb3QtY2hhcnQtZG9udXRcIl0nKS50a0Zsb3RDaGFydERvbnV0KCk7XG5cbn0pKGpRdWVyeSk7IiwidmFyIHNraW4gPSByZXF1aXJlKCcuLi9saWIvX3NraW4nKSgpO1xuXG52YXIgY2hhcnRzID1cbntcbiAgICAvLyB1dGlsaXR5IGNsYXNzXG4gICAgdXRpbGl0eToge1xuICAgICAgICBjaGFydENvbG9yczogWyBjb25maWcuc2tpbnNbIHNraW4gXVsgJ3ByaW1hcnktY29sb3InIF0sIGNvbG9yc1sgJ2RlZmF1bHQtY29sb3InIF0sIGNvbG9yc1sgJ2Rhbmdlci1jb2xvcicgXSwgY29sb3JzWyAnc3VjY2Vzcy1jb2xvcicgXSwgY29sb3JzWyAnd2FybmluZy1jb2xvcicgXSBdLFxuICAgICAgICBjaGFydEJhY2tncm91bmRDb2xvcnM6IFsgXCJyZ2JhKDI1NSwyNTUsMjU1LDApXCIsIFwicmdiYSgyNTUsMjU1LDI1NSwwKVwiIF0sXG5cbiAgICAgICAgYXBwbHlTdHlsZTogZnVuY3Rpb24gKHRoYXQpIHtcbiAgICAgICAgICAgIHRoYXQub3B0aW9ucy5jb2xvcnMgPSBjaGFydHMudXRpbGl0eS5jaGFydENvbG9ycztcbiAgICAgICAgICAgIHRoYXQub3B0aW9ucy5ncmlkLmJhY2tncm91bmRDb2xvciA9IHsgY29sb3JzOiBjaGFydHMudXRpbGl0eS5jaGFydEJhY2tncm91bmRDb2xvcnMgfTtcbiAgICAgICAgICAgIHRoYXQub3B0aW9ucy5ncmlkLmJvcmRlckNvbG9yID0gY2hhcnRzLnV0aWxpdHkuY2hhcnRDb2xvcnNbIDAgXTtcbiAgICAgICAgICAgIHRoYXQub3B0aW9ucy5ncmlkLmNvbG9yID0gY2hhcnRzLnV0aWxpdHkuY2hhcnRDb2xvcnNbIDAgXTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBnZW5lcmF0ZSByYW5kb20gbnVtYmVyIGZvciBjaGFydHNcbiAgICAgICAgcmFuZE51bTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMSArIDQwIC0gMjApKSApICsgMjA7XG4gICAgICAgIH1cbiAgICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY2hhcnRzOyIsIihmdW5jdGlvbiAoJCkge1xuXG4gICAgdmFyIHNraW4gPSByZXF1aXJlKCcuLi9saWIvX3NraW4nKSgpO1xuICAgIHZhciBjaGFydHMgPSByZXF1aXJlKCcuL19oZWxwZXInKTtcblxuICAgIGlmICh0eXBlb2YgY2hhcnRzID09ICd1bmRlZmluZWQnKVxuICAgICAgICByZXR1cm47XG5cbiAgICBjaGFydHMuY2hhcnRfaG9yaXpvbnRhbF9iYXJzID1cbiAgICB7XG4gICAgICAgIC8vIGNoYXJ0IGRhdGFcbiAgICAgICAgZGF0YTogbnVsbCxcblxuICAgICAgICAvLyB3aWxsIGhvbGQgdGhlIGNoYXJ0IG9iamVjdFxuICAgICAgICBwbG90OiBudWxsLFxuXG4gICAgICAgIC8vIGNoYXJ0IG9wdGlvbnNcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgZ3JpZDoge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNkZWRlZGVcIixcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBob3ZlcmFibGU6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXJpZXM6IHtcbiAgICAgICAgICAgICAgICBncm93OiB7YWN0aXZlOiBmYWxzZX0sXG4gICAgICAgICAgICAgICAgYmFyczoge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBiYXJXaWR0aDogMC4yLFxuICAgICAgICAgICAgICAgICAgICBmaWxsOiAxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlZ2VuZDoge3Bvc2l0aW9uOiBcIm53XCIsIGJhY2tncm91bmRDb2xvcjogbnVsbCwgYmFja2dyb3VuZE9wYWNpdHk6IDB9LFxuICAgICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgICAgICB0aWNrczogMyxcbiAgICAgICAgICAgICAgICB0aWNrQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgdGlja0Zvcm1hdHRlcjogZnVuY3Rpb24gKHZhbCwgYXhpcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsICsgXCJrXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICAgICAgdGlja3M6IDQsXG4gICAgICAgICAgICAgICAgdGlja0RlY2ltYWxzOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29sb3JzOiBbIGNvbmZpZy5za2luc1sgc2tpbiBdWyAncHJpbWFyeS1jb2xvcicgXSBdLFxuICAgICAgICAgICAgdG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICAgIHRvb2x0aXBPcHRzOiB7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCIlcyA6ICV5LjBcIixcbiAgICAgICAgICAgICAgICBzaGlmdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgeDogLSAzMCxcbiAgICAgICAgICAgICAgICAgICAgeTogLSA1MFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGVmYXVsdFRoZW1lOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIGluaXRpYWxpemVcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKHdyYXBwZXIpIHtcblxuICAgICAgICAgICAgaWYgKCF3cmFwcGVyLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgICAgICAvLyBhcHBseSBzdHlsaW5nXG4gICAgICAgICAgICAvLyBjaGFydHMudXRpbGl0eS5hcHBseVN0eWxlKHRoaXMpO1xuXG4gICAgICAgICAgICB2YXIgZDEgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IDU7IGkgKz0gMSlcbiAgICAgICAgICAgICAgICBkMS5wdXNoKFsgcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIDMwKSwgaSBdKTtcblxuICAgICAgICAgICAgdGhpcy5kYXRhID0gW107XG5cbiAgICAgICAgICAgIHRoaXMuZGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJTYWxlcyBWb2x1bWVcIixcbiAgICAgICAgICAgICAgICBkYXRhOiBkMSxcbiAgICAgICAgICAgICAgICBiYXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGJhcldpZHRoOiAwLjVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5wbG90ID0gJC5wbG90KHdyYXBwZXIsIHRoaXMuZGF0YSwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAgICAgKi9cbiAgICAkLmZuLnRrRmxvdENoYXJ0SG9yaXpvbnRhbEJhcnMgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBjaGFydHMuY2hhcnRfaG9yaXpvbnRhbF9iYXJzLmluaXQodGhpcyk7XG5cbiAgICB9O1xuXG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwiZmxvdC1jaGFydC1ob3Jpem9udGFsLWJhcnNcIl0nKS50a0Zsb3RDaGFydEhvcml6b250YWxCYXJzKCk7XG5cbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgICB2YXIgc2tpbiA9IHJlcXVpcmUoJy4uL2xpYi9fc2tpbicpKCk7XG4gICAgdmFyIGNoYXJ0cyA9IHJlcXVpcmUoJy4vX2hlbHBlcicpO1xuXG4gICAgaWYgKHR5cGVvZiBjaGFydHMgPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgIHJldHVybjtcblxuICAgIGNoYXJ0cy5jaGFydF9saW5lc19maWxsX25vcG9pbnRzXzMgPVxuICAgIHtcbiAgICAgICAgLy8gY2hhcnQgZGF0YVxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBkMTogW11cbiAgICAgICAgfSxcblxuICAgICAgICAvLyB3aWxsIGhvbGQgdGhlIGNoYXJ0IG9iamVjdFxuICAgICAgICBwbG90OiBudWxsLFxuXG4gICAgICAgIC8vIGNoYXJ0IG9wdGlvbnNcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgY29sb3JzOiBbICBjb2xvcnNbICdzdWNjZXNzLWNvbG9yJyBdXSxcbiAgICAgICAgICAgIGdyaWQ6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogY29sb3JzWyAnZGVmYXVsdC1saWdodC1jb2xvcicgXSxcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBob3ZlcmFibGU6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXJpZXM6IHtcbiAgICAgICAgICAgICAgICBncm93OiB7YWN0aXZlOiBmYWxzZX0sXG4gICAgICAgICAgICAgICAgbGluZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVXaWR0aDogMixcbiAgICAgICAgICAgICAgICAgICAgc3RlcHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogY29uZmlnLnNraW5zWyBza2luIF1bICdwcmltYXJ5LWNvbG9yJyBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwb2ludHM6IHtzaG93OiBmYWxzZX1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZWdlbmQ6IHtwb3NpdGlvbjogXCJud1wiLCBiYWNrZ3JvdW5kQ29sb3I6IG51bGwsIGJhY2tncm91bmRPcGFjaXR5OiAwfSxcbiAgICAgICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgICAgICAgdGlja3M6IDMsXG4gICAgICAgICAgICAgICAgdGlja1NpemU6IDQwLFxuICAgICAgICAgICAgICAgIHRpY2tGb3JtYXR0ZXI6IGZ1bmN0aW9uICh2YWwsIGF4aXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbCArIFwia1wiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB4YXhpczoge3RpY2tzOiA0LCB0aWNrRGVjaW1hbHM6IDAsIHRpY2tDb2xvcjogJ3RyYW5zcGFyZW50J30sXG4gICAgICAgICAgICBzaGFkb3dTaXplOiAwLFxuICAgICAgICAgICAgdG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICAgIHRvb2x0aXBPcHRzOiB7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCIlcyA6ICV5LjBcIixcbiAgICAgICAgICAgICAgICBzaGlmdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgeDogLSAzMCxcbiAgICAgICAgICAgICAgICAgICAgeTogLSA1MFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGVmYXVsdFRoZW1lOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIGluaXRpYWxpemVcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKHdyYXBwZXIpIHtcblxuICAgICAgICAgICAgaWYgKCF3cmFwcGVyLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgICAgICAvLyBnZW5lcmF0ZSBzb21lIGRhdGFcbiAgICAgICAgICAgIHRoaXMuZGF0YS5kMSA9IFsgWyAxLCAzICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMiwgNiArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDMsIDMwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgNCwgMTEwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgNSwgODAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyA2LCAxOCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDcsIDUwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgOCwgMTUgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyA5LCAxOCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDEwLCA2MCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDExLCAxMTAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAxMiwgMjcgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAxMywgMzAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAxNCwgMzMgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAxNSwgMjQgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAxNiwgODAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAxNywgMzAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAxOCwgMzMgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAxOSwgMzYgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAyMCwgMzkgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAyMSwgNDIgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAyMiwgNzAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAyMywgMzYgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAyNCwgMzkgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAyNSwgNDIgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAyNiwgNDUgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAyNywgNjAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAyOCwgNTEgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAyOSwgNTUgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAzMCwgMTAwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0gXTtcblxuICAgICAgICAgICAgLy8gbWFrZSBjaGFydFxuICAgICAgICAgICAgdGhpcy5wbG90ID0gJC5wbG90KFxuICAgICAgICAgICAgICAgIHdyYXBwZXIsXG4gICAgICAgICAgICAgICAgWyB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk5ldCBSZXZlbnVlXCIsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMuZGF0YS5kMVxuICAgICAgICAgICAgICAgIH0gXSxcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnNcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogalF1ZXJ5IHBsdWdpbiB3cmFwcGVyIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQW5ndWxhciBVSS5VdGlsczogalF1ZXJ5IFBhc3N0aHJvdWdoXG4gICAgICovXG4gICAgJC5mbi50a0Zsb3RDaGFydExpbmVzMyA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIGNoYXJ0cy5jaGFydF9saW5lc19maWxsX25vcG9pbnRzXzMuaW5pdCh0aGlzKTtcblxuICAgIH07XG5cbiAgICAkKCdbZGF0YS10b2dnbGU9XCJmbG90LWNoYXJ0LWxpbmVzLTNcIl0nKS50a0Zsb3RDaGFydExpbmVzMygpO1xuXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbiAoJCkge1xuXG4gICAgdmFyIHNraW4gPSByZXF1aXJlKCcuLi9saWIvX3NraW4nKSgpO1xuICAgIHZhciBjaGFydHMgPSByZXF1aXJlKCcuL19oZWxwZXInKTtcblxuICAgIGlmICh0eXBlb2YgY2hhcnRzID09ICd1bmRlZmluZWQnKVxuICAgICAgICByZXR1cm47XG5cbiAgICBjaGFydHMuY2hhcnRfbGluZXNfZmlsbF9ub3BvaW50cyA9XG4gICAge1xuICAgICAgICAvLyBjaGFydCBkYXRhXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGQxOiBbXSxcbiAgICAgICAgICAgIGQyOiBbXVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIHdpbGwgaG9sZCB0aGUgY2hhcnQgb2JqZWN0XG4gICAgICAgIHBsb3Q6IG51bGwsXG5cbiAgICAgICAgLy8gY2hhcnQgb3B0aW9uc1xuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBncmlkOiB7XG4gICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhYm92ZURhdGE6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvcnNbICdkZWZhdWx0LWNvbG9yJyBdLFxuICAgICAgICAgICAgICAgIGxhYmVsTWFyZ2luOiA1LFxuICAgICAgICAgICAgICAgIGF4aXNNYXJnaW46IDAsXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDAsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IG51bGwsXG4gICAgICAgICAgICAgICAgbWluQm9yZGVyTWFyZ2luOiA1LFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBob3ZlcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbW91c2VBY3RpdmVSYWRpdXM6IDIwLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjoge31cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXJpZXM6IHtcbiAgICAgICAgICAgICAgICBncm93OiB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxpbmVzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVXaWR0aDogMixcbiAgICAgICAgICAgICAgICAgICAgc3RlcHM6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwb2ludHM6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwibndcIixcbiAgICAgICAgICAgICAgICBub0NvbHVtbnM6IDJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgICAgIHRpY2tzOiA0LFxuICAgICAgICAgICAgICAgIHRpY2tEZWNpbWFsczogMCxcbiAgICAgICAgICAgICAgICB0aWNrQ29sb3I6ICcjZWZlZmVmJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICAgICAgdGlja3M6IDExLFxuICAgICAgICAgICAgICAgIHRpY2tEZWNpbWFsczogMCxcbiAgICAgICAgICAgICAgICB0aWNrQ29sb3I6ICd0cmFuc3BhcmVudCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb2xvcnM6IFtdLFxuICAgICAgICAgICAgc2hhZG93U2l6ZTogMSxcbiAgICAgICAgICAgIHRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgICB0b29sdGlwT3B0czoge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiJXMgOiAleS4wXCIsXG4gICAgICAgICAgICAgICAgc2hpZnRzOiB7XG4gICAgICAgICAgICAgICAgICAgIHg6IC0gMzAsXG4gICAgICAgICAgICAgICAgICAgIHk6IC0gNTBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRlZmF1bHRUaGVtZTogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvLyBpbml0aWFsaXplXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICh3cmFwcGVyKSB7XG5cbiAgICAgICAgICAgIGlmICghIHdyYXBwZXIubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgICAgIC8vIGFwcGx5IHN0eWxpbmdcbiAgICAgICAgICAgIGNoYXJ0cy51dGlsaXR5LmFwcGx5U3R5bGUodGhpcyk7XG5cbiAgICAgICAgICAgIC8vIGdlbmVyYXRlIHNvbWUgZGF0YVxuICAgICAgICAgICAgdGhpcy5kYXRhLmQxID0gWyBbIDEsIDMgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAyLCA2ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMywgOSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDQsIDEyICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgNSwgMTUgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyA2LCAxOCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDcsIDIxICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgOCwgMTUgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyA5LCAxOCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDEwLCAyMSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDExLCAyNCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDEyLCAyNyArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDEzLCAzMCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDE0LCAzMyArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDE1LCAyNCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDE2LCAyNyArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDE3LCAzMCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDE4LCAzMyArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDE5LCAzNiArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDIwLCAzOSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDIxLCA0MiArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDIyLCA0NSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDIzLCAzNiArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDI0LCAzOSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDI1LCA0MiArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDI2LCA0NSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDI3LCAzOCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDI4LCA1MSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDI5LCA1NSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDMwLCA2MCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdIF07XG4gICAgICAgICAgICB0aGlzLmRhdGEuZDIgPSBbIFsgMSwgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIC0gNSBdLCBbIDIsIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSAtIDQgXSwgWyAzLCBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgLSA0IF0sIFsgNCwgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgNSwgNCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDYsIDQgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyA3LCA1ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgOCwgNSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDksIDYgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAxMCwgNiArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDExLCA2ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTIsIDIgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAxMywgMyArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDE0LCA0ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTUsIDQgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAxNiwgNCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDE3LCA1ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTgsIDUgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAxOSwgMiArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDIwLCAyICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjEsIDMgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAyMiwgMyArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDIzLCAzICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjQsIDIgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAyNSwgNCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDI2LCA0ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjcsIDUgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAyOCwgMiArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDI5LCAyICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMzAsIDMgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSBdO1xuXG4gICAgICAgICAgICAvLyBtYWtlIGNoYXJ0XG4gICAgICAgICAgICB0aGlzLnBsb3QgPSAkLnBsb3QoXG4gICAgICAgICAgICAgICAgd3JhcHBlcixcbiAgICAgICAgICAgICAgICBbIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVmlzaXRzXCIsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMuZGF0YS5kMVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJVbmlxdWUgVmlzaXRzXCIsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMuZGF0YS5kMlxuICAgICAgICAgICAgICAgIH0gXSxcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnNcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogalF1ZXJ5IHBsdWdpbiB3cmFwcGVyIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQW5ndWxhciBVSS5VdGlsczogalF1ZXJ5IFBhc3N0aHJvdWdoXG4gICAgICovXG4gICAgJC5mbi50a0Zsb3RDaGFydExpbmVzMSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIGNoYXJ0cy5jaGFydF9saW5lc19maWxsX25vcG9pbnRzLmluaXQodGhpcyk7XG5cbiAgICB9O1xuXG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwiZmxvdC1jaGFydC1saW5lcy0xXCJdJykudGtGbG90Q2hhcnRMaW5lczEoKTtcblxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24gKCQpIHtcblxuICAgIHZhciBza2luID0gcmVxdWlyZSgnLi4vbGliL19za2luJykoKTtcbiAgICB2YXIgY2hhcnRzID0gcmVxdWlyZSgnLi9faGVscGVyJyk7XG5cbiAgICBpZiAodHlwZW9mIGNoYXJ0cyA9PSAndW5kZWZpbmVkJylcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgY2hhcnRzLmNoYXJ0X2xpbmVzX2ZpbGxfbm9wb2ludHNfMiA9XG4gICAge1xuICAgICAgICAvLyBjaGFydCBkYXRhXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGQxOiBbXVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIHdpbGwgaG9sZCB0aGUgY2hhcnQgb2JqZWN0XG4gICAgICAgIHBsb3Q6IG51bGwsXG5cbiAgICAgICAgLy8gY2hhcnQgb3B0aW9uc1xuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBjb2xvcnM6IFsgY29uZmlnLnNraW5zWyBza2luIF1bICdwcmltYXJ5LWNvbG9yJyBdIF0sXG4gICAgICAgICAgICBncmlkOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yc1sgJ2RlZmF1bHQtbGlnaHQtY29sb3InIF0sXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgaG92ZXJhYmxlOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VyaWVzOiB7XG4gICAgICAgICAgICAgICAgZ3Jvdzoge2FjdGl2ZTogZmFsc2V9LFxuICAgICAgICAgICAgICAgIGxpbmVzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBsaW5lV2lkdGg6IDUsXG4gICAgICAgICAgICAgICAgICAgIHN0ZXBzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGNvbmZpZy5za2luc1sgc2tpbiBdWyAncHJpbWFyeS1jb2xvcicgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcG9pbnRzOiB7c2hvdzogZmFsc2V9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVnZW5kOiB7cG9zaXRpb246IFwibndcIiwgYmFja2dyb3VuZENvbG9yOiBudWxsLCBiYWNrZ3JvdW5kT3BhY2l0eTogMH0sXG4gICAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgICAgIHRpY2tzOiAzLFxuICAgICAgICAgICAgICAgIHRpY2tTaXplOiA0MCxcbiAgICAgICAgICAgICAgICB0aWNrRm9ybWF0dGVyOiBmdW5jdGlvbiAodmFsLCBheGlzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWwgKyBcImtcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgICAgICB0aWNrczogNCxcbiAgICAgICAgICAgICAgICB0aWNrRGVjaW1hbHM6IDAsXG4gICAgICAgICAgICAgICAgdGlja0NvbG9yOiAndHJhbnNwYXJlbnQnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hhZG93U2l6ZTogMCxcbiAgICAgICAgICAgIHRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgICB0b29sdGlwT3B0czoge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiJXMgOiAleS4wXCIsXG4gICAgICAgICAgICAgICAgc2hpZnRzOiB7XG4gICAgICAgICAgICAgICAgICAgIHg6IC0gMzAsXG4gICAgICAgICAgICAgICAgICAgIHk6IC0gNTBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRlZmF1bHRUaGVtZTogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvLyBpbml0aWFsaXplXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICh3cmFwcGVyKSB7XG5cbiAgICAgICAgICAgIGlmICghIHdyYXBwZXIubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgICAgIC8vIGdlbmVyYXRlIHNvbWUgZGF0YVxuICAgICAgICAgICAgdGhpcy5kYXRhLmQxID0gWyBbIDEsIDMgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAyLCA2ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMywgMzAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyA0LCAxMTAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyA1LCA4MCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDYsIDE4ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgNywgNTAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyA4LCAxNSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDksIDE4ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTAsIDYwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTEsIDExMCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDEyLCAyNyArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDEzLCAzMCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDE0LCAzMyArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDE1LCAyNCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDE2LCA4MCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDE3LCAzMCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDE4LCAzMyArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDE5LCAzNiArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDIwLCAzOSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDIxLCA0MiArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDIyLCA3MCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDIzLCAzNiArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDI0LCAzOSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDI1LCA0MiArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDI2LCA0NSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDI3LCA2MCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDI4LCA1MSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDI5LCA1NSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDMwLCAxMDAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSBdO1xuXG4gICAgICAgICAgICAvLyBtYWtlIGNoYXJ0XG4gICAgICAgICAgICB0aGlzLnBsb3QgPSAkLnBsb3QoXG4gICAgICAgICAgICAgICAgd3JhcHBlcixcbiAgICAgICAgICAgICAgICBbIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTmV0IFJldmVudWVcIixcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy5kYXRhLmQxXG4gICAgICAgICAgICAgICAgfSBdLFxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAgICAgKi9cbiAgICAkLmZuLnRrRmxvdENoYXJ0TGluZXMyID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgY2hhcnRzLmNoYXJ0X2xpbmVzX2ZpbGxfbm9wb2ludHNfMi5pbml0KHRoaXMpO1xuXG4gICAgfTtcblxuICAgICQoJ1tkYXRhLXRvZ2dsZT1cImZsb3QtY2hhcnQtbGluZXMtMlwiXScpLnRrRmxvdENoYXJ0TGluZXMyKCk7XG5cbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgICB2YXIgc2tpbiA9IHJlcXVpcmUoJy4uL2xpYi9fc2tpbicpKCk7XG4gICAgdmFyIGNoYXJ0cyA9IHJlcXVpcmUoJy4vX2hlbHBlcicpO1xuXG4gICAgaWYgKHR5cGVvZiBjaGFydHMgPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgIHJldHVybjtcblxuICAgIGNoYXJ0cy5jaGFydF9taXhlZF8xID1cbiAgICB7XG4gICAgICAgIC8vIGNoYXJ0IGRhdGFcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZDE6IFtdXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gd2lsbCBob2xkIHRoZSBjaGFydCBvYmplY3RcbiAgICAgICAgcGxvdDogbnVsbCxcblxuICAgICAgICAvLyBjaGFydCBvcHRpb25zXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGNvbG9yczogWyBcIiNkZWRlZGVcIiwgY29uZmlnLnNraW5zWyBza2luIF1bICdwcmltYXJ5LWNvbG9yJyBdIF0sXG4gICAgICAgICAgICBncmlkOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IFwiI2RlZGVkZVwiLFxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGhvdmVyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlcmllczoge1xuICAgICAgICAgICAgICAgIGdyb3c6IHthY3RpdmU6IGZhbHNlfSxcbiAgICAgICAgICAgICAgICBsaW5lczoge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBmaWxsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbGluZVdpZHRoOiAyLFxuICAgICAgICAgICAgICAgICAgICBzdGVwczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBjb25maWcuc2tpbnNbIHNraW4gXVsgJ3ByaW1hcnktY29sb3InIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBvaW50czoge3Nob3c6IGZhbHNlfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlZ2VuZDoge3Bvc2l0aW9uOiBcIm53XCIsIGJhY2tncm91bmRDb2xvcjogbnVsbCwgYmFja2dyb3VuZE9wYWNpdHk6IDB9LFxuICAgICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgICAgICB0aWNrczogMyxcbiAgICAgICAgICAgICAgICB0aWNrU2l6ZTogNDAsXG4gICAgICAgICAgICAgICAgdGlja0Zvcm1hdHRlcjogZnVuY3Rpb24gKHZhbCwgYXhpcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsICsgXCJrXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHhheGlzOiB7dGlja3M6IDQsIHRpY2tEZWNpbWFsczogMCwgdGlja0NvbG9yOiAndHJhbnNwYXJlbnQnfSxcbiAgICAgICAgICAgIHNoYWRvd1NpemU6IDAsXG4gICAgICAgICAgICB0b29sdGlwOiB0cnVlLFxuICAgICAgICAgICAgdG9vbHRpcE9wdHM6IHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIiVzIDogJXkuMFwiLFxuICAgICAgICAgICAgICAgIHNoaWZ0czoge1xuICAgICAgICAgICAgICAgICAgICB4OiAtIDMwLFxuICAgICAgICAgICAgICAgICAgICB5OiAtIDUwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0VGhlbWU6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gaW5pdGlhbGl6ZVxuICAgICAgICBpbml0OiBmdW5jdGlvbiAod3JhcHBlcikge1xuXG4gICAgICAgICAgICBpZiAoISB3cmFwcGVyLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgICAgICAvLyBnZW5lcmF0ZSBzb21lIGRhdGFcbiAgICAgICAgICAgIHRoaXMuZGF0YS5kMSA9IFsgWyAxLCAzICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMiwgNiArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDMsIDMwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgNCwgMTEwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgNSwgODAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyA2LCAxOCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDcsIDUwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgOCwgMTUgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyA5LCAxOCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDEwLCA2MCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDExLCAxMTAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAxMiwgMjcgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAxMywgMzAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSBdO1xuXG4gICAgICAgICAgICAvLyBtYWtlIGNoYXJ0XG4gICAgICAgICAgICB0aGlzLnBsb3QgPSAkLnBsb3QoXG4gICAgICAgICAgICAgICAgd3JhcHBlcixcbiAgICAgICAgICAgICAgICBbIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTmV0IFJldmVudWVcIixcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy5kYXRhLmQxLFxuICAgICAgICAgICAgICAgICAgICBiYXJzOiB7c2hvdzogdHJ1ZSwgZmlsbDogMSwgYmFyV2lkdGg6IDAuNzUsIGFsaWduOiBcImNlbnRlclwifVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLmRhdGEuZDEsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVzOiB7c2hvdzogdHJ1ZSwgZmlsbDogZmFsc2V9LFxuICAgICAgICAgICAgICAgICAgICBwb2ludHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICByYWRpdXM6IDUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2w6IFwiY2lyY2xlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbENvbG9yOiBjb25maWcuc2tpbnNbIHNraW4gXVsgJ3ByaW1hcnktY29sb3InIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjZmZmXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gXSxcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnNcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogalF1ZXJ5IHBsdWdpbiB3cmFwcGVyIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQW5ndWxhciBVSS5VdGlsczogalF1ZXJ5IFBhc3N0aHJvdWdoXG4gICAgICovXG4gICAgJC5mbi50a0Zsb3RDaGFydE1peGVkID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgY2hhcnRzLmNoYXJ0X21peGVkXzEuaW5pdCh0aGlzKTtcblxuICAgIH07XG5cbiAgICAkKCdbZGF0YS10b2dnbGU9XCJmbG90LWNoYXJ0LW1peGVkXCJdJykudGtGbG90Q2hhcnRNaXhlZCgpO1xuXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbiAoJCkge1xuXG4gICAgdmFyIGNoYXJ0cyA9IHJlcXVpcmUoJy4vX2hlbHBlcicpO1xuXG4gICAgaWYgKHR5cGVvZiBjaGFydHMgPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgIHJldHVybjtcblxuICAgIGNoYXJ0cy5jaGFydF9waWUgPVxuICAgIHtcbiAgICAgICAgLy8gY2hhcnQgZGF0YVxuICAgICAgICBkYXRhOiBbXG4gICAgICAgICAgICB7bGFiZWw6IFwiVVNBXCIsIGRhdGE6IDM4fSxcbiAgICAgICAgICAgIHtsYWJlbDogXCJCcmF6aWxcIiwgZGF0YTogMjN9LFxuICAgICAgICAgICAge2xhYmVsOiBcIkluZGlhXCIsIGRhdGE6IDE1fSxcbiAgICAgICAgICAgIHtsYWJlbDogXCJUdXJrZXlcIiwgZGF0YTogOX0sXG4gICAgICAgICAgICB7bGFiZWw6IFwiRnJhbmNlXCIsIGRhdGE6IDd9LFxuICAgICAgICAgICAge2xhYmVsOiBcIkNoaW5hXCIsIGRhdGE6IDV9LFxuICAgICAgICAgICAge2xhYmVsOiBcIkdlcm1hbnlcIiwgZGF0YTogM31cbiAgICAgICAgXSxcblxuICAgICAgICAvLyB3aWxsIGhvbGQgdGhlIGNoYXJ0IG9iamVjdFxuICAgICAgICBwbG90OiBudWxsLFxuXG4gICAgICAgIC8vIGNoYXJ0IG9wdGlvbnNcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgc2VyaWVzOiB7XG4gICAgICAgICAgICAgICAgcGllOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC4xXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHJhZGl1czogMSxcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRBbmdsZTogMixcbiAgICAgICAgICAgICAgICAgICAgY29tYmluZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjMzUzNTM1JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZDogMC4wNVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1czogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKGxhYmVsLCBzZXJpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJsYWJlbCBsYWJlbC1kZWZhdWx0XCI+JyArIGxhYmVsICsgJyZuYnNwOycgKyBNYXRoLnJvdW5kKHNlcmllcy5wZXJjZW50KSArICclPC9kaXY+JztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZ3Jvdzoge2FjdGl2ZTogZmFsc2V9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29sb3JzOiBbXSxcbiAgICAgICAgICAgIGxlZ2VuZDoge3Nob3c6IGZhbHNlfSxcbiAgICAgICAgICAgIGdyaWQ6IHtcbiAgICAgICAgICAgICAgICBob3ZlcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjoge31cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b29sdGlwOiB0cnVlLFxuICAgICAgICAgICAgdG9vbHRpcE9wdHM6IHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIiVzIDogJXkuMVwiICsgXCIlXCIsXG4gICAgICAgICAgICAgICAgc2hpZnRzOiB7XG4gICAgICAgICAgICAgICAgICAgIHg6IC0gMzAsXG4gICAgICAgICAgICAgICAgICAgIHk6IC0gNTBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRlZmF1bHRUaGVtZTogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvLyBpbml0aWFsaXplXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICh3cmFwcGVyKSB7XG5cbiAgICAgICAgICAgIGlmICghIHdyYXBwZXIubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgICAgIC8vIGFwcGx5IHN0eWxpbmdcbiAgICAgICAgICAgIGNoYXJ0cy51dGlsaXR5LmFwcGx5U3R5bGUodGhpcyk7XG5cbiAgICAgICAgICAgIHRoaXMucGxvdCA9ICQucGxvdCh3cmFwcGVyLCB0aGlzLmRhdGEsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogalF1ZXJ5IHBsdWdpbiB3cmFwcGVyIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQW5ndWxhciBVSS5VdGlsczogalF1ZXJ5IFBhc3N0aHJvdWdoXG4gICAgICovXG4gICAgJC5mbi50a0Zsb3RDaGFydFBpZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIGNoYXJ0cy5jaGFydF9waWUuaW5pdCh0aGlzKTtcblxuICAgIH07XG5cbiAgICAkKCdbZGF0YS10b2dnbGU9XCJmbG90LWNoYXJ0LXBpZVwiXScpLnRrRmxvdENoYXJ0UGllKCk7XG5cbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgICB2YXIgc2tpbiA9IHJlcXVpcmUoJy4uL2xpYi9fc2tpbicpKCk7XG4gICAgdmFyIGNoYXJ0cyA9IHJlcXVpcmUoJy4vX2hlbHBlcicpO1xuXG4gICAgaWYgKHR5cGVvZiBjaGFydHMgPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgIHJldHVybjtcblxuICAgIGNoYXJ0cy5jaGFydF9zaW1wbGUgPVxuICAgIHtcbiAgICAgICAgLy8gZGF0YVxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBzaW46IFtdLFxuICAgICAgICAgICAgY29zOiBbXVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIHdpbGwgaG9sZCB0aGUgY2hhcnQgb2JqZWN0XG4gICAgICAgIHBsb3Q6IG51bGwsXG5cbiAgICAgICAgLy8gY2hhcnQgb3B0aW9uc1xuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBjb2xvcnM6IFsgY29uZmlnLnNraW5zWyBza2luIF1bICdwcmltYXJ5LWNvbG9yJyBdLCBjb2xvcnNbICdkZWZhdWx0LWNvbG9yJyBdIF0sXG4gICAgICAgICAgICBncmlkOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yc1sgJ2RlZmF1bHQtbGlnaHQtY29sb3InIF0sXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgaG92ZXJhYmxlOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VyaWVzOiB7XG4gICAgICAgICAgICAgICAgZ3Jvdzoge2FjdGl2ZTogZmFsc2V9LFxuICAgICAgICAgICAgICAgIGxpbmVzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBsaW5lV2lkdGg6IDQsXG4gICAgICAgICAgICAgICAgICAgIHN0ZXBzOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcG9pbnRzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHJhZGl1czogNSxcbiAgICAgICAgICAgICAgICAgICAgc3ltYm9sOiBcImNpcmNsZVwiLFxuICAgICAgICAgICAgICAgICAgICBmaWxsOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjZmZmXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVnZW5kOiB7cG9zaXRpb246IFwic2VcIiwgYmFja2dyb3VuZENvbG9yOiBudWxsLCBiYWNrZ3JvdW5kT3BhY2l0eTogMCwgbm9Db2x1bW5zOiAyfSxcbiAgICAgICAgICAgIHNoYWRvd1NpemU6IDAsXG4gICAgICAgICAgICB5YXhpczoge3RpY2tzOiAzfSxcbiAgICAgICAgICAgIHhheGlzOiB7dGlja3M6IDQsIHRpY2tEZWNpbWFsczogMCwgdGlja0NvbG9yOiAndHJhbnNwYXJlbnQnfSxcbiAgICAgICAgICAgIHRvb2x0aXA6IHRydWUsIC8vYWN0aXZhdGUgdG9vbHRpcFxuICAgICAgICAgICAgdG9vbHRpcE9wdHM6IHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIiVzIDogJXkuM1wiLFxuICAgICAgICAgICAgICAgIHNoaWZ0czoge1xuICAgICAgICAgICAgICAgICAgICB4OiAtIDMwLFxuICAgICAgICAgICAgICAgICAgICB5OiAtIDUwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0VGhlbWU6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gaW5pdGlhbGl6ZVxuICAgICAgICBpbml0OiBmdW5jdGlvbiAod3JhcHBlcikge1xuXG4gICAgICAgICAgICBpZiAoISB3cmFwcGVyLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5wbG90ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNDsgaSArPSAwLjUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLnNpbi5wdXNoKFsgaSwgTWF0aC5zaW4oaSkgXSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5jb3MucHVzaChbIGksIE1hdGguY29zKGkpIF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucGxvdCA9ICQucGxvdChcbiAgICAgICAgICAgICAgICB3cmFwcGVyLFxuICAgICAgICAgICAgICAgIFsge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJTaW5cIixcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy5kYXRhLnNpbixcbiAgICAgICAgICAgICAgICAgICAgbGluZXM6IHtmaWxsQ29sb3I6IGNvbG9yc1sgJ2RlZmF1bHQtY29sb3InIF19LFxuICAgICAgICAgICAgICAgICAgICBwb2ludHM6IHtmaWxsQ29sb3I6IFwiI2ZmZlwifVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJDb3NcIixcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy5kYXRhLmNvcyxcbiAgICAgICAgICAgICAgICAgICAgbGluZXM6IHtmaWxsQ29sb3I6IFwiIzQ0NFwifSxcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRzOiB7ZmlsbENvbG9yOiBcIiNmZmZcIn1cbiAgICAgICAgICAgICAgICB9IF0sXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIGpRdWVyeSBwbHVnaW4gd3JhcHBlciBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEFuZ3VsYXIgVUkuVXRpbHM6IGpRdWVyeSBQYXNzdGhyb3VnaFxuICAgICAqL1xuICAgICQuZm4udGtGbG90Q2hhcnRTaW1wbGUgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBjaGFydHMuY2hhcnRfc2ltcGxlLmluaXQodGhpcyk7XG5cbiAgICB9O1xuXG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwiZmxvdC1jaGFydC1zaW1wbGVcIl0nKS50a0Zsb3RDaGFydFNpbXBsZSgpO1xuXG59KShqUXVlcnkpOyIsInJlcXVpcmUoJy4vX3NpbXBsZScpO1xucmVxdWlyZSgnLi9fbWl4ZWQnKTtcbnJlcXVpcmUoJy4vX2xpbmUnKTtcbnJlcXVpcmUoJy4vX2hvcml6b250YWwnKTtcbnJlcXVpcmUoJy4vX2xpbmVfZmlsbF9ub3BvaW50cycpO1xucmVxdWlyZSgnLi9fbGluZV9maWxsX25vcG9pbnRzXzInKTtcbnJlcXVpcmUoJy4vX2JhcnMtb3JkZXJlZCcpO1xucmVxdWlyZSgnLi9fZG9udXQnKTtcbnJlcXVpcmUoJy4vX2JhcnMtc3RhY2tlZCcpO1xucmVxdWlyZSgnLi9fcGllJyk7XG5yZXF1aXJlKCcuL19hdXRvdXBkYXRlJyk7IiwibW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBza2luID0gJC5jb29raWUoJ3NraW4nKTtcblxuICAgIGlmICh0eXBlb2Ygc2tpbiA9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBza2luID0gJ2RlZmF1bHQnO1xuICAgIH1cbiAgICByZXR1cm4gc2tpbjtcbn0pOyIsInJlcXVpcmUoJy4vbW9ycmlzL21haW4nKTtcbnJlcXVpcmUoJy4vc3BhcmtsaW5lL21haW4nKTtcbnJlcXVpcmUoJy4vZmxvdC9tYWluJyk7XG5yZXF1aXJlKCcuL2Vhc3ktcGllL21haW4nKTtcbiIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgJC5mbi50a01vcnJpc0NoYXJ0QXJlYSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIGlmICghIHRoaXMuYXR0cignaWQnKSkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBza2luID0gcmVxdWlyZSgnLi4vbGliL19za2luJykoKTtcblxuICAgICAgICB0aGlzLmVtcHR5KCk7XG5cbiAgICAgICAgbmV3IE1vcnJpcy5BcmVhKHtcbiAgICAgICAgICAgIGxpbmVDb2xvcnM6IFsgY29uZmlnLnNraW5zWyBza2luIF1bICdwcmltYXJ5LWNvbG9yJyBdLCBjb2xvcnNbICdkYW5nZXItY29sb3InIF0gXSxcbiAgICAgICAgICAgIHBvaW50RmlsbENvbG9yczogY29uZmlnLnNraW5zWyBza2luIF1bICdwcmltYXJ5LWNvbG9yJyBdLFxuICAgICAgICAgICAgZmlsbE9wYWNpdHk6ICcwLjMnLFxuICAgICAgICAgICAgZWxlbWVudDogdGhpcy5hdHRyKCdpZCcpLFxuICAgICAgICAgICAgZGF0YTogW1xuICAgICAgICAgICAgICAgIHt5OiAnMS4xLicsIGE6IDMwLCBiOiA5MH0sXG4gICAgICAgICAgICAgICAge3k6ICcyLjEuJywgYTogMzUsIGI6IDY1fSxcbiAgICAgICAgICAgICAgICB7eTogJzMuMS4nLCBhOiA1MCwgYjogNDB9LFxuICAgICAgICAgICAgICAgIHt5OiAnNC4xLicsIGE6IDc1LCBiOiA2NX0sXG4gICAgICAgICAgICAgICAge3k6ICc1LjEuJywgYTogNTAsIGI6IDQwfSxcbiAgICAgICAgICAgICAgICB7eTogJzYuMS4nLCBhOiA3NSwgYjogNjV9LFxuICAgICAgICAgICAgICAgIHt5OiAnNy4xLicsIGE6IDYwLCBiOiA5MH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB4a2V5OiAneScsXG4gICAgICAgICAgICB5a2V5czogWyAnYScgXSxcbiAgICAgICAgICAgIGxhYmVsczogWyAnU2VyaWVzIEEnIF0sXG4gICAgICAgICAgICBncmlkVGV4dENvbG9yOiBjb2xvcnNbICdkZWZhdWx0LWNvbG9yJyBdLFxuICAgICAgICAgICAgZ3JpZFRleHRXZWlnaHQ6ICdib2xkJyxcbiAgICAgICAgICAgIHJlc2l6ZTogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICAkKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAkKCdbZGF0YS10b2dnbGU9XCJtb3JyaXMtY2hhcnQtYXJlYVwiXScpLnRrTW9ycmlzQ2hhcnRBcmVhKCk7XG5cbiAgICAgICAgJCgnW2RhdGEtc2tpbl0nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCdbZGF0YS10b2dnbGU9XCJtb3JyaXMtY2hhcnQtYXJlYVwiXScpLnRrTW9ycmlzQ2hhcnRBcmVhKCk7XG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAkLmZuLnRrTW9ycmlzQ2hhcnRCYXIgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBpZiAoISB0aGlzLmF0dHIoJ2lkJykpIHJldHVybjtcblxuICAgICAgICB2YXIgc2tpbiA9IHJlcXVpcmUoJy4uL2xpYi9fc2tpbicpKCk7XG5cbiAgICAgICAgdGhpcy5lbXB0eSgpO1xuXG4gICAgICAgIG5ldyBNb3JyaXMuQmFyKHtcbiAgICAgICAgICAgIGJhckNvbG9yczogWyBjb25maWcuc2tpbnNbIHNraW4gXVsgJ3ByaW1hcnktY29sb3InIF0sIGNvbG9yc1sgJ2RlZmF1bHQtY29sb3InIF0sIGNvbG9yc1sgJ2Rhbmdlci1jb2xvcicgXSBdLFxuICAgICAgICAgICAgZWxlbWVudDogdGhpcy5hdHRyKCdpZCcpLFxuICAgICAgICAgICAgZGF0YTogW1xuICAgICAgICAgICAgICAgIHt5OiAnMjAwNicsIGE6IDEwMCwgYjogOTAsIGM6IDQwfSxcbiAgICAgICAgICAgICAgICB7eTogJzIwMDcnLCBhOiA3NSwgYjogNjUsIGM6IDEwMH0sXG4gICAgICAgICAgICAgICAge3k6ICcyMDA4JywgYTogNTAsIGI6IDQwLCBjOiAzMH0sXG4gICAgICAgICAgICAgICAge3k6ICcyMDA5JywgYTogNzUsIGI6IDY1LCBjOiA4NX0sXG4gICAgICAgICAgICAgICAge3k6ICcyMDEwJywgYTogNTAsIGI6IDQwLCBjOiA0NX0sXG4gICAgICAgICAgICAgICAge3k6ICcyMDExJywgYTogNzUsIGI6IDY1LCBjOiA5MH0sXG4gICAgICAgICAgICAgICAge3k6ICcyMDEyJywgYTogMTAwLCBiOiA5MCwgYzogODB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ3JpZFRleHRDb2xvcjogY29sb3JzWyAnZGVmYXVsdC1jb2xvcicgXSxcbiAgICAgICAgICAgIGdyaWRUZXh0V2VpZ2h0OiAnYm9sZCcsXG4gICAgICAgICAgICByZXNpemU6IHRydWUsXG4gICAgICAgICAgICB4a2V5OiAneScsXG4gICAgICAgICAgICB5a2V5czogWyAnYScsICdiJywgJ2MnIF0sXG4gICAgICAgICAgICBsYWJlbHM6IFsgJ1NlcmllcyBBJywgJ1NlcmllcyBCJywgJ1NlcmllcyBDJyBdXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAkKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAkKCdbZGF0YS10b2dnbGU9XCJtb3JyaXMtY2hhcnQtYmFyXCJdJykudGtNb3JyaXNDaGFydEJhcigpO1xuXG4gICAgICAgICQoJ1tkYXRhLXNraW5dJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgJCgnW2RhdGEtdG9nZ2xlPVwibW9ycmlzLWNoYXJ0LWJhclwiXScpLnRrTW9ycmlzQ2hhcnRCYXIoKTtcblxuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG59KShqUXVlcnkpO1xuIiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAkLmZuLnRrTW9ycmlzQ2hhcnREb251dCA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIGlmICghIHRoaXMuYXR0cignaWQnKSkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBza2luID0gcmVxdWlyZSgnLi4vbGliL19za2luJykoKTtcblxuICAgICAgICB0aGlzLmVtcHR5KCk7XG5cbiAgICAgICAgbmV3IE1vcnJpcy5Eb251dCh7XG4gICAgICAgICAgICBlbGVtZW50OiB0aGlzLmF0dHIoJ2lkJyksXG4gICAgICAgICAgICBjb2xvcnM6IFsgY29sb3JzWyAnZGFuZ2VyLWNvbG9yJyBdLCBjb25maWcuc2tpbnNbIHNraW4gXVsgJ3ByaW1hcnktY29sb3InIF0sIGNvbG9yc1sgJ2RlZmF1bHQtY29sb3InIF0gXSxcbiAgICAgICAgICAgIGRhdGE6IFtcbiAgICAgICAgICAgICAgICB7bGFiZWw6IFwiRG93bmxvYWQgU2FsZXNcIiwgdmFsdWU6IDEyfSxcbiAgICAgICAgICAgICAgICB7bGFiZWw6IFwiSW4tU3RvcmUgU2FsZXNcIiwgdmFsdWU6IDMwfSxcbiAgICAgICAgICAgICAgICB7bGFiZWw6IFwiTWFpbC1PcmRlciBTYWxlc1wiLCB2YWx1ZTogMjB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgICQoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICQoJ1tkYXRhLXRvZ2dsZT1cIm1vcnJpcy1jaGFydC1kb251dFwiXScpLnRrTW9ycmlzQ2hhcnREb251dCgpO1xuXG4gICAgICAgICQoJ1tkYXRhLXNraW5dJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgJCgnW2RhdGEtdG9nZ2xlPVwibW9ycmlzLWNoYXJ0LWRvbnV0XCJdJykudGtNb3JyaXNDaGFydERvbnV0KCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICQuZm4udGtNb3JyaXNDaGFydExpbmUgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBpZiAoISB0aGlzLmF0dHIoJ2lkJykpIHJldHVybjtcblxuICAgICAgICB2YXIgc2tpbiA9IHJlcXVpcmUoJy4uL2xpYi9fc2tpbicpKCk7XG5cbiAgICAgICAgdGhpcy5lbXB0eSgpO1xuXG4gICAgICAgIG5ldyBNb3JyaXMuTGluZSh7XG4gICAgICAgICAgICBsaW5lQ29sb3JzOiBbIGNvbmZpZy5za2luc1sgc2tpbiBdWyAncHJpbWFyeS1jb2xvcicgXSwgY29sb3JzWyAnZGFuZ2VyLWNvbG9yJyBdIF0sXG4gICAgICAgICAgICBwb2ludEZpbGxDb2xvcnM6IFsgY29uZmlnLnNraW5zWyBza2luIF1bICdwcmltYXJ5LWNvbG9yJyBdLCBjb2xvcnNbICdkYW5nZXItY29sb3InIF0gXSxcbiAgICAgICAgICAgIHBvaW50U3Ryb2tlQ29sb3JzOiBbICcjZmZmZmZmJywgJyNmZmZmZmYnIF0sXG4gICAgICAgICAgICBncmlkVGV4dENvbG9yOiBjb2xvcnNbICdkZWZhdWx0LWNvbG9yJyBdLFxuICAgICAgICAgICAgZ3JpZFRleHRXZWlnaHQ6ICdib2xkJyxcblxuICAgICAgICAgICAgLy8gSUQgb2YgdGhlIGVsZW1lbnQgaW4gd2hpY2ggdG8gZHJhdyB0aGUgY2hhcnQuXG4gICAgICAgICAgICBlbGVtZW50OiB0aGlzLmF0dHIoJ2lkJyksXG4gICAgICAgICAgICAvLyBDaGFydCBkYXRhIHJlY29yZHMgLS0gZWFjaCBlbnRyeSBpbiB0aGlzIGFycmF5IGNvcnJlc3BvbmRzIHRvIGEgcG9pbnQgb25cbiAgICAgICAgICAgIC8vIHRoZSBjaGFydC5cbiAgICAgICAgICAgIGRhdGE6IFtcbiAgICAgICAgICAgICAgICB7ZGF0ZTogJzIwMTQtMDInLCBhOiAyMDAwLCBiOiAyNDAwfSxcbiAgICAgICAgICAgICAgICB7ZGF0ZTogJzIwMTQtMDMnLCBhOiAxMjAwLCBiOiAyNTAwfSxcbiAgICAgICAgICAgICAgICB7ZGF0ZTogJzIwMTQtMDQnLCBhOiAzMjAwLCBiOiAyMDAwfSxcbiAgICAgICAgICAgICAgICB7ZGF0ZTogJzIwMTQtMDUnLCBhOiAxNjAwLCBiOiAxNDQwfSxcbiAgICAgICAgICAgICAgICB7ZGF0ZTogJzIwMTQtMDYnLCBhOiAxMjkwLCBiOiAyODMwfSxcbiAgICAgICAgICAgICAgICB7ZGF0ZTogJzIwMTQtMDcnLCBhOiAxOTMwLCBiOiAxMjAwfSxcbiAgICAgICAgICAgICAgICB7ZGF0ZTogJzIwMTQtMDgnLCBhOiAyMTIwLCBiOiAzMDAwfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIFRoZSBuYW1lIG9mIHRoZSBkYXRhIHJlY29yZCBhdHRyaWJ1dGUgdGhhdCBjb250YWlucyB4LXZhbHVlcy5cbiAgICAgICAgICAgIHhrZXk6ICdkYXRlJyxcbiAgICAgICAgICAgIC8vIEEgbGlzdCBvZiBuYW1lcyBvZiBkYXRhIHJlY29yZCBhdHRyaWJ1dGVzIHRoYXQgY29udGFpbiB5LXZhbHVlcy5cbiAgICAgICAgICAgIHlrZXlzOiBbICdhJywgJ2InIF0sXG4gICAgICAgICAgICAvLyBMYWJlbHMgZm9yIHRoZSB5a2V5cyAtLSB3aWxsIGJlIGRpc3BsYXllZCB3aGVuIHlvdSBob3ZlciBvdmVyIHRoZVxuICAgICAgICAgICAgLy8gY2hhcnQuXG4gICAgICAgICAgICBsYWJlbHM6IFsgJ1NlcmllcyBBJywgJ1NlcmllcyBCJyBdLFxuICAgICAgICAgICAgcmVzaXplOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgICQoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICQoJ1tkYXRhLXRvZ2dsZT1cIm1vcnJpcy1jaGFydC1saW5lXCJdJykudGtNb3JyaXNDaGFydExpbmUoKTtcblxuICAgICAgICAkKCdbZGF0YS1za2luXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgICQoJ1tkYXRhLXRvZ2dsZT1cIm1vcnJpcy1jaGFydC1saW5lXCJdJykudGtNb3JyaXNDaGFydExpbmUoKTtcblxuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG59KShqUXVlcnkpOyIsInJlcXVpcmUoJy4vX2FyZWEnKTtcbnJlcXVpcmUoJy4vX2JhcicpO1xucmVxdWlyZSgnLi9fZG9udXQnKTtcbnJlcXVpcmUoJy4vX2xpbmUnKTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIHZhciBza2luID0gcmVxdWlyZSgnLi4vbGliL19za2luJykoKTtcblxuICAgIC8qKlxuICAgICAqIGpRdWVyeSBwbHVnaW4gd3JhcHBlciBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEFuZ3VsYXIgVUkuVXRpbHM6IGpRdWVyeSBQYXNzdGhyb3VnaFxuICAgICAqL1xuICAgICQuZm4udGtTcGFya0xpbmUgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICB0aGlzLnNwYXJrbGluZShcbiAgICAgICAgICAgIHRoaXMuZGF0YSgnZGF0YScpIHx8IFwiaHRtbFwiLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzI0JyxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIHNwb3RSYWRpdXM6ICczLjInLFxuICAgICAgICAgICAgICAgIHNwb3RDb2xvcjogY29uZmlnLnNraW5zWyBza2luIF1bICdwcmltYXJ5LWNvbG9yJyBdLFxuICAgICAgICAgICAgICAgIG1pblNwb3RDb2xvcjogY29uZmlnLnNraW5zWyBza2luIF1bICdwcmltYXJ5LWNvbG9yJyBdLFxuICAgICAgICAgICAgICAgIG1heFNwb3RDb2xvcjogY29uZmlnLnNraW5zWyBza2luIF1bICdwcmltYXJ5LWNvbG9yJyBdLFxuICAgICAgICAgICAgICAgIGhpZ2hsaWdodFNwb3RDb2xvcjogY29sb3JzWyAnZGFuZ2VyLWNvbG9yJyBdLFxuICAgICAgICAgICAgICAgIGxpbmVXaWR0aDogJzInLFxuICAgICAgICAgICAgICAgIGxpbmVDb2xvcjogY29uZmlnLnNraW5zWyBza2luIF1bICdwcmltYXJ5LWNvbG9yJyBdLFxuICAgICAgICAgICAgICAgIGZpbGxDb2xvcjogY29sb3JzWyAnYm9keS1iZycgXVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgfTtcblxuICAgICQuZm4udGtTcGFya0JhciA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMudGV4dCh0aGlzLmZpbmQoJ3NwYW4nKS50ZXh0KCkpO1xuXG4gICAgICAgIHRoaXMuc3BhcmtsaW5lKFxuICAgICAgICAgICAgdGhpcy5kYXRhKCdkYXRhJykgfHwgXCJodG1sXCIsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnYmFyJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICc3MCcsXG4gICAgICAgICAgICAgICAgYmFyV2lkdGg6IDEwLFxuICAgICAgICAgICAgICAgIGJhclNwYWNpbmc6IDgsXG4gICAgICAgICAgICAgICAgemVyb0F4aXM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHN0YWNrZWRCYXJDb2xvcjogWyBjb25maWcuc2tpbnNbIHNraW4gXVsgJ3ByaW1hcnktY29sb3InIF0sIGNvbG9yc1sgJ2RlZmF1bHQtbGlnaHQtY29sb3InIF0gXSxcbiAgICAgICAgICAgICAgICBjb2xvck1hcDogdGhpcy5kYXRhKCdjb2xvcnMnKSA/IFsgY29uZmlnLnNraW5zWyBza2luIF1bICdwcmltYXJ5LWNvbG9yJyBdLCBjb2xvcnNbICdzdWNjZXNzLWNvbG9yJyBdLCBjb2xvcnNbICdkYW5nZXItY29sb3InIF0sIGNvbG9yc1sgJ2RlZmF1bHQtbGlnaHQtY29sb3InIF0gXSA6IFtdLFxuICAgICAgICAgICAgICAgIGVuYWJsZVRhZ09wdGlvbnM6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgIH07XG5cbiAgICAkKFwiLnNwYXJrbGluZS1iYXJcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykudGtTcGFya0JhcigpO1xuICAgIH0pO1xuXG4gICAgJChcIi5zcGFya2xpbmUtbGluZVwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS50a1NwYXJrTGluZSgpO1xuICAgIH0pO1xuXG59KShqUXVlcnkpOyIsInJlcXVpcmUoJy4vX3NwYXJrbGluZScpO1xuIiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvKipcbiAgICAgKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAgICAgKi9cbiAgICAkLmZuLnRrQ2Fyb3VzZWwgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICB0aGlzLmNhcm91c2VsKCk7XG5cbiAgICAgICAgdGhpcy5maW5kKCdbZGF0YS1zbGlkZV0nKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgIH07XG5cbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvKipcbiAgICAgKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAgICAgKi9cbiAgICAkLmZuLnRrQ29sbGFwc2UgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcy5hdHRyKCdocmVmJykgfHwgdGhpcy5hdHRyKCd0YXJnZXQnKTtcbiAgICAgICAgaWYgKCEgdGFyZ2V0KSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5jbGljayhmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCh0YXJnZXQpLmNvbGxhcHNlKHt0b2dnbGU6IGZhbHNlfSk7XG5cbiAgICB9O1xuXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgLyoqXG4gICAgICogalF1ZXJ5IHBsdWdpbiB3cmFwcGVyIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQW5ndWxhciBVSS5VdGlsczogalF1ZXJ5IFBhc3N0aHJvdWdoXG4gICAgICovXG4gICAgJC5mbi50a01vZGFsID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMuYXR0cignaHJlZicpIHx8IHRoaXMuYXR0cigndGFyZ2V0Jyk7XG4gICAgICAgIGlmICghIHRhcmdldCkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCh0YXJnZXQpLm1vZGFsKHtzaG93OiBmYWxzZX0pO1xuXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIE1vZGFsIGNyZWF0b3IgZm9yIHRoZSBkZW1vIHBhZ2UuXG4gICAgICogQWxsb3dzIHRvIGV4cGxvcmUgZGlmZmVyZW50IG1vZGFsIHR5cGVzLlxuICAgICAqIEZvciBkZW1vIHB1cnBvc2VzIG9ubHkuXG4gICAgICovXG5cbiAgICAvLyBQcm9jZXNzIHRoZSBtb2RhbCB2aWEgSGFuZGxlYmFycyB0ZW1wbGF0ZXNcbiAgICB2YXIgbW9kYWwgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB2YXIgc291cmNlID0gJChcIiNcIiArIG9wdGlvbnMudGVtcGxhdGUpLmh0bWwoKTtcbiAgICAgICAgdmFyIHRlbXBsYXRlID0gSGFuZGxlYmFycy5jb21waWxlKHNvdXJjZSk7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZShvcHRpb25zKTtcbiAgICB9O1xuXG4gICAgdmFyIHJhbmRvbUlkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvKiogQHJldHVybiBTdHJpbmcgKi9cbiAgICAgICAgdmFyIFM0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICgoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApIHwgMCkudG9TdHJpbmcoMTYpLnN1YnN0cmluZygxKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIChTNCgpICsgUzQoKSArIFwiLVwiICsgUzQoKSArIFwiLVwiICsgUzQoKSArIFwiLVwiICsgUzQoKSArIFwiLVwiICsgUzQoKSArIFM0KCkgKyBTNCgpKTtcbiAgICB9O1xuXG4gICAgJC5mbi50a01vZGFsRGVtbyA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIHZhciB0YXJnZXRJZCA9IHRoaXMuYXR0cignaHJlZicpIHx8IHRoaXMuYXR0cigndGFyZ2V0JyksXG4gICAgICAgICAgICB0YXJnZXQgPSAkKHRhcmdldElkKTtcblxuICAgICAgICBpZiAoISB0YXJnZXRJZCkge1xuICAgICAgICAgICAgdGFyZ2V0SWQgPSByYW5kb21JZCgpO1xuICAgICAgICAgICAgdGhpcy5hdHRyKCdkYXRhLXRhcmdldCcsICcjJyArIHRhcmdldElkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRhcmdldElkLnJlcGxhY2UoJyMnLCAnJyk7XG5cbiAgICAgICAgaWYgKCEgdGFyZ2V0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdGFyZ2V0ID0gJChtb2RhbCh7XG4gICAgICAgICAgICAgICAgaWQ6IHRhcmdldElkLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB0aGlzLmRhdGEoJ3RlbXBsYXRlJykgfHwgJ3RrLW1vZGFsLWRlbW8nLFxuICAgICAgICAgICAgICAgIG1vZGFsT3B0aW9uczogdGhpcy5kYXRhKCdtb2RhbE9wdGlvbnMnKSB8fCAnJyxcbiAgICAgICAgICAgICAgICBkaWFsb2dPcHRpb25zOiB0aGlzLmRhdGEoJ2RpYWxvZ09wdGlvbnMnKSB8fCAnJyxcbiAgICAgICAgICAgICAgICBjb250ZW50T3B0aW9uczogdGhpcy5kYXRhKCdjb250ZW50T3B0aW9ucycpIHx8ICcnXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAkKCdib2R5JykuYXBwZW5kKHRhcmdldCk7XG4gICAgICAgICAgICB0YXJnZXQubW9kYWwoe3Nob3c6IGZhbHNlfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0YXJnZXQubW9kYWwoJ3RvZ2dsZScpO1xuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICAkKCdbZGF0YS10b2dnbGU9XCJ0ay1tb2RhbC1kZW1vXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykudGtNb2RhbERlbW8oKTtcbiAgICB9KTtcblxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICQoJ1tkYXRhLXRvZ2dsZT1cInN3aXRjaC1jaGVja2JveFwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICQodGhpcykuYm9vdHN0cmFwU3dpdGNoKHtcbiAgICAgICAgICAgIG9mZkNvbG9yOiAnZGFuZ2VyJ1xuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgLyoqXG4gICAgICogalF1ZXJ5IHBsdWdpbiB3cmFwcGVyIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQW5ndWxhciBVSS5VdGlsczogalF1ZXJ5IFBhc3N0aHJvdWdoXG4gICAgICovXG4gICAgJC5mbi50a0NoZWNrQWxsID0gZnVuY3Rpb24oKXtcblxuICAgICAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgkKHRoaXMpLmRhdGEoJ3RhcmdldCcpKS5maW5kKCc6Y2hlY2tib3gnKS5wcm9wKCdjaGVja2VkJywgdGhpcy5jaGVja2VkKTtcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgLy8gQ2hlY2sgQWxsIENoZWNrYm94ZXNcbiAgICAkKCdbZGF0YS10b2dnbGU9XCJjaGVjay1hbGxcIl0nKS50a0NoZWNrQWxsKCk7XG5cbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvKipcbiAgICAgKiBDb25zZXJ2ZSBhc3BlY3QgcmF0aW8gb2YgdGhlIG9yaWduYWwgcmVnaW9uLiBVc2VmdWwgd2hlbiBzaHJpbmtpbmcvZW5sYXJnaW5nXG4gICAgICogaW1hZ2VzIHRvIGZpdCBpbnRvIGEgY2VydGFpbiBhcmVhLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNyY1dpZHRoIFNvdXJjZSBhcmVhIHdpZHRoXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNyY0hlaWdodCBTb3VyY2UgYXJlYSBoZWlnaHRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gbWF4V2lkdGggRml0dGFibGUgYXJlYSBtYXhpbXVtIGF2YWlsYWJsZSB3aWR0aFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBtYXhIZWlnaHQgRml0dGFibGUgYXJlYSBtYXhpbXVtIGF2YWlsYWJsZSBoZWlnaHRcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHsgd2lkdGgsIGhlaWd0aCB9XG4gICAgICovXG4gICAgdmFyIGFzcGVjdFJhdGlvRml0ID0gZnVuY3Rpb24gKHNyY1dpZHRoLCBzcmNIZWlnaHQsIG1heFdpZHRoLCBtYXhIZWlnaHQpIHtcblxuICAgICAgICB2YXIgd1JhdGlvID0gbWF4V2lkdGggLyBzcmNXaWR0aCxcbiAgICAgICAgICAgIGhSYXRpbyA9IG1heEhlaWdodCAvIHNyY0hlaWdodCxcbiAgICAgICAgICAgIHdpZHRoID0gc3JjV2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQgPSBzcmNIZWlnaHQ7XG5cbiAgICAgICAgaWYgKHNyY1dpZHRoIC8gbWF4V2lkdGggPCBzcmNIZWlnaHQgLyBtYXhIZWlnaHQpIHtcbiAgICAgICAgICAgIHdpZHRoID0gbWF4V2lkdGg7XG4gICAgICAgICAgICBoZWlnaHQgPSBzcmNIZWlnaHQgKiB3UmF0aW87XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aWR0aCA9IHNyY1dpZHRoICogaFJhdGlvO1xuICAgICAgICAgICAgaGVpZ2h0ID0gbWF4SGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHt3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0fTtcbiAgICB9O1xuXG4gICAgJC5mbi50a0NvdmVyID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5maWx0ZXIoJzp2aXNpYmxlJykubm90KCdbY2xhc3MqPVwiaGVpZ2h0XCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdCA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgaSA9IHQuZmluZCgnaW1nOmZpcnN0Jyk7XG5cbiAgICAgICAgICAgIGlmIChpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICQubG9hZEltYWdlKGkuYXR0cignc3JjJykpLmRvbmUoZnVuY3Rpb24gKGltZykge1xuICAgICAgICAgICAgICAgICAgICB0LmhlaWdodChpLmhlaWdodCgpKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnLm92ZXJsYXktZnVsbCcsIHQpLmlubmVySGVpZ2h0KGkuaGVpZ2h0KCkpO1xuICAgICAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS50cmlnZ2VyKCdkb21DaGFuZ2VkJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpID0gdC5maW5kKCcuaW1nOmZpcnN0Jyk7XG4gICAgICAgICAgICAgICAgdC5oZWlnaHQoaS5oZWlnaHQoKSk7XG4gICAgICAgICAgICAgICAgJCgnLm92ZXJsYXktZnVsbCcsIHQpLmlubmVySGVpZ2h0KGkuaGVpZ2h0KCkpO1xuICAgICAgICAgICAgICAgICQoZG9jdW1lbnQpLnRyaWdnZXIoJ2RvbUNoYW5nZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5maWx0ZXIoJzp2aXNpYmxlJykuZmlsdGVyKCdbY2xhc3MqPVwiaGVpZ2h0XCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdCA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgaW1nID0gdC5maW5kKCdpbWcnKSB8fCB0LmZpbmQoJy5pbWcnKTtcblxuICAgICAgICAgICAgaW1nLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBpID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAoaS5kYXRhKCdhdXRvU2l6ZScpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGkuaXMoJ2ltZycpKSB7XG4gICAgICAgICAgICAgICAgICAgICQubG9hZEltYWdlKGkuYXR0cignc3JjJykpLmRvbmUoZnVuY3Rpb24gKGltZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaS5jc3MoYXNwZWN0UmF0aW9GaXQoaS53aWR0aCgpLCBpLmhlaWdodCgpLCB0LndpZHRoKCksIHQuaGVpZ2h0KCkpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgICAgIGkuY3NzKGFzcGVjdFJhdGlvRml0KGkud2lkdGgoKSwgaS5oZWlnaHQoKSwgdC53aWR0aCgpLCB0LmhlaWdodCgpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGhlaWdodCgpIHtcblxuICAgICAgICAkKCcuY292ZXIub3ZlcmxheScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCh0aGlzKS50a0NvdmVyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgJChkb2N1bWVudCkucmVhZHkoaGVpZ2h0KTtcbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCBoZWlnaHQpO1xuXG4gICAgdmFyIHQ7XG4gICAgJCh3aW5kb3cpLm9uKFwiZGVib3VuY2VkcmVzaXplXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHQpO1xuICAgICAgICB0ID0gc2V0VGltZW91dChoZWlnaHQsIDIwMCk7XG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIC8qKlxuICAgICAqIGpRdWVyeSBwbHVnaW4gd3JhcHBlciBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEFuZ3VsYXIgVUkuVXRpbHM6IGpRdWVyeSBQYXNzdGhyb3VnaFxuICAgICAqL1xuICAgICQuZm4udGtEYXRlUGlja2VyID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHR5cGVvZiAkLmZuLmRhdGVwaWNrZXIgIT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICAgICAgdGhpcy5kYXRlcGlja2VyKCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgICQoJy5kYXRlcGlja2VyJykudGtEYXRlUGlja2VyKCk7XG5cbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAkLmZuLnRrRGF0ZXJhbmdlcGlja2VyUmVwb3J0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZSA9IHRoaXM7XG4gICAgICAgIHRoaXMuZGF0ZXJhbmdlcGlja2VyKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJhbmdlczoge1xuICAgICAgICAgICAgICAgICAgICAnVG9kYXknOiBbIG1vbWVudCgpLCBtb21lbnQoKSBdLFxuICAgICAgICAgICAgICAgICAgICAnWWVzdGVyZGF5JzogWyBtb21lbnQoKS5zdWJ0cmFjdCgnZGF5cycsIDEpLCBtb21lbnQoKS5zdWJ0cmFjdCgnZGF5cycsIDEpIF0sXG4gICAgICAgICAgICAgICAgICAgICdMYXN0IDcgRGF5cyc6IFsgbW9tZW50KCkuc3VidHJhY3QoJ2RheXMnLCA2KSwgbW9tZW50KCkgXSxcbiAgICAgICAgICAgICAgICAgICAgJ0xhc3QgMzAgRGF5cyc6IFsgbW9tZW50KCkuc3VidHJhY3QoJ2RheXMnLCAyOSksIG1vbWVudCgpIF0sXG4gICAgICAgICAgICAgICAgICAgICdUaGlzIE1vbnRoJzogWyBtb21lbnQoKS5zdGFydE9mKCdtb250aCcpLCBtb21lbnQoKS5lbmRPZignbW9udGgnKSBdLFxuICAgICAgICAgICAgICAgICAgICAnTGFzdCBNb250aCc6IFsgbW9tZW50KCkuc3VidHJhY3QoJ21vbnRoJywgMSkuc3RhcnRPZignbW9udGgnKSwgbW9tZW50KCkuc3VidHJhY3QoJ21vbnRoJywgMSkuZW5kT2YoJ21vbnRoJykgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3RhcnREYXRlOiBtb21lbnQoKS5zdWJ0cmFjdCgnZGF5cycsIDI5KSxcbiAgICAgICAgICAgICAgICBlbmREYXRlOiBtb21lbnQoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChzdGFydCwgZW5kKSB7XG4gICAgICAgICAgICAgICAgdmFyIG91dHB1dCA9IHN0YXJ0LmZvcm1hdCgnTU1NTSBELCBZWVlZJykgKyAnIC0gJyArIGVuZC5mb3JtYXQoJ01NTU0gRCwgWVlZWScpO1xuICAgICAgICAgICAgICAgIGUuZmluZCgnc3BhbicpLmh0bWwob3V0cHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgJC5mbi50a0RhdGVyYW5nZXBpY2tlclJlc2VydmF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRhdGVyYW5nZXBpY2tlcih7XG4gICAgICAgICAgICB0aW1lUGlja2VyOiB0cnVlLFxuICAgICAgICAgICAgdGltZVBpY2tlckluY3JlbWVudDogMzAsXG4gICAgICAgICAgICBmb3JtYXQ6ICdNTS9ERC9ZWVlZIGg6bW0gQSdcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgICQoJy5kYXRlcmFuZ2VwaWNrZXItcmVwb3J0JykudGtEYXRlcmFuZ2VwaWNrZXJSZXBvcnQoKTtcblxuICAgICQoJy5kYXRlcmFuZ2VwaWNrZXItcmVzZXJ2YXRpb24nKS50a0RhdGVyYW5nZXBpY2tlclJlc2VydmF0aW9uKCk7XG5cbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvKipcbiAgICAgKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAgICAgKiBAdG9kbzogQW5ndWxhciBkaXJlY3RpdmUuXG4gICAgICovXG4gICAgJC5mbi50a0V4cGFuZGFibGUgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICB0aGlzLmZpbmQoJy5leHBhbmRhYmxlLWNvbnRlbnQnKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJleHBhbmRhYmxlLWluZGljYXRvclwiPjxpPjwvaT48L2Rpdj4nKTtcblxuICAgIH07XG5cbiAgICAkKCcuZXhwYW5kYWJsZScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLnRrRXhwYW5kYWJsZSgpO1xuICAgIH0pO1xuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcuZXhwYW5kYWJsZS1pbmRpY2F0b3InLCBmdW5jdGlvbigpe1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5leHBhbmRhYmxlJykudG9nZ2xlQ2xhc3MoJ2V4cGFuZGFibGUtb3BlbicpO1xuICAgIH0pO1xuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcuZXhwYW5kYWJsZS10cmlnZ2VyOm5vdCguZXhwYW5kYWJsZS1vcGVuKScsIGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2V4cGFuZGFibGUtb3BlbicpO1xuICAgIH0pO1xuXG59KGpRdWVyeSkpOyIsIihmdW5jdGlvbiAoKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvLyBpZiB3ZSdyZSBpbnNpZGUgYW4gaWZyYW1lLCByZWxvYWQgd2l0aG91dCBpZnJhbWVcbiAgICBpZiAod2luZG93LmxvY2F0aW9uICE9IHdpbmRvdy5wYXJlbnQubG9jYXRpb24pXG4gICAgICAgIHRvcC5sb2NhdGlvbi5ocmVmID0gZG9jdW1lbnQubG9jYXRpb24uaHJlZjtcblxufSkoKTtcbiIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgLyoqXG4gICAgICogalF1ZXJ5IHBsdWdpbiB3cmFwcGVyIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQW5ndWxhciBVSS5VdGlsczogalF1ZXJ5IFBhc3N0aHJvdWdoXG4gICAgICogQHRvZG86IEFuZ3VsYXIgZGlyZWN0aXZlLlxuICAgICAqL1xuICAgICQuZm4udGtNaW5pQ29sb3JzID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHR5cGVvZiAkLmZuLm1pbmljb2xvcnMgIT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICAgICAgdGhpcy5taW5pY29sb3JzKHtcbiAgICAgICAgICAgICAgICBjb250cm9sOiB0aGlzLmF0dHIoJ2RhdGEtY29udHJvbCcpIHx8ICdodWUnLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogdGhpcy5hdHRyKCdkYXRhLWRlZmF1bHRWYWx1ZScpIHx8ICcnLFxuICAgICAgICAgICAgICAgIGlubGluZTogdGhpcy5hdHRyKCdkYXRhLWlubGluZScpID09PSAndHJ1ZScsXG4gICAgICAgICAgICAgICAgbGV0dGVyQ2FzZTogdGhpcy5hdHRyKCdkYXRhLWxldHRlckNhc2UnKSB8fCAnbG93ZXJjYXNlJyxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiB0aGlzLmF0dHIoJ2RhdGEtb3BhY2l0eScpLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLmF0dHIoJ2RhdGEtcG9zaXRpb24nKSB8fCAnYm90dG9tIGxlZnQnLFxuICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24gKGhleCwgb3BhY2l0eSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoISBoZXgpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wYWNpdHkpIGhleCArPSAnLCAnICsgb3BhY2l0eTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaGV4KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhlbWU6ICdib290c3RyYXAnXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgJCgnLm1pbmljb2xvcnMnKS5lYWNoKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAkKHRoaXMpLnRrTWluaUNvbG9ycygpO1xuXG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvKipcbiAgICAgKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAgICAgKiBAdG9kbzogQW5ndWxhciBkaXJlY3RpdmUuXG4gICAgICovXG4gICAgJC5mbi50a05lc3RhYmxlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHR5cGVvZiAkLmZuLm5lc3RhYmxlICE9ICd1bmRlZmluZWQnKSB7XG5cbiAgICAgICAgICAgIHRoaXMubmVzdGFibGUoe1xuICAgICAgICAgICAgICAgIHJvb3RDbGFzczogJ25lc3RhYmxlJyxcbiAgICAgICAgICAgICAgICBsaXN0Tm9kZU5hbWU6ICd1bCcsXG4gICAgICAgICAgICAgICAgbGlzdENsYXNzOiAnbmVzdGFibGUtbGlzdCcsXG4gICAgICAgICAgICAgICAgaXRlbUNsYXNzOiAnbmVzdGFibGUtaXRlbScsXG4gICAgICAgICAgICAgICAgZHJhZ0NsYXNzOiAnbmVzdGFibGUtZHJhZycsXG4gICAgICAgICAgICAgICAgaGFuZGxlQ2xhc3M6ICduZXN0YWJsZS1oYW5kbGUnLFxuICAgICAgICAgICAgICAgIGNvbGxhcHNlZENsYXNzOiAnbmVzdGFibGUtY29sbGFwc2VkJyxcbiAgICAgICAgICAgICAgICBwbGFjZUNsYXNzOiAnbmVzdGFibGUtcGxhY2Vob2xkZXInLFxuICAgICAgICAgICAgICAgIGVtcHR5Q2xhc3M6ICduZXN0YWJsZS1lbXB0eSdcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICAkKCcubmVzdGFibGUnKS50a05lc3RhYmxlKCk7XG5cbn0pKGpRdWVyeSk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIHZhciByYW5kb21JZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvKiogQHJldHVybiBTdHJpbmcgKi9cbiAgICAgICAgdmFyIFM0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gKCgoMStNYXRoLnJhbmRvbSgpKSoweDEwMDAwKXwwKS50b1N0cmluZygxNikuc3Vic3RyaW5nKDEpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gKFM0KCkrUzQoKStcIi1cIitTNCgpK1wiLVwiK1M0KCkrXCItXCIrUzQoKStcIi1cIitTNCgpK1M0KCkrUzQoKSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIGpRdWVyeSBwbHVnaW4gd3JhcHBlciBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEFuZ3VsYXIgVUkuVXRpbHM6IGpRdWVyeSBQYXNzdGhyb3VnaFxuICAgICAqL1xuICAgICQuZm4udGtQYW5lbENvbGxhcHNlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgdmFyIGJvZHkgPSAkKCcucGFuZWwtYm9keScsIHRoaXMpLFxuICAgICAgICAgICAgaWQgPSBib2R5LmF0dHIoJ2lkJykgfHwgcmFuZG9tSWQoKSxcbiAgICAgICAgICAgIGNvbGxhcHNlID0gJCgnPGRpdi8+Jyk7XG5cbiAgICAgICAgY29sbGFwc2VcbiAgICAgICAgICAgIC5hdHRyKCdpZCcsIGlkKVxuICAgICAgICAgICAgLmFkZENsYXNzKCdjb2xsYXBzZScgKyAodGhpcy5kYXRhKCdvcGVuJykgPyAnIGluJyA6ICcnKSlcbiAgICAgICAgICAgIC5hcHBlbmQoYm9keS5jbG9uZSgpKTtcblxuICAgICAgICBib2R5LnJlbW92ZSgpO1xuXG4gICAgICAgICQodGhpcykuYXBwZW5kKGNvbGxhcHNlKTtcblxuICAgICAgICAkKCcucGFuZWwtY29sbGFwc2UtdHJpZ2dlcicsIHRoaXMpXG4gICAgICAgICAgICAuYXR0cignZGF0YS10b2dnbGUnLCAnY29sbGFwc2UnIClcbiAgICAgICAgICAgIC5hdHRyKCdkYXRhLXRhcmdldCcsICcjJyArIGlkKVxuICAgICAgICAgICAgLmNvbGxhcHNlKHsgdHJpZ2dlcjogZmFsc2UgfSk7XG5cbiAgICB9O1xuXG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwicGFuZWwtY29sbGFwc2VcIl0nKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcykudGtQYW5lbENvbGxhcHNlKCk7XG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcblxuICAgIC8vIFByb2dyZXNzIEJhciBBbmltYXRpb25cbiAgICAkKCcucHJvZ3Jlc3MtYmFyJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykud2lkdGgoJCh0aGlzKS5hdHRyKCdhcmlhLXZhbHVlbm93JykgKyAnJScpO1xuICAgIH0pO1xuXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgLyoqXG4gICAgICogalF1ZXJ5IHBsdWdpbiB3cmFwcGVyIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQW5ndWxhciBVSS5VdGlsczogalF1ZXJ5IFBhc3N0aHJvdWdoXG4gICAgICovXG4gICAgJC5mbi50a1NlbGVjdDIgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBpZiAodHlwZW9mICQuZm4uc2VsZWN0MiAhPSAndW5kZWZpbmVkJykge1xuXG4gICAgICAgICAgICB2YXIgdCA9IHRoaXMsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgYWxsb3dDbGVhcjogdC5kYXRhKCdhbGxvd0NsZWFyJylcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAodC5pcygnYnV0dG9uJykpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgaWYgKHQuaXMoJ2lucHV0W3R5cGU9XCJidXR0b25cIl0nKSkgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgICAgIGlmICh0LmlzKCdbZGF0YS10b2dnbGU9XCJzZWxlY3QyLXRhZ3NcIl0nKSkge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMudGFncyA9IHQuZGF0YSgndGFncycpLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHQuc2VsZWN0MihvcHRpb25zKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogalF1ZXJ5IHBsdWdpbiB3cmFwcGVyIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQW5ndWxhciBVSS5VdGlsczogalF1ZXJ5IFBhc3N0aHJvdWdoXG4gICAgICovXG4gICAgJC5mbi50a1NlbGVjdDJFbmFibGUgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBpZiAodHlwZW9mICQuZm4uc2VsZWN0MiAhPSAndW5kZWZpbmVkJykge1xuXG4gICAgICAgICAgICB0aGlzLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKCQodGhpcykuZGF0YSgndGFyZ2V0JykpLnNlbGVjdDIoXCJlbmFibGVcIik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogalF1ZXJ5IHBsdWdpbiB3cmFwcGVyIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQW5ndWxhciBVSS5VdGlsczogalF1ZXJ5IFBhc3N0aHJvdWdoXG4gICAgICovXG4gICAgJC5mbi50a1NlbGVjdDJEaXNhYmxlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHR5cGVvZiAkLmZuLnNlbGVjdDIgIT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICAgICAgdGhpcy5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzLmRhdGEoJ3RhcmdldCcpKS5zZWxlY3QyKFwiZGlzYWJsZVwiKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAgICAgKi9cbiAgICAkLmZuLnRrU2VsZWN0MkZsYWdzID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHR5cGVvZiAkLmZuLnNlbGVjdDIgIT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICAgICAgLy8gdGVtcGxhdGluZ1xuICAgICAgICAgICAgdmFyIGZvcm1hdCA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICAgICAgICAgIGlmICghIHN0YXRlLmlkKSByZXR1cm4gc3RhdGUudGV4dDtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCI8aW1nIGNsYXNzPSdmbGFnJyBzcmM9J2h0dHA6Ly9zZWxlY3QyLmdpdGh1Yi5pby9zZWxlY3QyL2ltYWdlcy9mbGFncy9cIiArIHN0YXRlLmlkLnRvTG93ZXJDYXNlKCkgKyBcIi5wbmcnLz5cIiArIHN0YXRlLnRleHQ7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLnNlbGVjdDIoe1xuICAgICAgICAgICAgICAgIGZvcm1hdFJlc3VsdDogZm9ybWF0LFxuICAgICAgICAgICAgICAgIGZvcm1hdFNlbGVjdGlvbjogZm9ybWF0LFxuICAgICAgICAgICAgICAgIGVzY2FwZU1hcmt1cDogZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgICQoJ1tkYXRhLXRvZ2dsZSo9XCJzZWxlY3QyXCJdJykuZWFjaChmdW5jdGlvbigpIHtcblxuICAgICAgICAkKHRoaXMpLnRrU2VsZWN0MigpO1xuXG4gICAgfSk7XG5cbiAgICAkKCdbZGF0YS10b2dnbGU9XCJzZWxlY3QyLWVuYWJsZVwiXScpLnRrU2VsZWN0MkVuYWJsZSgpO1xuXG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwic2VsZWN0Mi1kaXNhYmxlXCJdJykudGtTZWxlY3QyRGlzYWJsZSgpO1xuXG4gICAgJChcIiNzZWxlY3QyXzdcIikudGtTZWxlY3QyRmxhZ3MoKTtcblxufSkoalF1ZXJ5KTtcbiIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgLyoqXG4gICAgICogalF1ZXJ5IHBsdWdpbiB3cmFwcGVyIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQW5ndWxhciBVSS5VdGlsczogalF1ZXJ5IFBhc3N0aHJvdWdoXG4gICAgICovXG4gICAgJC5mbi50a1NlbGVjdFBpY2tlciA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIGlmICh0eXBlb2YgJC5mbi5zZWxlY3RwaWNrZXIgIT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICAgICAgdGhpcy5zZWxlY3RwaWNrZXIoe1xuICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLmRhdGEoJ3dpZHRoJykgfHwgJzEwMCUnXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgJChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgJCgnLnNlbGVjdHBpY2tlcicpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAkKHRoaXMpLnRrU2VsZWN0UGlja2VyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcblxuICAgIHZhciBzaG93SG92ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJ1tkYXRhLXNob3ctaG92ZXJdJykuaGlkZSgpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSAkKHRoaXMpLFxuICAgICAgICAgICAgICAgIHBhcmVudCA9ICQodGhpcykuZGF0YSgnc2hvd0hvdmVyJyk7XG5cbiAgICAgICAgICAgIHNlbGYuY2xvc2VzdChwYXJlbnQpLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgc2VsZi5zaG93KCk7XG4gICAgICAgICAgICB9KS5vbignbW91c2VvdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5oaWRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHNob3dIb3ZlcigpO1xuXG4gICAgd2luZG93LnNob3dIb3ZlciA9IHNob3dIb3ZlcjtcblxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIHZhciBiYXJzID0gZnVuY3Rpb24oZWwpe1xuICAgICAgICAkKCcuc2xpZGVyLWhhbmRsZScsIGVsKS5odG1sKCc8aSBjbGFzcz1cImZhIGZhLWJhcnMgZmEtcm90YXRlLTkwXCI+PC9pPicpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAgICAgKi9cbiAgICAkLmZuLnRrU2xpZGVyID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHR5cGVvZiAkLmZuLnNsaWRlciAhPSAndW5kZWZpbmVkJykge1xuXG4gICAgICAgICAgICB0aGlzLnNsaWRlcigpO1xuXG4gICAgICAgICAgICBiYXJzKHRoaXMpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAgICAgKi9cbiAgICAkLmZuLnRrU2xpZGVyRm9ybWF0dGVyID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHR5cGVvZiAkLmZuLnNsaWRlciAhPSAndW5kZWZpbmVkJykge1xuXG4gICAgICAgICAgICB0aGlzLnNsaWRlcih7XG4gICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdDdXJyZW50IHZhbHVlOiAnICsgdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGJhcnModGhpcyk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIGpRdWVyeSBwbHVnaW4gd3JhcHBlciBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEFuZ3VsYXIgVUkuVXRpbHM6IGpRdWVyeSBQYXNzdGhyb3VnaFxuICAgICAqL1xuICAgICQuZm4udGtTbGlkZXJVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBpZiAodHlwZW9mICQuZm4uc2xpZGVyICE9ICd1bmRlZmluZWQnKSB7XG5cbiAgICAgICAgICAgIHRoaXMub24oXCJzbGlkZVwiLCBmdW5jdGlvbiAoc2xpZGVFdnQpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMuYXR0cignZGF0YS1vbi1zbGlkZScpKS50ZXh0KHNsaWRlRXZ0LnZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBiYXJzKHRoaXMpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICAkKCdbZGF0YS1zbGlkZXI9XCJkZWZhdWx0XCJdJykudGtTbGlkZXIoKTtcblxuICAgICQoJ1tkYXRhLXNsaWRlcj1cImZvcm1hdHRlclwiXScpLnRrU2xpZGVyRm9ybWF0dGVyKCk7XG5cbiAgICAkKCdbZGF0YS1vbi1zbGlkZV0nKS50a1NsaWRlclVwZGF0ZSgpO1xuXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgLyoqXG4gICAgICogalF1ZXJ5IHBsdWdpbiB3cmFwcGVyIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQW5ndWxhciBVSS5VdGlsczogalF1ZXJ5IFBhc3N0aHJvdWdoXG4gICAgICovXG4gICAgJC5mbi50a1N1bW1lcm5vdGUgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBpZiAodHlwZW9mICQuZm4uc3VtbWVybm90ZSAhPSAndW5kZWZpbmVkJykge1xuXG4gICAgICAgICAgICB0aGlzLnN1bW1lcm5vdGUoe1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzAwXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgJChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgJCgnLnN1bW1lcm5vdGUnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgJCh0aGlzKS50a1N1bW1lcm5vdGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxufSkoalF1ZXJ5KTtcbiIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgLyoqXG4gICAgICogalF1ZXJ5IHBsdWdpbiB3cmFwcGVyIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQW5ndWxhciBVSS5VdGlsczogalF1ZXJ5IFBhc3N0aHJvdWdoXG4gICAgICovXG4gICAgJC5mbi50a0RhdGFUYWJsZSA9IGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBpZiAodHlwZW9mICQuZm4uZGF0YVRhYmxlICE9ICd1bmRlZmluZWQnKSB7XG5cbiAgICAgICAgICAgIHRoaXMuZGF0YVRhYmxlKCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgICQoJ1tkYXRhLXRvZ2dsZT1cImRhdGEtdGFibGVcIl0nKS50a0RhdGFUYWJsZSgpO1xuXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbiAoJCkge1xuXG4gICAgdmFyIHNraW4gPSByZXF1aXJlKCcuL19za2luJykoKTtcblxuICAgICQoJy50YWJiYWJsZSAubmF2LXRhYnMnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB0YWJzID0gJCh0aGlzKS5uaWNlU2Nyb2xsKHtcbiAgICAgICAgICAgIGN1cnNvcmJvcmRlcjogMCxcbiAgICAgICAgICAgIGN1cnNvcmNvbG9yOiBjb25maWcuc2tpbnNbIHNraW4gXVsgJ3ByaW1hcnktY29sb3InIF0sXG4gICAgICAgICAgICBob3JpenJhaWxlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgb25lYXhpc21vdXNlbW9kZTogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgX3N1cGVyID0gdGFicy5nZXRDb250ZW50U2l6ZTtcbiAgICAgICAgdGFicy5nZXRDb250ZW50U2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHBhZ2UgPSBfc3VwZXIuY2FsbCh0YWJzKTtcbiAgICAgICAgICAgIHBhZ2UuaCA9IHRhYnMud2luLmhlaWdodCgpO1xuICAgICAgICAgICAgcmV0dXJuIHBhZ2U7XG4gICAgICAgIH07XG4gICAgfSk7XG5cbiAgICAkKCdbZGF0YS1zY3JvbGxhYmxlXScpLmdldE5pY2VTY3JvbGwoKS5yZXNpemUoKTtcblxuICAgICQoJy50YWJiYWJsZSAubmF2LXRhYnMgYScpLm9uKCdzaG93bi5icy50YWInLCBmdW5jdGlvbihlKXtcbiAgICAgICAgdmFyIHRhYiA9ICQodGhpcykuY2xvc2VzdCgnLnRhYmJhYmxlJyk7XG4gICAgICAgIHZhciB0YXJnZXQgPSAkKGUudGFyZ2V0KSxcbiAgICAgICAgICAgIHRhcmdldFBhbmUgPSB0YXJnZXQuYXR0cignaHJlZicpIHx8IHRhcmdldC5kYXRhKCd0YXJnZXQnKTtcblxuICAgICAgICAvLyByZWZyZXNoIHRhYnMgd2l0aCBob3Jpem9udGFsIHNjcm9sbFxuICAgICAgICB0YWIuZmluZCgnLm5hdi10YWJzJykuZ2V0TmljZVNjcm9sbCgpLnJlc2l6ZSgpO1xuXG4gICAgICAgIC8vIHJlZnJlc2ggW2RhdGEtc2Nyb2xsYWJsZV0gd2l0aGluIHRoZSBhY3RpdmF0ZWQgdGFiIHBhbmVcbiAgICAgICAgJCh0YXJnZXRQYW5lKS5maW5kKCdbZGF0YS1zY3JvbGxhYmxlXScpLmdldE5pY2VTY3JvbGwoKS5yZXNpemUoKTtcbiAgICB9KTtcblxufShqUXVlcnkpKTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIC8vIFRvb2x0aXBcbiAgICAkKFwiYm9keVwiKS50b29sdGlwKHtzZWxlY3RvcjogJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nLCBjb250YWluZXI6IFwiYm9keVwifSk7XG5cbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvKipcbiAgICAgKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAgICAgKi9cbiAgICAkLmZuLnRrVG91Y2hTcGluID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHR5cGVvZiAkLmZuLlRvdWNoU3BpbiAhPSAndW5kZWZpbmVkJykge1xuXG4gICAgICAgICAgICB0aGlzLlRvdWNoU3BpbigpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICAkKCdbZGF0YS10b2dnbGU9XCJ0b3VjaC1zcGluXCJdJykudGtUb3VjaFNwaW4oKTtcblxufShqUXVlcnkpKTsiLCIoZnVuY3Rpb24gKCQpIHtcblxuICAgIHZhciB0cmVlX2dseXBoX29wdGlvbnMgPSB7XG4gICAgICAgIG1hcDoge1xuICAgICAgICAgICAgY2hlY2tib3g6IFwiZmEgZmEtc3F1YXJlLW9cIixcbiAgICAgICAgICAgIGNoZWNrYm94U2VsZWN0ZWQ6IFwiZmEgZmEtY2hlY2stc3F1YXJlXCIsXG4gICAgICAgICAgICBjaGVja2JveFVua25vd246IFwiZmEgZmEtY2hlY2stc3F1YXJlIGZhLW11dGVkXCIsXG4gICAgICAgICAgICBlcnJvcjogXCJmYSBmYS1leGNsYW1hdGlvbi10cmlhbmdsZVwiLFxuICAgICAgICAgICAgZXhwYW5kZXJDbG9zZWQ6IFwiZmEgZmEtY2FyZXQtcmlnaHRcIixcbiAgICAgICAgICAgIGV4cGFuZGVyTGF6eTogXCJmYSBmYS1hbmdsZS1yaWdodFwiLFxuICAgICAgICAgICAgZXhwYW5kZXJPcGVuOiBcImZhIGZhLWNhcmV0LWRvd25cIixcbiAgICAgICAgICAgIGRvYzogXCJmYSBmYS1maWxlLW9cIixcbiAgICAgICAgICAgIG5vRXhwYW5kZXI6IFwiXCIsXG4gICAgICAgICAgICBkb2NPcGVuOiBcImZhIGZhLWZpbGVcIixcbiAgICAgICAgICAgIGxvYWRpbmc6IFwiZmEgZmEtcmVmcmVzaCBmYS1zcGluXCIsXG4gICAgICAgICAgICBmb2xkZXI6IFwiZmEgZmEtZm9sZGVyXCIsXG4gICAgICAgICAgICBmb2xkZXJPcGVuOiBcImZhIGZhLWZvbGRlci1vcGVuXCJcbiAgICAgICAgfVxuICAgIH0sXG4gICAgdHJlZV9kbmRfb3B0aW9ucyA9IHtcbiAgICAgICAgYXV0b0V4cGFuZE1TOiA0MDAsXG4gICAgICAgICAgICBmb2N1c09uQ2xpY2s6IHRydWUsXG4gICAgICAgICAgICBwcmV2ZW50Vm9pZE1vdmVzOiB0cnVlLCAvLyBQcmV2ZW50IGRyb3BwaW5nIG5vZGVzICdiZWZvcmUgc2VsZicsIGV0Yy5cbiAgICAgICAgICAgIHByZXZlbnRSZWN1cnNpdmVNb3ZlczogdHJ1ZSwgLy8gUHJldmVudCBkcm9wcGluZyBub2RlcyBvbiBvd24gZGVzY2VuZGFudHNcbiAgICAgICAgICAgIGRyYWdTdGFydDogZnVuY3Rpb24obm9kZSwgZGF0YSkge1xuICAgICAgICAgICAgLyoqIFRoaXMgZnVuY3Rpb24gTVVTVCBiZSBkZWZpbmVkIHRvIGVuYWJsZSBkcmFnZ2luZyBmb3IgdGhlIHRyZWUuXG4gICAgICAgICAgICAgKiAgUmV0dXJuIGZhbHNlIHRvIGNhbmNlbCBkcmFnZ2luZyBvZiBub2RlLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZHJhZ0VudGVyOiBmdW5jdGlvbihub2RlLCBkYXRhKSB7XG4gICAgICAgICAgICAvKiogZGF0YS5vdGhlck5vZGUgbWF5IGJlIG51bGwgZm9yIG5vbi1mYW5jeXRyZWUgZHJvcHBhYmxlcy5cbiAgICAgICAgICAgICAqICBSZXR1cm4gZmFsc2UgdG8gZGlzYWxsb3cgZHJvcHBpbmcgb24gbm9kZS4gSW4gdGhpcyBjYXNlXG4gICAgICAgICAgICAgKiAgZHJhZ092ZXIgYW5kIGRyYWdMZWF2ZSBhcmUgbm90IGNhbGxlZC5cbiAgICAgICAgICAgICAqICBSZXR1cm4gJ292ZXInLCAnYmVmb3JlLCBvciAnYWZ0ZXInIHRvIGZvcmNlIGEgaGl0TW9kZS5cbiAgICAgICAgICAgICAqICBSZXR1cm4gWydiZWZvcmUnLCAnYWZ0ZXInXSB0byByZXN0cmljdCBhdmFpbGFibGUgaGl0TW9kZXMuXG4gICAgICAgICAgICAgKiAgQW55IG90aGVyIHJldHVybiB2YWx1ZSB3aWxsIGNhbGMgdGhlIGhpdE1vZGUgZnJvbSB0aGUgY3Vyc29yIHBvc2l0aW9uLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICAvLyBQcmV2ZW50IGRyb3BwaW5nIGEgcGFyZW50IGJlbG93IGFub3RoZXIgcGFyZW50IChvbmx5IHNvcnRcbiAgICAgICAgICAgIC8vIG5vZGVzIHVuZGVyIHRoZSBzYW1lIHBhcmVudClcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICBpZihub2RlLnBhcmVudCAhPT0gZGF0YS5vdGhlck5vZGUucGFyZW50KXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBEb24ndCBhbGxvdyBkcm9wcGluZyAqb3ZlciogYSBub2RlICh3b3VsZCBjcmVhdGUgYSBjaGlsZClcbiAgICAgICAgICAgIHJldHVybiBbXCJiZWZvcmVcIiwgXCJhZnRlclwiXTtcbiAgICAgICAgICAgICovXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZHJhZ0Ryb3A6IGZ1bmN0aW9uKG5vZGUsIGRhdGEpIHtcbiAgICAgICAgICAgIC8qKiBUaGlzIGZ1bmN0aW9uIE1VU1QgYmUgZGVmaW5lZCB0byBlbmFibGUgZHJvcHBpbmcgb2YgaXRlbXMgb25cbiAgICAgICAgICAgICAqICB0aGUgdHJlZS5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZGF0YS5vdGhlck5vZGUubW92ZVRvKG5vZGUsIGRhdGEuaGl0TW9kZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogalF1ZXJ5IHBsdWdpbiB3cmFwcGVyIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQW5ndWxhciBVSS5VdGlsczogalF1ZXJ5IFBhc3N0aHJvdWdoXG4gICAgICovXG4gICAgJC5mbi50a0ZhbmN5VHJlZSA9IGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBpZiAodHlwZW9mICQuZm4uZmFuY3l0cmVlID09ICd1bmRlZmluZWQnKSByZXR1cm47XG5cbiAgICAgICAgdmFyIGV4dGVuc2lvbnMgPSBbIFwiZ2x5cGhcIiBdO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuYXR0cignZGF0YS10cmVlLWRuZCcpICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBleHRlbnNpb25zLnB1c2goIFwiZG5kXCIgKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZhbmN5dHJlZSh7XG4gICAgICAgICAgICBleHRlbnNpb25zOiBleHRlbnNpb25zLFxuICAgICAgICAgICAgZ2x5cGg6IHRyZWVfZ2x5cGhfb3B0aW9ucyxcbiAgICAgICAgICAgIGRuZDogdHJlZV9kbmRfb3B0aW9ucyxcbiAgICAgICAgICAgIGNsaWNrRm9sZGVyTW9kZTogMyxcbiAgICAgICAgICAgIGNoZWNrYm94OiB0eXBlb2YgdGhpcy5hdHRyKCdkYXRhLXRyZWUtY2hlY2tib3gnKSAhPT0gXCJ1bmRlZmluZWRcIiB8fCBmYWxzZSxcbiAgICAgICAgICAgIHNlbGVjdE1vZGU6IHR5cGVvZiB0aGlzLmF0dHIoJ2RhdGEtdHJlZS1zZWxlY3QnKSAhPT0gXCJ1bmRlZmluZWRcIiA/IHBhcnNlSW50KHRoaXMuYXR0cignZGF0YS10cmVlLXNlbGVjdCcpKSA6IDJcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgLy8gdXNpbmcgZGVmYXVsdCBvcHRpb25zXG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwidHJlZVwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLnRrRmFuY3lUcmVlKCk7XG4gICAgfSk7XG5cbn0oalF1ZXJ5KSk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvKipcbiAgICAgKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAgICAgKi9cbiAgICAkLmZuLnRrV2l6YXJkID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHR5cGVvZiAkLmZuLnNsaWNrID09ICd1bmRlZmluZWQnKSByZXR1cm47XG5cbiAgICAgICAgdmFyIHQgPSB0aGlzLFxuICAgICAgICAgICAgY29udGFpbmVyID0gdC5jbG9zZXN0KCcud2l6YXJkLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIHQuc2xpY2soe1xuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgcnRsOiB0aGlzLmRhdGEoJ3J0bCcpLFxuICAgICAgICAgICAgc2xpZGU6ICdmaWVsZHNldCcsXG4gICAgICAgICAgICBvbkFmdGVyQ2hhbmdlOiBmdW5jdGlvbiAod2l6LCBpbmRleCkge1xuICAgICAgICAgICAgICAgICQoZG9jdW1lbnQpLnRyaWdnZXIoJ2FmdGVyLndpemFyZC5zdGVwJywge1xuICAgICAgICAgICAgICAgICAgICB3aXo6IHdpeixcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6IHRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29udGFpbmVyLmZpbmQoJy53aXotbmV4dCcpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0LnNsaWNrTmV4dCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb250YWluZXIuZmluZCgnLndpei1wcmV2JykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHQuc2xpY2tQcmV2KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnRhaW5lci5maW5kKCcud2l6LXN0ZXAnKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdC5zbGlja0dvVG8oJCh0aGlzKS5kYXRhKCd0YXJnZXQnKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdzaG93LmJzLm1vZGFsJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdC5jbG9zZXN0KCcubW9kYWwtYm9keScpLmhpZGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ3Nob3duLmJzLm1vZGFsJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdC5jbG9zZXN0KCcubW9kYWwtYm9keScpLnNob3coKTtcbiAgICAgICAgICAgIHQuc2xpY2tTZXRPcHRpb24oJ2RvdHMnLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgICQoJ1tkYXRhLXRvZ2dsZT1cIndpemFyZFwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLnRrV2l6YXJkKCk7XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBCeSBsZXZlcmFnaW5nIGV2ZW50cyB3ZSBjYW4gaG9vayBpbnRvIHRoZSB3aXphcmQgdG8gYWRkIGZ1bmN0aW9uYWxpdHkuXG4gICAgICogVGhpcyBleGFtcGxlIHVwZGF0ZXMgdGhlIHByb2dyZXNzIGJhciBhZnRlciB0aGUgd2l6YXJkIHN0ZXAgY2hhbmdlcy5cbiAgICAgKi9cbiAgICAkKGRvY3VtZW50KS5vbignYWZ0ZXIud2l6YXJkLnN0ZXAnLCBmdW5jdGlvbiAoZXZlbnQsIGRhdGEpIHtcblxuICAgICAgICBpZiAoZGF0YS5jb250YWluZXIuaXMoJyN3aXphcmQtZGVtby0xJykpIHtcblxuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGRhdGEuY29udGFpbmVyLmZpbmQoJy53aXotcHJvZ3Jlc3MgbGk6ZXEoJyArIGRhdGEudGFyZ2V0ICsgJyknKTtcblxuICAgICAgICAgICAgZGF0YS5jb250YWluZXIuZmluZCgnLndpei1wcm9ncmVzcyBsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUgY29tcGxldGUnKTtcblxuICAgICAgICAgICAgdGFyZ2V0LmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICAgICAgdGFyZ2V0LnByZXZBbGwoKS5hZGRDbGFzcygnY29tcGxldGUnKTtcblxuICAgICAgICB9XG5cbiAgICB9KTtcblxufShqUXVlcnkpKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgICAgICAgLmRpcmVjdGl2ZSgnY2Fyb3VzZWwnLCBbIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnQycsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwudGtDYXJvdXNlbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gXSk7XHJcblxyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICBhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAgICAgICAuZGlyZWN0aXZlKCd0b2dnbGUnLCBbIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsLCBhdHRycykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cnMudG9nZ2xlID09ICdjaGVjay1hbGwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnRrQ2hlY2tBbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gXSk7XHJcblxyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICBhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAgICAgICAuZGlyZWN0aXZlKCd0b2dnbGUnLCBbIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsLCBhdHRycykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRycy50b2dnbGUgPT0gJ2NvbGxhcHNlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC50a0NvbGxhcHNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gXSk7XHJcblxyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICBhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAgICAgICAuZGlyZWN0aXZlKCdjb3ZlcicsIFsgJyR0aW1lb3V0JywgZnVuY3Rpb24gKCR0aW1lb3V0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXN0cmljdDogJ0MnLFxyXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWwudGtDb3ZlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBdKTtcclxuXHJcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gICAgICAgIC5kaXJlY3RpdmUoJ2RhdGVwaWNrZXInLCBbIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnQycsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwudGtEYXRlUGlja2VyKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBdKTtcclxuXHJcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gICAgICAgIC5kaXJlY3RpdmUoJ2RhdGVyYW5nZXBpY2tlclJlcG9ydCcsIFsgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6ICdDJyxcclxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbC50a0RhdGVyYW5nZXBpY2tlclJlcG9ydCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gXSlcclxuICAgICAgICAuZGlyZWN0aXZlKCdkYXRlcmFuZ2VwaWNrZXJSZXNlcnZhdGlvbicsIFsgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6ICdDJyxcclxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbC50a0RhdGVyYW5nZXBpY2tlclJlc2VydmF0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBdKTtcclxuXHJcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gICAgICAgIC5kaXJlY3RpdmUoJ2V4cGFuZGFibGUnLCBbIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnQycsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwudGtFeHBhbmRhYmxlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBdKTtcclxuXHJcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gICAgICAgIC5kaXJlY3RpdmUoJ21pbmljb2xvcnMnLCBbIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnQycsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwudGtNaW5pQ29sb3JzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBdKTtcclxuXHJcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gICAgICAgIC5kaXJlY3RpdmUoJ3RvZ2dsZScsIFsgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6ICdBJyxcclxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwsIGF0dHJzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRycy50b2dnbGUgPT0gJ21vZGFsJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC50a01vZGFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRycy50b2dnbGUgPT0gJ3RrLW1vZGFsLWRlbW8nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnRrTW9kYWxEZW1vKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IF0pO1xyXG5cclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgICAgICAgLmRpcmVjdGl2ZSgnbmVzdGFibGUnLCBbIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnQycsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwudGtOZXN0YWJsZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gXSk7XHJcblxyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICB2YXIgcmFuZG9tSWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLyoqIEByZXR1cm4gU3RyaW5nICovXHJcbiAgICAgICAgdmFyIFM0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKCgoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMCkgfCAwKS50b1N0cmluZygxNikuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIChTNCgpICsgUzQoKSArIFwiLVwiICsgUzQoKSArIFwiLVwiICsgUzQoKSArIFwiLVwiICsgUzQoKSArIFwiLVwiICsgUzQoKSArIFM0KCkgKyBTNCgpKTtcclxuICAgIH07XHJcblxyXG4gICAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgICAgICAgLmRpcmVjdGl2ZSgndG9nZ2xlJywgWyAnJGNvbXBpbGUnLCBmdW5jdGlvbiAoJGNvbXBpbGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXHJcbiAgICAgICAgICAgICAgICBwcmlvcml0eTogMTAwLFxyXG4gICAgICAgICAgICAgICAgY29tcGlsZTogZnVuY3Rpb24gKGVsLCBhdHRycykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cnMudG9nZ2xlICE9PSAncGFuZWwtY29sbGFwc2UnKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBib2R5ID0gYW5ndWxhci5lbGVtZW50KCcucGFuZWwtYm9keScsIGVsKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQgPSBib2R5LmF0dHIoJ2lkJykgfHwgcmFuZG9tSWQoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2UgPSBhbmd1bGFyLmVsZW1lbnQoJzxkaXYvPicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignaWQnLCBpZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdjb2xsYXBzZScgKyAoZWwuZGF0YSgnb3BlbicpID8gJyBpbicgOiAnJykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoYm9keS5jbG9uZSgpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZWwuYXBwZW5kKGNvbGxhcHNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnBhbmVsLWNvbGxhcHNlLXRyaWdnZXInLCBlbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtdG9nZ2xlJywgJ2NvbGxhcHNlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtdGFyZ2V0JywgJyMnICsgaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb2xsYXBzZSh7dHJpZ2dlcjogZmFsc2V9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignc3R5bGUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChzY29wZSwgZWwsIGF0dHJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBdKTtcclxuXHJcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gICAgICAgIC5kaXJlY3RpdmUoJ3RvZ2dsZScsIFsgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6ICdBJyxcclxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwsIGF0dHJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJzLnRvZ2dsZSA9PSAnc2VsZWN0MicgfHwgYXR0cnMudG9nZ2xlID09ICdzZWxlY3QyLXRhZ3MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnRrU2VsZWN0MigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IF0pO1xyXG5cclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgICAgICAgLmRpcmVjdGl2ZSgnc2VsZWN0cGlja2VyJywgWyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXN0cmljdDogJ0MnLFxyXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLnRrU2VsZWN0UGlja2VyKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBdKTtcclxuXHJcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gICAgICAgIC5kaXJlY3RpdmUoJ3NsaWRlcicsIFsgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6ICdBJyxcclxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwsIGF0dHJzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRycy5zbGlkZXIgPT0gJ2RlZmF1bHQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnRrU2xpZGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cnMuc2xpZGVyID09ICdmb3JtYXR0ZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnRrU2xpZGVyRm9ybWF0dGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IF0pO1xyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gICAgICAgIC5kaXJlY3RpdmUoJ29uU2xpZGUnLCBbIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsLCBhdHRycykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBlbC50a1NsaWRlclVwZGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IF0pO1xyXG5cclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgICAgICAgLmRpcmVjdGl2ZSgnc3VtbWVybm90ZScsIFsgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6ICdDJyxcclxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbC50a1N1bW1lcm5vdGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IF0pO1xyXG5cclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgICAgICAgLmRpcmVjdGl2ZSgndG9nZ2xlJywgWyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXN0cmljdDogJ0EnLFxyXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCwgYXR0cnMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJzLnRvZ2dsZSA9PSAnZGF0YS10YWJsZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWwudGtEYXRhVGFibGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gXSk7XHJcblxyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICBhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAgICAgICAuZGlyZWN0aXZlKCd0b2dnbGUnLCBbIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsLCBhdHRycykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cnMudG9nZ2xlID09ICd0YWInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gXSk7XHJcblxyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICBhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAgICAgICAuZGlyZWN0aXZlKCd0b2dnbGUnLCBbIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsLCBhdHRycykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cnMudG9nZ2xlID09ICd0b3VjaC1zcGluJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC50a1RvdWNoU3BpbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBdKTtcclxuXHJcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gICAgICAgIC5kaXJlY3RpdmUoJ3RvZ2dsZScsIFsgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6ICdBJyxcclxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwsIGF0dHJzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRycy50b2dnbGUgPT0gJ3RyZWUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnRrRmFuY3lUcmVlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IF0pO1xyXG5cclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgICAgICAgLmRpcmVjdGl2ZSgndG9nZ2xlJywgWyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXN0cmljdDogJ0EnLFxyXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCwgYXR0cnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cnMudG9nZ2xlID09ICd3aXphcmQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnRrV2l6YXJkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gXSk7XHJcblxyXG59KSgpOyIsInJlcXVpcmUoJy4vX3BhbmVsLWNvbGxhcHNlJyk7XG5yZXF1aXJlKCcuL19jYXJvdXNlbCcpO1xucmVxdWlyZSgnLi9fY2hlY2stYWxsJyk7XG5yZXF1aXJlKCcuL19jb2xsYXBzZScpO1xucmVxdWlyZSgnLi9fY292ZXInKTtcbnJlcXVpcmUoJy4vX2RhdGVwaWNrZXInKTtcbnJlcXVpcmUoJy4vX2RhdGVyYW5nZXBpY2tlcicpO1xucmVxdWlyZSgnLi9fZXhwYW5kYWJsZScpO1xucmVxdWlyZSgnLi9fbWluaWNvbG9ycycpO1xucmVxdWlyZSgnLi9fbW9kYWwnKTtcbnJlcXVpcmUoJy4vX25lc3RhYmxlJyk7XG5yZXF1aXJlKCcuL19zZWxlY3QyJyk7XG5yZXF1aXJlKCcuL19zZWxlY3RwaWNrZXInKTtcbnJlcXVpcmUoJy4vX3NsaWRlcicpO1xucmVxdWlyZSgnLi9fc3VtbWVybm90ZScpO1xucmVxdWlyZSgnLi9fdG91Y2hzcGluJyk7XG5yZXF1aXJlKCcuL190YWJsZXMnKTtcbnJlcXVpcmUoJy4vX3RhYnMnKTtcbnJlcXVpcmUoJy4vX3RyZWUnKTtcbnJlcXVpcmUoJy4vX3dpemFyZCcpOyIsInJlcXVpcmUoJy4vX3RhYnMnKTtcbnJlcXVpcmUoJy4vX3RyZWUnKTtcbnJlcXVpcmUoJy4vX3Nob3ctaG92ZXInKTtcbnJlcXVpcmUoJy4vX2RhdGVyYW5nZXBpY2tlcicpO1xucmVxdWlyZSgnLi9fZXhwYW5kYWJsZScpO1xucmVxdWlyZSgnLi9fbmVzdGFibGUnKTtcbnJlcXVpcmUoJy4vX2NvdmVyJyk7XG5yZXF1aXJlKCcuL190b29sdGlwJyk7XG5yZXF1aXJlKCcuL190YWJsZXMnKTtcbnJlcXVpcmUoJy4vX2NoZWNrLWFsbCcpO1xucmVxdWlyZSgnLi9fcHJvZ3Jlc3MtYmFycycpO1xucmVxdWlyZSgnLi9faWZyYW1lJyk7XG5yZXF1aXJlKCcuL19ib290c3RyYXAtY29sbGFwc2UnKTtcbnJlcXVpcmUoJy4vX2Jvb3RzdHJhcC1jYXJvdXNlbCcpO1xucmVxdWlyZSgnLi9fYm9vdHN0cmFwLW1vZGFsJyk7XG5yZXF1aXJlKCcuL19wYW5lbC1jb2xsYXBzZScpO1xuXG4vLyBGb3Jtc1xucmVxdWlyZSgnLi9fdG91Y2hzcGluJyk7XG5yZXF1aXJlKCcuL19zZWxlY3QyJyk7XG5yZXF1aXJlKCcuL19zbGlkZXInKTtcbnJlcXVpcmUoJy4vX3NlbGVjdHBpY2tlcicpO1xucmVxdWlyZSgnLi9fZGF0ZXBpY2tlcicpO1xucmVxdWlyZSgnLi9fbWluaWNvbG9ycycpO1xucmVxdWlyZSgnLi9fYm9vdHN0cmFwLXN3aXRjaCcpO1xucmVxdWlyZSgnLi9fd2l6YXJkJyk7XG5yZXF1aXJlKCcuL19zdW1tZXJub3RlJyk7IiwiZnVuY3Rpb24gY29udGVudExvYWRlZCh3aW4sIGZuKSB7XG5cbiAgICB2YXIgZG9uZSA9IGZhbHNlLCB0b3AgPSB0cnVlLFxuXG4gICAgICAgIGRvYyA9IHdpbi5kb2N1bWVudCxcbiAgICAgICAgcm9vdCA9IGRvYy5kb2N1bWVudEVsZW1lbnQsXG4gICAgICAgIG1vZGVybiA9IGRvYy5hZGRFdmVudExpc3RlbmVyLFxuXG4gICAgICAgIGFkZCA9IG1vZGVybiA/ICdhZGRFdmVudExpc3RlbmVyJyA6ICdhdHRhY2hFdmVudCcsXG4gICAgICAgIHJlbSA9IG1vZGVybiA/ICdyZW1vdmVFdmVudExpc3RlbmVyJyA6ICdkZXRhY2hFdmVudCcsXG4gICAgICAgIHByZSA9IG1vZGVybiA/ICcnIDogJ29uJyxcblxuICAgICAgICBpbml0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmIChlLnR5cGUgPT0gJ3JlYWR5c3RhdGVjaGFuZ2UnICYmIGRvYy5yZWFkeVN0YXRlICE9ICdjb21wbGV0ZScpIHJldHVybjtcbiAgICAgICAgICAgIChlLnR5cGUgPT0gJ2xvYWQnID8gd2luIDogZG9jKVsgcmVtIF0ocHJlICsgZS50eXBlLCBpbml0LCBmYWxzZSk7XG4gICAgICAgICAgICBpZiAoISBkb25lICYmIChkb25lID0gdHJ1ZSkpIGZuLmNhbGwod2luLCBlLnR5cGUgfHwgZSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcG9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcm9vdC5kb1Njcm9sbCgnbGVmdCcpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQocG9sbCwgNTApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGluaXQoJ3BvbGwnKTtcbiAgICAgICAgfTtcblxuICAgIGlmIChkb2MucmVhZHlTdGF0ZSA9PSAnY29tcGxldGUnKSBmbi5jYWxsKHdpbiwgJ2xhenknKTtcbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKCEgbW9kZXJuICYmIHJvb3QuZG9TY3JvbGwpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdG9wID0gISB3aW4uZnJhbWVFbGVtZW50O1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRvcCkgcG9sbCgpO1xuICAgICAgICB9XG4gICAgICAgIGRvY1sgYWRkIF0ocHJlICsgJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0LCBmYWxzZSk7XG4gICAgICAgIGRvY1sgYWRkIF0ocHJlICsgJ3JlYWR5c3RhdGVjaGFuZ2UnLCBpbml0LCBmYWxzZSk7XG4gICAgICAgIHdpblsgYWRkIF0ocHJlICsgJ2xvYWQnLCBpbml0LCBmYWxzZSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVybHMsIGNhbGxiYWNrKSB7XG5cbiAgICB2YXIgYXN5bmNMb2FkZXIgPSBmdW5jdGlvbiAodXJscywgY2FsbGJhY2spIHtcblxuICAgICAgICB1cmxzLmZvcmVhY2goZnVuY3Rpb24gKGksIGZpbGUpIHtcbiAgICAgICAgICAgIGxvYWRDc3MoZmlsZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNoZWNraW5nIGZvciBhIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgLy8gY2FsbGluZyB0aGUgY2FsbGJhY2tcbiAgICAgICAgICAgIGNvbnRlbnRMb2FkZWQod2luZG93LCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGxvYWRDc3MgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICBsaW5rLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgICAgICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICAgICAgbGluay5ocmVmID0gdXJsO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWyAwIF0uYXBwZW5kQ2hpbGQobGluayk7XG4gICAgfTtcblxuICAgIC8vIHNpbXBsZSBmb3JlYWNoIGltcGxlbWVudGF0aW9uXG4gICAgQXJyYXkucHJvdG90eXBlLmZvcmVhY2ggPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArKykge1xuICAgICAgICAgICAgY2FsbGJhY2soaSwgdGhpc1sgaSBdKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBhc3luY0xvYWRlcih1cmxzLCBjYWxsYmFjayk7XG5cbn07IiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgICAkKHdpbmRvdykuc2V0QnJlYWtwb2ludHMoe1xuICAgICAgICBkaXN0aW5jdDogdHJ1ZSxcbiAgICAgICAgYnJlYWtwb2ludHM6IFsgMzIwLCA0ODAsIDc2OCwgMTAyNCBdXG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvKipcbiAgICAgKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAgICAgKi9cbiAgICAkLmZuLnRrR3JpZGFsaWNpb3VzID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5ncmlkYWxpY2lvdXMoe1xuICAgICAgICAgICAgZ3V0dGVyOiB0aGlzLmRhdGEoJ2d1dHRlcicpIHx8IDE1LFxuICAgICAgICAgICAgd2lkdGg6IHRoaXMuZGF0YSgnd2lkdGgnKSB8fCAzNzAsXG4gICAgICAgICAgICBzZWxlY3RvcjogJz4gZGl2JyxcbiAgICAgICAgICAgIGFuaW1hdGlvbk9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcigncmVzaXplJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICAkKCdbZGF0YS10b2dnbGUqPVwiZ3JpZGFsaWNpb3VzXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykudGtHcmlkYWxpY2lvdXMoKTtcbiAgICB9KTtcblxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIC8qKlxuICAgICAqIGpRdWVyeSBwbHVnaW4gd3JhcHBlciBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEFuZ3VsYXIgVUkuVXRpbHM6IGpRdWVyeSBQYXNzdGhyb3VnaFxuICAgICAqL1xuICAgICQuZm4udGtJc290b3BlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5pc290b3BlKHtcbiAgICAgICAgICAgIGxheW91dE1vZGU6IHRoaXMuZGF0YSgnbGF5b3V0TW9kZScpIHx8IFwicGFja2VyeVwiLFxuICAgICAgICAgICAgaXRlbVNlbGVjdG9yOiAnLml0ZW0nXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8qXG4gICAgICAgIHRoaXMuaXNvdG9wZSgnb24nLCAnbGF5b3V0Q29tcGxldGUnLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3Jlc2l6ZScpO1xuICAgICAgICB9KTtcbiAgICAgICAgKi9cblxuICAgIH07XG5cbiAgICAkKGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCdbZGF0YS10b2dnbGU9XCJpc290b3BlXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS50a0lzb3RvcGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAzMDApO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdkb21DaGFuZ2VkJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICQoJ1tkYXRhLXRvZ2dsZT1cImlzb3RvcGVcIl0nKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5pc290b3BlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxufSkoalF1ZXJ5KTtcbiIsIi8vIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4vLyBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG4vLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG4vLyBNSVQgbGljZW5zZVxuKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGFzdFRpbWUgPSAwO1xuICAgIHZhciB2ZW5kb3JzID0gWyAnbXMnLCAnbW96JywgJ3dlYmtpdCcsICdvJyBdO1xuICAgIGZvciAodmFyIHggPSAwOyB4IDwgdmVuZG9ycy5sZW5ndGggJiYgISB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOyArKyB4KSB7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbIHZlbmRvcnNbIHggXSArICdSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnIF07XG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvd1sgdmVuZG9yc1sgeCBdICsgJ0NhbmNlbEFuaW1hdGlvbkZyYW1lJyBdIHx8IHdpbmRvd1sgdmVuZG9yc1sgeCBdICsgJ0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZScgXTtcbiAgICB9XG5cbiAgICBpZiAoISB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKVxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBlbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGltZSkpO1xuICAgICAgICAgICAgdmFyIGlkID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhjdXJyVGltZSArIHRpbWVUb0NhbGwpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGltZVRvQ2FsbCk7XG4gICAgICAgICAgICBsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbDtcbiAgICAgICAgICAgIHJldHVybiBpZDtcbiAgICAgICAgfTtcblxuICAgIGlmICghIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSlcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaWQpO1xuICAgICAgICB9O1xufSgpKTtcblxuKGZ1bmN0aW9uICgkLCB3aW5kb3cpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICQuZm4udGtQYXJhbGxheCA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoTW9kZXJuaXpyLnRvdWNoKSByZXR1cm47XG5cbiAgICAgICAgdmFyIGdldE9wdGlvbnMgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzcGVlZDogZS5kYXRhKCdzcGVlZCcpIHx8IDQsXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlOiBlLmRhdGEoJ3NwZWVkJykgfHwgdHJ1ZSxcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVXaGVuOiBlLmRhdGEoJ3RyYW5zbGF0ZVdoZW4nKSB8fCAnaW5WaWV3cG9ydFRvcCcsXG4gICAgICAgICAgICAgICAgYXV0b09mZnNldDogZS5kYXRhKCdhdXRvT2Zmc2V0JyksXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBlLmRhdGEoJ29mZnNldCcpIHx8IDAsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogZS5kYXRhKCdvcGFjaXR5JylcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyICR3aW5kb3cgPSAkKHdpbmRvdyksXG4gICAgICAgICAgICAkd2luZG93Q29udGVudCA9ICQoJy5zdC1jb250ZW50LWlubmVyJyksXG4gICAgICAgICAgICAkZWxlbWVudCA9IHRoaXM7XG5cbiAgICAgICAgdmFyIHRpY2tpbmcgPSBmYWxzZSxcbiAgICAgICAgICAgICRzY3JvbGxhYmxlID0gbnVsbCxcbiAgICAgICAgICAgIGxhc3RTY3JvbGxUb3AgPSAwO1xuXG4gICAgICAgIHZhciBpc1NhZmFyaSA9IC9TYWZhcmkvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgL0FwcGxlIENvbXB1dGVyLy50ZXN0KG5hdmlnYXRvci52ZW5kb3IpO1xuXG4gICAgICAgIHZhciByZXF1ZXN0VGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoISB0aWNraW5nKSB7XG4gICAgICAgICAgICAgICAgJHNjcm9sbGFibGUgPSAkKGUuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICAgICAgLy8gYWx0aG91Z2ggU2FmYXJpIGhhcyBzdXBwb3J0IGZvciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUsXG4gICAgICAgICAgICAgICAgLy8gdGhlIGFuaW1hdGlvbiBpbiB0aGlzIGNhc2UgaXMgY2hvcHB5IHNvIHdlJ2xsIGp1c3QgcnVuIGl0IGRpcmVjdGx5XG4gICAgICAgICAgICAgICAgaWYgKGlzU2FmYXJpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgICAgICAgICAgICAgICAgICB0aWNraW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gVHJhbnNsYXRlcyBhbiBlbGVtZW50IG9uIHRoZSBZIGF4aXMgdXNpbmcgdHJhbnNsYXRlM2QgdG8gZW5zdXJlXG4gICAgICAgIC8vIHRoYXQgdGhlIHJlbmRlcmluZyBpcyBkb25lIGJ5IHRoZSBHUFVcbiAgICAgICAgdmFyIHRyYW5zbGF0ZVkgPSBmdW5jdGlvbiAoZWxtLCB2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIHRyYW5zbGF0ZSA9ICd0cmFuc2xhdGUzZCgwcHgsJyArIHZhbHVlICsgJ3B4LCAwcHgpJztcbiAgICAgICAgICAgIGVsbS5zdHlsZVsgJy13ZWJraXQtdHJhbnNmb3JtJyBdID0gdHJhbnNsYXRlO1xuICAgICAgICAgICAgZWxtLnN0eWxlWyAnLW1vei10cmFuc2Zvcm0nIF0gPSB0cmFuc2xhdGU7XG4gICAgICAgICAgICBlbG0uc3R5bGVbICctbXMtdHJhbnNmb3JtJyBdID0gdHJhbnNsYXRlO1xuICAgICAgICAgICAgZWxtLnN0eWxlWyAnLW8tdHJhbnNmb3JtJyBdID0gdHJhbnNsYXRlO1xuICAgICAgICAgICAgZWxtLnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zbGF0ZTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgbGF5ZXJzID0gJGVsZW1lbnQuZmluZCgnLnBhcmFsbGF4LWxheWVyJyk7XG5cbiAgICAgICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsYXllcnMuZWFjaChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgbGF5ZXIgPSAkKHRoaXMpLFxuICAgICAgICAgICAgICAgICAgICBsYXllck9wdGlvbnMgPSBnZXRPcHRpb25zKGxheWVyKSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gJGVsZW1lbnQub3V0ZXJIZWlnaHQodHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAobGF5ZXJPcHRpb25zLnRyYW5zbGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGF5ZXIuaXMoJ2ltZycpICYmIGxheWVyT3B0aW9ucy5hdXRvT2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkLmxvYWRJbWFnZShsYXllci5hdHRyKCdzcmMnKSkuZG9uZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXIucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGF5ZXJIZWlnaHQgPSBsYXllci5oZWlnaHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gbGF5ZXJIZWlnaHQgKiAwLjMzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgob2Zmc2V0ICsgaGVpZ2h0KSA+IGxheWVySGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IGxheWVySGVpZ2h0IC0gaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSBvZmZzZXQgKiAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXIuYXR0cignZGF0YS1vZmZzZXQnLCBvZmZzZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVkobGF5ZXIuZ2V0KDApLCBvZmZzZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGluaXQoKTtcbiAgICAgICAgJCh3aW5kb3cpLm9uKFwiZGVib3VuY2VkcmVzaXplXCIsIGluaXQpO1xuXG4gICAgICAgIHZhciBhbmltYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHNjcm9sbFRvcCA9IHBhcnNlSW50KCRzY3JvbGxhYmxlLnNjcm9sbFRvcCgpKTtcbiAgICAgICAgICAgIHZhciBzY3JvbGxhYmxlVG9wID0gJHNjcm9sbGFibGUuaXMoJHdpbmRvdykgPyAwIDogJHNjcm9sbGFibGUub2Zmc2V0KCkudG9wO1xuICAgICAgICAgICAgdmFyIGhlaWdodCA9ICRlbGVtZW50Lm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICAgICAgdmFyIGJvZHlQYWRkaW5nID0ge1xuICAgICAgICAgICAgICAgIHRvcDogcGFyc2VJbnQoJChkb2N1bWVudC5ib2R5KS5jc3MoJ3BhZGRpbmctdG9wJykpLFxuICAgICAgICAgICAgICAgIGJvdHRvbTogcGFyc2VJbnQoJChkb2N1bWVudC5ib2R5KS5jc3MoJ3BhZGRpbmctYm90dG9tJykpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIHdpbmRvd0hlaWdodCA9ICRzY3JvbGxhYmxlLmlubmVySGVpZ2h0KCk7XG4gICAgICAgICAgICB2YXIgd2luZG93Qm90dG9tID0gc2Nyb2xsVG9wICsgd2luZG93SGVpZ2h0IC0gKGJvZHlQYWRkaW5nLmJvdHRvbSArIGJvZHlQYWRkaW5nLnRvcCk7XG4gICAgICAgICAgICB2YXIgdG9wID0gJGVsZW1lbnQub2Zmc2V0KCkudG9wIC0gc2Nyb2xsYWJsZVRvcCAtIGJvZHlQYWRkaW5nLnRvcDtcbiAgICAgICAgICAgIHZhciBib3R0b20gPSB0b3AgKyBoZWlnaHQ7XG4gICAgICAgICAgICB2YXIgdG9wQWJzID0gTWF0aC5hYnModG9wKTtcbiAgICAgICAgICAgIHZhciBwb3MgPSB0b3AgLyB3aW5kb3dIZWlnaHQgKiAxMDA7XG4gICAgICAgICAgICB2YXIgb3BhY2l0eUtleSA9IGhlaWdodCAqIDAuNTtcbiAgICAgICAgICAgIHZhciB3aGVuID0ge307XG5cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgKiBPTkxZIHdoZW4gdGhlIHNjcm9sbGFibGUgZWxlbWVudCBJUyBOT1QgdGhlIHdpbmRvd1xuICAgICAgICAgICAgICovXG5cbiAgICAgICAgICAgIC8vIHdoZW4gdGhlIGVsZW1lbnQgaXMgYW55d2hlcmUgaW4gdmlld3BvcnRcbiAgICAgICAgICAgIHdoZW4uaW5WaWV3cG9ydCA9IChib3R0b20gPiAwKSAmJiAodG9wIDwgd2luZG93SGVpZ2h0KTtcblxuICAgICAgICAgICAgLy8gd2hlbiB0aGUgdG9wIG9mIHRoZSB2aWV3cG9ydCBpcyBjcm9zc2luZyB0aGUgZWxlbWVudFxuICAgICAgICAgICAgd2hlbi5pblZpZXdwb3J0VG9wID0gKGJvdHRvbSA+IDApICYmICh0b3AgPCAwKTtcblxuICAgICAgICAgICAgLy8gd2hlbiB0aGUgYm90dG9tIG9mIHRoZSB2aWV3cG9ydCBpcyBjcm9zc2luZyB0aGUgZWxlbWVudFxuICAgICAgICAgICAgd2hlbi5pblZpZXdwb3J0Qm90dG9tID0gKGJvdHRvbSA+IDApICYmICh0b3AgPCB3aW5kb3dIZWlnaHQpICYmIChib3R0b20gPiB3aW5kb3dIZWlnaHQpO1xuXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgICogT05MWSB3aGVuIHRoZSBzY3JvbGxhYmxlIGVsZW1lbnQgSVMgdGhlIHdpbmRvd1xuICAgICAgICAgICAgICovXG5cbiAgICAgICAgICAgIGlmICgkc2Nyb2xsYWJsZS5pcygkd2luZG93KSkge1xuXG4gICAgICAgICAgICAgICAgLy8gd2hlbiB0aGUgd2luZG93IGlzIHNjcm9sbGFibGUgYW5kIHRoZSBlbGVtZW50IGlzIGNvbXBsZXRlbHkgaW4gdGhlIHZpZXdwb3J0XG4gICAgICAgICAgICAgICAgd2hlbi5pbldpbmRvd1ZpZXdwb3J0RnVsbCA9ICh0b3AgPj0gc2Nyb2xsVG9wKSAmJiAoYm90dG9tIDw9IHdpbmRvd0JvdHRvbSk7XG5cbiAgICAgICAgICAgICAgICB3aGVuLmluV2luZG93Vmlld3BvcnQyID0gKHRvcCA+PSBzY3JvbGxUb3ApICYmICh0b3AgPD0gd2luZG93Qm90dG9tKTtcblxuICAgICAgICAgICAgICAgIHdoZW4uaW5XaW5kb3dWaWV3cG9ydDMgPSAoYm90dG9tID49IHNjcm9sbFRvcCkgJiYgKGJvdHRvbSA8PSB3aW5kb3dCb3R0b20pO1xuXG4gICAgICAgICAgICAgICAgd2hlbi5pbldpbmRvd1ZpZXdwb3J0NCA9IChib3R0b20gPj0gc2Nyb2xsVG9wKSAmJiAoYm90dG9tID49IHdpbmRvd0hlaWdodCkgJiYgKGhlaWdodCA+IHdpbmRvd0hlaWdodCk7XG5cbiAgICAgICAgICAgICAgICAvLyB3aGVuIHRoZSB3aW5kb3cgaXMgc2Nyb2xsYWJsZSBhbmQgdGhlIHRvcCBvZiB0aGUgdmlld3BvcnQgaXMgY3Jvc3NpbmcgdGhlIGVsZW1lbnRcbiAgICAgICAgICAgICAgICB3aGVuLmluV2luZG93Vmlld3BvcnRUb3AgPSAhIHdoZW4uaW5XaW5kb3dWaWV3cG9ydDIgJiYgKHdoZW4uaW5XaW5kb3dWaWV3cG9ydDMgfHwgd2hlbi5pbldpbmRvd1ZpZXdwb3J0NCk7XG5cbiAgICAgICAgICAgICAgICAvLyB3aGVuIHRoZSB3aW5kb3cgaXMgc2Nyb2xsYWJsZSBhbmQgdGhlIGJvdHRvbSBvZiB0aGUgdmlld3BvcnQgaXMgY3Jvc3NpbmcgdGhlIGVsZW1lbnRcbiAgICAgICAgICAgICAgICB3aGVuLmluV2luZG93Vmlld3BvcnRCb3R0b20gPSB3aGVuLmluV2luZG93Vmlld3BvcnQyICYmICEgd2hlbi5pbldpbmRvd1ZpZXdwb3J0MztcblxuICAgICAgICAgICAgICAgIC8vIHdoZW4gdGhlIHdpbmRvdyBpcyBzY3JvbGxhYmxlIGFuZCB0aGUgZWxlbWVudCBpcyBhbnl3aGVyZSBpbiB2aWV3cG9ydFxuICAgICAgICAgICAgICAgIHdoZW4uaW5XaW5kb3dWaWV3cG9ydCA9IHdoZW4uaW5XaW5kb3dWaWV3cG9ydFRvcCB8fCB3aGVuLmluV2luZG93Vmlld3BvcnRCb3R0b20gfHwgd2hlbi5pbldpbmRvd1ZpZXdwb3J0RnVsbDtcblxuICAgICAgICAgICAgICAgIHdoZW4uaW5WaWV3cG9ydCA9IHdoZW4uaW5XaW5kb3dWaWV3cG9ydDtcbiAgICAgICAgICAgICAgICB3aGVuLmluVmlld3BvcnRUb3AgPSB3aGVuLmluV2luZG93Vmlld3BvcnRUb3A7XG4gICAgICAgICAgICAgICAgd2hlbi5pblZpZXdwb3J0Qm90dG9tID0gd2hlbi5pbldpbmRvd1ZpZXdwb3J0Qm90dG9tO1xuXG4gICAgICAgICAgICAgICAgcG9zID0gKHRvcCAtIHNjcm9sbFRvcCkgLyB3aW5kb3dIZWlnaHQgKiAxMDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh3aGVuLmluVmlld3BvcnRUb3AgJiYgd2hlbi5pblZpZXdwb3J0Qm90dG9tKSB7XG4gICAgICAgICAgICAgICAgd2hlbi5pblZpZXdwb3J0Qm90dG9tID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghIGlzTmFOKHNjcm9sbFRvcCkpIHtcbiAgICAgICAgICAgICAgICBsYXllcnMuZWFjaChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGxheWVyID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxheWVyT3B0aW9ucyA9IGdldE9wdGlvbnMobGF5ZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciB0eSA9ICh3aW5kb3dIZWlnaHQgKyBoZWlnaHQpIC0gYm90dG9tO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICgkc2Nyb2xsYWJsZS5pcygkd2luZG93KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHkgPSB3aW5kb3dCb3R0b20gLSB0b3A7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAobGF5ZXJPcHRpb25zLnRyYW5zbGF0ZSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGF5ZXJQb3MgPSAoLSAxICogcG9zICogbGF5ZXJPcHRpb25zLnNwZWVkKSArIGxheWVyT3B0aW9ucy5vZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGF5ZXJIZWlnaHQgPSBsYXllci5oZWlnaHQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdoZW4uaW5WaWV3cG9ydCAmJiAhIHdoZW4uaW5WaWV3cG9ydFRvcCAmJiAhIHdoZW4uaW5WaWV3cG9ydEJvdHRvbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXllci5pcygnaW1nJykgJiYgbGF5ZXJIZWlnaHQgPiBoZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChNYXRoLmFicyhsYXllclBvcykgKyBoZWlnaHQpID4gbGF5ZXJIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyUG9zID0gKGxheWVySGVpZ2h0IC0gaGVpZ2h0KSAqIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISBsYXllci5pcygnaW1nJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJQb3MgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdoZW4uaW5WaWV3cG9ydFRvcCAmJiAoKGxheWVyLmlzKCdpbWcnKSAmJiBsYXllckhlaWdodCA9PSBoZWlnaHQpIHx8ICEgbGF5ZXIuaXMoJ2ltZycpICkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllclBvcyA9IE1hdGguYWJzKGxheWVyUG9zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdoZW4uaW5WaWV3cG9ydEJvdHRvbSAmJiAhIGxheWVyLmlzKCdpbWcnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyUG9zID0gaGVpZ2h0IC0gdHk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzY3JvbGxpbmcgdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG9wIDwgbGFzdFNjcm9sbFRvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllclBvcyA9IGxheWVyUG9zICogLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdoZW4uaW5WaWV3cG9ydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyUG9zID0gKGxheWVyUG9zKS50b0ZpeGVkKDUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXllckhlaWdodCA+ICR3aW5kb3cuaGVpZ2h0KCkgJiYgc2Nyb2xsVG9wIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJQb3MgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVZKGxheWVyLmdldCgwKSwgbGF5ZXJQb3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAobGF5ZXJPcHRpb25zLm9wYWNpdHkpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmFkZSBpblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdoZW4uaW5WaWV3cG9ydEJvdHRvbSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHksIHlQO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRzY3JvbGxhYmxlLmlzKCR3aW5kb3cpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeSA9IHR5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5UCA9ICh5IC8gaGVpZ2h0KS50b0ZpeGVkKDUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh5ID4gb3BhY2l0eUtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXIuY3NzKHtvcGFjaXR5OiB5UH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXIuY3NzKHtvcGFjaXR5OiAwfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChib3R0b20gPCAod2luZG93SGVpZ2h0ICsgb3BhY2l0eUtleSkpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeSA9ICh3aW5kb3dIZWlnaHQgKyBvcGFjaXR5S2V5KSAtIGJvdHRvbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlQID0gKHkgLyBvcGFjaXR5S2V5KS50b0ZpeGVkKDUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllci5jc3Moe29wYWNpdHk6IHlQfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllci5jc3Moe29wYWNpdHk6IDB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmFkZSBvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHdoZW4uaW5WaWV3cG9ydFRvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0b3BPcmlnaW4gPSAkc2Nyb2xsYWJsZS5pcygkd2luZG93KSA/IHNjcm9sbFRvcCAtIHRvcCA6IHRvcEFicztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9wT3JpZ2luID4gb3BhY2l0eUtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllci5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAoMSAtICh0b3BPcmlnaW4gLyBoZWlnaHQpKS50b0ZpeGVkKDUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyLmNzcyh7J29wYWNpdHknOiAxfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZXNldFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXIuY3NzKHsnb3BhY2l0eSc6IDF9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdoZW4uaW5WaWV3cG9ydEJvdHRvbSAmJiBzY3JvbGxUb3AgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyLmNzcyh7J29wYWNpdHknOiAxfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBsYXN0U2Nyb2xsVG9wID0gc2Nyb2xsVG9wO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aWNraW5nID0gZmFsc2U7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCR3aW5kb3dDb250ZW50Lmxlbmd0aCkge1xuICAgICAgICAgICAgJHdpbmRvd0NvbnRlbnQuc2Nyb2xsKHJlcXVlc3RUaWNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICR3aW5kb3cuc2Nyb2xsKHJlcXVlc3RUaWNrKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgICQoJy5wYXJhbGxheCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLnRrUGFyYWxsYXgoKTtcbiAgICB9KTtcblxufSkoalF1ZXJ5LCB3aW5kb3cpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgdmFyIHNraW4gPSByZXF1aXJlKCcuL19za2luJykoKTtcblxuICAgIC8qKlxuICAgICAqIGpRdWVyeSBwbHVnaW4gd3JhcHBlciBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEFuZ3VsYXIgVUkuVXRpbHM6IGpRdWVyeSBQYXNzdGhyb3VnaFxuICAgICAqL1xuICAgICQuZm4udGtTY3JvbGxhYmxlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgICAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBzZXR0aW5ncyA9ICQuZXh0ZW5kKHtcbiAgICAgICAgICAgIGhvcml6b250YWw6IGZhbHNlXG4gICAgICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgICAgIHZhciBuaWNlID0gdGhpcy5uaWNlU2Nyb2xsKHtcbiAgICAgICAgICAgIGN1cnNvcmJvcmRlcjogMCxcbiAgICAgICAgICAgIGN1cnNvcmNvbG9yOiBjb25maWcuc2tpbnNbIHNraW4gXVsgJ3ByaW1hcnktY29sb3InIF0sXG4gICAgICAgICAgICBob3JpenJhaWxlbmFibGVkOiBzZXR0aW5ncy5ob3Jpem9udGFsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghIHNldHRpbmdzLmhvcml6b250YWwpIHJldHVybjtcblxuICAgICAgICB2YXIgX3N1cGVyID0gbmljZS5nZXRDb250ZW50U2l6ZTtcblxuICAgICAgICBuaWNlLmdldENvbnRlbnRTaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHBhZ2UgPSBfc3VwZXIuY2FsbChuaWNlKTtcbiAgICAgICAgICAgIHBhZ2UuaCA9IG5pY2Uud2luLmhlaWdodCgpO1xuICAgICAgICAgICAgcmV0dXJuIHBhZ2U7XG4gICAgICAgIH07XG5cbiAgICB9O1xuXG4gICAgJCgnW2RhdGEtc2Nyb2xsYWJsZV0nKS50a1Njcm9sbGFibGUoKTtcblxuICAgICQoJ1tkYXRhLXNjcm9sbGFibGUtaF0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICQodGhpcykudGtTY3JvbGxhYmxlKHsgaG9yaXpvbnRhbDogdHJ1ZSB9KTtcblxuICAgIH0pO1xuXG4gICAgdmFyIHQ7XG4gICAgJCh3aW5kb3cpLm9uKCdkZWJvdW5jZWRyZXNpemUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0KTtcbiAgICAgICAgdCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnW2RhdGEtc2Nyb2xsYWJsZV0sIFtkYXRhLXNjcm9sbGFibGUtaF0nKS5nZXROaWNlU2Nyb2xsKCkucmVzaXplKCk7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgfSk7XG5cbn0oalF1ZXJ5KSk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAkLmZuLnRrU2lkZWJhclNpemVQY0RlbW8gPSBmdW5jdGlvbigpe1xuXG4gICAgICAgIHZhciB0LCBzcGNfZGVtbyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCEgc3BjX2RlbW8ubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgJChkb2N1bWVudClcbiAgICAgICAgICAgIC5vbignc2lkZWJhci5zaG93JywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAkKCcjcGMtb3BlbicpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdzaWRlYmFyLmhpZGRlbicsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgJCgnI3BjLW9wZW4nKS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHNwY19kZW1vLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIHMgPSAkKCcuc2lkZWJhcicpLCB2ZSA9ICQoJyNwYy12YWx1ZScpLCB2ID0gdmUudmFsKCk7XG4gICAgICAgICAgICB2ZS5ibHVyKCk7XG4gICAgICAgICAgICBpZiAoISB2Lmxlbmd0aCB8fCB2IDwgMjUpIHtcbiAgICAgICAgICAgICAgICB2ID0gMjU7XG4gICAgICAgICAgICAgICAgdmUudmFsKHYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc1sgMCBdLmNsYXNzTmFtZSA9IHNbIDAgXS5jbGFzc05hbWUucmVwbGFjZSgvc2lkZWJhci1zaXplLShbXFxkXSspcGMvaWcsICdzaWRlYmFyLXNpemUtJyArIHYgKyAncGMnKTtcbiAgICAgICAgICAgIHNpZGViYXIub3Blbignc2lkZWJhci1tZW51Jyk7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodCk7XG4gICAgICAgICAgICB0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2lkZWJhci5jbG9zZSgnc2lkZWJhci1tZW51Jyk7XG4gICAgICAgICAgICB9LCA1MDAwKTtcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwic2lkZWJhci1zaXplLXBjLWRlbW9cIl0nKS50a1NpZGViYXJTaXplUGNEZW1vKCk7XG5cbn0pKGpRdWVyeSk7IiwidmFyIGFzeW5jTG9hZGVyID0gcmVxdWlyZSgnLi9fYXN5bmMnKTtcblxuKGZ1bmN0aW9uICgkKSB7XG5cbiAgICB2YXIgY2hhbmdlU2tpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNraW4gPSAkLmNvb2tpZShcInNraW5cIiksXG4gICAgICAgICAgICBmaWxlID0gJC5jb29raWUoXCJza2luLWZpbGVcIik7XG4gICAgICAgIGlmICh0eXBlb2Ygc2tpbiAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgYXN5bmNMb2FkZXIoWyAnY3NzLycgKyBmaWxlICsgJy5taW4uY3NzJyBdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtc2tpbl0nKS5yZW1vdmVQcm9wKCdkaXNhYmxlZCcpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAkKCdbZGF0YS1za2luXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoJCh0aGlzKS5wcm9wKCdkaXNhYmxlZCcpKSByZXR1cm47XG5cbiAgICAgICAgJCgnW2RhdGEtc2tpbl0nKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuXG4gICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcblxuICAgICAgICAkLmNvb2tpZShcInNraW5cIiwgJCh0aGlzKS5kYXRhKCdza2luJykpO1xuXG4gICAgICAgICQuY29va2llKFwic2tpbi1maWxlXCIsICQodGhpcykuZGF0YSgnZmlsZScpKTtcblxuICAgICAgICBjaGFuZ2VTa2luKCk7XG5cbiAgICB9KTtcblxuICAgIHZhciBza2luID0gJC5jb29raWUoXCJza2luXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBza2luICE9ICd1bmRlZmluZWQnICYmIHNraW4gIT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgIGNoYW5nZVNraW4oKTtcbiAgICB9XG5cbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gICAgICAgIC5kaXJlY3RpdmUoJ3RvZ2dsZScsIFsgJyR0aW1lb3V0JywgZnVuY3Rpb24gKCR0aW1lb3V0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXN0cmljdDogJ0EnLFxyXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCwgYXR0cnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cnMudG9nZ2xlID09ICdncmlkYWxpY2lvdXMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC50a0dyaWRhbGljaW91cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IF0pO1xyXG5cclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgICAgICAgLmRpcmVjdGl2ZSgndG9nZ2xlJywgWyAnJHRpbWVvdXQnLCBmdW5jdGlvbiAoJHRpbWVvdXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsLCBhdHRycykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRycy50b2dnbGUgPT0gJ2lzb3RvcGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbC50a0lzb3RvcGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBdKTtcclxuXHJcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gICAgICAgIC5kaXJlY3RpdmUoJ3BhcmFsbGF4JywgWyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXN0cmljdDogJ0MnLFxyXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLnRrUGFyYWxsYXgoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IF0pO1xyXG5cclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgICAgICAgLmRpcmVjdGl2ZSgnc2Nyb2xsYWJsZScsIFsgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6ICdBJyxcclxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbC50a1Njcm9sbGFibGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IF0pXHJcbiAgICAgICAgLmRpcmVjdGl2ZSgnc2Nyb2xsYWJsZUgnLCBbIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwudGtTY3JvbGxhYmxlKHsgaG9yaXpvbnRhbDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IF0pO1xyXG5cclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgICAgICAgLmRpcmVjdGl2ZSgndG9nZ2xlJywgWyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXN0cmljdDogJ0EnLFxyXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCwgYXR0cnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cnMudG9nZ2xlID09ICdzaWRlYmFyLXNpemUtcGMtZGVtbycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWwudGtTaWRlYmFyU2l6ZVBjRGVtbygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IF0pO1xyXG5cclxufSkoKTsiLCJyZXF1aXJlKCcuL19zY3JvbGxhYmxlJyk7XG5yZXF1aXJlKCcuL19pc290b3BlJyk7XG5yZXF1aXJlKCcuL19wYXJhbGxheCcpO1xucmVxdWlyZSgnLi9fZ3JpZGFsaWNpb3VzJyk7XG5yZXF1aXJlKCcuL19zaWRlYmFyLXBjJyk7IiwicmVxdWlyZSgnLi9fYnJlYWtwb2ludHMuanMnKTtcbnJlcXVpcmUoJy4vX2dyaWRhbGljaW91cy5qcycpO1xucmVxdWlyZSgnLi9fc2Nyb2xsYWJsZS5qcycpO1xucmVxdWlyZSgnLi9fc2tpbnMnKTtcbnJlcXVpcmUoJy4vX2lzb3RvcGUnKTtcbnJlcXVpcmUoJy4vX3BhcmFsbGF4Jyk7XG5cbi8vIFNpZGViYXIgUGVyY2VudGFnZSBTaXplcyBEZW1vXG5yZXF1aXJlKCcuL19zaWRlYmFyLXBjJyk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gICAgICAgIC5kaXJlY3RpdmUoJ3RvZ2dsZScsIFsgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6ICdBJyxcclxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwsIGF0dHJzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRycy50b2dnbGUgIT09ICdnb29nbGUtbWFwcycpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZWwudGtHb29nbGVNYXAoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IF0pO1xyXG5cclxufSkoKTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIHZhciBmaW5kID0gZnVuY3Rpb24gKG1hcERhdGEsIGxvY2F0aW9uLCBtYXJrZXIsIG1hcmtlckRhdGEpIHtcblxuICAgICAgICB2YXIgZXZlbnREYXRhID0gJC5leHRlbmQoe30sIHttYXJrZXI6IG1hcmtlcn0sIG1hcmtlckRhdGEsIG1hcERhdGEpLFxuICAgICAgICAgICAgc3RhdGUgPSAnJyxcbiAgICAgICAgICAgIGNvdW50cnkgPSAnJyxcbiAgICAgICAgICAgIGFkZHJlc3MgPSAnJztcblxuICAgICAgICBtYXBEYXRhLmNvbnRhaW5lci5nbWFwKCdzZWFyY2gnLCB7J2xvY2F0aW9uJzogbG9jYXRpb259LCBmdW5jdGlvbiAocmVzdWx0cywgc3RhdHVzKSB7XG5cbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT09ICdPSycpIHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzID0gcmVzdWx0c1sgMCBdLmZvcm1hdHRlZF9hZGRyZXNzO1xuICAgICAgICAgICAgICAgICQuZWFjaChyZXN1bHRzWyAwIF0uYWRkcmVzc19jb21wb25lbnRzLCBmdW5jdGlvbiAoaSwgdikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodi50eXBlc1sgMCBdID09IFwiYWRtaW5pc3RyYXRpdmVfYXJlYV9sZXZlbF8xXCIgfHwgdi50eXBlc1sgMCBdID09IFwiYWRtaW5pc3RyYXRpdmVfYXJlYV9sZXZlbF8yXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gdi5sb25nX25hbWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodi50eXBlc1sgMCBdID09IFwiY291bnRyeVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudHJ5ID0gdi5sb25nX25hbWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBldmVudERhdGEgPSAkLmV4dGVuZCh7fSwgZXZlbnREYXRhLCB7c3RhdGU6IHN0YXRlLCBjb3VudHJ5OiBjb3VudHJ5LCBhZGRyZXNzOiBhZGRyZXNzfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoZG9jdW1lbnQpLnRyaWdnZXIoJ21hcC5tYXJrZXIuZmluZCcsIGV2ZW50RGF0YSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgdmFyIGJpbmRGaW5kID0gZnVuY3Rpb24obWFya2VyLCBtYXJrZXJEYXRhLCBkYXRhKSB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBtYXJrZXJEYXRhLm9wZW4gIT09ICd1bmRlZmluZWQnICYmIG1hcmtlckRhdGEub3BlbiA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZmluZChkYXRhLCBtYXJrZXJEYXRhLmxhdExuZywgbWFya2VyLCBtYXJrZXJEYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlciwgJ2RyYWdlbmQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZmluZChkYXRhLCBlLmxhdExuZywgdGhpcywgbWFya2VyRGF0YSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlciwgJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGZpbmQoZGF0YSwgZS5sYXRMbmcsIHRoaXMsIG1hcmtlckRhdGEpO1xuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICAkKGRvY3VtZW50KS5vbignbWFwLmluaXQnLCBmdW5jdGlvbiAoZXZlbnQsIGRhdGEpIHtcblxuICAgICAgICBpZiAoZGF0YS5jb250YWluZXIuZGF0YSgnaWQnKSA9PSAnbWFwLWVkaXQnKSB7XG5cbiAgICAgICAgICAgIHZhciBtYXJrZXJzID0gZGF0YS5jb250YWluZXIuZ21hcCgnZ2V0JywgJ21hcmtlcnMnKSxcbiAgICAgICAgICAgICAgICBtYXJrZXJPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBcImRyYWdnYWJsZVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtYXJrZXJEYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBcIm9wZW5cIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZW1wbGF0ZVwiOiBcInRwbC1lZGl0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaWNvblwiOiBcImJ1aWxkaW5nLTAxXCJcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihkYXRhLm1hcCwgJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG5cbiAgICAgICAgICAgICAgICBtYXJrZXJEYXRhID0gJC5leHRlbmQoe30sIG1hcmtlckRhdGEsIHtcImxhdExuZ1wiOiBldmVudC5sYXRMbmd9KTtcblxuICAgICAgICAgICAgICAgIHZhciBtYXJrZXIgPSBkYXRhLmFkZE1hcmtlcihtYXJrZXJzLmxlbmd0aCwgbWFya2VyRGF0YSwgbWFya2VyT3B0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICBiaW5kRmluZChtYXJrZXIsIG1hcmtlckRhdGEsIGRhdGEpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIoZGF0YS5pdy53aW5kb3csICdkb21yZWFkeScsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgICQoJyNtYXAtZGVsZXRlLW1hcmtlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpZCA9ICQodGhpcykuZGF0YSgnaWQnKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5pdy5jbG9zZShpZCk7XG4gICAgICAgICAgICAgICAgICAgIG1hcmtlcnNbIGlkIF0uc2V0TWFwKG51bGwpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJC5lYWNoKG1hcmtlcnMsIGZ1bmN0aW9uKGksIG1hcmtlcil7XG5cbiAgICAgICAgICAgICAgICB2YXIgbWFya2VyRGF0YSA9IG1hcmtlci5nZXQoJ2NvbnRlbnQnKTtcblxuICAgICAgICAgICAgICAgIGJpbmRGaW5kKG1hcmtlciwgbWFya2VyRGF0YSwgZGF0YSk7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ21hcC5tYXJrZXIuZmluZCcsIGZ1bmN0aW9uIChldmVudCwgZGF0YSkge1xuXG4gICAgICAgIGRhdGEubWFya2VyLnNldFRpdGxlKGRhdGEuYWRkcmVzcyk7XG5cbiAgICAgICAgaWYgKGRhdGEuaXcud2luZG93LmlzT3BlbiA9PT0gZmFsc2UpIHJldHVybjtcblxuICAgICAgICBkYXRhLml3Lm9wZW4oZGF0YS5tYXJrZXIuZ2V0KCdpZCcpLCBkYXRhKTtcblxuICAgIH0pO1xuXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgdmFyIGFycmF5VW5pcXVlID0gZnVuY3Rpb24oYSkge1xuICAgICAgICByZXR1cm4gYS5yZWR1Y2UoZnVuY3Rpb24ocCwgYykge1xuICAgICAgICAgICAgaWYgKHAuaW5kZXhPZihjKSA8IDApIHAucHVzaChjKTtcbiAgICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICB9LCBbXSk7XG4gICAgfTtcblxuICAgIHZhciBmaWx0ZXIgPSBmdW5jdGlvbihkYXRhKXtcblxuICAgICAgICBkYXRhLml3LmNsb3NlKCk7XG4gICAgICAgIGRhdGEuY29udGFpbmVyLmdtYXAoJ3NldCcsICdib3VuZHMnLCBudWxsKTtcblxuICAgICAgICB2YXIgZmlsdGVycyA9IFtdO1xuXG4gICAgICAgICQoJyNyYWRpb3MgOmNoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uIChpLCBjaGVja2JveCkge1xuICAgICAgICAgICAgZmlsdGVycy5wdXNoKCQoY2hlY2tib3gpLnZhbCgpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGZpbHRlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBkYXRhLmNvbnRhaW5lci5nbWFwKCdmaW5kJywgJ21hcmtlcnMnLCB7XG4gICAgICAgICAgICAgICAgJ3Byb3BlcnR5JzogJ3RhZ3MnLFxuICAgICAgICAgICAgICAgICd2YWx1ZSc6IGZpbHRlcnMsXG4gICAgICAgICAgICAgICAgJ29wZXJhdG9yJzogJ09SJ1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKG1hcmtlciwgZm91bmQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5jb250YWluZXIuZ21hcCgnYWRkQm91bmRzJywgbWFya2VyLnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWFya2VyLnNldFZpc2libGUoZm91bmQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkLmVhY2goZGF0YS5jb250YWluZXIuZ21hcCgnZ2V0JywgJ21hcmtlcnMnKSwgZnVuY3Rpb24gKGksIG1hcmtlcikge1xuICAgICAgICAgICAgICAgIGRhdGEuY29udGFpbmVyLmdtYXAoJ2FkZEJvdW5kcycsIG1hcmtlci5wb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgbWFya2VyLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICAkKGRvY3VtZW50KS5vbignbWFwLmluaXQnLCBmdW5jdGlvbiAoZXZlbnQsIGRhdGEpIHtcblxuICAgICAgICBpZiAoZGF0YS5jb250YWluZXIuZGF0YSgnZmlsdGVycycpID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgIHZhciBtYXAgPSBkYXRhLFxuICAgICAgICAgICAgICAgIG1hcmtlcnMgPSBkYXRhLmNvbnRhaW5lci5nbWFwKCdnZXQnLCAnbWFya2VycycpLFxuICAgICAgICAgICAgICAgIHRhZ3MgPSBbXSxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZUlkID0gZGF0YS5jb250YWluZXIuZGF0YSgnZmlsdGVyc1RlbXBsYXRlJykgfHwgJyNtYXAtZmlsdGVycy10ZW1wbGF0ZSc7XG5cbiAgICAgICAgICAgICQuZWFjaChtYXJrZXJzLCBmdW5jdGlvbihpLCBtYXJrZXIpe1xuICAgICAgICAgICAgICAgICQuZWFjaChtYXJrZXIudGFncywgZnVuY3Rpb24oaSwgdGFnKXtcbiAgICAgICAgICAgICAgICAgICAgdGFncy5wdXNoKHRhZyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGFncyA9IGFycmF5VW5pcXVlKHRhZ3MpO1xuXG4gICAgICAgICAgICB2YXIgc291cmNlID0gJCh0ZW1wbGF0ZUlkKS5odG1sKCk7XG4gICAgICAgICAgICB2YXIgdGVtcGxhdGUgPSBIYW5kbGViYXJzLmNvbXBpbGUoc291cmNlKTtcbiAgICAgICAgICAgIHZhciAkZWwgPSAkKHRlbXBsYXRlKHsgdGFnczogdGFncyB9KSk7XG5cbiAgICAgICAgICAgICRlbC5pbnNlcnRBZnRlcihkYXRhLmNvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIHZhciBza2luID0gcmVxdWlyZSgnLi4vLi4vLi4vbGF5b3V0L2pzL19za2luJykoKTtcblxuICAgICAgICAgICAgJCgnW2RhdGEtc2Nyb2xsYWJsZV0nLCAkZWwpLm5pY2VTY3JvbGwoe1xuICAgICAgICAgICAgICAgIGN1cnNvcmJvcmRlcjogMCxcbiAgICAgICAgICAgICAgICBjdXJzb3Jjb2xvcjogY29uZmlnLnNraW5zWyBza2luIF1bICdwcmltYXJ5LWNvbG9yJyBdLFxuICAgICAgICAgICAgICAgIGhvcml6cmFpbGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGZpbHRlcihkYXRhKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnI3JhZGlvcyA6Y2hlY2tib3gnLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGZpbHRlcihkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgIH0pO1xuXG59KShqUXVlcnkpOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXG4gICAgdmFyIGNlbnRlcldpbmRvdyA9IGZ1bmN0aW9uIChjb250YWluZXIsIG1hcCwgZGF0YSkge1xuXG4gICAgICAgIGlmIChkYXRhLmxhdCAmJiBkYXRhLmxuZykge1xuXG4gICAgICAgICAgICBjb250YWluZXIuZ21hcCgnb3B0aW9uJywgJ2NlbnRlcicsIG5ldyBnb29nbGUubWFwcy5MYXRMbmcoZGF0YS5sYXQsIGRhdGEubG5nKSk7XG5cbiAgICAgICAgICAgIG1hcC5wYW5CeSgwLCAtMTcwKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIHZhciBjZW50ZXJNYXAgPSBmdW5jdGlvbiAoY29udGFpbmVyLCBkYXRhKSB7XG5cbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGggPT09IDIpIHtcblxuICAgICAgICAgICAgY29udGFpbmVyLmdtYXAoJ29wdGlvbicsICdjZW50ZXInLCBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGRhdGFbIDAgXSwgZGF0YVsgMSBdKSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICB2YXIgcmVzaXplID0gZnVuY3Rpb24gKGNvbnRhaW5lciwgbWFwLCB3aW5kb3dEYXRhLCBtYXBEYXRhKSB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBnb29nbGUgPT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcblxuICAgICAgICBnb29nbGUubWFwcy5ldmVudC50cmlnZ2VyKG1hcCwgJ3Jlc2l6ZScpO1xuXG4gICAgICAgIGlmICghIGNlbnRlck1hcChjb250YWluZXIsIG1hcERhdGEpKSBjZW50ZXJXaW5kb3coY29udGFpbmVyLCBtYXAsIHdpbmRvd0RhdGEpO1xuXG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGNlbnRlcldpbmRvdzogY2VudGVyV2luZG93LFxuICAgICAgICBjZW50ZXJNYXA6IGNlbnRlck1hcCxcbiAgICAgICAgcmVzaXplOiByZXNpemVcbiAgICB9O1xuXG59OyIsImZ1bmN0aW9uIGxvYWRTY3JpcHQoKSB7XG4gICAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgc2NyaXB0LnNyYyA9ICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/dj0zLmV4cCYnICtcbiAgICAnY2FsbGJhY2s9aW5pdEdvb2dsZU1hcHMnO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn1cblxud2luZG93Lm9ubG9hZCA9IGxvYWRTY3JpcHQ7XG5cbmZ1bmN0aW9uIGluaXRTY3JpcHRzKCkge1xuICAgIHZhciAkc2NyaXB0cyA9IFtcbiAgICAgICAgXCJqcy92ZW5kb3IvbWFwcy9nb29nbGUvanF1ZXJ5LXVpLW1hcC91aS9qcXVlcnkudWkubWFwLmpzXCIsXG4gICAgICAgIFwianMvdmVuZG9yL21hcHMvZ29vZ2xlL2pxdWVyeS11aS1tYXAvdWkvanF1ZXJ5LnVpLm1hcC5leHRlbnNpb25zLmpzXCIsXG4gICAgICAgIFwianMvdmVuZG9yL21hcHMvZ29vZ2xlL2pxdWVyeS11aS1tYXAvdWkvanF1ZXJ5LnVpLm1hcC5zZXJ2aWNlcy5qc1wiLFxuICAgICAgICBcImpzL3ZlbmRvci9tYXBzL2dvb2dsZS9qcXVlcnktdWktbWFwL3VpL2pxdWVyeS51aS5tYXAubWljcm9kYXRhLmpzXCIsXG4gICAgICAgIFwianMvdmVuZG9yL21hcHMvZ29vZ2xlL2pxdWVyeS11aS1tYXAvdWkvanF1ZXJ5LnVpLm1hcC5taWNyb2Zvcm1hdC5qc1wiLFxuICAgICAgICBcImpzL3ZlbmRvci9tYXBzL2dvb2dsZS9qcXVlcnktdWktbWFwL3VpL2pxdWVyeS51aS5tYXAub3ZlcmxheXMuanNcIixcbiAgICAgICAgXCJqcy92ZW5kb3IvbWFwcy9nb29nbGUvanF1ZXJ5LXVpLW1hcC91aS9qcXVlcnkudWkubWFwLnJkZmEuanNcIixcbiAgICAgICAgXCJqcy92ZW5kb3IvbWFwcy9nb29nbGUvanF1ZXJ5LXVpLW1hcC9hZGRvbnMvaW5mb2JveF9wYWNrZWQuanNcIixcbiAgICAgICAgXCJqcy92ZW5kb3IvbWFwcy9nb29nbGUvanF1ZXJ5LXVpLW1hcC9hZGRvbnMvbWFya2VyY2x1c3RlcmVyLm1pbi5qc1wiXG4gICAgXTtcblxuICAgICQuZWFjaCgkc2NyaXB0cywgZnVuY3Rpb24gKGssIHYpIHtcbiAgICAgICAgaWYgKCQoJ1tzcmM9XCInICsgdiArICdcIl0nKS5sZW5ndGgpIHJldHVybiB0cnVlO1xuICAgICAgICB2YXIgc2NyaXB0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG4gICAgICAgIHNjcmlwdE5vZGUuc3JjID0gdjtcbiAgICAgICAgJCgnaGVhZCcpLnByZXBlbmQoJChzY3JpcHROb2RlKSk7XG4gICAgfSk7XG5cbiAgICAkLmV4dGVuZCgkLnVpLmdtYXAucHJvdG90eXBlLCB7XG4gICAgICAgIHBhZ2luYXRpb246IGZ1bmN0aW9uIChwcm9wLCBtYXBEYXRhKSB7XG4gICAgICAgICAgICB2YXIgc291cmNlID0gJChcIiNtYXAtcGFnaW5hdGlvblwiKS5odG1sKCk7XG4gICAgICAgICAgICB2YXIgdGVtcGxhdGUgPSBIYW5kbGViYXJzLmNvbXBpbGUoc291cmNlKTtcbiAgICAgICAgICAgIHZhciAkZWwgPSAkKHRlbXBsYXRlKCkpO1xuXG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIGkgPSAwO1xuICAgICAgICAgICAgcHJvcCA9IHByb3AgfHwgJ3RpdGxlJztcbiAgICAgICAgICAgIHNlbGYuc2V0KCdwYWdpbmF0aW9uJywgZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICBpZiAoYSkge1xuICAgICAgICAgICAgICAgICAgICBpID0gaSArIGI7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtID0gc2VsZi5nZXQoJ21hcmtlcnMnKVsgaSBdO1xuICAgICAgICAgICAgICAgICAgICBtYXBEYXRhLml3Lm9wZW4oaSwgbS5nZXQoJ2NvbnRlbnQnKSk7XG4gICAgICAgICAgICAgICAgICAgICRlbC5maW5kKCcuZGlzcGxheScpLnRleHQobVsgcHJvcCBdKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5nZXQoJ21hcCcpLnBhblRvKG0uZ2V0UG9zaXRpb24oKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZWxmLmdldCgncGFnaW5hdGlvbicpKHRydWUsIDApO1xuICAgICAgICAgICAgJGVsLmZpbmQoJy5iYWNrLWJ0bicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHNlbGYuZ2V0KCdwYWdpbmF0aW9uJykoKGkgPiAwKSwgLSAxLCB0aGlzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJGVsLmZpbmQoJy5md2QtYnRuJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgc2VsZi5nZXQoJ3BhZ2luYXRpb24nKSgoaSA8IHNlbGYuZ2V0KCdtYXJrZXJzJykubGVuZ3RoIC0gMSksIDEsIHRoaXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZWxmLmFkZENvbnRyb2woJGVsLCBnb29nbGUubWFwcy5Db250cm9sUG9zaXRpb25bIG1hcERhdGEub3B0aW9ucy5wYWdpbmF0aW9uUG9zaXRpb24gXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxudmFyIGxpYnJhcnkgPSByZXF1aXJlKCcuL19saWJyYXJ5LmpzJykoKTtcblxuLy8gSG9sZHMgZ29vZ2xlIG1hcHMgc3R5bGVzXG52YXIgc3R5bGVzID0ge1xuICAgIFwibGlnaHQtZ3JleVwiOiByZXF1aXJlKCcuL3N0eWxlcy9fbGlnaHQtZ3JleS5qcycpLFxuICAgIFwibGlnaHQtbW9ub2Nocm9tZVwiOiByZXF1aXJlKCcuL3N0eWxlcy9fbGlnaHQtbW9ub2Nocm9tZS5qcycpLFxuICAgIFwiY29vbC1ncmV5XCI6IHJlcXVpcmUoJy4vc3R5bGVzL19jb29sLWdyZXkuanMnKSxcbiAgICBcImJsdWUtZ3JheVwiOiByZXF1aXJlKCcuL3N0eWxlcy9fYmx1ZS1ncmF5LmpzJyksXG4gICAgXCJwYXBlclwiOiByZXF1aXJlKCcuL3N0eWxlcy9fcGFwZXIuanMnKSxcbiAgICBcImFwcGxlXCI6IHJlcXVpcmUoJy4vc3R5bGVzL19hcHBsZS5qcycpLFxuICAgIFwibGlnaHQtZ3JlZW5cIjogcmVxdWlyZSgnLi9zdHlsZXMvX2xpZ2h0LWdyZWVuLmpzJyksXG4gICAgXCJsZW1vbi10cmVlXCI6IHJlcXVpcmUoJy4vc3R5bGVzL19sZW1vbi10cmVlLmpzJyksXG4gICAgXCJjbGVhbi1jdXRcIjogcmVxdWlyZSgnLi9zdHlsZXMvX2NsZWFuLWN1dC5qcycpLFxuICAgIFwibmF0dXJlXCI6IHJlcXVpcmUoJy4vc3R5bGVzL19uYXR1cmUuanMnKVxufTtcblxuLy8gUHJvY2VzcyB0aGUgaW5mb1dpbmRvdyBjb250ZW50IHZpYSBIYW5kbGViYXJzIHRlbXBsYXRlc1xudmFyIGluZm9XaW5kb3dDb250ZW50ID0gZnVuY3Rpb24gKG1hcmtlcikge1xuICAgIHZhciBzb3VyY2UgPSAkKFwiI1wiICsgbWFya2VyLnRlbXBsYXRlKS5odG1sKCk7XG4gICAgdmFyIHRlbXBsYXRlID0gSGFuZGxlYmFycy5jb21waWxlKHNvdXJjZSk7XG4gICAgcmV0dXJuIHRlbXBsYXRlKG1hcmtlcik7XG59O1xuXG4vKipcbiAqIGpRdWVyeSBwbHVnaW4gd3JhcHBlciBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEFuZ3VsYXIgVUkuVXRpbHM6IGpRdWVyeSBQYXNzdGhyb3VnaFxuICovXG4kLmZuLnRrR29vZ2xlTWFwID0gZnVuY3Rpb24gKCkge1xuXG4gICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgIHZhciBjb250YWluZXIgPSB0aGlzO1xuXG4gICAgaWYgKHR5cGVvZiBnb29nbGUgPT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIEluZm9Cb3ggPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29udGFpbmVyLnRrR29vZ2xlTWFwKCk7XG4gICAgICAgIH0sIDIwMCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICBtYXBab29tUG9zaXRpb246IGNvbnRhaW5lci5kYXRhKCd6b29tUG9zaXRpb24nKSB8fCBcIlRPUF9MRUZUXCIsXG4gICAgICAgIG1hcFpvb206IGNvbnRhaW5lci5kYXRhKCd6b29tJykgfHwgMTYsXG4gICAgICAgIG1hcFN0eWxlOiBjb250YWluZXIuZGF0YSgnc3R5bGUnKSB8fCBcImxpZ2h0LWdyZXlcIixcbiAgICAgICAgbWFwVHlwZTogY29udGFpbmVyLmRhdGEoJ3R5cGUnKSB8fCBcIlJPQURNQVBcIixcbiAgICAgICAgZmlsZTogY29udGFpbmVyLmRhdGEoJ2ZpbGUnKSxcbiAgICAgICAgY2VudGVyOiBjb250YWluZXIuZGF0YSgnY2VudGVyJykgPyBjb250YWluZXIuZGF0YSgnY2VudGVyJykuc3BsaXQoXCIsXCIpIDogZmFsc2UsXG4gICAgICAgIHBhZ2luYXRpb246IGNvbnRhaW5lci5kYXRhKCdwYWdpbmF0aW9uJykgfHwgZmFsc2UsXG4gICAgICAgIHBhZ2luYXRpb25Qb3NpdGlvbjogY29udGFpbmVyLmRhdGEoJ3BhZ2luYXRpb25Qb3NpdGlvbicpIHx8ICdUT1BfTEVGVCcsXG4gICAgICAgIGRyYWdnYWJsZTogY29udGFpbmVyLmRhdGEoJ2RyYWdnYWJsZScpICE9PSBmYWxzZVxuICAgIH07XG5cbiAgICB2YXIgbWFwRGF0YTtcblxuICAgIC8vIHByb3ZpZGUgYSBkZWZhdWx0IG9iamVjdCBmb3IgZGF0YSBjb2xsZWN0ZWQgZnJvbSB0aGUgY3VycmVudGx5IG9wZW5lZCBpbmZvV2luZG93XG4gICAgdmFyIGluZm9XaW5kb3dEYXRhID0ge1xuICAgICAgICBsYXQ6IGZhbHNlLFxuICAgICAgICBsbmc6IGZhbHNlXG4gICAgfTtcblxuICAgIHZhciBpbmZvV2luZG93T3BlbiA9IGZ1bmN0aW9uIChpLCBtYXJrZXIpIHtcblxuICAgICAgICB2YXIgbWFya2VySW5zdCA9IGNvbnRhaW5lci5nbWFwKCdnZXQnLCAnbWFya2VycycpWyBpIF07XG5cbiAgICAgICAgaW5mb1dpbmRvdy5zZXRDb250ZW50KGluZm9XaW5kb3dDb250ZW50KG1hcmtlcikpO1xuICAgICAgICBpbmZvV2luZG93Lm9wZW4obWFwLCBtYXJrZXJJbnN0KTtcbiAgICAgICAgaW5mb1dpbmRvdy5pc09wZW4gPSBpO1xuXG4gICAgICAgIGluZm9XaW5kb3dEYXRhID0ge1xuICAgICAgICAgICAgbGF0OiBtYXJrZXIubGF0aXR1ZGUsXG4gICAgICAgICAgICBsbmc6IG1hcmtlci5sb25naXR1ZGVcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgdmFyIGluZm9XaW5kb3dDbG9zZSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaSA9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgaW5mb1dpbmRvdy5jbG9zZSgpO1xuICAgICAgICAgICAgaW5mb1dpbmRvdy5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgaW5mb1dpbmRvdy5pc09wZW4gIT0gJ3VuZGVmaW5lZCcgJiYgaW5mb1dpbmRvdy5pc09wZW4gPT09IGkpIHtcbiAgICAgICAgICAgIGluZm9XaW5kb3cuY2xvc2UoKTtcbiAgICAgICAgICAgIGluZm9XaW5kb3cuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIC8qIEluZm9Cb3ggKi9cbiAgICB2YXIgaW5mb1dpbmRvdyA9IG5ldyBJbmZvQm94KHtcbiAgICAgICAgbWF4V2lkdGg6IDI0MCxcbiAgICAgICAgYWxpZ25Cb3R0b206IHRydWVcbiAgICB9KTtcblxuICAgIHZhciBhZGRNYXJrZXIgPSBmdW5jdGlvbiAoaSwgbWFya2VyLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBpY29uQmFzZSA9ICdpbWFnZXMvbWFya2Vycy8nO1xuICAgICAgICB2YXIgcG9zaXRpb24gPSB0eXBlb2YgbWFya2VyLmxhdExuZyAhPT0gJ3VuZGVmaW5lZCcgPyBtYXJrZXIubGF0TG5nIDogZmFsc2U7XG4gICAgICAgIGlmICghIHBvc2l0aW9uICYmIHR5cGVvZiBtYXJrZXIubGF0aXR1ZGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtYXJrZXIubG9uZ2l0dWRlICE9PSAndW5kZWZpbmVkJykgcG9zaXRpb24gPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKG1hcmtlci5sYXRpdHVkZSwgbWFya2VyLmxvbmdpdHVkZSk7XG4gICAgICAgIGlmICghIHBvc2l0aW9uKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgdmFyIG1hcmtlck9wdGlvbnMgPSB7XG4gICAgICAgICAgICBcImlkXCI6IGksXG4gICAgICAgICAgICBcInBvc2l0aW9uXCI6IHBvc2l0aW9uLFxuICAgICAgICAgICAgXCJkcmFnZ2FibGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiaWNvblwiOiBpY29uQmFzZSArIG1hcmtlci5pY29uICsgXCIucG5nXCJcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT0gJ29iamVjdCcpIG1hcmtlck9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgbWFya2VyT3B0aW9ucywgb3B0aW9ucyk7XG5cbiAgICAgICAgdmFyIG9wZW4gPSB0eXBlb2YgbWFya2VyLm9wZW4gIT09ICd1bmRlZmluZWQnICYmIG1hcmtlci5vcGVuID09PSB0cnVlO1xuXG4gICAgICAgIGNvbnRhaW5lci5nbWFwKCdhZGRNYXJrZXInLCBtYXJrZXJPcHRpb25zKTtcblxuICAgICAgICB2YXIgbWFya2VySW5zdCA9IGNvbnRhaW5lci5nbWFwKCdnZXQnLCAnbWFya2VycycpWyBpIF07XG5cbiAgICAgICAgbWFya2VySW5zdC5zZXRUaXRsZShtYXJrZXIudGl0bGUpO1xuXG4gICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlckluc3QsICdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghIGluZm9XaW5kb3dDbG9zZShpKSkge1xuICAgICAgICAgICAgICAgIGluZm9XaW5kb3dPcGVuKGksIG1hcmtlcik7XG4gICAgICAgICAgICAgICAgbGlicmFyeS5jZW50ZXJXaW5kb3coY29udGFpbmVyLCBtYXAsIGluZm9XaW5kb3dEYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFya2VySW5zdCwgJ2RyYWdlbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbGF0ID0gbWFya2VySW5zdC5nZXRQb3NpdGlvbigpLmxhdCgpO1xuICAgICAgICAgICAgdmFyIGxuZyA9IG1hcmtlckluc3QuZ2V0UG9zaXRpb24oKS5sbmcoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdcImxhdGl0dWRlXCI6ICcgKyBsYXQgKyAnLCBcImxvbmdpdHVkZVwiOiAnICsgbG5nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIG1hcmtlckRhdGEgPSAkLmV4dGVuZCh7fSwgbWFya2VyLCB7XG4gICAgICAgICAgICBcImlkXCI6IGksXG4gICAgICAgICAgICBcImxhdExuZ1wiOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKG1hcmtlci5sYXRpdHVkZSwgbWFya2VyLmxvbmdpdHVkZSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWFya2VySW5zdC5zZXQoJ2NvbnRlbnQnLCBtYXJrZXJEYXRhKTtcblxuICAgICAgICBpZiAob3BlbikgaW5mb1dpbmRvd09wZW4oaSwgbWFya2VyKTtcblxuICAgICAgICByZXR1cm4gbWFya2VySW5zdDtcbiAgICB9O1xuXG4gICAgY29udGFpbmVyLmdtYXAoXG4gICAgICAgIHtcbiAgICAgICAgICAgICd6b29tQ29udHJvbCc6IHRydWUsXG4gICAgICAgICAgICAnem9vbUNvbnRyb2xPcHRpb25zJzoge1xuICAgICAgICAgICAgICAgICdzdHlsZSc6IGdvb2dsZS5tYXBzLlpvb21Db250cm9sU3R5bGUuU01BTEwsXG4gICAgICAgICAgICAgICAgJ3Bvc2l0aW9uJzogZ29vZ2xlLm1hcHMuQ29udHJvbFBvc2l0aW9uWyBvcHRpb25zLm1hcFpvb21Qb3NpdGlvbiBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3BhbkNvbnRyb2wnOiBmYWxzZSxcbiAgICAgICAgICAgICdzdHJlZXRWaWV3Q29udHJvbCc6IGZhbHNlLFxuICAgICAgICAgICAgJ21hcFR5cGVDb250cm9sJzogZmFsc2UsXG4gICAgICAgICAgICAnb3ZlcnZpZXdNYXBDb250cm9sJzogZmFsc2UsXG4gICAgICAgICAgICAnc2Nyb2xsd2hlZWwnOiBmYWxzZSxcbiAgICAgICAgICAgICdkcmFnZ2FibGUnOiBvcHRpb25zLmRyYWdnYWJsZSxcbiAgICAgICAgICAgICdtYXBUeXBlSWQnOiBnb29nbGUubWFwcy5NYXBUeXBlSWRbIG9wdGlvbnMubWFwVHlwZSBdLFxuICAgICAgICAgICAgJ3pvb20nOiBvcHRpb25zLm1hcFpvb20sXG4gICAgICAgICAgICAnc3R5bGVzJzogc3R5bGVzWyBvcHRpb25zLm1hcFN0eWxlIF1cbiAgICAgICAgfSlcbiAgICAgICAgLmJpbmQoJ2luaXQnLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIG1hcERhdGEgPSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgICAgICAgICAgICAgbWFwOiBtYXAsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgICAgICAgICAgICBhZGRNYXJrZXI6IGFkZE1hcmtlcixcbiAgICAgICAgICAgICAgICBsaWJyYXJ5OiBsaWJyYXJ5LFxuICAgICAgICAgICAgICAgIGl3OiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGluZm9XaW5kb3dEYXRhLFxuICAgICAgICAgICAgICAgICAgICB3aW5kb3c6IGluZm9XaW5kb3csXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGluZm9XaW5kb3dDb250ZW50LFxuICAgICAgICAgICAgICAgICAgICBvcGVuOiBpbmZvV2luZG93T3BlbixcbiAgICAgICAgICAgICAgICAgICAgY2xvc2U6IGluZm9XaW5kb3dDbG9zZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLmZpbGUpIHtcblxuICAgICAgICAgICAgICAgICQuZ2V0SlNPTihvcHRpb25zLmZpbGUsIGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgJC5lYWNoKGRhdGEubWFya2VycywgZnVuY3Rpb24gKGksIG1hcmtlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSB0eXBlb2YgbWFya2VyLm9wdGlvbnMgIT09ICd1bmRlZmluZWQnID8gbWFya2VyLm9wdGlvbnMgOiB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZE1hcmtlcihpLCBtYXJrZXIsIG8pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lck9uY2UobWFwLCAnaWRsZScsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGlicmFyeS5yZXNpemUoY29udGFpbmVyLCBtYXAsIGluZm9XaW5kb3dEYXRhLCBvcHRpb25zLmNlbnRlcik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnBhZ2luYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuZ21hcCgncGFnaW5hdGlvbicsICd0aXRsZScsIG1hcERhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsaWJyYXJ5LmNlbnRlck1hcChjb250YWluZXIsIG9wdGlvbnMuY2VudGVyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXJPbmNlKG1hcCwgJ2lkbGUnLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS50cmlnZ2VyKCdtYXAuaW5pdCcsIG1hcERhdGEpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIoaW5mb1dpbmRvdywgJ2RvbXJlYWR5JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBpdyA9ICQoJy5pbmZvQm94Jyk7XG4gICAgICAgICAgICAgICAgaW5mb1dpbmRvdy5zZXRPcHRpb25zKHtcbiAgICAgICAgICAgICAgICAgICAgcGl4ZWxPZmZzZXQ6IG5ldyBnb29nbGUubWFwcy5TaXplKC0gTWF0aC5hYnMoaXcud2lkdGgoKSAvIDIpLCAtIDQ1KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgICAgICAgICAkKCcuY292ZXInLCBpdykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS50a0NvdmVyKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgIHZhciBtYXAgPSBjb250YWluZXIuZ21hcCgnZ2V0JywgJ21hcCcpO1xuXG4gICAgdmFyIHQ7XG4gICAgJCh3aW5kb3cpLm9uKCdkZWJvdW5jZWRyZXNpemUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0KTtcbiAgICAgICAgdCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGlicmFyeS5yZXNpemUoY29udGFpbmVyLCBtYXAsIGluZm9XaW5kb3dEYXRhLCBvcHRpb25zLmNlbnRlcik7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgfSk7XG5cbiAgICAvLyBoYW5kbGUgbWFwcyBpbiBjb2xsYXBzaWJsZXNcbiAgICAkKCcuY29sbGFwc2UnKS5vbignc2hvd24uYnMuY29sbGFwc2UnLCBmdW5jdGlvbigpe1xuICAgICAgICBpZiAoJChjb250YWluZXIsIHRoaXMpLmxlbmd0aCkge1xuICAgICAgICAgICAgbGlicmFyeS5yZXNpemUoY29udGFpbmVyLCBtYXAsIGluZm9XaW5kb3dEYXRhLCBvcHRpb25zLmNlbnRlcik7XG4gICAgICAgIH1cbiAgICB9KTtcblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgaW5pdFNjcmlwdHMoKTtcblxuICAgIC8qXG4gICAgICogQ2x1c3RlcmluZ1xuICAgICAqL1xuICAgIGlmICgkKCcjZ29vZ2xlLW1hcC1jbHVzdGVyaW5nJykubGVuZ3RoKSB7XG4gICAgICAgIC8vIFdlIG5lZWQgdG8gYmluZCB0aGUgbWFwIHdpdGggdGhlIFwiaW5pdFwiIGV2ZW50IG90aGVyd2lzZSBib3VuZHMgd2lsbCBiZSBudWxsXG4gICAgICAgICQoJyNnb29nbGUtbWFwLWNsdXN0ZXJpbmcnKS5nbWFwKHsnem9vbSc6IDIsICdkaXNhYmxlRGVmYXVsdFVJJzogdHJ1ZX0pLmJpbmQoJ2luaXQnLCBmdW5jdGlvbiAoZXZ0LCBtYXApIHtcbiAgICAgICAgICAgIHZhciBib3VuZHMgPSBtYXAuZ2V0Qm91bmRzKCk7XG4gICAgICAgICAgICB2YXIgc291dGhXZXN0ID0gYm91bmRzLmdldFNvdXRoV2VzdCgpO1xuICAgICAgICAgICAgdmFyIG5vcnRoRWFzdCA9IGJvdW5kcy5nZXROb3J0aEVhc3QoKTtcbiAgICAgICAgICAgIHZhciBsbmdTcGFuID0gbm9ydGhFYXN0LmxuZygpIC0gc291dGhXZXN0LmxuZygpO1xuICAgICAgICAgICAgdmFyIGxhdFNwYW4gPSBub3J0aEVhc3QubGF0KCkgLSBzb3V0aFdlc3QubGF0KCk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIG9wZW5JbmZvV2luZG93KCkge1xuICAgICAgICAgICAgICAgICQoJyNnb29nbGUtbWFwLWNsdXN0ZXJpbmcnKS5nbWFwKCdvcGVuSW5mb1dpbmRvdycsIHtjb250ZW50OiAnSGVsbG8gd29ybGQhJ30sIHRoaXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEwMDA7IGkgKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbGF0ID0gc291dGhXZXN0LmxhdCgpICsgbGF0U3BhbiAqIE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICAgICAgdmFyIGxuZyA9IHNvdXRoV2VzdC5sbmcoKSArIGxuZ1NwYW4gKiBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgICAgICQoJyNnb29nbGUtbWFwLWNsdXN0ZXJpbmcnKS5nbWFwKCdhZGRNYXJrZXInLCB7XG4gICAgICAgICAgICAgICAgICAgICdwb3NpdGlvbic6IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobGF0LCBsbmcpXG4gICAgICAgICAgICAgICAgfSkuY2xpY2sob3BlbkluZm9XaW5kb3cpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCcjZ29vZ2xlLW1hcC1jbHVzdGVyaW5nJykuZ21hcCgnc2V0JywgJ01hcmtlckNsdXN0ZXJlcicsIG5ldyBNYXJrZXJDbHVzdGVyZXIobWFwLCAkKHRoaXMpLmdtYXAoJ2dldCcsICdtYXJrZXJzJykpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59O1xuXG4oZnVuY3Rpb24oJCl7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAkKGRvY3VtZW50KS5vbignbWFwLmluaXQnLCBmdW5jdGlvbiAoZXZlbnQsIGRhdGEpIHtcblxuICAgICAgICB2YXIgc3R5bGVUcGwgPSAkKCcjbWFwLXN0eWxlLXN3aXRjaCcpLFxuICAgICAgICAgICAgdG9nZ2xlU3R5bGVXcmFwcGVyID0gJCgnW2RhdGEtdG9nZ2xlPVwibWFwLXN0eWxlLXN3aXRjaFwiXScpO1xuXG4gICAgICAgIGlmIChzdHlsZVRwbC5sZW5ndGggJiYgdG9nZ2xlU3R5bGVXcmFwcGVyLmxlbmd0aCkge1xuXG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gJCh0b2dnbGVTdHlsZVdyYXBwZXIuZGF0YSgndGFyZ2V0JykpO1xuXG4gICAgICAgICAgICBpZiAoISB0YXJnZXQpIHJldHVybjtcblxuICAgICAgICAgICAgaWYgKGRhdGEuY29udGFpbmVyLmlzKHRhcmdldCkpIHtcblxuICAgICAgICAgICAgICAgIHZhciBzID0gc3R5bGVUcGwuaHRtbCgpO1xuICAgICAgICAgICAgICAgIHZhciB0ID0gSGFuZGxlYmFycy5jb21waWxlKHMpO1xuXG4gICAgICAgICAgICAgICAgdG9nZ2xlU3R5bGVXcmFwcGVyLmh0bWwodCh7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlczogc3R5bGVzXG4gICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICAgICAgJCgnc2VsZWN0JywgdG9nZ2xlU3R5bGVXcmFwcGVyKS52YWwoZGF0YS5vcHRpb25zLm1hcFN0eWxlKTtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgJC5mbi5zZWxlY3RwaWNrZXIgIT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICAgICAgICAgICAgICAkKCcuc2VsZWN0cGlja2VyJywgdG9nZ2xlU3R5bGVXcmFwcGVyKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuc2VsZWN0cGlja2VyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJCh0aGlzKS5kYXRhKCd3aWR0aCcpIHx8ICcxMDAlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHNraW4gPSByZXF1aXJlKCcuLi9fc2tpbicpKCk7XG5cbiAgICAgICAgICAgICAgICAkKCdbZGF0YS1zY3JvbGxhYmxlXScsIHRvZ2dsZVN0eWxlV3JhcHBlcikubmljZVNjcm9sbCh7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcmJvcmRlcjogMCxcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yY29sb3I6IGNvbmZpZy5za2luc1sgc2tpbiBdWyAncHJpbWFyeS1jb2xvcicgXSxcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpyYWlsZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICQoJ3NlbGVjdCcsIHRvZ2dsZVN0eWxlV3JhcHBlcikub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0eWxlID0gdHlwZW9mIHN0eWxlc1sgJCh0aGlzKS52YWwoKSBdID8gc3R5bGVzWyAkKHRoaXMpLnZhbCgpIF0gOiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEgc3R5bGUpIHJldHVybjtcblxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuZ21hcCgnb3B0aW9uJywgJ3N0eWxlcycsIHN0eWxlKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH0pO1xuXG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwiZ29vZ2xlLW1hcHNcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAkKHRoaXMpLnRrR29vZ2xlTWFwKCk7XG5cbiAgICB9KTtcblxufSkoalF1ZXJ5KTtcblxucmVxdWlyZSgnLi9fZWRpdCcpO1xucmVxdWlyZSgnLi9fZmlsdGVycycpOyIsIm1vZHVsZS5leHBvcnRzID0gWyB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcImxhbmRzY2FwZS5tYW5fbWFkZVwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImNvbG9yXCI6IFwiI2Y3ZjFkZlwifSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcImxhbmRzY2FwZS5uYXR1cmFsXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiY29sb3JcIjogXCIjZDBlM2I0XCJ9IF1cbn0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwibGFuZHNjYXBlLm5hdHVyYWwudGVycmFpblwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcInZpc2liaWxpdHlcIjogXCJvZmZcIn0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2lcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1widmlzaWJpbGl0eVwiOiBcIm9mZlwifSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaS5idXNpbmVzc1wiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJ9IF1cbn0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pLm1lZGljYWxcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJjb2xvclwiOiBcIiNmYmQzZGFcIn0gXVxufSwge1wiZmVhdHVyZVR5cGVcIjogXCJwb2kucGFya1wiLCBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIiwgXCJzdHlsZXJzXCI6IFsge1wiY29sb3JcIjogXCIjYmRlNmFiXCJ9IF19LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWRcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuc3Ryb2tlXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1widmlzaWJpbGl0eVwiOiBcIm9mZlwifSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWRcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1widmlzaWJpbGl0eVwiOiBcIm9mZlwifSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5maWxsXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiY29sb3JcIjogXCIjZmZlMTVmXCJ9IF1cbn0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5oaWdod2F5XCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LnN0cm9rZVwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImNvbG9yXCI6IFwiI2VmZDE1MVwifSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuYXJ0ZXJpYWxcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuZmlsbFwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImNvbG9yXCI6IFwiI2ZmZmZmZlwifSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQubG9jYWxcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuZmlsbFwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImNvbG9yXCI6IFwiYmxhY2tcIn0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ0cmFuc2l0LnN0YXRpb24uYWlycG9ydFwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5maWxsXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiY29sb3JcIjogXCIjY2ZiMmRiXCJ9IF1cbn0sIHtcImZlYXR1cmVUeXBlXCI6IFwid2F0ZXJcIiwgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsIFwic3R5bGVyc1wiOiBbIHtcImNvbG9yXCI6IFwiI2EyZGFmMlwifSBdfSBdOyIsIm1vZHVsZS5leHBvcnRzID0gWyB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcIndhdGVyXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1widmlzaWJpbGl0eVwiOiBcIm9uXCJ9LCB7XCJjb2xvclwiOiBcIiNiNWNiZTRcIn0gXVxufSwge1wiZmVhdHVyZVR5cGVcIjogXCJsYW5kc2NhcGVcIiwgXCJzdHlsZXJzXCI6IFsge1wiY29sb3JcIjogXCIjZWZlZmVmXCJ9IF19LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImNvbG9yXCI6IFwiIzgzYTViMFwifSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuYXJ0ZXJpYWxcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJjb2xvclwiOiBcIiNiZGNkZDNcIn0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmxvY2FsXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiY29sb3JcIjogXCIjZmZmZmZmXCJ9IF1cbn0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pLnBhcmtcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJjb2xvclwiOiBcIiNlM2VlZDNcIn0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZVwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcInZpc2liaWxpdHlcIjogXCJvblwifSwge1wibGlnaHRuZXNzXCI6IDMzfSBdXG59LCB7XCJmZWF0dXJlVHlwZVwiOiBcInJvYWRcIn0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pLnBhcmtcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1widmlzaWJpbGl0eVwiOiBcIm9uXCJ9LCB7XCJsaWdodG5lc3NcIjogMjB9IF1cbn0sIHt9LCB7XCJmZWF0dXJlVHlwZVwiOiBcInJvYWRcIiwgXCJzdHlsZXJzXCI6IFsge1wibGlnaHRuZXNzXCI6IDIwfSBdfSBdOyIsIm1vZHVsZS5leHBvcnRzID0gWyB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWRcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJsaWdodG5lc3NcIjogMTAwfSwge1widmlzaWJpbGl0eVwiOiBcInNpbXBsaWZpZWRcIn0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcInZpc2liaWxpdHlcIjogXCJvblwifSwge1wiY29sb3JcIjogXCIjQzZFMkZGXCJ9IF1cbn0sIHtcImZlYXR1cmVUeXBlXCI6IFwicG9pXCIsIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5maWxsXCIsIFwic3R5bGVyc1wiOiBbIHtcImNvbG9yXCI6IFwiI0M1RTNCRlwifSBdfSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LmZpbGxcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJjb2xvclwiOiBcIiNEMUQxQjhcIn0gXVxufSBdOyIsIm1vZHVsZS5leHBvcnRzID0gWyB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcImxhbmRzY2FwZVwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHNcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJ9IF1cbn0sIHtcImZlYXR1cmVUeXBlXCI6IFwidHJhbnNpdFwiLCBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzXCIsIFwic3R5bGVyc1wiOiBbIHtcInZpc2liaWxpdHlcIjogXCJvZmZcIn0gXX0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVsc1wiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcInZpc2liaWxpdHlcIjogXCJvZmZcIn0gXVxufSwge1wiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLCBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzXCIsIFwic3R5bGVyc1wiOiBbIHtcInZpc2liaWxpdHlcIjogXCJvZmZcIn0gXX0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMuaWNvblwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcInZpc2liaWxpdHlcIjogXCJvZmZcIn0gXVxufSwge1wic3R5bGVyc1wiOiBbIHtcImh1ZVwiOiBcIiMwMGFhZmZcIn0sIHtcInNhdHVyYXRpb25cIjogLSAxMDB9LCB7XCJnYW1tYVwiOiAyLjE1fSwge1wibGlnaHRuZXNzXCI6IDEyfSBdfSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJ2aXNpYmlsaXR5XCI6IFwib25cIn0sIHtcImxpZ2h0bmVzc1wiOiAyNH0gXVxufSwge1wiZmVhdHVyZVR5cGVcIjogXCJyb2FkXCIsIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLCBcInN0eWxlcnNcIjogWyB7XCJsaWdodG5lc3NcIjogNTd9IF19IF07IiwibW9kdWxlLmV4cG9ydHMgPSBbIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5oaWdod2F5XCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVsc1wiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImh1ZVwiOiBcIiNmZmZmZmZcIn0sIHtcInNhdHVyYXRpb25cIjogLSAxMDB9LCB7XCJsaWdodG5lc3NcIjogMTAwfSwge1widmlzaWJpbGl0eVwiOiBcIm9mZlwifSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcImxhbmRzY2FwZS5uYXR1cmFsXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImh1ZVwiOiBcIiNmZmZmZmZcIn0sIHtcInNhdHVyYXRpb25cIjogLSAxMDB9LCB7XCJsaWdodG5lc3NcIjogMTAwfSwge1widmlzaWJpbGl0eVwiOiBcIm9uXCJ9IF1cbn0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJodWVcIjogXCIjZmZlOTRmXCJ9LCB7XCJzYXR1cmF0aW9uXCI6IDEwMH0sIHtcImxpZ2h0bmVzc1wiOiA0fSwge1widmlzaWJpbGl0eVwiOiBcIm9uXCJ9IF1cbn0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5oaWdod2F5XCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiaHVlXCI6IFwiI2ZmZTk0ZlwifSwge1wic2F0dXJhdGlvblwiOiAxMDB9LCB7XCJsaWdodG5lc3NcIjogNH0sIHtcInZpc2liaWxpdHlcIjogXCJvblwifSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcIndhdGVyXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiaHVlXCI6IFwiIzMzMzMzM1wifSwge1wic2F0dXJhdGlvblwiOiAtIDEwMH0sIHtcImxpZ2h0bmVzc1wiOiAtIDc0fSwge1widmlzaWJpbGl0eVwiOiBcIm9mZlwifSBdXG59IF07IiwibW9kdWxlLmV4cG9ydHMgPSBbIHtcInN0eWxlcnNcIjogWyB7XCJodWVcIjogXCIjYmFmNGM0XCJ9LCB7XCJzYXR1cmF0aW9uXCI6IDEwfSBdfSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImNvbG9yXCI6IFwiI2VmZmVmZFwifSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcImFsbFwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHNcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJ9IF1cbn0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmVcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1widmlzaWJpbGl0eVwiOiBcIm9uXCJ9IF1cbn0sIHtcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLCBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsIFwic3R5bGVyc1wiOiBbIHtcInZpc2liaWxpdHlcIjogXCJvZmZcIn0gXX0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwidHJhbnNpdFwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJ9IF1cbn0gXTsiLCJtb2R1bGUuZXhwb3J0cyA9IFsge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImNvbG9yXCI6IFwiI2U5ZTllOVwifSwge1wibGlnaHRuZXNzXCI6IDE3fSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcImxhbmRzY2FwZVwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImNvbG9yXCI6IFwiI2Y1ZjVmNVwifSwge1wibGlnaHRuZXNzXCI6IDIwfSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5maWxsXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiY29sb3JcIjogXCIjZmZmZmZmXCJ9LCB7XCJsaWdodG5lc3NcIjogMTd9IF1cbn0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5oaWdod2F5XCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LnN0cm9rZVwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImNvbG9yXCI6IFwiI2ZmZmZmZlwifSwge1wibGlnaHRuZXNzXCI6IDI5fSwge1wid2VpZ2h0XCI6IDAuMn0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmFydGVyaWFsXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiY29sb3JcIjogXCIjZmZmZmZmXCJ9LCB7XCJsaWdodG5lc3NcIjogMTh9IF1cbn0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5sb2NhbFwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImNvbG9yXCI6IFwiI2ZmZmZmZlwifSwge1wibGlnaHRuZXNzXCI6IDE2fSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaVwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImNvbG9yXCI6IFwiI2Y1ZjVmNVwifSwge1wibGlnaHRuZXNzXCI6IDIxfSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaS5wYXJrXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiY29sb3JcIjogXCIjZGVkZWRlXCJ9LCB7XCJsaWdodG5lc3NcIjogMjF9IF1cbn0sIHtcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuc3Ryb2tlXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1widmlzaWJpbGl0eVwiOiBcIm9uXCJ9LCB7XCJjb2xvclwiOiBcIiNmZmZmZmZcIn0sIHtcImxpZ2h0bmVzc1wiOiAxNn0gXVxufSwge1xuICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wic2F0dXJhdGlvblwiOiAzNn0sIHtcImNvbG9yXCI6IFwiIzMzMzMzM1wifSwge1wibGlnaHRuZXNzXCI6IDQwfSBdXG59LCB7XCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy5pY29uXCIsIFwic3R5bGVyc1wiOiBbIHtcInZpc2liaWxpdHlcIjogXCJvZmZcIn0gXX0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwidHJhbnNpdFwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImNvbG9yXCI6IFwiI2YyZjJmMlwifSwge1wibGlnaHRuZXNzXCI6IDE5fSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LmZpbGxcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJjb2xvclwiOiBcIiNmZWZlZmVcIn0sIHtcImxpZ2h0bmVzc1wiOiAyMH0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZVwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5zdHJva2VcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJjb2xvclwiOiBcIiNmZWZlZmVcIn0sIHtcImxpZ2h0bmVzc1wiOiAxN30sIHtcIndlaWdodFwiOiAxLjJ9IF1cbn0gXTsiLCJtb2R1bGUuZXhwb3J0cyA9IFsge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZS5sb2NhbGl0eVwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJodWVcIjogXCIjMmMyZTMzXCJ9LCB7XCJzYXR1cmF0aW9uXCI6IDd9LCB7XCJsaWdodG5lc3NcIjogMTl9LCB7XCJ2aXNpYmlsaXR5XCI6IFwib25cIn0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJsYW5kc2NhcGVcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiaHVlXCI6IFwiI2ZmZmZmZlwifSwge1wic2F0dXJhdGlvblwiOiAtIDEwMH0sIHtcImxpZ2h0bmVzc1wiOiAxMDB9LCB7XCJ2aXNpYmlsaXR5XCI6IFwic2ltcGxpZmllZFwifSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaVwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJodWVcIjogXCIjZmZmZmZmXCJ9LCB7XCJzYXR1cmF0aW9uXCI6IC0gMTAwfSwge1wibGlnaHRuZXNzXCI6IDEwMH0sIHtcInZpc2liaWxpdHlcIjogXCJvZmZcIn0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiaHVlXCI6IFwiI2JiYzBjNFwifSwge1wic2F0dXJhdGlvblwiOiAtIDkzfSwge1wibGlnaHRuZXNzXCI6IDMxfSwge1widmlzaWJpbGl0eVwiOiBcInNpbXBsaWZpZWRcIn0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVsc1wiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImh1ZVwiOiBcIiNiYmMwYzRcIn0sIHtcInNhdHVyYXRpb25cIjogLSA5M30sIHtcImxpZ2h0bmVzc1wiOiAzMX0sIHtcInZpc2liaWxpdHlcIjogXCJvblwifSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuYXJ0ZXJpYWxcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiaHVlXCI6IFwiI2JiYzBjNFwifSwge1wic2F0dXJhdGlvblwiOiAtIDkzfSwge1wibGlnaHRuZXNzXCI6IC0gMn0sIHtcInZpc2liaWxpdHlcIjogXCJzaW1wbGlmaWVkXCJ9IF1cbn0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5sb2NhbFwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImh1ZVwiOiBcIiNlOWViZWRcIn0sIHtcInNhdHVyYXRpb25cIjogLSA5MH0sIHtcImxpZ2h0bmVzc1wiOiAtIDh9LCB7XCJ2aXNpYmlsaXR5XCI6IFwic2ltcGxpZmllZFwifSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInRyYW5zaXRcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiaHVlXCI6IFwiI2U5ZWJlZFwifSwge1wic2F0dXJhdGlvblwiOiAxMH0sIHtcImxpZ2h0bmVzc1wiOiA2OX0sIHtcInZpc2liaWxpdHlcIjogXCJvblwifSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcIndhdGVyXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImh1ZVwiOiBcIiNlOWViZWRcIn0sIHtcInNhdHVyYXRpb25cIjogLSA3OH0sIHtcImxpZ2h0bmVzc1wiOiA2N30sIHtcInZpc2liaWxpdHlcIjogXCJzaW1wbGlmaWVkXCJ9IF1cbn0gXTsiLCJtb2R1bGUuZXhwb3J0cyA9IFsge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJsYW5kc2NhcGVcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJodWVcIjogXCIjRkZBODAwXCJ9LCB7XCJzYXR1cmF0aW9uXCI6IDB9LCB7XCJsaWdodG5lc3NcIjogMH0sIHtcImdhbW1hXCI6IDF9IF1cbn0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5oaWdod2F5XCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiaHVlXCI6IFwiIzUzRkYwMFwifSwge1wic2F0dXJhdGlvblwiOiAtIDczfSwge1wibGlnaHRuZXNzXCI6IDQwfSwge1wiZ2FtbWFcIjogMX0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmFydGVyaWFsXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiaHVlXCI6IFwiI0ZCRkYwMFwifSwge1wic2F0dXJhdGlvblwiOiAwfSwge1wibGlnaHRuZXNzXCI6IDB9LCB7XCJnYW1tYVwiOiAxfSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQubG9jYWxcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJodWVcIjogXCIjMDBGRkZEXCJ9LCB7XCJzYXR1cmF0aW9uXCI6IDB9LCB7XCJsaWdodG5lc3NcIjogMzB9LCB7XCJnYW1tYVwiOiAxfSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcIndhdGVyXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiaHVlXCI6IFwiIzAwQkZGRlwifSwge1wic2F0dXJhdGlvblwiOiA2fSwge1wibGlnaHRuZXNzXCI6IDh9LCB7XCJnYW1tYVwiOiAxfSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaVwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImh1ZVwiOiBcIiM2Nzk3MTRcIn0sIHtcInNhdHVyYXRpb25cIjogMzMuNH0sIHtcImxpZ2h0bmVzc1wiOiAtIDI1LjR9LCB7XCJnYW1tYVwiOiAxfSBdXG59IF07IiwibW9kdWxlLmV4cG9ydHMgPSBbIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmVcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1widmlzaWJpbGl0eVwiOiBcIm9mZlwifSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcImxhbmRzY2FwZVwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJ2aXNpYmlsaXR5XCI6IFwic2ltcGxpZmllZFwifSwge1wiaHVlXCI6IFwiIzAwNjZmZlwifSwge1wic2F0dXJhdGlvblwiOiA3NH0sIHtcImxpZ2h0bmVzc1wiOiAxMDB9IF1cbn0sIHtcImZlYXR1cmVUeXBlXCI6IFwicG9pXCIsIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIiwgXCJzdHlsZXJzXCI6IFsge1widmlzaWJpbGl0eVwiOiBcInNpbXBsaWZpZWRcIn0gXX0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJ2aXNpYmlsaXR5XCI6IFwic2ltcGxpZmllZFwifSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJ9LCB7XCJ3ZWlnaHRcIjogMC42fSwge1wic2F0dXJhdGlvblwiOiAtIDg1fSwge1wibGlnaHRuZXNzXCI6IDYxfSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcInZpc2liaWxpdHlcIjogXCJvblwifSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuYXJ0ZXJpYWxcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1widmlzaWJpbGl0eVwiOiBcIm9mZlwifSBdXG59LCB7XCJmZWF0dXJlVHlwZVwiOiBcInJvYWQubG9jYWxcIiwgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLCBcInN0eWxlcnNcIjogWyB7XCJ2aXNpYmlsaXR5XCI6IFwib25cIn0gXX0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwidHJhbnNpdFwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJ2aXNpYmlsaXR5XCI6IFwic2ltcGxpZmllZFwifSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcIndhdGVyXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcInZpc2liaWxpdHlcIjogXCJzaW1wbGlmaWVkXCJ9LCB7XCJjb2xvclwiOiBcIiM1Zjk0ZmZcIn0sIHtcImxpZ2h0bmVzc1wiOiAyNn0sIHtcImdhbW1hXCI6IDUuODZ9IF1cbn0gXTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICQuZm4udGtGb3JtQ29udHJvbE1hdGVyaWFsID0gZnVuY3Rpb24oKXtcbiAgICAgICAgdGhpc1xuICAgICAgICAgICAgLmJsdXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbCgpKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENsYXNzKCd1c2VkJyk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUNsYXNzKCd1c2VkJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFmdGVyKCc8c3BhbiBjbGFzcz1cIm1hLWZvcm0taGlnaGxpZ2h0XCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwibWEtZm9ybS1iYXJcIj48L3NwYW4+Jyk7XG4gICAgfTtcblxuICAgICQoJy5mb3JtLWNvbnRyb2wtbWF0ZXJpYWwgLmZvcm0tY29udHJvbCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLnRrRm9ybUNvbnRyb2xNYXRlcmlhbCgpO1xuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ3Nob3cuYnMuZHJvcGRvd24nLCBmdW5jdGlvbiAoZSkge1xuXG4gICAgICAgIGlmIChNb2Rlcm5penIudG91Y2ggJiYgJCh3aW5kb3cpLndpZHRoKCkgPCA3NjgpIHJldHVybiB0cnVlO1xuXG4gICAgICAgIHZhciBkZCA9ICQoZS5yZWxhdGVkVGFyZ2V0KS5uZXh0KCcuZHJvcGRvd24tbWVudScpO1xuICAgICAgICB2YXIgZGRIZWlnaHQgPSBkZC5vdXRlckhlaWdodCgpO1xuICAgICAgICBkZC5jc3Moe1xuICAgICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgICAgICB9KTtcbiAgICAgICAgZGQudmVsb2NpdHkoe29wYWNpdHk6IDF9LCB7ZHVyYXRpb246IDY1MCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCd9KTtcbiAgICAgICAgZGQudmVsb2NpdHkoe1xuICAgICAgICAgICAgaGVpZ2h0OiBkZEhlaWdodCxcbiAgICAgICAgICAgIHRvcDogZGQuZGF0YSgndG9wJykgfHwgMFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogNjUwLFxuICAgICAgICAgICAgcXVldWU6IGZhbHNlLFxuICAgICAgICAgICAgZWFzaW5nOiAnZWFzZU91dEN1YmljJyxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZGQuY3NzKHtvdmVyZmxvdzogJ3Zpc2libGUnfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ2hpZGUuYnMuZHJvcGRvd24nLCBmdW5jdGlvbiAoZSkge1xuXG4gICAgICAgIGlmIChNb2Rlcm5penIudG91Y2ggJiYgJCh3aW5kb3cpLndpZHRoKCkgPCA3NjgpIHJldHVybiB0cnVlO1xuXG4gICAgICAgIHZhciBkZCA9ICQoZS5yZWxhdGVkVGFyZ2V0KS5uZXh0KCcuZHJvcGRvd24tbWVudScpO1xuICAgICAgICBkZC52ZWxvY2l0eSh7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgdG9wOiAnMTAwJSdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZHVyYXRpb246IDY1MCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZGQuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICdhdXRvJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxufSkoalF1ZXJ5KTtcbiIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgdmFyIHJpcHBsZSA9IGZ1bmN0aW9uIChlKSB7XG5cbiAgICAgICAgdmFyIGVsLCBpbmssIGQsIHgsIHk7XG5cbiAgICAgICAgZWwgPSAkKHRoaXMpO1xuXG4gICAgICAgIGVsLmFkZENsYXNzKCdyaXBwbGUnKTtcblxuICAgICAgICBpZiAoZWwucGFyZW50cygnLnNpZGViYXItc2tpbi13aGl0ZScpLmxlbmd0aCkge1xuICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ3JpcHBsZS1kYXJrLWZhZGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbC5wYXJlbnRzKCcuc2lkZWJhci1za2luLWRhcmsnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGVsLmFkZENsYXNzKCdyaXBwbGUtbGlnaHQtZmFkZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVsLmlzKCcuYnRuLXdoaXRlJykpIHtcbiAgICAgICAgICAgIGVsLmFkZENsYXNzKCdyaXBwbGUtZGFyay1mYWRlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWwuYXR0cignaHJlZicpICYmICEgZWwuZGF0YSgndG9nZ2xlJykpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmIChlbC5jbG9zZXN0KCcuZHJvcGRvd24tbWVudScpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbiA9IGVsLmF0dHIoJ2hyZWYnKTtcbiAgICAgICAgICAgIH0sIDQwMCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjcmVhdGUgLmluayBlbGVtZW50IGlmIGl0IGRvZXNuJ3QgZXhpc3RcbiAgICAgICAgaWYgKGVsLmZpbmQoXCIuaW5rXCIpLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIGVsLnByZXBlbmQoXCI8c3BhbiBjbGFzcz0naW5rJz48L3NwYW4+XCIpO1xuXG4gICAgICAgIGluayA9IGVsLmZpbmQoXCIuaW5rXCIpO1xuICAgICAgICAvLyBpbiBjYXNlIG9mIHF1aWNrIGRvdWJsZSBjbGlja3Mgc3RvcCB0aGUgcHJldmlvdXMgYW5pbWF0aW9uXG4gICAgICAgIGluay5yZW1vdmVDbGFzcyhcImFuaW1hdGVcIik7XG5cbiAgICAgICAgLy8gc2V0IHNpemUgb2YgLmlua1xuICAgICAgICBpZiAoISBpbmsuaGVpZ2h0KCkgJiYgISBpbmsud2lkdGgoKSkge1xuICAgICAgICAgICAgLy8gdXNlIGVsJ3Mgd2lkdGggb3IgaGVpZ2h0IHdoaWNoZXZlciBpcyBsYXJnZXIgZm9yIHRoZSBkaWFtZXRlciB0byBtYWtlIGEgY2lyY2xlIHdoaWNoIGNhbiBjb3ZlciB0aGUgZW50aXJlIGVsZW1lbnQuXG4gICAgICAgICAgICBkID0gTWF0aC5tYXgoZWwub3V0ZXJXaWR0aCgpLCBlbC5vdXRlckhlaWdodCgpKTtcbiAgICAgICAgICAgIGluay5jc3Moe2hlaWdodDogZCwgd2lkdGg6IGR9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGdldCBjbGljayBjb29yZGluYXRlc1xuICAgICAgICAvLyBsb2dpYyA9IGNsaWNrIGNvb3JkaW5hdGVzIHJlbGF0aXZlIHRvIHBhZ2UgLSBlbCdzIHBvc2l0aW9uIHJlbGF0aXZlIHRvIHBhZ2UgLSBoYWxmIG9mIHNlbGYgaGVpZ2h0L3dpZHRoIHRvIG1ha2UgaXQgY29udHJvbGxhYmxlIGZyb20gdGhlIGNlbnRlcjtcbiAgICAgICAgeCA9IGUucGFnZVggLSBlbC5vZmZzZXQoKS5sZWZ0IC0gaW5rLndpZHRoKCkgLyAyO1xuICAgICAgICB5ID0gZS5wYWdlWSAtIGVsLm9mZnNldCgpLnRvcCAtIGluay5oZWlnaHQoKSAvIDI7XG5cbiAgICAgICAgLy8gc2V0IHRoZSBwb3NpdGlvbiBhbmQgYWRkIGNsYXNzIC5hbmltYXRlXG4gICAgICAgIGluay5jc3Moe3RvcDogeSArICdweCcsIGxlZnQ6IHggKyAncHgnfSkuYWRkQ2xhc3MoXCJhbmltYXRlXCIpO1xuXG4gICAgfTtcblxuICAgIHZhciBsaXN0R3JvdXBNZW51ID0gJCgnLmxpc3QtZ3JvdXAtbWVudSA+IC5saXN0LWdyb3VwLWl0ZW0gPiBhJyksXG4gICAgICAgIGJ1dHRvbiA9ICQoJy5idG4nKSxcbiAgICAgICAgbmF2YmFyTmF2ID0gJCgnLm5hdmJhci1uYXYgPiBsaSA+IGEnKSxcbiAgICAgICAgZHJvcGRvd25NZW51ID0gJCgnLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGEnKSxcbiAgICAgICAgc2lkZWJhck1lbnUgPSAkKCcuc2lkZWJhci1tZW51ID4gbGkgPiBhJyk7XG5cbiAgICB2YXIgYWRkUmlwcGxlID0gJCgpXG4gICAgICAgIC5hZGQobGlzdEdyb3VwTWVudSlcbiAgICAgICAgLmFkZChidXR0b24pXG4gICAgICAgIC5hZGQobmF2YmFyTmF2KVxuICAgICAgICAuYWRkKGRyb3Bkb3duTWVudSlcbiAgICAgICAgLmFkZChzaWRlYmFyTWVudSk7XG5cbiAgICBpZiAoYWRkUmlwcGxlLmxlbmd0aCkge1xuICAgICAgICBhZGRSaXBwbGUuY2xpY2socmlwcGxlKTtcbiAgICB9XG5cbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uICgkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICBhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAgICAgICAuZGlyZWN0aXZlKCdmb3JtQ29udHJvbE1hdGVyaWFsJywgWyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXN0cmljdDogJ0MnLFxyXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLmZpbmQoJy5mb3JtLWNvbnRyb2wnKS50a0Zvcm1Db250cm9sTWF0ZXJpYWwoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IF0pO1xyXG5cclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgdmFyIHJpcHBsZSA9IGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgIHZhciBlbCwgaW5rLCBkLCB4LCB5O1xyXG5cclxuICAgICAgICBlbCA9IGFuZ3VsYXIuZWxlbWVudCh0aGlzKTtcclxuXHJcbiAgICAgICAgZWwuYWRkQ2xhc3MoJ3JpcHBsZScpO1xyXG5cclxuICAgICAgICBpZiAoZWwucGFyZW50cygnLnNpZGViYXItc2tpbi13aGl0ZScpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBlbC5hZGRDbGFzcygncmlwcGxlLWRhcmstZmFkZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGVsLnBhcmVudHMoJy5zaWRlYmFyLXNraW4tZGFyaycpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBlbC5hZGRDbGFzcygncmlwcGxlLWxpZ2h0LWZhZGUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlbC5pcygnLmJ0bi13aGl0ZScpKSB7XHJcbiAgICAgICAgICAgIGVsLmFkZENsYXNzKCdyaXBwbGUtZGFyay1mYWRlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZWwuYXR0cignaHJlZicpICYmICEgZWwuZGF0YSgndG9nZ2xlJykpIHtcclxuXHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24gPSBlbC5hdHRyKCdocmVmJyk7XHJcbiAgICAgICAgICAgIH0sIDQwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjcmVhdGUgLmluayBlbGVtZW50IGlmIGl0IGRvZXNuJ3QgZXhpc3RcclxuICAgICAgICBpZiAoZWwuZmluZChcIi5pbmtcIikubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICBlbC5wcmVwZW5kKFwiPHNwYW4gY2xhc3M9J2luayc+PC9zcGFuPlwiKTtcclxuXHJcbiAgICAgICAgaW5rID0gZWwuZmluZChcIi5pbmtcIik7XHJcbiAgICAgICAgLy8gaW4gY2FzZSBvZiBxdWljayBkb3VibGUgY2xpY2tzIHN0b3AgdGhlIHByZXZpb3VzIGFuaW1hdGlvblxyXG4gICAgICAgIGluay5yZW1vdmVDbGFzcyhcImFuaW1hdGVcIik7XHJcblxyXG4gICAgICAgIC8vIHNldCBzaXplIG9mIC5pbmtcclxuICAgICAgICBpZiAoISBpbmsuaGVpZ2h0KCkgJiYgISBpbmsud2lkdGgoKSkge1xyXG4gICAgICAgICAgICAvLyB1c2UgZWwncyB3aWR0aCBvciBoZWlnaHQgd2hpY2hldmVyIGlzIGxhcmdlciBmb3IgdGhlIGRpYW1ldGVyIHRvIG1ha2UgYSBjaXJjbGUgd2hpY2ggY2FuIGNvdmVyIHRoZSBlbnRpcmUgZWxlbWVudC5cclxuICAgICAgICAgICAgZCA9IE1hdGgubWF4KGVsLm91dGVyV2lkdGgoKSwgZWwub3V0ZXJIZWlnaHQoKSk7XHJcbiAgICAgICAgICAgIGluay5jc3Moe2hlaWdodDogZCwgd2lkdGg6IGR9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGdldCBjbGljayBjb29yZGluYXRlc1xyXG4gICAgICAgIC8vIGxvZ2ljID0gY2xpY2sgY29vcmRpbmF0ZXMgcmVsYXRpdmUgdG8gcGFnZSAtIGVsJ3MgcG9zaXRpb24gcmVsYXRpdmUgdG8gcGFnZSAtIGhhbGYgb2Ygc2VsZiBoZWlnaHQvd2lkdGggdG8gbWFrZSBpdCBjb250cm9sbGFibGUgZnJvbSB0aGUgY2VudGVyO1xyXG4gICAgICAgIHggPSBlLnBhZ2VYIC0gZWwub2Zmc2V0KCkubGVmdCAtIGluay53aWR0aCgpIC8gMjtcclxuICAgICAgICB5ID0gZS5wYWdlWSAtIGVsLm9mZnNldCgpLnRvcCAtIGluay5oZWlnaHQoKSAvIDI7XHJcblxyXG4gICAgICAgIC8vIHNldCB0aGUgcG9zaXRpb24gYW5kIGFkZCBjbGFzcyAuYW5pbWF0ZVxyXG4gICAgICAgIGluay5jc3Moe3RvcDogeSArICdweCcsIGxlZnQ6IHggKyAncHgnfSkuYWRkQ2xhc3MoXCJhbmltYXRlXCIpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgICAgICAgLmRpcmVjdGl2ZSgndWlTcmVmJywgWyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXN0cmljdDogJ0EnLFxyXG4gICAgICAgICAgICAgICAgcHJpb3JpdHk6IDk5OSxcclxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxbIDAgXS5ub2RlTmFtZSA9PSAnQScgfHwgZWxbIDAgXS5ub2RlTmFtZSA9PSAnQlVUVE9OJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5jbGljayhyaXBwbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IF0pXHJcbiAgICAgICAgLmRpcmVjdGl2ZSgnYnRuJywgWyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXN0cmljdDogJ0MnLFxyXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLmNsaWNrKHJpcHBsZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBdKVxyXG4gICAgICAgIC5kaXJlY3RpdmUoJ3NpZGViYXJNZW51JywgWyAnJHRpbWVvdXQnLCBmdW5jdGlvbiAoJHRpbWVvdXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnQycsXHJcbiAgICAgICAgICAgICAgICBwcmlvcml0eTogOTk5LFxyXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWwuZmluZCgnPmxpPmEnKS5jbGljayhyaXBwbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gXSlcclxuICAgICAgICAuZGlyZWN0aXZlKCduYXZiYXJOYXYnLCBbIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnQycsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwuZmluZCgnPmxpPmEnKS5jbGljayhyaXBwbGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gXSlcclxuICAgICAgICAuZGlyZWN0aXZlKCdkcm9wZG93bk1lbnUnLCBbIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnQycsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwuZmluZCgnPmxpPmEnKS5jbGljayhyaXBwbGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gXSk7XHJcblxyXG59KSgpOyIsInJlcXVpcmUoJy4vX3JpcHBsZScpO1xucmVxdWlyZSgnLi9fZm9ybXMnKTsiLCJyZXF1aXJlKCcuL19mb3JtcycpO1xucmVxdWlyZSgnLi9fcmlwcGxlJyk7IiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgICAvLyBGaW5kIGFsbCBZb3VUdWJlIHZpZGVvc1xuICAgIHZhciAkYWxsVmlkZW9zID0gJChcImlmcmFtZVtzcmNePSdodHRwOi8vcGxheWVyLnZpbWVvLmNvbSddLCBpZnJhbWVbc3JjXj0naHR0cDovL3d3dy55b3V0dWJlLmNvbSddXCIpLFxuXG4gICAgLy8gVGhlIGVsZW1lbnQgdGhhdCBpcyBmbHVpZCB3aWR0aFxuICAgICRmbHVpZEVsID0gJChcInBhbmVsXCIpO1xuXG4gICAgLy8gRmlndXJlIG91dCBhbmQgc2F2ZSBhc3BlY3QgcmF0aW8gZm9yIGVhY2ggdmlkZW9cbiAgICAkYWxsVmlkZW9zLmVhY2goZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgLmRhdGEoJ2FzcGVjdFJhdGlvJywgdGhpcy5oZWlnaHQgLyB0aGlzLndpZHRoKVxuXG4gICAgICAgICAgICAvLyBhbmQgcmVtb3ZlIHRoZSBoYXJkIGNvZGVkIHdpZHRoL2hlaWdodFxuICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2hlaWdodCcpXG4gICAgICAgICAgICAucmVtb3ZlQXR0cignd2lkdGgnKTtcblxuICAgIH0pO1xuXG4gICAgLy8gV2hlbiB0aGUgd2luZG93IGlzIHJlc2l6ZWRcbiAgICAkKFwiLmdhbGxlcnktZ3JpZCAucGFuZWxcIikucmVzaXplKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBuZXdXaWR0aCA9ICRmbHVpZEVsLndpZHRoKCk7XG5cbiAgICAgICAgLy8gUmVzaXplIGFsbCB2aWRlb3MgYWNjb3JkaW5nIHRvIHRoZWlyIG93biBhc3BlY3QgcmF0aW9cbiAgICAgICAgJGFsbFZpZGVvcy5lYWNoKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICB2YXIgJGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgICRlbFxuICAgICAgICAgICAgICAgIC53aWR0aChuZXdXaWR0aClcbiAgICAgICAgICAgICAgICAuaGVpZ2h0KG5ld1dpZHRoICogJGVsLmRhdGEoJ2FzcGVjdFJhdGlvJykpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgLy8gS2ljayBvZmYgb25lIHJlc2l6ZSB0byBmaXggYWxsIHZpZGVvcyBvbiBwYWdlIGxvYWRcbiAgICB9KS5yZXNpemUoKTtcblxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24gKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4gICAgICAgIC5kaXJlY3RpdmUoJ293bEJhc2ljJywgWyAnJHRpbWVvdXQnLCBmdW5jdGlvbiAoJHRpbWVvdXQpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6ICdDJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsKSB7XG4gICAgICAgICAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC50a093bERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IF0pXG4gICAgICAgIC5kaXJlY3RpdmUoJ293bE1peGVkJywgWyAnJHRpbWVvdXQnLCBmdW5jdGlvbiAoJHRpbWVvdXQpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6ICdDJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsKSB7XG4gICAgICAgICAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC50a093bE1peGVkKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBdKVxuICAgICAgICAuZGlyZWN0aXZlKCdvd2xQcmV2aWV3JywgWyAnJHRpbWVvdXQnLCBmdW5jdGlvbiAoJHRpbWVvdXQpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6ICdDJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsKSB7XG4gICAgICAgICAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC50a093bFByZXZpZXcoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IF0pO1xuXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBhbmd1bGFyLm1vZHVsZSgnYXBwJylcbiAgICAgICAgLmRpcmVjdGl2ZSgnc2xpY2tCYXNpYycsIFsgJyR0aW1lb3V0JywgZnVuY3Rpb24gKCR0aW1lb3V0KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnQycsXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCkge1xuICAgICAgICAgICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwudGtTbGlja0RlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IF0pO1xuXG59KSgpOyIsInJlcXVpcmUoJy4vX293bCcpO1xucmVxdWlyZSgnLi9fc2xpY2snKTsiLCJyZXF1aXJlKCcuL293bC9tYWluJyk7XG5yZXF1aXJlKCcuL3NsaWNrL19kZWZhdWx0Jyk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvKipcbiAgICAgKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAgICAgKi9cbiAgICAkLmZuLnRrT3dsRGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBjID0gdGhpcztcbiAgICAgICAgYy5vd2xDYXJvdXNlbCh7XG4gICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgaXRlbXM6IGMuZGF0YSgnaXRlbXMnKSB8fCA0LFxuICAgICAgICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAgICAgICAgIDEyMDA6IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IGMuZGF0YSgnaXRlbXNMZycpIHx8IDRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIDk5Mjoge1xuICAgICAgICAgICAgICAgICAgICBpdGVtczogYy5kYXRhKCdpdGVtc01nJykgfHwgM1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgNzY4OiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBjLmRhdGEoJ2l0ZW1zU20nKSB8fCAzXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICA0ODA6IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IGMuZGF0YSgnaXRlbXNYcycpIHx8IDJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIDA6IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcnRsOiB0aGlzLmRhdGEoJ3J0bCcpLFxuICAgICAgICAgICAgYWZ0ZXJVcGRhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcigncmVzaXplJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgICQoXCIub3dsLWJhc2ljXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLnRrT3dsRGVmYXVsdCgpO1xuICAgIH0pO1xuXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgLyoqXG4gICAgICogalF1ZXJ5IHBsdWdpbiB3cmFwcGVyIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQW5ndWxhciBVSS5VdGlsczogalF1ZXJ5IFBhc3N0aHJvdWdoXG4gICAgICovXG4gICAgJC5mbi50a093bE1peGVkID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5vd2xDYXJvdXNlbCh7XG4gICAgICAgICAgICBpdGVtczogMixcbiAgICAgICAgICAgIG5hdjogdHJ1ZSxcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgcnRsOiB0aGlzLmRhdGEoJ3J0bCcpLFxuICAgICAgICAgICAgbmF2VGV4dDogWyAnPGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLWxlZnRcIj48L2k+JywgJzxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1yaWdodFwiPjwvaT4nIF0sXG4gICAgICAgICAgICByZXNwb25zaXZlOiB7XG4gICAgICAgICAgICAgICAgMTIwMDoge1xuICAgICAgICAgICAgICAgICAgICBpdGVtczogMlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgMDoge1xuICAgICAgICAgICAgICAgICAgICBpdGVtczogMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgJChcIi5vd2wtbWl4ZWRcIikudGtPd2xNaXhlZCgpO1xuXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgdmFyIHN5bmNQb3NpdGlvbiA9IGZ1bmN0aW9uIChlLCB0YXJnZXQpIHtcbiAgICAgICAgaWYgKGUubmFtZXNwYWNlICYmIGUucHJvcGVydHkubmFtZSA9PT0gJ2l0ZW1zJykge1xuICAgICAgICAgICAgdGFyZ2V0LnRyaWdnZXIoJ3RvLm93bC5jYXJvdXNlbCcsIFtlLml0ZW0uaW5kZXgsIDMwMCwgdHJ1ZV0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIGpRdWVyeSBwbHVnaW4gd3JhcHBlciBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEFuZ3VsYXIgVUkuVXRpbHM6IGpRdWVyeSBQYXNzdGhyb3VnaFxuICAgICAqL1xuICAgICQuZm4udGtPd2xQcmV2aWV3ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgdmFyIHRhcmdldCA9ICQodGhpcy5kYXRhKCdzeW5jJykpLFxuICAgICAgICAgICAgcHJldmlldyA9IHRoaXMsXG4gICAgICAgICAgICBydGwgPSB0aGlzLmRhdGEoJ3J0bCcpO1xuXG4gICAgICAgIGlmICghIHRhcmdldC5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICB0aGlzLm93bENhcm91c2VsKHtcbiAgICAgICAgICAgIGl0ZW1zOiAxLFxuICAgICAgICAgICAgc2xpZGVTcGVlZDogMTAwMCxcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZVJlZnJlc2hSYXRlOiAyMDAsXG4gICAgICAgICAgICBydGw6IHJ0bCxcbiAgICAgICAgICAgIG5hdjogdHJ1ZSxcbiAgICAgICAgICAgIG5hdmlnYXRpb25UZXh0OiBbICc8aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tbGVmdFwiPjwvaT4nLCAnPGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPicgXVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm9uKCdjaGFuZ2Uub3dsLmNhcm91c2VsJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBzeW5jUG9zaXRpb24oZSwgdGFyZ2V0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGFyZ2V0Lm93bENhcm91c2VsKHtcbiAgICAgICAgICAgIGl0ZW1zOiA1LFxuICAgICAgICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAgICAgICAgIDEyMDA6IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIDc2ODoge1xuICAgICAgICAgICAgICAgICAgICBpdGVtczogNlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgNDgwOiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAzXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAwOiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgbmF2OiB0cnVlLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZVJlZnJlc2hSYXRlOiAxMDAsXG4gICAgICAgICAgICBydGw6IHJ0bCxcbiAgICAgICAgICAgIGFmdGVySW5pdDogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgICAgZWwuZmluZChcIi5vd2wtaXRlbVwiKS5lcSgwKS5hZGRDbGFzcyhcInN5bmNlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGFyZ2V0Lm9uKCdjaGFuZ2Uub3dsLmNhcm91c2VsJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBzeW5jUG9zaXRpb24oZSwgcHJldmlldyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRhcmdldC5maW5kKCcub3dsLWl0ZW0nKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSAkKHRoaXMpLmRhdGEoXCJvd2wtaXRlbVwiKTtcbiAgICAgICAgICAgIHByZXZpZXcudHJpZ2dlcihcInRvLm93bC5jYXJvdXNlbFwiLCBbaXRlbS5pbmRleCwgMzAwLCB0cnVlXSk7XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgICQoXCIub3dsLXByZXZpZXdcIikudGtPd2xQcmV2aWV3KCk7XG5cbn0pKGpRdWVyeSk7IiwicmVxdWlyZSgnLi9fZGVmYXVsdCcpO1xucmVxdWlyZSgnLi9fbWl4ZWQnKTtcbnJlcXVpcmUoJy4vX3ByZXZpZXcnKTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIC8qKlxuICAgICAqIGpRdWVyeSBwbHVnaW4gd3JhcHBlciBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEFuZ3VsYXIgVUkuVXRpbHM6IGpRdWVyeSBQYXNzdGhyb3VnaFxuICAgICAqL1xuICAgICQuZm4udGtTbGlja0RlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBpZiAodHlwZW9mICQuZm4uc2xpY2sgPT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcblxuICAgICAgICB2YXIgYyA9IHRoaXM7XG4gICAgICAgIFxuICAgICAgICBjLnNsaWNrKHtcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IGMuZGF0YSgnaXRlbXMnKSB8fCAzLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogYy5kYXRhKCdpdGVtc0xnJykgfHwgNFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MixcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogYy5kYXRhKCdpdGVtc01kJykgfHwgM1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogYy5kYXRhKCdpdGVtc1NtJykgfHwgM1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogYy5kYXRhKCdpdGVtc1hzJykgfHwgMlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBydGw6IHRoaXMuZGF0YSgncnRsJyksXG4gICAgICAgICAgICBvblNldFBvc2l0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3Jlc2l6ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbignc2lkZWJhci5zaG93bicsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjLnNsaWNrU2V0T3B0aW9uKCdkb3RzJywgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgICQoXCIuc2xpY2stYmFzaWNcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykudGtTbGlja0RlZmF1bHQoKTtcbiAgICB9KTtcblxufSkoalF1ZXJ5KTsiLCIvLyBDYXJvdXNlbHNcbnJlcXVpcmUoJy4vY2Fyb3VzZWwvbWFpbicpO1xuXG4vLyBSZXNwb25zaXZlIFZpZGVvIGlGcmFtZSBGaXhcbnJlcXVpcmUoJy4vX3Jlc3BvbnNpdmUtdmlkZW9zJyk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAkKHdpbmRvdykuYmluZCgnZW50ZXJCcmVha3BvaW50MzIwJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaW1nID0gJCgnLm1lc3NhZ2VzLWxpc3QgLnBhbmVsIHVsIGltZycpO1xuICAgICAgICAkKCcubWVzc2FnZXMtbGlzdCAucGFuZWwgdWwnKS53aWR0aChpbWcuZmlyc3QoKS53aWR0aCgpICogaW1nLmxlbmd0aCk7XG4gICAgfSk7XG5cbiAgICAkKHdpbmRvdykuYmluZCgnZXhpdEJyZWFrcG9pbnQzMjAnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJy5tZXNzYWdlcy1saXN0IC5wYW5lbCB1bCcpLndpZHRoKCdhdXRvJyk7XG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7XG4iLCJyZXF1aXJlKCcuL19icmVha3BvaW50cycpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgdmFyIHJlc3RvcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKFwiaHRtbFwiKS5hZGRDbGFzcygnc2hvdy1zaWRlYmFyJyk7XG4gICAgICAgICAgICAkKCcuc2lkZWJhci5zaWRlYmFyLXZpc2libGUtZGVza3RvcCcpLm5vdCgnOnZpc2libGUnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHNpZGViYXIub3B0aW9ucygkKHRoaXMpKTtcbiAgICAgICAgICAgICAgICBzaWRlYmFyLm9wZW4oJCh0aGlzKS5hdHRyKCdpZCcpLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBoaWRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJChcImh0bWxcIikucmVtb3ZlQ2xhc3MoJ3Nob3ctc2lkZWJhcicpO1xuICAgICAgICAgICAgJCgnLnNpZGViYXI6dmlzaWJsZScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNpZGViYXIuY2xvc2UoJCh0aGlzKS5hdHRyKCdpZCcpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgJCh3aW5kb3cpLmJpbmQoJ2VudGVyQnJlYWtwb2ludDc2OCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCEgJCgnLnNpZGViYXInKS5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgaWYgKCQoJy5oaWRlLXNpZGViYXInKS5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgcmVzdG9yZSgpO1xuICAgIH0pO1xuXG4gICAgJCh3aW5kb3cpLmJpbmQoJ2VudGVyQnJlYWtwb2ludDEwMjQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghICQoJy5zaWRlYmFyJykubGVuZ3RoKSByZXR1cm47XG4gICAgICAgIGlmICgkKCcuaGlkZS1zaWRlYmFyJykubGVuZ3RoKSByZXR1cm47XG4gICAgICAgIHJlc3RvcmUoKTtcbiAgICB9KTtcblxuICAgICQod2luZG93KS5iaW5kKCdlbnRlckJyZWFrcG9pbnQ0ODAnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghICQoJy5zaWRlYmFyJykubGVuZ3RoKSByZXR1cm47XG4gICAgICAgIGhpZGUoKTtcbiAgICB9KTtcblxuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8PSA0ODApIHtcbiAgICAgICAgaWYgKCEgJCgnLnNpZGViYXInKS5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgaGlkZSgpO1xuICAgIH1cblxufSkoalF1ZXJ5KTtcbiIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgLyoqXG4gICAgICogalF1ZXJ5IHBsdWdpbiB3cmFwcGVyIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQW5ndWxhciBVSS5VdGlsczogalF1ZXJ5IFBhc3N0aHJvdWdoXG4gICAgICovXG4gICAgJC5mbi50a1NpZGViYXJDb2xsYXBzZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBzaWRlYmFyID0gdGhpcztcblxuICAgICAgICBzaWRlYmFyLmZpbmQoJy5zaWRlYmFyLW1lbnUgPiBsaSA+IGEnKS5vZmYoJ21vdXNlZW50ZXInKTtcbiAgICAgICAgc2lkZWJhci5maW5kKCcuc2lkZWJhci1tZW51ID4gbGkuZHJvcGRvd24gPiBhJykub2ZmKCdtb3VzZWVudGVyJyk7XG4gICAgICAgIHNpZGViYXIuZmluZCgnLnNpZGViYXItbWVudSA+IGxpID4gYScpLm9mZignbW91c2VlbnRlcicpO1xuICAgICAgICBzaWRlYmFyLmZpbmQoJy5zaWRlYmFyLW1lbnUgPiBsaSA+IGEnKS5vZmYoJ2NsaWNrJyk7XG4gICAgICAgIHNpZGViYXIub2ZmKCdtb3VzZWxlYXZlJyk7XG4gICAgICAgIHNpZGViYXIuZmluZCgnLmRyb3Bkb3duJykub2ZmKCdtb3VzZW92ZXInKTtcbiAgICAgICAgc2lkZWJhci5maW5kKCcuZHJvcGRvd24nKS5vZmYoJ21vdXNlb3V0Jyk7XG5cbiAgICAgICAgJCgnYm9keScpLm9mZignbW91c2VvdXQnLCAnI2Ryb3Bkb3duLXRlbXAgLmRyb3Bkb3duJyk7XG5cbiAgICAgICAgc2lkZWJhci5maW5kKCd1bC5jb2xsYXBzZScpXG4gICAgICAgICAgICAub2ZmKCdzaG93bi5icy5jb2xsYXBzZScpXG4gICAgICAgICAgICAub2ZmKCdzaG93LmJzLmNvbGxhcHNlJylcbiAgICAgICAgICAgIC5vZmYoJ2hpZGUuYnMuY29sbGFwc2UnKVxuICAgICAgICAgICAgLm9mZignaGlkZGVuLmJzLmNvbGxhcHNlJyk7XG5cbiAgICAgICAgc2lkZWJhci5maW5kKCcjZHJvcGRvd24tdGVtcCcpLnJlbW92ZSgpO1xuXG4gICAgICAgIHNpZGViYXIuZmluZCgnLmhhc1N1Ym1lbnUnKS5yZW1vdmVDbGFzcygnZHJvcGRvd24nKVxuICAgICAgICAgICAgLmZpbmQoJz4gdWwnKS5hZGRDbGFzcygnY29sbGFwc2UnKS5yZW1vdmVDbGFzcygnZHJvcGRvd24tbWVudSBzdWJtZW51LWhpZGUgc3VibWVudS1zaG93JylcbiAgICAgICAgICAgIC5lbmQoKVxuICAgICAgICAgICAgLmZpbmQoJz4gYScpLmF0dHIoJ2RhdGEtdG9nZ2xlJywgJ2NvbGxhcHNlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgc2lkZWJhci5maW5kKCcuY29sbGFwc2UnKS5vbignc2hvd24uYnMuY29sbGFwc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzaWRlYmFyLmZpbmQoJ1tkYXRhLXNjcm9sbGFibGVdJykuZ2V0TmljZVNjcm9sbCgpLnJlc2l6ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDb2xsYXBzZVxuICAgICAgICBzaWRlYmFyLmZpbmQoJy5jb2xsYXBzZScpLm9uKCdzaG93LmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB2YXIgcGFyZW50cyA9ICQodGhpcykucGFyZW50cygndWw6Zmlyc3QnKS5maW5kKCc+IGxpLm9wZW4gPiB1bCcpO1xuICAgICAgICAgICAgaWYgKHBhcmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50cy5jb2xsYXBzZSgnaGlkZScpLmNsb3Nlc3QoJy5oYXNTdWJtZW51JykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICQodGhpcykuY2xvc2VzdCgnLmhhc1N1Ym1lbnUnKS5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzaWRlYmFyLmZpbmQoJy5jb2xsYXBzZScpLm9uKCdoaWRkZW4uYnMuY29sbGFwc2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICQodGhpcykuY2xvc2VzdCgnLmhhc1N1Ym1lbnUnKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzaWRlYmFyLmZpbmQoJy5jb2xsYXBzZScpLmNvbGxhcHNlKHsgdG9nZ2xlOiBmYWxzZSB9KTtcblxuICAgIH07XG5cbiAgICAkKCcuc2lkZWJhcltkYXRhLXR5cGU9XCJjb2xsYXBzZVwiXScpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgJCh0aGlzKS50a1NpZGViYXJDb2xsYXBzZSgpO1xuICAgIH0pO1xuXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgLyoqXG4gICAgICogalF1ZXJ5IHBsdWdpbiB3cmFwcGVyIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQW5ndWxhciBVSS5VdGlsczogalF1ZXJ5IFBhc3N0aHJvdWdoXG4gICAgICovXG4gICAgJC5mbi50a1NpZGViYXJEcm9wZG93biA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBzaWRlYmFyID0gdGhpcztcblxuICAgICAgICBzaWRlYmFyLmZpbmQoJy5jb2xsYXBzZScpXG4gICAgICAgICAgICAub2ZmKCdzaG93bi5icy5jb2xsYXBzZScpXG4gICAgICAgICAgICAub2ZmKCdzaG93LmJzLmNvbGxhcHNlJylcbiAgICAgICAgICAgIC5vZmYoJ2hpZGRlbi5icy5jb2xsYXBzZScpO1xuXG4gICAgICAgIHZhciBuaWNlID0gc2lkZWJhci5maW5kKCdbZGF0YS1zY3JvbGxhYmxlXScpLmdldE5pY2VTY3JvbGwoKVsgMCBdO1xuXG4gICAgICAgIG5pY2Uuc2Nyb2xsc3RhcnQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCEgc2lkZWJhci5pcygnW2RhdGEtdHlwZT1cImRyb3Bkb3duXCJdJykpIHJldHVybjtcbiAgICAgICAgICAgIHNpZGViYXIuYWRkQ2xhc3MoJ3Njcm9sbGluZycpO1xuICAgICAgICAgICAgc2lkZWJhci5maW5kKCcjZHJvcGRvd24tdGVtcCA+IHVsID4gbGknKS5lbXB0eSgpO1xuICAgICAgICAgICAgc2lkZWJhci5maW5kKCcjZHJvcGRvd24tdGVtcCcpLmhpZGUoKTtcbiAgICAgICAgICAgIHNpZGViYXIuZmluZCgnLm9wZW4nKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICB9KTtcblxuICAgICAgICBuaWNlLnNjcm9sbGVuZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoISBzaWRlYmFyLmlzKCdbZGF0YS10eXBlPVwiZHJvcGRvd25cIl0nKSkgcmV0dXJuO1xuICAgICAgICAgICAgJC5kYXRhKHRoaXMsICdsYXN0U2Nyb2xsVG9wJywgbmljZS5nZXRTY3JvbGxUb3AoKSk7XG4gICAgICAgICAgICBzaWRlYmFyLnJlbW92ZUNsYXNzKCdzY3JvbGxpbmcnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2lkZWJhci5maW5kKCcuaGFzU3VibWVudScpLmFkZENsYXNzKCdkcm9wZG93bicpLnJlbW92ZUNsYXNzKCdvcGVuJylcbiAgICAgICAgICAgIC5maW5kKCc+IHVsJykuYWRkQ2xhc3MoJ2Ryb3Bkb3duLW1lbnUnKS5yZW1vdmVDbGFzcygnY29sbGFwc2UgaW4nKS5yZW1vdmVBdHRyKCdzdHlsZScpXG4gICAgICAgICAgICAuZW5kKClcbiAgICAgICAgICAgIC5maW5kKCc+IGEnKS5yZW1vdmVDbGFzcygnY29sbGFwc2VkJylcbiAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLXRvZ2dsZScpO1xuXG4gICAgICAgIHNpZGViYXIuZmluZCgnLnNpZGViYXItbWVudSA+IGxpLmRyb3Bkb3duID4gYScpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICB2YXIgYyA9IHNpZGViYXIuZmluZCgnI2Ryb3Bkb3duLXRlbXAnKTtcblxuICAgICAgICAgICAgc2lkZWJhci5maW5kKCcub3BlbicpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICBjLmhpZGUoKTtcblxuICAgICAgICAgICAgaWYgKCEgJCh0aGlzKS5wYXJlbnQoJy5kcm9wZG93bicpLmlzKCcub3BlbicpICYmICEgc2lkZWJhci5pcygnLnNjcm9sbGluZycpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHAgPSAkKHRoaXMpLnBhcmVudCgnLmRyb3Bkb3duJyksXG4gICAgICAgICAgICAgICAgICAgIHQgPSBwLmZpbmQoJz4gLmRyb3Bkb3duLW1lbnUnKS5jbG9uZSgpLnJlbW92ZUNsYXNzKCdzdWJtZW51LWhpZGUnKTtcblxuICAgICAgICAgICAgICAgIGlmICghIGMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGMgPSAkKCc8ZGl2Lz4nKS5hdHRyKCdpZCcsICdkcm9wZG93bi10ZW1wJykuYXBwZW5kVG8oc2lkZWJhcik7XG4gICAgICAgICAgICAgICAgICAgIGMuaHRtbCgnPHVsPjxsaT48L2xpPjwvdWw+Jyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYy5zaG93KCk7XG4gICAgICAgICAgICAgICAgYy5maW5kKCcuZHJvcGRvd24tbWVudScpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIGMgPSBjLmZpbmQoJz4gdWwgPiBsaScpLmNzcyh7b3ZlcmZsb3c6ICd2aXNpYmxlJ30pLmFkZENsYXNzKCdkcm9wZG93biBvcGVuJyk7XG5cbiAgICAgICAgICAgICAgICBwLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgdC5hcHBlbmRUbyhjKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICB0b3A6IHAub2Zmc2V0KCkudG9wIC0gYy5vZmZzZXQoKS50b3AsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6ICcxMDAlJ1xuICAgICAgICAgICAgICAgIH0pLnNob3coKTtcblxuICAgICAgICAgICAgICAgIGlmIChzaWRlYmFyLmlzKCcucmlnaHQnKSkge1xuICAgICAgICAgICAgICAgICAgICB0LmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogJzEwMCUnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2lkZWJhci5maW5kKCcuc2lkZWJhci1tZW51ID4gbGkgPiBhJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIGlmICghICQodGhpcykucGFyZW50KCkuaXMoJy5kcm9wZG93bicpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNpZGViYXIgPSAkKHRoaXMpLmNsb3Nlc3QoJy5zaWRlYmFyJyk7XG4gICAgICAgICAgICAgICAgc2lkZWJhci5maW5kKCcub3BlbicpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgc2lkZWJhci5maW5kKCcjZHJvcGRvd24tdGVtcCcpLmhpZGUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICBzaWRlYmFyLmZpbmQoJy5zaWRlYmFyLW1lbnUgPiBsaSA+IGEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKCQodGhpcykucGFyZW50KCkuaXMoJy5kcm9wZG93bicpKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNpZGViYXIub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoJyNkcm9wZG93bi10ZW1wJykuaGlkZSgpO1xuICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcub3BlbicpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNpZGViYXIuZmluZCgnLmRyb3Bkb3duJykub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ29wZW4nKS5jaGlsZHJlbigndWwnKS5yZW1vdmVDbGFzcygnc3VibWVudS1oaWRlJykuYWRkQ2xhc3MoJ3N1Ym1lbnUtc2hvdycpO1xuICAgICAgICB9KS5vbignbW91c2VvdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCd1bCcpLnJlbW92ZUNsYXNzKCcuc3VibWVudS1zaG93JykuYWRkQ2xhc3MoJ3N1Ym1lbnUtaGlkZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdib2R5Jykub24oJ21vdXNlb3V0JywgJyNkcm9wZG93bi10ZW1wIC5kcm9wZG93bicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoJy5zaWRlYmFyLW1lbnUgLm9wZW4nLCAkKHRoaXMpLmNsb3Nlc3QoJy5zaWRlYmFyJykpLnJlbW92ZUNsYXNzKCcub3BlbicpO1xuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICB2YXIgdHJhbnNmb3JtX2RkID0gZnVuY3Rpb24oKXtcblxuICAgICAgICAkKCcuc2lkZWJhcltkYXRhLXR5cGU9XCJkcm9wZG93blwiXScpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICQodGhpcykudGtTaWRlYmFyRHJvcGRvd24oKTtcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgdmFyIHRyYW5zZm9ybV9jb2xsYXBzZSA9IGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgJCgnLnNpZGViYXJbZGF0YS10eXBlPVwiY29sbGFwc2VcIl0nKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkKHRoaXMpLnRrU2lkZWJhckNvbGxhcHNlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIHRyYW5zZm9ybV9kZCgpO1xuXG4gICAgJCh3aW5kb3cpLmJpbmQoJ2VudGVyQnJlYWtwb2ludDQ4MCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCEgJCgnLnNpZGViYXJbZGF0YS10eXBlPVwiZHJvcGRvd25cIl0nKS5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgJCgnLnNpZGViYXJbZGF0YS10eXBlPVwiZHJvcGRvd25cIl0nKS5hdHRyKCdkYXRhLXR5cGUnLCAnY29sbGFwc2UnKS5hdHRyKCdkYXRhLXRyYW5zZm9ybWVkJywgdHJ1ZSk7XG4gICAgICAgIHRyYW5zZm9ybV9jb2xsYXBzZSgpO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gbWFrZV9kZCgpIHtcbiAgICAgICAgaWYgKCEgJCgnLnNpZGViYXJbZGF0YS10eXBlPVwiY29sbGFwc2VcIl1bZGF0YS10cmFuc2Zvcm1lZF0nKS5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgJCgnLnNpZGViYXJbZGF0YS10eXBlPVwiY29sbGFwc2VcIl1bZGF0YS10cmFuc2Zvcm1lZF0nKS5hdHRyKCdkYXRhLXR5cGUnLCAnZHJvcGRvd24nKS5hdHRyKCdkYXRhLXRyYW5zZm9ybWVkJywgdHJ1ZSk7XG4gICAgICAgIHRyYW5zZm9ybV9kZCgpO1xuICAgIH1cblxuICAgICQod2luZG93KS5iaW5kKCdlbnRlckJyZWFrcG9pbnQ3NjgnLCBtYWtlX2RkKTtcblxuICAgICQod2luZG93KS5iaW5kKCdlbnRlckJyZWFrcG9pbnQxMDI0JywgbWFrZV9kZCk7XG5cbn0pKGpRdWVyeSk7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc2lkZWJhcikge1xuICAgIHJldHVybiB7XG4gICAgICAgIFwidHJhbnNmb3JtLWJ1dHRvblwiOiBzaWRlYmFyLmRhdGEoJ3RyYW5zZm9ybUJ1dHRvbicpID09PSB0cnVlLFxuICAgICAgICBcInRyYW5zZm9ybS1idXR0b24taWNvblwiOiBzaWRlYmFyLmRhdGEoJ3RyYW5zZm9ybUJ1dHRvbkljb24nKSB8fCAnZmEtZWxsaXBzaXMtaCdcbiAgICB9O1xufTsiLCIoZnVuY3Rpb24gKCQpIHtcblxuICAgIHZhciBzaWRlYmFycyA9ICQoJy5zaWRlYmFyJyk7XG5cbiAgICBzaWRlYmFycy5lYWNoKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB2YXIgc2lkZWJhciA9ICQodGhpcyk7XG4gICAgICAgIHZhciBvcHRpb25zID0gcmVxdWlyZSgnLi9fb3B0aW9ucycpKHNpZGViYXIpO1xuXG4gICAgICAgIGlmIChvcHRpb25zWyAndHJhbnNmb3JtLWJ1dHRvbicgXSkge1xuICAgICAgICAgICAgdmFyIGJ1dHRvbiA9ICQoJzxidXR0b24gdHlwZT1cImJ1dHRvblwiPjwvYnV0dG9uPicpO1xuXG4gICAgICAgICAgICBidXR0b25cbiAgICAgICAgICAgICAgICAuYXR0cignZGF0YS10b2dnbGUnLCAnc2lkZWJhci10cmFuc2Zvcm0nKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnYnRuIGJ0bi1kZWZhdWx0JylcbiAgICAgICAgICAgICAgICAuaHRtbCgnPGkgY2xhc3M9XCJmYSAnICsgb3B0aW9uc1sgJ3RyYW5zZm9ybS1idXR0b24taWNvbicgXSArICdcIj48L2k+Jyk7XG5cbiAgICAgICAgICAgIHNpZGViYXIuZmluZCgnLnNpZGViYXItbWVudScpLmFwcGVuZChidXR0b24pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbn0oalF1ZXJ5KSk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAkKCcjc3VibmF2JykuY29sbGFwc2Uoeyd0b2dnbGUnOiBmYWxzZX0pO1xuXG4gICAgZnVuY3Rpb24gbW9iaWxlY2hlY2soKSB7XG4gICAgICAgIHZhciBjaGVjayA9IGZhbHNlO1xuICAgICAgICAoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgIGlmICgvKGFuZHJvaWR8aXBhZHxwbGF5Ym9va3xzaWxrfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgKGNlfHBob25lKXx4ZGF8eGlpbm8vaS50ZXN0KGEpIHx8IC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoYS5zdWJzdHIoMCwgNCkpKVxuICAgICAgICAgICAgICAgIGNoZWNrID0gdHJ1ZTtcbiAgICAgICAgfSkobmF2aWdhdG9yLnVzZXJBZ2VudCB8fCBuYXZpZ2F0b3IudmVuZG9yIHx8IHdpbmRvdy5vcGVyYSk7XG4gICAgICAgIHJldHVybiBjaGVjaztcbiAgICB9XG5cbiAgICAoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgICAgICBlZmZlY3Q6ICdzdC1lZmZlY3QtMScsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDU1MCxcbiAgICAgICAgICAgICAgICBvdmVybGF5OiBmYWxzZVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgY29udGFpbmVyU2VsZWN0b3IgPSAnLnN0LWNvbnRhaW5lcicsXG5cbiAgICAgICAgICAgIGV2ZW50dHlwZSA9IG1vYmlsZWNoZWNrKCkgPyAndG91Y2hzdGFydCcgOiAnY2xpY2snLFxuXG4gICAgICAgICAgICBnZXRMYXlvdXRDbGFzc2VzID0gZnVuY3Rpb24gKHNpZGViYXIsIGRpcmVjdGlvbikge1xuXG4gICAgICAgICAgICAgICAgdmFyIGxheW91dENsYXNzZXMgPSBzaWRlYmFyLmRhdGEoJ2xheW91dENsYXNzZXMnKTtcblxuICAgICAgICAgICAgICAgIGlmICghIGxheW91dENsYXNzZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvZ2dsZUxheW91dCA9IHNpZGViYXIuZGF0YSgndG9nZ2xlTGF5b3V0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdG9nZ2xlTGF5b3V0ID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXRDbGFzc2VzID0gdG9nZ2xlTGF5b3V0LnNwbGl0KFwiLFwiKS5qb2luKFwiIFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZGViYXIuZGF0YSgnbGF5b3V0Q2xhc3NlcycsIGxheW91dENsYXNzZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxheW91dENsYXNzZXM7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSBuZXcgUmVnRXhwKCdzaWRlYmFyLScgKyBkaXJlY3Rpb24gKyAnKFxcXFxTKyknLCAnaWcnKTtcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0Q2xhc3NlcyA9ICQoJ2h0bWwnKS5nZXQoMCkuY2xhc3NOYW1lLm1hdGNoKG1hdGNoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxheW91dENsYXNzZXMgIT09IG51bGwgJiYgbGF5b3V0Q2xhc3Nlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dENsYXNzZXMgPSBsYXlvdXRDbGFzc2VzLmpvaW4oXCIgXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2lkZWJhci5kYXRhKCdsYXlvdXRDbGFzc2VzJywgbGF5b3V0Q2xhc3Nlcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbGF5b3V0Q2xhc3NlcztcblxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZ2V0U2lkZWJhckRhdGFPcHRpb25zID0gZnVuY3Rpb24oc2lkZWJhcil7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBlZmZlY3Q6IHNpZGViYXIuZGF0YSgnZWZmZWN0JyksXG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXk6IHNpZGViYXIuZGF0YSgnb3ZlcmxheScpXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgYW5pbWF0aW5nID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcygnYW5pbWF0aW5nJykpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnYW5pbWF0aW5nJyk7XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdhbmltYXRpbmcnKTtcbiAgICAgICAgICAgICAgICB9LCBkZWZhdWx0cy5kdXJhdGlvbik7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHJlc2V0ID0gZnVuY3Rpb24gKGlkLCBvcHRpb25zKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVyID0gJChjb250YWluZXJTZWxlY3Rvcik7XG5cbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gdHlwZW9mIGlkICE9PSAndW5kZWZpbmVkJyA/ICcjJyArIGlkIDogY29udGFpbmVyLmRhdGEoJ3N0TWVudVRhcmdldCcpLFxuICAgICAgICAgICAgICAgICAgICBzaWRlYmFyID0gJCh0YXJnZXQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCEgc2lkZWJhci5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoISBzaWRlYmFyLmlzKCc6dmlzaWJsZScpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHNpZGViYXIuaGFzQ2xhc3MoJ3NpZGViYXItY2xvc2VkJykpIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgICAgIHZhciBlZmZlY3QgPSB0eXBlb2Ygb3B0aW9ucyAhPT0gJ3VuZGVmaW5lZCcgJiYgb3B0aW9ucy5lZmZlY3QgPyBvcHRpb25zLmVmZmVjdCA6IGNvbnRhaW5lci5kYXRhKCdzdE1lbnVFZmZlY3QnKSxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gc2lkZWJhci5pcygnLmxlZnQnKSA/ICdsJyA6ICdyJyxcbiAgICAgICAgICAgICAgICAgICAgc2l6ZSA9IHNpZGViYXIuZ2V0KDApLmNsYXNzTmFtZS5tYXRjaCgvc2lkZWJhci1zaXplLShcXFMrKS8pLnBvcCgpLFxuICAgICAgICAgICAgICAgICAgICBodG1sQ2xhc3MgPSAnc3QtZWZmZWN0LScgKyBkaXJlY3Rpb24gKyBzaXplLFxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVMYXlvdXQgPSBzaWRlYmFyLmRhdGEoJ3RvZ2dsZUxheW91dCcpLFxuICAgICAgICAgICAgICAgICAgICBsYXlvdXRDbGFzc2VzID0gZ2V0TGF5b3V0Q2xhc3NlcyhzaWRlYmFyLCBkaXJlY3Rpb24pLFxuICAgICAgICAgICAgICAgICAgICBldmVudERhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWRlYmFyOiBzaWRlYmFyLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICQoZG9jdW1lbnQpLnRyaWdnZXIoJ3NpZGViYXIuaGlkZScsIGV2ZW50RGF0YSk7XG5cbiAgICAgICAgICAgICAgICAkKCdbZGF0YS10b2dnbGU9XCJzaWRlYmFyLW1lbnVcIl1baHJlZj1cIicgKyB0YXJnZXQgKyAnXCJdJylcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuY2xvc2VzdCgnbGknKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgJCgnaHRtbCcpLmFkZENsYXNzKGh0bWxDbGFzcyk7XG4gICAgICAgICAgICAgICAgc2lkZWJhci5hZGRDbGFzcyhlZmZlY3QpO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hZGRDbGFzcyhlZmZlY3QpO1xuXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNsYXNzKCdzdC1tZW51LW9wZW4gc3QtcHVzaGVyLW92ZXJsYXknKTtcblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkKCdodG1sJykucmVtb3ZlQ2xhc3MoaHRtbENsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvZ2dsZUxheW91dCkgJCgnaHRtbCcpLnJlbW92ZUNsYXNzKGxheW91dENsYXNzZXMpO1xuICAgICAgICAgICAgICAgICAgICBzaWRlYmFyLnJlbW92ZUNsYXNzKGVmZmVjdCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5nZXQoMCkuY2xhc3NOYW1lID0gJ3N0LWNvbnRhaW5lcic7IC8vIGNsZWFyXG4gICAgICAgICAgICAgICAgICAgIHNpZGViYXIuYWRkQ2xhc3MoJ3NpZGViYXItY2xvc2VkJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS50cmlnZ2VyKCdzaWRlYmFyLmhpZGRlbicsIGV2ZW50RGF0YSk7XG4gICAgICAgICAgICAgICAgfSwgZGVmYXVsdHMuZHVyYXRpb24pO1xuXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBvcGVuID0gZnVuY3Rpb24gKHRhcmdldCwgb3B0aW9ucykge1xuXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9ICQoY29udGFpbmVyU2VsZWN0b3IpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHNpZGViYXIgPSAkKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgaWYgKCEgc2lkZWJhci5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgICAgIC8vIG9uIG1vYmlsZSwgYWxsb3cgb25seSBvbmUgc2lkZWJhciB0byBiZSBvcGVuIGF0IHRoZSBzYW1lIHRpbWVcbiAgICAgICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCA3NjggJiYgY29udGFpbmVyLmhhc0NsYXNzKCdzdC1tZW51LW9wZW4nKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzZXQoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkKCdbZGF0YS10b2dnbGU9XCJzaWRlYmFyLW1lbnVcIl1baHJlZj1cIicgKyB0YXJnZXQgKyAnXCJdJylcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuY2xvc2VzdCgnbGknKVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGVmZmVjdCA9IG9wdGlvbnMuZWZmZWN0LFxuICAgICAgICAgICAgICAgICAgICBvdmVybGF5ID0gb3B0aW9ucy5vdmVybGF5O1xuXG4gICAgICAgICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IHNpZGViYXIuaXMoJy5sZWZ0JykgPyAnbCcgOiAncicsXG4gICAgICAgICAgICAgICAgICAgIHNpemUgPSBzaWRlYmFyLmdldCgwKS5jbGFzc05hbWUubWF0Y2goL3NpZGViYXItc2l6ZS0oXFxTKykvKS5wb3AoKSxcbiAgICAgICAgICAgICAgICAgICAgaHRtbENsYXNzID0gJ3N0LWVmZmVjdC0nICsgZGlyZWN0aW9uICsgc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlTGF5b3V0ID0gc2lkZWJhci5kYXRhKCd0b2dnbGVMYXlvdXQnKSxcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0Q2xhc3NlcyA9IGdldExheW91dENsYXNzZXMoc2lkZWJhciwgZGlyZWN0aW9uKSxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnREYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2lkZWJhcjogc2lkZWJhcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS50cmlnZ2VyKCdzaWRlYmFyLnNob3cnLCBldmVudERhdGEpO1xuXG4gICAgICAgICAgICAgICAgJCgnaHRtbCcpLmFkZENsYXNzKGh0bWxDbGFzcyk7XG4gICAgICAgICAgICAgICAgc2lkZWJhci5zaG93KCkucmVtb3ZlQ2xhc3MoJ3NpZGViYXItY2xvc2VkJyk7XG5cbiAgICAgICAgICAgICAgICBjb250YWluZXIuZGF0YSgnc3RNZW51RWZmZWN0JywgZWZmZWN0KTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuZGF0YSgnc3RNZW51VGFyZ2V0JywgdGFyZ2V0KTtcblxuICAgICAgICAgICAgICAgIHNpZGViYXIuYWRkQ2xhc3MoZWZmZWN0KTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYWRkQ2xhc3MoZWZmZWN0KTtcbiAgICAgICAgICAgICAgICBpZiAob3ZlcmxheSkgY29udGFpbmVyLmFkZENsYXNzKCdzdC1wdXNoZXItb3ZlcmxheScpO1xuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hZGRDbGFzcygnc3QtbWVudS1vcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIHNpZGViYXIuZmluZCgnW2RhdGEtc2Nyb2xsYWJsZV0nKS5nZXROaWNlU2Nyb2xsKCkucmVzaXplKCk7XG4gICAgICAgICAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCdyZXNpemUnKTtcbiAgICAgICAgICAgICAgICB9LCAyNSk7XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvZ2dsZUxheW91dCkgJCgnaHRtbCcpLmFkZENsYXNzKGxheW91dENsYXNzZXMpO1xuICAgICAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS50cmlnZ2VyKCdzaWRlYmFyLnNob3duJywgZXZlbnREYXRhKTtcbiAgICAgICAgICAgICAgICB9LCBkZWZhdWx0cy5kdXJhdGlvbik7XG5cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHRvZ2dsZSA9IGZ1bmN0aW9uIChlKSB7XG5cbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIHZhciBhID0gYW5pbWF0aW5nKCk7XG4gICAgICAgICAgICAgICAgaWYgKGEpIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgICAgIHZhciBidXR0b24gPSAkKHRoaXMpLFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSBidXR0b24uYXR0cignaHJlZicpLFxuICAgICAgICAgICAgICAgICAgICBzaWRlYmFyO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldC5sZW5ndGggPiAzKSB7XG4gICAgICAgICAgICAgICAgICAgIHNpZGViYXIgPSAkKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghIHNpZGViYXIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldC5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50QWN0aXZlRWxlbWVudCA9ICQoJ1tkYXRhLXRvZ2dsZT1cInNpZGViYXItbWVudVwiXScpLm5vdCh0aGlzKS5jbG9zZXN0KCdsaScpLmxlbmd0aCA/ICQoJ1tkYXRhLXRvZ2dsZT1cInNpZGViYXItbWVudVwiXScpLm5vdCh0aGlzKS5jbG9zZXN0KCdsaScpIDogJCgnW2RhdGEtdG9nZ2xlPVwic2lkZWJhci1tZW51XCJdJykubm90KHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYWN0aXZlRWxlbWVudCA9ICQodGhpcykuY2xvc2VzdCgnbGknKS5sZW5ndGggPyAkKHRoaXMpLmNsb3Nlc3QoJ2xpJykgOiAkKHRoaXMpO1xuXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBY3RpdmVFbGVtZW50LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlRWxlbWVudC5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoJ2h0bWwnKS5oYXNDbGFzcygnc2hvdy1zaWRlYmFyJykpIGFjdGl2ZUVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5yZW1vdmVDbGFzcygnc2hvdy1zaWRlYmFyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQuaGFzQ2xhc3MoJ2FjdGl2ZScpKSAkKCdodG1sJykuYWRkQ2xhc3MoJ3Nob3ctc2lkZWJhcicpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIGRhdGFPcHRpb25zID0gZ2V0U2lkZWJhckRhdGFPcHRpb25zKHNpZGViYXIpLFxuICAgICAgICAgICAgICAgICAgICBidXR0b25PcHRpb25zID0ge307XG5cbiAgICAgICAgICAgICAgICBpZiAoYnV0dG9uLmRhdGEoJ2VmZmVjdCcpKSBidXR0b25PcHRpb25zLmVmZmVjdCA9IGJ1dHRvbi5kYXRhKCdlZmZlY3QnKTtcbiAgICAgICAgICAgICAgICBpZiAoYnV0dG9uLmRhdGEoJ292ZXJsYXknKSkgYnV0dG9uT3B0aW9ucy5vdmVybGF5ID0gYnV0dG9uLmRhdGEoJ292ZXJsYXknKTtcblxuICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBkYXRhT3B0aW9ucywgYnV0dG9uT3B0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoISBzaWRlYmFyLmhhc0NsYXNzKCdzaWRlYmFyLWNsb3NlZCcpICYmIHNpZGViYXIuaXMoJzp2aXNpYmxlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzZXQoc2lkZWJhci5hdHRyKCdpZCcpLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG9wZW4odGFyZ2V0LCBvcHRpb25zKTtcblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAkKCdib2R5Jykub24oZXZlbnR0eXBlLCAnW2RhdGEtdG9nZ2xlPVwic2lkZWJhci1tZW51XCJdJywgdG9nZ2xlKTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbigna2V5ZG93bicsIG51bGwsICdlc2MnLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIHZhciBjb250YWluZXIgPSAkKGNvbnRhaW5lclNlbGVjdG9yKTtcblxuICAgICAgICAgICAgaWYgKGNvbnRhaW5lci5oYXNDbGFzcygnc3QtbWVudS1vcGVuJykpIHtcbiAgICAgICAgICAgICAgICByZXNldCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogalF1ZXJ5IHBsdWdpbiB3cmFwcGVyIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQW5ndWxhciBVSS5VdGlsczogalF1ZXJ5IFBhc3N0aHJvdWdoXG4gICAgICAgICAqL1xuICAgICAgICAkLmZuLnRrU2lkZWJhclRvZ2dsZUJhciA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICAgICAgdmFyIHNpZGViYXIgPSB0aGlzO1xuXG4gICAgICAgICAgICAvKiBTaWRlYmFyIFRvZ2dsZSBCYXIgKi9cbiAgICAgICAgICAgIGlmIChzaWRlYmFyLmRhdGEoJ3RvZ2dsZUJhcicpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJhciA9ICQoJzxhPjwvYT4nKTtcbiAgICAgICAgICAgICAgICBiYXIuYXR0cignaHJlZicsICcjJyArIHNpZGViYXIuYXR0cignaWQnKSlcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtdG9nZ2xlJywgJ3NpZGViYXItbWVudScpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2lkZWJhci10b2dnbGUtYmFyJyk7XG5cbiAgICAgICAgICAgICAgICBzaWRlYmFyLmFwcGVuZChiYXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgJCgnLnNpZGViYXInKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkKHRoaXMpLnRrU2lkZWJhclRvZ2dsZUJhcigpO1xuICAgICAgICB9KTtcblxuICAgICAgICB3aW5kb3cuc2lkZWJhciA9IHtcblxuICAgICAgICAgICAgb3BlbjogZnVuY3Rpb24gKGlkLCBvcHRpb25zKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgYSA9IGFuaW1hdGluZygpO1xuICAgICAgICAgICAgICAgIGlmIChhKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBvcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBvcGVuKCcjJyArIGlkLCBvcHRpb25zKTtcblxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uIChpZCwgb3B0aW9ucykge1xuXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzZXQoaWQsIG9wdGlvbnMpO1xuXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBvcHRpb25zOiBnZXRTaWRlYmFyRGF0YU9wdGlvbnNcblxuICAgICAgICB9O1xuXG4gICAgfSkoKTtcblxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgICAgICAgLmRpcmVjdGl2ZSgndHlwZScsIFsgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6ICdBJyxcclxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwsIGF0dHJzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghIGVsLmlzKCcuc2lkZWJhcicpKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJzLnR5cGUgIT09ICdjb2xsYXBzZScpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZWwudGtTaWRlYmFyQ29sbGFwc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IF0pO1xyXG5cclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgICAgICAgLmRpcmVjdGl2ZSgndHlwZScsIFsgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6ICdBJyxcclxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwsIGF0dHJzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghIGVsLmlzKCcuc2lkZWJhcicpKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJzLnR5cGUgIT09ICdkcm9wZG93bicpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZWwudGtTaWRlYmFyRHJvcGRvd24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IF0pO1xyXG5cclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgICAgICAgLmRpcmVjdGl2ZSgndG9nZ2xlQmFyJywgWyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXN0cmljdDogJ0EnLFxyXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCwgYXR0cnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cnMudG9nZ2xlQmFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnRrU2lkZWJhclRvZ2dsZUJhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IF0pO1xyXG5cclxufSkoKTsiLCJyZXF1aXJlKCcuL19zaWRlYmFyLWRyb3Bkb3duJyk7XG5yZXF1aXJlKCcuL19zaWRlYmFyLWNvbGxhcHNlJyk7XG5yZXF1aXJlKCcuL19zaWRlYmFyLXRvZ2dsZS1iYXInKTsiLCJyZXF1aXJlKCcuL19icmVha3BvaW50cycpO1xucmVxdWlyZSgnLi9fc2lkZWJhci1tZW51Jyk7XG5yZXF1aXJlKCcuL19jb2xsYXBzaWJsZScpO1xucmVxdWlyZSgnLi9fZHJvcGRvd24nKTtcbnJlcXVpcmUoJy4vX3NpZGViYXItdG9nZ2xlJyk7XG5cbihmdW5jdGlvbigkKXtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIC8qKlxuICAgICAqIGpRdWVyeSBwbHVnaW4gd3JhcHBlciBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEFuZ3VsYXIgVUkuVXRpbHM6IGpRdWVyeSBQYXNzdGhyb3VnaFxuICAgICAqL1xuICAgICQuZm4udGtTaWRlYmFyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgICAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBzZXR0aW5ncyA9ICQuZXh0ZW5kKHtcbiAgICAgICAgICAgIG1lbnVUeXBlOiBmYWxzZSxcbiAgICAgICAgICAgIHRvZ2dsZUJhcjogZmFsc2VcbiAgICAgICAgfSwgb3B0aW9ucyk7XG5cbiAgICAgICAgdmFyIHNpZGViYXIgPSB0aGlzO1xuXG4gICAgICAgIGlmIChzZXR0aW5ncy5tZW51VHlwZSA9PSBcImNvbGxhcHNlXCIpIHtcbiAgICAgICAgICAgIHNpZGViYXIudGtTaWRlYmFyQ29sbGFwc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZXR0aW5ncy5tZW51VHlwZSA9PSBcImRyb3Bkb3duXCIpIHtcbiAgICAgICAgICAgIHNpZGViYXIudGtTaWRlYmFyRHJvcGRvd24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZXR0aW5ncy50b2dnbGVCYXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHNpZGViYXIudGtTaWRlYmFyVG9nZ2xlQmFyKCk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uKCl7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFtcbiAgICAgICAgJ25nUmVzb3VyY2UnLFxuICAgICAgICAnbmdTYW5pdGl6ZScsXG4gICAgICAgICduZ1RvdWNoJyxcbiAgICAgICAgJ3VpLnJvdXRlcicsXG4gICAgICAgICd1aS51dGlscycsXG4gICAgICAgICd1aS5qcSdcbiAgICBdKTtcblxuICAgIHZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJylcbiAgICAgICAgLmNvbmZpZyhcbiAgICAgICAgWyAnJGNvbnRyb2xsZXJQcm92aWRlcicsICckY29tcGlsZVByb3ZpZGVyJywgJyRmaWx0ZXJQcm92aWRlcicsICckcHJvdmlkZScsICckaW50ZXJwb2xhdGVQcm92aWRlcicsXG4gICAgICAgICAgICBmdW5jdGlvbiAoJGNvbnRyb2xsZXJQcm92aWRlciwgJGNvbXBpbGVQcm92aWRlciwgJGZpbHRlclByb3ZpZGVyLCAkcHJvdmlkZSwgJGludGVycG9sYXRlUHJvdmlkZXIpIHtcbiAgICAgICAgICAgICAgICBhcHAuY29udHJvbGxlciA9ICRjb250cm9sbGVyUHJvdmlkZXIucmVnaXN0ZXI7XG4gICAgICAgICAgICAgICAgYXBwLmRpcmVjdGl2ZSA9ICRjb21waWxlUHJvdmlkZXIuZGlyZWN0aXZlO1xuICAgICAgICAgICAgICAgIGFwcC5maWx0ZXIgPSAkZmlsdGVyUHJvdmlkZXIucmVnaXN0ZXI7XG4gICAgICAgICAgICAgICAgYXBwLmZhY3RvcnkgPSAkcHJvdmlkZS5mYWN0b3J5O1xuICAgICAgICAgICAgICAgIGFwcC5zZXJ2aWNlID0gJHByb3ZpZGUuc2VydmljZTtcbiAgICAgICAgICAgICAgICBhcHAuY29uc3RhbnQgPSAkcHJvdmlkZS5jb25zdGFudDtcbiAgICAgICAgICAgICAgICBhcHAudmFsdWUgPSAkcHJvdmlkZS52YWx1ZTtcblxuICAgICAgICAgICAgICAgICRpbnRlcnBvbGF0ZVByb3ZpZGVyLnN0YXJ0U3ltYm9sKCc6OicpO1xuICAgICAgICAgICAgICAgICRpbnRlcnBvbGF0ZVByb3ZpZGVyLmVuZFN5bWJvbCgnOjonKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSk7XG5cbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcpO1xuICBcbiAgYXBwLmNvbnRyb2xsZXIoJ0FwcEN0cmwnLFxuICAgICAgICAgICAgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmFwcCA9IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxDbGFzczogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5Q2xhc3M6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICRzY29wZS4kc3RhdGUgPSAkc3RhdGU7XG5cbiAgICAgICAgICAgIH0gKTtcbiAgXG4gIGFwcC5jb250cm9sbGVyKCduYXZCYXJDdHJsJywgXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS51c2VyID0ge1xuICAgICAgICAgICAgICAgICAgICBcdFx0bmFtZTonQmlsbCBHYXRlczInXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSApO1xuXG59KSgpOyBcbiIsIihmdW5jdGlvbiAoKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnKTtcbiAgXG4gIGFwcC5jb250cm9sbGVyKCdob21lQ3RybCcsICBmdW5jdGlvbiAoJHNjb3BlLCRyb290U2NvcGUpIHtcblx0ICBcdFxuXHRcdFxuICAgICAgfSk7XG5cbn0pKCk7IFxuIiwiKGZ1bmN0aW9uICgpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuICAgICAgICAuZGlyZWN0aXZlKCd0a0NvdW50ZG93bicsIFsgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICByZXN0cmljdDogJ0MnLFxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgZWwudGtDb3VudGRvd24oKTtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuJG9uKFwiJGRlc3Ryb3lcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLmNvdW50ZG93bigncGF1c2UnKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBdKTtcblxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4gICAgICAgIC5kaXJlY3RpdmUoJ2N1cnJpY3VsdW0nLCBbIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6ICdDJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLnRrQ3VycmljdWx1bSgpO1xuICAgICAgICAgICAgICAgICAgICBlbC5maW5kKCcubGlzdC1ncm91cC1pdGVtJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUuJHN0YXRlLmdvKCQodGhpcykuZGF0YSgndGFyZ2V0JykpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IF0pO1xuXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBhbmd1bGFyLm1vZHVsZSgnYXBwJylcbiAgICAgICAgLmRpcmVjdGl2ZSgndG9nZ2xlJywgWyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCwgYXR0cnMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJzLnRvZ2dsZSA9PSAnZmxvdC1jaGFydC1lYXJuaW5ncycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnRrRmxvdENoYXJ0RWFybmluZ3MoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gXSk7XG5cbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuICAgICAgICAuZGlyZWN0aXZlKCd3aW5kb3dOYXZiYXJUcmFuc2l0aW9uJywgWyAnJHdpbmRvdycsIGZ1bmN0aW9uICgkd2luZG93KSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHNjb3BlLCBlbCkge1xuICAgICAgICAgICAgICAgIGFuZ3VsYXIuZWxlbWVudCgkd2luZG93KS50a1Njcm9sbE5hdmJhclRyYW5zaXRpb24oKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gXSlcbiAgICAgICAgLmRpcmVjdGl2ZSgnc3RDb250ZW50SW5uZXInLCBbIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6ICdDJyxcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLnRrU2Nyb2xsTmF2YmFyVHJhbnNpdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gXSk7XG5cbn0pKCk7IiwiKGZ1bmN0aW9uKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnKTtcblxuXHRhcHAucnVuKFsgJyRyb290U2NvcGUnLCAnJHN0YXRlJywgJyRzdGF0ZVBhcmFtcycsXG5cdFx0XHRmdW5jdGlvbigkcm9vdFNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcykge1xuXHRcdFx0XHQkcm9vdFNjb3BlLiRzdGF0ZSA9ICRzdGF0ZTtcblx0XHRcdFx0JHJvb3RTY29wZS4kc3RhdGVQYXJhbXMgPSAkc3RhdGVQYXJhbXM7XG5cdFx0XHRcdCRyb290U2NvcGUuaHRtbENsYXNzID0ge1xuXHRcdFx0XHRcdFx0d2Vic2l0ZSA6ICd0cmFuc2l0aW9uLW5hdmJhci1zY3JvbGwgdG9wLW5hdmJhci14bGFyZ2UgYm90dG9tLWZvb3RlcicsXG5cdFx0XHRcdFx0XHR3ZWJzaXRlUHJpY2luZyA6ICd0b3AtbmF2YmFyLXhsYXJnZSBib3R0b20tZm9vdGVyIGFwcC1kZXNrdG9wJyxcblx0XHRcdFx0XHRcdHdlYnNpdGVTdXJ2ZXkgOiAndG9wLW5hdmJhci14bGFyZ2UgYm90dG9tLWZvb3RlciBhcHAtZGVza3RvcCBhcHAtbW9iaWxlJyxcblx0XHRcdFx0XHRcdHdlYnNpdGVMb2dpbiA6ICdoaWRlLXNpZGViYXIgbHMtYm90dG9tLWZvb3RlcicsXG5cdFx0XHRcdFx0XHR3ZWJzaXRlVGFrZVF1aXogOiAndHJhbnNpdGlvbi1uYXZiYXItc2Nyb2xsIHRvcC1uYXZiYXIteGxhcmdlIGJvdHRvbS1mb290ZXIgYXBwLWRlc2t0b3AgYXBwLW1vYmlsZScsXG5cdFx0XHRcdFx0XHRhcHBsMyA6ICdzdC1sYXlvdXQgbHMtdG9wLW5hdmJhci1sYXJnZSBscy1ib3R0b20tZm9vdGVyIHNob3ctc2lkZWJhciBzaWRlYmFyLWwzJyxcblx0XHRcdFx0XHRcdGFwcGwxcjMgOiAnc3QtbGF5b3V0IGxzLXRvcC1uYXZiYXItbGFyZ2UgbHMtYm90dG9tLWZvb3RlciBzaG93LXNpZGViYXIgc2lkZWJhci1sMSBzaWRlYmFyLXIzJ1xuXHRcdFx0XHRcdH07XG5cdFx0XHR9IF0pO1xuXHRcblx0YXBwLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG5cblx0XHRcdFx0JHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL3dlYnNpdGUtcGFnZXMvaG9tZScpO1xuXG5cdFx0XHRcdCRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdsb2dpbicsIHtcblx0XHRcdFx0XHR1cmwgOiAnL2xvZ2luJyxcblx0XHRcdFx0XHR0ZW1wbGF0ZVVybCA6ICd3ZWJzaXRlL2xvZ2luLmh0bWwnLFxuXHRcdFx0XHRcdGNvbnRyb2xsZXIgOiBbICckc2NvcGUnLCckcm9vdFNjb3BlJywgZnVuY3Rpb24oJHNjb3BlLCRyb290U2NvcGUpIHtcblx0XHRcdFx0XHRcdCRzY29wZS5hcHAuc2V0dGluZ3MuaHRtbENsYXNzID0gJHJvb3RTY29wZS5odG1sQ2xhc3Mud2Vic2l0ZUxvZ2luO1xuXHRcdFx0XHRcdFx0JHNjb3BlLmFwcC5zZXR0aW5ncy5ib2R5Q2xhc3MgPSAnbG9naW4nO1xuXHRcdFx0XHRcdH0gXVxuXHRcdFx0XHR9KS5zdGF0ZSgnc2lnbi11cCcsIHtcblx0XHRcdFx0XHR1cmwgOiAnL3NpZ24tdXAnLFxuXHRcdFx0XHRcdHRlbXBsYXRlVXJsIDogJ3dlYnNpdGUvc2lnbi11cC5odG1sJyxcblx0XHRcdFx0XHRjb250cm9sbGVyIDogWyAnJHNjb3BlJywnJHJvb3RTY29wZScsIGZ1bmN0aW9uKCRzY29wZSwkcm9vdFNjb3BlKSB7XG5cdFx0XHRcdFx0XHQkc2NvcGUuYXBwLnNldHRpbmdzLmh0bWxDbGFzcyA9ICRyb290U2NvcGUuaHRtbENsYXNzLndlYnNpdGVMb2dpbjtcblx0XHRcdFx0XHRcdCRzY29wZS5hcHAuc2V0dGluZ3MuYm9keUNsYXNzID0gJ2xvZ2luJztcblx0XHRcdFx0XHR9IF1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblxufSkoKTsiLCIoZnVuY3Rpb24oKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcpO1xuXG5cdGFwcC5ydW4oWyAnJHJvb3RTY29wZScsICckc3RhdGUnLCAnJHN0YXRlUGFyYW1zJyxcblx0XHRcdGZ1bmN0aW9uKCRyb290U2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zKSB7XG5cdFx0XHRcdCRyb290U2NvcGUuJHN0YXRlID0gJHN0YXRlO1xuXHRcdFx0XHQkcm9vdFNjb3BlLiRzdGF0ZVBhcmFtcyA9ICRzdGF0ZVBhcmFtcztcblx0XHRcdH0gXSk7XG5cblx0YXBwLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG5cdFx0JHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL3dlYnNpdGUtcGFnZXMvaG9tZScpO1xuXHRcdFx0XHQkc3RhdGVQcm92aWRlci5zdGF0ZSgnd2Vic2l0ZS1ibG9nJywge1xuXHRcdFx0XHRcdGFic3RyYWN0IDogdHJ1ZSxcblx0XHRcdFx0XHR1cmwgOiAnL3dlYnNpdGUtYmxvZycsXG5cdFx0XHRcdFx0dGVtcGxhdGUgOiAnPGRpdiB1aS12aWV3IGNsYXNzPVwidWktdmlldy1tYWluXCIgLz4nXG5cdFx0XHRcdH0pLnN0YXRlKCd3ZWJzaXRlLWJsb2cubGlzdGluZycsIHtcblx0XHRcdFx0XHR1cmwgOiAnL2xpc3RpbmcnLFxuXHRcdFx0XHRcdHRlbXBsYXRlVXJsIDogJ3dlYnNpdGUvYmxvZy1saXN0aW5nLmh0bWwnLFxuXHRcdFx0XHRcdGNvbnRyb2xsZXIgOiBbICckc2NvcGUnLCckcm9vdFNjb3BlJywgZnVuY3Rpb24oJHNjb3BlLCRyb290U2NvcGUpIHtcblx0XHRcdFx0XHRcdCRzY29wZS5hcHAuc2V0dGluZ3MuaHRtbENsYXNzID0gJHJvb3RTY29wZS5odG1sQ2xhc3Mud2Vic2l0ZTtcblx0XHRcdFx0XHRcdCRzY29wZS5hcHAuc2V0dGluZ3MuYm9keUNsYXNzID0gJyc7XG5cdFx0XHRcdFx0fSBdXG5cdFx0XHRcdH0pLnN0YXRlKCd3ZWJzaXRlLWJsb2cucG9zdCcsIHtcblx0XHRcdFx0XHR1cmwgOiAnL3Bvc3QnLFxuXHRcdFx0XHRcdHRlbXBsYXRlVXJsIDogJ3dlYnNpdGUvYmxvZy1wb3N0Lmh0bWwnLFxuXHRcdFx0XHRcdGNvbnRyb2xsZXIgOiBbICckc2NvcGUnLCckcm9vdFNjb3BlJywgZnVuY3Rpb24oJHNjb3BlLCRyb290U2NvcGUpIHtcblx0XHRcdFx0XHRcdCRzY29wZS5hcHAuc2V0dGluZ3MuaHRtbENsYXNzID0gJHJvb3RTY29wZS5odG1sQ2xhc3Mud2Vic2l0ZTtcblx0XHRcdFx0XHRcdCRzY29wZS5hcHAuc2V0dGluZ3MuYm9keUNsYXNzID0gJyc7XG5cdFx0XHRcdFx0fSBdXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG59KSgpOyIsIihmdW5jdGlvbigpe1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJyk7XG4gICAgICAgYXBwLmNvbmZpZyhmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuXG4gICAgICAgICAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL3dlYnNpdGUtcGFnZXMvaG9tZScpO1xuXG4gICAgICAgICAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCd3ZWJzaXRlLWNvdXJzZXMnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy93ZWJzaXRlLWNvdXJzZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6ICc8ZGl2IHVpLXZpZXcgY2xhc3M9XCJ1aS12aWV3LW1haW5cIiAvPidcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCd3ZWJzaXRlLWNvdXJzZXMuZ3JpZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9ncmlkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnd2Vic2l0ZS9jb3Vyc2VzLWdyaWQuaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBbJyRzY29wZScsJyRyb290U2NvcGUnLCBmdW5jdGlvbigkc2NvcGUsJHJvb3RTY29wZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmFwcC5zZXR0aW5ncy5odG1sQ2xhc3MgPSAkcm9vdFNjb3BlLmh0bWxDbGFzcy53ZWJzaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5hcHAuc2V0dGluZ3MuYm9keUNsYXNzID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuc3RhdGUoJ3dlYnNpdGUtY291cnNlcy5saXN0Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2xpc3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd3ZWJzaXRlL2NvdXJzZXMtbGlzdC5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IFsnJHNjb3BlJywnJHJvb3RTY29wZScsIGZ1bmN0aW9uKCRzY29wZSwkcm9vdFNjb3BlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuYXBwLnNldHRpbmdzLmh0bWxDbGFzcyA9ICRyb290U2NvcGUuaHRtbENsYXNzLndlYnNpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmFwcC5zZXR0aW5ncy5ib2R5Q2xhc3MgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnd2Vic2l0ZS1jb3Vyc2VzLnNpbmdsZScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9zaW5nbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICd3ZWJzaXRlL2NvdXJzZS5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IFsnJHNjb3BlJywnJHJvb3RTY29wZScsIGZ1bmN0aW9uKCRzY29wZSwkcm9vdFNjb3BlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuYXBwLnNldHRpbmdzLmh0bWxDbGFzcyA9ICRyb290U2NvcGUuaHRtbENsYXNzLndlYnNpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmFwcC5zZXR0aW5ncy5ib2R5Q2xhc3MgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG59KSgpOyIsIihmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJyk7XG5cblx0YXBwLnJ1bihbICckcm9vdFNjb3BlJywgJyRzdGF0ZScsICckc3RhdGVQYXJhbXMnLFxuXHRcdFx0ZnVuY3Rpb24oJHJvb3RTY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMpIHtcblx0XHRcdFx0JHJvb3RTY29wZS4kc3RhdGUgPSAkc3RhdGU7XG5cdFx0XHRcdCRyb290U2NvcGUuJHN0YXRlUGFyYW1zID0gJHN0YXRlUGFyYW1zO1xuXHRcdFx0fSBdKTtcblxuXHRhcHAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcblx0XHQkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvd2Vic2l0ZS1wYWdlcy9ob21lJyk7XG5cdFx0XHRcdCRzdGF0ZVByb3ZpZGVyLnN0YXRlKCd3ZWJzaXRlLWZvcnVtJywge1xuXHRcdFx0XHRcdGFic3RyYWN0IDogdHJ1ZSxcblx0XHRcdFx0XHR1cmwgOiAnL3dlYnNpdGUtZm9ydW0nLFxuXHRcdFx0XHRcdHRlbXBsYXRlIDogJzxkaXYgdWktdmlldyBjbGFzcz1cInVpLXZpZXctbWFpblwiIC8+J1xuXHRcdFx0XHR9KS5zdGF0ZSgnd2Vic2l0ZS1mb3J1bS5ob21lJywge1xuXHRcdFx0XHRcdHVybCA6ICcvaG9tZScsXG5cdFx0XHRcdFx0dGVtcGxhdGVVcmwgOiAnd2Vic2l0ZS9mb3J1bS1ob21lLmh0bWwnLFxuXHRcdFx0XHRcdGNvbnRyb2xsZXIgOiBbICckc2NvcGUnLCckcm9vdFNjb3BlJywgZnVuY3Rpb24oJHNjb3BlLCRyb290U2NvcGUpIHtcblx0XHRcdFx0XHRcdCRzY29wZS5hcHAuc2V0dGluZ3MuaHRtbENsYXNzID0gJHJvb3RTY29wZS5odG1sQ2xhc3Mud2Vic2l0ZTtcblx0XHRcdFx0XHRcdCRzY29wZS5hcHAuc2V0dGluZ3MuYm9keUNsYXNzID0gJyc7XG5cdFx0XHRcdFx0fSBdXG5cdFx0XHRcdH0pLnN0YXRlKCd3ZWJzaXRlLWZvcnVtLmNhdGVnb3J5Jywge1xuXHRcdFx0XHRcdHVybCA6ICcvY2F0ZWdvcnknLFxuXHRcdFx0XHRcdHRlbXBsYXRlVXJsIDogJ3dlYnNpdGUvZm9ydW0tY2F0ZWdvcnkuaHRtbCcsXG5cdFx0XHRcdFx0Y29udHJvbGxlciA6IFsgJyRzY29wZScsJyRyb290U2NvcGUnLCBmdW5jdGlvbigkc2NvcGUsJHJvb3RTY29wZSkge1xuXHRcdFx0XHRcdFx0JHNjb3BlLmFwcC5zZXR0aW5ncy5odG1sQ2xhc3MgPSAkcm9vdFNjb3BlLmh0bWxDbGFzcy53ZWJzaXRlO1xuXHRcdFx0XHRcdFx0JHNjb3BlLmFwcC5zZXR0aW5ncy5ib2R5Q2xhc3MgPSAnJztcblx0XHRcdFx0XHR9IF1cblx0XHRcdFx0fSkuc3RhdGUoJ3dlYnNpdGUtZm9ydW0udGhyZWFkJywge1xuXHRcdFx0XHRcdHVybCA6ICcvdGhyZWFkJyxcblx0XHRcdFx0XHR0ZW1wbGF0ZVVybCA6ICd3ZWJzaXRlL2ZvcnVtLXRocmVhZC5odG1sJyxcblx0XHRcdFx0XHRjb250cm9sbGVyIDogWyAnJHNjb3BlJywnJHJvb3RTY29wZScsIGZ1bmN0aW9uKCRzY29wZSwkcm9vdFNjb3BlKSB7XG5cdFx0XHRcdFx0XHQkc2NvcGUuYXBwLnNldHRpbmdzLmh0bWxDbGFzcyA9ICRyb290U2NvcGUuaHRtbENsYXNzLndlYnNpdGU7XG5cdFx0XHRcdFx0XHQkc2NvcGUuYXBwLnNldHRpbmdzLmJvZHlDbGFzcyA9ICcnO1xuXHRcdFx0XHRcdH0gXVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXG59KSgpOyIsIihmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJyk7XG5cblx0YXBwLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwkdXJsUm91dGVyUHJvdmlkZXIpIHtcblx0XHQkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvd2Vic2l0ZS1wYWdlcy9ob21lJyk7XG5cdFx0XHRcdCRzdGF0ZVByb3ZpZGVyXG5cdFx0XHRcdFx0XHQuc3RhdGUoJ3dlYnNpdGUtcGFnZXMnLCB7XG5cdFx0XHRcdFx0XHRcdGFic3RyYWN0IDogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0dXJsIDogJy93ZWJzaXRlLXBhZ2VzJyxcblx0XHRcdFx0XHRcdFx0dGVtcGxhdGUgOiAnPGRpdiB1aS12aWV3IGNsYXNzPVwidWktdmlldy1tYWluXCIgLz4nXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0LnN0YXRlKCd3ZWJzaXRlLXBhZ2VzLmhvbWUnLCB7XG5cdFx0XHRcdFx0XHRcdHVybCA6ICcvaG9tZScsXG5cdFx0XHRcdFx0XHRcdHRlbXBsYXRlVXJsIDogJ3dlYnNpdGUvaG9tZS5odG1sJyxcblx0XHRcdFx0XHRcdFx0Y29udHJvbGxlciA6ICdob21lQ3RybCdcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQuc3RhdGUoJ3dlYnNpdGUtcGFnZXMuY29udGFjdCcsXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0dXJsIDogJy9jb250YWN0Jyxcblx0XHRcdFx0XHRcdFx0XHRcdHRlbXBsYXRlVXJsIDogJ3dlYnNpdGUvY29udGFjdC5odG1sJyxcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRyb2xsZXIgOiBbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JyRzY29wZScsJyRyb290U2NvcGUnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZ1bmN0aW9uKCRzY29wZSwgJHJvb3RTY29wZSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0JHNjb3BlLmFwcC5zZXR0aW5ncy5odG1sQ2xhc3MgPSAkcm9vdFNjb3BlLmh0bWxDbGFzcy53ZWJzaXRlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0JHNjb3BlLmFwcC5zZXR0aW5ncy5ib2R5Q2xhc3MgPSAnJztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IF1cblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXG59KSgpOyIsIihmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJyk7XG5cblx0YXBwLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwkdXJsUm91dGVyUHJvdmlkZXIpIHtcblx0XHQkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvd2Vic2l0ZS1wYWdlcy9ob21lJyk7XG5cdFx0ICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgICAuc3RhdGUoJ2FwcC1pbnN0cnVjdG9yJywge1xuICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgIHVybDogJy9hcHAtaW5zdHJ1Y3RvcicsXG4gICAgICAgICAgICAgdGVtcGxhdGU6ICc8ZGl2IHVpLXZpZXcgY2xhc3M9XCJ1aS12aWV3LW1haW5cIiAvPidcbiAgICAgICAgIH0pXG4gICAgICAgICAuc3RhdGUoJ2FwcC1pbnN0cnVjdG9yLmRhc2hib2FyZCcsIHtcbiAgICAgICAgICAgICB1cmw6ICcvZGFzaGJvYXJkJyxcbiAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9pbnN0cnVjdG9yLWRhc2hib2FyZC5odG1sJyxcbiAgICAgICAgICAgICBjb250cm9sbGVyOiBbJyRzY29wZScsJyRyb290U2NvcGUnLCBmdW5jdGlvbigkc2NvcGUsICRyb290U2NvcGUpe1xuICAgICAgICAgICAgICAgICAkc2NvcGUuYXBwLnNldHRpbmdzLmh0bWxDbGFzcyA9ICRyb290U2NvcGUuaHRtbENsYXNzLmFwcGwzO1xuICAgICAgICAgICAgICAgICAkc2NvcGUuYXBwLnNldHRpbmdzLmJvZHlDbGFzcyA9ICcnO1xuICAgICAgICAgICAgIH1dXG4gICAgICAgICB9KVxuICAgICAgICAgLnN0YXRlKCdhcHAtaW5zdHJ1Y3Rvci5jb3Vyc2VzJywge1xuICAgICAgICAgICAgIHVybDogJy9jb3Vyc2VzJyxcbiAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9pbnN0cnVjdG9yLWNvdXJzZXMuaHRtbCcsXG4gICAgICAgICAgICAgY29udHJvbGxlcjogWyckc2NvcGUnLCckcm9vdFNjb3BlJywgZnVuY3Rpb24oJHNjb3BlLCAkcm9vdFNjb3BlKXtcbiAgICAgICAgICAgICAgICAgJHNjb3BlLmFwcC5zZXR0aW5ncy5odG1sQ2xhc3MgPSAkcm9vdFNjb3BlLmh0bWxDbGFzcy5hcHBsMztcbiAgICAgICAgICAgICAgICAgJHNjb3BlLmFwcC5zZXR0aW5ncy5ib2R5Q2xhc3MgPSAnJztcbiAgICAgICAgICAgICB9XVxuICAgICAgICAgfSlcbiAgICAgICAgIC5zdGF0ZSgnYXBwLWluc3RydWN0b3IuZWRpdC1jb3Vyc2UnLCB7XG4gICAgICAgICAgICAgdXJsOiAnL2VkaXQtY291cnNlJyxcbiAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9pbnN0cnVjdG9yLWVkaXQtY291cnNlLmh0bWwnLFxuICAgICAgICAgICAgIGNvbnRyb2xsZXI6IFsnJHNjb3BlJywnJHJvb3RTY29wZScsIGZ1bmN0aW9uKCRzY29wZSwgJHJvb3RTY29wZSl7XG4gICAgICAgICAgICAgICAgICRzY29wZS5hcHAuc2V0dGluZ3MuaHRtbENsYXNzID0gJHJvb3RTY29wZS5odG1sQ2xhc3MuYXBwbDM7XG4gICAgICAgICAgICAgICAgICRzY29wZS5hcHAuc2V0dGluZ3MuYm9keUNsYXNzID0gJyc7XG4gICAgICAgICAgICAgfV1cbiAgICAgICAgIH0pXG4gICAgICAgICAuc3RhdGUoJ2FwcC1pbnN0cnVjdG9yLmVkaXQtY291cnNlLW1ldGEnLCB7XG4gICAgICAgICAgICAgdXJsOiAnL2VkaXQtY291cnNlLW1ldGEnLFxuICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2luc3RydWN0b3ItZWRpdC1jb3Vyc2UtbWV0YS5odG1sJyxcbiAgICAgICAgICAgICBjb250cm9sbGVyOiBbJyRzY29wZScsJyRyb290U2NvcGUnLCBmdW5jdGlvbigkc2NvcGUsICRyb290U2NvcGUpe1xuICAgICAgICAgICAgICAgICAkc2NvcGUuYXBwLnNldHRpbmdzLmh0bWxDbGFzcyA9ICRyb290U2NvcGUuaHRtbENsYXNzLmFwcGwzO1xuICAgICAgICAgICAgICAgICAkc2NvcGUuYXBwLnNldHRpbmdzLmJvZHlDbGFzcyA9ICcnO1xuICAgICAgICAgICAgIH1dXG4gICAgICAgICB9KVxuICAgICAgICAgLnN0YXRlKCdhcHAtaW5zdHJ1Y3Rvci5lZGl0LWNvdXJzZS1sZXNzb25zJywge1xuICAgICAgICAgICAgIHVybDogJy9lZGl0LWNvdXJzZS1sZXNzb25zJyxcbiAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9pbnN0cnVjdG9yLWVkaXQtY291cnNlLWxlc3NvbnMuaHRtbCcsXG4gICAgICAgICAgICAgY29udHJvbGxlcjogWyckc2NvcGUnLCckcm9vdFNjb3BlJywgZnVuY3Rpb24oJHNjb3BlLCAkcm9vdFNjb3BlKXtcbiAgICAgICAgICAgICAgICAgJHNjb3BlLmFwcC5zZXR0aW5ncy5odG1sQ2xhc3MgPSAkcm9vdFNjb3BlLmh0bWxDbGFzcy5hcHBsMztcbiAgICAgICAgICAgICAgICAgJHNjb3BlLmFwcC5zZXR0aW5ncy5ib2R5Q2xhc3MgPSAnJztcbiAgICAgICAgICAgICB9XVxuICAgICAgICAgfSlcbiAgICAgICAgIC5zdGF0ZSgnYXBwLWluc3RydWN0b3IuZWFybmluZ3MnLCB7XG4gICAgICAgICAgICAgdXJsOiAnL2Vhcm5pbmdzJyxcbiAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9pbnN0cnVjdG9yLWVhcm5pbmdzLmh0bWwnLFxuICAgICAgICAgICAgIGNvbnRyb2xsZXI6IFsnJHNjb3BlJywnJHJvb3RTY29wZScsIGZ1bmN0aW9uKCRzY29wZSwgJHJvb3RTY29wZSl7XG4gICAgICAgICAgICAgICAgICRzY29wZS5hcHAuc2V0dGluZ3MuaHRtbENsYXNzID0gJHJvb3RTY29wZS5odG1sQ2xhc3MuYXBwbDM7XG4gICAgICAgICAgICAgICAgICRzY29wZS5hcHAuc2V0dGluZ3MuYm9keUNsYXNzID0gJyc7XG4gICAgICAgICAgICAgfV1cbiAgICAgICAgIH0pXG4gICAgICAgICAuc3RhdGUoJ2FwcC1pbnN0cnVjdG9yLnN0YXRlbWVudCcsIHtcbiAgICAgICAgICAgICB1cmw6ICcvaW5zdHJ1Y3RvcicsXG4gICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvaW5zdHJ1Y3Rvci1zdGF0ZW1lbnQuaHRtbCcsXG4gICAgICAgICAgICAgY29udHJvbGxlcjogWyckc2NvcGUnLCckcm9vdFNjb3BlJywgZnVuY3Rpb24oJHNjb3BlLCAkcm9vdFNjb3BlKXtcbiAgICAgICAgICAgICAgICAgJHNjb3BlLmFwcC5zZXR0aW5ncy5odG1sQ2xhc3MgPSAkcm9vdFNjb3BlLmh0bWxDbGFzcy5hcHBsMztcbiAgICAgICAgICAgICAgICAgJHNjb3BlLmFwcC5zZXR0aW5ncy5ib2R5Q2xhc3MgPSAnJztcbiAgICAgICAgICAgICB9XVxuICAgICAgICAgfSlcbiAgICAgICAgIC5zdGF0ZSgnYXBwLWluc3RydWN0b3IubWVzc2FnZXMnLCB7XG4gICAgICAgICAgICAgdXJsOiAnL21lc3NhZ2VzJyxcbiAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9pbnN0cnVjdG9yLW1lc3NhZ2VzLmh0bWwnLFxuICAgICAgICAgICAgIGNvbnRyb2xsZXI6IFsnJHNjb3BlJywnJHJvb3RTY29wZScsIGZ1bmN0aW9uKCRzY29wZSwgJHJvb3RTY29wZSl7XG4gICAgICAgICAgICAgICAgICRzY29wZS5hcHAuc2V0dGluZ3MuaHRtbENsYXNzID0gJHJvb3RTY29wZS5odG1sQ2xhc3MuYXBwbDM7XG4gICAgICAgICAgICAgICAgICRzY29wZS5hcHAuc2V0dGluZ3MuYm9keUNsYXNzID0gJyc7XG4gICAgICAgICAgICAgfV1cbiAgICAgICAgIH0pXG4gICAgICAgICAuc3RhdGUoJ2FwcC1pbnN0cnVjdG9yLnByaXZhdGUtcHJvZmlsZScsIHtcbiAgICAgICAgICAgICB1cmw6ICcvcHJpdmF0ZS1wcm9maWxlJyxcbiAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9pbnN0cnVjdG9yLXByaXZhdGUtcHJvZmlsZS5odG1sJyxcbiAgICAgICAgICAgICBjb250cm9sbGVyOiBbJyRzY29wZScsJyRyb290U2NvcGUnLCBmdW5jdGlvbigkc2NvcGUsICRyb290U2NvcGUpe1xuICAgICAgICAgICAgICAgICAkc2NvcGUuYXBwLnNldHRpbmdzLmh0bWxDbGFzcyA9ICRyb290U2NvcGUuaHRtbENsYXNzLmFwcGwzO1xuICAgICAgICAgICAgICAgICAkc2NvcGUuYXBwLnNldHRpbmdzLmJvZHlDbGFzcyA9ICcnO1xuICAgICAgICAgICAgIH1dXG4gICAgICAgICB9KVxuICAgICAgICAgLnN0YXRlKCdhcHAtaW5zdHJ1Y3Rvci5iaWxsaW5nJywge1xuICAgICAgICAgICAgIHVybDogJy9iaWxsaW5nJyxcbiAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9pbnN0cnVjdG9yLWJpbGxpbmcuaHRtbCcsXG4gICAgICAgICAgICAgY29udHJvbGxlcjogWyckc2NvcGUnLCckcm9vdFNjb3BlJywgZnVuY3Rpb24oJHNjb3BlLCAkcm9vdFNjb3BlKXtcbiAgICAgICAgICAgICAgICAgJHNjb3BlLmFwcC5zZXR0aW5ncy5odG1sQ2xhc3MgPSAkcm9vdFNjb3BlLmh0bWxDbGFzcy5hcHBsMztcbiAgICAgICAgICAgICAgICAgJHNjb3BlLmFwcC5zZXR0aW5ncy5ib2R5Q2xhc3MgPSAnJztcbiAgICAgICAgICAgICB9XVxuICAgICAgICAgfSk7XG5cdH0pO1xuXG59KSgpOyIsIihmdW5jdGlvbigpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJyk7XG5cblx0YXBwLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG5cdFx0JHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL3dlYnNpdGUtcGFnZXMvaG9tZScpO1xuXHRcdCRzdGF0ZVByb3ZpZGVyXG4gICAgICAgIC5zdGF0ZSgnYXBwLXN0dWRlbnQnLCB7XG4gICAgICAgICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgICAgICAgIHVybDogJy9hcHAtc3R1ZGVudCcsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogJzxkaXYgdWktdmlldyBjbGFzcz1cInVpLXZpZXctbWFpblwiIC8+J1xuICAgICAgICB9KVxuICAgICAgICAuc3RhdGUoJ2FwcC1zdHVkZW50LmRhc2hib2FyZCcsIHtcbiAgICAgICAgICAgIHVybDogJy9kYXNoYm9hcmQnLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvc3R1ZGVudC1kYXNoYm9hcmQuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiBbJyRzY29wZScsJyRyb290U2NvcGUnLCBmdW5jdGlvbigkc2NvcGUsJHJvb3RTY29wZSl7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmFwcC5zZXR0aW5ncy5odG1sQ2xhc3MgPSAkcm9vdFNjb3BlLmh0bWxDbGFzcy5hcHBsMztcbiAgICAgICAgICAgICAgICAkc2NvcGUuYXBwLnNldHRpbmdzLmJvZHlDbGFzcyA9ICcnO1xuICAgICAgICAgICAgfV1cbiAgICAgICAgfSlcbiAgICAgICAgLnN0YXRlKCdhcHAtc3R1ZGVudC5tZXNzYWdlcycsIHtcbiAgICAgICAgICAgIHVybDogJy9tZXNzYWdlcycsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9zdHVkZW50LW1lc3NhZ2VzLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogWyckc2NvcGUnLCckcm9vdFNjb3BlJywgZnVuY3Rpb24oJHNjb3BlLCRyb290U2NvcGUpe1xuICAgICAgICAgICAgICAgICRzY29wZS5hcHAuc2V0dGluZ3MuaHRtbENsYXNzID0gJHJvb3RTY29wZS5odG1sQ2xhc3MuYXBwbDM7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmFwcC5zZXR0aW5ncy5ib2R5Q2xhc3MgPSAnJztcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0pXG4gICAgICAgIC5zdGF0ZSgnYXBwLXN0dWRlbnQucHJpdmF0ZS1wcm9maWxlJywge1xuICAgICAgICAgICAgdXJsOiAnL3Byb2ZpbGUnLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvc3R1ZGVudC1wcm9maWxlLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogWyckc2NvcGUnLCckcm9vdFNjb3BlJywgZnVuY3Rpb24oJHNjb3BlLCRyb290U2NvcGUpe1xuICAgICAgICAgICAgICAgICRzY29wZS5hcHAuc2V0dGluZ3MuaHRtbENsYXNzID0gJHJvb3RTY29wZS5odG1sQ2xhc3MuYXBwbDM7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmFwcC5zZXR0aW5ncy5ib2R5Q2xhc3MgPSAnJztcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0pXG4gICAgICAgIC5zdGF0ZSgnYXBwLXN0dWRlbnQuYmlsbGluZycsIHtcbiAgICAgICAgICAgIHVybDogJy9iaWxsaW5nJyxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3N0dWRlbnQtYmlsbGluZy5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6IFsnJHNjb3BlJywnJHJvb3RTY29wZScsIGZ1bmN0aW9uKCRzY29wZSwkcm9vdFNjb3BlKXtcbiAgICAgICAgICAgICAgICAkc2NvcGUuYXBwLnNldHRpbmdzLmh0bWxDbGFzcyA9ICRyb290U2NvcGUuaHRtbENsYXNzLmFwcGwzO1xuICAgICAgICAgICAgICAgICRzY29wZS5hcHAuc2V0dGluZ3MuYm9keUNsYXNzID0gJyc7XG4gICAgICAgICAgICB9XVxuICAgICAgICB9KVxuICAgICAgICAuc3RhdGUoJ2FwcC1zdHVkZW50LmNvdXJzZXMnLCB7XG4gICAgICAgICAgICB1cmw6ICcvY291cnNlcycsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9zdHVkZW50LWNvdXJzZXMuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiBbJyRzY29wZScsJyRyb290U2NvcGUnLCBmdW5jdGlvbigkc2NvcGUsJHJvb3RTY29wZSl7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmFwcC5zZXR0aW5ncy5odG1sQ2xhc3MgPSAkcm9vdFNjb3BlLmh0bWxDbGFzcy5hcHBsMXIzO1xuICAgICAgICAgICAgICAgICRzY29wZS5hcHAuc2V0dGluZ3MuYm9keUNsYXNzID0gJyc7XG4gICAgICAgICAgICB9XVxuICAgICAgICB9KVxuICAgICAgICAuc3RhdGUoJ2FwcC1zdHVkZW50LmNvdXJzZS1mb3J1bXMnLCB7XG4gICAgICAgICAgICB1cmw6ICcvY291cnNlLWZvcnVtcycsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9zdHVkZW50LWNvdXJzZS1mb3J1bXMuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiBbJyRzY29wZScsJyRyb290U2NvcGUnLCBmdW5jdGlvbigkc2NvcGUsJHJvb3RTY29wZSl7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmFwcC5zZXR0aW5ncy5odG1sQ2xhc3MgPSAkcm9vdFNjb3BlLmh0bWxDbGFzcy5hcHBsMXIzO1xuICAgICAgICAgICAgICAgICRzY29wZS5hcHAuc2V0dGluZ3MuYm9keUNsYXNzID0gJyc7XG4gICAgICAgICAgICB9XVxuICAgICAgICB9KVxuICAgICAgICAuc3RhdGUoJ2FwcC1zdHVkZW50LmNvdXJzZS1mb3J1bS10aHJlYWQnLCB7XG4gICAgICAgICAgICB1cmw6ICcvY291cnNlLWZvcnVtLXRocmVhZCcsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9zdHVkZW50LWNvdXJzZS1mb3J1bS10aHJlYWQuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiBbJyRzY29wZScsJyRyb290U2NvcGUnLCBmdW5jdGlvbigkc2NvcGUsJHJvb3RTY29wZSl7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmFwcC5zZXR0aW5ncy5odG1sQ2xhc3MgPSAkcm9vdFNjb3BlLmh0bWxDbGFzcy5hcHBsMXIzO1xuICAgICAgICAgICAgICAgICRzY29wZS5hcHAuc2V0dGluZ3MuYm9keUNsYXNzID0gJyc7XG4gICAgICAgICAgICB9XVxuICAgICAgICB9KVxuICAgICAgICAuc3RhdGUoJ2FwcC1zdHVkZW50LnRha2UtY291cnNlJywge1xuICAgICAgICAgICAgdXJsOiAnL3Rha2UtY291cnNlJyxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3N0dWRlbnQtdGFrZS1jb3Vyc2UuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiBbJyRzY29wZScsJyRyb290U2NvcGUnLCBmdW5jdGlvbigkc2NvcGUsJHJvb3RTY29wZSl7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmFwcC5zZXR0aW5ncy5odG1sQ2xhc3MgPSAkcm9vdFNjb3BlLmh0bWxDbGFzcy5hcHBsMXIzO1xuICAgICAgICAgICAgICAgICRzY29wZS5hcHAuc2V0dGluZ3MuYm9keUNsYXNzID0gJyc7XG4gICAgICAgICAgICB9XVxuICAgICAgICB9KVxuICAgICAgICAuc3RhdGUoJ2FwcC1zdHVkZW50LnRha2UtcXVpeicsIHtcbiAgICAgICAgICAgIHVybDogJy90YWtlLXF1aXonLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvc3R1ZGVudC10YWtlLXF1aXouaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiBbJyRzY29wZScsJyRyb290U2NvcGUnLCBmdW5jdGlvbigkc2NvcGUsJHJvb3RTY29wZSl7XG4gICAgICAgICAgICAgICAgJHNjb3BlLmFwcC5zZXR0aW5ncy5odG1sQ2xhc3MgPSAkcm9vdFNjb3BlLmh0bWxDbGFzcy5hcHBsMXIzO1xuICAgICAgICAgICAgICAgICRzY29wZS5hcHAuc2V0dGluZ3MuYm9keUNsYXNzID0gJyc7XG4gICAgICAgICAgICB9XVxuICAgICAgICB9KTtcdFx0XG5cdH0pO1xuXG59KSgpOyIsIihmdW5jdGlvbigpe1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJyk7XG4gICAgICAgYXBwLmNvbmZpZyhmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuXG4gICAgICAgICAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL3dlYnNpdGUtcGFnZXMvaG9tZScpO1xuXG4gICAgICAgICAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlKCd3ZWJzaXRlLXR1dG9ycycsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFic3RyYWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3dlYnNpdGUtdHV0dW9zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnPGRpdiB1aS12aWV3IGNsYXNzPVwidWktdmlldy1tYWluXCIgLz4nXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSgnd2Vic2l0ZS10dXRvcnMuYWxsJyxcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHVybCA6ICcvYWxsJyxcblx0XHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZVVybCA6ICd3ZWJzaXRlL3R1dG9ycy5odG1sJyxcblx0XHRcdFx0XHRcdFx0XHRjb250cm9sbGVyIDogW1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQnJHNjb3BlJywnJHJvb3RTY29wZScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZ1bmN0aW9uKCRzY29wZSwkcm9vdFNjb3BlKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JHNjb3BlLmFwcC5zZXR0aW5ncy5odG1sQ2xhc3MgPSAkcm9vdFNjb3BlLmh0bWxDbGFzcy53ZWJzaXRlO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRzY29wZS5hcHAuc2V0dGluZ3MuYm9keUNsYXNzID0gJyc7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gXVxuXHRcdFx0XHRcdFx0XHR9KVx0XHRcbiAgICAgICAgICAgIH0pO1xufSkoKTsiLCIvLyBDdXJyaWN1bHVtXG5yZXF1aXJlKCcuLi9odG1sL19jdXJyaWN1bHVtJyk7XG5cbi8vIFNjcm9sbGluZyBiZWhhdmlvdXJcbnJlcXVpcmUoJy4uL2h0bWwvX3Njcm9sbCcpO1xuXG4vLyBRdWl6IHRpbWVyXG5yZXF1aXJlKCcuLi9odG1sL19jb3VudGRvd24nKTtcblxuLy8gRWFybmluZ3MgY2hhcnRcbnJlcXVpcmUoJy4uL2h0bWwvX2Zsb3RjaGFydC1lYXJuaW5ncycpO1xuXG4vLyBBbmd1bGFyIEFwcFxucmVxdWlyZSgnLi9hbmd1bGFyL2FwcCcpO1xuXG4vLyBMaWJyYXJ5IERpcmVjdGl2ZXNcbnJlcXVpcmUoJ2Vzc2VudGlhbC9qcy9hbmd1bGFyL21haW4nKTtcbnJlcXVpcmUoJ2xheW91dC9qcy9hbmd1bGFyL21haW4nKTtcbnJlcXVpcmUoJ3NpZGViYXIvanMvYW5ndWxhci9tYWluJyk7XG5yZXF1aXJlKCdtYXBzL2pzL2FuZ3VsYXIvX2dvb2dsZS1tYXBzJyk7XG5yZXF1aXJlKCdtZWRpYS9qcy9hbmd1bGFyL21haW4nKTtcbnJlcXVpcmUoJ21hdGVyaWFsL2pzL2FuZ3VsYXIvbWFpbicpO1xuXG4vLyBDdXN0b20gRGlyZWN0aXZlc1xucmVxdWlyZSgnLi9hbmd1bGFyL2RpcmVjdGl2ZXMvbmF2YmFyLXRyYW5zaXRpb24tc2Nyb2xsJyk7XG5yZXF1aXJlKCcuL2FuZ3VsYXIvZGlyZWN0aXZlcy9jb3VudGRvd24nKTtcbnJlcXVpcmUoJy4vYW5ndWxhci9kaXJlY3RpdmVzL2N1cnJpY3VsdW0nKTtcbnJlcXVpcmUoJy4vYW5ndWxhci9kaXJlY3RpdmVzL2Zsb3RjaGFydC1lYXJuaW5ncycpO1xuXG4vKlxuICogQmVsb3cgaXMgd2hhdCB3ZSBuZWVkIHRvIG1vZGlmeSBtb3N0IG9mdGVuXG4gKi9cbi8vIFJvdXRlciBjb25maWdcbnJlcXVpcmUoJy4vYW5ndWxhci9yb3V0ZXIvYXBwLXJvdXRlcicpO1xucmVxdWlyZSgnLi9hbmd1bGFyL3JvdXRlci9ob21lLXJvdXRlcicpO1xucmVxdWlyZSgnLi9hbmd1bGFyL3JvdXRlci9zdHVkZW50LXJvdXRlcicpO1xucmVxdWlyZSgnLi9hbmd1bGFyL3JvdXRlci9pbnN0cnVjdG9yLXJvdXRlcicpO1xucmVxdWlyZSgnLi9hbmd1bGFyL3JvdXRlci93ZWJzaXRlLXR1dG9yLXJvdXRlcicpO1xucmVxdWlyZSgnLi9hbmd1bGFyL3JvdXRlci9jb3Vyc2Utcm91dGVyJyk7XG5yZXF1aXJlKCcuL2FuZ3VsYXIvcm91dGVyL2ZvcnVtLXJvdXRlcicpO1xucmVxdWlyZSgnLi9hbmd1bGFyL3JvdXRlci9ibG9nLXJvdXRlcicpO1xuXG4vLyBDdXN0b21lciBDb250cm9sbGVyc1xucmVxdWlyZSgnLi9hbmd1bGFyL2NvbnRyb2xsZXJzL2FwcC1jdHJsJyk7XG5yZXF1aXJlKCcuL2FuZ3VsYXIvY29udHJvbGxlcnMvaG9tZS1jdHJsJyk7XG5cbiIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgJC5mbi50a0NvdW50ZG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jb3VudGRvd24oe1xuICAgICAgICAgICAgdW50aWw6IG1vbWVudCgpLmFkZCgxMCwgJ21pbnV0ZScpLnRvRGF0ZSgpXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAkKCcudGstY291bnRkb3duJykudGtDb3VudGRvd24oKTtcblxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICQuZm4udGtDdXJyaWN1bHVtID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHZhciBlID0gdGhpcztcblxuICAgICAgICBpZiAodHlwZW9mIGFuZ3VsYXIgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMuZmluZCgnLmxpc3QtZ3JvdXAtaXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gJCh0aGlzKS5kYXRhKCd0YXJnZXQnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5maW5kKCcuY29sbGFwc2UnKVxuICAgICAgICAgICAgLm9uKCdzaG93LmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGUuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ2hpZGUuYnMuY29sbGFwc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgfSk7XG4gICAgfTtcblxuICAgICQoJy5jdXJyaWN1bHVtJykudGtDdXJyaWN1bHVtKCk7XG5cbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgICB2YXIgc2tpbiA9IHJlcXVpcmUoJ2NoYXJ0cy9qcy9saWIvX3NraW4nKSgpO1xuICAgIHZhciBjaGFydHMgPSByZXF1aXJlKCdjaGFydHMvanMvZmxvdC9faGVscGVyJyk7XG5cbiAgICBpZiAodHlwZW9mIGNoYXJ0cyA9PSAndW5kZWZpbmVkJylcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgY2hhcnRzLmNoYXJ0X2Vhcm5pbmdzID1cbiAgICB7XG4gICAgICAgIC8vIGNoYXJ0IGRhdGFcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZDE6IFtdLFxuICAgICAgICAgICAgZDI6IFtdXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gd2lsbCBob2xkIHRoZSBjaGFydCBvYmplY3RcbiAgICAgICAgcGxvdDogbnVsbCxcblxuICAgICAgICAvLyBjaGFydCBvcHRpb25zXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGNvbG9yczogWyBjb2xvcnNbICd3YXJuaW5nLWNvbG9yJyBdLCBjb2xvcnNbICdzdWNjZXNzLWNvbG9yJyBdIF0sXG4gICAgICAgICAgICBncmlkOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yc1sgJ2RlZmF1bHQtbGlnaHQtY29sb3InIF0sXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgaG92ZXJhYmxlOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VyaWVzOiB7XG4gICAgICAgICAgICAgICAgZ3Jvdzoge2FjdGl2ZTogZmFsc2V9LFxuICAgICAgICAgICAgICAgIGxpbmVzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBsaW5lV2lkdGg6IDIsXG4gICAgICAgICAgICAgICAgICAgIHN0ZXBzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGNvbmZpZy5za2luc1sgc2tpbiBdWyAncHJpbWFyeS1jb2xvcicgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcG9pbnRzOiB7c2hvdzogZmFsc2V9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgbm9Db2x1bW5zOiAyLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcIm53XCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBudWxsLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRPcGFjaXR5OiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgICAgICB0aWNrczogMyxcbiAgICAgICAgICAgICAgICB0aWNrU2l6ZTogNDAsXG4gICAgICAgICAgICAgICAgdGlja0Zvcm1hdHRlcjogZnVuY3Rpb24gKHZhbCwgYXhpcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsICsgXCJrXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHhheGlzOiB7dGlja3M6IDQsIHRpY2tEZWNpbWFsczogMCwgdGlja0NvbG9yOiAndHJhbnNwYXJlbnQnfSxcbiAgICAgICAgICAgIHNoYWRvd1NpemU6IDAsXG4gICAgICAgICAgICB0b29sdGlwOiB0cnVlLFxuICAgICAgICAgICAgdG9vbHRpcE9wdHM6IHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIiVzIDogJXkuMFwiLFxuICAgICAgICAgICAgICAgIHNoaWZ0czoge1xuICAgICAgICAgICAgICAgICAgICB4OiAtIDMwLFxuICAgICAgICAgICAgICAgICAgICB5OiAtIDUwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0VGhlbWU6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gaW5pdGlhbGl6ZVxuICAgICAgICBpbml0OiBmdW5jdGlvbiAod3JhcHBlcikge1xuXG4gICAgICAgICAgICBpZiAoISB3cmFwcGVyLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgICAgICAvLyBnZW5lcmF0ZSBzb21lIGRhdGFcbiAgICAgICAgICAgIHRoaXMuZGF0YS5kMSA9IFsgWyAxLCAxMCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDIsIDIwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMywgNTAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyA0LCAxNjAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyA1LCAxMTAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyA2LCAzNiArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDcsIDcwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgOCwgMzAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyA5LCAzNiArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDEwLCA4MCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDExLCAxNDAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAxMiwgNDcgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAxMywgNTAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAxNCwgNTAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAxNSwgNDUgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAxNiwgMTAwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTcsIDUwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTgsIDUzICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTksIDU2ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjAsIDU5ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjEsIDYyICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjIsIDkwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjMsIDU2ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjQsIDU5ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjUsIDYyICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjYsIDY1ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjcsIDgwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjgsIDcxICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjksIDc1ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMzAsIDEyMCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdIF07XG4gICAgICAgICAgICB0aGlzLmRhdGEuZDIgPSBbIFsgMSwgMyArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDIsIDYgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAzLCAzMCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDQsIDExMCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDUsIDgwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgNiwgMTggKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyA3LCA1MCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDgsIDE1ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgOSwgMTggKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAxMCwgNjAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAxMSwgMTEwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTIsIDI3ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTMsIDMwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTQsIDMzICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTUsIDI0ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTYsIDgwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTcsIDMwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTgsIDMzICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTksIDM2ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjAsIDM5ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjEsIDQyICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjIsIDcwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjMsIDM2ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjQsIDM5ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjUsIDQyICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjYsIDQ1ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjcsIDYwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjgsIDUxICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjksIDU1ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMzAsIDEwMCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdIF07XG5cbiAgICAgICAgICAgIC8vIG1ha2UgY2hhcnRcbiAgICAgICAgICAgIHRoaXMucGxvdCA9ICQucGxvdChcbiAgICAgICAgICAgICAgICB3cmFwcGVyLCBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkdyb3NzIFJldmVudWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMuZGF0YS5kMVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJOZXQgUmV2ZW51ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy5kYXRhLmQyXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAgICAgKi9cbiAgICAkLmZuLnRrRmxvdENoYXJ0RWFybmluZ3MgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBjaGFydHMuY2hhcnRfZWFybmluZ3MuaW5pdCh0aGlzKTtcblxuICAgIH07XG5cbiAgICAkKCdbZGF0YS10b2dnbGU9XCJmbG90LWNoYXJ0LWVhcm5pbmdzXCJdJykudGtGbG90Q2hhcnRFYXJuaW5ncygpO1xuXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbiAoJCwgd2luZG93KSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICB2YXIgJHdpbmRvdyA9ICQod2luZG93KSxcbiAgICAgICAgJGNvbnRlbnQgPSAkKCcuc3QtY29udGVudC1pbm5lcicpO1xuXG4gICAgJC5mbi50a1Njcm9sbE5hdmJhclRyYW5zaXRpb24gPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdmFyIGhhbmRsZVNjcm9sbCA9IGZ1bmN0aW9uIChlKSB7XG5cbiAgICAgICAgICAgIHZhciAkbmF2YmFyID0gJCgnLm5hdmJhci1maXhlZC10b3AnKSxcbiAgICAgICAgICAgICAgICAkaHRtbCA9ICQoJ2h0bWwnKTtcblxuICAgICAgICAgICAgaWYgKE1vZGVybml6ci50b3VjaCB8fCAhICRuYXZiYXIubGVuZ3RoIHx8ICEgJGh0bWwuaXMoJy50cmFuc2l0aW9uLW5hdmJhci1zY3JvbGwnKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICB2YXIgc2Nyb2xsVG9wID0gcGFyc2VJbnQoJChlLmN1cnJlbnRUYXJnZXQpLnNjcm9sbFRvcCgpLCAxMCk7XG5cbiAgICAgICAgICAgIGlmICghIGlzTmFOKHNjcm9sbFRvcCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG9wID4gNTApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRuYXZiYXIuZGF0YSgneicpICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkbmF2YmFyLmF0dHIoJ2RhdGEteicsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICgkbmF2YmFyLmlzKCcubmF2YmFyLXNpemUteGxhcmdlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRuYXZiYXIucmVtb3ZlQ2xhc3MoJ25hdmJhci1zaXplLXhsYXJnZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICgkaHRtbC5pcygnLmxzLXRvcC1uYXZiYXIteGxhcmdlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRodG1sLnJlbW92ZUNsYXNzKCdscy10b3AtbmF2YmFyLXhsYXJnZScpLmFkZENsYXNzKCdscy10b3AtbmF2YmFyLWxhcmdlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCRodG1sLmlzKCcudG9wLW5hdmJhci14bGFyZ2UnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGh0bWwucmVtb3ZlQ2xhc3MoJ3RvcC1uYXZiYXIteGxhcmdlJykuYWRkQ2xhc3MoJ3RvcC1uYXZiYXItbGFyZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG9wIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgJG5hdmJhci5hdHRyKCdkYXRhLXonLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgJG5hdmJhci5hZGRDbGFzcygnbmF2YmFyLXNpemUteGxhcmdlJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkaHRtbC5pcygnLmxzLXRvcC1uYXZiYXItbGFyZ2UnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGh0bWwucmVtb3ZlQ2xhc3MoJ2xzLXRvcC1uYXZiYXItbGFyZ2UnKS5hZGRDbGFzcygnbHMtdG9wLW5hdmJhci14bGFyZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoJGh0bWwuaXMoJy50b3AtbmF2YmFyLWxhcmdlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRodG1sLnJlbW92ZUNsYXNzKCd0b3AtbmF2YmFyLWxhcmdlJykuYWRkQ2xhc3MoJ3RvcC1uYXZiYXIteGxhcmdlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNjcm9sbChoYW5kbGVTY3JvbGwpO1xuXG4gICAgfTtcblxuICAgIGlmICgkY29udGVudC5sZW5ndGgpIHtcbiAgICAgICAgJGNvbnRlbnQudGtTY3JvbGxOYXZiYXJUcmFuc2l0aW9uKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAkd2luZG93LnRrU2Nyb2xsTmF2YmFyVHJhbnNpdGlvbigpO1xuICAgIH1cblxufSkoalF1ZXJ5LCB3aW5kb3cpOyJdfQ==
