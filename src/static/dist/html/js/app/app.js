(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/js/themes/html/app.js":[function(require,module,exports){
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
},{"./main":"C:\\eclipseWorkspace\\bitlms\\src\\js\\themes\\html\\main.js","charts/js/main":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\main.js","essential/js/main":"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\main.js","layout/js/main":"C:\\eclipseWorkspace\\bitlms\\lib\\layout\\js\\main.js","maps/js/google/main":"C:\\eclipseWorkspace\\bitlms\\lib\\maps\\js\\google\\main.js","material/js/main":"C:\\eclipseWorkspace\\bitlms\\lib\\material\\js\\main.js","media/js/main":"C:\\eclipseWorkspace\\bitlms\\lib\\media\\js\\main.js","messages/js/main":"C:\\eclipseWorkspace\\bitlms\\lib\\messages\\js\\main.js","sidebar/js/main":"C:\\eclipseWorkspace\\bitlms\\lib\\sidebar\\js\\main.js"}],"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\easy-pie\\_easy-pie.js":[function(require,module,exports){
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
},{"../lib/_skin":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\lib\\_skin.js"}],"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\easy-pie\\main.js":[function(require,module,exports){
require('./_easy-pie');
},{"./_easy-pie":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\easy-pie\\_easy-pie.js"}],"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\flot\\_autoupdate.js":[function(require,module,exports){
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
},{"./_helper":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\flot\\_helper.js"}],"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\flot\\_bars-ordered.js":[function(require,module,exports){
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
},{"./_helper":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\flot\\_helper.js"}],"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\flot\\_bars-stacked.js":[function(require,module,exports){
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
},{"./_helper":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\flot\\_helper.js"}],"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\flot\\_donut.js":[function(require,module,exports){
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
},{"./_helper":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\flot\\_helper.js"}],"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\flot\\_helper.js":[function(require,module,exports){
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
},{"../lib/_skin":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\lib\\_skin.js"}],"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\flot\\_horizontal.js":[function(require,module,exports){
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
},{"../lib/_skin":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\lib\\_skin.js","./_helper":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\flot\\_helper.js"}],"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\flot\\_line.js":[function(require,module,exports){
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
},{"../lib/_skin":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\lib\\_skin.js","./_helper":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\flot\\_helper.js"}],"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\flot\\_line_fill_nopoints.js":[function(require,module,exports){
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
},{"../lib/_skin":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\lib\\_skin.js","./_helper":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\flot\\_helper.js"}],"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\flot\\_line_fill_nopoints_2.js":[function(require,module,exports){
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
},{"../lib/_skin":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\lib\\_skin.js","./_helper":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\flot\\_helper.js"}],"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\flot\\_mixed.js":[function(require,module,exports){
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
},{"../lib/_skin":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\lib\\_skin.js","./_helper":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\flot\\_helper.js"}],"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\flot\\_pie.js":[function(require,module,exports){
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
},{"./_helper":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\flot\\_helper.js"}],"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\flot\\_simple.js":[function(require,module,exports){
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
},{"../lib/_skin":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\lib\\_skin.js","./_helper":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\flot\\_helper.js"}],"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\flot\\main.js":[function(require,module,exports){
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
},{"./_autoupdate":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\flot\\_autoupdate.js","./_bars-ordered":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\flot\\_bars-ordered.js","./_bars-stacked":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\flot\\_bars-stacked.js","./_donut":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\flot\\_donut.js","./_horizontal":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\flot\\_horizontal.js","./_line":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\flot\\_line.js","./_line_fill_nopoints":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\flot\\_line_fill_nopoints.js","./_line_fill_nopoints_2":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\flot\\_line_fill_nopoints_2.js","./_mixed":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\flot\\_mixed.js","./_pie":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\flot\\_pie.js","./_simple":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\flot\\_simple.js"}],"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\lib\\_skin.js":[function(require,module,exports){
module.exports = (function () {
    var skin = $.cookie('skin');

    if (typeof skin == 'undefined') {
        skin = 'default';
    }
    return skin;
});
},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\main.js":[function(require,module,exports){
require('./morris/main');
require('./sparkline/main');
require('./flot/main');
require('./easy-pie/main');

},{"./easy-pie/main":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\easy-pie\\main.js","./flot/main":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\flot\\main.js","./morris/main":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\morris\\main.js","./sparkline/main":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\sparkline\\main.js"}],"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\morris\\_area.js":[function(require,module,exports){
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
},{"../lib/_skin":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\lib\\_skin.js"}],"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\morris\\_bar.js":[function(require,module,exports){
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

},{"../lib/_skin":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\lib\\_skin.js"}],"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\morris\\_donut.js":[function(require,module,exports){
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
},{"../lib/_skin":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\lib\\_skin.js"}],"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\morris\\_line.js":[function(require,module,exports){
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
},{"../lib/_skin":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\lib\\_skin.js"}],"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\morris\\main.js":[function(require,module,exports){
require('./_area');
require('./_bar');
require('./_donut');
require('./_line');
},{"./_area":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\morris\\_area.js","./_bar":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\morris\\_bar.js","./_donut":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\morris\\_donut.js","./_line":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\morris\\_line.js"}],"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\sparkline\\_sparkline.js":[function(require,module,exports){
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
},{"../lib/_skin":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\lib\\_skin.js"}],"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\sparkline\\main.js":[function(require,module,exports){
require('./_sparkline');

},{"./_sparkline":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\sparkline\\_sparkline.js"}],"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_bootstrap-carousel.js":[function(require,module,exports){
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
},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_bootstrap-collapse.js":[function(require,module,exports){
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
},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_bootstrap-modal.js":[function(require,module,exports){
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
},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_bootstrap-switch.js":[function(require,module,exports){
(function ($) {
    "use strict";

    $('[data-toggle="switch-checkbox"]').each(function () {

        $(this).bootstrapSwitch({
            offColor: 'danger'
        });

    });

})(jQuery);
},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_check-all.js":[function(require,module,exports){
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
},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_cover.js":[function(require,module,exports){
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

},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_datepicker.js":[function(require,module,exports){
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
},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_daterangepicker.js":[function(require,module,exports){
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
},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_expandable.js":[function(require,module,exports){
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
},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_iframe.js":[function(require,module,exports){
(function () {
    "use strict";

    // if we're inside an iframe, reload without iframe
    if (window.location != window.parent.location)
        top.location.href = document.location.href;

})();

},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_minicolors.js":[function(require,module,exports){
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
},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_nestable.js":[function(require,module,exports){
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

},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_panel-collapse.js":[function(require,module,exports){
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

},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_progress-bars.js":[function(require,module,exports){
(function ($) {

    // Progress Bar Animation
    $('.progress-bar').each(function () {
        $(this).width($(this).attr('aria-valuenow') + '%');
    });

})(jQuery);
},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_select2.js":[function(require,module,exports){
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

},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_selectpicker.js":[function(require,module,exports){
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

},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_show-hover.js":[function(require,module,exports){
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
},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_skin.js":[function(require,module,exports){
module.exports=require("C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\lib\\_skin.js")
},{"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\lib\\_skin.js":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\lib\\_skin.js"}],"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_slider.js":[function(require,module,exports){
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
},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_summernote.js":[function(require,module,exports){
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

},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_tables.js":[function(require,module,exports){
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
},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_tabs.js":[function(require,module,exports){
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
},{"./_skin":"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_skin.js"}],"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_tooltip.js":[function(require,module,exports){
(function ($) {
    "use strict";

    // Tooltip
    $("body").tooltip({selector: '[data-toggle="tooltip"]', container: "body"});

})(jQuery);
},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_touchspin.js":[function(require,module,exports){
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
},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_tree.js":[function(require,module,exports){
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
},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_wizard.js":[function(require,module,exports){
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
},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\main.js":[function(require,module,exports){
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
},{"./_bootstrap-carousel":"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_bootstrap-carousel.js","./_bootstrap-collapse":"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_bootstrap-collapse.js","./_bootstrap-modal":"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_bootstrap-modal.js","./_bootstrap-switch":"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_bootstrap-switch.js","./_check-all":"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_check-all.js","./_cover":"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_cover.js","./_datepicker":"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_datepicker.js","./_daterangepicker":"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_daterangepicker.js","./_expandable":"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_expandable.js","./_iframe":"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_iframe.js","./_minicolors":"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_minicolors.js","./_nestable":"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_nestable.js","./_panel-collapse":"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_panel-collapse.js","./_progress-bars":"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_progress-bars.js","./_select2":"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_select2.js","./_selectpicker":"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_selectpicker.js","./_show-hover":"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_show-hover.js","./_slider":"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_slider.js","./_summernote":"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_summernote.js","./_tables":"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_tables.js","./_tabs":"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_tabs.js","./_tooltip":"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_tooltip.js","./_touchspin":"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_touchspin.js","./_tree":"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_tree.js","./_wizard":"C:\\eclipseWorkspace\\bitlms\\lib\\essential\\js\\_wizard.js"}],"C:\\eclipseWorkspace\\bitlms\\lib\\layout\\js\\_async.js":[function(require,module,exports){
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
},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\layout\\js\\_breakpoints.js":[function(require,module,exports){
(function ($) {

    $(window).setBreakpoints({
        distinct: true,
        breakpoints: [ 320, 480, 768, 1024 ]
    });

})(jQuery);
},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\layout\\js\\_gridalicious.js":[function(require,module,exports){
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
},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\layout\\js\\_isotope.js":[function(require,module,exports){
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

},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\layout\\js\\_parallax.js":[function(require,module,exports){
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
},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\layout\\js\\_scrollable.js":[function(require,module,exports){
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
},{"./_skin":"C:\\eclipseWorkspace\\bitlms\\lib\\layout\\js\\_skin.js"}],"C:\\eclipseWorkspace\\bitlms\\lib\\layout\\js\\_sidebar-pc.js":[function(require,module,exports){
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
},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\layout\\js\\_skin.js":[function(require,module,exports){
module.exports=require("C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\lib\\_skin.js")
},{"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\lib\\_skin.js":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\lib\\_skin.js"}],"C:\\eclipseWorkspace\\bitlms\\lib\\layout\\js\\_skins.js":[function(require,module,exports){
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
},{"./_async":"C:\\eclipseWorkspace\\bitlms\\lib\\layout\\js\\_async.js"}],"C:\\eclipseWorkspace\\bitlms\\lib\\layout\\js\\main.js":[function(require,module,exports){
require('./_breakpoints.js');
require('./_gridalicious.js');
require('./_scrollable.js');
require('./_skins');
require('./_isotope');
require('./_parallax');

// Sidebar Percentage Sizes Demo
require('./_sidebar-pc');
},{"./_breakpoints.js":"C:\\eclipseWorkspace\\bitlms\\lib\\layout\\js\\_breakpoints.js","./_gridalicious.js":"C:\\eclipseWorkspace\\bitlms\\lib\\layout\\js\\_gridalicious.js","./_isotope":"C:\\eclipseWorkspace\\bitlms\\lib\\layout\\js\\_isotope.js","./_parallax":"C:\\eclipseWorkspace\\bitlms\\lib\\layout\\js\\_parallax.js","./_scrollable.js":"C:\\eclipseWorkspace\\bitlms\\lib\\layout\\js\\_scrollable.js","./_sidebar-pc":"C:\\eclipseWorkspace\\bitlms\\lib\\layout\\js\\_sidebar-pc.js","./_skins":"C:\\eclipseWorkspace\\bitlms\\lib\\layout\\js\\_skins.js"}],"C:\\eclipseWorkspace\\bitlms\\lib\\maps\\js\\_skin.js":[function(require,module,exports){
module.exports=require("C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\lib\\_skin.js")
},{"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\lib\\_skin.js":"C:\\eclipseWorkspace\\bitlms\\lib\\charts\\js\\lib\\_skin.js"}],"C:\\eclipseWorkspace\\bitlms\\lib\\maps\\js\\google\\_edit.js":[function(require,module,exports){
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
},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\maps\\js\\google\\_filters.js":[function(require,module,exports){
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
},{"../../../layout/js/_skin":"C:\\eclipseWorkspace\\bitlms\\lib\\layout\\js\\_skin.js"}],"C:\\eclipseWorkspace\\bitlms\\lib\\maps\\js\\google\\_library.js":[function(require,module,exports){
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
},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\maps\\js\\google\\main.js":[function(require,module,exports){
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
},{"../_skin":"C:\\eclipseWorkspace\\bitlms\\lib\\maps\\js\\_skin.js","./_edit":"C:\\eclipseWorkspace\\bitlms\\lib\\maps\\js\\google\\_edit.js","./_filters":"C:\\eclipseWorkspace\\bitlms\\lib\\maps\\js\\google\\_filters.js","./_library.js":"C:\\eclipseWorkspace\\bitlms\\lib\\maps\\js\\google\\_library.js","./styles/_apple.js":"C:\\eclipseWorkspace\\bitlms\\lib\\maps\\js\\google\\styles\\_apple.js","./styles/_blue-gray.js":"C:\\eclipseWorkspace\\bitlms\\lib\\maps\\js\\google\\styles\\_blue-gray.js","./styles/_clean-cut.js":"C:\\eclipseWorkspace\\bitlms\\lib\\maps\\js\\google\\styles\\_clean-cut.js","./styles/_cool-grey.js":"C:\\eclipseWorkspace\\bitlms\\lib\\maps\\js\\google\\styles\\_cool-grey.js","./styles/_lemon-tree.js":"C:\\eclipseWorkspace\\bitlms\\lib\\maps\\js\\google\\styles\\_lemon-tree.js","./styles/_light-green.js":"C:\\eclipseWorkspace\\bitlms\\lib\\maps\\js\\google\\styles\\_light-green.js","./styles/_light-grey.js":"C:\\eclipseWorkspace\\bitlms\\lib\\maps\\js\\google\\styles\\_light-grey.js","./styles/_light-monochrome.js":"C:\\eclipseWorkspace\\bitlms\\lib\\maps\\js\\google\\styles\\_light-monochrome.js","./styles/_nature.js":"C:\\eclipseWorkspace\\bitlms\\lib\\maps\\js\\google\\styles\\_nature.js","./styles/_paper.js":"C:\\eclipseWorkspace\\bitlms\\lib\\maps\\js\\google\\styles\\_paper.js"}],"C:\\eclipseWorkspace\\bitlms\\lib\\maps\\js\\google\\styles\\_apple.js":[function(require,module,exports){
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
},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\maps\\js\\google\\styles\\_blue-gray.js":[function(require,module,exports){
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
},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\maps\\js\\google\\styles\\_clean-cut.js":[function(require,module,exports){
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
},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\maps\\js\\google\\styles\\_cool-grey.js":[function(require,module,exports){
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
},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\maps\\js\\google\\styles\\_lemon-tree.js":[function(require,module,exports){
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
},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\maps\\js\\google\\styles\\_light-green.js":[function(require,module,exports){
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
},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\maps\\js\\google\\styles\\_light-grey.js":[function(require,module,exports){
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
},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\maps\\js\\google\\styles\\_light-monochrome.js":[function(require,module,exports){
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
},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\maps\\js\\google\\styles\\_nature.js":[function(require,module,exports){
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
},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\maps\\js\\google\\styles\\_paper.js":[function(require,module,exports){
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
},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\material\\js\\_forms.js":[function(require,module,exports){
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

},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\material\\js\\_ripple.js":[function(require,module,exports){
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
},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\material\\js\\main.js":[function(require,module,exports){
require('./_forms');
require('./_ripple');
},{"./_forms":"C:\\eclipseWorkspace\\bitlms\\lib\\material\\js\\_forms.js","./_ripple":"C:\\eclipseWorkspace\\bitlms\\lib\\material\\js\\_ripple.js"}],"C:\\eclipseWorkspace\\bitlms\\lib\\media\\js\\_responsive-videos.js":[function(require,module,exports){
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
},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\media\\js\\carousel\\main.js":[function(require,module,exports){
require('./owl/main');
require('./slick/_default');
},{"./owl/main":"C:\\eclipseWorkspace\\bitlms\\lib\\media\\js\\carousel\\owl\\main.js","./slick/_default":"C:\\eclipseWorkspace\\bitlms\\lib\\media\\js\\carousel\\slick\\_default.js"}],"C:\\eclipseWorkspace\\bitlms\\lib\\media\\js\\carousel\\owl\\_default.js":[function(require,module,exports){
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
},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\media\\js\\carousel\\owl\\_mixed.js":[function(require,module,exports){
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
},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\media\\js\\carousel\\owl\\_preview.js":[function(require,module,exports){
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
},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\media\\js\\carousel\\owl\\main.js":[function(require,module,exports){
require('./_default');
require('./_mixed');
require('./_preview');
},{"./_default":"C:\\eclipseWorkspace\\bitlms\\lib\\media\\js\\carousel\\owl\\_default.js","./_mixed":"C:\\eclipseWorkspace\\bitlms\\lib\\media\\js\\carousel\\owl\\_mixed.js","./_preview":"C:\\eclipseWorkspace\\bitlms\\lib\\media\\js\\carousel\\owl\\_preview.js"}],"C:\\eclipseWorkspace\\bitlms\\lib\\media\\js\\carousel\\slick\\_default.js":[function(require,module,exports){
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
},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\media\\js\\main.js":[function(require,module,exports){
// Carousels
require('./carousel/main');

// Responsive Video iFrame Fix
require('./_responsive-videos');
},{"./_responsive-videos":"C:\\eclipseWorkspace\\bitlms\\lib\\media\\js\\_responsive-videos.js","./carousel/main":"C:\\eclipseWorkspace\\bitlms\\lib\\media\\js\\carousel\\main.js"}],"C:\\eclipseWorkspace\\bitlms\\lib\\messages\\js\\_breakpoints.js":[function(require,module,exports){
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

},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\messages\\js\\main.js":[function(require,module,exports){
require('./_breakpoints');
},{"./_breakpoints":"C:\\eclipseWorkspace\\bitlms\\lib\\messages\\js\\_breakpoints.js"}],"C:\\eclipseWorkspace\\bitlms\\lib\\sidebar\\js\\_breakpoints.js":[function(require,module,exports){
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

},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\sidebar\\js\\_collapsible.js":[function(require,module,exports){
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
},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\sidebar\\js\\_dropdown.js":[function(require,module,exports){
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
},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\sidebar\\js\\_options.js":[function(require,module,exports){
module.exports = function (sidebar) {
    return {
        "transform-button": sidebar.data('transformButton') === true,
        "transform-button-icon": sidebar.data('transformButtonIcon') || 'fa-ellipsis-h'
    };
};
},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\sidebar\\js\\_sidebar-menu.js":[function(require,module,exports){
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
},{"./_options":"C:\\eclipseWorkspace\\bitlms\\lib\\sidebar\\js\\_options.js"}],"C:\\eclipseWorkspace\\bitlms\\lib\\sidebar\\js\\_sidebar-toggle.js":[function(require,module,exports){
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
},{}],"C:\\eclipseWorkspace\\bitlms\\lib\\sidebar\\js\\main.js":[function(require,module,exports){
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
},{"./_breakpoints":"C:\\eclipseWorkspace\\bitlms\\lib\\sidebar\\js\\_breakpoints.js","./_collapsible":"C:\\eclipseWorkspace\\bitlms\\lib\\sidebar\\js\\_collapsible.js","./_dropdown":"C:\\eclipseWorkspace\\bitlms\\lib\\sidebar\\js\\_dropdown.js","./_sidebar-menu":"C:\\eclipseWorkspace\\bitlms\\lib\\sidebar\\js\\_sidebar-menu.js","./_sidebar-toggle":"C:\\eclipseWorkspace\\bitlms\\lib\\sidebar\\js\\_sidebar-toggle.js"}],"C:\\eclipseWorkspace\\bitlms\\src\\js\\themes\\html\\_countdown.js":[function(require,module,exports){
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
},{}],"C:\\eclipseWorkspace\\bitlms\\src\\js\\themes\\html\\main.js":[function(require,module,exports){
// Curriculum
require('./_curriculum');

// Scrolling behaviour
require('./_scroll');

// Quiz timer
require('./_countdown');

// Earnings chart
require('./_flotchart-earnings');
},{"./_countdown":"C:\\eclipseWorkspace\\bitlms\\src\\js\\themes\\html\\_countdown.js","./_curriculum":"C:\\eclipseWorkspace\\bitlms\\src\\js\\themes\\html\\_curriculum.js","./_flotchart-earnings":"C:\\eclipseWorkspace\\bitlms\\src\\js\\themes\\html\\_flotchart-earnings.js","./_scroll":"C:\\eclipseWorkspace\\bitlms\\src\\js\\themes\\html\\_scroll.js"}]},{},["./src/js/themes/html/app.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwic3JjXFxqc1xcdGhlbWVzXFxodG1sXFxhcHAuanMiLCJsaWJcXGNoYXJ0c1xcanNcXGVhc3ktcGllXFxfZWFzeS1waWUuanMiLCJsaWJcXGNoYXJ0c1xcanNcXGVhc3ktcGllXFxtYWluLmpzIiwibGliXFxjaGFydHNcXGpzXFxmbG90XFxfYXV0b3VwZGF0ZS5qcyIsImxpYlxcY2hhcnRzXFxqc1xcZmxvdFxcX2JhcnMtb3JkZXJlZC5qcyIsImxpYlxcY2hhcnRzXFxqc1xcZmxvdFxcX2JhcnMtc3RhY2tlZC5qcyIsImxpYlxcY2hhcnRzXFxqc1xcZmxvdFxcX2RvbnV0LmpzIiwibGliXFxjaGFydHNcXGpzXFxmbG90XFxfaGVscGVyLmpzIiwibGliXFxjaGFydHNcXGpzXFxmbG90XFxfaG9yaXpvbnRhbC5qcyIsImxpYlxcY2hhcnRzXFxqc1xcZmxvdFxcX2xpbmUuanMiLCJsaWJcXGNoYXJ0c1xcanNcXGZsb3RcXF9saW5lX2ZpbGxfbm9wb2ludHMuanMiLCJsaWJcXGNoYXJ0c1xcanNcXGZsb3RcXF9saW5lX2ZpbGxfbm9wb2ludHNfMi5qcyIsImxpYlxcY2hhcnRzXFxqc1xcZmxvdFxcX21peGVkLmpzIiwibGliXFxjaGFydHNcXGpzXFxmbG90XFxfcGllLmpzIiwibGliXFxjaGFydHNcXGpzXFxmbG90XFxfc2ltcGxlLmpzIiwibGliXFxjaGFydHNcXGpzXFxmbG90XFxtYWluLmpzIiwibGliXFxjaGFydHNcXGpzXFxsaWJcXF9za2luLmpzIiwibGliXFxjaGFydHNcXGpzXFxtYWluLmpzIiwibGliXFxjaGFydHNcXGpzXFxtb3JyaXNcXF9hcmVhLmpzIiwibGliXFxjaGFydHNcXGpzXFxtb3JyaXNcXF9iYXIuanMiLCJsaWJcXGNoYXJ0c1xcanNcXG1vcnJpc1xcX2RvbnV0LmpzIiwibGliXFxjaGFydHNcXGpzXFxtb3JyaXNcXF9saW5lLmpzIiwibGliXFxjaGFydHNcXGpzXFxtb3JyaXNcXG1haW4uanMiLCJsaWJcXGNoYXJ0c1xcanNcXHNwYXJrbGluZVxcX3NwYXJrbGluZS5qcyIsImxpYlxcY2hhcnRzXFxqc1xcc3BhcmtsaW5lXFxtYWluLmpzIiwibGliXFxlc3NlbnRpYWxcXGpzXFxfYm9vdHN0cmFwLWNhcm91c2VsLmpzIiwibGliXFxlc3NlbnRpYWxcXGpzXFxfYm9vdHN0cmFwLWNvbGxhcHNlLmpzIiwibGliXFxlc3NlbnRpYWxcXGpzXFxfYm9vdHN0cmFwLW1vZGFsLmpzIiwibGliXFxlc3NlbnRpYWxcXGpzXFxfYm9vdHN0cmFwLXN3aXRjaC5qcyIsImxpYlxcZXNzZW50aWFsXFxqc1xcX2NoZWNrLWFsbC5qcyIsImxpYlxcZXNzZW50aWFsXFxqc1xcX2NvdmVyLmpzIiwibGliXFxlc3NlbnRpYWxcXGpzXFxfZGF0ZXBpY2tlci5qcyIsImxpYlxcZXNzZW50aWFsXFxqc1xcX2RhdGVyYW5nZXBpY2tlci5qcyIsImxpYlxcZXNzZW50aWFsXFxqc1xcX2V4cGFuZGFibGUuanMiLCJsaWJcXGVzc2VudGlhbFxcanNcXF9pZnJhbWUuanMiLCJsaWJcXGVzc2VudGlhbFxcanNcXF9taW5pY29sb3JzLmpzIiwibGliXFxlc3NlbnRpYWxcXGpzXFxfbmVzdGFibGUuanMiLCJsaWJcXGVzc2VudGlhbFxcanNcXF9wYW5lbC1jb2xsYXBzZS5qcyIsImxpYlxcZXNzZW50aWFsXFxqc1xcX3Byb2dyZXNzLWJhcnMuanMiLCJsaWJcXGVzc2VudGlhbFxcanNcXF9zZWxlY3QyLmpzIiwibGliXFxlc3NlbnRpYWxcXGpzXFxfc2VsZWN0cGlja2VyLmpzIiwibGliXFxlc3NlbnRpYWxcXGpzXFxfc2hvdy1ob3Zlci5qcyIsImxpYlxcZXNzZW50aWFsXFxqc1xcX3NsaWRlci5qcyIsImxpYlxcZXNzZW50aWFsXFxqc1xcX3N1bW1lcm5vdGUuanMiLCJsaWJcXGVzc2VudGlhbFxcanNcXF90YWJsZXMuanMiLCJsaWJcXGVzc2VudGlhbFxcanNcXF90YWJzLmpzIiwibGliXFxlc3NlbnRpYWxcXGpzXFxfdG9vbHRpcC5qcyIsImxpYlxcZXNzZW50aWFsXFxqc1xcX3RvdWNoc3Bpbi5qcyIsImxpYlxcZXNzZW50aWFsXFxqc1xcX3RyZWUuanMiLCJsaWJcXGVzc2VudGlhbFxcanNcXF93aXphcmQuanMiLCJsaWJcXGVzc2VudGlhbFxcanNcXG1haW4uanMiLCJsaWJcXGxheW91dFxcanNcXF9hc3luYy5qcyIsImxpYlxcbGF5b3V0XFxqc1xcX2JyZWFrcG9pbnRzLmpzIiwibGliXFxsYXlvdXRcXGpzXFxfZ3JpZGFsaWNpb3VzLmpzIiwibGliXFxsYXlvdXRcXGpzXFxfaXNvdG9wZS5qcyIsImxpYlxcbGF5b3V0XFxqc1xcX3BhcmFsbGF4LmpzIiwibGliXFxsYXlvdXRcXGpzXFxfc2Nyb2xsYWJsZS5qcyIsImxpYlxcbGF5b3V0XFxqc1xcX3NpZGViYXItcGMuanMiLCJsaWJcXGxheW91dFxcanNcXF9za2lucy5qcyIsImxpYlxcbGF5b3V0XFxqc1xcbWFpbi5qcyIsImxpYlxcbWFwc1xcanNcXGdvb2dsZVxcX2VkaXQuanMiLCJsaWJcXG1hcHNcXGpzXFxnb29nbGVcXF9maWx0ZXJzLmpzIiwibGliXFxtYXBzXFxqc1xcZ29vZ2xlXFxfbGlicmFyeS5qcyIsImxpYlxcbWFwc1xcanNcXGdvb2dsZVxcbWFpbi5qcyIsImxpYlxcbWFwc1xcanNcXGdvb2dsZVxcc3R5bGVzXFxfYXBwbGUuanMiLCJsaWJcXG1hcHNcXGpzXFxnb29nbGVcXHN0eWxlc1xcX2JsdWUtZ3JheS5qcyIsImxpYlxcbWFwc1xcanNcXGdvb2dsZVxcc3R5bGVzXFxfY2xlYW4tY3V0LmpzIiwibGliXFxtYXBzXFxqc1xcZ29vZ2xlXFxzdHlsZXNcXF9jb29sLWdyZXkuanMiLCJsaWJcXG1hcHNcXGpzXFxnb29nbGVcXHN0eWxlc1xcX2xlbW9uLXRyZWUuanMiLCJsaWJcXG1hcHNcXGpzXFxnb29nbGVcXHN0eWxlc1xcX2xpZ2h0LWdyZWVuLmpzIiwibGliXFxtYXBzXFxqc1xcZ29vZ2xlXFxzdHlsZXNcXF9saWdodC1ncmV5LmpzIiwibGliXFxtYXBzXFxqc1xcZ29vZ2xlXFxzdHlsZXNcXF9saWdodC1tb25vY2hyb21lLmpzIiwibGliXFxtYXBzXFxqc1xcZ29vZ2xlXFxzdHlsZXNcXF9uYXR1cmUuanMiLCJsaWJcXG1hcHNcXGpzXFxnb29nbGVcXHN0eWxlc1xcX3BhcGVyLmpzIiwibGliXFxtYXRlcmlhbFxcanNcXF9mb3Jtcy5qcyIsImxpYlxcbWF0ZXJpYWxcXGpzXFxfcmlwcGxlLmpzIiwibGliXFxtYXRlcmlhbFxcanNcXG1haW4uanMiLCJsaWJcXG1lZGlhXFxqc1xcX3Jlc3BvbnNpdmUtdmlkZW9zLmpzIiwibGliXFxtZWRpYVxcanNcXGNhcm91c2VsXFxtYWluLmpzIiwibGliXFxtZWRpYVxcanNcXGNhcm91c2VsXFxvd2xcXF9kZWZhdWx0LmpzIiwibGliXFxtZWRpYVxcanNcXGNhcm91c2VsXFxvd2xcXF9taXhlZC5qcyIsImxpYlxcbWVkaWFcXGpzXFxjYXJvdXNlbFxcb3dsXFxfcHJldmlldy5qcyIsImxpYlxcbWVkaWFcXGpzXFxjYXJvdXNlbFxcb3dsXFxtYWluLmpzIiwibGliXFxtZWRpYVxcanNcXGNhcm91c2VsXFxzbGlja1xcX2RlZmF1bHQuanMiLCJsaWJcXG1lZGlhXFxqc1xcbWFpbi5qcyIsImxpYlxcbWVzc2FnZXNcXGpzXFxfYnJlYWtwb2ludHMuanMiLCJsaWJcXG1lc3NhZ2VzXFxqc1xcbWFpbi5qcyIsImxpYlxcc2lkZWJhclxcanNcXF9icmVha3BvaW50cy5qcyIsImxpYlxcc2lkZWJhclxcanNcXF9jb2xsYXBzaWJsZS5qcyIsImxpYlxcc2lkZWJhclxcanNcXF9kcm9wZG93bi5qcyIsImxpYlxcc2lkZWJhclxcanNcXF9vcHRpb25zLmpzIiwibGliXFxzaWRlYmFyXFxqc1xcX3NpZGViYXItbWVudS5qcyIsImxpYlxcc2lkZWJhclxcanNcXF9zaWRlYmFyLXRvZ2dsZS5qcyIsImxpYlxcc2lkZWJhclxcanNcXG1haW4uanMiLCJzcmNcXGpzXFx0aGVtZXNcXGh0bWxcXF9jb3VudGRvd24uanMiLCJzcmNcXGpzXFx0aGVtZXNcXGh0bWxcXF9jdXJyaWN1bHVtLmpzIiwic3JjXFxqc1xcdGhlbWVzXFxodG1sXFxfZmxvdGNoYXJ0LWVhcm5pbmdzLmpzIiwic3JjXFxqc1xcdGhlbWVzXFxodG1sXFxfc2Nyb2xsLmpzIiwic3JjXFxqc1xcdGhlbWVzXFxodG1sXFxtYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNEQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0VBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRUE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9SQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBFc3NlbnRpYWxzXG5yZXF1aXJlKCdlc3NlbnRpYWwvanMvbWFpbicpO1xuXG4vLyBMYXlvdXRcbnJlcXVpcmUoJ2xheW91dC9qcy9tYWluJyk7XG5cbi8vIFNpZGViYXJcbnJlcXVpcmUoJ3NpZGViYXIvanMvbWFpbicpO1xuXG4vLyBDaGFydHNcbnJlcXVpcmUoJ2NoYXJ0cy9qcy9tYWluJyk7XG5cbi8vIE1lc3NhZ2VzXG5yZXF1aXJlKCdtZXNzYWdlcy9qcy9tYWluJyk7XG5cbi8vIE1lZGlhXG5yZXF1aXJlKCdtZWRpYS9qcy9tYWluJyk7XG5cbi8vIE1hdGVyaWFsXG5yZXF1aXJlKCdtYXRlcmlhbC9qcy9tYWluJyk7XG5cbi8vIE1hcHNcbndpbmRvdy5pbml0R29vZ2xlTWFwcyA9IHJlcXVpcmUoJ21hcHMvanMvZ29vZ2xlL21haW4nKTtcblxuLy8gQ09SRVxucmVxdWlyZSgnLi9tYWluJyk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICB2YXIgc2tpbiA9IHJlcXVpcmUoJy4uL2xpYi9fc2tpbicpKCk7XG5cbiAgICAvKipcbiAgICAgKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAgICAgKi9cbiAgICAkLmZuLnRrRWFzeVBpZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIGlmICghJC5mbi5lYXN5UGllQ2hhcnQpIHJldHVybjtcblxuICAgICAgICB2YXIgY29sb3IgPSBjb25maWcuc2tpbnNbIHNraW4gXVsgJ3ByaW1hcnktY29sb3InIF07XG4gICAgICAgIGlmICh0aGlzLmlzKCcuaW5mbycpKSBjb2xvciA9IGNvbG9yc1sgJ2luZm8tY29sb3InIF07XG4gICAgICAgIGlmICh0aGlzLmlzKCcuZGFuZ2VyJykpIGNvbG9yID0gY29sb3JzWyAnZGFuZ2VyLWNvbG9yJyBdO1xuICAgICAgICBpZiAodGhpcy5pcygnLnN1Y2Nlc3MnKSkgY29sb3IgPSBjb2xvcnNbICdzdWNjZXNzLWNvbG9yJyBdO1xuICAgICAgICBpZiAodGhpcy5pcygnLndhcm5pbmcnKSkgY29sb3IgPSBjb2xvcnNbICd3YXJuaW5nLWNvbG9yJyBdO1xuICAgICAgICBpZiAodGhpcy5pcygnLmludmVyc2UnKSkgY29sb3IgPSBjb2xvcnNbICdpbnZlcnNlLWNvbG9yJyBdO1xuXG4gICAgICAgIHRoaXMuZWFzeVBpZUNoYXJ0KHtcbiAgICAgICAgICAgIGJhckNvbG9yOiBjb2xvcixcbiAgICAgICAgICAgIGFuaW1hdGU6ICgkKCdodG1sJykuaXMoJy5pZScpID8gZmFsc2UgOiAzMDAwKSxcbiAgICAgICAgICAgIGxpbmVXaWR0aDogNCxcbiAgICAgICAgICAgIHNpemU6IDUwXG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgICQuZWFjaCgkKCcuZWFzeS1waWUnKSwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICAgICAgJCh0aGlzKS50a0Vhc3lQaWUoKTtcbiAgICB9KTtcblxufSkoalF1ZXJ5KTsiLCJyZXF1aXJlKCcuL19lYXN5LXBpZScpOyIsIihmdW5jdGlvbiAoJCkge1xuXG4gICAgdmFyIGNoYXJ0cyA9IHJlcXVpcmUoJy4vX2hlbHBlcicpO1xuXG4gICAgaWYgKHR5cGVvZiBjaGFydHMgPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgIHJldHVybjtcblxuICAgIGNoYXJ0cy5jaGFydF9saXZlID1cbiAgICB7XG4gICAgICAgIC8vIGNoYXJ0IGRhdGFcbiAgICAgICAgZGF0YTogW10sXG4gICAgICAgIHRvdGFsUG9pbnRzOiAzMDAsXG4gICAgICAgIHVwZGF0ZUludGVydmFsOiAyMDAsXG5cbiAgICAgICAgLy8gd2UgdXNlIGFuIGlubGluZSBkYXRhIHNvdXJjZSBpbiB0aGUgZXhhbXBsZSwgdXN1YWxseSBkYXRhIHdvdWxkXG4gICAgICAgIC8vIGJlIGZldGNoZWQgZnJvbSBhIHNlcnZlclxuICAgICAgICBnZXRSYW5kb21EYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLnNsaWNlKDEpO1xuXG4gICAgICAgICAgICAvLyBkbyBhIHJhbmRvbSB3YWxrXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5kYXRhLmxlbmd0aCA8IHRoaXMudG90YWxQb2ludHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJldiA9IHRoaXMuZGF0YS5sZW5ndGggPiAwID8gdGhpcy5kYXRhWyB0aGlzLmRhdGEubGVuZ3RoIC0gMSBdIDogNTA7XG4gICAgICAgICAgICAgICAgdmFyIHkgPSBwcmV2ICsgTWF0aC5yYW5kb20oKSAqIDEwIC0gNTtcbiAgICAgICAgICAgICAgICBpZiAoeSA8IDApXG4gICAgICAgICAgICAgICAgICAgIHkgPSAwO1xuICAgICAgICAgICAgICAgIGlmICh5ID4gMTAwKVxuICAgICAgICAgICAgICAgICAgICB5ID0gMTAwO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5wdXNoKHkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB6aXAgdGhlIGdlbmVyYXRlZCB5IHZhbHVlcyB3aXRoIHRoZSB4IHZhbHVlc1xuICAgICAgICAgICAgdmFyIHJlcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRhdGEubGVuZ3RoOyArKyBpKVxuICAgICAgICAgICAgICAgIHJlcy5wdXNoKFsgaSwgdGhpcy5kYXRhWyBpIF0gXSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIHdpbGwgaG9sZCB0aGUgY2hhcnQgb2JqZWN0XG4gICAgICAgIHBsb3Q6IG51bGwsXG5cbiAgICAgICAgLy8gY2hhcnQgb3B0aW9uc1xuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBzZXJpZXM6IHtcbiAgICAgICAgICAgICAgICBncm93OiB7YWN0aXZlOiBmYWxzZX0sXG4gICAgICAgICAgICAgICAgc2hhZG93U2l6ZTogMCxcbiAgICAgICAgICAgICAgICBsaW5lczoge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBmaWxsOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBsaW5lV2lkdGg6IDIsXG4gICAgICAgICAgICAgICAgICAgIHN0ZXBzOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBncmlkOiB7XG4gICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhYm92ZURhdGE6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvcnNbICdkZWZhdWx0LWxpZ2h0LWNvbG9yJyBdLFxuICAgICAgICAgICAgICAgIGxhYmVsTWFyZ2luOiA1LFxuICAgICAgICAgICAgICAgIGF4aXNNYXJnaW46IDAsXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDAsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IG51bGwsXG4gICAgICAgICAgICAgICAgbWluQm9yZGVyTWFyZ2luOiA1LFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBob3ZlcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYXV0b0hpZ2hsaWdodDogZmFsc2UsXG4gICAgICAgICAgICAgICAgbW91c2VBY3RpdmVSYWRpdXM6IDIwLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjoge31cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb2xvcnM6IFtdLFxuICAgICAgICAgICAgdG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICAgIHRvb2x0aXBPcHRzOiB7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCJWYWx1ZSBpcyA6ICV5LjBcIixcbiAgICAgICAgICAgICAgICBzaGlmdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgeDogLSAzMCxcbiAgICAgICAgICAgICAgICAgICAgeTogLSA1MFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGVmYXVsdFRoZW1lOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICAgIG1heDogMTAwLFxuICAgICAgICAgICAgICAgIHRpY2tDb2xvcjogJyNlZmVmZWYnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIGluaXRpYWxpemVcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKHdyYXBwZXIpIHtcblxuICAgICAgICAgICAgaWYgKCF3cmFwcGVyLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgICAgICAvLyBhcHBseSBzdHlsaW5nXG4gICAgICAgICAgICBjaGFydHMudXRpbGl0eS5hcHBseVN0eWxlKHRoaXMpO1xuXG4gICAgICAgICAgICB0aGlzLnBsb3QgPSAkLnBsb3Qod3JhcHBlciwgWyB0aGlzLmdldFJhbmRvbURhdGEoKSBdLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgc2V0VGltZW91dCh0aGlzLnVwZGF0ZSwgY2hhcnRzLmNoYXJ0X2xpdmUudXBkYXRlSW50ZXJ2YWwpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIHVwZGF0ZVxuICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNoYXJ0cy5jaGFydF9saXZlLnBsb3Quc2V0RGF0YShbIGNoYXJ0cy5jaGFydF9saXZlLmdldFJhbmRvbURhdGEoKSBdKTtcbiAgICAgICAgICAgIGNoYXJ0cy5jaGFydF9saXZlLnBsb3QuZHJhdygpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGNoYXJ0cy5jaGFydF9saXZlLnVwZGF0ZSwgY2hhcnRzLmNoYXJ0X2xpdmUudXBkYXRlSW50ZXJ2YWwpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIGpRdWVyeSBwbHVnaW4gd3JhcHBlciBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEFuZ3VsYXIgVUkuVXRpbHM6IGpRdWVyeSBQYXNzdGhyb3VnaFxuICAgICAqL1xuICAgICQuZm4udGtGbG90Q2hhcnRMaXZlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgY2hhcnRzLmNoYXJ0X2xpdmUuaW5pdCh0aGlzKTtcblxuICAgIH07XG5cbiAgICAkKCdbZGF0YS10b2dnbGU9XCJmbG90LWNoYXJ0LWxpdmVcIl0nKS50a0Zsb3RDaGFydExpdmUoKTtcblxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24gKCQpIHtcblxuICAgIHZhciBjaGFydHMgPSByZXF1aXJlKCcuL19oZWxwZXInKTtcblxuICAgIGlmICh0eXBlb2YgY2hhcnRzID09ICd1bmRlZmluZWQnKVxuICAgICAgICByZXR1cm47XG5cbiAgICBjaGFydHMuY2hhcnRfb3JkZXJlZF9iYXJzID1cbiAgICB7XG4gICAgICAgIC8vIGNoYXJ0IGRhdGFcbiAgICAgICAgZGF0YTogbnVsbCxcblxuICAgICAgICAvLyB3aWxsIGhvbGQgdGhlIGNoYXJ0IG9iamVjdFxuICAgICAgICBwbG90OiBudWxsLFxuXG4gICAgICAgIC8vIGNoYXJ0IG9wdGlvbnNcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgYmFyczoge1xuICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgYmFyV2lkdGg6IDAuMixcbiAgICAgICAgICAgICAgICBmaWxsOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ3JpZDoge1xuICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgYWJvdmVEYXRhOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb2xvcjogY29sb3JzWyAnZGVmYXVsdC1saWdodC1jb2xvcicgXSxcbiAgICAgICAgICAgICAgICBsYWJlbE1hcmdpbjogNSxcbiAgICAgICAgICAgICAgICBheGlzTWFyZ2luOiAwLFxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAwLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBudWxsLFxuICAgICAgICAgICAgICAgIG1pbkJvcmRlck1hcmdpbjogNSxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgaG92ZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGF1dG9IaWdobGlnaHQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1vdXNlQWN0aXZlUmFkaXVzOiAyMCxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VyaWVzOiB7XG4gICAgICAgICAgICAgICAgZ3Jvdzoge2FjdGl2ZTogZmFsc2V9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwibmVcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IG51bGwsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZE9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgICAgbm9Db2x1bW5zOiAzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgICAgICB0aWNrczogMyxcbiAgICAgICAgICAgICAgICB0aWNrQ29sb3I6ICcjZWZlZmVmJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICAgICAgdGlja3M6IDQsXG4gICAgICAgICAgICAgICAgdGlja0RlY2ltYWxzOiAwLFxuICAgICAgICAgICAgICAgIHRpY2tDb2xvcjogJ3RyYW5zcGFyZW50J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbG9yczogW10sXG4gICAgICAgICAgICB0b29sdGlwOiB0cnVlLFxuICAgICAgICAgICAgdG9vbHRpcE9wdHM6IHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIiVzIDogJXkuMFwiLFxuICAgICAgICAgICAgICAgIHNoaWZ0czoge1xuICAgICAgICAgICAgICAgICAgICB4OiAtIDMwLFxuICAgICAgICAgICAgICAgICAgICB5OiAtIDUwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0VGhlbWU6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gaW5pdGlhbGl6ZVxuICAgICAgICBpbml0OiBmdW5jdGlvbiAod3JhcHBlcikge1xuXG4gICAgICAgICAgICBpZiAoISB3cmFwcGVyLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgICAgICAvLyBhcHBseSBzdHlsaW5nXG4gICAgICAgICAgICBjaGFydHMudXRpbGl0eS5hcHBseVN0eWxlKHRoaXMpO1xuXG4gICAgICAgICAgICAvL3NvbWUgZGF0YVxuICAgICAgICAgICAgdmFyIGQxID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSAxMDsgaSArPSAxKVxuICAgICAgICAgICAgICAgIGQxLnB1c2goWyBpLCBwYXJzZUludChNYXRoLnJhbmRvbSgpICogMzApIF0pO1xuXG4gICAgICAgICAgICB2YXIgZDIgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDw9IDEwOyBqICs9IDEpXG4gICAgICAgICAgICAgICAgZDIucHVzaChbIGosIHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAzMCkgXSk7XG5cbiAgICAgICAgICAgIHZhciBkMyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPD0gMTA7IGsgKz0gMSlcbiAgICAgICAgICAgICAgICBkMy5wdXNoKFsgaywgcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIDMwKSBdKTtcblxuICAgICAgICAgICAgdmFyIGRzID0gW107XG5cbiAgICAgICAgICAgIGRzLnB1c2goe1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcIkRhdGEgT25lXCIsXG4gICAgICAgICAgICAgICAgZGF0YTogZDEsXG4gICAgICAgICAgICAgICAgYmFyczoge29yZGVyOiAxfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJEYXRhIFR3b1wiLFxuICAgICAgICAgICAgICAgIGRhdGE6IGQyLFxuICAgICAgICAgICAgICAgIGJhcnM6IHtvcmRlcjogMn1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZHMucHVzaCh7XG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiRGF0YSBUaHJlZVwiLFxuICAgICAgICAgICAgICAgIGRhdGE6IGQzLFxuICAgICAgICAgICAgICAgIGJhcnM6IHtvcmRlcjogM31cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBkcztcblxuICAgICAgICAgICAgdGhpcy5wbG90ID0gJC5wbG90KHdyYXBwZXIsIHRoaXMuZGF0YSwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAgICAgKi9cbiAgICAkLmZuLnRrRmxvdENoYXJ0T3JkZXJlZEJhcnMgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBjaGFydHMuY2hhcnRfb3JkZXJlZF9iYXJzLmluaXQodGhpcyk7XG5cbiAgICB9O1xuXG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwiZmxvdC1jaGFydC1vcmRlcmVkLWJhcnNcIl0nKS50a0Zsb3RDaGFydE9yZGVyZWRCYXJzKCk7XG5cbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgICB2YXIgY2hhcnRzID0gcmVxdWlyZSgnLi9faGVscGVyJyk7XG5cbiAgICBpZiAodHlwZW9mIGNoYXJ0cyA9PSAndW5kZWZpbmVkJylcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgY2hhcnRzLmNoYXJ0X3N0YWNrZWRfYmFycyA9XG4gICAge1xuICAgICAgICAvLyBjaGFydCBkYXRhXG4gICAgICAgIGRhdGE6IG51bGwsXG5cbiAgICAgICAgLy8gd2lsbCBob2xkIHRoZSBjaGFydCBvYmplY3RcbiAgICAgICAgcGxvdDogbnVsbCxcblxuICAgICAgICAvLyBjaGFydCBvcHRpb25zXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGdyaWQ6IHtcbiAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgIGFib3ZlRGF0YTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yc1sgJ2RlZmF1bHQtbGlnaHQtY29sb3InIF0sXG4gICAgICAgICAgICAgICAgbGFiZWxNYXJnaW46IDUsXG4gICAgICAgICAgICAgICAgYXhpc01hcmdpbjogMCxcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMCxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogbnVsbCxcbiAgICAgICAgICAgICAgICBtaW5Cb3JkZXJNYXJnaW46IDUsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGhvdmVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhdXRvSGlnaGxpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgICAgIG1vdXNlQWN0aXZlUmFkaXVzOiAyMCxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VyaWVzOiB7XG4gICAgICAgICAgICAgICAgZ3Jvdzoge2FjdGl2ZTogZmFsc2V9LFxuICAgICAgICAgICAgICAgIHN0YWNrOiAwLFxuICAgICAgICAgICAgICAgIGxpbmVzOiB7c2hvdzogZmFsc2UsIGZpbGw6IHRydWUsIHN0ZXBzOiBmYWxzZX0sXG4gICAgICAgICAgICAgICAgYmFyczoge3Nob3c6IHRydWUsIGJhcldpZHRoOiAwLjUsIGZpbGw6IDF9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgICAgICB0aWNrczogMyxcbiAgICAgICAgICAgICAgICB0aWNrQ29sb3I6ICcjZWZlZmVmJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICAgICAgdGlja3M6IDExLFxuICAgICAgICAgICAgICAgIHRpY2tEZWNpbWFsczogMCxcbiAgICAgICAgICAgICAgICB0aWNrQ29sb3I6ICd0cmFuc3BhcmVudCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJuZVwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogbnVsbCxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kT3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICBub0NvbHVtbnM6IDNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb2xvcnM6IFtdLFxuICAgICAgICAgICAgc2hhZG93U2l6ZTogMSxcbiAgICAgICAgICAgIHRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgICB0b29sdGlwT3B0czoge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiJXMgOiAleS4wXCIsXG4gICAgICAgICAgICAgICAgc2hpZnRzOiB7XG4gICAgICAgICAgICAgICAgICAgIHg6IC0gMzAsXG4gICAgICAgICAgICAgICAgICAgIHk6IC0gNTBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRlZmF1bHRUaGVtZTogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvLyBpbml0aWFsaXplXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICh3cmFwcGVyKSB7XG5cbiAgICAgICAgICAgIGlmICghIHdyYXBwZXIubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgICAgIC8vIGFwcGx5IHN0eWxpbmdcbiAgICAgICAgICAgIGNoYXJ0cy51dGlsaXR5LmFwcGx5U3R5bGUodGhpcyk7XG5cbiAgICAgICAgICAgIHZhciBkMSA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gMTA7IGkgKz0gMSlcbiAgICAgICAgICAgICAgICBkMS5wdXNoKFsgaSwgcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIDMwKSBdKTtcblxuICAgICAgICAgICAgdmFyIGQyID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8PSAxMDsgaiArPSAxKVxuICAgICAgICAgICAgICAgIGQyLnB1c2goWyBqLCBwYXJzZUludChNYXRoLnJhbmRvbSgpICogMjApIF0pO1xuXG4gICAgICAgICAgICB2YXIgZDMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDw9IDEwOyBrICs9IDEpXG4gICAgICAgICAgICAgICAgZDMucHVzaChbIGssIHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiAyMCkgXSk7XG5cbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IFtdO1xuXG4gICAgICAgICAgICB0aGlzLmRhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiRGF0YSBPbmVcIixcbiAgICAgICAgICAgICAgICBkYXRhOiBkMVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmRhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiRGF0YSBUd29cIixcbiAgICAgICAgICAgICAgICBkYXRhOiBkMlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmRhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiRGF0YSBUcmVlXCIsXG4gICAgICAgICAgICAgICAgZGF0YTogZDNcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLnBsb3QgPSAkLnBsb3Qod3JhcHBlciwgdGhpcy5kYXRhLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIGpRdWVyeSBwbHVnaW4gd3JhcHBlciBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEFuZ3VsYXIgVUkuVXRpbHM6IGpRdWVyeSBQYXNzdGhyb3VnaFxuICAgICAqL1xuICAgICQuZm4udGtGbG90Q2hhcnRTdGFja2VkQmFycyA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIGNoYXJ0cy5jaGFydF9zdGFja2VkX2JhcnMuaW5pdCh0aGlzKTtcblxuICAgIH07XG5cbiAgICAkKCdbZGF0YS10b2dnbGU9XCJmbG90LWNoYXJ0LXN0YWNrZWQtYmFyc1wiXScpLnRrRmxvdENoYXJ0U3RhY2tlZEJhcnMoKTtcblxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24gKCQpIHtcblxuICAgIHZhciBjaGFydHMgPSByZXF1aXJlKCcuL19oZWxwZXInKTtcblxuICAgIGlmICh0eXBlb2YgY2hhcnRzID09ICd1bmRlZmluZWQnKVxuICAgICAgICByZXR1cm47XG5cbiAgICBjaGFydHMuY2hhcnRfZG9udXQgPVxuICAgIHtcbiAgICAgICAgLy8gY2hhcnQgZGF0YVxuICAgICAgICBkYXRhOiBbXG4gICAgICAgICAgICB7bGFiZWw6IFwiVVNBXCIsIGRhdGE6IDM4fSxcbiAgICAgICAgICAgIHtsYWJlbDogXCJCcmF6aWxcIiwgZGF0YTogMjN9LFxuICAgICAgICAgICAge2xhYmVsOiBcIkluZGlhXCIsIGRhdGE6IDE1fSxcbiAgICAgICAgICAgIHtsYWJlbDogXCJUdXJrZXlcIiwgZGF0YTogOX0sXG4gICAgICAgICAgICB7bGFiZWw6IFwiRnJhbmNlXCIsIGRhdGE6IDd9LFxuICAgICAgICAgICAge2xhYmVsOiBcIkNoaW5hXCIsIGRhdGE6IDV9LFxuICAgICAgICAgICAge2xhYmVsOiBcIkdlcm1hbnlcIiwgZGF0YTogM31cbiAgICAgICAgXSxcblxuICAgICAgICAvLyB3aWxsIGhvbGQgdGhlIGNoYXJ0IG9iamVjdFxuICAgICAgICBwbG90OiBudWxsLFxuXG4gICAgICAgIC8vIGNoYXJ0IG9wdGlvbnNcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgc2VyaWVzOiB7XG4gICAgICAgICAgICAgICAgcGllOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGlubmVyUmFkaXVzOiAwLjQsXG4gICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC4xXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHJhZGl1czogMSxcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDhcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRBbmdsZTogMixcbiAgICAgICAgICAgICAgICAgICAgY29tYmluZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjRUVFJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZDogMC4wNVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1czogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKGxhYmVsLCBzZXJpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJsYWJlbCBsYWJlbC1kZWZhdWx0XCI+JyArIGxhYmVsICsgJyZuYnNwOycgKyBNYXRoLnJvdW5kKHNlcmllcy5wZXJjZW50KSArICclPC9kaXY+JztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZ3Jvdzoge2FjdGl2ZTogZmFsc2V9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVnZW5kOiB7c2hvdzogZmFsc2V9LFxuICAgICAgICAgICAgZ3JpZDoge1xuICAgICAgICAgICAgICAgIGhvdmVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbG9yczogW10sXG4gICAgICAgICAgICB0b29sdGlwOiB0cnVlLFxuICAgICAgICAgICAgdG9vbHRpcE9wdHM6IHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIiVzIDogJXkuMVwiICsgXCIlXCIsXG4gICAgICAgICAgICAgICAgc2hpZnRzOiB7XG4gICAgICAgICAgICAgICAgICAgIHg6IC0gMzAsXG4gICAgICAgICAgICAgICAgICAgIHk6IC0gNTBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRlZmF1bHRUaGVtZTogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvLyBpbml0aWFsaXplXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICh3cmFwcGVyKSB7XG5cbiAgICAgICAgICAgIGlmICghIHdyYXBwZXIubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgICAgIC8vIGFwcGx5IHN0eWxpbmdcbiAgICAgICAgICAgIGNoYXJ0cy51dGlsaXR5LmFwcGx5U3R5bGUodGhpcyk7XG5cbiAgICAgICAgICAgIHRoaXMucGxvdCA9ICQucGxvdCh3cmFwcGVyLCB0aGlzLmRhdGEsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogalF1ZXJ5IHBsdWdpbiB3cmFwcGVyIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQW5ndWxhciBVSS5VdGlsczogalF1ZXJ5IFBhc3N0aHJvdWdoXG4gICAgICovXG4gICAgJC5mbi50a0Zsb3RDaGFydERvbnV0ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgY2hhcnRzLmNoYXJ0X2RvbnV0LmluaXQodGhpcyk7XG5cbiAgICB9O1xuXG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwiZmxvdC1jaGFydC1kb251dFwiXScpLnRrRmxvdENoYXJ0RG9udXQoKTtcblxufSkoalF1ZXJ5KTsiLCJ2YXIgc2tpbiA9IHJlcXVpcmUoJy4uL2xpYi9fc2tpbicpKCk7XG5cbnZhciBjaGFydHMgPVxue1xuICAgIC8vIHV0aWxpdHkgY2xhc3NcbiAgICB1dGlsaXR5OiB7XG4gICAgICAgIGNoYXJ0Q29sb3JzOiBbIGNvbmZpZy5za2luc1sgc2tpbiBdWyAncHJpbWFyeS1jb2xvcicgXSwgY29sb3JzWyAnZGVmYXVsdC1jb2xvcicgXSwgY29sb3JzWyAnZGFuZ2VyLWNvbG9yJyBdLCBjb2xvcnNbICdzdWNjZXNzLWNvbG9yJyBdLCBjb2xvcnNbICd3YXJuaW5nLWNvbG9yJyBdIF0sXG4gICAgICAgIGNoYXJ0QmFja2dyb3VuZENvbG9yczogWyBcInJnYmEoMjU1LDI1NSwyNTUsMClcIiwgXCJyZ2JhKDI1NSwyNTUsMjU1LDApXCIgXSxcblxuICAgICAgICBhcHBseVN0eWxlOiBmdW5jdGlvbiAodGhhdCkge1xuICAgICAgICAgICAgdGhhdC5vcHRpb25zLmNvbG9ycyA9IGNoYXJ0cy51dGlsaXR5LmNoYXJ0Q29sb3JzO1xuICAgICAgICAgICAgdGhhdC5vcHRpb25zLmdyaWQuYmFja2dyb3VuZENvbG9yID0geyBjb2xvcnM6IGNoYXJ0cy51dGlsaXR5LmNoYXJ0QmFja2dyb3VuZENvbG9ycyB9O1xuICAgICAgICAgICAgdGhhdC5vcHRpb25zLmdyaWQuYm9yZGVyQ29sb3IgPSBjaGFydHMudXRpbGl0eS5jaGFydENvbG9yc1sgMCBdO1xuICAgICAgICAgICAgdGhhdC5vcHRpb25zLmdyaWQuY29sb3IgPSBjaGFydHMudXRpbGl0eS5jaGFydENvbG9yc1sgMCBdO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIGdlbmVyYXRlIHJhbmRvbSBudW1iZXIgZm9yIGNoYXJ0c1xuICAgICAgICByYW5kTnVtOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxICsgNDAgLSAyMCkpICkgKyAyMDtcbiAgICAgICAgfVxuICAgIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjaGFydHM7IiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgICB2YXIgc2tpbiA9IHJlcXVpcmUoJy4uL2xpYi9fc2tpbicpKCk7XG4gICAgdmFyIGNoYXJ0cyA9IHJlcXVpcmUoJy4vX2hlbHBlcicpO1xuXG4gICAgaWYgKHR5cGVvZiBjaGFydHMgPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgIHJldHVybjtcblxuICAgIGNoYXJ0cy5jaGFydF9ob3Jpem9udGFsX2JhcnMgPVxuICAgIHtcbiAgICAgICAgLy8gY2hhcnQgZGF0YVxuICAgICAgICBkYXRhOiBudWxsLFxuXG4gICAgICAgIC8vIHdpbGwgaG9sZCB0aGUgY2hhcnQgb2JqZWN0XG4gICAgICAgIHBsb3Q6IG51bGwsXG5cbiAgICAgICAgLy8gY2hhcnQgb3B0aW9uc1xuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBncmlkOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IFwiI2RlZGVkZVwiLFxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGhvdmVyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlcmllczoge1xuICAgICAgICAgICAgICAgIGdyb3c6IHthY3RpdmU6IGZhbHNlfSxcbiAgICAgICAgICAgICAgICBiYXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGJhcldpZHRoOiAwLjIsXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IDFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVnZW5kOiB7cG9zaXRpb246IFwibndcIiwgYmFja2dyb3VuZENvbG9yOiBudWxsLCBiYWNrZ3JvdW5kT3BhY2l0eTogMH0sXG4gICAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgICAgIHRpY2tzOiAzLFxuICAgICAgICAgICAgICAgIHRpY2tDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICB0aWNrRm9ybWF0dGVyOiBmdW5jdGlvbiAodmFsLCBheGlzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWwgKyBcImtcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgICAgICB0aWNrczogNCxcbiAgICAgICAgICAgICAgICB0aWNrRGVjaW1hbHM6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb2xvcnM6IFsgY29uZmlnLnNraW5zWyBza2luIF1bICdwcmltYXJ5LWNvbG9yJyBdIF0sXG4gICAgICAgICAgICB0b29sdGlwOiB0cnVlLFxuICAgICAgICAgICAgdG9vbHRpcE9wdHM6IHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIiVzIDogJXkuMFwiLFxuICAgICAgICAgICAgICAgIHNoaWZ0czoge1xuICAgICAgICAgICAgICAgICAgICB4OiAtIDMwLFxuICAgICAgICAgICAgICAgICAgICB5OiAtIDUwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0VGhlbWU6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gaW5pdGlhbGl6ZVxuICAgICAgICBpbml0OiBmdW5jdGlvbiAod3JhcHBlcikge1xuXG4gICAgICAgICAgICBpZiAoIXdyYXBwZXIubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgICAgIC8vIGFwcGx5IHN0eWxpbmdcbiAgICAgICAgICAgIC8vIGNoYXJ0cy51dGlsaXR5LmFwcGx5U3R5bGUodGhpcyk7XG5cbiAgICAgICAgICAgIHZhciBkMSA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gNTsgaSArPSAxKVxuICAgICAgICAgICAgICAgIGQxLnB1c2goWyBwYXJzZUludChNYXRoLnJhbmRvbSgpICogMzApLCBpIF0pO1xuXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBbXTtcblxuICAgICAgICAgICAgdGhpcy5kYXRhLnB1c2goe1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcIlNhbGVzIFZvbHVtZVwiLFxuICAgICAgICAgICAgICAgIGRhdGE6IGQxLFxuICAgICAgICAgICAgICAgIGJhcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYmFyV2lkdGg6IDAuNVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLnBsb3QgPSAkLnBsb3Qod3JhcHBlciwgdGhpcy5kYXRhLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIGpRdWVyeSBwbHVnaW4gd3JhcHBlciBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEFuZ3VsYXIgVUkuVXRpbHM6IGpRdWVyeSBQYXNzdGhyb3VnaFxuICAgICAqL1xuICAgICQuZm4udGtGbG90Q2hhcnRIb3Jpem9udGFsQmFycyA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIGNoYXJ0cy5jaGFydF9ob3Jpem9udGFsX2JhcnMuaW5pdCh0aGlzKTtcblxuICAgIH07XG5cbiAgICAkKCdbZGF0YS10b2dnbGU9XCJmbG90LWNoYXJ0LWhvcml6b250YWwtYmFyc1wiXScpLnRrRmxvdENoYXJ0SG9yaXpvbnRhbEJhcnMoKTtcblxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24gKCQpIHtcblxuICAgIHZhciBza2luID0gcmVxdWlyZSgnLi4vbGliL19za2luJykoKTtcbiAgICB2YXIgY2hhcnRzID0gcmVxdWlyZSgnLi9faGVscGVyJyk7XG5cbiAgICBpZiAodHlwZW9mIGNoYXJ0cyA9PSAndW5kZWZpbmVkJylcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgY2hhcnRzLmNoYXJ0X2xpbmVzX2ZpbGxfbm9wb2ludHNfMyA9XG4gICAge1xuICAgICAgICAvLyBjaGFydCBkYXRhXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGQxOiBbXVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIHdpbGwgaG9sZCB0aGUgY2hhcnQgb2JqZWN0XG4gICAgICAgIHBsb3Q6IG51bGwsXG5cbiAgICAgICAgLy8gY2hhcnQgb3B0aW9uc1xuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBjb2xvcnM6IFsgIGNvbG9yc1sgJ3N1Y2Nlc3MtY29sb3InIF1dLFxuICAgICAgICAgICAgZ3JpZDoge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvcnNbICdkZWZhdWx0LWxpZ2h0LWNvbG9yJyBdLFxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGhvdmVyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlcmllczoge1xuICAgICAgICAgICAgICAgIGdyb3c6IHthY3RpdmU6IGZhbHNlfSxcbiAgICAgICAgICAgICAgICBsaW5lczoge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBmaWxsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbGluZVdpZHRoOiAyLFxuICAgICAgICAgICAgICAgICAgICBzdGVwczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBjb25maWcuc2tpbnNbIHNraW4gXVsgJ3ByaW1hcnktY29sb3InIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBvaW50czoge3Nob3c6IGZhbHNlfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlZ2VuZDoge3Bvc2l0aW9uOiBcIm53XCIsIGJhY2tncm91bmRDb2xvcjogbnVsbCwgYmFja2dyb3VuZE9wYWNpdHk6IDB9LFxuICAgICAgICAgICAgeWF4aXM6IHtcbiAgICAgICAgICAgICAgICB0aWNrczogMyxcbiAgICAgICAgICAgICAgICB0aWNrU2l6ZTogNDAsXG4gICAgICAgICAgICAgICAgdGlja0Zvcm1hdHRlcjogZnVuY3Rpb24gKHZhbCwgYXhpcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsICsgXCJrXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHhheGlzOiB7dGlja3M6IDQsIHRpY2tEZWNpbWFsczogMCwgdGlja0NvbG9yOiAndHJhbnNwYXJlbnQnfSxcbiAgICAgICAgICAgIHNoYWRvd1NpemU6IDAsXG4gICAgICAgICAgICB0b29sdGlwOiB0cnVlLFxuICAgICAgICAgICAgdG9vbHRpcE9wdHM6IHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIiVzIDogJXkuMFwiLFxuICAgICAgICAgICAgICAgIHNoaWZ0czoge1xuICAgICAgICAgICAgICAgICAgICB4OiAtIDMwLFxuICAgICAgICAgICAgICAgICAgICB5OiAtIDUwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0VGhlbWU6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gaW5pdGlhbGl6ZVxuICAgICAgICBpbml0OiBmdW5jdGlvbiAod3JhcHBlcikge1xuXG4gICAgICAgICAgICBpZiAoIXdyYXBwZXIubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgICAgIC8vIGdlbmVyYXRlIHNvbWUgZGF0YVxuICAgICAgICAgICAgdGhpcy5kYXRhLmQxID0gWyBbIDEsIDMgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAyLCA2ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMywgMzAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyA0LCAxMTAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyA1LCA4MCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDYsIDE4ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgNywgNTAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyA4LCAxNSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDksIDE4ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTAsIDYwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTEsIDExMCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDEyLCAyNyArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDEzLCAzMCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDE0LCAzMyArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDE1LCAyNCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDE2LCA4MCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDE3LCAzMCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDE4LCAzMyArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDE5LCAzNiArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDIwLCAzOSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDIxLCA0MiArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDIyLCA3MCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDIzLCAzNiArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDI0LCAzOSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDI1LCA0MiArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDI2LCA0NSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDI3LCA2MCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDI4LCA1MSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDI5LCA1NSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDMwLCAxMDAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSBdO1xuXG4gICAgICAgICAgICAvLyBtYWtlIGNoYXJ0XG4gICAgICAgICAgICB0aGlzLnBsb3QgPSAkLnBsb3QoXG4gICAgICAgICAgICAgICAgd3JhcHBlcixcbiAgICAgICAgICAgICAgICBbIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTmV0IFJldmVudWVcIixcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy5kYXRhLmQxXG4gICAgICAgICAgICAgICAgfSBdLFxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAgICAgKi9cbiAgICAkLmZuLnRrRmxvdENoYXJ0TGluZXMzID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgY2hhcnRzLmNoYXJ0X2xpbmVzX2ZpbGxfbm9wb2ludHNfMy5pbml0KHRoaXMpO1xuXG4gICAgfTtcblxuICAgICQoJ1tkYXRhLXRvZ2dsZT1cImZsb3QtY2hhcnQtbGluZXMtM1wiXScpLnRrRmxvdENoYXJ0TGluZXMzKCk7XG5cbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgICB2YXIgc2tpbiA9IHJlcXVpcmUoJy4uL2xpYi9fc2tpbicpKCk7XG4gICAgdmFyIGNoYXJ0cyA9IHJlcXVpcmUoJy4vX2hlbHBlcicpO1xuXG4gICAgaWYgKHR5cGVvZiBjaGFydHMgPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgIHJldHVybjtcblxuICAgIGNoYXJ0cy5jaGFydF9saW5lc19maWxsX25vcG9pbnRzID1cbiAgICB7XG4gICAgICAgIC8vIGNoYXJ0IGRhdGFcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZDE6IFtdLFxuICAgICAgICAgICAgZDI6IFtdXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gd2lsbCBob2xkIHRoZSBjaGFydCBvYmplY3RcbiAgICAgICAgcGxvdDogbnVsbCxcblxuICAgICAgICAvLyBjaGFydCBvcHRpb25zXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGdyaWQ6IHtcbiAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgIGFib3ZlRGF0YTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yc1sgJ2RlZmF1bHQtY29sb3InIF0sXG4gICAgICAgICAgICAgICAgbGFiZWxNYXJnaW46IDUsXG4gICAgICAgICAgICAgICAgYXhpc01hcmdpbjogMCxcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMCxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogbnVsbCxcbiAgICAgICAgICAgICAgICBtaW5Cb3JkZXJNYXJnaW46IDUsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGhvdmVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtb3VzZUFjdGl2ZVJhZGl1czogMjAsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlcmllczoge1xuICAgICAgICAgICAgICAgIGdyb3c6IHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbGluZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbGluZVdpZHRoOiAyLFxuICAgICAgICAgICAgICAgICAgICBzdGVwczogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBvaW50czoge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJud1wiLFxuICAgICAgICAgICAgICAgIG5vQ29sdW1uczogMlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgICAgICAgdGlja3M6IDQsXG4gICAgICAgICAgICAgICAgdGlja0RlY2ltYWxzOiAwLFxuICAgICAgICAgICAgICAgIHRpY2tDb2xvcjogJyNlZmVmZWYnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeGF4aXM6IHtcbiAgICAgICAgICAgICAgICB0aWNrczogMTEsXG4gICAgICAgICAgICAgICAgdGlja0RlY2ltYWxzOiAwLFxuICAgICAgICAgICAgICAgIHRpY2tDb2xvcjogJ3RyYW5zcGFyZW50J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbG9yczogW10sXG4gICAgICAgICAgICBzaGFkb3dTaXplOiAxLFxuICAgICAgICAgICAgdG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICAgIHRvb2x0aXBPcHRzOiB7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCIlcyA6ICV5LjBcIixcbiAgICAgICAgICAgICAgICBzaGlmdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgeDogLSAzMCxcbiAgICAgICAgICAgICAgICAgICAgeTogLSA1MFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGVmYXVsdFRoZW1lOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIGluaXRpYWxpemVcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKHdyYXBwZXIpIHtcblxuICAgICAgICAgICAgaWYgKCEgd3JhcHBlci5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICAgICAgLy8gYXBwbHkgc3R5bGluZ1xuICAgICAgICAgICAgY2hhcnRzLnV0aWxpdHkuYXBwbHlTdHlsZSh0aGlzKTtcblxuICAgICAgICAgICAgLy8gZ2VuZXJhdGUgc29tZSBkYXRhXG4gICAgICAgICAgICB0aGlzLmRhdGEuZDEgPSBbIFsgMSwgMyArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDIsIDYgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAzLCA5ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgNCwgMTIgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyA1LCAxNSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDYsIDE4ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgNywgMjEgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyA4LCAxNSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDksIDE4ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTAsIDIxICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTEsIDI0ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTIsIDI3ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTMsIDMwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTQsIDMzICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTUsIDI0ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTYsIDI3ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTcsIDMwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTgsIDMzICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTksIDM2ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjAsIDM5ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjEsIDQyICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjIsIDQ1ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjMsIDM2ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjQsIDM5ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjUsIDQyICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjYsIDQ1ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjcsIDM4ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjgsIDUxICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjksIDU1ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMzAsIDYwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0gXTtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5kMiA9IFsgWyAxLCBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgLSA1IF0sIFsgMiwgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIC0gNCBdLCBbIDMsIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSAtIDQgXSwgWyA0LCBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyA1LCA0ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgNiwgNCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDcsIDUgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyA4LCA1ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgOSwgNiArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDEwLCA2ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTEsIDYgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAxMiwgMiArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDEzLCAzICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTQsIDQgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAxNSwgNCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDE2LCA0ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTcsIDUgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAxOCwgNSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDE5LCAyICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjAsIDIgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAyMSwgMyArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDIyLCAzICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjMsIDMgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAyNCwgMiArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDI1LCA0ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjYsIDQgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAyNywgNSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDI4LCAyICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjksIDIgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAzMCwgMyArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdIF07XG5cbiAgICAgICAgICAgIC8vIG1ha2UgY2hhcnRcbiAgICAgICAgICAgIHRoaXMucGxvdCA9ICQucGxvdChcbiAgICAgICAgICAgICAgICB3cmFwcGVyLFxuICAgICAgICAgICAgICAgIFsge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJWaXNpdHNcIixcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy5kYXRhLmQxXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlVuaXF1ZSBWaXNpdHNcIixcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy5kYXRhLmQyXG4gICAgICAgICAgICAgICAgfSBdLFxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAgICAgKi9cbiAgICAkLmZuLnRrRmxvdENoYXJ0TGluZXMxID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgY2hhcnRzLmNoYXJ0X2xpbmVzX2ZpbGxfbm9wb2ludHMuaW5pdCh0aGlzKTtcblxuICAgIH07XG5cbiAgICAkKCdbZGF0YS10b2dnbGU9XCJmbG90LWNoYXJ0LWxpbmVzLTFcIl0nKS50a0Zsb3RDaGFydExpbmVzMSgpO1xuXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbiAoJCkge1xuXG4gICAgdmFyIHNraW4gPSByZXF1aXJlKCcuLi9saWIvX3NraW4nKSgpO1xuICAgIHZhciBjaGFydHMgPSByZXF1aXJlKCcuL19oZWxwZXInKTtcblxuICAgIGlmICh0eXBlb2YgY2hhcnRzID09ICd1bmRlZmluZWQnKVxuICAgICAgICByZXR1cm47XG5cbiAgICBjaGFydHMuY2hhcnRfbGluZXNfZmlsbF9ub3BvaW50c18yID1cbiAgICB7XG4gICAgICAgIC8vIGNoYXJ0IGRhdGFcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZDE6IFtdXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gd2lsbCBob2xkIHRoZSBjaGFydCBvYmplY3RcbiAgICAgICAgcGxvdDogbnVsbCxcblxuICAgICAgICAvLyBjaGFydCBvcHRpb25zXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGNvbG9yczogWyBjb25maWcuc2tpbnNbIHNraW4gXVsgJ3ByaW1hcnktY29sb3InIF0gXSxcbiAgICAgICAgICAgIGdyaWQ6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogY29sb3JzWyAnZGVmYXVsdC1saWdodC1jb2xvcicgXSxcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBob3ZlcmFibGU6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXJpZXM6IHtcbiAgICAgICAgICAgICAgICBncm93OiB7YWN0aXZlOiBmYWxzZX0sXG4gICAgICAgICAgICAgICAgbGluZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVXaWR0aDogNSxcbiAgICAgICAgICAgICAgICAgICAgc3RlcHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogY29uZmlnLnNraW5zWyBza2luIF1bICdwcmltYXJ5LWNvbG9yJyBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwb2ludHM6IHtzaG93OiBmYWxzZX1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZWdlbmQ6IHtwb3NpdGlvbjogXCJud1wiLCBiYWNrZ3JvdW5kQ29sb3I6IG51bGwsIGJhY2tncm91bmRPcGFjaXR5OiAwfSxcbiAgICAgICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgICAgICAgdGlja3M6IDMsXG4gICAgICAgICAgICAgICAgdGlja1NpemU6IDQwLFxuICAgICAgICAgICAgICAgIHRpY2tGb3JtYXR0ZXI6IGZ1bmN0aW9uICh2YWwsIGF4aXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbCArIFwia1wiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgICAgIHRpY2tzOiA0LFxuICAgICAgICAgICAgICAgIHRpY2tEZWNpbWFsczogMCxcbiAgICAgICAgICAgICAgICB0aWNrQ29sb3I6ICd0cmFuc3BhcmVudCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaGFkb3dTaXplOiAwLFxuICAgICAgICAgICAgdG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICAgIHRvb2x0aXBPcHRzOiB7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCIlcyA6ICV5LjBcIixcbiAgICAgICAgICAgICAgICBzaGlmdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgeDogLSAzMCxcbiAgICAgICAgICAgICAgICAgICAgeTogLSA1MFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGVmYXVsdFRoZW1lOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIGluaXRpYWxpemVcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKHdyYXBwZXIpIHtcblxuICAgICAgICAgICAgaWYgKCEgd3JhcHBlci5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICAgICAgLy8gZ2VuZXJhdGUgc29tZSBkYXRhXG4gICAgICAgICAgICB0aGlzLmRhdGEuZDEgPSBbIFsgMSwgMyArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDIsIDYgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAzLCAzMCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDQsIDExMCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDUsIDgwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgNiwgMTggKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyA3LCA1MCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDgsIDE1ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgOSwgMTggKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAxMCwgNjAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAxMSwgMTEwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTIsIDI3ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTMsIDMwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTQsIDMzICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTUsIDI0ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTYsIDgwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTcsIDMwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTgsIDMzICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTksIDM2ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjAsIDM5ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjEsIDQyICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjIsIDcwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjMsIDM2ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjQsIDM5ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjUsIDQyICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjYsIDQ1ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjcsIDYwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjgsIDUxICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMjksIDU1ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMzAsIDEwMCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdIF07XG5cbiAgICAgICAgICAgIC8vIG1ha2UgY2hhcnRcbiAgICAgICAgICAgIHRoaXMucGxvdCA9ICQucGxvdChcbiAgICAgICAgICAgICAgICB3cmFwcGVyLFxuICAgICAgICAgICAgICAgIFsge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJOZXQgUmV2ZW51ZVwiLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLmRhdGEuZDFcbiAgICAgICAgICAgICAgICB9IF0sXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIGpRdWVyeSBwbHVnaW4gd3JhcHBlciBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEFuZ3VsYXIgVUkuVXRpbHM6IGpRdWVyeSBQYXNzdGhyb3VnaFxuICAgICAqL1xuICAgICQuZm4udGtGbG90Q2hhcnRMaW5lczIgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBjaGFydHMuY2hhcnRfbGluZXNfZmlsbF9ub3BvaW50c18yLmluaXQodGhpcyk7XG5cbiAgICB9O1xuXG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwiZmxvdC1jaGFydC1saW5lcy0yXCJdJykudGtGbG90Q2hhcnRMaW5lczIoKTtcblxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24gKCQpIHtcblxuICAgIHZhciBza2luID0gcmVxdWlyZSgnLi4vbGliL19za2luJykoKTtcbiAgICB2YXIgY2hhcnRzID0gcmVxdWlyZSgnLi9faGVscGVyJyk7XG5cbiAgICBpZiAodHlwZW9mIGNoYXJ0cyA9PSAndW5kZWZpbmVkJylcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgY2hhcnRzLmNoYXJ0X21peGVkXzEgPVxuICAgIHtcbiAgICAgICAgLy8gY2hhcnQgZGF0YVxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBkMTogW11cbiAgICAgICAgfSxcblxuICAgICAgICAvLyB3aWxsIGhvbGQgdGhlIGNoYXJ0IG9iamVjdFxuICAgICAgICBwbG90OiBudWxsLFxuXG4gICAgICAgIC8vIGNoYXJ0IG9wdGlvbnNcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgY29sb3JzOiBbIFwiI2RlZGVkZVwiLCBjb25maWcuc2tpbnNbIHNraW4gXVsgJ3ByaW1hcnktY29sb3InIF0gXSxcbiAgICAgICAgICAgIGdyaWQ6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjZGVkZWRlXCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgaG92ZXJhYmxlOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VyaWVzOiB7XG4gICAgICAgICAgICAgICAgZ3Jvdzoge2FjdGl2ZTogZmFsc2V9LFxuICAgICAgICAgICAgICAgIGxpbmVzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBsaW5lV2lkdGg6IDIsXG4gICAgICAgICAgICAgICAgICAgIHN0ZXBzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGNvbmZpZy5za2luc1sgc2tpbiBdWyAncHJpbWFyeS1jb2xvcicgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcG9pbnRzOiB7c2hvdzogZmFsc2V9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVnZW5kOiB7cG9zaXRpb246IFwibndcIiwgYmFja2dyb3VuZENvbG9yOiBudWxsLCBiYWNrZ3JvdW5kT3BhY2l0eTogMH0sXG4gICAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgICAgIHRpY2tzOiAzLFxuICAgICAgICAgICAgICAgIHRpY2tTaXplOiA0MCxcbiAgICAgICAgICAgICAgICB0aWNrRm9ybWF0dGVyOiBmdW5jdGlvbiAodmFsLCBheGlzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWwgKyBcImtcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeGF4aXM6IHt0aWNrczogNCwgdGlja0RlY2ltYWxzOiAwLCB0aWNrQ29sb3I6ICd0cmFuc3BhcmVudCd9LFxuICAgICAgICAgICAgc2hhZG93U2l6ZTogMCxcbiAgICAgICAgICAgIHRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgICB0b29sdGlwT3B0czoge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiJXMgOiAleS4wXCIsXG4gICAgICAgICAgICAgICAgc2hpZnRzOiB7XG4gICAgICAgICAgICAgICAgICAgIHg6IC0gMzAsXG4gICAgICAgICAgICAgICAgICAgIHk6IC0gNTBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRlZmF1bHRUaGVtZTogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvLyBpbml0aWFsaXplXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICh3cmFwcGVyKSB7XG5cbiAgICAgICAgICAgIGlmICghIHdyYXBwZXIubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgICAgIC8vIGdlbmVyYXRlIHNvbWUgZGF0YVxuICAgICAgICAgICAgdGhpcy5kYXRhLmQxID0gWyBbIDEsIDMgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAyLCA2ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMywgMzAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyA0LCAxMTAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyA1LCA4MCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDYsIDE4ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgNywgNTAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyA4LCAxNSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDksIDE4ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTAsIDYwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTEsIDExMCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDEyLCAyNyArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDEzLCAzMCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdIF07XG5cbiAgICAgICAgICAgIC8vIG1ha2UgY2hhcnRcbiAgICAgICAgICAgIHRoaXMucGxvdCA9ICQucGxvdChcbiAgICAgICAgICAgICAgICB3cmFwcGVyLFxuICAgICAgICAgICAgICAgIFsge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJOZXQgUmV2ZW51ZVwiLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLmRhdGEuZDEsXG4gICAgICAgICAgICAgICAgICAgIGJhcnM6IHtzaG93OiB0cnVlLCBmaWxsOiAxLCBiYXJXaWR0aDogMC43NSwgYWxpZ246IFwiY2VudGVyXCJ9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMuZGF0YS5kMSxcbiAgICAgICAgICAgICAgICAgICAgbGluZXM6IHtzaG93OiB0cnVlLCBmaWxsOiBmYWxzZX0sXG4gICAgICAgICAgICAgICAgICAgIHBvaW50czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1czogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbDogXCJjaXJjbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3I6IGNvbmZpZy5za2luc1sgc2tpbiBdWyAncHJpbWFyeS1jb2xvcicgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIiNmZmZcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBdLFxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAgICAgKi9cbiAgICAkLmZuLnRrRmxvdENoYXJ0TWl4ZWQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBjaGFydHMuY2hhcnRfbWl4ZWRfMS5pbml0KHRoaXMpO1xuXG4gICAgfTtcblxuICAgICQoJ1tkYXRhLXRvZ2dsZT1cImZsb3QtY2hhcnQtbWl4ZWRcIl0nKS50a0Zsb3RDaGFydE1peGVkKCk7XG5cbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgICB2YXIgY2hhcnRzID0gcmVxdWlyZSgnLi9faGVscGVyJyk7XG5cbiAgICBpZiAodHlwZW9mIGNoYXJ0cyA9PSAndW5kZWZpbmVkJylcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgY2hhcnRzLmNoYXJ0X3BpZSA9XG4gICAge1xuICAgICAgICAvLyBjaGFydCBkYXRhXG4gICAgICAgIGRhdGE6IFtcbiAgICAgICAgICAgIHtsYWJlbDogXCJVU0FcIiwgZGF0YTogMzh9LFxuICAgICAgICAgICAge2xhYmVsOiBcIkJyYXppbFwiLCBkYXRhOiAyM30sXG4gICAgICAgICAgICB7bGFiZWw6IFwiSW5kaWFcIiwgZGF0YTogMTV9LFxuICAgICAgICAgICAge2xhYmVsOiBcIlR1cmtleVwiLCBkYXRhOiA5fSxcbiAgICAgICAgICAgIHtsYWJlbDogXCJGcmFuY2VcIiwgZGF0YTogN30sXG4gICAgICAgICAgICB7bGFiZWw6IFwiQ2hpbmFcIiwgZGF0YTogNX0sXG4gICAgICAgICAgICB7bGFiZWw6IFwiR2VybWFueVwiLCBkYXRhOiAzfVxuICAgICAgICBdLFxuXG4gICAgICAgIC8vIHdpbGwgaG9sZCB0aGUgY2hhcnQgb2JqZWN0XG4gICAgICAgIHBsb3Q6IG51bGwsXG5cbiAgICAgICAgLy8gY2hhcnQgb3B0aW9uc1xuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBzZXJpZXM6IHtcbiAgICAgICAgICAgICAgICBwaWU6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjFcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiAxLFxuICAgICAgICAgICAgICAgICAgICBzdHJva2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzdGFydEFuZ2xlOiAyLFxuICAgICAgICAgICAgICAgICAgICBjb21iaW5lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyMzNTM1MzUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyZXNob2xkOiAwLjA1XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbiAobGFiZWwsIHNlcmllcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnPGRpdiBjbGFzcz1cImxhYmVsIGxhYmVsLWRlZmF1bHRcIj4nICsgbGFiZWwgKyAnJm5ic3A7JyArIE1hdGgucm91bmQoc2VyaWVzLnBlcmNlbnQpICsgJyU8L2Rpdj4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBncm93OiB7YWN0aXZlOiBmYWxzZX1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb2xvcnM6IFtdLFxuICAgICAgICAgICAgbGVnZW5kOiB7c2hvdzogZmFsc2V9LFxuICAgICAgICAgICAgZ3JpZDoge1xuICAgICAgICAgICAgICAgIGhvdmVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgICB0b29sdGlwT3B0czoge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiJXMgOiAleS4xXCIgKyBcIiVcIixcbiAgICAgICAgICAgICAgICBzaGlmdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgeDogLSAzMCxcbiAgICAgICAgICAgICAgICAgICAgeTogLSA1MFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGVmYXVsdFRoZW1lOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIGluaXRpYWxpemVcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKHdyYXBwZXIpIHtcblxuICAgICAgICAgICAgaWYgKCEgd3JhcHBlci5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICAgICAgLy8gYXBwbHkgc3R5bGluZ1xuICAgICAgICAgICAgY2hhcnRzLnV0aWxpdHkuYXBwbHlTdHlsZSh0aGlzKTtcblxuICAgICAgICAgICAgdGhpcy5wbG90ID0gJC5wbG90KHdyYXBwZXIsIHRoaXMuZGF0YSwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAgICAgKi9cbiAgICAkLmZuLnRrRmxvdENoYXJ0UGllID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgY2hhcnRzLmNoYXJ0X3BpZS5pbml0KHRoaXMpO1xuXG4gICAgfTtcblxuICAgICQoJ1tkYXRhLXRvZ2dsZT1cImZsb3QtY2hhcnQtcGllXCJdJykudGtGbG90Q2hhcnRQaWUoKTtcblxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24gKCQpIHtcblxuICAgIHZhciBza2luID0gcmVxdWlyZSgnLi4vbGliL19za2luJykoKTtcbiAgICB2YXIgY2hhcnRzID0gcmVxdWlyZSgnLi9faGVscGVyJyk7XG5cbiAgICBpZiAodHlwZW9mIGNoYXJ0cyA9PSAndW5kZWZpbmVkJylcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgY2hhcnRzLmNoYXJ0X3NpbXBsZSA9XG4gICAge1xuICAgICAgICAvLyBkYXRhXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHNpbjogW10sXG4gICAgICAgICAgICBjb3M6IFtdXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gd2lsbCBob2xkIHRoZSBjaGFydCBvYmplY3RcbiAgICAgICAgcGxvdDogbnVsbCxcblxuICAgICAgICAvLyBjaGFydCBvcHRpb25zXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGNvbG9yczogWyBjb25maWcuc2tpbnNbIHNraW4gXVsgJ3ByaW1hcnktY29sb3InIF0sIGNvbG9yc1sgJ2RlZmF1bHQtY29sb3InIF0gXSxcbiAgICAgICAgICAgIGdyaWQ6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogY29sb3JzWyAnZGVmYXVsdC1saWdodC1jb2xvcicgXSxcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBob3ZlcmFibGU6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXJpZXM6IHtcbiAgICAgICAgICAgICAgICBncm93OiB7YWN0aXZlOiBmYWxzZX0sXG4gICAgICAgICAgICAgICAgbGluZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVXaWR0aDogNCxcbiAgICAgICAgICAgICAgICAgICAgc3RlcHM6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwb2ludHM6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiA1LFxuICAgICAgICAgICAgICAgICAgICBzeW1ib2w6IFwiY2lyY2xlXCIsXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIiNmZmZcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZWdlbmQ6IHtwb3NpdGlvbjogXCJzZVwiLCBiYWNrZ3JvdW5kQ29sb3I6IG51bGwsIGJhY2tncm91bmRPcGFjaXR5OiAwLCBub0NvbHVtbnM6IDJ9LFxuICAgICAgICAgICAgc2hhZG93U2l6ZTogMCxcbiAgICAgICAgICAgIHlheGlzOiB7dGlja3M6IDN9LFxuICAgICAgICAgICAgeGF4aXM6IHt0aWNrczogNCwgdGlja0RlY2ltYWxzOiAwLCB0aWNrQ29sb3I6ICd0cmFuc3BhcmVudCd9LFxuICAgICAgICAgICAgdG9vbHRpcDogdHJ1ZSwgLy9hY3RpdmF0ZSB0b29sdGlwXG4gICAgICAgICAgICB0b29sdGlwT3B0czoge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiJXMgOiAleS4zXCIsXG4gICAgICAgICAgICAgICAgc2hpZnRzOiB7XG4gICAgICAgICAgICAgICAgICAgIHg6IC0gMzAsXG4gICAgICAgICAgICAgICAgICAgIHk6IC0gNTBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRlZmF1bHRUaGVtZTogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvLyBpbml0aWFsaXplXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICh3cmFwcGVyKSB7XG5cbiAgICAgICAgICAgIGlmICghIHdyYXBwZXIubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnBsb3QgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE0OyBpICs9IDAuNSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuc2luLnB1c2goWyBpLCBNYXRoLnNpbihpKSBdKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmNvcy5wdXNoKFsgaSwgTWF0aC5jb3MoaSkgXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wbG90ID0gJC5wbG90KFxuICAgICAgICAgICAgICAgIHdyYXBwZXIsXG4gICAgICAgICAgICAgICAgWyB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlNpblwiLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLmRhdGEuc2luLFxuICAgICAgICAgICAgICAgICAgICBsaW5lczoge2ZpbGxDb2xvcjogY29sb3JzWyAnZGVmYXVsdC1jb2xvcicgXX0sXG4gICAgICAgICAgICAgICAgICAgIHBvaW50czoge2ZpbGxDb2xvcjogXCIjZmZmXCJ9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkNvc1wiLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLmRhdGEuY29zLFxuICAgICAgICAgICAgICAgICAgICBsaW5lczoge2ZpbGxDb2xvcjogXCIjNDQ0XCJ9LFxuICAgICAgICAgICAgICAgICAgICBwb2ludHM6IHtmaWxsQ29sb3I6IFwiI2ZmZlwifVxuICAgICAgICAgICAgICAgIH0gXSxcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnNcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogalF1ZXJ5IHBsdWdpbiB3cmFwcGVyIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQW5ndWxhciBVSS5VdGlsczogalF1ZXJ5IFBhc3N0aHJvdWdoXG4gICAgICovXG4gICAgJC5mbi50a0Zsb3RDaGFydFNpbXBsZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIGNoYXJ0cy5jaGFydF9zaW1wbGUuaW5pdCh0aGlzKTtcblxuICAgIH07XG5cbiAgICAkKCdbZGF0YS10b2dnbGU9XCJmbG90LWNoYXJ0LXNpbXBsZVwiXScpLnRrRmxvdENoYXJ0U2ltcGxlKCk7XG5cbn0pKGpRdWVyeSk7IiwicmVxdWlyZSgnLi9fc2ltcGxlJyk7XG5yZXF1aXJlKCcuL19taXhlZCcpO1xucmVxdWlyZSgnLi9fbGluZScpO1xucmVxdWlyZSgnLi9faG9yaXpvbnRhbCcpO1xucmVxdWlyZSgnLi9fbGluZV9maWxsX25vcG9pbnRzJyk7XG5yZXF1aXJlKCcuL19saW5lX2ZpbGxfbm9wb2ludHNfMicpO1xucmVxdWlyZSgnLi9fYmFycy1vcmRlcmVkJyk7XG5yZXF1aXJlKCcuL19kb251dCcpO1xucmVxdWlyZSgnLi9fYmFycy1zdGFja2VkJyk7XG5yZXF1aXJlKCcuL19waWUnKTtcbnJlcXVpcmUoJy4vX2F1dG91cGRhdGUnKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNraW4gPSAkLmNvb2tpZSgnc2tpbicpO1xuXG4gICAgaWYgKHR5cGVvZiBza2luID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNraW4gPSAnZGVmYXVsdCc7XG4gICAgfVxuICAgIHJldHVybiBza2luO1xufSk7IiwicmVxdWlyZSgnLi9tb3JyaXMvbWFpbicpO1xucmVxdWlyZSgnLi9zcGFya2xpbmUvbWFpbicpO1xucmVxdWlyZSgnLi9mbG90L21haW4nKTtcbnJlcXVpcmUoJy4vZWFzeS1waWUvbWFpbicpO1xuIiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAkLmZuLnRrTW9ycmlzQ2hhcnRBcmVhID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgaWYgKCEgdGhpcy5hdHRyKCdpZCcpKSByZXR1cm47XG5cbiAgICAgICAgdmFyIHNraW4gPSByZXF1aXJlKCcuLi9saWIvX3NraW4nKSgpO1xuXG4gICAgICAgIHRoaXMuZW1wdHkoKTtcblxuICAgICAgICBuZXcgTW9ycmlzLkFyZWEoe1xuICAgICAgICAgICAgbGluZUNvbG9yczogWyBjb25maWcuc2tpbnNbIHNraW4gXVsgJ3ByaW1hcnktY29sb3InIF0sIGNvbG9yc1sgJ2Rhbmdlci1jb2xvcicgXSBdLFxuICAgICAgICAgICAgcG9pbnRGaWxsQ29sb3JzOiBjb25maWcuc2tpbnNbIHNraW4gXVsgJ3ByaW1hcnktY29sb3InIF0sXG4gICAgICAgICAgICBmaWxsT3BhY2l0eTogJzAuMycsXG4gICAgICAgICAgICBlbGVtZW50OiB0aGlzLmF0dHIoJ2lkJyksXG4gICAgICAgICAgICBkYXRhOiBbXG4gICAgICAgICAgICAgICAge3k6ICcxLjEuJywgYTogMzAsIGI6IDkwfSxcbiAgICAgICAgICAgICAgICB7eTogJzIuMS4nLCBhOiAzNSwgYjogNjV9LFxuICAgICAgICAgICAgICAgIHt5OiAnMy4xLicsIGE6IDUwLCBiOiA0MH0sXG4gICAgICAgICAgICAgICAge3k6ICc0LjEuJywgYTogNzUsIGI6IDY1fSxcbiAgICAgICAgICAgICAgICB7eTogJzUuMS4nLCBhOiA1MCwgYjogNDB9LFxuICAgICAgICAgICAgICAgIHt5OiAnNi4xLicsIGE6IDc1LCBiOiA2NX0sXG4gICAgICAgICAgICAgICAge3k6ICc3LjEuJywgYTogNjAsIGI6IDkwfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHhrZXk6ICd5JyxcbiAgICAgICAgICAgIHlrZXlzOiBbICdhJyBdLFxuICAgICAgICAgICAgbGFiZWxzOiBbICdTZXJpZXMgQScgXSxcbiAgICAgICAgICAgIGdyaWRUZXh0Q29sb3I6IGNvbG9yc1sgJ2RlZmF1bHQtY29sb3InIF0sXG4gICAgICAgICAgICBncmlkVGV4dFdlaWdodDogJ2JvbGQnLFxuICAgICAgICAgICAgcmVzaXplOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgICQoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICQoJ1tkYXRhLXRvZ2dsZT1cIm1vcnJpcy1jaGFydC1hcmVhXCJdJykudGtNb3JyaXNDaGFydEFyZWEoKTtcblxuICAgICAgICAkKCdbZGF0YS1za2luXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoJ1tkYXRhLXRvZ2dsZT1cIm1vcnJpcy1jaGFydC1hcmVhXCJdJykudGtNb3JyaXNDaGFydEFyZWEoKTtcbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICQuZm4udGtNb3JyaXNDaGFydEJhciA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIGlmICghIHRoaXMuYXR0cignaWQnKSkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBza2luID0gcmVxdWlyZSgnLi4vbGliL19za2luJykoKTtcblxuICAgICAgICB0aGlzLmVtcHR5KCk7XG5cbiAgICAgICAgbmV3IE1vcnJpcy5CYXIoe1xuICAgICAgICAgICAgYmFyQ29sb3JzOiBbIGNvbmZpZy5za2luc1sgc2tpbiBdWyAncHJpbWFyeS1jb2xvcicgXSwgY29sb3JzWyAnZGVmYXVsdC1jb2xvcicgXSwgY29sb3JzWyAnZGFuZ2VyLWNvbG9yJyBdIF0sXG4gICAgICAgICAgICBlbGVtZW50OiB0aGlzLmF0dHIoJ2lkJyksXG4gICAgICAgICAgICBkYXRhOiBbXG4gICAgICAgICAgICAgICAge3k6ICcyMDA2JywgYTogMTAwLCBiOiA5MCwgYzogNDB9LFxuICAgICAgICAgICAgICAgIHt5OiAnMjAwNycsIGE6IDc1LCBiOiA2NSwgYzogMTAwfSxcbiAgICAgICAgICAgICAgICB7eTogJzIwMDgnLCBhOiA1MCwgYjogNDAsIGM6IDMwfSxcbiAgICAgICAgICAgICAgICB7eTogJzIwMDknLCBhOiA3NSwgYjogNjUsIGM6IDg1fSxcbiAgICAgICAgICAgICAgICB7eTogJzIwMTAnLCBhOiA1MCwgYjogNDAsIGM6IDQ1fSxcbiAgICAgICAgICAgICAgICB7eTogJzIwMTEnLCBhOiA3NSwgYjogNjUsIGM6IDkwfSxcbiAgICAgICAgICAgICAgICB7eTogJzIwMTInLCBhOiAxMDAsIGI6IDkwLCBjOiA4MH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBncmlkVGV4dENvbG9yOiBjb2xvcnNbICdkZWZhdWx0LWNvbG9yJyBdLFxuICAgICAgICAgICAgZ3JpZFRleHRXZWlnaHQ6ICdib2xkJyxcbiAgICAgICAgICAgIHJlc2l6ZTogdHJ1ZSxcbiAgICAgICAgICAgIHhrZXk6ICd5JyxcbiAgICAgICAgICAgIHlrZXlzOiBbICdhJywgJ2InLCAnYycgXSxcbiAgICAgICAgICAgIGxhYmVsczogWyAnU2VyaWVzIEEnLCAnU2VyaWVzIEInLCAnU2VyaWVzIEMnIF1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgICQoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICQoJ1tkYXRhLXRvZ2dsZT1cIm1vcnJpcy1jaGFydC1iYXJcIl0nKS50a01vcnJpc0NoYXJ0QmFyKCk7XG5cbiAgICAgICAgJCgnW2RhdGEtc2tpbl0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAkKCdbZGF0YS10b2dnbGU9XCJtb3JyaXMtY2hhcnQtYmFyXCJdJykudGtNb3JyaXNDaGFydEJhcigpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICQuZm4udGtNb3JyaXNDaGFydERvbnV0ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgaWYgKCEgdGhpcy5hdHRyKCdpZCcpKSByZXR1cm47XG5cbiAgICAgICAgdmFyIHNraW4gPSByZXF1aXJlKCcuLi9saWIvX3NraW4nKSgpO1xuXG4gICAgICAgIHRoaXMuZW1wdHkoKTtcblxuICAgICAgICBuZXcgTW9ycmlzLkRvbnV0KHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IHRoaXMuYXR0cignaWQnKSxcbiAgICAgICAgICAgIGNvbG9yczogWyBjb2xvcnNbICdkYW5nZXItY29sb3InIF0sIGNvbmZpZy5za2luc1sgc2tpbiBdWyAncHJpbWFyeS1jb2xvcicgXSwgY29sb3JzWyAnZGVmYXVsdC1jb2xvcicgXSBdLFxuICAgICAgICAgICAgZGF0YTogW1xuICAgICAgICAgICAgICAgIHtsYWJlbDogXCJEb3dubG9hZCBTYWxlc1wiLCB2YWx1ZTogMTJ9LFxuICAgICAgICAgICAgICAgIHtsYWJlbDogXCJJbi1TdG9yZSBTYWxlc1wiLCB2YWx1ZTogMzB9LFxuICAgICAgICAgICAgICAgIHtsYWJlbDogXCJNYWlsLU9yZGVyIFNhbGVzXCIsIHZhbHVlOiAyMH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgJChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgJCgnW2RhdGEtdG9nZ2xlPVwibW9ycmlzLWNoYXJ0LWRvbnV0XCJdJykudGtNb3JyaXNDaGFydERvbnV0KCk7XG5cbiAgICAgICAgJCgnW2RhdGEtc2tpbl0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAkKCdbZGF0YS10b2dnbGU9XCJtb3JyaXMtY2hhcnQtZG9udXRcIl0nKS50a01vcnJpc0NoYXJ0RG9udXQoKTtcblxuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgJC5mbi50a01vcnJpc0NoYXJ0TGluZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIGlmICghIHRoaXMuYXR0cignaWQnKSkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBza2luID0gcmVxdWlyZSgnLi4vbGliL19za2luJykoKTtcblxuICAgICAgICB0aGlzLmVtcHR5KCk7XG5cbiAgICAgICAgbmV3IE1vcnJpcy5MaW5lKHtcbiAgICAgICAgICAgIGxpbmVDb2xvcnM6IFsgY29uZmlnLnNraW5zWyBza2luIF1bICdwcmltYXJ5LWNvbG9yJyBdLCBjb2xvcnNbICdkYW5nZXItY29sb3InIF0gXSxcbiAgICAgICAgICAgIHBvaW50RmlsbENvbG9yczogWyBjb25maWcuc2tpbnNbIHNraW4gXVsgJ3ByaW1hcnktY29sb3InIF0sIGNvbG9yc1sgJ2Rhbmdlci1jb2xvcicgXSBdLFxuICAgICAgICAgICAgcG9pbnRTdHJva2VDb2xvcnM6IFsgJyNmZmZmZmYnLCAnI2ZmZmZmZicgXSxcbiAgICAgICAgICAgIGdyaWRUZXh0Q29sb3I6IGNvbG9yc1sgJ2RlZmF1bHQtY29sb3InIF0sXG4gICAgICAgICAgICBncmlkVGV4dFdlaWdodDogJ2JvbGQnLFxuXG4gICAgICAgICAgICAvLyBJRCBvZiB0aGUgZWxlbWVudCBpbiB3aGljaCB0byBkcmF3IHRoZSBjaGFydC5cbiAgICAgICAgICAgIGVsZW1lbnQ6IHRoaXMuYXR0cignaWQnKSxcbiAgICAgICAgICAgIC8vIENoYXJ0IGRhdGEgcmVjb3JkcyAtLSBlYWNoIGVudHJ5IGluIHRoaXMgYXJyYXkgY29ycmVzcG9uZHMgdG8gYSBwb2ludCBvblxuICAgICAgICAgICAgLy8gdGhlIGNoYXJ0LlxuICAgICAgICAgICAgZGF0YTogW1xuICAgICAgICAgICAgICAgIHtkYXRlOiAnMjAxNC0wMicsIGE6IDIwMDAsIGI6IDI0MDB9LFxuICAgICAgICAgICAgICAgIHtkYXRlOiAnMjAxNC0wMycsIGE6IDEyMDAsIGI6IDI1MDB9LFxuICAgICAgICAgICAgICAgIHtkYXRlOiAnMjAxNC0wNCcsIGE6IDMyMDAsIGI6IDIwMDB9LFxuICAgICAgICAgICAgICAgIHtkYXRlOiAnMjAxNC0wNScsIGE6IDE2MDAsIGI6IDE0NDB9LFxuICAgICAgICAgICAgICAgIHtkYXRlOiAnMjAxNC0wNicsIGE6IDEyOTAsIGI6IDI4MzB9LFxuICAgICAgICAgICAgICAgIHtkYXRlOiAnMjAxNC0wNycsIGE6IDE5MzAsIGI6IDEyMDB9LFxuICAgICAgICAgICAgICAgIHtkYXRlOiAnMjAxNC0wOCcsIGE6IDIxMjAsIGI6IDMwMDB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gVGhlIG5hbWUgb2YgdGhlIGRhdGEgcmVjb3JkIGF0dHJpYnV0ZSB0aGF0IGNvbnRhaW5zIHgtdmFsdWVzLlxuICAgICAgICAgICAgeGtleTogJ2RhdGUnLFxuICAgICAgICAgICAgLy8gQSBsaXN0IG9mIG5hbWVzIG9mIGRhdGEgcmVjb3JkIGF0dHJpYnV0ZXMgdGhhdCBjb250YWluIHktdmFsdWVzLlxuICAgICAgICAgICAgeWtleXM6IFsgJ2EnLCAnYicgXSxcbiAgICAgICAgICAgIC8vIExhYmVscyBmb3IgdGhlIHlrZXlzIC0tIHdpbGwgYmUgZGlzcGxheWVkIHdoZW4geW91IGhvdmVyIG92ZXIgdGhlXG4gICAgICAgICAgICAvLyBjaGFydC5cbiAgICAgICAgICAgIGxhYmVsczogWyAnU2VyaWVzIEEnLCAnU2VyaWVzIEInIF0sXG4gICAgICAgICAgICByZXNpemU6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgJChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgJCgnW2RhdGEtdG9nZ2xlPVwibW9ycmlzLWNoYXJ0LWxpbmVcIl0nKS50a01vcnJpc0NoYXJ0TGluZSgpO1xuXG4gICAgICAgICQoJ1tkYXRhLXNraW5dJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgJCgnW2RhdGEtdG9nZ2xlPVwibW9ycmlzLWNoYXJ0LWxpbmVcIl0nKS50a01vcnJpc0NoYXJ0TGluZSgpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7IiwicmVxdWlyZSgnLi9fYXJlYScpO1xucmVxdWlyZSgnLi9fYmFyJyk7XG5yZXF1aXJlKCcuL19kb251dCcpO1xucmVxdWlyZSgnLi9fbGluZScpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgdmFyIHNraW4gPSByZXF1aXJlKCcuLi9saWIvX3NraW4nKSgpO1xuXG4gICAgLyoqXG4gICAgICogalF1ZXJ5IHBsdWdpbiB3cmFwcGVyIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQW5ndWxhciBVSS5VdGlsczogalF1ZXJ5IFBhc3N0aHJvdWdoXG4gICAgICovXG4gICAgJC5mbi50a1NwYXJrTGluZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuc3BhcmtsaW5lKFxuICAgICAgICAgICAgdGhpcy5kYXRhKCdkYXRhJykgfHwgXCJodG1sXCIsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMjQnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgc3BvdFJhZGl1czogJzMuMicsXG4gICAgICAgICAgICAgICAgc3BvdENvbG9yOiBjb25maWcuc2tpbnNbIHNraW4gXVsgJ3ByaW1hcnktY29sb3InIF0sXG4gICAgICAgICAgICAgICAgbWluU3BvdENvbG9yOiBjb25maWcuc2tpbnNbIHNraW4gXVsgJ3ByaW1hcnktY29sb3InIF0sXG4gICAgICAgICAgICAgICAgbWF4U3BvdENvbG9yOiBjb25maWcuc2tpbnNbIHNraW4gXVsgJ3ByaW1hcnktY29sb3InIF0sXG4gICAgICAgICAgICAgICAgaGlnaGxpZ2h0U3BvdENvbG9yOiBjb2xvcnNbICdkYW5nZXItY29sb3InIF0sXG4gICAgICAgICAgICAgICAgbGluZVdpZHRoOiAnMicsXG4gICAgICAgICAgICAgICAgbGluZUNvbG9yOiBjb25maWcuc2tpbnNbIHNraW4gXVsgJ3ByaW1hcnktY29sb3InIF0sXG4gICAgICAgICAgICAgICAgZmlsbENvbG9yOiBjb2xvcnNbICdib2R5LWJnJyBdXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICB9O1xuXG4gICAgJC5mbi50a1NwYXJrQmFyID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy50ZXh0KHRoaXMuZmluZCgnc3BhbicpLnRleHQoKSk7XG5cbiAgICAgICAgdGhpcy5zcGFya2xpbmUoXG4gICAgICAgICAgICB0aGlzLmRhdGEoJ2RhdGEnKSB8fCBcImh0bWxcIiwge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzcwJyxcbiAgICAgICAgICAgICAgICBiYXJXaWR0aDogMTAsXG4gICAgICAgICAgICAgICAgYmFyU3BhY2luZzogOCxcbiAgICAgICAgICAgICAgICB6ZXJvQXhpczogZmFsc2UsXG4gICAgICAgICAgICAgICAgc3RhY2tlZEJhckNvbG9yOiBbIGNvbmZpZy5za2luc1sgc2tpbiBdWyAncHJpbWFyeS1jb2xvcicgXSwgY29sb3JzWyAnZGVmYXVsdC1saWdodC1jb2xvcicgXSBdLFxuICAgICAgICAgICAgICAgIGNvbG9yTWFwOiB0aGlzLmRhdGEoJ2NvbG9ycycpID8gWyBjb25maWcuc2tpbnNbIHNraW4gXVsgJ3ByaW1hcnktY29sb3InIF0sIGNvbG9yc1sgJ3N1Y2Nlc3MtY29sb3InIF0sIGNvbG9yc1sgJ2Rhbmdlci1jb2xvcicgXSwgY29sb3JzWyAnZGVmYXVsdC1saWdodC1jb2xvcicgXSBdIDogW10sXG4gICAgICAgICAgICAgICAgZW5hYmxlVGFnT3B0aW9uczogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgfTtcblxuICAgICQoXCIuc3BhcmtsaW5lLWJhclwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS50a1NwYXJrQmFyKCk7XG4gICAgfSk7XG5cbiAgICAkKFwiLnNwYXJrbGluZS1saW5lXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLnRrU3BhcmtMaW5lKCk7XG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7IiwicmVxdWlyZSgnLi9fc3BhcmtsaW5lJyk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIC8qKlxuICAgICAqIGpRdWVyeSBwbHVnaW4gd3JhcHBlciBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEFuZ3VsYXIgVUkuVXRpbHM6IGpRdWVyeSBQYXNzdGhyb3VnaFxuICAgICAqL1xuICAgICQuZm4udGtDYXJvdXNlbCA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuY2Fyb3VzZWwoKTtcblxuICAgICAgICB0aGlzLmZpbmQoJ1tkYXRhLXNsaWRlXScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIC8qKlxuICAgICAqIGpRdWVyeSBwbHVnaW4gd3JhcHBlciBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEFuZ3VsYXIgVUkuVXRpbHM6IGpRdWVyeSBQYXNzdGhyb3VnaFxuICAgICAqL1xuICAgICQuZm4udGtDb2xsYXBzZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLmF0dHIoJ2hyZWYnKSB8fCB0aGlzLmF0dHIoJ3RhcmdldCcpO1xuICAgICAgICBpZiAoISB0YXJnZXQpIHJldHVybjtcblxuICAgICAgICB0aGlzLmNsaWNrKGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKHRhcmdldCkuY29sbGFwc2Uoe3RvZ2dsZTogZmFsc2V9KTtcblxuICAgIH07XG5cbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvKipcbiAgICAgKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAgICAgKi9cbiAgICAkLmZuLnRrTW9kYWwgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcy5hdHRyKCdocmVmJykgfHwgdGhpcy5hdHRyKCd0YXJnZXQnKTtcbiAgICAgICAgaWYgKCEgdGFyZ2V0KSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKHRhcmdldCkubW9kYWwoe3Nob3c6IGZhbHNlfSk7XG5cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogTW9kYWwgY3JlYXRvciBmb3IgdGhlIGRlbW8gcGFnZS5cbiAgICAgKiBBbGxvd3MgdG8gZXhwbG9yZSBkaWZmZXJlbnQgbW9kYWwgdHlwZXMuXG4gICAgICogRm9yIGRlbW8gcHVycG9zZXMgb25seS5cbiAgICAgKi9cblxuICAgIC8vIFByb2Nlc3MgdGhlIG1vZGFsIHZpYSBIYW5kbGViYXJzIHRlbXBsYXRlc1xuICAgIHZhciBtb2RhbCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSAkKFwiI1wiICsgb3B0aW9ucy50ZW1wbGF0ZSkuaHRtbCgpO1xuICAgICAgICB2YXIgdGVtcGxhdGUgPSBIYW5kbGViYXJzLmNvbXBpbGUoc291cmNlKTtcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlKG9wdGlvbnMpO1xuICAgIH07XG5cbiAgICB2YXIgcmFuZG9tSWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qKiBAcmV0dXJuIFN0cmluZyAqL1xuICAgICAgICB2YXIgUzQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gKCgoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMCkgfCAwKS50b1N0cmluZygxNikuc3Vic3RyaW5nKDEpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gKFM0KCkgKyBTNCgpICsgXCItXCIgKyBTNCgpICsgXCItXCIgKyBTNCgpICsgXCItXCIgKyBTNCgpICsgXCItXCIgKyBTNCgpICsgUzQoKSArIFM0KCkpO1xuICAgIH07XG5cbiAgICAkLmZuLnRrTW9kYWxEZW1vID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgdmFyIHRhcmdldElkID0gdGhpcy5hdHRyKCdocmVmJykgfHwgdGhpcy5hdHRyKCd0YXJnZXQnKSxcbiAgICAgICAgICAgIHRhcmdldCA9ICQodGFyZ2V0SWQpO1xuXG4gICAgICAgIGlmICghIHRhcmdldElkKSB7XG4gICAgICAgICAgICB0YXJnZXRJZCA9IHJhbmRvbUlkKCk7XG4gICAgICAgICAgICB0aGlzLmF0dHIoJ2RhdGEtdGFyZ2V0JywgJyMnICsgdGFyZ2V0SWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFyZ2V0SWQucmVwbGFjZSgnIycsICcnKTtcblxuICAgICAgICBpZiAoISB0YXJnZXQubGVuZ3RoKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSAkKG1vZGFsKHtcbiAgICAgICAgICAgICAgICBpZDogdGFyZ2V0SWQsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHRoaXMuZGF0YSgndGVtcGxhdGUnKSB8fCAndGstbW9kYWwtZGVtbycsXG4gICAgICAgICAgICAgICAgbW9kYWxPcHRpb25zOiB0aGlzLmRhdGEoJ21vZGFsT3B0aW9ucycpIHx8ICcnLFxuICAgICAgICAgICAgICAgIGRpYWxvZ09wdGlvbnM6IHRoaXMuZGF0YSgnZGlhbG9nT3B0aW9ucycpIHx8ICcnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnRPcHRpb25zOiB0aGlzLmRhdGEoJ2NvbnRlbnRPcHRpb25zJykgfHwgJydcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICQoJ2JvZHknKS5hcHBlbmQodGFyZ2V0KTtcbiAgICAgICAgICAgIHRhcmdldC5tb2RhbCh7c2hvdzogZmFsc2V9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRhcmdldC5tb2RhbCgndG9nZ2xlJyk7XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgICQoJ1tkYXRhLXRvZ2dsZT1cInRrLW1vZGFsLWRlbW9cIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS50a01vZGFsRGVtbygpO1xuICAgIH0pO1xuXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwic3dpdGNoLWNoZWNrYm94XCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgJCh0aGlzKS5ib290c3RyYXBTd2l0Y2goe1xuICAgICAgICAgICAgb2ZmQ29sb3I6ICdkYW5nZXInXG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvKipcbiAgICAgKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAgICAgKi9cbiAgICAkLmZuLnRrQ2hlY2tBbGwgPSBmdW5jdGlvbigpe1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCQodGhpcykuZGF0YSgndGFyZ2V0JykpLmZpbmQoJzpjaGVja2JveCcpLnByb3AoJ2NoZWNrZWQnLCB0aGlzLmNoZWNrZWQpO1xuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICAvLyBDaGVjayBBbGwgQ2hlY2tib3hlc1xuICAgICQoJ1tkYXRhLXRvZ2dsZT1cImNoZWNrLWFsbFwiXScpLnRrQ2hlY2tBbGwoKTtcblxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIC8qKlxuICAgICAqIENvbnNlcnZlIGFzcGVjdCByYXRpbyBvZiB0aGUgb3JpZ25hbCByZWdpb24uIFVzZWZ1bCB3aGVuIHNocmlua2luZy9lbmxhcmdpbmdcbiAgICAgKiBpbWFnZXMgdG8gZml0IGludG8gYSBjZXJ0YWluIGFyZWEuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc3JjV2lkdGggU291cmNlIGFyZWEgd2lkdGhcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc3JjSGVpZ2h0IFNvdXJjZSBhcmVhIGhlaWdodFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBtYXhXaWR0aCBGaXR0YWJsZSBhcmVhIG1heGltdW0gYXZhaWxhYmxlIHdpZHRoXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG1heEhlaWdodCBGaXR0YWJsZSBhcmVhIG1heGltdW0gYXZhaWxhYmxlIGhlaWdodFxuICAgICAqIEByZXR1cm4ge09iamVjdH0geyB3aWR0aCwgaGVpZ3RoIH1cbiAgICAgKi9cbiAgICB2YXIgYXNwZWN0UmF0aW9GaXQgPSBmdW5jdGlvbiAoc3JjV2lkdGgsIHNyY0hlaWdodCwgbWF4V2lkdGgsIG1heEhlaWdodCkge1xuXG4gICAgICAgIHZhciB3UmF0aW8gPSBtYXhXaWR0aCAvIHNyY1dpZHRoLFxuICAgICAgICAgICAgaFJhdGlvID0gbWF4SGVpZ2h0IC8gc3JjSGVpZ2h0LFxuICAgICAgICAgICAgd2lkdGggPSBzcmNXaWR0aCxcbiAgICAgICAgICAgIGhlaWdodCA9IHNyY0hlaWdodDtcblxuICAgICAgICBpZiAoc3JjV2lkdGggLyBtYXhXaWR0aCA8IHNyY0hlaWdodCAvIG1heEhlaWdodCkge1xuICAgICAgICAgICAgd2lkdGggPSBtYXhXaWR0aDtcbiAgICAgICAgICAgIGhlaWdodCA9IHNyY0hlaWdodCAqIHdSYXRpbztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpZHRoID0gc3JjV2lkdGggKiBoUmF0aW87XG4gICAgICAgICAgICBoZWlnaHQgPSBtYXhIZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge3dpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHR9O1xuICAgIH07XG5cbiAgICAkLmZuLnRrQ292ZXIgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICB0aGlzLmZpbHRlcignOnZpc2libGUnKS5ub3QoJ1tjbGFzcyo9XCJoZWlnaHRcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0ID0gJCh0aGlzKSxcbiAgICAgICAgICAgICAgICBpID0gdC5maW5kKCdpbWc6Zmlyc3QnKTtcblxuICAgICAgICAgICAgaWYgKGkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgJC5sb2FkSW1hZ2UoaS5hdHRyKCdzcmMnKSkuZG9uZShmdW5jdGlvbiAoaW1nKSB7XG4gICAgICAgICAgICAgICAgICAgIHQuaGVpZ2h0KGkuaGVpZ2h0KCkpO1xuICAgICAgICAgICAgICAgICAgICAkKCcub3ZlcmxheS1mdWxsJywgdCkuaW5uZXJIZWlnaHQoaS5oZWlnaHQoKSk7XG4gICAgICAgICAgICAgICAgICAgICQoZG9jdW1lbnQpLnRyaWdnZXIoJ2RvbUNoYW5nZWQnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGkgPSB0LmZpbmQoJy5pbWc6Zmlyc3QnKTtcbiAgICAgICAgICAgICAgICB0LmhlaWdodChpLmhlaWdodCgpKTtcbiAgICAgICAgICAgICAgICAkKCcub3ZlcmxheS1mdWxsJywgdCkuaW5uZXJIZWlnaHQoaS5oZWlnaHQoKSk7XG4gICAgICAgICAgICAgICAgJChkb2N1bWVudCkudHJpZ2dlcignZG9tQ2hhbmdlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmZpbHRlcignOnZpc2libGUnKS5maWx0ZXIoJ1tjbGFzcyo9XCJoZWlnaHRcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0ID0gJCh0aGlzKSxcbiAgICAgICAgICAgICAgICBpbWcgPSB0LmZpbmQoJ2ltZycpIHx8IHQuZmluZCgnLmltZycpO1xuXG4gICAgICAgICAgICBpbWcuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmIChpLmRhdGEoJ2F1dG9TaXplJykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaS5pcygnaW1nJykpIHtcbiAgICAgICAgICAgICAgICAgICAgJC5sb2FkSW1hZ2UoaS5hdHRyKCdzcmMnKSkuZG9uZShmdW5jdGlvbiAoaW1nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpLmNzcyhhc3BlY3RSYXRpb0ZpdChpLndpZHRoKCksIGkuaGVpZ2h0KCksIHQud2lkdGgoKSwgdC5oZWlnaHQoKSkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGkucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgaS5jc3MoYXNwZWN0UmF0aW9GaXQoaS53aWR0aCgpLCBpLmhlaWdodCgpLCB0LndpZHRoKCksIHQuaGVpZ2h0KCkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gaGVpZ2h0KCkge1xuXG4gICAgICAgICQoJy5jb3Zlci5vdmVybGF5JykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnRrQ292ZXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAkKGRvY3VtZW50KS5yZWFkeShoZWlnaHQpO1xuICAgICQod2luZG93KS5vbignbG9hZCcsIGhlaWdodCk7XG5cbiAgICB2YXIgdDtcbiAgICAkKHdpbmRvdykub24oXCJkZWJvdW5jZWRyZXNpemVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodCk7XG4gICAgICAgIHQgPSBzZXRUaW1lb3V0KGhlaWdodCwgMjAwKTtcbiAgICB9KTtcblxufSkoalF1ZXJ5KTtcbiIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgLyoqXG4gICAgICogalF1ZXJ5IHBsdWdpbiB3cmFwcGVyIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQW5ndWxhciBVSS5VdGlsczogalF1ZXJ5IFBhc3N0aHJvdWdoXG4gICAgICovXG4gICAgJC5mbi50a0RhdGVQaWNrZXIgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBpZiAodHlwZW9mICQuZm4uZGF0ZXBpY2tlciAhPSAndW5kZWZpbmVkJykge1xuXG4gICAgICAgICAgICB0aGlzLmRhdGVwaWNrZXIoKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgJCgnLmRhdGVwaWNrZXInKS50a0RhdGVQaWNrZXIoKTtcblxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICQuZm4udGtEYXRlcmFuZ2VwaWNrZXJSZXBvcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlID0gdGhpcztcbiAgICAgICAgdGhpcy5kYXRlcmFuZ2VwaWNrZXIoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmFuZ2VzOiB7XG4gICAgICAgICAgICAgICAgICAgICdUb2RheSc6IFsgbW9tZW50KCksIG1vbWVudCgpIF0sXG4gICAgICAgICAgICAgICAgICAgICdZZXN0ZXJkYXknOiBbIG1vbWVudCgpLnN1YnRyYWN0KCdkYXlzJywgMSksIG1vbWVudCgpLnN1YnRyYWN0KCdkYXlzJywgMSkgXSxcbiAgICAgICAgICAgICAgICAgICAgJ0xhc3QgNyBEYXlzJzogWyBtb21lbnQoKS5zdWJ0cmFjdCgnZGF5cycsIDYpLCBtb21lbnQoKSBdLFxuICAgICAgICAgICAgICAgICAgICAnTGFzdCAzMCBEYXlzJzogWyBtb21lbnQoKS5zdWJ0cmFjdCgnZGF5cycsIDI5KSwgbW9tZW50KCkgXSxcbiAgICAgICAgICAgICAgICAgICAgJ1RoaXMgTW9udGgnOiBbIG1vbWVudCgpLnN0YXJ0T2YoJ21vbnRoJyksIG1vbWVudCgpLmVuZE9mKCdtb250aCcpIF0sXG4gICAgICAgICAgICAgICAgICAgICdMYXN0IE1vbnRoJzogWyBtb21lbnQoKS5zdWJ0cmFjdCgnbW9udGgnLCAxKS5zdGFydE9mKCdtb250aCcpLCBtb21lbnQoKS5zdWJ0cmFjdCgnbW9udGgnLCAxKS5lbmRPZignbW9udGgnKSBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdGFydERhdGU6IG1vbWVudCgpLnN1YnRyYWN0KCdkYXlzJywgMjkpLFxuICAgICAgICAgICAgICAgIGVuZERhdGU6IG1vbWVudCgpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnVuY3Rpb24gKHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3V0cHV0ID0gc3RhcnQuZm9ybWF0KCdNTU1NIEQsIFlZWVknKSArICcgLSAnICsgZW5kLmZvcm1hdCgnTU1NTSBELCBZWVlZJyk7XG4gICAgICAgICAgICAgICAgZS5maW5kKCdzcGFuJykuaHRtbChvdXRwdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH07XG5cbiAgICAkLmZuLnRrRGF0ZXJhbmdlcGlja2VyUmVzZXJ2YXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGF0ZXJhbmdlcGlja2VyKHtcbiAgICAgICAgICAgIHRpbWVQaWNrZXI6IHRydWUsXG4gICAgICAgICAgICB0aW1lUGlja2VySW5jcmVtZW50OiAzMCxcbiAgICAgICAgICAgIGZvcm1hdDogJ01NL0REL1lZWVkgaDptbSBBJ1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgJCgnLmRhdGVyYW5nZXBpY2tlci1yZXBvcnQnKS50a0RhdGVyYW5nZXBpY2tlclJlcG9ydCgpO1xuXG4gICAgJCgnLmRhdGVyYW5nZXBpY2tlci1yZXNlcnZhdGlvbicpLnRrRGF0ZXJhbmdlcGlja2VyUmVzZXJ2YXRpb24oKTtcblxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIC8qKlxuICAgICAqIGpRdWVyeSBwbHVnaW4gd3JhcHBlciBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEFuZ3VsYXIgVUkuVXRpbHM6IGpRdWVyeSBQYXNzdGhyb3VnaFxuICAgICAqIEB0b2RvOiBBbmd1bGFyIGRpcmVjdGl2ZS5cbiAgICAgKi9cbiAgICAkLmZuLnRrRXhwYW5kYWJsZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuZmluZCgnLmV4cGFuZGFibGUtY29udGVudCcpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImV4cGFuZGFibGUtaW5kaWNhdG9yXCI+PGk+PC9pPjwvZGl2PicpO1xuXG4gICAgfTtcblxuICAgICQoJy5leHBhbmRhYmxlJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykudGtFeHBhbmRhYmxlKCk7XG4gICAgfSk7XG5cbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5leHBhbmRhYmxlLWluZGljYXRvcicsIGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnLmV4cGFuZGFibGUnKS50b2dnbGVDbGFzcygnZXhwYW5kYWJsZS1vcGVuJyk7XG4gICAgfSk7XG5cbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5leHBhbmRhYmxlLXRyaWdnZXI6bm90KC5leHBhbmRhYmxlLW9wZW4pJywgZnVuY3Rpb24oKXtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnZXhwYW5kYWJsZS1vcGVuJyk7XG4gICAgfSk7XG5cbn0oalF1ZXJ5KSk7IiwiKGZ1bmN0aW9uICgpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIC8vIGlmIHdlJ3JlIGluc2lkZSBhbiBpZnJhbWUsIHJlbG9hZCB3aXRob3V0IGlmcmFtZVxuICAgIGlmICh3aW5kb3cubG9jYXRpb24gIT0gd2luZG93LnBhcmVudC5sb2NhdGlvbilcbiAgICAgICAgdG9wLmxvY2F0aW9uLmhyZWYgPSBkb2N1bWVudC5sb2NhdGlvbi5ocmVmO1xuXG59KSgpO1xuIiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvKipcbiAgICAgKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAgICAgKiBAdG9kbzogQW5ndWxhciBkaXJlY3RpdmUuXG4gICAgICovXG4gICAgJC5mbi50a01pbmlDb2xvcnMgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBpZiAodHlwZW9mICQuZm4ubWluaWNvbG9ycyAhPSAndW5kZWZpbmVkJykge1xuXG4gICAgICAgICAgICB0aGlzLm1pbmljb2xvcnMoe1xuICAgICAgICAgICAgICAgIGNvbnRyb2w6IHRoaXMuYXR0cignZGF0YS1jb250cm9sJykgfHwgJ2h1ZScsXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiB0aGlzLmF0dHIoJ2RhdGEtZGVmYXVsdFZhbHVlJykgfHwgJycsXG4gICAgICAgICAgICAgICAgaW5saW5lOiB0aGlzLmF0dHIoJ2RhdGEtaW5saW5lJykgPT09ICd0cnVlJyxcbiAgICAgICAgICAgICAgICBsZXR0ZXJDYXNlOiB0aGlzLmF0dHIoJ2RhdGEtbGV0dGVyQ2FzZScpIHx8ICdsb3dlcmNhc2UnLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IHRoaXMuYXR0cignZGF0YS1vcGFjaXR5JyksXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHRoaXMuYXR0cignZGF0YS1wb3NpdGlvbicpIHx8ICdib3R0b20gbGVmdCcsXG4gICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbiAoaGV4LCBvcGFjaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghIGhleCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICBpZiAob3BhY2l0eSkgaGV4ICs9ICcsICcgKyBvcGFjaXR5O1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhoZXgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGVtZTogJ2Jvb3RzdHJhcCdcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICAkKCcubWluaWNvbG9ycycpLmVhY2goZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICQodGhpcykudGtNaW5pQ29sb3JzKCk7XG5cbiAgICB9KTtcblxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIC8qKlxuICAgICAqIGpRdWVyeSBwbHVnaW4gd3JhcHBlciBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEFuZ3VsYXIgVUkuVXRpbHM6IGpRdWVyeSBQYXNzdGhyb3VnaFxuICAgICAqIEB0b2RvOiBBbmd1bGFyIGRpcmVjdGl2ZS5cbiAgICAgKi9cbiAgICAkLmZuLnRrTmVzdGFibGUgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBpZiAodHlwZW9mICQuZm4ubmVzdGFibGUgIT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICAgICAgdGhpcy5uZXN0YWJsZSh7XG4gICAgICAgICAgICAgICAgcm9vdENsYXNzOiAnbmVzdGFibGUnLFxuICAgICAgICAgICAgICAgIGxpc3ROb2RlTmFtZTogJ3VsJyxcbiAgICAgICAgICAgICAgICBsaXN0Q2xhc3M6ICduZXN0YWJsZS1saXN0JyxcbiAgICAgICAgICAgICAgICBpdGVtQ2xhc3M6ICduZXN0YWJsZS1pdGVtJyxcbiAgICAgICAgICAgICAgICBkcmFnQ2xhc3M6ICduZXN0YWJsZS1kcmFnJyxcbiAgICAgICAgICAgICAgICBoYW5kbGVDbGFzczogJ25lc3RhYmxlLWhhbmRsZScsXG4gICAgICAgICAgICAgICAgY29sbGFwc2VkQ2xhc3M6ICduZXN0YWJsZS1jb2xsYXBzZWQnLFxuICAgICAgICAgICAgICAgIHBsYWNlQ2xhc3M6ICduZXN0YWJsZS1wbGFjZWhvbGRlcicsXG4gICAgICAgICAgICAgICAgZW1wdHlDbGFzczogJ25lc3RhYmxlLWVtcHR5J1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgICQoJy5uZXN0YWJsZScpLnRrTmVzdGFibGUoKTtcblxufSkoalF1ZXJ5KTtcbiIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgdmFyIHJhbmRvbUlkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8qKiBAcmV0dXJuIFN0cmluZyAqL1xuICAgICAgICB2YXIgUzQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiAoKCgxK01hdGgucmFuZG9tKCkpKjB4MTAwMDApfDApLnRvU3RyaW5nKDE2KS5zdWJzdHJpbmcoMSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiAoUzQoKStTNCgpK1wiLVwiK1M0KCkrXCItXCIrUzQoKStcIi1cIitTNCgpK1wiLVwiK1M0KCkrUzQoKStTNCgpKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogalF1ZXJ5IHBsdWdpbiB3cmFwcGVyIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQW5ndWxhciBVSS5VdGlsczogalF1ZXJ5IFBhc3N0aHJvdWdoXG4gICAgICovXG4gICAgJC5mbi50a1BhbmVsQ29sbGFwc2UgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICB2YXIgYm9keSA9ICQoJy5wYW5lbC1ib2R5JywgdGhpcyksXG4gICAgICAgICAgICBpZCA9IGJvZHkuYXR0cignaWQnKSB8fCByYW5kb21JZCgpLFxuICAgICAgICAgICAgY29sbGFwc2UgPSAkKCc8ZGl2Lz4nKTtcblxuICAgICAgICBjb2xsYXBzZVxuICAgICAgICAgICAgLmF0dHIoJ2lkJywgaWQpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ2NvbGxhcHNlJyArICh0aGlzLmRhdGEoJ29wZW4nKSA/ICcgaW4nIDogJycpKVxuICAgICAgICAgICAgLmFwcGVuZChib2R5LmNsb25lKCkpO1xuXG4gICAgICAgIGJvZHkucmVtb3ZlKCk7XG5cbiAgICAgICAgJCh0aGlzKS5hcHBlbmQoY29sbGFwc2UpO1xuXG4gICAgICAgICQoJy5wYW5lbC1jb2xsYXBzZS10cmlnZ2VyJywgdGhpcylcbiAgICAgICAgICAgIC5hdHRyKCdkYXRhLXRvZ2dsZScsICdjb2xsYXBzZScgKVxuICAgICAgICAgICAgLmF0dHIoJ2RhdGEtdGFyZ2V0JywgJyMnICsgaWQpXG4gICAgICAgICAgICAuY29sbGFwc2UoeyB0cmlnZ2VyOiBmYWxzZSB9KTtcblxuICAgIH07XG5cbiAgICAkKCdbZGF0YS10b2dnbGU9XCJwYW5lbC1jb2xsYXBzZVwiXScpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgJCh0aGlzKS50a1BhbmVsQ29sbGFwc2UoKTtcbiAgICB9KTtcblxufSkoalF1ZXJ5KTtcbiIsIihmdW5jdGlvbiAoJCkge1xuXG4gICAgLy8gUHJvZ3Jlc3MgQmFyIEFuaW1hdGlvblxuICAgICQoJy5wcm9ncmVzcy1iYXInKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS53aWR0aCgkKHRoaXMpLmF0dHIoJ2FyaWEtdmFsdWVub3cnKSArICclJyk7XG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvKipcbiAgICAgKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAgICAgKi9cbiAgICAkLmZuLnRrU2VsZWN0MiA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIGlmICh0eXBlb2YgJC5mbi5zZWxlY3QyICE9ICd1bmRlZmluZWQnKSB7XG5cbiAgICAgICAgICAgIHZhciB0ID0gdGhpcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBhbGxvd0NsZWFyOiB0LmRhdGEoJ2FsbG93Q2xlYXInKVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmICh0LmlzKCdidXR0b24nKSkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBpZiAodC5pcygnaW5wdXRbdHlwZT1cImJ1dHRvblwiXScpKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKHQuaXMoJ1tkYXRhLXRvZ2dsZT1cInNlbGVjdDItdGFnc1wiXScpKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy50YWdzID0gdC5kYXRhKCd0YWdzJykuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdC5zZWxlY3QyKG9wdGlvbnMpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAgICAgKi9cbiAgICAkLmZuLnRrU2VsZWN0MkVuYWJsZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIGlmICh0eXBlb2YgJC5mbi5zZWxlY3QyICE9ICd1bmRlZmluZWQnKSB7XG5cbiAgICAgICAgICAgIHRoaXMuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQoJCh0aGlzKS5kYXRhKCd0YXJnZXQnKSkuc2VsZWN0MihcImVuYWJsZVwiKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAgICAgKi9cbiAgICAkLmZuLnRrU2VsZWN0MkRpc2FibGUgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBpZiAodHlwZW9mICQuZm4uc2VsZWN0MiAhPSAndW5kZWZpbmVkJykge1xuXG4gICAgICAgICAgICB0aGlzLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMuZGF0YSgndGFyZ2V0JykpLnNlbGVjdDIoXCJkaXNhYmxlXCIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIGpRdWVyeSBwbHVnaW4gd3JhcHBlciBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEFuZ3VsYXIgVUkuVXRpbHM6IGpRdWVyeSBQYXNzdGhyb3VnaFxuICAgICAqL1xuICAgICQuZm4udGtTZWxlY3QyRmxhZ3MgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBpZiAodHlwZW9mICQuZm4uc2VsZWN0MiAhPSAndW5kZWZpbmVkJykge1xuXG4gICAgICAgICAgICAvLyB0ZW1wbGF0aW5nXG4gICAgICAgICAgICB2YXIgZm9ybWF0ID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEgc3RhdGUuaWQpIHJldHVybiBzdGF0ZS50ZXh0O1xuICAgICAgICAgICAgICAgIHJldHVybiBcIjxpbWcgY2xhc3M9J2ZsYWcnIHNyYz0naHR0cDovL3NlbGVjdDIuZ2l0aHViLmlvL3NlbGVjdDIvaW1hZ2VzL2ZsYWdzL1wiICsgc3RhdGUuaWQudG9Mb3dlckNhc2UoKSArIFwiLnBuZycvPlwiICsgc3RhdGUudGV4dDtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuc2VsZWN0Mih7XG4gICAgICAgICAgICAgICAgZm9ybWF0UmVzdWx0OiBmb3JtYXQsXG4gICAgICAgICAgICAgICAgZm9ybWF0U2VsZWN0aW9uOiBmb3JtYXQsXG4gICAgICAgICAgICAgICAgZXNjYXBlTWFya3VwOiBmdW5jdGlvbiAobSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgJCgnW2RhdGEtdG9nZ2xlKj1cInNlbGVjdDJcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICQodGhpcykudGtTZWxlY3QyKCk7XG5cbiAgICB9KTtcblxuICAgICQoJ1tkYXRhLXRvZ2dsZT1cInNlbGVjdDItZW5hYmxlXCJdJykudGtTZWxlY3QyRW5hYmxlKCk7XG5cbiAgICAkKCdbZGF0YS10b2dnbGU9XCJzZWxlY3QyLWRpc2FibGVcIl0nKS50a1NlbGVjdDJEaXNhYmxlKCk7XG5cbiAgICAkKFwiI3NlbGVjdDJfN1wiKS50a1NlbGVjdDJGbGFncygpO1xuXG59KShqUXVlcnkpO1xuIiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvKipcbiAgICAgKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAgICAgKi9cbiAgICAkLmZuLnRrU2VsZWN0UGlja2VyID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgaWYgKHR5cGVvZiAkLmZuLnNlbGVjdHBpY2tlciAhPSAndW5kZWZpbmVkJykge1xuXG4gICAgICAgICAgICB0aGlzLnNlbGVjdHBpY2tlcih7XG4gICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMuZGF0YSgnd2lkdGgnKSB8fCAnMTAwJSdcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICAkKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAkKCcuc2VsZWN0cGlja2VyJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICQodGhpcykudGtTZWxlY3RQaWNrZXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxufSkoalF1ZXJ5KTtcbiIsIihmdW5jdGlvbiAoJCkge1xuXG4gICAgdmFyIHNob3dIb3ZlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnW2RhdGEtc2hvdy1ob3Zlcl0nKS5oaWRlKCkuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgcGFyZW50ID0gJCh0aGlzKS5kYXRhKCdzaG93SG92ZXInKTtcblxuICAgICAgICAgICAgc2VsZi5jbG9zZXN0KHBhcmVudCkub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBzZWxmLnNob3coKTtcbiAgICAgICAgICAgIH0pLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmhpZGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgc2hvd0hvdmVyKCk7XG5cbiAgICB3aW5kb3cuc2hvd0hvdmVyID0gc2hvd0hvdmVyO1xuXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgdmFyIGJhcnMgPSBmdW5jdGlvbihlbCl7XG4gICAgICAgICQoJy5zbGlkZXItaGFuZGxlJywgZWwpLmh0bWwoJzxpIGNsYXNzPVwiZmEgZmEtYmFycyBmYS1yb3RhdGUtOTBcIj48L2k+Jyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIGpRdWVyeSBwbHVnaW4gd3JhcHBlciBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEFuZ3VsYXIgVUkuVXRpbHM6IGpRdWVyeSBQYXNzdGhyb3VnaFxuICAgICAqL1xuICAgICQuZm4udGtTbGlkZXIgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBpZiAodHlwZW9mICQuZm4uc2xpZGVyICE9ICd1bmRlZmluZWQnKSB7XG5cbiAgICAgICAgICAgIHRoaXMuc2xpZGVyKCk7XG5cbiAgICAgICAgICAgIGJhcnModGhpcyk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIGpRdWVyeSBwbHVnaW4gd3JhcHBlciBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEFuZ3VsYXIgVUkuVXRpbHM6IGpRdWVyeSBQYXNzdGhyb3VnaFxuICAgICAqL1xuICAgICQuZm4udGtTbGlkZXJGb3JtYXR0ZXIgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBpZiAodHlwZW9mICQuZm4uc2xpZGVyICE9ICd1bmRlZmluZWQnKSB7XG5cbiAgICAgICAgICAgIHRoaXMuc2xpZGVyKHtcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ0N1cnJlbnQgdmFsdWU6ICcgKyB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYmFycyh0aGlzKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogalF1ZXJ5IHBsdWdpbiB3cmFwcGVyIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQW5ndWxhciBVSS5VdGlsczogalF1ZXJ5IFBhc3N0aHJvdWdoXG4gICAgICovXG4gICAgJC5mbi50a1NsaWRlclVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIGlmICh0eXBlb2YgJC5mbi5zbGlkZXIgIT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICAgICAgdGhpcy5vbihcInNsaWRlXCIsIGZ1bmN0aW9uIChzbGlkZUV2dCkge1xuICAgICAgICAgICAgICAgICQodGhpcy5hdHRyKCdkYXRhLW9uLXNsaWRlJykpLnRleHQoc2xpZGVFdnQudmFsdWUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGJhcnModGhpcyk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgICQoJ1tkYXRhLXNsaWRlcj1cImRlZmF1bHRcIl0nKS50a1NsaWRlcigpO1xuXG4gICAgJCgnW2RhdGEtc2xpZGVyPVwiZm9ybWF0dGVyXCJdJykudGtTbGlkZXJGb3JtYXR0ZXIoKTtcblxuICAgICQoJ1tkYXRhLW9uLXNsaWRlXScpLnRrU2xpZGVyVXBkYXRlKCk7XG5cbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvKipcbiAgICAgKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAgICAgKi9cbiAgICAkLmZuLnRrU3VtbWVybm90ZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIGlmICh0eXBlb2YgJC5mbi5zdW1tZXJub3RlICE9ICd1bmRlZmluZWQnKSB7XG5cbiAgICAgICAgICAgIHRoaXMuc3VtbWVybm90ZSh7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICAkKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAkKCcuc3VtbWVybm90ZScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAkKHRoaXMpLnRrU3VtbWVybm90ZSgpO1xuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG59KShqUXVlcnkpO1xuIiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvKipcbiAgICAgKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAgICAgKi9cbiAgICAkLmZuLnRrRGF0YVRhYmxlID0gZnVuY3Rpb24oKXtcblxuICAgICAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIGlmICh0eXBlb2YgJC5mbi5kYXRhVGFibGUgIT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICAgICAgdGhpcy5kYXRhVGFibGUoKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwiZGF0YS10YWJsZVwiXScpLnRrRGF0YVRhYmxlKCk7XG5cbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgICB2YXIgc2tpbiA9IHJlcXVpcmUoJy4vX3NraW4nKSgpO1xuXG4gICAgJCgnLnRhYmJhYmxlIC5uYXYtdGFicycpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHRhYnMgPSAkKHRoaXMpLm5pY2VTY3JvbGwoe1xuICAgICAgICAgICAgY3Vyc29yYm9yZGVyOiAwLFxuICAgICAgICAgICAgY3Vyc29yY29sb3I6IGNvbmZpZy5za2luc1sgc2tpbiBdWyAncHJpbWFyeS1jb2xvcicgXSxcbiAgICAgICAgICAgIGhvcml6cmFpbGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICBvbmVheGlzbW91c2Vtb2RlOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBfc3VwZXIgPSB0YWJzLmdldENvbnRlbnRTaXplO1xuICAgICAgICB0YWJzLmdldENvbnRlbnRTaXplID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgcGFnZSA9IF9zdXBlci5jYWxsKHRhYnMpO1xuICAgICAgICAgICAgcGFnZS5oID0gdGFicy53aW4uaGVpZ2h0KCk7XG4gICAgICAgICAgICByZXR1cm4gcGFnZTtcbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgICQoJ1tkYXRhLXNjcm9sbGFibGVdJykuZ2V0TmljZVNjcm9sbCgpLnJlc2l6ZSgpO1xuXG4gICAgJCgnLnRhYmJhYmxlIC5uYXYtdGFicyBhJykub24oJ3Nob3duLmJzLnRhYicsIGZ1bmN0aW9uKGUpe1xuICAgICAgICB2YXIgdGFiID0gJCh0aGlzKS5jbG9zZXN0KCcudGFiYmFibGUnKTtcbiAgICAgICAgdmFyIHRhcmdldCA9ICQoZS50YXJnZXQpLFxuICAgICAgICAgICAgdGFyZ2V0UGFuZSA9IHRhcmdldC5hdHRyKCdocmVmJykgfHwgdGFyZ2V0LmRhdGEoJ3RhcmdldCcpO1xuXG4gICAgICAgIC8vIHJlZnJlc2ggdGFicyB3aXRoIGhvcml6b250YWwgc2Nyb2xsXG4gICAgICAgIHRhYi5maW5kKCcubmF2LXRhYnMnKS5nZXROaWNlU2Nyb2xsKCkucmVzaXplKCk7XG5cbiAgICAgICAgLy8gcmVmcmVzaCBbZGF0YS1zY3JvbGxhYmxlXSB3aXRoaW4gdGhlIGFjdGl2YXRlZCB0YWIgcGFuZVxuICAgICAgICAkKHRhcmdldFBhbmUpLmZpbmQoJ1tkYXRhLXNjcm9sbGFibGVdJykuZ2V0TmljZVNjcm9sbCgpLnJlc2l6ZSgpO1xuICAgIH0pO1xuXG59KGpRdWVyeSkpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgLy8gVG9vbHRpcFxuICAgICQoXCJib2R5XCIpLnRvb2x0aXAoe3NlbGVjdG9yOiAnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScsIGNvbnRhaW5lcjogXCJib2R5XCJ9KTtcblxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIC8qKlxuICAgICAqIGpRdWVyeSBwbHVnaW4gd3JhcHBlciBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEFuZ3VsYXIgVUkuVXRpbHM6IGpRdWVyeSBQYXNzdGhyb3VnaFxuICAgICAqL1xuICAgICQuZm4udGtUb3VjaFNwaW4gPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBpZiAodHlwZW9mICQuZm4uVG91Y2hTcGluICE9ICd1bmRlZmluZWQnKSB7XG5cbiAgICAgICAgICAgIHRoaXMuVG91Y2hTcGluKCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgICQoJ1tkYXRhLXRvZ2dsZT1cInRvdWNoLXNwaW5cIl0nKS50a1RvdWNoU3BpbigpO1xuXG59KGpRdWVyeSkpOyIsIihmdW5jdGlvbiAoJCkge1xuXG4gICAgdmFyIHRyZWVfZ2x5cGhfb3B0aW9ucyA9IHtcbiAgICAgICAgbWFwOiB7XG4gICAgICAgICAgICBjaGVja2JveDogXCJmYSBmYS1zcXVhcmUtb1wiLFxuICAgICAgICAgICAgY2hlY2tib3hTZWxlY3RlZDogXCJmYSBmYS1jaGVjay1zcXVhcmVcIixcbiAgICAgICAgICAgIGNoZWNrYm94VW5rbm93bjogXCJmYSBmYS1jaGVjay1zcXVhcmUgZmEtbXV0ZWRcIixcbiAgICAgICAgICAgIGVycm9yOiBcImZhIGZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCIsXG4gICAgICAgICAgICBleHBhbmRlckNsb3NlZDogXCJmYSBmYS1jYXJldC1yaWdodFwiLFxuICAgICAgICAgICAgZXhwYW5kZXJMYXp5OiBcImZhIGZhLWFuZ2xlLXJpZ2h0XCIsXG4gICAgICAgICAgICBleHBhbmRlck9wZW46IFwiZmEgZmEtY2FyZXQtZG93blwiLFxuICAgICAgICAgICAgZG9jOiBcImZhIGZhLWZpbGUtb1wiLFxuICAgICAgICAgICAgbm9FeHBhbmRlcjogXCJcIixcbiAgICAgICAgICAgIGRvY09wZW46IFwiZmEgZmEtZmlsZVwiLFxuICAgICAgICAgICAgbG9hZGluZzogXCJmYSBmYS1yZWZyZXNoIGZhLXNwaW5cIixcbiAgICAgICAgICAgIGZvbGRlcjogXCJmYSBmYS1mb2xkZXJcIixcbiAgICAgICAgICAgIGZvbGRlck9wZW46IFwiZmEgZmEtZm9sZGVyLW9wZW5cIlxuICAgICAgICB9XG4gICAgfSxcbiAgICB0cmVlX2RuZF9vcHRpb25zID0ge1xuICAgICAgICBhdXRvRXhwYW5kTVM6IDQwMCxcbiAgICAgICAgICAgIGZvY3VzT25DbGljazogdHJ1ZSxcbiAgICAgICAgICAgIHByZXZlbnRWb2lkTW92ZXM6IHRydWUsIC8vIFByZXZlbnQgZHJvcHBpbmcgbm9kZXMgJ2JlZm9yZSBzZWxmJywgZXRjLlxuICAgICAgICAgICAgcHJldmVudFJlY3Vyc2l2ZU1vdmVzOiB0cnVlLCAvLyBQcmV2ZW50IGRyb3BwaW5nIG5vZGVzIG9uIG93biBkZXNjZW5kYW50c1xuICAgICAgICAgICAgZHJhZ1N0YXJ0OiBmdW5jdGlvbihub2RlLCBkYXRhKSB7XG4gICAgICAgICAgICAvKiogVGhpcyBmdW5jdGlvbiBNVVNUIGJlIGRlZmluZWQgdG8gZW5hYmxlIGRyYWdnaW5nIGZvciB0aGUgdHJlZS5cbiAgICAgICAgICAgICAqICBSZXR1cm4gZmFsc2UgdG8gY2FuY2VsIGRyYWdnaW5nIG9mIG5vZGUuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICBkcmFnRW50ZXI6IGZ1bmN0aW9uKG5vZGUsIGRhdGEpIHtcbiAgICAgICAgICAgIC8qKiBkYXRhLm90aGVyTm9kZSBtYXkgYmUgbnVsbCBmb3Igbm9uLWZhbmN5dHJlZSBkcm9wcGFibGVzLlxuICAgICAgICAgICAgICogIFJldHVybiBmYWxzZSB0byBkaXNhbGxvdyBkcm9wcGluZyBvbiBub2RlLiBJbiB0aGlzIGNhc2VcbiAgICAgICAgICAgICAqICBkcmFnT3ZlciBhbmQgZHJhZ0xlYXZlIGFyZSBub3QgY2FsbGVkLlxuICAgICAgICAgICAgICogIFJldHVybiAnb3ZlcicsICdiZWZvcmUsIG9yICdhZnRlcicgdG8gZm9yY2UgYSBoaXRNb2RlLlxuICAgICAgICAgICAgICogIFJldHVybiBbJ2JlZm9yZScsICdhZnRlciddIHRvIHJlc3RyaWN0IGF2YWlsYWJsZSBoaXRNb2Rlcy5cbiAgICAgICAgICAgICAqICBBbnkgb3RoZXIgcmV0dXJuIHZhbHVlIHdpbGwgY2FsYyB0aGUgaGl0TW9kZSBmcm9tIHRoZSBjdXJzb3IgcG9zaXRpb24uXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIC8vIFByZXZlbnQgZHJvcHBpbmcgYSBwYXJlbnQgYmVsb3cgYW5vdGhlciBwYXJlbnQgKG9ubHkgc29ydFxuICAgICAgICAgICAgLy8gbm9kZXMgdW5kZXIgdGhlIHNhbWUgcGFyZW50KVxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgIGlmKG5vZGUucGFyZW50ICE9PSBkYXRhLm90aGVyTm9kZS5wYXJlbnQpe1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIERvbid0IGFsbG93IGRyb3BwaW5nICpvdmVyKiBhIG5vZGUgKHdvdWxkIGNyZWF0ZSBhIGNoaWxkKVxuICAgICAgICAgICAgcmV0dXJuIFtcImJlZm9yZVwiLCBcImFmdGVyXCJdO1xuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICBkcmFnRHJvcDogZnVuY3Rpb24obm9kZSwgZGF0YSkge1xuICAgICAgICAgICAgLyoqIFRoaXMgZnVuY3Rpb24gTVVTVCBiZSBkZWZpbmVkIHRvIGVuYWJsZSBkcm9wcGluZyBvZiBpdGVtcyBvblxuICAgICAgICAgICAgICogIHRoZSB0cmVlLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBkYXRhLm90aGVyTm9kZS5tb3ZlVG8obm9kZSwgZGF0YS5oaXRNb2RlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAgICAgKi9cbiAgICAkLmZuLnRrRmFuY3lUcmVlID0gZnVuY3Rpb24oKXtcblxuICAgICAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIGlmICh0eXBlb2YgJC5mbi5mYW5jeXRyZWUgPT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcblxuICAgICAgICB2YXIgZXh0ZW5zaW9ucyA9IFsgXCJnbHlwaFwiIF07XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5hdHRyKCdkYXRhLXRyZWUtZG5kJykgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGV4dGVuc2lvbnMucHVzaCggXCJkbmRcIiApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmFuY3l0cmVlKHtcbiAgICAgICAgICAgIGV4dGVuc2lvbnM6IGV4dGVuc2lvbnMsXG4gICAgICAgICAgICBnbHlwaDogdHJlZV9nbHlwaF9vcHRpb25zLFxuICAgICAgICAgICAgZG5kOiB0cmVlX2RuZF9vcHRpb25zLFxuICAgICAgICAgICAgY2xpY2tGb2xkZXJNb2RlOiAzLFxuICAgICAgICAgICAgY2hlY2tib3g6IHR5cGVvZiB0aGlzLmF0dHIoJ2RhdGEtdHJlZS1jaGVja2JveCcpICE9PSBcInVuZGVmaW5lZFwiIHx8IGZhbHNlLFxuICAgICAgICAgICAgc2VsZWN0TW9kZTogdHlwZW9mIHRoaXMuYXR0cignZGF0YS10cmVlLXNlbGVjdCcpICE9PSBcInVuZGVmaW5lZFwiID8gcGFyc2VJbnQodGhpcy5hdHRyKCdkYXRhLXRyZWUtc2VsZWN0JykpIDogMlxuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICAvLyB1c2luZyBkZWZhdWx0IG9wdGlvbnNcbiAgICAkKCdbZGF0YS10b2dnbGU9XCJ0cmVlXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykudGtGYW5jeVRyZWUoKTtcbiAgICB9KTtcblxufShqUXVlcnkpKTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIC8qKlxuICAgICAqIGpRdWVyeSBwbHVnaW4gd3JhcHBlciBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEFuZ3VsYXIgVUkuVXRpbHM6IGpRdWVyeSBQYXNzdGhyb3VnaFxuICAgICAqL1xuICAgICQuZm4udGtXaXphcmQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBpZiAodHlwZW9mICQuZm4uc2xpY2sgPT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcblxuICAgICAgICB2YXIgdCA9IHRoaXMsXG4gICAgICAgICAgICBjb250YWluZXIgPSB0LmNsb3Nlc3QoJy53aXphcmQtY29udGFpbmVyJyk7XG5cbiAgICAgICAgdC5zbGljayh7XG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICBydGw6IHRoaXMuZGF0YSgncnRsJyksXG4gICAgICAgICAgICBzbGlkZTogJ2ZpZWxkc2V0JyxcbiAgICAgICAgICAgIG9uQWZ0ZXJDaGFuZ2U6IGZ1bmN0aW9uICh3aXosIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgJChkb2N1bWVudCkudHJpZ2dlcignYWZ0ZXIud2l6YXJkLnN0ZXAnLCB7XG4gICAgICAgICAgICAgICAgICAgIHdpejogd2l6LFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogdFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb250YWluZXIuZmluZCgnLndpei1uZXh0JykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHQuc2xpY2tOZXh0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnRhaW5lci5maW5kKCcud2l6LXByZXYnKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdC5zbGlja1ByZXYoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29udGFpbmVyLmZpbmQoJy53aXotc3RlcCcpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0LnNsaWNrR29UbygkKHRoaXMpLmRhdGEoJ3RhcmdldCcpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ3Nob3cuYnMubW9kYWwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0LmNsb3Nlc3QoJy5tb2RhbC1ib2R5JykuaGlkZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbignc2hvd24uYnMubW9kYWwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0LmNsb3Nlc3QoJy5tb2RhbC1ib2R5Jykuc2hvdygpO1xuICAgICAgICAgICAgdC5zbGlja1NldE9wdGlvbignZG90cycsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwid2l6YXJkXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykudGtXaXphcmQoKTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEJ5IGxldmVyYWdpbmcgZXZlbnRzIHdlIGNhbiBob29rIGludG8gdGhlIHdpemFyZCB0byBhZGQgZnVuY3Rpb25hbGl0eS5cbiAgICAgKiBUaGlzIGV4YW1wbGUgdXBkYXRlcyB0aGUgcHJvZ3Jlc3MgYmFyIGFmdGVyIHRoZSB3aXphcmQgc3RlcCBjaGFuZ2VzLlxuICAgICAqL1xuICAgICQoZG9jdW1lbnQpLm9uKCdhZnRlci53aXphcmQuc3RlcCcsIGZ1bmN0aW9uIChldmVudCwgZGF0YSkge1xuXG4gICAgICAgIGlmIChkYXRhLmNvbnRhaW5lci5pcygnI3dpemFyZC1kZW1vLTEnKSkge1xuXG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZGF0YS5jb250YWluZXIuZmluZCgnLndpei1wcm9ncmVzcyBsaTplcSgnICsgZGF0YS50YXJnZXQgKyAnKScpO1xuXG4gICAgICAgICAgICBkYXRhLmNvbnRhaW5lci5maW5kKCcud2l6LXByb2dyZXNzIGxpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZSBjb21wbGV0ZScpO1xuXG4gICAgICAgICAgICB0YXJnZXQuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICB0YXJnZXQucHJldkFsbCgpLmFkZENsYXNzKCdjb21wbGV0ZScpO1xuXG4gICAgICAgIH1cblxuICAgIH0pO1xuXG59KGpRdWVyeSkpOyIsInJlcXVpcmUoJy4vX3RhYnMnKTtcbnJlcXVpcmUoJy4vX3RyZWUnKTtcbnJlcXVpcmUoJy4vX3Nob3ctaG92ZXInKTtcbnJlcXVpcmUoJy4vX2RhdGVyYW5nZXBpY2tlcicpO1xucmVxdWlyZSgnLi9fZXhwYW5kYWJsZScpO1xucmVxdWlyZSgnLi9fbmVzdGFibGUnKTtcbnJlcXVpcmUoJy4vX2NvdmVyJyk7XG5yZXF1aXJlKCcuL190b29sdGlwJyk7XG5yZXF1aXJlKCcuL190YWJsZXMnKTtcbnJlcXVpcmUoJy4vX2NoZWNrLWFsbCcpO1xucmVxdWlyZSgnLi9fcHJvZ3Jlc3MtYmFycycpO1xucmVxdWlyZSgnLi9faWZyYW1lJyk7XG5yZXF1aXJlKCcuL19ib290c3RyYXAtY29sbGFwc2UnKTtcbnJlcXVpcmUoJy4vX2Jvb3RzdHJhcC1jYXJvdXNlbCcpO1xucmVxdWlyZSgnLi9fYm9vdHN0cmFwLW1vZGFsJyk7XG5yZXF1aXJlKCcuL19wYW5lbC1jb2xsYXBzZScpO1xuXG4vLyBGb3Jtc1xucmVxdWlyZSgnLi9fdG91Y2hzcGluJyk7XG5yZXF1aXJlKCcuL19zZWxlY3QyJyk7XG5yZXF1aXJlKCcuL19zbGlkZXInKTtcbnJlcXVpcmUoJy4vX3NlbGVjdHBpY2tlcicpO1xucmVxdWlyZSgnLi9fZGF0ZXBpY2tlcicpO1xucmVxdWlyZSgnLi9fbWluaWNvbG9ycycpO1xucmVxdWlyZSgnLi9fYm9vdHN0cmFwLXN3aXRjaCcpO1xucmVxdWlyZSgnLi9fd2l6YXJkJyk7XG5yZXF1aXJlKCcuL19zdW1tZXJub3RlJyk7IiwiZnVuY3Rpb24gY29udGVudExvYWRlZCh3aW4sIGZuKSB7XG5cbiAgICB2YXIgZG9uZSA9IGZhbHNlLCB0b3AgPSB0cnVlLFxuXG4gICAgICAgIGRvYyA9IHdpbi5kb2N1bWVudCxcbiAgICAgICAgcm9vdCA9IGRvYy5kb2N1bWVudEVsZW1lbnQsXG4gICAgICAgIG1vZGVybiA9IGRvYy5hZGRFdmVudExpc3RlbmVyLFxuXG4gICAgICAgIGFkZCA9IG1vZGVybiA/ICdhZGRFdmVudExpc3RlbmVyJyA6ICdhdHRhY2hFdmVudCcsXG4gICAgICAgIHJlbSA9IG1vZGVybiA/ICdyZW1vdmVFdmVudExpc3RlbmVyJyA6ICdkZXRhY2hFdmVudCcsXG4gICAgICAgIHByZSA9IG1vZGVybiA/ICcnIDogJ29uJyxcblxuICAgICAgICBpbml0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmIChlLnR5cGUgPT0gJ3JlYWR5c3RhdGVjaGFuZ2UnICYmIGRvYy5yZWFkeVN0YXRlICE9ICdjb21wbGV0ZScpIHJldHVybjtcbiAgICAgICAgICAgIChlLnR5cGUgPT0gJ2xvYWQnID8gd2luIDogZG9jKVsgcmVtIF0ocHJlICsgZS50eXBlLCBpbml0LCBmYWxzZSk7XG4gICAgICAgICAgICBpZiAoISBkb25lICYmIChkb25lID0gdHJ1ZSkpIGZuLmNhbGwod2luLCBlLnR5cGUgfHwgZSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcG9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcm9vdC5kb1Njcm9sbCgnbGVmdCcpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQocG9sbCwgNTApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGluaXQoJ3BvbGwnKTtcbiAgICAgICAgfTtcblxuICAgIGlmIChkb2MucmVhZHlTdGF0ZSA9PSAnY29tcGxldGUnKSBmbi5jYWxsKHdpbiwgJ2xhenknKTtcbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKCEgbW9kZXJuICYmIHJvb3QuZG9TY3JvbGwpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdG9wID0gISB3aW4uZnJhbWVFbGVtZW50O1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRvcCkgcG9sbCgpO1xuICAgICAgICB9XG4gICAgICAgIGRvY1sgYWRkIF0ocHJlICsgJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0LCBmYWxzZSk7XG4gICAgICAgIGRvY1sgYWRkIF0ocHJlICsgJ3JlYWR5c3RhdGVjaGFuZ2UnLCBpbml0LCBmYWxzZSk7XG4gICAgICAgIHdpblsgYWRkIF0ocHJlICsgJ2xvYWQnLCBpbml0LCBmYWxzZSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVybHMsIGNhbGxiYWNrKSB7XG5cbiAgICB2YXIgYXN5bmNMb2FkZXIgPSBmdW5jdGlvbiAodXJscywgY2FsbGJhY2spIHtcblxuICAgICAgICB1cmxzLmZvcmVhY2goZnVuY3Rpb24gKGksIGZpbGUpIHtcbiAgICAgICAgICAgIGxvYWRDc3MoZmlsZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNoZWNraW5nIGZvciBhIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgLy8gY2FsbGluZyB0aGUgY2FsbGJhY2tcbiAgICAgICAgICAgIGNvbnRlbnRMb2FkZWQod2luZG93LCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGxvYWRDc3MgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICBsaW5rLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgICAgICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICAgICAgbGluay5ocmVmID0gdXJsO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWyAwIF0uYXBwZW5kQ2hpbGQobGluayk7XG4gICAgfTtcblxuICAgIC8vIHNpbXBsZSBmb3JlYWNoIGltcGxlbWVudGF0aW9uXG4gICAgQXJyYXkucHJvdG90eXBlLmZvcmVhY2ggPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSArKykge1xuICAgICAgICAgICAgY2FsbGJhY2soaSwgdGhpc1sgaSBdKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBhc3luY0xvYWRlcih1cmxzLCBjYWxsYmFjayk7XG5cbn07IiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgICAkKHdpbmRvdykuc2V0QnJlYWtwb2ludHMoe1xuICAgICAgICBkaXN0aW5jdDogdHJ1ZSxcbiAgICAgICAgYnJlYWtwb2ludHM6IFsgMzIwLCA0ODAsIDc2OCwgMTAyNCBdXG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvKipcbiAgICAgKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAgICAgKi9cbiAgICAkLmZuLnRrR3JpZGFsaWNpb3VzID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5ncmlkYWxpY2lvdXMoe1xuICAgICAgICAgICAgZ3V0dGVyOiB0aGlzLmRhdGEoJ2d1dHRlcicpIHx8IDE1LFxuICAgICAgICAgICAgd2lkdGg6IHRoaXMuZGF0YSgnd2lkdGgnKSB8fCAzNzAsXG4gICAgICAgICAgICBzZWxlY3RvcjogJz4gZGl2JyxcbiAgICAgICAgICAgIGFuaW1hdGlvbk9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcigncmVzaXplJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICAkKCdbZGF0YS10b2dnbGUqPVwiZ3JpZGFsaWNpb3VzXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykudGtHcmlkYWxpY2lvdXMoKTtcbiAgICB9KTtcblxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIC8qKlxuICAgICAqIGpRdWVyeSBwbHVnaW4gd3JhcHBlciBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEFuZ3VsYXIgVUkuVXRpbHM6IGpRdWVyeSBQYXNzdGhyb3VnaFxuICAgICAqL1xuICAgICQuZm4udGtJc290b3BlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5pc290b3BlKHtcbiAgICAgICAgICAgIGxheW91dE1vZGU6IHRoaXMuZGF0YSgnbGF5b3V0TW9kZScpIHx8IFwicGFja2VyeVwiLFxuICAgICAgICAgICAgaXRlbVNlbGVjdG9yOiAnLml0ZW0nXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8qXG4gICAgICAgIHRoaXMuaXNvdG9wZSgnb24nLCAnbGF5b3V0Q29tcGxldGUnLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3Jlc2l6ZScpO1xuICAgICAgICB9KTtcbiAgICAgICAgKi9cblxuICAgIH07XG5cbiAgICAkKGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCdbZGF0YS10b2dnbGU9XCJpc290b3BlXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS50a0lzb3RvcGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAzMDApO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdkb21DaGFuZ2VkJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICQoJ1tkYXRhLXRvZ2dsZT1cImlzb3RvcGVcIl0nKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5pc290b3BlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxufSkoalF1ZXJ5KTtcbiIsIi8vIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4vLyBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG4vLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG4vLyBNSVQgbGljZW5zZVxuKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGFzdFRpbWUgPSAwO1xuICAgIHZhciB2ZW5kb3JzID0gWyAnbXMnLCAnbW96JywgJ3dlYmtpdCcsICdvJyBdO1xuICAgIGZvciAodmFyIHggPSAwOyB4IDwgdmVuZG9ycy5sZW5ndGggJiYgISB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOyArKyB4KSB7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbIHZlbmRvcnNbIHggXSArICdSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnIF07XG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvd1sgdmVuZG9yc1sgeCBdICsgJ0NhbmNlbEFuaW1hdGlvbkZyYW1lJyBdIHx8IHdpbmRvd1sgdmVuZG9yc1sgeCBdICsgJ0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZScgXTtcbiAgICB9XG5cbiAgICBpZiAoISB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKVxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBlbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGltZSkpO1xuICAgICAgICAgICAgdmFyIGlkID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhjdXJyVGltZSArIHRpbWVUb0NhbGwpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGltZVRvQ2FsbCk7XG4gICAgICAgICAgICBsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbDtcbiAgICAgICAgICAgIHJldHVybiBpZDtcbiAgICAgICAgfTtcblxuICAgIGlmICghIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSlcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaWQpO1xuICAgICAgICB9O1xufSgpKTtcblxuKGZ1bmN0aW9uICgkLCB3aW5kb3cpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICQuZm4udGtQYXJhbGxheCA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoTW9kZXJuaXpyLnRvdWNoKSByZXR1cm47XG5cbiAgICAgICAgdmFyIGdldE9wdGlvbnMgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzcGVlZDogZS5kYXRhKCdzcGVlZCcpIHx8IDQsXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlOiBlLmRhdGEoJ3NwZWVkJykgfHwgdHJ1ZSxcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVXaGVuOiBlLmRhdGEoJ3RyYW5zbGF0ZVdoZW4nKSB8fCAnaW5WaWV3cG9ydFRvcCcsXG4gICAgICAgICAgICAgICAgYXV0b09mZnNldDogZS5kYXRhKCdhdXRvT2Zmc2V0JyksXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBlLmRhdGEoJ29mZnNldCcpIHx8IDAsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogZS5kYXRhKCdvcGFjaXR5JylcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyICR3aW5kb3cgPSAkKHdpbmRvdyksXG4gICAgICAgICAgICAkd2luZG93Q29udGVudCA9ICQoJy5zdC1jb250ZW50LWlubmVyJyksXG4gICAgICAgICAgICAkZWxlbWVudCA9IHRoaXM7XG5cbiAgICAgICAgdmFyIHRpY2tpbmcgPSBmYWxzZSxcbiAgICAgICAgICAgICRzY3JvbGxhYmxlID0gbnVsbCxcbiAgICAgICAgICAgIGxhc3RTY3JvbGxUb3AgPSAwO1xuXG4gICAgICAgIHZhciBpc1NhZmFyaSA9IC9TYWZhcmkvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgL0FwcGxlIENvbXB1dGVyLy50ZXN0KG5hdmlnYXRvci52ZW5kb3IpO1xuXG4gICAgICAgIHZhciByZXF1ZXN0VGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoISB0aWNraW5nKSB7XG4gICAgICAgICAgICAgICAgJHNjcm9sbGFibGUgPSAkKGUuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICAgICAgLy8gYWx0aG91Z2ggU2FmYXJpIGhhcyBzdXBwb3J0IGZvciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUsXG4gICAgICAgICAgICAgICAgLy8gdGhlIGFuaW1hdGlvbiBpbiB0aGlzIGNhc2UgaXMgY2hvcHB5IHNvIHdlJ2xsIGp1c3QgcnVuIGl0IGRpcmVjdGx5XG4gICAgICAgICAgICAgICAgaWYgKGlzU2FmYXJpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgICAgICAgICAgICAgICAgICB0aWNraW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gVHJhbnNsYXRlcyBhbiBlbGVtZW50IG9uIHRoZSBZIGF4aXMgdXNpbmcgdHJhbnNsYXRlM2QgdG8gZW5zdXJlXG4gICAgICAgIC8vIHRoYXQgdGhlIHJlbmRlcmluZyBpcyBkb25lIGJ5IHRoZSBHUFVcbiAgICAgICAgdmFyIHRyYW5zbGF0ZVkgPSBmdW5jdGlvbiAoZWxtLCB2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIHRyYW5zbGF0ZSA9ICd0cmFuc2xhdGUzZCgwcHgsJyArIHZhbHVlICsgJ3B4LCAwcHgpJztcbiAgICAgICAgICAgIGVsbS5zdHlsZVsgJy13ZWJraXQtdHJhbnNmb3JtJyBdID0gdHJhbnNsYXRlO1xuICAgICAgICAgICAgZWxtLnN0eWxlWyAnLW1vei10cmFuc2Zvcm0nIF0gPSB0cmFuc2xhdGU7XG4gICAgICAgICAgICBlbG0uc3R5bGVbICctbXMtdHJhbnNmb3JtJyBdID0gdHJhbnNsYXRlO1xuICAgICAgICAgICAgZWxtLnN0eWxlWyAnLW8tdHJhbnNmb3JtJyBdID0gdHJhbnNsYXRlO1xuICAgICAgICAgICAgZWxtLnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zbGF0ZTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgbGF5ZXJzID0gJGVsZW1lbnQuZmluZCgnLnBhcmFsbGF4LWxheWVyJyk7XG5cbiAgICAgICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsYXllcnMuZWFjaChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgbGF5ZXIgPSAkKHRoaXMpLFxuICAgICAgICAgICAgICAgICAgICBsYXllck9wdGlvbnMgPSBnZXRPcHRpb25zKGxheWVyKSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ID0gJGVsZW1lbnQub3V0ZXJIZWlnaHQodHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAobGF5ZXJPcHRpb25zLnRyYW5zbGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGF5ZXIuaXMoJ2ltZycpICYmIGxheWVyT3B0aW9ucy5hdXRvT2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkLmxvYWRJbWFnZShsYXllci5hdHRyKCdzcmMnKSkuZG9uZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXIucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGF5ZXJIZWlnaHQgPSBsYXllci5oZWlnaHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gbGF5ZXJIZWlnaHQgKiAwLjMzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgob2Zmc2V0ICsgaGVpZ2h0KSA+IGxheWVySGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCA9IGxheWVySGVpZ2h0IC0gaGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSBvZmZzZXQgKiAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXIuYXR0cignZGF0YS1vZmZzZXQnLCBvZmZzZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVkobGF5ZXIuZ2V0KDApLCBvZmZzZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGluaXQoKTtcbiAgICAgICAgJCh3aW5kb3cpLm9uKFwiZGVib3VuY2VkcmVzaXplXCIsIGluaXQpO1xuXG4gICAgICAgIHZhciBhbmltYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHNjcm9sbFRvcCA9IHBhcnNlSW50KCRzY3JvbGxhYmxlLnNjcm9sbFRvcCgpKTtcbiAgICAgICAgICAgIHZhciBzY3JvbGxhYmxlVG9wID0gJHNjcm9sbGFibGUuaXMoJHdpbmRvdykgPyAwIDogJHNjcm9sbGFibGUub2Zmc2V0KCkudG9wO1xuICAgICAgICAgICAgdmFyIGhlaWdodCA9ICRlbGVtZW50Lm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICAgICAgdmFyIGJvZHlQYWRkaW5nID0ge1xuICAgICAgICAgICAgICAgIHRvcDogcGFyc2VJbnQoJChkb2N1bWVudC5ib2R5KS5jc3MoJ3BhZGRpbmctdG9wJykpLFxuICAgICAgICAgICAgICAgIGJvdHRvbTogcGFyc2VJbnQoJChkb2N1bWVudC5ib2R5KS5jc3MoJ3BhZGRpbmctYm90dG9tJykpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIHdpbmRvd0hlaWdodCA9ICRzY3JvbGxhYmxlLmlubmVySGVpZ2h0KCk7XG4gICAgICAgICAgICB2YXIgd2luZG93Qm90dG9tID0gc2Nyb2xsVG9wICsgd2luZG93SGVpZ2h0IC0gKGJvZHlQYWRkaW5nLmJvdHRvbSArIGJvZHlQYWRkaW5nLnRvcCk7XG4gICAgICAgICAgICB2YXIgdG9wID0gJGVsZW1lbnQub2Zmc2V0KCkudG9wIC0gc2Nyb2xsYWJsZVRvcCAtIGJvZHlQYWRkaW5nLnRvcDtcbiAgICAgICAgICAgIHZhciBib3R0b20gPSB0b3AgKyBoZWlnaHQ7XG4gICAgICAgICAgICB2YXIgdG9wQWJzID0gTWF0aC5hYnModG9wKTtcbiAgICAgICAgICAgIHZhciBwb3MgPSB0b3AgLyB3aW5kb3dIZWlnaHQgKiAxMDA7XG4gICAgICAgICAgICB2YXIgb3BhY2l0eUtleSA9IGhlaWdodCAqIDAuNTtcbiAgICAgICAgICAgIHZhciB3aGVuID0ge307XG5cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgKiBPTkxZIHdoZW4gdGhlIHNjcm9sbGFibGUgZWxlbWVudCBJUyBOT1QgdGhlIHdpbmRvd1xuICAgICAgICAgICAgICovXG5cbiAgICAgICAgICAgIC8vIHdoZW4gdGhlIGVsZW1lbnQgaXMgYW55d2hlcmUgaW4gdmlld3BvcnRcbiAgICAgICAgICAgIHdoZW4uaW5WaWV3cG9ydCA9IChib3R0b20gPiAwKSAmJiAodG9wIDwgd2luZG93SGVpZ2h0KTtcblxuICAgICAgICAgICAgLy8gd2hlbiB0aGUgdG9wIG9mIHRoZSB2aWV3cG9ydCBpcyBjcm9zc2luZyB0aGUgZWxlbWVudFxuICAgICAgICAgICAgd2hlbi5pblZpZXdwb3J0VG9wID0gKGJvdHRvbSA+IDApICYmICh0b3AgPCAwKTtcblxuICAgICAgICAgICAgLy8gd2hlbiB0aGUgYm90dG9tIG9mIHRoZSB2aWV3cG9ydCBpcyBjcm9zc2luZyB0aGUgZWxlbWVudFxuICAgICAgICAgICAgd2hlbi5pblZpZXdwb3J0Qm90dG9tID0gKGJvdHRvbSA+IDApICYmICh0b3AgPCB3aW5kb3dIZWlnaHQpICYmIChib3R0b20gPiB3aW5kb3dIZWlnaHQpO1xuXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgICogT05MWSB3aGVuIHRoZSBzY3JvbGxhYmxlIGVsZW1lbnQgSVMgdGhlIHdpbmRvd1xuICAgICAgICAgICAgICovXG5cbiAgICAgICAgICAgIGlmICgkc2Nyb2xsYWJsZS5pcygkd2luZG93KSkge1xuXG4gICAgICAgICAgICAgICAgLy8gd2hlbiB0aGUgd2luZG93IGlzIHNjcm9sbGFibGUgYW5kIHRoZSBlbGVtZW50IGlzIGNvbXBsZXRlbHkgaW4gdGhlIHZpZXdwb3J0XG4gICAgICAgICAgICAgICAgd2hlbi5pbldpbmRvd1ZpZXdwb3J0RnVsbCA9ICh0b3AgPj0gc2Nyb2xsVG9wKSAmJiAoYm90dG9tIDw9IHdpbmRvd0JvdHRvbSk7XG5cbiAgICAgICAgICAgICAgICB3aGVuLmluV2luZG93Vmlld3BvcnQyID0gKHRvcCA+PSBzY3JvbGxUb3ApICYmICh0b3AgPD0gd2luZG93Qm90dG9tKTtcblxuICAgICAgICAgICAgICAgIHdoZW4uaW5XaW5kb3dWaWV3cG9ydDMgPSAoYm90dG9tID49IHNjcm9sbFRvcCkgJiYgKGJvdHRvbSA8PSB3aW5kb3dCb3R0b20pO1xuXG4gICAgICAgICAgICAgICAgd2hlbi5pbldpbmRvd1ZpZXdwb3J0NCA9IChib3R0b20gPj0gc2Nyb2xsVG9wKSAmJiAoYm90dG9tID49IHdpbmRvd0hlaWdodCkgJiYgKGhlaWdodCA+IHdpbmRvd0hlaWdodCk7XG5cbiAgICAgICAgICAgICAgICAvLyB3aGVuIHRoZSB3aW5kb3cgaXMgc2Nyb2xsYWJsZSBhbmQgdGhlIHRvcCBvZiB0aGUgdmlld3BvcnQgaXMgY3Jvc3NpbmcgdGhlIGVsZW1lbnRcbiAgICAgICAgICAgICAgICB3aGVuLmluV2luZG93Vmlld3BvcnRUb3AgPSAhIHdoZW4uaW5XaW5kb3dWaWV3cG9ydDIgJiYgKHdoZW4uaW5XaW5kb3dWaWV3cG9ydDMgfHwgd2hlbi5pbldpbmRvd1ZpZXdwb3J0NCk7XG5cbiAgICAgICAgICAgICAgICAvLyB3aGVuIHRoZSB3aW5kb3cgaXMgc2Nyb2xsYWJsZSBhbmQgdGhlIGJvdHRvbSBvZiB0aGUgdmlld3BvcnQgaXMgY3Jvc3NpbmcgdGhlIGVsZW1lbnRcbiAgICAgICAgICAgICAgICB3aGVuLmluV2luZG93Vmlld3BvcnRCb3R0b20gPSB3aGVuLmluV2luZG93Vmlld3BvcnQyICYmICEgd2hlbi5pbldpbmRvd1ZpZXdwb3J0MztcblxuICAgICAgICAgICAgICAgIC8vIHdoZW4gdGhlIHdpbmRvdyBpcyBzY3JvbGxhYmxlIGFuZCB0aGUgZWxlbWVudCBpcyBhbnl3aGVyZSBpbiB2aWV3cG9ydFxuICAgICAgICAgICAgICAgIHdoZW4uaW5XaW5kb3dWaWV3cG9ydCA9IHdoZW4uaW5XaW5kb3dWaWV3cG9ydFRvcCB8fCB3aGVuLmluV2luZG93Vmlld3BvcnRCb3R0b20gfHwgd2hlbi5pbldpbmRvd1ZpZXdwb3J0RnVsbDtcblxuICAgICAgICAgICAgICAgIHdoZW4uaW5WaWV3cG9ydCA9IHdoZW4uaW5XaW5kb3dWaWV3cG9ydDtcbiAgICAgICAgICAgICAgICB3aGVuLmluVmlld3BvcnRUb3AgPSB3aGVuLmluV2luZG93Vmlld3BvcnRUb3A7XG4gICAgICAgICAgICAgICAgd2hlbi5pblZpZXdwb3J0Qm90dG9tID0gd2hlbi5pbldpbmRvd1ZpZXdwb3J0Qm90dG9tO1xuXG4gICAgICAgICAgICAgICAgcG9zID0gKHRvcCAtIHNjcm9sbFRvcCkgLyB3aW5kb3dIZWlnaHQgKiAxMDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh3aGVuLmluVmlld3BvcnRUb3AgJiYgd2hlbi5pblZpZXdwb3J0Qm90dG9tKSB7XG4gICAgICAgICAgICAgICAgd2hlbi5pblZpZXdwb3J0Qm90dG9tID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghIGlzTmFOKHNjcm9sbFRvcCkpIHtcbiAgICAgICAgICAgICAgICBsYXllcnMuZWFjaChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGxheWVyID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxheWVyT3B0aW9ucyA9IGdldE9wdGlvbnMobGF5ZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciB0eSA9ICh3aW5kb3dIZWlnaHQgKyBoZWlnaHQpIC0gYm90dG9tO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICgkc2Nyb2xsYWJsZS5pcygkd2luZG93KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHkgPSB3aW5kb3dCb3R0b20gLSB0b3A7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAobGF5ZXJPcHRpb25zLnRyYW5zbGF0ZSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGF5ZXJQb3MgPSAoLSAxICogcG9zICogbGF5ZXJPcHRpb25zLnNwZWVkKSArIGxheWVyT3B0aW9ucy5vZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGF5ZXJIZWlnaHQgPSBsYXllci5oZWlnaHQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdoZW4uaW5WaWV3cG9ydCAmJiAhIHdoZW4uaW5WaWV3cG9ydFRvcCAmJiAhIHdoZW4uaW5WaWV3cG9ydEJvdHRvbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXllci5pcygnaW1nJykgJiYgbGF5ZXJIZWlnaHQgPiBoZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChNYXRoLmFicyhsYXllclBvcykgKyBoZWlnaHQpID4gbGF5ZXJIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyUG9zID0gKGxheWVySGVpZ2h0IC0gaGVpZ2h0KSAqIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISBsYXllci5pcygnaW1nJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJQb3MgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdoZW4uaW5WaWV3cG9ydFRvcCAmJiAoKGxheWVyLmlzKCdpbWcnKSAmJiBsYXllckhlaWdodCA9PSBoZWlnaHQpIHx8ICEgbGF5ZXIuaXMoJ2ltZycpICkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllclBvcyA9IE1hdGguYWJzKGxheWVyUG9zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdoZW4uaW5WaWV3cG9ydEJvdHRvbSAmJiAhIGxheWVyLmlzKCdpbWcnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyUG9zID0gaGVpZ2h0IC0gdHk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzY3JvbGxpbmcgdXBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG9wIDwgbGFzdFNjcm9sbFRvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllclBvcyA9IGxheWVyUG9zICogLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdoZW4uaW5WaWV3cG9ydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyUG9zID0gKGxheWVyUG9zKS50b0ZpeGVkKDUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXllckhlaWdodCA+ICR3aW5kb3cuaGVpZ2h0KCkgJiYgc2Nyb2xsVG9wIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJQb3MgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVZKGxheWVyLmdldCgwKSwgbGF5ZXJQb3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAobGF5ZXJPcHRpb25zLm9wYWNpdHkpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmFkZSBpblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdoZW4uaW5WaWV3cG9ydEJvdHRvbSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHksIHlQO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRzY3JvbGxhYmxlLmlzKCR3aW5kb3cpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeSA9IHR5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5UCA9ICh5IC8gaGVpZ2h0KS50b0ZpeGVkKDUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh5ID4gb3BhY2l0eUtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXIuY3NzKHtvcGFjaXR5OiB5UH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXIuY3NzKHtvcGFjaXR5OiAwfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChib3R0b20gPCAod2luZG93SGVpZ2h0ICsgb3BhY2l0eUtleSkpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeSA9ICh3aW5kb3dIZWlnaHQgKyBvcGFjaXR5S2V5KSAtIGJvdHRvbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlQID0gKHkgLyBvcGFjaXR5S2V5KS50b0ZpeGVkKDUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllci5jc3Moe29wYWNpdHk6IHlQfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllci5jc3Moe29wYWNpdHk6IDB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmFkZSBvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHdoZW4uaW5WaWV3cG9ydFRvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0b3BPcmlnaW4gPSAkc2Nyb2xsYWJsZS5pcygkd2luZG93KSA/IHNjcm9sbFRvcCAtIHRvcCA6IHRvcEFicztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9wT3JpZ2luID4gb3BhY2l0eUtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllci5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAoMSAtICh0b3BPcmlnaW4gLyBoZWlnaHQpKS50b0ZpeGVkKDUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyLmNzcyh7J29wYWNpdHknOiAxfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZXNldFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXIuY3NzKHsnb3BhY2l0eSc6IDF9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdoZW4uaW5WaWV3cG9ydEJvdHRvbSAmJiBzY3JvbGxUb3AgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyLmNzcyh7J29wYWNpdHknOiAxfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBsYXN0U2Nyb2xsVG9wID0gc2Nyb2xsVG9wO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aWNraW5nID0gZmFsc2U7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCR3aW5kb3dDb250ZW50Lmxlbmd0aCkge1xuICAgICAgICAgICAgJHdpbmRvd0NvbnRlbnQuc2Nyb2xsKHJlcXVlc3RUaWNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICR3aW5kb3cuc2Nyb2xsKHJlcXVlc3RUaWNrKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgICQoJy5wYXJhbGxheCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLnRrUGFyYWxsYXgoKTtcbiAgICB9KTtcblxufSkoalF1ZXJ5LCB3aW5kb3cpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgdmFyIHNraW4gPSByZXF1aXJlKCcuL19za2luJykoKTtcblxuICAgIC8qKlxuICAgICAqIGpRdWVyeSBwbHVnaW4gd3JhcHBlciBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEFuZ3VsYXIgVUkuVXRpbHM6IGpRdWVyeSBQYXNzdGhyb3VnaFxuICAgICAqL1xuICAgICQuZm4udGtTY3JvbGxhYmxlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgICAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBzZXR0aW5ncyA9ICQuZXh0ZW5kKHtcbiAgICAgICAgICAgIGhvcml6b250YWw6IGZhbHNlXG4gICAgICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgICAgIHZhciBuaWNlID0gdGhpcy5uaWNlU2Nyb2xsKHtcbiAgICAgICAgICAgIGN1cnNvcmJvcmRlcjogMCxcbiAgICAgICAgICAgIGN1cnNvcmNvbG9yOiBjb25maWcuc2tpbnNbIHNraW4gXVsgJ3ByaW1hcnktY29sb3InIF0sXG4gICAgICAgICAgICBob3JpenJhaWxlbmFibGVkOiBzZXR0aW5ncy5ob3Jpem9udGFsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghIHNldHRpbmdzLmhvcml6b250YWwpIHJldHVybjtcblxuICAgICAgICB2YXIgX3N1cGVyID0gbmljZS5nZXRDb250ZW50U2l6ZTtcblxuICAgICAgICBuaWNlLmdldENvbnRlbnRTaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHBhZ2UgPSBfc3VwZXIuY2FsbChuaWNlKTtcbiAgICAgICAgICAgIHBhZ2UuaCA9IG5pY2Uud2luLmhlaWdodCgpO1xuICAgICAgICAgICAgcmV0dXJuIHBhZ2U7XG4gICAgICAgIH07XG5cbiAgICB9O1xuXG4gICAgJCgnW2RhdGEtc2Nyb2xsYWJsZV0nKS50a1Njcm9sbGFibGUoKTtcblxuICAgICQoJ1tkYXRhLXNjcm9sbGFibGUtaF0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICQodGhpcykudGtTY3JvbGxhYmxlKHsgaG9yaXpvbnRhbDogdHJ1ZSB9KTtcblxuICAgIH0pO1xuXG4gICAgdmFyIHQ7XG4gICAgJCh3aW5kb3cpLm9uKCdkZWJvdW5jZWRyZXNpemUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0KTtcbiAgICAgICAgdCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnW2RhdGEtc2Nyb2xsYWJsZV0sIFtkYXRhLXNjcm9sbGFibGUtaF0nKS5nZXROaWNlU2Nyb2xsKCkucmVzaXplKCk7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgfSk7XG5cbn0oalF1ZXJ5KSk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAkLmZuLnRrU2lkZWJhclNpemVQY0RlbW8gPSBmdW5jdGlvbigpe1xuXG4gICAgICAgIHZhciB0LCBzcGNfZGVtbyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCEgc3BjX2RlbW8ubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgJChkb2N1bWVudClcbiAgICAgICAgICAgIC5vbignc2lkZWJhci5zaG93JywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAkKCcjcGMtb3BlbicpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdzaWRlYmFyLmhpZGRlbicsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgJCgnI3BjLW9wZW4nKS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHNwY19kZW1vLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIHMgPSAkKCcuc2lkZWJhcicpLCB2ZSA9ICQoJyNwYy12YWx1ZScpLCB2ID0gdmUudmFsKCk7XG4gICAgICAgICAgICB2ZS5ibHVyKCk7XG4gICAgICAgICAgICBpZiAoISB2Lmxlbmd0aCB8fCB2IDwgMjUpIHtcbiAgICAgICAgICAgICAgICB2ID0gMjU7XG4gICAgICAgICAgICAgICAgdmUudmFsKHYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc1sgMCBdLmNsYXNzTmFtZSA9IHNbIDAgXS5jbGFzc05hbWUucmVwbGFjZSgvc2lkZWJhci1zaXplLShbXFxkXSspcGMvaWcsICdzaWRlYmFyLXNpemUtJyArIHYgKyAncGMnKTtcbiAgICAgICAgICAgIHNpZGViYXIub3Blbignc2lkZWJhci1tZW51Jyk7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodCk7XG4gICAgICAgICAgICB0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2lkZWJhci5jbG9zZSgnc2lkZWJhci1tZW51Jyk7XG4gICAgICAgICAgICB9LCA1MDAwKTtcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwic2lkZWJhci1zaXplLXBjLWRlbW9cIl0nKS50a1NpZGViYXJTaXplUGNEZW1vKCk7XG5cbn0pKGpRdWVyeSk7IiwidmFyIGFzeW5jTG9hZGVyID0gcmVxdWlyZSgnLi9fYXN5bmMnKTtcblxuKGZ1bmN0aW9uICgkKSB7XG5cbiAgICB2YXIgY2hhbmdlU2tpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNraW4gPSAkLmNvb2tpZShcInNraW5cIiksXG4gICAgICAgICAgICBmaWxlID0gJC5jb29raWUoXCJza2luLWZpbGVcIik7XG4gICAgICAgIGlmICh0eXBlb2Ygc2tpbiAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgYXN5bmNMb2FkZXIoWyAnY3NzLycgKyBmaWxlICsgJy5taW4uY3NzJyBdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtc2tpbl0nKS5yZW1vdmVQcm9wKCdkaXNhYmxlZCcpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAkKCdbZGF0YS1za2luXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoJCh0aGlzKS5wcm9wKCdkaXNhYmxlZCcpKSByZXR1cm47XG5cbiAgICAgICAgJCgnW2RhdGEtc2tpbl0nKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuXG4gICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcblxuICAgICAgICAkLmNvb2tpZShcInNraW5cIiwgJCh0aGlzKS5kYXRhKCdza2luJykpO1xuXG4gICAgICAgICQuY29va2llKFwic2tpbi1maWxlXCIsICQodGhpcykuZGF0YSgnZmlsZScpKTtcblxuICAgICAgICBjaGFuZ2VTa2luKCk7XG5cbiAgICB9KTtcblxuICAgIHZhciBza2luID0gJC5jb29raWUoXCJza2luXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBza2luICE9ICd1bmRlZmluZWQnICYmIHNraW4gIT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgIGNoYW5nZVNraW4oKTtcbiAgICB9XG5cbn0pKGpRdWVyeSk7IiwicmVxdWlyZSgnLi9fYnJlYWtwb2ludHMuanMnKTtcbnJlcXVpcmUoJy4vX2dyaWRhbGljaW91cy5qcycpO1xucmVxdWlyZSgnLi9fc2Nyb2xsYWJsZS5qcycpO1xucmVxdWlyZSgnLi9fc2tpbnMnKTtcbnJlcXVpcmUoJy4vX2lzb3RvcGUnKTtcbnJlcXVpcmUoJy4vX3BhcmFsbGF4Jyk7XG5cbi8vIFNpZGViYXIgUGVyY2VudGFnZSBTaXplcyBEZW1vXG5yZXF1aXJlKCcuL19zaWRlYmFyLXBjJyk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICB2YXIgZmluZCA9IGZ1bmN0aW9uIChtYXBEYXRhLCBsb2NhdGlvbiwgbWFya2VyLCBtYXJrZXJEYXRhKSB7XG5cbiAgICAgICAgdmFyIGV2ZW50RGF0YSA9ICQuZXh0ZW5kKHt9LCB7bWFya2VyOiBtYXJrZXJ9LCBtYXJrZXJEYXRhLCBtYXBEYXRhKSxcbiAgICAgICAgICAgIHN0YXRlID0gJycsXG4gICAgICAgICAgICBjb3VudHJ5ID0gJycsXG4gICAgICAgICAgICBhZGRyZXNzID0gJyc7XG5cbiAgICAgICAgbWFwRGF0YS5jb250YWluZXIuZ21hcCgnc2VhcmNoJywgeydsb2NhdGlvbic6IGxvY2F0aW9ufSwgZnVuY3Rpb24gKHJlc3VsdHMsIHN0YXR1cykge1xuXG4gICAgICAgICAgICBpZiAoc3RhdHVzID09PSAnT0snKSB7XG4gICAgICAgICAgICAgICAgYWRkcmVzcyA9IHJlc3VsdHNbIDAgXS5mb3JtYXR0ZWRfYWRkcmVzcztcbiAgICAgICAgICAgICAgICAkLmVhY2gocmVzdWx0c1sgMCBdLmFkZHJlc3NfY29tcG9uZW50cywgZnVuY3Rpb24gKGksIHYpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHYudHlwZXNbIDAgXSA9PSBcImFkbWluaXN0cmF0aXZlX2FyZWFfbGV2ZWxfMVwiIHx8IHYudHlwZXNbIDAgXSA9PSBcImFkbWluaXN0cmF0aXZlX2FyZWFfbGV2ZWxfMlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHYubG9uZ19uYW1lO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHYudHlwZXNbIDAgXSA9PSBcImNvdW50cnlcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRyeSA9IHYubG9uZ19uYW1lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZXZlbnREYXRhID0gJC5leHRlbmQoe30sIGV2ZW50RGF0YSwge3N0YXRlOiBzdGF0ZSwgY291bnRyeTogY291bnRyeSwgYWRkcmVzczogYWRkcmVzc30pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKGRvY3VtZW50KS50cmlnZ2VyKCdtYXAubWFya2VyLmZpbmQnLCBldmVudERhdGEpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIHZhciBiaW5kRmluZCA9IGZ1bmN0aW9uKG1hcmtlciwgbWFya2VyRGF0YSwgZGF0YSkge1xuXG4gICAgICAgIGlmICh0eXBlb2YgbWFya2VyRGF0YS5vcGVuICE9PSAndW5kZWZpbmVkJyAmJiBtYXJrZXJEYXRhLm9wZW4gPT09IHRydWUpIHtcbiAgICAgICAgICAgIGZpbmQoZGF0YSwgbWFya2VyRGF0YS5sYXRMbmcsIG1hcmtlciwgbWFya2VyRGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXJrZXIsICdkcmFnZW5kJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGZpbmQoZGF0YSwgZS5sYXRMbmcsIHRoaXMsIG1hcmtlckRhdGEpO1xuICAgICAgICB9KTtcblxuICAgICAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXJrZXIsICdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBmaW5kKGRhdGEsIGUubGF0TG5nLCB0aGlzLCBtYXJrZXJEYXRhKTtcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgJChkb2N1bWVudCkub24oJ21hcC5pbml0JywgZnVuY3Rpb24gKGV2ZW50LCBkYXRhKSB7XG5cbiAgICAgICAgaWYgKGRhdGEuY29udGFpbmVyLmRhdGEoJ2lkJykgPT0gJ21hcC1lZGl0Jykge1xuXG4gICAgICAgICAgICB2YXIgbWFya2VycyA9IGRhdGEuY29udGFpbmVyLmdtYXAoJ2dldCcsICdtYXJrZXJzJyksXG4gICAgICAgICAgICAgICAgbWFya2VyT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgXCJkcmFnZ2FibGVcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbWFya2VyRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgXCJvcGVuXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIFwidGVtcGxhdGVcIjogXCJ0cGwtZWRpdFwiLFxuICAgICAgICAgICAgICAgICAgICBcImljb25cIjogXCJidWlsZGluZy0wMVwiXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIoZGF0YS5tYXAsICdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuXG4gICAgICAgICAgICAgICAgbWFya2VyRGF0YSA9ICQuZXh0ZW5kKHt9LCBtYXJrZXJEYXRhLCB7XCJsYXRMbmdcIjogZXZlbnQubGF0TG5nfSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgbWFya2VyID0gZGF0YS5hZGRNYXJrZXIobWFya2Vycy5sZW5ndGgsIG1hcmtlckRhdGEsIG1hcmtlck9wdGlvbnMpO1xuXG4gICAgICAgICAgICAgICAgYmluZEZpbmQobWFya2VyLCBtYXJrZXJEYXRhLCBkYXRhKTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKGRhdGEuaXcud2luZG93LCAnZG9tcmVhZHknLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICAkKCcjbWFwLWRlbGV0ZS1tYXJrZXInKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaWQgPSAkKHRoaXMpLmRhdGEoJ2lkJyk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuaXcuY2xvc2UoaWQpO1xuICAgICAgICAgICAgICAgICAgICBtYXJrZXJzWyBpZCBdLnNldE1hcChudWxsKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQuZWFjaChtYXJrZXJzLCBmdW5jdGlvbihpLCBtYXJrZXIpe1xuXG4gICAgICAgICAgICAgICAgdmFyIG1hcmtlckRhdGEgPSBtYXJrZXIuZ2V0KCdjb250ZW50Jyk7XG5cbiAgICAgICAgICAgICAgICBiaW5kRmluZChtYXJrZXIsIG1hcmtlckRhdGEsIGRhdGEpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdtYXAubWFya2VyLmZpbmQnLCBmdW5jdGlvbiAoZXZlbnQsIGRhdGEpIHtcblxuICAgICAgICBkYXRhLm1hcmtlci5zZXRUaXRsZShkYXRhLmFkZHJlc3MpO1xuXG4gICAgICAgIGlmIChkYXRhLml3LndpbmRvdy5pc09wZW4gPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICAgICAgZGF0YS5pdy5vcGVuKGRhdGEubWFya2VyLmdldCgnaWQnKSwgZGF0YSk7XG5cbiAgICB9KTtcblxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIHZhciBhcnJheVVuaXF1ZSA9IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgcmV0dXJuIGEucmVkdWNlKGZ1bmN0aW9uKHAsIGMpIHtcbiAgICAgICAgICAgIGlmIChwLmluZGV4T2YoYykgPCAwKSBwLnB1c2goYyk7XG4gICAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgfSwgW10pO1xuICAgIH07XG5cbiAgICB2YXIgZmlsdGVyID0gZnVuY3Rpb24oZGF0YSl7XG5cbiAgICAgICAgZGF0YS5pdy5jbG9zZSgpO1xuICAgICAgICBkYXRhLmNvbnRhaW5lci5nbWFwKCdzZXQnLCAnYm91bmRzJywgbnVsbCk7XG5cbiAgICAgICAgdmFyIGZpbHRlcnMgPSBbXTtcblxuICAgICAgICAkKCcjcmFkaW9zIDpjaGVja2VkJykuZWFjaChmdW5jdGlvbiAoaSwgY2hlY2tib3gpIHtcbiAgICAgICAgICAgIGZpbHRlcnMucHVzaCgkKGNoZWNrYm94KS52YWwoKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChmaWx0ZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgZGF0YS5jb250YWluZXIuZ21hcCgnZmluZCcsICdtYXJrZXJzJywge1xuICAgICAgICAgICAgICAgICdwcm9wZXJ0eSc6ICd0YWdzJyxcbiAgICAgICAgICAgICAgICAndmFsdWUnOiBmaWx0ZXJzLFxuICAgICAgICAgICAgICAgICdvcGVyYXRvcic6ICdPUidcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChtYXJrZXIsIGZvdW5kKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuY29udGFpbmVyLmdtYXAoJ2FkZEJvdW5kcycsIG1hcmtlci5wb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1hcmtlci5zZXRWaXNpYmxlKGZvdW5kKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJC5lYWNoKGRhdGEuY29udGFpbmVyLmdtYXAoJ2dldCcsICdtYXJrZXJzJyksIGZ1bmN0aW9uIChpLCBtYXJrZXIpIHtcbiAgICAgICAgICAgICAgICBkYXRhLmNvbnRhaW5lci5nbWFwKCdhZGRCb3VuZHMnLCBtYXJrZXIucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIG1hcmtlci5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgJChkb2N1bWVudCkub24oJ21hcC5pbml0JywgZnVuY3Rpb24gKGV2ZW50LCBkYXRhKSB7XG5cbiAgICAgICAgaWYgKGRhdGEuY29udGFpbmVyLmRhdGEoJ2ZpbHRlcnMnKSA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICB2YXIgbWFwID0gZGF0YSxcbiAgICAgICAgICAgICAgICBtYXJrZXJzID0gZGF0YS5jb250YWluZXIuZ21hcCgnZ2V0JywgJ21hcmtlcnMnKSxcbiAgICAgICAgICAgICAgICB0YWdzID0gW10sXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVJZCA9IGRhdGEuY29udGFpbmVyLmRhdGEoJ2ZpbHRlcnNUZW1wbGF0ZScpIHx8ICcjbWFwLWZpbHRlcnMtdGVtcGxhdGUnO1xuXG4gICAgICAgICAgICAkLmVhY2gobWFya2VycywgZnVuY3Rpb24oaSwgbWFya2VyKXtcbiAgICAgICAgICAgICAgICAkLmVhY2gobWFya2VyLnRhZ3MsIGZ1bmN0aW9uKGksIHRhZyl7XG4gICAgICAgICAgICAgICAgICAgIHRhZ3MucHVzaCh0YWcpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRhZ3MgPSBhcnJheVVuaXF1ZSh0YWdzKTtcblxuICAgICAgICAgICAgdmFyIHNvdXJjZSA9ICQodGVtcGxhdGVJZCkuaHRtbCgpO1xuICAgICAgICAgICAgdmFyIHRlbXBsYXRlID0gSGFuZGxlYmFycy5jb21waWxlKHNvdXJjZSk7XG4gICAgICAgICAgICB2YXIgJGVsID0gJCh0ZW1wbGF0ZSh7IHRhZ3M6IHRhZ3MgfSkpO1xuXG4gICAgICAgICAgICAkZWwuaW5zZXJ0QWZ0ZXIoZGF0YS5jb250YWluZXIpO1xuXG4gICAgICAgICAgICB2YXIgc2tpbiA9IHJlcXVpcmUoJy4uLy4uLy4uL2xheW91dC9qcy9fc2tpbicpKCk7XG5cbiAgICAgICAgICAgICQoJ1tkYXRhLXNjcm9sbGFibGVdJywgJGVsKS5uaWNlU2Nyb2xsKHtcbiAgICAgICAgICAgICAgICBjdXJzb3Jib3JkZXI6IDAsXG4gICAgICAgICAgICAgICAgY3Vyc29yY29sb3I6IGNvbmZpZy5za2luc1sgc2tpbiBdWyAncHJpbWFyeS1jb2xvcicgXSxcbiAgICAgICAgICAgICAgICBob3JpenJhaWxlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBmaWx0ZXIoZGF0YSk7XG4gICAgICAgICAgICB9LCAxMDApO1xuXG4gICAgICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJyNyYWRpb3MgOmNoZWNrYm94JywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBmaWx0ZXIoZGF0YSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICB9KTtcblxufSkoalF1ZXJ5KTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblxuICAgIHZhciBjZW50ZXJXaW5kb3cgPSBmdW5jdGlvbiAoY29udGFpbmVyLCBtYXAsIGRhdGEpIHtcblxuICAgICAgICBpZiAoZGF0YS5sYXQgJiYgZGF0YS5sbmcpIHtcblxuICAgICAgICAgICAgY29udGFpbmVyLmdtYXAoJ29wdGlvbicsICdjZW50ZXInLCBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGRhdGEubGF0LCBkYXRhLmxuZykpO1xuXG4gICAgICAgICAgICBtYXAucGFuQnkoMCwgLTE3MCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICB2YXIgY2VudGVyTWFwID0gZnVuY3Rpb24gKGNvbnRhaW5lciwgZGF0YSkge1xuXG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEubGVuZ3RoID09PSAyKSB7XG5cbiAgICAgICAgICAgIGNvbnRhaW5lci5nbWFwKCdvcHRpb24nLCAnY2VudGVyJywgbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhkYXRhWyAwIF0sIGRhdGFbIDEgXSkpO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgdmFyIHJlc2l6ZSA9IGZ1bmN0aW9uIChjb250YWluZXIsIG1hcCwgd2luZG93RGF0YSwgbWFwRGF0YSkge1xuXG4gICAgICAgIGlmICh0eXBlb2YgZ29vZ2xlID09ICd1bmRlZmluZWQnKSByZXR1cm47XG5cbiAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQudHJpZ2dlcihtYXAsICdyZXNpemUnKTtcblxuICAgICAgICBpZiAoISBjZW50ZXJNYXAoY29udGFpbmVyLCBtYXBEYXRhKSkgY2VudGVyV2luZG93KGNvbnRhaW5lciwgbWFwLCB3aW5kb3dEYXRhKTtcblxuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjZW50ZXJXaW5kb3c6IGNlbnRlcldpbmRvdyxcbiAgICAgICAgY2VudGVyTWFwOiBjZW50ZXJNYXAsXG4gICAgICAgIHJlc2l6ZTogcmVzaXplXG4gICAgfTtcblxufTsiLCJmdW5jdGlvbiBsb2FkU2NyaXB0KCkge1xuICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgIHNjcmlwdC5zcmMgPSAnaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzP3Y9My5leHAmJyArXG4gICAgJ2NhbGxiYWNrPWluaXRHb29nbGVNYXBzJztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG59XG5cbndpbmRvdy5vbmxvYWQgPSBsb2FkU2NyaXB0O1xuXG5mdW5jdGlvbiBpbml0U2NyaXB0cygpIHtcbiAgICB2YXIgJHNjcmlwdHMgPSBbXG4gICAgICAgIFwianMvdmVuZG9yL21hcHMvZ29vZ2xlL2pxdWVyeS11aS1tYXAvdWkvanF1ZXJ5LnVpLm1hcC5qc1wiLFxuICAgICAgICBcImpzL3ZlbmRvci9tYXBzL2dvb2dsZS9qcXVlcnktdWktbWFwL3VpL2pxdWVyeS51aS5tYXAuZXh0ZW5zaW9ucy5qc1wiLFxuICAgICAgICBcImpzL3ZlbmRvci9tYXBzL2dvb2dsZS9qcXVlcnktdWktbWFwL3VpL2pxdWVyeS51aS5tYXAuc2VydmljZXMuanNcIixcbiAgICAgICAgXCJqcy92ZW5kb3IvbWFwcy9nb29nbGUvanF1ZXJ5LXVpLW1hcC91aS9qcXVlcnkudWkubWFwLm1pY3JvZGF0YS5qc1wiLFxuICAgICAgICBcImpzL3ZlbmRvci9tYXBzL2dvb2dsZS9qcXVlcnktdWktbWFwL3VpL2pxdWVyeS51aS5tYXAubWljcm9mb3JtYXQuanNcIixcbiAgICAgICAgXCJqcy92ZW5kb3IvbWFwcy9nb29nbGUvanF1ZXJ5LXVpLW1hcC91aS9qcXVlcnkudWkubWFwLm92ZXJsYXlzLmpzXCIsXG4gICAgICAgIFwianMvdmVuZG9yL21hcHMvZ29vZ2xlL2pxdWVyeS11aS1tYXAvdWkvanF1ZXJ5LnVpLm1hcC5yZGZhLmpzXCIsXG4gICAgICAgIFwianMvdmVuZG9yL21hcHMvZ29vZ2xlL2pxdWVyeS11aS1tYXAvYWRkb25zL2luZm9ib3hfcGFja2VkLmpzXCIsXG4gICAgICAgIFwianMvdmVuZG9yL21hcHMvZ29vZ2xlL2pxdWVyeS11aS1tYXAvYWRkb25zL21hcmtlcmNsdXN0ZXJlci5taW4uanNcIlxuICAgIF07XG5cbiAgICAkLmVhY2goJHNjcmlwdHMsIGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgICAgIGlmICgkKCdbc3JjPVwiJyArIHYgKyAnXCJdJykubGVuZ3RoKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgdmFyIHNjcmlwdE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuICAgICAgICBzY3JpcHROb2RlLnNyYyA9IHY7XG4gICAgICAgICQoJ2hlYWQnKS5wcmVwZW5kKCQoc2NyaXB0Tm9kZSkpO1xuICAgIH0pO1xuXG4gICAgJC5leHRlbmQoJC51aS5nbWFwLnByb3RvdHlwZSwge1xuICAgICAgICBwYWdpbmF0aW9uOiBmdW5jdGlvbiAocHJvcCwgbWFwRGF0YSkge1xuICAgICAgICAgICAgdmFyIHNvdXJjZSA9ICQoXCIjbWFwLXBhZ2luYXRpb25cIikuaHRtbCgpO1xuICAgICAgICAgICAgdmFyIHRlbXBsYXRlID0gSGFuZGxlYmFycy5jb21waWxlKHNvdXJjZSk7XG4gICAgICAgICAgICB2YXIgJGVsID0gJCh0ZW1wbGF0ZSgpKTtcblxuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzLCBpID0gMDtcbiAgICAgICAgICAgIHByb3AgPSBwcm9wIHx8ICd0aXRsZSc7XG4gICAgICAgICAgICBzZWxmLnNldCgncGFnaW5hdGlvbicsIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGEpIHtcbiAgICAgICAgICAgICAgICAgICAgaSA9IGkgKyBiO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbSA9IHNlbGYuZ2V0KCdtYXJrZXJzJylbIGkgXTtcbiAgICAgICAgICAgICAgICAgICAgbWFwRGF0YS5pdy5vcGVuKGksIG0uZ2V0KCdjb250ZW50JykpO1xuICAgICAgICAgICAgICAgICAgICAkZWwuZmluZCgnLmRpc3BsYXknKS50ZXh0KG1bIHByb3AgXSk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZ2V0KCdtYXAnKS5wYW5UbyhtLmdldFBvc2l0aW9uKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2VsZi5nZXQoJ3BhZ2luYXRpb24nKSh0cnVlLCAwKTtcbiAgICAgICAgICAgICRlbC5maW5kKCcuYmFjay1idG4nKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBzZWxmLmdldCgncGFnaW5hdGlvbicpKChpID4gMCksIC0gMSwgdGhpcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICRlbC5maW5kKCcuZndkLWJ0bicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHNlbGYuZ2V0KCdwYWdpbmF0aW9uJykoKGkgPCBzZWxmLmdldCgnbWFya2VycycpLmxlbmd0aCAtIDEpLCAxLCB0aGlzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2VsZi5hZGRDb250cm9sKCRlbCwgZ29vZ2xlLm1hcHMuQ29udHJvbFBvc2l0aW9uWyBtYXBEYXRhLm9wdGlvbnMucGFnaW5hdGlvblBvc2l0aW9uIF0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbnZhciBsaWJyYXJ5ID0gcmVxdWlyZSgnLi9fbGlicmFyeS5qcycpKCk7XG5cbi8vIEhvbGRzIGdvb2dsZSBtYXBzIHN0eWxlc1xudmFyIHN0eWxlcyA9IHtcbiAgICBcImxpZ2h0LWdyZXlcIjogcmVxdWlyZSgnLi9zdHlsZXMvX2xpZ2h0LWdyZXkuanMnKSxcbiAgICBcImxpZ2h0LW1vbm9jaHJvbWVcIjogcmVxdWlyZSgnLi9zdHlsZXMvX2xpZ2h0LW1vbm9jaHJvbWUuanMnKSxcbiAgICBcImNvb2wtZ3JleVwiOiByZXF1aXJlKCcuL3N0eWxlcy9fY29vbC1ncmV5LmpzJyksXG4gICAgXCJibHVlLWdyYXlcIjogcmVxdWlyZSgnLi9zdHlsZXMvX2JsdWUtZ3JheS5qcycpLFxuICAgIFwicGFwZXJcIjogcmVxdWlyZSgnLi9zdHlsZXMvX3BhcGVyLmpzJyksXG4gICAgXCJhcHBsZVwiOiByZXF1aXJlKCcuL3N0eWxlcy9fYXBwbGUuanMnKSxcbiAgICBcImxpZ2h0LWdyZWVuXCI6IHJlcXVpcmUoJy4vc3R5bGVzL19saWdodC1ncmVlbi5qcycpLFxuICAgIFwibGVtb24tdHJlZVwiOiByZXF1aXJlKCcuL3N0eWxlcy9fbGVtb24tdHJlZS5qcycpLFxuICAgIFwiY2xlYW4tY3V0XCI6IHJlcXVpcmUoJy4vc3R5bGVzL19jbGVhbi1jdXQuanMnKSxcbiAgICBcIm5hdHVyZVwiOiByZXF1aXJlKCcuL3N0eWxlcy9fbmF0dXJlLmpzJylcbn07XG5cbi8vIFByb2Nlc3MgdGhlIGluZm9XaW5kb3cgY29udGVudCB2aWEgSGFuZGxlYmFycyB0ZW1wbGF0ZXNcbnZhciBpbmZvV2luZG93Q29udGVudCA9IGZ1bmN0aW9uIChtYXJrZXIpIHtcbiAgICB2YXIgc291cmNlID0gJChcIiNcIiArIG1hcmtlci50ZW1wbGF0ZSkuaHRtbCgpO1xuICAgIHZhciB0ZW1wbGF0ZSA9IEhhbmRsZWJhcnMuY29tcGlsZShzb3VyY2UpO1xuICAgIHJldHVybiB0ZW1wbGF0ZShtYXJrZXIpO1xufTtcblxuLyoqXG4gKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAqL1xuJC5mbi50a0dvb2dsZU1hcCA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICB2YXIgY29udGFpbmVyID0gdGhpcztcblxuICAgIGlmICh0eXBlb2YgZ29vZ2xlID09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBJbmZvQm94ID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNvbnRhaW5lci50a0dvb2dsZU1hcCgpO1xuICAgICAgICB9LCAyMDApO1xuXG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgbWFwWm9vbVBvc2l0aW9uOiBjb250YWluZXIuZGF0YSgnem9vbVBvc2l0aW9uJykgfHwgXCJUT1BfTEVGVFwiLFxuICAgICAgICBtYXBab29tOiBjb250YWluZXIuZGF0YSgnem9vbScpIHx8IDE2LFxuICAgICAgICBtYXBTdHlsZTogY29udGFpbmVyLmRhdGEoJ3N0eWxlJykgfHwgXCJsaWdodC1ncmV5XCIsXG4gICAgICAgIG1hcFR5cGU6IGNvbnRhaW5lci5kYXRhKCd0eXBlJykgfHwgXCJST0FETUFQXCIsXG4gICAgICAgIGZpbGU6IGNvbnRhaW5lci5kYXRhKCdmaWxlJyksXG4gICAgICAgIGNlbnRlcjogY29udGFpbmVyLmRhdGEoJ2NlbnRlcicpID8gY29udGFpbmVyLmRhdGEoJ2NlbnRlcicpLnNwbGl0KFwiLFwiKSA6IGZhbHNlLFxuICAgICAgICBwYWdpbmF0aW9uOiBjb250YWluZXIuZGF0YSgncGFnaW5hdGlvbicpIHx8IGZhbHNlLFxuICAgICAgICBwYWdpbmF0aW9uUG9zaXRpb246IGNvbnRhaW5lci5kYXRhKCdwYWdpbmF0aW9uUG9zaXRpb24nKSB8fCAnVE9QX0xFRlQnLFxuICAgICAgICBkcmFnZ2FibGU6IGNvbnRhaW5lci5kYXRhKCdkcmFnZ2FibGUnKSAhPT0gZmFsc2VcbiAgICB9O1xuXG4gICAgdmFyIG1hcERhdGE7XG5cbiAgICAvLyBwcm92aWRlIGEgZGVmYXVsdCBvYmplY3QgZm9yIGRhdGEgY29sbGVjdGVkIGZyb20gdGhlIGN1cnJlbnRseSBvcGVuZWQgaW5mb1dpbmRvd1xuICAgIHZhciBpbmZvV2luZG93RGF0YSA9IHtcbiAgICAgICAgbGF0OiBmYWxzZSxcbiAgICAgICAgbG5nOiBmYWxzZVxuICAgIH07XG5cbiAgICB2YXIgaW5mb1dpbmRvd09wZW4gPSBmdW5jdGlvbiAoaSwgbWFya2VyKSB7XG5cbiAgICAgICAgdmFyIG1hcmtlckluc3QgPSBjb250YWluZXIuZ21hcCgnZ2V0JywgJ21hcmtlcnMnKVsgaSBdO1xuXG4gICAgICAgIGluZm9XaW5kb3cuc2V0Q29udGVudChpbmZvV2luZG93Q29udGVudChtYXJrZXIpKTtcbiAgICAgICAgaW5mb1dpbmRvdy5vcGVuKG1hcCwgbWFya2VySW5zdCk7XG4gICAgICAgIGluZm9XaW5kb3cuaXNPcGVuID0gaTtcblxuICAgICAgICBpbmZvV2luZG93RGF0YSA9IHtcbiAgICAgICAgICAgIGxhdDogbWFya2VyLmxhdGl0dWRlLFxuICAgICAgICAgICAgbG5nOiBtYXJrZXIubG9uZ2l0dWRlXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIHZhciBpbmZvV2luZG93Q2xvc2UgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICBpZiAodHlwZW9mIGkgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGluZm9XaW5kb3cuY2xvc2UoKTtcbiAgICAgICAgICAgIGluZm9XaW5kb3cuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGluZm9XaW5kb3cuaXNPcGVuICE9ICd1bmRlZmluZWQnICYmIGluZm9XaW5kb3cuaXNPcGVuID09PSBpKSB7XG4gICAgICAgICAgICBpbmZvV2luZG93LmNsb3NlKCk7XG4gICAgICAgICAgICBpbmZvV2luZG93LmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICAvKiBJbmZvQm94ICovXG4gICAgdmFyIGluZm9XaW5kb3cgPSBuZXcgSW5mb0JveCh7XG4gICAgICAgIG1heFdpZHRoOiAyNDAsXG4gICAgICAgIGFsaWduQm90dG9tOiB0cnVlXG4gICAgfSk7XG5cbiAgICB2YXIgYWRkTWFya2VyID0gZnVuY3Rpb24gKGksIG1hcmtlciwgb3B0aW9ucykge1xuICAgICAgICB2YXIgaWNvbkJhc2UgPSAnaW1hZ2VzL21hcmtlcnMvJztcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gdHlwZW9mIG1hcmtlci5sYXRMbmcgIT09ICd1bmRlZmluZWQnID8gbWFya2VyLmxhdExuZyA6IGZhbHNlO1xuICAgICAgICBpZiAoISBwb3NpdGlvbiAmJiB0eXBlb2YgbWFya2VyLmxhdGl0dWRlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbWFya2VyLmxvbmdpdHVkZSAhPT0gJ3VuZGVmaW5lZCcpIHBvc2l0aW9uID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhtYXJrZXIubGF0aXR1ZGUsIG1hcmtlci5sb25naXR1ZGUpO1xuICAgICAgICBpZiAoISBwb3NpdGlvbikgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHZhciBtYXJrZXJPcHRpb25zID0ge1xuICAgICAgICAgICAgXCJpZFwiOiBpLFxuICAgICAgICAgICAgXCJwb3NpdGlvblwiOiBwb3NpdGlvbixcbiAgICAgICAgICAgIFwiZHJhZ2dhYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcImljb25cIjogaWNvbkJhc2UgKyBtYXJrZXIuaWNvbiArIFwiLnBuZ1wiXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09ICdvYmplY3QnKSBtYXJrZXJPcHRpb25zID0gJC5leHRlbmQoe30sIG1hcmtlck9wdGlvbnMsIG9wdGlvbnMpO1xuXG4gICAgICAgIHZhciBvcGVuID0gdHlwZW9mIG1hcmtlci5vcGVuICE9PSAndW5kZWZpbmVkJyAmJiBtYXJrZXIub3BlbiA9PT0gdHJ1ZTtcblxuICAgICAgICBjb250YWluZXIuZ21hcCgnYWRkTWFya2VyJywgbWFya2VyT3B0aW9ucyk7XG5cbiAgICAgICAgdmFyIG1hcmtlckluc3QgPSBjb250YWluZXIuZ21hcCgnZ2V0JywgJ21hcmtlcnMnKVsgaSBdO1xuXG4gICAgICAgIG1hcmtlckluc3Quc2V0VGl0bGUobWFya2VyLnRpdGxlKTtcblxuICAgICAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXJrZXJJbnN0LCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoISBpbmZvV2luZG93Q2xvc2UoaSkpIHtcbiAgICAgICAgICAgICAgICBpbmZvV2luZG93T3BlbihpLCBtYXJrZXIpO1xuICAgICAgICAgICAgICAgIGxpYnJhcnkuY2VudGVyV2luZG93KGNvbnRhaW5lciwgbWFwLCBpbmZvV2luZG93RGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlckluc3QsICdkcmFnZW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGxhdCA9IG1hcmtlckluc3QuZ2V0UG9zaXRpb24oKS5sYXQoKTtcbiAgICAgICAgICAgIHZhciBsbmcgPSBtYXJrZXJJbnN0LmdldFBvc2l0aW9uKCkubG5nKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnXCJsYXRpdHVkZVwiOiAnICsgbGF0ICsgJywgXCJsb25naXR1ZGVcIjogJyArIGxuZyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBtYXJrZXJEYXRhID0gJC5leHRlbmQoe30sIG1hcmtlciwge1xuICAgICAgICAgICAgXCJpZFwiOiBpLFxuICAgICAgICAgICAgXCJsYXRMbmdcIjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhtYXJrZXIubGF0aXR1ZGUsIG1hcmtlci5sb25naXR1ZGUpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1hcmtlckluc3Quc2V0KCdjb250ZW50JywgbWFya2VyRGF0YSk7XG5cbiAgICAgICAgaWYgKG9wZW4pIGluZm9XaW5kb3dPcGVuKGksIG1hcmtlcik7XG5cbiAgICAgICAgcmV0dXJuIG1hcmtlckluc3Q7XG4gICAgfTtcblxuICAgIGNvbnRhaW5lci5nbWFwKFxuICAgICAgICB7XG4gICAgICAgICAgICAnem9vbUNvbnRyb2wnOiB0cnVlLFxuICAgICAgICAgICAgJ3pvb21Db250cm9sT3B0aW9ucyc6IHtcbiAgICAgICAgICAgICAgICAnc3R5bGUnOiBnb29nbGUubWFwcy5ab29tQ29udHJvbFN0eWxlLlNNQUxMLFxuICAgICAgICAgICAgICAgICdwb3NpdGlvbic6IGdvb2dsZS5tYXBzLkNvbnRyb2xQb3NpdGlvblsgb3B0aW9ucy5tYXBab29tUG9zaXRpb24gXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdwYW5Db250cm9sJzogZmFsc2UsXG4gICAgICAgICAgICAnc3RyZWV0Vmlld0NvbnRyb2wnOiBmYWxzZSxcbiAgICAgICAgICAgICdtYXBUeXBlQ29udHJvbCc6IGZhbHNlLFxuICAgICAgICAgICAgJ292ZXJ2aWV3TWFwQ29udHJvbCc6IGZhbHNlLFxuICAgICAgICAgICAgJ3Njcm9sbHdoZWVsJzogZmFsc2UsXG4gICAgICAgICAgICAnZHJhZ2dhYmxlJzogb3B0aW9ucy5kcmFnZ2FibGUsXG4gICAgICAgICAgICAnbWFwVHlwZUlkJzogZ29vZ2xlLm1hcHMuTWFwVHlwZUlkWyBvcHRpb25zLm1hcFR5cGUgXSxcbiAgICAgICAgICAgICd6b29tJzogb3B0aW9ucy5tYXBab29tLFxuICAgICAgICAgICAgJ3N0eWxlcyc6IHN0eWxlc1sgb3B0aW9ucy5tYXBTdHlsZSBdXG4gICAgICAgIH0pXG4gICAgICAgIC5iaW5kKCdpbml0JywgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBtYXBEYXRhID0ge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgICAgICAgICAgIG1hcDogbWFwLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgYWRkTWFya2VyOiBhZGRNYXJrZXIsXG4gICAgICAgICAgICAgICAgbGlicmFyeTogbGlicmFyeSxcbiAgICAgICAgICAgICAgICBpdzoge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBpbmZvV2luZG93RGF0YSxcbiAgICAgICAgICAgICAgICAgICAgd2luZG93OiBpbmZvV2luZG93LFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBpbmZvV2luZG93Q29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgb3BlbjogaW5mb1dpbmRvd09wZW4sXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlOiBpbmZvV2luZG93Q2xvc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5maWxlKSB7XG5cbiAgICAgICAgICAgICAgICAkLmdldEpTT04ob3B0aW9ucy5maWxlLCBmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgICAgICAgICAgICAgICAgICQuZWFjaChkYXRhLm1hcmtlcnMsIGZ1bmN0aW9uIChpLCBtYXJrZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvID0gdHlwZW9mIG1hcmtlci5vcHRpb25zICE9PSAndW5kZWZpbmVkJyA/IG1hcmtlci5vcHRpb25zIDoge307XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRNYXJrZXIoaSwgbWFya2VyLCBvKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXJPbmNlKG1hcCwgJ2lkbGUnLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxpYnJhcnkucmVzaXplKGNvbnRhaW5lciwgbWFwLCBpbmZvV2luZG93RGF0YSwgb3B0aW9ucy5jZW50ZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5wYWdpbmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmdtYXAoJ3BhZ2luYXRpb24nLCAndGl0bGUnLCBtYXBEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGlicmFyeS5jZW50ZXJNYXAoY29udGFpbmVyLCBvcHRpb25zLmNlbnRlcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyT25jZShtYXAsICdpZGxlJywgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgJChkb2N1bWVudCkudHJpZ2dlcignbWFwLmluaXQnLCBtYXBEYXRhKTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKGluZm9XaW5kb3csICdkb21yZWFkeScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgaXcgPSAkKCcuaW5mb0JveCcpO1xuICAgICAgICAgICAgICAgIGluZm9XaW5kb3cuc2V0T3B0aW9ucyh7XG4gICAgICAgICAgICAgICAgICAgIHBpeGVsT2Zmc2V0OiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSgtIE1hdGguYWJzKGl3LndpZHRoKCkgLyAyKSwgLSA0NSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgICAgICAgICAgJCgnLmNvdmVyJywgaXcpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykudGtDb3ZlcigpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICB2YXIgbWFwID0gY29udGFpbmVyLmdtYXAoJ2dldCcsICdtYXAnKTtcblxuICAgIHZhciB0O1xuICAgICQod2luZG93KS5vbignZGVib3VuY2VkcmVzaXplJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodCk7XG4gICAgICAgIHQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxpYnJhcnkucmVzaXplKGNvbnRhaW5lciwgbWFwLCBpbmZvV2luZG93RGF0YSwgb3B0aW9ucy5jZW50ZXIpO1xuICAgICAgICB9LCAxMDApO1xuICAgIH0pO1xuXG4gICAgLy8gaGFuZGxlIG1hcHMgaW4gY29sbGFwc2libGVzXG4gICAgJCgnLmNvbGxhcHNlJykub24oJ3Nob3duLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oKXtcbiAgICAgICAgaWYgKCQoY29udGFpbmVyLCB0aGlzKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxpYnJhcnkucmVzaXplKGNvbnRhaW5lciwgbWFwLCBpbmZvV2luZG93RGF0YSwgb3B0aW9ucy5jZW50ZXIpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICAgIGluaXRTY3JpcHRzKCk7XG5cbiAgICAvKlxuICAgICAqIENsdXN0ZXJpbmdcbiAgICAgKi9cbiAgICBpZiAoJCgnI2dvb2dsZS1tYXAtY2x1c3RlcmluZycpLmxlbmd0aCkge1xuICAgICAgICAvLyBXZSBuZWVkIHRvIGJpbmQgdGhlIG1hcCB3aXRoIHRoZSBcImluaXRcIiBldmVudCBvdGhlcndpc2UgYm91bmRzIHdpbGwgYmUgbnVsbFxuICAgICAgICAkKCcjZ29vZ2xlLW1hcC1jbHVzdGVyaW5nJykuZ21hcCh7J3pvb20nOiAyLCAnZGlzYWJsZURlZmF1bHRVSSc6IHRydWV9KS5iaW5kKCdpbml0JywgZnVuY3Rpb24gKGV2dCwgbWFwKSB7XG4gICAgICAgICAgICB2YXIgYm91bmRzID0gbWFwLmdldEJvdW5kcygpO1xuICAgICAgICAgICAgdmFyIHNvdXRoV2VzdCA9IGJvdW5kcy5nZXRTb3V0aFdlc3QoKTtcbiAgICAgICAgICAgIHZhciBub3J0aEVhc3QgPSBib3VuZHMuZ2V0Tm9ydGhFYXN0KCk7XG4gICAgICAgICAgICB2YXIgbG5nU3BhbiA9IG5vcnRoRWFzdC5sbmcoKSAtIHNvdXRoV2VzdC5sbmcoKTtcbiAgICAgICAgICAgIHZhciBsYXRTcGFuID0gbm9ydGhFYXN0LmxhdCgpIC0gc291dGhXZXN0LmxhdCgpO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBvcGVuSW5mb1dpbmRvdygpIHtcbiAgICAgICAgICAgICAgICAkKCcjZ29vZ2xlLW1hcC1jbHVzdGVyaW5nJykuZ21hcCgnb3BlbkluZm9XaW5kb3cnLCB7Y29udGVudDogJ0hlbGxvIHdvcmxkISd9LCB0aGlzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMDAwOyBpICsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxhdCA9IHNvdXRoV2VzdC5sYXQoKSArIGxhdFNwYW4gKiBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgICAgIHZhciBsbmcgPSBzb3V0aFdlc3QubG5nKCkgKyBsbmdTcGFuICogTWF0aC5yYW5kb20oKTtcbiAgICAgICAgICAgICAgICAkKCcjZ29vZ2xlLW1hcC1jbHVzdGVyaW5nJykuZ21hcCgnYWRkTWFya2VyJywge1xuICAgICAgICAgICAgICAgICAgICAncG9zaXRpb24nOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGxhdCwgbG5nKVxuICAgICAgICAgICAgICAgIH0pLmNsaWNrKG9wZW5JbmZvV2luZG93KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJCgnI2dvb2dsZS1tYXAtY2x1c3RlcmluZycpLmdtYXAoJ3NldCcsICdNYXJrZXJDbHVzdGVyZXInLCBuZXcgTWFya2VyQ2x1c3RlcmVyKG1hcCwgJCh0aGlzKS5nbWFwKCdnZXQnLCAnbWFya2VycycpKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufTtcblxuKGZ1bmN0aW9uKCQpe1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgJChkb2N1bWVudCkub24oJ21hcC5pbml0JywgZnVuY3Rpb24gKGV2ZW50LCBkYXRhKSB7XG5cbiAgICAgICAgdmFyIHN0eWxlVHBsID0gJCgnI21hcC1zdHlsZS1zd2l0Y2gnKSxcbiAgICAgICAgICAgIHRvZ2dsZVN0eWxlV3JhcHBlciA9ICQoJ1tkYXRhLXRvZ2dsZT1cIm1hcC1zdHlsZS1zd2l0Y2hcIl0nKTtcblxuICAgICAgICBpZiAoc3R5bGVUcGwubGVuZ3RoICYmIHRvZ2dsZVN0eWxlV3JhcHBlci5sZW5ndGgpIHtcblxuICAgICAgICAgICAgdmFyIHRhcmdldCA9ICQodG9nZ2xlU3R5bGVXcmFwcGVyLmRhdGEoJ3RhcmdldCcpKTtcblxuICAgICAgICAgICAgaWYgKCEgdGFyZ2V0KSByZXR1cm47XG5cbiAgICAgICAgICAgIGlmIChkYXRhLmNvbnRhaW5lci5pcyh0YXJnZXQpKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgcyA9IHN0eWxlVHBsLmh0bWwoKTtcbiAgICAgICAgICAgICAgICB2YXIgdCA9IEhhbmRsZWJhcnMuY29tcGlsZShzKTtcblxuICAgICAgICAgICAgICAgIHRvZ2dsZVN0eWxlV3JhcHBlci5odG1sKHQoe1xuICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHN0eWxlc1xuICAgICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgICAgICQoJ3NlbGVjdCcsIHRvZ2dsZVN0eWxlV3JhcHBlcikudmFsKGRhdGEub3B0aW9ucy5tYXBTdHlsZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mICQuZm4uc2VsZWN0cGlja2VyICE9ICd1bmRlZmluZWQnKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgJCgnLnNlbGVjdHBpY2tlcicsIHRvZ2dsZVN0eWxlV3JhcHBlcikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnNlbGVjdHBpY2tlcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICQodGhpcykuZGF0YSgnd2lkdGgnKSB8fCAnMTAwJSdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBza2luID0gcmVxdWlyZSgnLi4vX3NraW4nKSgpO1xuXG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtc2Nyb2xsYWJsZV0nLCB0b2dnbGVTdHlsZVdyYXBwZXIpLm5pY2VTY3JvbGwoe1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3Jib3JkZXI6IDAsXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcmNvbG9yOiBjb25maWcuc2tpbnNbIHNraW4gXVsgJ3ByaW1hcnktY29sb3InIF0sXG4gICAgICAgICAgICAgICAgICAgIGhvcml6cmFpbGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAkKCdzZWxlY3QnLCB0b2dnbGVTdHlsZVdyYXBwZXIpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdHlsZSA9IHR5cGVvZiBzdHlsZXNbICQodGhpcykudmFsKCkgXSA/IHN0eWxlc1sgJCh0aGlzKS52YWwoKSBdIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmICghIHN0eWxlKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmdtYXAoJ29wdGlvbicsICdzdHlsZXMnLCBzdHlsZSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9KTtcblxuICAgICQoJ1tkYXRhLXRvZ2dsZT1cImdvb2dsZS1tYXBzXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgJCh0aGlzKS50a0dvb2dsZU1hcCgpO1xuXG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7XG5cbnJlcXVpcmUoJy4vX2VkaXQnKTtcbnJlcXVpcmUoJy4vX2ZpbHRlcnMnKTsiLCJtb2R1bGUuZXhwb3J0cyA9IFsge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJsYW5kc2NhcGUubWFuX21hZGVcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJjb2xvclwiOiBcIiNmN2YxZGZcIn0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJsYW5kc2NhcGUubmF0dXJhbFwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImNvbG9yXCI6IFwiI2QwZTNiNFwifSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcImxhbmRzY2FwZS5uYXR1cmFsLnRlcnJhaW5cIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJ9IF1cbn0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVsc1wiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcInZpc2liaWxpdHlcIjogXCJvZmZcIn0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2kuYnVzaW5lc3NcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1widmlzaWJpbGl0eVwiOiBcIm9mZlwifSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaS5tZWRpY2FsXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiY29sb3JcIjogXCIjZmJkM2RhXCJ9IF1cbn0sIHtcImZlYXR1cmVUeXBlXCI6IFwicG9pLnBhcmtcIiwgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsIFwic3R5bGVyc1wiOiBbIHtcImNvbG9yXCI6IFwiI2JkZTZhYlwifSBdfSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LnN0cm9rZVwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcInZpc2liaWxpdHlcIjogXCJvZmZcIn0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVsc1wiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcInZpc2liaWxpdHlcIjogXCJvZmZcIn0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmhpZ2h3YXlcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuZmlsbFwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImNvbG9yXCI6IFwiI2ZmZTE1ZlwifSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5zdHJva2VcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJjb2xvclwiOiBcIiNlZmQxNTFcIn0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmFydGVyaWFsXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LmZpbGxcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJjb2xvclwiOiBcIiNmZmZmZmZcIn0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmxvY2FsXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LmZpbGxcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJjb2xvclwiOiBcImJsYWNrXCJ9IF1cbn0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwidHJhbnNpdC5zdGF0aW9uLmFpcnBvcnRcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuZmlsbFwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImNvbG9yXCI6IFwiI2NmYjJkYlwifSBdXG59LCB7XCJmZWF0dXJlVHlwZVwiOiBcIndhdGVyXCIsIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLCBcInN0eWxlcnNcIjogWyB7XCJjb2xvclwiOiBcIiNhMmRhZjJcIn0gXX0gXTsiLCJtb2R1bGUuZXhwb3J0cyA9IFsge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcInZpc2liaWxpdHlcIjogXCJvblwifSwge1wiY29sb3JcIjogXCIjYjVjYmU0XCJ9IF1cbn0sIHtcImZlYXR1cmVUeXBlXCI6IFwibGFuZHNjYXBlXCIsIFwic3R5bGVyc1wiOiBbIHtcImNvbG9yXCI6IFwiI2VmZWZlZlwifSBdfSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmhpZ2h3YXlcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJjb2xvclwiOiBcIiM4M2E1YjBcIn0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmFydGVyaWFsXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiY29sb3JcIjogXCIjYmRjZGQzXCJ9IF1cbn0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5sb2NhbFwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImNvbG9yXCI6IFwiI2ZmZmZmZlwifSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaS5wYXJrXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiY29sb3JcIjogXCIjZTNlZWQzXCJ9IF1cbn0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmVcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJ2aXNpYmlsaXR5XCI6IFwib25cIn0sIHtcImxpZ2h0bmVzc1wiOiAzM30gXVxufSwge1wiZmVhdHVyZVR5cGVcIjogXCJyb2FkXCJ9LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaS5wYXJrXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVsc1wiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcInZpc2liaWxpdHlcIjogXCJvblwifSwge1wibGlnaHRuZXNzXCI6IDIwfSBdXG59LCB7fSwge1wiZmVhdHVyZVR5cGVcIjogXCJyb2FkXCIsIFwic3R5bGVyc1wiOiBbIHtcImxpZ2h0bmVzc1wiOiAyMH0gXX0gXTsiLCJtb2R1bGUuZXhwb3J0cyA9IFsge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wibGlnaHRuZXNzXCI6IDEwMH0sIHtcInZpc2liaWxpdHlcIjogXCJzaW1wbGlmaWVkXCJ9IF1cbn0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwid2F0ZXJcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJ2aXNpYmlsaXR5XCI6IFwib25cIn0sIHtcImNvbG9yXCI6IFwiI0M2RTJGRlwifSBdXG59LCB7XCJmZWF0dXJlVHlwZVwiOiBcInBvaVwiLCBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuZmlsbFwiLCBcInN0eWxlcnNcIjogWyB7XCJjb2xvclwiOiBcIiNDNUUzQkZcIn0gXX0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5maWxsXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiY29sb3JcIjogXCIjRDFEMUI4XCJ9IF1cbn0gXTsiLCJtb2R1bGUuZXhwb3J0cyA9IFsge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJsYW5kc2NhcGVcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1widmlzaWJpbGl0eVwiOiBcIm9mZlwifSBdXG59LCB7XCJmZWF0dXJlVHlwZVwiOiBcInRyYW5zaXRcIiwgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVsc1wiLCBcInN0eWxlcnNcIjogWyB7XCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJ9IF19LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaVwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHNcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJ9IF1cbn0sIHtcImZlYXR1cmVUeXBlXCI6IFwid2F0ZXJcIiwgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVsc1wiLCBcInN0eWxlcnNcIjogWyB7XCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJ9IF19LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWRcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLmljb25cIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJ9IF1cbn0sIHtcInN0eWxlcnNcIjogWyB7XCJodWVcIjogXCIjMDBhYWZmXCJ9LCB7XCJzYXR1cmF0aW9uXCI6IC0gMTAwfSwge1wiZ2FtbWFcIjogMi4xNX0sIHtcImxpZ2h0bmVzc1wiOiAxMn0gXX0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1widmlzaWJpbGl0eVwiOiBcIm9uXCJ9LCB7XCJsaWdodG5lc3NcIjogMjR9IF1cbn0sIHtcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLCBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIiwgXCJzdHlsZXJzXCI6IFsge1wibGlnaHRuZXNzXCI6IDU3fSBdfSBdOyIsIm1vZHVsZS5leHBvcnRzID0gWyB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHNcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJodWVcIjogXCIjZmZmZmZmXCJ9LCB7XCJzYXR1cmF0aW9uXCI6IC0gMTAwfSwge1wibGlnaHRuZXNzXCI6IDEwMH0sIHtcInZpc2liaWxpdHlcIjogXCJvZmZcIn0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJsYW5kc2NhcGUubmF0dXJhbFwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJodWVcIjogXCIjZmZmZmZmXCJ9LCB7XCJzYXR1cmF0aW9uXCI6IC0gMTAwfSwge1wibGlnaHRuZXNzXCI6IDEwMH0sIHtcInZpc2liaWxpdHlcIjogXCJvblwifSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWRcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiaHVlXCI6IFwiI2ZmZTk0ZlwifSwge1wic2F0dXJhdGlvblwiOiAxMDB9LCB7XCJsaWdodG5lc3NcIjogNH0sIHtcInZpc2liaWxpdHlcIjogXCJvblwifSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImh1ZVwiOiBcIiNmZmU5NGZcIn0sIHtcInNhdHVyYXRpb25cIjogMTAwfSwge1wibGlnaHRuZXNzXCI6IDR9LCB7XCJ2aXNpYmlsaXR5XCI6IFwib25cIn0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImh1ZVwiOiBcIiMzMzMzMzNcIn0sIHtcInNhdHVyYXRpb25cIjogLSAxMDB9LCB7XCJsaWdodG5lc3NcIjogLSA3NH0sIHtcInZpc2liaWxpdHlcIjogXCJvZmZcIn0gXVxufSBdOyIsIm1vZHVsZS5leHBvcnRzID0gWyB7XCJzdHlsZXJzXCI6IFsge1wiaHVlXCI6IFwiI2JhZjRjNFwifSwge1wic2F0dXJhdGlvblwiOiAxMH0gXX0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwid2F0ZXJcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJjb2xvclwiOiBcIiNlZmZlZmRcIn0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhbGxcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1widmlzaWJpbGl0eVwiOiBcIm9mZlwifSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVsc1wiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcInZpc2liaWxpdHlcIjogXCJvblwifSBdXG59LCB7XCJmZWF0dXJlVHlwZVwiOiBcInJvYWRcIiwgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLCBcInN0eWxlcnNcIjogWyB7XCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJ9IF19LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInRyYW5zaXRcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1widmlzaWJpbGl0eVwiOiBcIm9mZlwifSBdXG59IF07IiwibW9kdWxlLmV4cG9ydHMgPSBbIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwid2F0ZXJcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJjb2xvclwiOiBcIiNlOWU5ZTlcIn0sIHtcImxpZ2h0bmVzc1wiOiAxN30gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJsYW5kc2NhcGVcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJjb2xvclwiOiBcIiNmNWY1ZjVcIn0sIHtcImxpZ2h0bmVzc1wiOiAyMH0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmhpZ2h3YXlcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuZmlsbFwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImNvbG9yXCI6IFwiI2ZmZmZmZlwifSwge1wibGlnaHRuZXNzXCI6IDE3fSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5zdHJva2VcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJjb2xvclwiOiBcIiNmZmZmZmZcIn0sIHtcImxpZ2h0bmVzc1wiOiAyOX0sIHtcIndlaWdodFwiOiAwLjJ9IF1cbn0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5hcnRlcmlhbFwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImNvbG9yXCI6IFwiI2ZmZmZmZlwifSwge1wibGlnaHRuZXNzXCI6IDE4fSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQubG9jYWxcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJjb2xvclwiOiBcIiNmZmZmZmZcIn0sIHtcImxpZ2h0bmVzc1wiOiAxNn0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2lcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJjb2xvclwiOiBcIiNmNWY1ZjVcIn0sIHtcImxpZ2h0bmVzc1wiOiAyMX0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2kucGFya1wiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImNvbG9yXCI6IFwiI2RlZGVkZVwifSwge1wibGlnaHRuZXNzXCI6IDIxfSBdXG59LCB7XG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LnN0cm9rZVwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcInZpc2liaWxpdHlcIjogXCJvblwifSwge1wiY29sb3JcIjogXCIjZmZmZmZmXCJ9LCB7XCJsaWdodG5lc3NcIjogMTZ9IF1cbn0sIHtcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcInNhdHVyYXRpb25cIjogMzZ9LCB7XCJjb2xvclwiOiBcIiMzMzMzMzNcIn0sIHtcImxpZ2h0bmVzc1wiOiA0MH0gXVxufSwge1wiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMuaWNvblwiLCBcInN0eWxlcnNcIjogWyB7XCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJ9IF19LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInRyYW5zaXRcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJjb2xvclwiOiBcIiNmMmYyZjJcIn0sIHtcImxpZ2h0bmVzc1wiOiAxOX0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZVwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5maWxsXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiY29sb3JcIjogXCIjZmVmZWZlXCJ9LCB7XCJsaWdodG5lc3NcIjogMjB9IF1cbn0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmVcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuc3Ryb2tlXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiY29sb3JcIjogXCIjZmVmZWZlXCJ9LCB7XCJsaWdodG5lc3NcIjogMTd9LCB7XCJ3ZWlnaHRcIjogMS4yfSBdXG59IF07IiwibW9kdWxlLmV4cG9ydHMgPSBbIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmUubG9jYWxpdHlcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiaHVlXCI6IFwiIzJjMmUzM1wifSwge1wic2F0dXJhdGlvblwiOiA3fSwge1wibGlnaHRuZXNzXCI6IDE5fSwge1widmlzaWJpbGl0eVwiOiBcIm9uXCJ9IF1cbn0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwibGFuZHNjYXBlXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImh1ZVwiOiBcIiNmZmZmZmZcIn0sIHtcInNhdHVyYXRpb25cIjogLSAxMDB9LCB7XCJsaWdodG5lc3NcIjogMTAwfSwge1widmlzaWJpbGl0eVwiOiBcInNpbXBsaWZpZWRcIn0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2lcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiaHVlXCI6IFwiI2ZmZmZmZlwifSwge1wic2F0dXJhdGlvblwiOiAtIDEwMH0sIHtcImxpZ2h0bmVzc1wiOiAxMDB9LCB7XCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJ9IF1cbn0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImh1ZVwiOiBcIiNiYmMwYzRcIn0sIHtcInNhdHVyYXRpb25cIjogLSA5M30sIHtcImxpZ2h0bmVzc1wiOiAzMX0sIHtcInZpc2liaWxpdHlcIjogXCJzaW1wbGlmaWVkXCJ9IF1cbn0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHNcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJodWVcIjogXCIjYmJjMGM0XCJ9LCB7XCJzYXR1cmF0aW9uXCI6IC0gOTN9LCB7XCJsaWdodG5lc3NcIjogMzF9LCB7XCJ2aXNpYmlsaXR5XCI6IFwib25cIn0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmFydGVyaWFsXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVsc1wiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImh1ZVwiOiBcIiNiYmMwYzRcIn0sIHtcInNhdHVyYXRpb25cIjogLSA5M30sIHtcImxpZ2h0bmVzc1wiOiAtIDJ9LCB7XCJ2aXNpYmlsaXR5XCI6IFwic2ltcGxpZmllZFwifSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQubG9jYWxcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJodWVcIjogXCIjZTllYmVkXCJ9LCB7XCJzYXR1cmF0aW9uXCI6IC0gOTB9LCB7XCJsaWdodG5lc3NcIjogLSA4fSwge1widmlzaWJpbGl0eVwiOiBcInNpbXBsaWZpZWRcIn0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ0cmFuc2l0XCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImh1ZVwiOiBcIiNlOWViZWRcIn0sIHtcInNhdHVyYXRpb25cIjogMTB9LCB7XCJsaWdodG5lc3NcIjogNjl9LCB7XCJ2aXNpYmlsaXR5XCI6IFwib25cIn0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJodWVcIjogXCIjZTllYmVkXCJ9LCB7XCJzYXR1cmF0aW9uXCI6IC0gNzh9LCB7XCJsaWdodG5lc3NcIjogNjd9LCB7XCJ2aXNpYmlsaXR5XCI6IFwic2ltcGxpZmllZFwifSBdXG59IF07IiwibW9kdWxlLmV4cG9ydHMgPSBbIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwibGFuZHNjYXBlXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiaHVlXCI6IFwiI0ZGQTgwMFwifSwge1wic2F0dXJhdGlvblwiOiAwfSwge1wibGlnaHRuZXNzXCI6IDB9LCB7XCJnYW1tYVwiOiAxfSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImh1ZVwiOiBcIiM1M0ZGMDBcIn0sIHtcInNhdHVyYXRpb25cIjogLSA3M30sIHtcImxpZ2h0bmVzc1wiOiA0MH0sIHtcImdhbW1hXCI6IDF9IF1cbn0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5hcnRlcmlhbFwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImh1ZVwiOiBcIiNGQkZGMDBcIn0sIHtcInNhdHVyYXRpb25cIjogMH0sIHtcImxpZ2h0bmVzc1wiOiAwfSwge1wiZ2FtbWFcIjogMX0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmxvY2FsXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiaHVlXCI6IFwiIzAwRkZGRFwifSwge1wic2F0dXJhdGlvblwiOiAwfSwge1wibGlnaHRuZXNzXCI6IDMwfSwge1wiZ2FtbWFcIjogMX0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImh1ZVwiOiBcIiMwMEJGRkZcIn0sIHtcInNhdHVyYXRpb25cIjogNn0sIHtcImxpZ2h0bmVzc1wiOiA4fSwge1wiZ2FtbWFcIjogMX0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2lcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJodWVcIjogXCIjNjc5NzE0XCJ9LCB7XCJzYXR1cmF0aW9uXCI6IDMzLjR9LCB7XCJsaWdodG5lc3NcIjogLSAyNS40fSwge1wiZ2FtbWFcIjogMX0gXVxufSBdOyIsIm1vZHVsZS5leHBvcnRzID0gWyB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcInZpc2liaWxpdHlcIjogXCJvZmZcIn0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJsYW5kc2NhcGVcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1widmlzaWJpbGl0eVwiOiBcInNpbXBsaWZpZWRcIn0sIHtcImh1ZVwiOiBcIiMwMDY2ZmZcIn0sIHtcInNhdHVyYXRpb25cIjogNzR9LCB7XCJsaWdodG5lc3NcIjogMTAwfSBdXG59LCB7XCJmZWF0dXJlVHlwZVwiOiBcInBvaVwiLCBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsIFwic3R5bGVyc1wiOiBbIHtcInZpc2liaWxpdHlcIjogXCJzaW1wbGlmaWVkXCJ9IF19LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWRcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1widmlzaWJpbGl0eVwiOiBcInNpbXBsaWZpZWRcIn0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmhpZ2h3YXlcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1widmlzaWJpbGl0eVwiOiBcIm9mZlwifSwge1wid2VpZ2h0XCI6IDAuNn0sIHtcInNhdHVyYXRpb25cIjogLSA4NX0sIHtcImxpZ2h0bmVzc1wiOiA2MX0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmhpZ2h3YXlcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJ2aXNpYmlsaXR5XCI6IFwib25cIn0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmFydGVyaWFsXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcInZpc2liaWxpdHlcIjogXCJvZmZcIn0gXVxufSwge1wiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmxvY2FsXCIsIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIiwgXCJzdHlsZXJzXCI6IFsge1widmlzaWJpbGl0eVwiOiBcIm9uXCJ9IF19LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInRyYW5zaXRcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1widmlzaWJpbGl0eVwiOiBcInNpbXBsaWZpZWRcIn0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLFxuICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJ2aXNpYmlsaXR5XCI6IFwic2ltcGxpZmllZFwifSwge1wiY29sb3JcIjogXCIjNWY5NGZmXCJ9LCB7XCJsaWdodG5lc3NcIjogMjZ9LCB7XCJnYW1tYVwiOiA1Ljg2fSBdXG59IF07IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAkLmZuLnRrRm9ybUNvbnRyb2xNYXRlcmlhbCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHRoaXNcbiAgICAgICAgICAgIC5ibHVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52YWwoKSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRDbGFzcygndXNlZCcpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVDbGFzcygndXNlZCcpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZnRlcignPHNwYW4gY2xhc3M9XCJtYS1mb3JtLWhpZ2hsaWdodFwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cIm1hLWZvcm0tYmFyXCI+PC9zcGFuPicpO1xuICAgIH07XG5cbiAgICAkKCcuZm9ybS1jb250cm9sLW1hdGVyaWFsIC5mb3JtLWNvbnRyb2wnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS50a0Zvcm1Db250cm9sTWF0ZXJpYWwoKTtcbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdzaG93LmJzLmRyb3Bkb3duJywgZnVuY3Rpb24gKGUpIHtcblxuICAgICAgICBpZiAoTW9kZXJuaXpyLnRvdWNoICYmICQod2luZG93KS53aWR0aCgpIDwgNzY4KSByZXR1cm4gdHJ1ZTtcblxuICAgICAgICB2YXIgZGQgPSAkKGUucmVsYXRlZFRhcmdldCkubmV4dCgnLmRyb3Bkb3duLW1lbnUnKTtcbiAgICAgICAgdmFyIGRkSGVpZ2h0ID0gZGQub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgZGQuY3NzKHtcbiAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICAgICAgfSk7XG4gICAgICAgIGRkLnZlbG9jaXR5KHtvcGFjaXR5OiAxfSwge2R1cmF0aW9uOiA2NTAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnfSk7XG4gICAgICAgIGRkLnZlbG9jaXR5KHtcbiAgICAgICAgICAgIGhlaWdodDogZGRIZWlnaHQsXG4gICAgICAgICAgICB0b3A6IGRkLmRhdGEoJ3RvcCcpIHx8IDBcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZHVyYXRpb246IDY1MCxcbiAgICAgICAgICAgIHF1ZXVlOiBmYWxzZSxcbiAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRDdWJpYycsXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGRkLmNzcyh7b3ZlcmZsb3c6ICd2aXNpYmxlJ30pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdoaWRlLmJzLmRyb3Bkb3duJywgZnVuY3Rpb24gKGUpIHtcblxuICAgICAgICBpZiAoTW9kZXJuaXpyLnRvdWNoICYmICQod2luZG93KS53aWR0aCgpIDwgNzY4KSByZXR1cm4gdHJ1ZTtcblxuICAgICAgICB2YXIgZGQgPSAkKGUucmVsYXRlZFRhcmdldCkubmV4dCgnLmRyb3Bkb3duLW1lbnUnKTtcbiAgICAgICAgZGQudmVsb2NpdHkoe1xuICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgIHRvcDogJzEwMCUnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiA2NTAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnLCBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGRkLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnYXV0bydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIHZhciByaXBwbGUgPSBmdW5jdGlvbiAoZSkge1xuXG4gICAgICAgIHZhciBlbCwgaW5rLCBkLCB4LCB5O1xuXG4gICAgICAgIGVsID0gJCh0aGlzKTtcblxuICAgICAgICBlbC5hZGRDbGFzcygncmlwcGxlJyk7XG5cbiAgICAgICAgaWYgKGVsLnBhcmVudHMoJy5zaWRlYmFyLXNraW4td2hpdGUnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGVsLmFkZENsYXNzKCdyaXBwbGUtZGFyay1mYWRlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWwucGFyZW50cygnLnNpZGViYXItc2tpbi1kYXJrJykubGVuZ3RoKSB7XG4gICAgICAgICAgICBlbC5hZGRDbGFzcygncmlwcGxlLWxpZ2h0LWZhZGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbC5pcygnLmJ0bi13aGl0ZScpKSB7XG4gICAgICAgICAgICBlbC5hZGRDbGFzcygncmlwcGxlLWRhcmstZmFkZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVsLmF0dHIoJ2hyZWYnKSAmJiAhIGVsLmRhdGEoJ3RvZ2dsZScpKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZiAoZWwuY2xvc2VzdCgnLmRyb3Bkb3duLW1lbnUnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24gPSBlbC5hdHRyKCdocmVmJyk7XG4gICAgICAgICAgICB9LCA0MDApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY3JlYXRlIC5pbmsgZWxlbWVudCBpZiBpdCBkb2Vzbid0IGV4aXN0XG4gICAgICAgIGlmIChlbC5maW5kKFwiLmlua1wiKS5sZW5ndGggPT09IDApXG4gICAgICAgICAgICBlbC5wcmVwZW5kKFwiPHNwYW4gY2xhc3M9J2luayc+PC9zcGFuPlwiKTtcblxuICAgICAgICBpbmsgPSBlbC5maW5kKFwiLmlua1wiKTtcbiAgICAgICAgLy8gaW4gY2FzZSBvZiBxdWljayBkb3VibGUgY2xpY2tzIHN0b3AgdGhlIHByZXZpb3VzIGFuaW1hdGlvblxuICAgICAgICBpbmsucmVtb3ZlQ2xhc3MoXCJhbmltYXRlXCIpO1xuXG4gICAgICAgIC8vIHNldCBzaXplIG9mIC5pbmtcbiAgICAgICAgaWYgKCEgaW5rLmhlaWdodCgpICYmICEgaW5rLndpZHRoKCkpIHtcbiAgICAgICAgICAgIC8vIHVzZSBlbCdzIHdpZHRoIG9yIGhlaWdodCB3aGljaGV2ZXIgaXMgbGFyZ2VyIGZvciB0aGUgZGlhbWV0ZXIgdG8gbWFrZSBhIGNpcmNsZSB3aGljaCBjYW4gY292ZXIgdGhlIGVudGlyZSBlbGVtZW50LlxuICAgICAgICAgICAgZCA9IE1hdGgubWF4KGVsLm91dGVyV2lkdGgoKSwgZWwub3V0ZXJIZWlnaHQoKSk7XG4gICAgICAgICAgICBpbmsuY3NzKHtoZWlnaHQ6IGQsIHdpZHRoOiBkfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBnZXQgY2xpY2sgY29vcmRpbmF0ZXNcbiAgICAgICAgLy8gbG9naWMgPSBjbGljayBjb29yZGluYXRlcyByZWxhdGl2ZSB0byBwYWdlIC0gZWwncyBwb3NpdGlvbiByZWxhdGl2ZSB0byBwYWdlIC0gaGFsZiBvZiBzZWxmIGhlaWdodC93aWR0aCB0byBtYWtlIGl0IGNvbnRyb2xsYWJsZSBmcm9tIHRoZSBjZW50ZXI7XG4gICAgICAgIHggPSBlLnBhZ2VYIC0gZWwub2Zmc2V0KCkubGVmdCAtIGluay53aWR0aCgpIC8gMjtcbiAgICAgICAgeSA9IGUucGFnZVkgLSBlbC5vZmZzZXQoKS50b3AgLSBpbmsuaGVpZ2h0KCkgLyAyO1xuXG4gICAgICAgIC8vIHNldCB0aGUgcG9zaXRpb24gYW5kIGFkZCBjbGFzcyAuYW5pbWF0ZVxuICAgICAgICBpbmsuY3NzKHt0b3A6IHkgKyAncHgnLCBsZWZ0OiB4ICsgJ3B4J30pLmFkZENsYXNzKFwiYW5pbWF0ZVwiKTtcblxuICAgIH07XG5cbiAgICB2YXIgbGlzdEdyb3VwTWVudSA9ICQoJy5saXN0LWdyb3VwLW1lbnUgPiAubGlzdC1ncm91cC1pdGVtID4gYScpLFxuICAgICAgICBidXR0b24gPSAkKCcuYnRuJyksXG4gICAgICAgIG5hdmJhck5hdiA9ICQoJy5uYXZiYXItbmF2ID4gbGkgPiBhJyksXG4gICAgICAgIGRyb3Bkb3duTWVudSA9ICQoJy5kcm9wZG93bi1tZW51ID4gbGkgPiBhJyksXG4gICAgICAgIHNpZGViYXJNZW51ID0gJCgnLnNpZGViYXItbWVudSA+IGxpID4gYScpO1xuXG4gICAgdmFyIGFkZFJpcHBsZSA9ICQoKVxuICAgICAgICAuYWRkKGxpc3RHcm91cE1lbnUpXG4gICAgICAgIC5hZGQoYnV0dG9uKVxuICAgICAgICAuYWRkKG5hdmJhck5hdilcbiAgICAgICAgLmFkZChkcm9wZG93bk1lbnUpXG4gICAgICAgIC5hZGQoc2lkZWJhck1lbnUpO1xuXG4gICAgaWYgKGFkZFJpcHBsZS5sZW5ndGgpIHtcbiAgICAgICAgYWRkUmlwcGxlLmNsaWNrKHJpcHBsZSk7XG4gICAgfVxuXG59KShqUXVlcnkpOyIsInJlcXVpcmUoJy4vX2Zvcm1zJyk7XG5yZXF1aXJlKCcuL19yaXBwbGUnKTsiLCIoZnVuY3Rpb24gKCQpIHtcblxuICAgIC8vIEZpbmQgYWxsIFlvdVR1YmUgdmlkZW9zXG4gICAgdmFyICRhbGxWaWRlb3MgPSAkKFwiaWZyYW1lW3NyY149J2h0dHA6Ly9wbGF5ZXIudmltZW8uY29tJ10sIGlmcmFtZVtzcmNePSdodHRwOi8vd3d3LnlvdXR1YmUuY29tJ11cIiksXG5cbiAgICAvLyBUaGUgZWxlbWVudCB0aGF0IGlzIGZsdWlkIHdpZHRoXG4gICAgJGZsdWlkRWwgPSAkKFwicGFuZWxcIik7XG5cbiAgICAvLyBGaWd1cmUgb3V0IGFuZCBzYXZlIGFzcGVjdCByYXRpbyBmb3IgZWFjaCB2aWRlb1xuICAgICRhbGxWaWRlb3MuZWFjaChmdW5jdGlvbigpIHtcblxuICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAuZGF0YSgnYXNwZWN0UmF0aW8nLCB0aGlzLmhlaWdodCAvIHRoaXMud2lkdGgpXG5cbiAgICAgICAgICAgIC8vIGFuZCByZW1vdmUgdGhlIGhhcmQgY29kZWQgd2lkdGgvaGVpZ2h0XG4gICAgICAgICAgICAucmVtb3ZlQXR0cignaGVpZ2h0JylcbiAgICAgICAgICAgIC5yZW1vdmVBdHRyKCd3aWR0aCcpO1xuXG4gICAgfSk7XG5cbiAgICAvLyBXaGVuIHRoZSB3aW5kb3cgaXMgcmVzaXplZFxuICAgICQoXCIuZ2FsbGVyeS1ncmlkIC5wYW5lbFwiKS5yZXNpemUoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIG5ld1dpZHRoID0gJGZsdWlkRWwud2lkdGgoKTtcblxuICAgICAgICAvLyBSZXNpemUgYWxsIHZpZGVvcyBhY2NvcmRpbmcgdG8gdGhlaXIgb3duIGFzcGVjdCByYXRpb1xuICAgICAgICAkYWxsVmlkZW9zLmVhY2goZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIHZhciAkZWwgPSAkKHRoaXMpO1xuICAgICAgICAgICAgJGVsXG4gICAgICAgICAgICAgICAgLndpZHRoKG5ld1dpZHRoKVxuICAgICAgICAgICAgICAgIC5oZWlnaHQobmV3V2lkdGggKiAkZWwuZGF0YSgnYXNwZWN0UmF0aW8nKSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAvLyBLaWNrIG9mZiBvbmUgcmVzaXplIHRvIGZpeCBhbGwgdmlkZW9zIG9uIHBhZ2UgbG9hZFxuICAgIH0pLnJlc2l6ZSgpO1xuXG59KShqUXVlcnkpOyIsInJlcXVpcmUoJy4vb3dsL21haW4nKTtcbnJlcXVpcmUoJy4vc2xpY2svX2RlZmF1bHQnKTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIC8qKlxuICAgICAqIGpRdWVyeSBwbHVnaW4gd3JhcHBlciBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIEFuZ3VsYXIgVUkuVXRpbHM6IGpRdWVyeSBQYXNzdGhyb3VnaFxuICAgICAqL1xuICAgICQuZm4udGtPd2xEZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgdmFyIGMgPSB0aGlzO1xuICAgICAgICBjLm93bENhcm91c2VsKHtcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICBpdGVtczogYy5kYXRhKCdpdGVtcycpIHx8IDQsXG4gICAgICAgICAgICByZXNwb25zaXZlOiB7XG4gICAgICAgICAgICAgICAgMTIwMDoge1xuICAgICAgICAgICAgICAgICAgICBpdGVtczogYy5kYXRhKCdpdGVtc0xnJykgfHwgNFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgOTkyOiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBjLmRhdGEoJ2l0ZW1zTWcnKSB8fCAzXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICA3Njg6IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IGMuZGF0YSgnaXRlbXNTbScpIHx8IDNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIDQ4MDoge1xuICAgICAgICAgICAgICAgICAgICBpdGVtczogYy5kYXRhKCdpdGVtc1hzJykgfHwgMlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgMDoge1xuICAgICAgICAgICAgICAgICAgICBpdGVtczogMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBydGw6IHRoaXMuZGF0YSgncnRsJyksXG4gICAgICAgICAgICBhZnRlclVwZGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCdyZXNpemUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgJChcIi5vd2wtYmFzaWNcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykudGtPd2xEZWZhdWx0KCk7XG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvKipcbiAgICAgKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAgICAgKi9cbiAgICAkLmZuLnRrT3dsTWl4ZWQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICB0aGlzLm93bENhcm91c2VsKHtcbiAgICAgICAgICAgIGl0ZW1zOiAyLFxuICAgICAgICAgICAgbmF2OiB0cnVlLFxuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBydGw6IHRoaXMuZGF0YSgncnRsJyksXG4gICAgICAgICAgICBuYXZUZXh0OiBbICc8aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tbGVmdFwiPjwvaT4nLCAnPGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPicgXSxcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IHtcbiAgICAgICAgICAgICAgICAxMjAwOiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAyXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAwOiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICAkKFwiLm93bC1taXhlZFwiKS50a093bE1peGVkKCk7XG5cbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICB2YXIgc3luY1Bvc2l0aW9uID0gZnVuY3Rpb24gKGUsIHRhcmdldCkge1xuICAgICAgICBpZiAoZS5uYW1lc3BhY2UgJiYgZS5wcm9wZXJ0eS5uYW1lID09PSAnaXRlbXMnKSB7XG4gICAgICAgICAgICB0YXJnZXQudHJpZ2dlcigndG8ub3dsLmNhcm91c2VsJywgW2UuaXRlbS5pbmRleCwgMzAwLCB0cnVlXSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogalF1ZXJ5IHBsdWdpbiB3cmFwcGVyIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQW5ndWxhciBVSS5VdGlsczogalF1ZXJ5IFBhc3N0aHJvdWdoXG4gICAgICovXG4gICAgJC5mbi50a093bFByZXZpZXcgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzLmRhdGEoJ3N5bmMnKSksXG4gICAgICAgICAgICBwcmV2aWV3ID0gdGhpcyxcbiAgICAgICAgICAgIHJ0bCA9IHRoaXMuZGF0YSgncnRsJyk7XG5cbiAgICAgICAgaWYgKCEgdGFyZ2V0Lmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMub3dsQ2Fyb3VzZWwoe1xuICAgICAgICAgICAgaXRlbXM6IDEsXG4gICAgICAgICAgICBzbGlkZVNwZWVkOiAxMDAwLFxuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICByZXNwb25zaXZlUmVmcmVzaFJhdGU6IDIwMCxcbiAgICAgICAgICAgIHJ0bDogcnRsLFxuICAgICAgICAgICAgbmF2OiB0cnVlLFxuICAgICAgICAgICAgbmF2aWdhdGlvblRleHQ6IFsgJzxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPicsICc8aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+JyBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMub24oJ2NoYW5nZS5vd2wuY2Fyb3VzZWwnLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIHN5bmNQb3NpdGlvbihlLCB0YXJnZXQpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0YXJnZXQub3dsQ2Fyb3VzZWwoe1xuICAgICAgICAgICAgaXRlbXM6IDUsXG4gICAgICAgICAgICByZXNwb25zaXZlOiB7XG4gICAgICAgICAgICAgICAgMTIwMDoge1xuICAgICAgICAgICAgICAgICAgICBpdGVtczogN1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgNzY4OiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiA2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICA0ODA6IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIDA6IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICBuYXY6IHRydWUsXG4gICAgICAgICAgICByZXNwb25zaXZlUmVmcmVzaFJhdGU6IDEwMCxcbiAgICAgICAgICAgIHJ0bDogcnRsLFxuICAgICAgICAgICAgYWZ0ZXJJbml0OiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgICBlbC5maW5kKFwiLm93bC1pdGVtXCIpLmVxKDApLmFkZENsYXNzKFwic3luY2VkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0YXJnZXQub24oJ2NoYW5nZS5vd2wuY2Fyb3VzZWwnLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIHN5bmNQb3NpdGlvbihlLCBwcmV2aWV3KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGFyZ2V0LmZpbmQoJy5vd2wtaXRlbScpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgaXRlbSA9ICQodGhpcykuZGF0YShcIm93bC1pdGVtXCIpO1xuICAgICAgICAgICAgcHJldmlldy50cmlnZ2VyKFwidG8ub3dsLmNhcm91c2VsXCIsIFtpdGVtLmluZGV4LCAzMDAsIHRydWVdKTtcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgJChcIi5vd2wtcHJldmlld1wiKS50a093bFByZXZpZXcoKTtcblxufSkoalF1ZXJ5KTsiLCJyZXF1aXJlKCcuL19kZWZhdWx0Jyk7XG5yZXF1aXJlKCcuL19taXhlZCcpO1xucmVxdWlyZSgnLi9fcHJldmlldycpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgLyoqXG4gICAgICogalF1ZXJ5IHBsdWdpbiB3cmFwcGVyIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQW5ndWxhciBVSS5VdGlsczogalF1ZXJ5IFBhc3N0aHJvdWdoXG4gICAgICovXG4gICAgJC5mbi50a1NsaWNrRGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIGlmICh0eXBlb2YgJC5mbi5zbGljayA9PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuXG4gICAgICAgIHZhciBjID0gdGhpcztcbiAgICAgICAgXG4gICAgICAgIGMuc2xpY2soe1xuICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogYy5kYXRhKCdpdGVtcycpIHx8IDMsXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMjAwLFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiBjLmRhdGEoJ2l0ZW1zTGcnKSB8fCA0XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkyLFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiBjLmRhdGEoJ2l0ZW1zTWQnKSB8fCAzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiBjLmRhdGEoJ2l0ZW1zU20nKSB8fCAzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNDgwLFxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiBjLmRhdGEoJ2l0ZW1zWHMnKSB8fCAyXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMCxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHJ0bDogdGhpcy5kYXRhKCdydGwnKSxcbiAgICAgICAgICAgIG9uU2V0UG9zaXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcigncmVzaXplJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdzaWRlYmFyLnNob3duJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGMuc2xpY2tTZXRPcHRpb24oJ2RvdHMnLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgJChcIi5zbGljay1iYXNpY1wiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS50a1NsaWNrRGVmYXVsdCgpO1xuICAgIH0pO1xuXG59KShqUXVlcnkpOyIsIi8vIENhcm91c2Vsc1xucmVxdWlyZSgnLi9jYXJvdXNlbC9tYWluJyk7XG5cbi8vIFJlc3BvbnNpdmUgVmlkZW8gaUZyYW1lIEZpeFxucmVxdWlyZSgnLi9fcmVzcG9uc2l2ZS12aWRlb3MnKTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICQod2luZG93KS5iaW5kKCdlbnRlckJyZWFrcG9pbnQzMjAnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpbWcgPSAkKCcubWVzc2FnZXMtbGlzdCAucGFuZWwgdWwgaW1nJyk7XG4gICAgICAgICQoJy5tZXNzYWdlcy1saXN0IC5wYW5lbCB1bCcpLndpZHRoKGltZy5maXJzdCgpLndpZHRoKCkgKiBpbWcubGVuZ3RoKTtcbiAgICB9KTtcblxuICAgICQod2luZG93KS5iaW5kKCdleGl0QnJlYWtwb2ludDMyMCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLm1lc3NhZ2VzLWxpc3QgLnBhbmVsIHVsJykud2lkdGgoJ2F1dG8nKTtcbiAgICB9KTtcblxufSkoalF1ZXJ5KTtcbiIsInJlcXVpcmUoJy4vX2JyZWFrcG9pbnRzJyk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICB2YXIgcmVzdG9yZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoXCJodG1sXCIpLmFkZENsYXNzKCdzaG93LXNpZGViYXInKTtcbiAgICAgICAgICAgICQoJy5zaWRlYmFyLnNpZGViYXItdmlzaWJsZS1kZXNrdG9wJykubm90KCc6dmlzaWJsZScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0gc2lkZWJhci5vcHRpb25zKCQodGhpcykpO1xuICAgICAgICAgICAgICAgIHNpZGViYXIub3BlbigkKHRoaXMpLmF0dHIoJ2lkJyksIG9wdGlvbnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGhpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKFwiaHRtbFwiKS5yZW1vdmVDbGFzcygnc2hvdy1zaWRlYmFyJyk7XG4gICAgICAgICAgICAkKCcuc2lkZWJhcjp2aXNpYmxlJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2lkZWJhci5jbG9zZSgkKHRoaXMpLmF0dHIoJ2lkJykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAkKHdpbmRvdykuYmluZCgnZW50ZXJCcmVha3BvaW50NzY4JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoISAkKCcuc2lkZWJhcicpLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICBpZiAoJCgnLmhpZGUtc2lkZWJhcicpLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICByZXN0b3JlKCk7XG4gICAgfSk7XG5cbiAgICAkKHdpbmRvdykuYmluZCgnZW50ZXJCcmVha3BvaW50MTAyNCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCEgJCgnLnNpZGViYXInKS5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgaWYgKCQoJy5oaWRlLXNpZGViYXInKS5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgcmVzdG9yZSgpO1xuICAgIH0pO1xuXG4gICAgJCh3aW5kb3cpLmJpbmQoJ2VudGVyQnJlYWtwb2ludDQ4MCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCEgJCgnLnNpZGViYXInKS5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgaGlkZSgpO1xuICAgIH0pO1xuXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDQ4MCkge1xuICAgICAgICBpZiAoISAkKCcuc2lkZWJhcicpLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICBoaWRlKCk7XG4gICAgfVxuXG59KShqUXVlcnkpO1xuIiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvKipcbiAgICAgKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAgICAgKi9cbiAgICAkLmZuLnRrU2lkZWJhckNvbGxhcHNlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgdmFyIHNpZGViYXIgPSB0aGlzO1xuXG4gICAgICAgIHNpZGViYXIuZmluZCgnLnNpZGViYXItbWVudSA+IGxpID4gYScpLm9mZignbW91c2VlbnRlcicpO1xuICAgICAgICBzaWRlYmFyLmZpbmQoJy5zaWRlYmFyLW1lbnUgPiBsaS5kcm9wZG93biA+IGEnKS5vZmYoJ21vdXNlZW50ZXInKTtcbiAgICAgICAgc2lkZWJhci5maW5kKCcuc2lkZWJhci1tZW51ID4gbGkgPiBhJykub2ZmKCdtb3VzZWVudGVyJyk7XG4gICAgICAgIHNpZGViYXIuZmluZCgnLnNpZGViYXItbWVudSA+IGxpID4gYScpLm9mZignY2xpY2snKTtcbiAgICAgICAgc2lkZWJhci5vZmYoJ21vdXNlbGVhdmUnKTtcbiAgICAgICAgc2lkZWJhci5maW5kKCcuZHJvcGRvd24nKS5vZmYoJ21vdXNlb3ZlcicpO1xuICAgICAgICBzaWRlYmFyLmZpbmQoJy5kcm9wZG93bicpLm9mZignbW91c2VvdXQnKTtcblxuICAgICAgICAkKCdib2R5Jykub2ZmKCdtb3VzZW91dCcsICcjZHJvcGRvd24tdGVtcCAuZHJvcGRvd24nKTtcblxuICAgICAgICBzaWRlYmFyLmZpbmQoJ3VsLmNvbGxhcHNlJylcbiAgICAgICAgICAgIC5vZmYoJ3Nob3duLmJzLmNvbGxhcHNlJylcbiAgICAgICAgICAgIC5vZmYoJ3Nob3cuYnMuY29sbGFwc2UnKVxuICAgICAgICAgICAgLm9mZignaGlkZS5icy5jb2xsYXBzZScpXG4gICAgICAgICAgICAub2ZmKCdoaWRkZW4uYnMuY29sbGFwc2UnKTtcblxuICAgICAgICBzaWRlYmFyLmZpbmQoJyNkcm9wZG93bi10ZW1wJykucmVtb3ZlKCk7XG5cbiAgICAgICAgc2lkZWJhci5maW5kKCcuaGFzU3VibWVudScpLnJlbW92ZUNsYXNzKCdkcm9wZG93bicpXG4gICAgICAgICAgICAuZmluZCgnPiB1bCcpLmFkZENsYXNzKCdjb2xsYXBzZScpLnJlbW92ZUNsYXNzKCdkcm9wZG93bi1tZW51IHN1Ym1lbnUtaGlkZSBzdWJtZW51LXNob3cnKVxuICAgICAgICAgICAgLmVuZCgpXG4gICAgICAgICAgICAuZmluZCgnPiBhJykuYXR0cignZGF0YS10b2dnbGUnLCAnY29sbGFwc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBzaWRlYmFyLmZpbmQoJy5jb2xsYXBzZScpLm9uKCdzaG93bi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNpZGViYXIuZmluZCgnW2RhdGEtc2Nyb2xsYWJsZV0nKS5nZXROaWNlU2Nyb2xsKCkucmVzaXplKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENvbGxhcHNlXG4gICAgICAgIHNpZGViYXIuZmluZCgnLmNvbGxhcHNlJykub24oJ3Nob3cuYnMuY29sbGFwc2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHZhciBwYXJlbnRzID0gJCh0aGlzKS5wYXJlbnRzKCd1bDpmaXJzdCcpLmZpbmQoJz4gbGkub3BlbiA+IHVsJyk7XG4gICAgICAgICAgICBpZiAocGFyZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRzLmNvbGxhcHNlKCdoaWRlJykuY2xvc2VzdCgnLmhhc1N1Ym1lbnUnKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuaGFzU3VibWVudScpLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNpZGViYXIuZmluZCgnLmNvbGxhcHNlJykub24oJ2hpZGRlbi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuaGFzU3VibWVudScpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNpZGViYXIuZmluZCgnLmNvbGxhcHNlJykuY29sbGFwc2UoeyB0b2dnbGU6IGZhbHNlIH0pO1xuXG4gICAgfTtcblxuICAgICQoJy5zaWRlYmFyW2RhdGEtdHlwZT1cImNvbGxhcHNlXCJdJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAkKHRoaXMpLnRrU2lkZWJhckNvbGxhcHNlKCk7XG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvKipcbiAgICAgKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAgICAgKi9cbiAgICAkLmZuLnRrU2lkZWJhckRyb3Bkb3duID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgdmFyIHNpZGViYXIgPSB0aGlzO1xuXG4gICAgICAgIHNpZGViYXIuZmluZCgnLmNvbGxhcHNlJylcbiAgICAgICAgICAgIC5vZmYoJ3Nob3duLmJzLmNvbGxhcHNlJylcbiAgICAgICAgICAgIC5vZmYoJ3Nob3cuYnMuY29sbGFwc2UnKVxuICAgICAgICAgICAgLm9mZignaGlkZGVuLmJzLmNvbGxhcHNlJyk7XG5cbiAgICAgICAgdmFyIG5pY2UgPSBzaWRlYmFyLmZpbmQoJ1tkYXRhLXNjcm9sbGFibGVdJykuZ2V0TmljZVNjcm9sbCgpWyAwIF07XG5cbiAgICAgICAgbmljZS5zY3JvbGxzdGFydChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoISBzaWRlYmFyLmlzKCdbZGF0YS10eXBlPVwiZHJvcGRvd25cIl0nKSkgcmV0dXJuO1xuICAgICAgICAgICAgc2lkZWJhci5hZGRDbGFzcygnc2Nyb2xsaW5nJyk7XG4gICAgICAgICAgICBzaWRlYmFyLmZpbmQoJyNkcm9wZG93bi10ZW1wID4gdWwgPiBsaScpLmVtcHR5KCk7XG4gICAgICAgICAgICBzaWRlYmFyLmZpbmQoJyNkcm9wZG93bi10ZW1wJykuaGlkZSgpO1xuICAgICAgICAgICAgc2lkZWJhci5maW5kKCcub3BlbicpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG5pY2Uuc2Nyb2xsZW5kKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghIHNpZGViYXIuaXMoJ1tkYXRhLXR5cGU9XCJkcm9wZG93blwiXScpKSByZXR1cm47XG4gICAgICAgICAgICAkLmRhdGEodGhpcywgJ2xhc3RTY3JvbGxUb3AnLCBuaWNlLmdldFNjcm9sbFRvcCgpKTtcbiAgICAgICAgICAgIHNpZGViYXIucmVtb3ZlQ2xhc3MoJ3Njcm9sbGluZycpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzaWRlYmFyLmZpbmQoJy5oYXNTdWJtZW51JykuYWRkQ2xhc3MoJ2Ryb3Bkb3duJykucmVtb3ZlQ2xhc3MoJ29wZW4nKVxuICAgICAgICAgICAgLmZpbmQoJz4gdWwnKS5hZGRDbGFzcygnZHJvcGRvd24tbWVudScpLnJlbW92ZUNsYXNzKCdjb2xsYXBzZSBpbicpLnJlbW92ZUF0dHIoJ3N0eWxlJylcbiAgICAgICAgICAgIC5lbmQoKVxuICAgICAgICAgICAgLmZpbmQoJz4gYScpLnJlbW92ZUNsYXNzKCdjb2xsYXBzZWQnKVxuICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2RhdGEtdG9nZ2xlJyk7XG5cbiAgICAgICAgc2lkZWJhci5maW5kKCcuc2lkZWJhci1tZW51ID4gbGkuZHJvcGRvd24gPiBhJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIHZhciBjID0gc2lkZWJhci5maW5kKCcjZHJvcGRvd24tdGVtcCcpO1xuXG4gICAgICAgICAgICBzaWRlYmFyLmZpbmQoJy5vcGVuJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIGMuaGlkZSgpO1xuXG4gICAgICAgICAgICBpZiAoISAkKHRoaXMpLnBhcmVudCgnLmRyb3Bkb3duJykuaXMoJy5vcGVuJykgJiYgISBzaWRlYmFyLmlzKCcuc2Nyb2xsaW5nJykpIHtcbiAgICAgICAgICAgICAgICB2YXIgcCA9ICQodGhpcykucGFyZW50KCcuZHJvcGRvd24nKSxcbiAgICAgICAgICAgICAgICAgICAgdCA9IHAuZmluZCgnPiAuZHJvcGRvd24tbWVudScpLmNsb25lKCkucmVtb3ZlQ2xhc3MoJ3N1Ym1lbnUtaGlkZScpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCEgYy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgYyA9ICQoJzxkaXYvPicpLmF0dHIoJ2lkJywgJ2Ryb3Bkb3duLXRlbXAnKS5hcHBlbmRUbyhzaWRlYmFyKTtcbiAgICAgICAgICAgICAgICAgICAgYy5odG1sKCc8dWw+PGxpPjwvbGk+PC91bD4nKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjLnNob3coKTtcbiAgICAgICAgICAgICAgICBjLmZpbmQoJy5kcm9wZG93bi1tZW51JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgYyA9IGMuZmluZCgnPiB1bCA+IGxpJykuY3NzKHtvdmVyZmxvdzogJ3Zpc2libGUnfSkuYWRkQ2xhc3MoJ2Ryb3Bkb3duIG9wZW4nKTtcblxuICAgICAgICAgICAgICAgIHAuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICB0LmFwcGVuZFRvKGMpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogcC5vZmZzZXQoKS50b3AgLSBjLm9mZnNldCgpLnRvcCxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogJzEwMCUnXG4gICAgICAgICAgICAgICAgfSkuc2hvdygpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNpZGViYXIuaXMoJy5yaWdodCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHQuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAnMTAwJSdcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBzaWRlYmFyLmZpbmQoJy5zaWRlYmFyLW1lbnUgPiBsaSA+IGEnKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgaWYgKCEgJCh0aGlzKS5wYXJlbnQoKS5pcygnLmRyb3Bkb3duJykpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2lkZWJhciA9ICQodGhpcykuY2xvc2VzdCgnLnNpZGViYXInKTtcbiAgICAgICAgICAgICAgICBzaWRlYmFyLmZpbmQoJy5vcGVuJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICBzaWRlYmFyLmZpbmQoJyNkcm9wZG93bi10ZW1wJykuaGlkZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNpZGViYXIuZmluZCgnLnNpZGViYXItbWVudSA+IGxpID4gYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5wYXJlbnQoKS5pcygnLmRyb3Bkb3duJykpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2lkZWJhci5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnI2Ryb3Bkb3duLXRlbXAnKS5oaWRlKCk7XG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5vcGVuJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2lkZWJhci5maW5kKCcuZHJvcGRvd24nKS5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnb3BlbicpLmNoaWxkcmVuKCd1bCcpLnJlbW92ZUNsYXNzKCdzdWJtZW51LWhpZGUnKS5hZGRDbGFzcygnc3VibWVudS1zaG93Jyk7XG4gICAgICAgIH0pLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJ3VsJykucmVtb3ZlQ2xhc3MoJy5zdWJtZW51LXNob3cnKS5hZGRDbGFzcygnc3VibWVudS1oaWRlJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ2JvZHknKS5vbignbW91c2VvdXQnLCAnI2Ryb3Bkb3duLXRlbXAgLmRyb3Bkb3duJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnLnNpZGViYXItbWVudSAub3BlbicsICQodGhpcykuY2xvc2VzdCgnLnNpZGViYXInKSkucmVtb3ZlQ2xhc3MoJy5vcGVuJyk7XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIHZhciB0cmFuc2Zvcm1fZGQgPSBmdW5jdGlvbigpe1xuXG4gICAgICAgICQoJy5zaWRlYmFyW2RhdGEtdHlwZT1cImRyb3Bkb3duXCJdJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgJCh0aGlzKS50a1NpZGViYXJEcm9wZG93bigpO1xuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICB2YXIgdHJhbnNmb3JtX2NvbGxhcHNlID0gZnVuY3Rpb24oKXtcblxuICAgICAgICAkKCcuc2lkZWJhcltkYXRhLXR5cGU9XCJjb2xsYXBzZVwiXScpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICQodGhpcykudGtTaWRlYmFyQ29sbGFwc2UoKTtcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgdHJhbnNmb3JtX2RkKCk7XG5cbiAgICAkKHdpbmRvdykuYmluZCgnZW50ZXJCcmVha3BvaW50NDgwJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoISAkKCcuc2lkZWJhcltkYXRhLXR5cGU9XCJkcm9wZG93blwiXScpLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICAkKCcuc2lkZWJhcltkYXRhLXR5cGU9XCJkcm9wZG93blwiXScpLmF0dHIoJ2RhdGEtdHlwZScsICdjb2xsYXBzZScpLmF0dHIoJ2RhdGEtdHJhbnNmb3JtZWQnLCB0cnVlKTtcbiAgICAgICAgdHJhbnNmb3JtX2NvbGxhcHNlKCk7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBtYWtlX2RkKCkge1xuICAgICAgICBpZiAoISAkKCcuc2lkZWJhcltkYXRhLXR5cGU9XCJjb2xsYXBzZVwiXVtkYXRhLXRyYW5zZm9ybWVkXScpLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICAkKCcuc2lkZWJhcltkYXRhLXR5cGU9XCJjb2xsYXBzZVwiXVtkYXRhLXRyYW5zZm9ybWVkXScpLmF0dHIoJ2RhdGEtdHlwZScsICdkcm9wZG93bicpLmF0dHIoJ2RhdGEtdHJhbnNmb3JtZWQnLCB0cnVlKTtcbiAgICAgICAgdHJhbnNmb3JtX2RkKCk7XG4gICAgfVxuXG4gICAgJCh3aW5kb3cpLmJpbmQoJ2VudGVyQnJlYWtwb2ludDc2OCcsIG1ha2VfZGQpO1xuXG4gICAgJCh3aW5kb3cpLmJpbmQoJ2VudGVyQnJlYWtwb2ludDEwMjQnLCBtYWtlX2RkKTtcblxufSkoalF1ZXJ5KTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzaWRlYmFyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgXCJ0cmFuc2Zvcm0tYnV0dG9uXCI6IHNpZGViYXIuZGF0YSgndHJhbnNmb3JtQnV0dG9uJykgPT09IHRydWUsXG4gICAgICAgIFwidHJhbnNmb3JtLWJ1dHRvbi1pY29uXCI6IHNpZGViYXIuZGF0YSgndHJhbnNmb3JtQnV0dG9uSWNvbicpIHx8ICdmYS1lbGxpcHNpcy1oJ1xuICAgIH07XG59OyIsIihmdW5jdGlvbiAoJCkge1xuXG4gICAgdmFyIHNpZGViYXJzID0gJCgnLnNpZGViYXInKTtcblxuICAgIHNpZGViYXJzLmVhY2goZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHZhciBzaWRlYmFyID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSByZXF1aXJlKCcuL19vcHRpb25zJykoc2lkZWJhcik7XG5cbiAgICAgICAgaWYgKG9wdGlvbnNbICd0cmFuc2Zvcm0tYnV0dG9uJyBdKSB7XG4gICAgICAgICAgICB2YXIgYnV0dG9uID0gJCgnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+PC9idXR0b24+Jyk7XG5cbiAgICAgICAgICAgIGJ1dHRvblxuICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXRvZ2dsZScsICdzaWRlYmFyLXRyYW5zZm9ybScpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdidG4gYnRuLWRlZmF1bHQnKVxuICAgICAgICAgICAgICAgIC5odG1sKCc8aSBjbGFzcz1cImZhICcgKyBvcHRpb25zWyAndHJhbnNmb3JtLWJ1dHRvbi1pY29uJyBdICsgJ1wiPjwvaT4nKTtcblxuICAgICAgICAgICAgc2lkZWJhci5maW5kKCcuc2lkZWJhci1tZW51JykuYXBwZW5kKGJ1dHRvbik7XG4gICAgICAgIH1cbiAgICB9KTtcblxufShqUXVlcnkpKTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICQoJyNzdWJuYXYnKS5jb2xsYXBzZSh7J3RvZ2dsZSc6IGZhbHNlfSk7XG5cbiAgICBmdW5jdGlvbiBtb2JpbGVjaGVjaygpIHtcbiAgICAgICAgdmFyIGNoZWNrID0gZmFsc2U7XG4gICAgICAgIChmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgaWYgKC8oYW5kcm9pZHxpcGFkfHBsYXlib29rfHNpbGt8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyAoY2V8cGhvbmUpfHhkYXx4aWluby9pLnRlc3QoYSkgfHwgLzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2kudGVzdChhLnN1YnN0cigwLCA0KSkpXG4gICAgICAgICAgICAgICAgY2hlY2sgPSB0cnVlO1xuICAgICAgICB9KShuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IgfHwgd2luZG93Lm9wZXJhKTtcbiAgICAgICAgcmV0dXJuIGNoZWNrO1xuICAgIH1cblxuICAgIChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgICAgIGVmZmVjdDogJ3N0LWVmZmVjdC0xJyxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTUwLFxuICAgICAgICAgICAgICAgIG92ZXJsYXk6IGZhbHNlXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBjb250YWluZXJTZWxlY3RvciA9ICcuc3QtY29udGFpbmVyJyxcblxuICAgICAgICAgICAgZXZlbnR0eXBlID0gbW9iaWxlY2hlY2soKSA/ICd0b3VjaHN0YXJ0JyA6ICdjbGljaycsXG5cbiAgICAgICAgICAgIGdldExheW91dENsYXNzZXMgPSBmdW5jdGlvbiAoc2lkZWJhciwgZGlyZWN0aW9uKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgbGF5b3V0Q2xhc3NlcyA9IHNpZGViYXIuZGF0YSgnbGF5b3V0Q2xhc3NlcycpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCEgbGF5b3V0Q2xhc3Nlcykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdG9nZ2xlTGF5b3V0ID0gc2lkZWJhci5kYXRhKCd0b2dnbGVMYXlvdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2dnbGVMYXlvdXQgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dENsYXNzZXMgPSB0b2dnbGVMYXlvdXQuc3BsaXQoXCIsXCIpLmpvaW4oXCIgXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2lkZWJhci5kYXRhKCdsYXlvdXRDbGFzc2VzJywgbGF5b3V0Q2xhc3Nlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGF5b3V0Q2xhc3NlcztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaCA9IG5ldyBSZWdFeHAoJ3NpZGViYXItJyArIGRpcmVjdGlvbiArICcoXFxcXFMrKScsICdpZycpO1xuICAgICAgICAgICAgICAgICAgICBsYXlvdXRDbGFzc2VzID0gJCgnaHRtbCcpLmdldCgwKS5jbGFzc05hbWUubWF0Y2gobWF0Y2gpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobGF5b3V0Q2xhc3NlcyAhPT0gbnVsbCAmJiBsYXlvdXRDbGFzc2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0Q2xhc3NlcyA9IGxheW91dENsYXNzZXMuam9pbihcIiBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWRlYmFyLmRhdGEoJ2xheW91dENsYXNzZXMnLCBsYXlvdXRDbGFzc2VzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBsYXlvdXRDbGFzc2VzO1xuXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBnZXRTaWRlYmFyRGF0YU9wdGlvbnMgPSBmdW5jdGlvbihzaWRlYmFyKXtcblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGVmZmVjdDogc2lkZWJhci5kYXRhKCdlZmZlY3QnKSxcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheTogc2lkZWJhci5kYXRhKCdvdmVybGF5JylcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBhbmltYXRpbmcgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoJCgnYm9keScpLmhhc0NsYXNzKCdhbmltYXRpbmcnKSkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdhbmltYXRpbmcnKTtcblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2FuaW1hdGluZycpO1xuICAgICAgICAgICAgICAgIH0sIGRlZmF1bHRzLmR1cmF0aW9uKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgcmVzZXQgPSBmdW5jdGlvbiAoaWQsIG9wdGlvbnMpIHtcblxuICAgICAgICAgICAgICAgIHZhciBjb250YWluZXIgPSAkKGNvbnRhaW5lclNlbGVjdG9yKTtcblxuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSB0eXBlb2YgaWQgIT09ICd1bmRlZmluZWQnID8gJyMnICsgaWQgOiBjb250YWluZXIuZGF0YSgnc3RNZW51VGFyZ2V0JyksXG4gICAgICAgICAgICAgICAgICAgIHNpZGViYXIgPSAkKHRhcmdldCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoISBzaWRlYmFyLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmICghIHNpZGViYXIuaXMoJzp2aXNpYmxlJykpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoc2lkZWJhci5oYXNDbGFzcygnc2lkZWJhci1jbG9zZWQnKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgdmFyIGVmZmVjdCA9IHR5cGVvZiBvcHRpb25zICE9PSAndW5kZWZpbmVkJyAmJiBvcHRpb25zLmVmZmVjdCA/IG9wdGlvbnMuZWZmZWN0IDogY29udGFpbmVyLmRhdGEoJ3N0TWVudUVmZmVjdCcpLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSBzaWRlYmFyLmlzKCcubGVmdCcpID8gJ2wnIDogJ3InLFxuICAgICAgICAgICAgICAgICAgICBzaXplID0gc2lkZWJhci5nZXQoMCkuY2xhc3NOYW1lLm1hdGNoKC9zaWRlYmFyLXNpemUtKFxcUyspLykucG9wKCksXG4gICAgICAgICAgICAgICAgICAgIGh0bWxDbGFzcyA9ICdzdC1lZmZlY3QtJyArIGRpcmVjdGlvbiArIHNpemUsXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUxheW91dCA9IHNpZGViYXIuZGF0YSgndG9nZ2xlTGF5b3V0JyksXG4gICAgICAgICAgICAgICAgICAgIGxheW91dENsYXNzZXMgPSBnZXRMYXlvdXRDbGFzc2VzKHNpZGViYXIsIGRpcmVjdGlvbiksXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50RGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZGViYXI6IHNpZGViYXIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldFxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgJChkb2N1bWVudCkudHJpZ2dlcignc2lkZWJhci5oaWRlJywgZXZlbnREYXRhKTtcblxuICAgICAgICAgICAgICAgICQoJ1tkYXRhLXRvZ2dsZT1cInNpZGViYXItbWVudVwiXVtocmVmPVwiJyArIHRhcmdldCArICdcIl0nKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC5jbG9zZXN0KCdsaScpXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICAkKCdodG1sJykuYWRkQ2xhc3MoaHRtbENsYXNzKTtcbiAgICAgICAgICAgICAgICBzaWRlYmFyLmFkZENsYXNzKGVmZmVjdCk7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFkZENsYXNzKGVmZmVjdCk7XG5cbiAgICAgICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2xhc3MoJ3N0LW1lbnUtb3BlbiBzdC1wdXNoZXItb3ZlcmxheScpO1xuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5yZW1vdmVDbGFzcyhodG1sQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9nZ2xlTGF5b3V0KSAkKCdodG1sJykucmVtb3ZlQ2xhc3MobGF5b3V0Q2xhc3Nlcyk7XG4gICAgICAgICAgICAgICAgICAgIHNpZGViYXIucmVtb3ZlQ2xhc3MoZWZmZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmdldCgwKS5jbGFzc05hbWUgPSAnc3QtY29udGFpbmVyJzsgLy8gY2xlYXJcbiAgICAgICAgICAgICAgICAgICAgc2lkZWJhci5hZGRDbGFzcygnc2lkZWJhci1jbG9zZWQnKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICQoZG9jdW1lbnQpLnRyaWdnZXIoJ3NpZGViYXIuaGlkZGVuJywgZXZlbnREYXRhKTtcbiAgICAgICAgICAgICAgICB9LCBkZWZhdWx0cy5kdXJhdGlvbik7XG5cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG9wZW4gPSBmdW5jdGlvbiAodGFyZ2V0LCBvcHRpb25zKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVyID0gJChjb250YWluZXJTZWxlY3Rvcik7XG5cbiAgICAgICAgICAgICAgICB2YXIgc2lkZWJhciA9ICQodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBpZiAoISBzaWRlYmFyLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgLy8gb24gbW9iaWxlLCBhbGxvdyBvbmx5IG9uZSBzaWRlYmFyIHRvIGJlIG9wZW4gYXQgdGhlIHNhbWUgdGltZVxuICAgICAgICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDc2OCAmJiBjb250YWluZXIuaGFzQ2xhc3MoJ3N0LW1lbnUtb3BlbicpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNldCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICQoJ1tkYXRhLXRvZ2dsZT1cInNpZGViYXItbWVudVwiXVtocmVmPVwiJyArIHRhcmdldCArICdcIl0nKVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC5jbG9zZXN0KCdsaScpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICB2YXIgZWZmZWN0ID0gb3B0aW9ucy5lZmZlY3QsXG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXkgPSBvcHRpb25zLm92ZXJsYXk7XG5cbiAgICAgICAgICAgICAgICB2YXIgZGlyZWN0aW9uID0gc2lkZWJhci5pcygnLmxlZnQnKSA/ICdsJyA6ICdyJyxcbiAgICAgICAgICAgICAgICAgICAgc2l6ZSA9IHNpZGViYXIuZ2V0KDApLmNsYXNzTmFtZS5tYXRjaCgvc2lkZWJhci1zaXplLShcXFMrKS8pLnBvcCgpLFxuICAgICAgICAgICAgICAgICAgICBodG1sQ2xhc3MgPSAnc3QtZWZmZWN0LScgKyBkaXJlY3Rpb24gKyBzaXplLFxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVMYXlvdXQgPSBzaWRlYmFyLmRhdGEoJ3RvZ2dsZUxheW91dCcpLFxuICAgICAgICAgICAgICAgICAgICBsYXlvdXRDbGFzc2VzID0gZ2V0TGF5b3V0Q2xhc3NlcyhzaWRlYmFyLCBkaXJlY3Rpb24pLFxuICAgICAgICAgICAgICAgICAgICBldmVudERhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWRlYmFyOiBzaWRlYmFyLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICQoZG9jdW1lbnQpLnRyaWdnZXIoJ3NpZGViYXIuc2hvdycsIGV2ZW50RGF0YSk7XG5cbiAgICAgICAgICAgICAgICAkKCdodG1sJykuYWRkQ2xhc3MoaHRtbENsYXNzKTtcbiAgICAgICAgICAgICAgICBzaWRlYmFyLnNob3coKS5yZW1vdmVDbGFzcygnc2lkZWJhci1jbG9zZWQnKTtcblxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5kYXRhKCdzdE1lbnVFZmZlY3QnLCBlZmZlY3QpO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5kYXRhKCdzdE1lbnVUYXJnZXQnLCB0YXJnZXQpO1xuXG4gICAgICAgICAgICAgICAgc2lkZWJhci5hZGRDbGFzcyhlZmZlY3QpO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hZGRDbGFzcyhlZmZlY3QpO1xuICAgICAgICAgICAgICAgIGlmIChvdmVybGF5KSBjb250YWluZXIuYWRkQ2xhc3MoJ3N0LXB1c2hlci1vdmVybGF5Jyk7XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmFkZENsYXNzKCdzdC1tZW51LW9wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgc2lkZWJhci5maW5kKCdbZGF0YS1zY3JvbGxhYmxlXScpLmdldE5pY2VTY3JvbGwoKS5yZXNpemUoKTtcbiAgICAgICAgICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3Jlc2l6ZScpO1xuICAgICAgICAgICAgICAgIH0sIDI1KTtcblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9nZ2xlTGF5b3V0KSAkKCdodG1sJykuYWRkQ2xhc3MobGF5b3V0Q2xhc3Nlcyk7XG4gICAgICAgICAgICAgICAgICAgICQoZG9jdW1lbnQpLnRyaWdnZXIoJ3NpZGViYXIuc2hvd24nLCBldmVudERhdGEpO1xuICAgICAgICAgICAgICAgIH0sIGRlZmF1bHRzLmR1cmF0aW9uKTtcblxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdG9nZ2xlID0gZnVuY3Rpb24gKGUpIHtcblxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGEgPSBhbmltYXRpbmcoKTtcbiAgICAgICAgICAgICAgICBpZiAoYSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgdmFyIGJ1dHRvbiA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IGJ1dHRvbi5hdHRyKCdocmVmJyksXG4gICAgICAgICAgICAgICAgICAgIHNpZGViYXI7XG5cbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0Lmxlbmd0aCA+IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgc2lkZWJhciA9ICQodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEgc2lkZWJhci5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0Lmxlbmd0aCA8IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRBY3RpdmVFbGVtZW50ID0gJCgnW2RhdGEtdG9nZ2xlPVwic2lkZWJhci1tZW51XCJdJykubm90KHRoaXMpLmNsb3Nlc3QoJ2xpJykubGVuZ3RoID8gJCgnW2RhdGEtdG9nZ2xlPVwic2lkZWJhci1tZW51XCJdJykubm90KHRoaXMpLmNsb3Nlc3QoJ2xpJykgOiAkKCdbZGF0YS10b2dnbGU9XCJzaWRlYmFyLW1lbnVcIl0nKS5ub3QodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhY3RpdmVFbGVtZW50ID0gJCh0aGlzKS5jbG9zZXN0KCdsaScpLmxlbmd0aCA/ICQodGhpcykuY2xvc2VzdCgnbGknKSA6ICQodGhpcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEFjdGl2ZUVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmVFbGVtZW50LmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoJCgnaHRtbCcpLmhhc0NsYXNzKCdzaG93LXNpZGViYXInKSkgYWN0aXZlRWxlbWVudC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgJCgnaHRtbCcpLnJlbW92ZUNsYXNzKCdzaG93LXNpZGViYXInKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aXZlRWxlbWVudC5oYXNDbGFzcygnYWN0aXZlJykpICQoJ2h0bWwnKS5hZGRDbGFzcygnc2hvdy1zaWRlYmFyJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgZGF0YU9wdGlvbnMgPSBnZXRTaWRlYmFyRGF0YU9wdGlvbnMoc2lkZWJhciksXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbk9wdGlvbnMgPSB7fTtcblxuICAgICAgICAgICAgICAgIGlmIChidXR0b24uZGF0YSgnZWZmZWN0JykpIGJ1dHRvbk9wdGlvbnMuZWZmZWN0ID0gYnV0dG9uLmRhdGEoJ2VmZmVjdCcpO1xuICAgICAgICAgICAgICAgIGlmIChidXR0b24uZGF0YSgnb3ZlcmxheScpKSBidXR0b25PcHRpb25zLm92ZXJsYXkgPSBidXR0b24uZGF0YSgnb3ZlcmxheScpO1xuXG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIGRhdGFPcHRpb25zLCBidXR0b25PcHRpb25zKTtcblxuICAgICAgICAgICAgICAgIGlmICghIHNpZGViYXIuaGFzQ2xhc3MoJ3NpZGViYXItY2xvc2VkJykgJiYgc2lkZWJhci5pcygnOnZpc2libGUnKSkge1xuICAgICAgICAgICAgICAgICAgICByZXNldChzaWRlYmFyLmF0dHIoJ2lkJyksIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgb3Blbih0YXJnZXQsIG9wdGlvbnMpO1xuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICQoJ2JvZHknKS5vbihldmVudHR5cGUsICdbZGF0YS10b2dnbGU9XCJzaWRlYmFyLW1lbnVcIl0nLCB0b2dnbGUpO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdrZXlkb3duJywgbnVsbCwgJ2VzYycsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9ICQoY29udGFpbmVyU2VsZWN0b3IpO1xuXG4gICAgICAgICAgICBpZiAoY29udGFpbmVyLmhhc0NsYXNzKCdzdC1tZW51LW9wZW4nKSkge1xuICAgICAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBqUXVlcnkgcGx1Z2luIHdyYXBwZXIgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBBbmd1bGFyIFVJLlV0aWxzOiBqUXVlcnkgUGFzc3Rocm91Z2hcbiAgICAgICAgICovXG4gICAgICAgICQuZm4udGtTaWRlYmFyVG9nZ2xlQmFyID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBpZiAoISB0aGlzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgICAgICB2YXIgc2lkZWJhciA9IHRoaXM7XG5cbiAgICAgICAgICAgIC8qIFNpZGViYXIgVG9nZ2xlIEJhciAqL1xuICAgICAgICAgICAgaWYgKHNpZGViYXIuZGF0YSgndG9nZ2xlQmFyJykpIHtcbiAgICAgICAgICAgICAgICB2YXIgYmFyID0gJCgnPGE+PC9hPicpO1xuICAgICAgICAgICAgICAgIGJhci5hdHRyKCdocmVmJywgJyMnICsgc2lkZWJhci5hdHRyKCdpZCcpKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS10b2dnbGUnLCAnc2lkZWJhci1tZW51JylcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzaWRlYmFyLXRvZ2dsZS1iYXInKTtcblxuICAgICAgICAgICAgICAgIHNpZGViYXIuYXBwZW5kKGJhcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICAkKCcuc2lkZWJhcicpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICQodGhpcykudGtTaWRlYmFyVG9nZ2xlQmFyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdpbmRvdy5zaWRlYmFyID0ge1xuXG4gICAgICAgICAgICBvcGVuOiBmdW5jdGlvbiAoaWQsIG9wdGlvbnMpIHtcblxuICAgICAgICAgICAgICAgIHZhciBhID0gYW5pbWF0aW5nKCk7XG4gICAgICAgICAgICAgICAgaWYgKGEpIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wZW4oJyMnICsgaWQsIG9wdGlvbnMpO1xuXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBjbG9zZTogZnVuY3Rpb24gKGlkLCBvcHRpb25zKSB7XG5cbiAgICAgICAgICAgICAgICBvcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiByZXNldChpZCwgb3B0aW9ucyk7XG5cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG9wdGlvbnM6IGdldFNpZGViYXJEYXRhT3B0aW9uc1xuXG4gICAgICAgIH07XG5cbiAgICB9KSgpO1xuXG59KShqUXVlcnkpOyIsInJlcXVpcmUoJy4vX2JyZWFrcG9pbnRzJyk7XG5yZXF1aXJlKCcuL19zaWRlYmFyLW1lbnUnKTtcbnJlcXVpcmUoJy4vX2NvbGxhcHNpYmxlJyk7XG5yZXF1aXJlKCcuL19kcm9wZG93bicpO1xucmVxdWlyZSgnLi9fc2lkZWJhci10b2dnbGUnKTtcblxuKGZ1bmN0aW9uKCQpe1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgLyoqXG4gICAgICogalF1ZXJ5IHBsdWdpbiB3cmFwcGVyIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQW5ndWxhciBVSS5VdGlsczogalF1ZXJ5IFBhc3N0aHJvdWdoXG4gICAgICovXG4gICAgJC5mbi50a1NpZGViYXIgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgdmFyIHNldHRpbmdzID0gJC5leHRlbmQoe1xuICAgICAgICAgICAgbWVudVR5cGU6IGZhbHNlLFxuICAgICAgICAgICAgdG9nZ2xlQmFyOiBmYWxzZVxuICAgICAgICB9LCBvcHRpb25zKTtcblxuICAgICAgICB2YXIgc2lkZWJhciA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHNldHRpbmdzLm1lbnVUeXBlID09IFwiY29sbGFwc2VcIikge1xuICAgICAgICAgICAgc2lkZWJhci50a1NpZGViYXJDb2xsYXBzZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNldHRpbmdzLm1lbnVUeXBlID09IFwiZHJvcGRvd25cIikge1xuICAgICAgICAgICAgc2lkZWJhci50a1NpZGViYXJEcm9wZG93bigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNldHRpbmdzLnRvZ2dsZUJhciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgc2lkZWJhci50a1NpZGViYXJUb2dnbGVCYXIoKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICQuZm4udGtDb3VudGRvd24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY291bnRkb3duKHtcbiAgICAgICAgICAgIHVudGlsOiBtb21lbnQoKS5hZGQoMTAsICdtaW51dGUnKS50b0RhdGUoKVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgJCgnLnRrLWNvdW50ZG93bicpLnRrQ291bnRkb3duKCk7XG5cbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAkLmZuLnRrQ3VycmljdWx1bSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB2YXIgZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBhbmd1bGFyID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLmZpbmQoJy5saXN0LWdyb3VwLWl0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9ICQodGhpcykuZGF0YSgndGFyZ2V0Jyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZmluZCgnLmNvbGxhcHNlJylcbiAgICAgICAgICAgIC5vbignc2hvdy5icy5jb2xsYXBzZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBlLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdoaWRlLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGUucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAkKCcuY3VycmljdWx1bScpLnRrQ3VycmljdWx1bSgpO1xuXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbiAoJCkge1xuXG4gICAgdmFyIHNraW4gPSByZXF1aXJlKCdjaGFydHMvanMvbGliL19za2luJykoKTtcbiAgICB2YXIgY2hhcnRzID0gcmVxdWlyZSgnY2hhcnRzL2pzL2Zsb3QvX2hlbHBlcicpO1xuXG4gICAgaWYgKHR5cGVvZiBjaGFydHMgPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgIHJldHVybjtcblxuICAgIGNoYXJ0cy5jaGFydF9lYXJuaW5ncyA9XG4gICAge1xuICAgICAgICAvLyBjaGFydCBkYXRhXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGQxOiBbXSxcbiAgICAgICAgICAgIGQyOiBbXVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIHdpbGwgaG9sZCB0aGUgY2hhcnQgb2JqZWN0XG4gICAgICAgIHBsb3Q6IG51bGwsXG5cbiAgICAgICAgLy8gY2hhcnQgb3B0aW9uc1xuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBjb2xvcnM6IFsgY29sb3JzWyAnd2FybmluZy1jb2xvcicgXSwgY29sb3JzWyAnc3VjY2Vzcy1jb2xvcicgXSBdLFxuICAgICAgICAgICAgZ3JpZDoge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvcnNbICdkZWZhdWx0LWxpZ2h0LWNvbG9yJyBdLFxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGhvdmVyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlcmllczoge1xuICAgICAgICAgICAgICAgIGdyb3c6IHthY3RpdmU6IGZhbHNlfSxcbiAgICAgICAgICAgICAgICBsaW5lczoge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBmaWxsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbGluZVdpZHRoOiAyLFxuICAgICAgICAgICAgICAgICAgICBzdGVwczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBjb25maWcuc2tpbnNbIHNraW4gXVsgJ3ByaW1hcnktY29sb3InIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBvaW50czoge3Nob3c6IGZhbHNlfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgIG5vQ29sdW1uczogMixcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJud1wiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogbnVsbCxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kT3BhY2l0eTogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHlheGlzOiB7XG4gICAgICAgICAgICAgICAgdGlja3M6IDMsXG4gICAgICAgICAgICAgICAgdGlja1NpemU6IDQwLFxuICAgICAgICAgICAgICAgIHRpY2tGb3JtYXR0ZXI6IGZ1bmN0aW9uICh2YWwsIGF4aXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbCArIFwia1wiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB4YXhpczoge3RpY2tzOiA0LCB0aWNrRGVjaW1hbHM6IDAsIHRpY2tDb2xvcjogJ3RyYW5zcGFyZW50J30sXG4gICAgICAgICAgICBzaGFkb3dTaXplOiAwLFxuICAgICAgICAgICAgdG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICAgIHRvb2x0aXBPcHRzOiB7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCIlcyA6ICV5LjBcIixcbiAgICAgICAgICAgICAgICBzaGlmdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgeDogLSAzMCxcbiAgICAgICAgICAgICAgICAgICAgeTogLSA1MFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGVmYXVsdFRoZW1lOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIGluaXRpYWxpemVcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKHdyYXBwZXIpIHtcblxuICAgICAgICAgICAgaWYgKCEgd3JhcHBlci5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICAgICAgLy8gZ2VuZXJhdGUgc29tZSBkYXRhXG4gICAgICAgICAgICB0aGlzLmRhdGEuZDEgPSBbIFsgMSwgMTAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAyLCAyMCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDMsIDUwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgNCwgMTYwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgNSwgMTEwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgNiwgMzYgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyA3LCA3MCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDgsIDMwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgOSwgMzYgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAxMCwgODAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAxMSwgMTQwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTIsIDQ3ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTMsIDUwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTQsIDUwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTUsIDQ1ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTYsIDEwMCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDE3LCA1MCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDE4LCA1MyArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDE5LCA1NiArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDIwLCA1OSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDIxLCA2MiArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDIyLCA5MCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDIzLCA1NiArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDI0LCA1OSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDI1LCA2MiArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDI2LCA2NSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDI3LCA4MCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDI4LCA3MSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDI5LCA3NSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDMwLCAxMjAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSBdO1xuICAgICAgICAgICAgdGhpcy5kYXRhLmQyID0gWyBbIDEsIDMgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyAyLCA2ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMywgMzAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyA0LCAxMTAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyA1LCA4MCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDYsIDE4ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgNywgNTAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSwgWyA4LCAxNSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDksIDE4ICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTAsIDYwICsgY2hhcnRzLnV0aWxpdHkucmFuZE51bSgpIF0sIFsgMTEsIDExMCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDEyLCAyNyArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDEzLCAzMCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDE0LCAzMyArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDE1LCAyNCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDE2LCA4MCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDE3LCAzMCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDE4LCAzMyArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDE5LCAzNiArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDIwLCAzOSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDIxLCA0MiArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDIyLCA3MCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDIzLCAzNiArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDI0LCAzOSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDI1LCA0MiArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDI2LCA0NSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDI3LCA2MCArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDI4LCA1MSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDI5LCA1NSArIGNoYXJ0cy51dGlsaXR5LnJhbmROdW0oKSBdLCBbIDMwLCAxMDAgKyBjaGFydHMudXRpbGl0eS5yYW5kTnVtKCkgXSBdO1xuXG4gICAgICAgICAgICAvLyBtYWtlIGNoYXJ0XG4gICAgICAgICAgICB0aGlzLnBsb3QgPSAkLnBsb3QoXG4gICAgICAgICAgICAgICAgd3JhcHBlciwgW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJHcm9zcyBSZXZlbnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLmRhdGEuZDFcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTmV0IFJldmVudWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHRoaXMuZGF0YS5kMlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnNcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogalF1ZXJ5IHBsdWdpbiB3cmFwcGVyIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQW5ndWxhciBVSS5VdGlsczogalF1ZXJ5IFBhc3N0aHJvdWdoXG4gICAgICovXG4gICAgJC5mbi50a0Zsb3RDaGFydEVhcm5pbmdzID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICghIHRoaXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgY2hhcnRzLmNoYXJ0X2Vhcm5pbmdzLmluaXQodGhpcyk7XG5cbiAgICB9O1xuXG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwiZmxvdC1jaGFydC1lYXJuaW5nc1wiXScpLnRrRmxvdENoYXJ0RWFybmluZ3MoKTtcblxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24gKCQsIHdpbmRvdykge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgdmFyICR3aW5kb3cgPSAkKHdpbmRvdyksXG4gICAgICAgICRjb250ZW50ID0gJCgnLnN0LWNvbnRlbnQtaW5uZXInKTtcblxuICAgICQuZm4udGtTY3JvbGxOYXZiYXJUcmFuc2l0aW9uID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHZhciBoYW5kbGVTY3JvbGwgPSBmdW5jdGlvbiAoZSkge1xuXG4gICAgICAgICAgICB2YXIgJG5hdmJhciA9ICQoJy5uYXZiYXItZml4ZWQtdG9wJyksXG4gICAgICAgICAgICAgICAgJGh0bWwgPSAkKCdodG1sJyk7XG5cbiAgICAgICAgICAgIGlmIChNb2Rlcm5penIudG91Y2ggfHwgISAkbmF2YmFyLmxlbmd0aCB8fCAhICRodG1sLmlzKCcudHJhbnNpdGlvbi1uYXZiYXItc2Nyb2xsJykpIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgdmFyIHNjcm9sbFRvcCA9IHBhcnNlSW50KCQoZS5jdXJyZW50VGFyZ2V0KS5zY3JvbGxUb3AoKSwgMTApO1xuXG4gICAgICAgICAgICBpZiAoISBpc05hTihzY3JvbGxUb3ApKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCA+IDUwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkbmF2YmFyLmRhdGEoJ3onKSAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJG5hdmJhci5hdHRyKCdkYXRhLXonLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoJG5hdmJhci5pcygnLm5hdmJhci1zaXplLXhsYXJnZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkbmF2YmFyLnJlbW92ZUNsYXNzKCduYXZiYXItc2l6ZS14bGFyZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoJGh0bWwuaXMoJy5scy10b3AtbmF2YmFyLXhsYXJnZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkaHRtbC5yZW1vdmVDbGFzcygnbHMtdG9wLW5hdmJhci14bGFyZ2UnKS5hZGRDbGFzcygnbHMtdG9wLW5hdmJhci1sYXJnZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICgkaHRtbC5pcygnLnRvcC1uYXZiYXIteGxhcmdlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRodG1sLnJlbW92ZUNsYXNzKCd0b3AtbmF2YmFyLXhsYXJnZScpLmFkZENsYXNzKCd0b3AtbmF2YmFyLWxhcmdlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICRuYXZiYXIuYXR0cignZGF0YS16JywgMCk7XG4gICAgICAgICAgICAgICAgICAgICRuYXZiYXIuYWRkQ2xhc3MoJ25hdmJhci1zaXplLXhsYXJnZScpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGh0bWwuaXMoJy5scy10b3AtbmF2YmFyLWxhcmdlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRodG1sLnJlbW92ZUNsYXNzKCdscy10b3AtbmF2YmFyLWxhcmdlJykuYWRkQ2xhc3MoJ2xzLXRvcC1uYXZiYXIteGxhcmdlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCRodG1sLmlzKCcudG9wLW5hdmJhci1sYXJnZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkaHRtbC5yZW1vdmVDbGFzcygndG9wLW5hdmJhci1sYXJnZScpLmFkZENsYXNzKCd0b3AtbmF2YmFyLXhsYXJnZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zY3JvbGwoaGFuZGxlU2Nyb2xsKTtcblxuICAgIH07XG5cbiAgICBpZiAoJGNvbnRlbnQubGVuZ3RoKSB7XG4gICAgICAgICRjb250ZW50LnRrU2Nyb2xsTmF2YmFyVHJhbnNpdGlvbigpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgJHdpbmRvdy50a1Njcm9sbE5hdmJhclRyYW5zaXRpb24oKTtcbiAgICB9XG5cbn0pKGpRdWVyeSwgd2luZG93KTsiLCIvLyBDdXJyaWN1bHVtXG5yZXF1aXJlKCcuL19jdXJyaWN1bHVtJyk7XG5cbi8vIFNjcm9sbGluZyBiZWhhdmlvdXJcbnJlcXVpcmUoJy4vX3Njcm9sbCcpO1xuXG4vLyBRdWl6IHRpbWVyXG5yZXF1aXJlKCcuL19jb3VudGRvd24nKTtcblxuLy8gRWFybmluZ3MgY2hhcnRcbnJlcXVpcmUoJy4vX2Zsb3RjaGFydC1lYXJuaW5ncycpOyJdfQ==
