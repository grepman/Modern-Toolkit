/*global module*/
/*jshint camelcase:false*/ // because of gruntConfig.qunit_junit
module.exports = function (grunt) {
    'use strict';

    var gruntConfig = {
        pkg: grunt.file.readJSON('package.json')
    };

    // convenience
    grunt.registerTask('default', ['qunit_junit', 'qunit']);


    // clean
    grunt.loadNpmTasks('grunt-contrib-clean');
    gruntConfig.clean = {
        output: ['report']
    };

    grunt.registerTask('lint', 'jshint');

    // test
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-qunit-istanbul');
    gruntConfig.qunit = {
        src: ['static/test/index.html'],
        options: {
        coverage: {
          src: ['static/js/**/*.js'],
          instrumentedFiles: 'temp/',
          htmlReport: 'report/coverage',
          coberturaReport: 'report/',
          linesThresholdPct: 20
        }
        }
    };
    grunt.loadNpmTasks('grunt-qunit-junit');
    gruntConfig.qunit_junit = {
        options: {
            dest: 'report/'
        }
    };

    // coverage
    grunt.loadNpmTasks('grunt-qunit-cov');
    gruntConfig['qunit-cov'] = {
        test:
        {
            minimum: 0.7,
            baseDir: 'src',
            srcDir: 'static/js',
            depDirs: ['static/lib', 'static/test'],
            outDir: 'report/qunit-coverage',
            testFiles: ['static/test/index.html']
        }
    };
    grunt.registerTask('coverage', 'qunit-cov');

    // css lint

    grunt.loadNpmTasks('grunt-contrib-csslint');
    gruntConfig.csslint = {
      options: {
    formatters: [
      {id: 'junit-xml', dest: 'report/csslint_junit.xml'},
      {id: 'checkstyle-xml', dest: 'report/csscheckstyle.xml'}
    ]
  },
  strict: {
    options: {
      import: false
    },
    src: ['doc/**/*.css']
  }
};

grunt.loadNpmTasks('grunt-parallel-behat');
gruntConfig.behat= {
        src: 'features/**/*.feature',
        config: './behat/behat.yml',
        maxProcesses: 2,
        bin: './bin/behat'


    };


    // grunt
    grunt.initConfig(gruntConfig);
};
