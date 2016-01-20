# DevSKiller programming task sample - JavaScript with Gulp and bower

## Introduction

With [DevSKiller.com](https://devskiller.com) you can assess candidates' programming skills during your recruitment process. Programming tasks are the best way to test candidates programming skills. The candidate is asked to modify a source code of some existing project.

During the test, the candidate is allowed to edit the source code of the project with our browser-based code editor and can build the project inside the browser at any time. Candidate can also download the project code and edit it locally with the favorite IDE.

Check out how the test looks from candidate's perspective: [Candidate campaign preview](https://www.youtube.com/watch?v=rB4fViXPh5E).


This repo contains an example project for JavaScript with Gulp and bower, below you can find a detailed guide for creating your own programming project. 

**Please make sure to read our [Getting started with programming projects](https://docs.devskiller.com/programming_task/index.html) guides first**

## Technical details for JavaScript with Gulp support

Any **Gulp** project might be used as a programming task. We support **Karma** for unit tests, **npm** and **bower** for external dependencies.

The project will be executed with following commands:
```sh
npm install
bower install
gulp test
```

***Important:*** **NPMv2** will be used to build the project.

**When you will be creating a ZIP package with project contents, please skip node_modules and bower_components folders.**

## Automatic assessment

It is possible to automatically assess solution posted by the candidate. Automatic assessment is based on Unit Tests results and Code Quality measurements. 

All unit tests that are executed during the build will be detected by the DevSKiller platform. However, it is required to add a `karma-junit-reporter` plugin to karma configuration and set it to output tests results to `test-results.xml`:

```javascript
  var configuration = {
    // ...
    plugins : [
      //...
      'karma-junit-reporter'
    ],

    //...
    junitReporter: {
      outputFile: 'test-results.xml'
    }

  };
```

Check `karma.conf.js` in the sample project for a full Karma configuration.

There are two kinds of unit tests:

1. **Candidate tests** - unit tests that are visible for the candidate during the test. Should be used to do only the basic verification and help the candidate to understand the requirements. Candidate tests WOULD NOT be used to calculate the final score.
2. **Verification tests** - unit tests that are hidden from the candidate during the test. Files containing verification tests would be added to the project after the candidate finishes the test and will be executed during verification phase. Verification tests result would be used to calculate the final score.

After candidate finishes the campaign, our platform builds the project posted by the candidate and executes verification tests and static code analysis.

## DevSKiller project descriptor

Programming task can be configured with the DevSKiller project descriptor file. Just create a `devskiller.json` file and place it in the root directory of your project. Here is an example project descriptor:

```json
{
  "verification": {
    "testNamePatterns": [".*verify_pack.*"],
    "pathPatterns": ["**verify_pack**"]
  },
  "readOnlyFiles" : [ "src/index.html", "gulp/**" ]
}

```

You can find more details about `devskiller.json` descriptor in our [documentation](https://docs.devskiller.com/programming_tasks/project_descriptor.html).

## Automatic verification with verification tests

To enable automatic verification of candidates' solution, you need to define which tests should be treated as verification tests.

All files classified as verification tests will be removed from a project prepared for the candidate.

To define verification tests, you need to set two configuration properties in `devskiller.json` project descriptor:

- `testNamePatterns` - an array of RegEx patterns which should match all test names of verification tests. 
Test name contains: `PhantomJS 1.9.8 (Linux 0.0.0).[test_suite_name]`. In our sample project all verification tests are in a test suite starting with `verify_pack` string, so following pattern will be sufficient:

```json
"testNamePatterns" : [".*verify_pack.*"]
```

- `pathPatterns` - an array of GLOB patterns which should match all files containing verification tests. All files that match defined patterns will be deleted from candidates' projects and will be added to the projects during the verification phase. These files will not be visible for candidate during the test. In our sample project all verification tests are in `verify_pack` subfolder, so following pattern will be sufficient:

```json
"pathPatterns": ["**verify_pack**"]
```

