'use strict';

module.exports = function(config) {

  var configuration = {
    autoWatch : false,

    frameworks: ['jasmine'],

    ngHtml2JsPreprocessor: {
      stripPrefix: 'src/',
      moduleName: 'gulpAngular'
    },

    browsers : ['PhantomJS'],

    reporters : ['progress', 'junit'],

    plugins : [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-ng-html2js-preprocessor',
      'karma-junit-reporter'
    ],

    preprocessors: {
      'src/**/*.html': ['ng-html2js']
    },
    junitReporter: {
      outputFile: 'test-results.xml'
    }

  };

  config.set(configuration);
};
