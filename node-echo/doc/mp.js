{
  "stats": {
    "suites": 2,
    "tests": 2,
    "passes": 0,
    "pending": 0,
    "failures": 2,
    "start": "2016-03-25T09:04:40.342Z",
    "end": "2016-03-25T09:04:40.354Z",
    "duration": 12
  },
  "tests": [
    {
      "title": "is blue",
      "fullTitle": "StringCalculator body background is blue",
      "duration": 5,
      "currentRetry": 0,
      "err": {
        "message": "expected '1440px' to equal '~~'",
        "showDiff": true,
        "actual": "1440px",
        "expected": "~~",
        "stack": "AssertionError: expected '1440px' to equal '~~'\n    at file:///D:/nodeDemo/node-echo/node_modules/chai/chai.js?v=1458896680290:210\n    at assertEqual (file:///D:/nodeDemo/node-echo/node_modules/chai/chai.js?v=1458896680290:782)\n    at file:///D:/nodeDemo/node-echo/node_modules/chai/chai.js?v=1458896680290:4192\n    at specs/tests.specs.js?v=1458896680290:27",
        "line": 210,
        "sourceId": 9286968,
        "sourceURL": "file:///D:/nodeDemo/node-echo/node_modules/chai/chai.js?v=1458896680290",
        "stackArray": [
          {
            "sourceURL": "file:///D:/nodeDemo/node-echo/node_modules/chai/chai.js?v=1458896680290",
            "line": 210
          },
          {
            "function": "assertEqual",
            "sourceURL": "file:///D:/nodeDemo/node-echo/node_modules/chai/chai.js?v=1458896680290",
            "line": 782
          },
          {
            "sourceURL": "file:///D:/nodeDemo/node-echo/node_modules/chai/chai.js?v=1458896680290",
            "line": 4192
          },
          {
            "sourceURL": "file:///D:/nodeDemo/node-echo/tester/specs/tests.specs.js?v=1458896680290",
            "line": 27
          },
          {
            "function": "callFn",
            "sourceURL": "file:///D:/nodeDemo/node-echo/tester/mocha.js",
            "line": 4290
          },
          {
            "sourceURL": "file:///D:/nodeDemo/node-echo/tester/mocha.js",
            "line": 4283
          },
          {
            "sourceURL": "file:///D:/nodeDemo/node-echo/tester/mocha.js",
            "line": 4753
          },
          {
            "sourceURL": "file:///D:/nodeDemo/node-echo/tester/mocha.js",
            "line": 4895
          },
          {
            "function": "next",
            "sourceURL": "file:///D:/nodeDemo/node-echo/tester/mocha.js",
            "line": 4673
          },
          {
            "sourceURL": "file:///D:/nodeDemo/node-echo/tester/mocha.js",
            "line": 4683
          },
          {
            "function": "next",
            "sourceURL": "file:///D:/nodeDemo/node-echo/tester/mocha.js",
            "line": 4615
          },
          {
            "sourceURL": "file:///D:/nodeDemo/node-echo/tester/mocha.js",
            "line": 4651
          },
          {
            "function": "timeslice",
            "sourceURL": "file:///D:/nodeDemo/node-echo/tester/mocha.js",
            "line": 12619
          }
        ]
      }
    },
    {
      "title": "chai-jq",
      "fullTitle": "StringCalculator body background chai-jq",
      "duration": 2,
      "currentRetry": 0,
      "err": {
        "message": "hi~: expected '#hi' to have attr('id') 'hi~' but found 'hi'",
        "showDiff": false,
        "actual": "hi",
        "expected": "hi~",
        "stack": "AssertionError: hi~: expected '#hi' to have attr('id') 'hi~' but found 'hi'\n    at file:///D:/nodeDemo/node-echo/node_modules/chai/chai.js?v=1458896680290:210\n    at file:///D:/nodeDemo/node-echo/node_modules/chai-jq/chai-jq.js?v=1458896680290:186\n    at file:///D:/nodeDemo/node-echo/node_modules/chai-jq/chai-jq.js?v=1458896680290:98\n    at file:///D:/nodeDemo/node-echo/node_modules/chai/chai.js?v=1458896680290:4192\n    at specs/tests.specs.js?v=1458896680290:34",
        "line": 210,
        "sourceId": 9286968,
        "sourceURL": "file:///D:/nodeDemo/node-echo/node_modules/chai/chai.js?v=1458896680290",
        "stackArray": [
          {
            "sourceURL": "file:///D:/nodeDemo/node-echo/node_modules/chai/chai.js?v=1458896680290",
            "line": 210
          },
          {
            "sourceURL": "file:///D:/nodeDemo/node-echo/node_modules/chai-jq/chai-jq.js?v=1458896680290",
            "line": 186
          },
          {
            "sourceURL": "file:///D:/nodeDemo/node-echo/node_modules/chai-jq/chai-jq.js?v=1458896680290",
            "line": 98
          },
          {
            "sourceURL": "file:///D:/nodeDemo/node-echo/node_modules/chai/chai.js?v=1458896680290",
            "line": 4192
          },
          {
            "sourceURL": "file:///D:/nodeDemo/node-echo/tester/specs/tests.specs.js?v=1458896680290",
            "line": 34
          },
          {
            "function": "callFn",
            "sourceURL": "file:///D:/nodeDemo/node-echo/tester/mocha.js",
            "line": 4290
          },
          {
            "sourceURL": "file:///D:/nodeDemo/node-echo/tester/mocha.js",
            "line": 4283
          },
          {
            "sourceURL": "file:///D:/nodeDemo/node-echo/tester/mocha.js",
            "line": 4753
          },
          {
            "sourceURL": "file:///D:/nodeDemo/node-echo/tester/mocha.js",
            "line": 4895
          },
          {
            "function": "next",
            "sourceURL": "file:///D:/nodeDemo/node-echo/tester/mocha.js",
            "line": 4673
          },
          {
            "sourceURL": "file:///D:/nodeDemo/node-echo/tester/mocha.js",
            "line": 4683
          },
          {
            "function": "next",
            "sourceURL": "file:///D:/nodeDemo/node-echo/tester/mocha.js",
            "line": 4615
          },
          {
            "sourceURL": "file:///D:/nodeDemo/node-echo/tester/mocha.js",
            "line": 4651
          },
          {
            "function": "timeslice",
            "sourceURL": "file:///D:/nodeDemo/node-echo/tester/mocha.js",
            "line": 12619
          }
        ]
      }
    }
  ],
  "pending": [],
  "failures": [
    {
      "title": "is blue",
      "fullTitle": "StringCalculator body background is blue",
      "duration": 5,
      "currentRetry": 0,
      "err": {
        "message": "expected '1440px' to equal '~~'",
        "showDiff": true,
        "actual": "1440px",
        "expected": "~~",
        "stack": "AssertionError: expected '1440px' to equal '~~'\n    at file:///D:/nodeDemo/node-echo/node_modules/chai/chai.js?v=1458896680290:210\n    at assertEqual (file:///D:/nodeDemo/node-echo/node_modules/chai/chai.js?v=1458896680290:782)\n    at file:///D:/nodeDemo/node-echo/node_modules/chai/chai.js?v=1458896680290:4192\n    at specs/tests.specs.js?v=1458896680290:27",
        "line": 210,
        "sourceId": 9286968,
        "sourceURL": "file:///D:/nodeDemo/node-echo/node_modules/chai/chai.js?v=1458896680290",
        "stackArray": [
          {
            "sourceURL": "file:///D:/nodeDemo/node-echo/node_modules/chai/chai.js?v=1458896680290",
            "line": 210
          },
          {
            "function": "assertEqual",
            "sourceURL": "file:///D:/nodeDemo/node-echo/node_modules/chai/chai.js?v=1458896680290",
            "line": 782
          },
          {
            "sourceURL": "file:///D:/nodeDemo/node-echo/node_modules/chai/chai.js?v=1458896680290",
            "line": 4192
          },
          {
            "sourceURL": "file:///D:/nodeDemo/node-echo/tester/specs/tests.specs.js?v=1458896680290",
            "line": 27
          },
          {
            "function": "callFn",
            "sourceURL": "file:///D:/nodeDemo/node-echo/tester/mocha.js",
            "line": 4290
          },
          {
            "sourceURL": "file:///D:/nodeDemo/node-echo/tester/mocha.js",
            "line": 4283
          },
          {
            "sourceURL": "file:///D:/nodeDemo/node-echo/tester/mocha.js",
            "line": 4753
          },
          {
            "sourceURL": "file:///D:/nodeDemo/node-echo/tester/mocha.js",
            "line": 4895
          },
          {
            "function": "next",
            "sourceURL": "file:///D:/nodeDemo/node-echo/tester/mocha.js",
            "line": 4673
          },
          {
            "sourceURL": "file:///D:/nodeDemo/node-echo/tester/mocha.js",
            "line": 4683
          },
          {
            "function": "next",
            "sourceURL": "file:///D:/nodeDemo/node-echo/tester/mocha.js",
            "line": 4615
          },
          {
            "sourceURL": "file:///D:/nodeDemo/node-echo/tester/mocha.js",
            "line": 4651
          },
          {
            "function": "timeslice",
            "sourceURL": "file:///D:/nodeDemo/node-echo/tester/mocha.js",
            "line": 12619
          }
        ]
      }
    },
    {
      "title": "chai-jq",
      "fullTitle": "StringCalculator body background chai-jq",
      "duration": 2,
      "currentRetry": 0,
      "err": {
        "message": "hi~: expected '#hi' to have attr('id') 'hi~' but found 'hi'",
        "showDiff": false,
        "actual": "hi",
        "expected": "hi~",
        "stack": "AssertionError: hi~: expected '#hi' to have attr('id') 'hi~' but found 'hi'\n    at file:///D:/nodeDemo/node-echo/node_modules/chai/chai.js?v=1458896680290:210\n    at file:///D:/nodeDemo/node-echo/node_modules/chai-jq/chai-jq.js?v=1458896680290:186\n    at file:///D:/nodeDemo/node-echo/node_modules/chai-jq/chai-jq.js?v=1458896680290:98\n    at file:///D:/nodeDemo/node-echo/node_modules/chai/chai.js?v=1458896680290:4192\n    at specs/tests.specs.js?v=1458896680290:34",
        "line": 210,
        "sourceId": 9286968,
        "sourceURL": "file:///D:/nodeDemo/node-echo/node_modules/chai/chai.js?v=1458896680290",
        "stackArray": [
          {
            "sourceURL": "file:///D:/nodeDemo/node-echo/node_modules/chai/chai.js?v=1458896680290",
            "line": 210
          },
          {
            "sourceURL": "file:///D:/nodeDemo/node-echo/node_modules/chai-jq/chai-jq.js?v=1458896680290",
            "line": 186
          },
          {
            "sourceURL": "file:///D:/nodeDemo/node-echo/node_modules/chai-jq/chai-jq.js?v=1458896680290",
            "line": 98
          },
          {
            "sourceURL": "file:///D:/nodeDemo/node-echo/node_modules/chai/chai.js?v=1458896680290",
            "line": 4192
          },
          {
            "sourceURL": "file:///D:/nodeDemo/node-echo/tester/specs/tests.specs.js?v=1458896680290",
            "line": 34
          },
          {
            "function": "callFn",
            "sourceURL": "file:///D:/nodeDemo/node-echo/tester/mocha.js",
            "line": 4290
          },
          {
            "sourceURL": "file:///D:/nodeDemo/node-echo/tester/mocha.js",
            "line": 4283
          },
          {
            "sourceURL": "file:///D:/nodeDemo/node-echo/tester/mocha.js",
            "line": 4753
          },
          {
            "sourceURL": "file:///D:/nodeDemo/node-echo/tester/mocha.js",
            "line": 4895
          },
          {
            "function": "next",
            "sourceURL": "file:///D:/nodeDemo/node-echo/tester/mocha.js",
            "line": 4673
          },
          {
            "sourceURL": "file:///D:/nodeDemo/node-echo/tester/mocha.js",
            "line": 4683
          },
          {
            "function": "next",
            "sourceURL": "file:///D:/nodeDemo/node-echo/tester/mocha.js",
            "line": 4615
          },
          {
            "sourceURL": "file:///D:/nodeDemo/node-echo/tester/mocha.js",
            "line": 4651
          },
          {
            "function": "timeslice",
            "sourceURL": "file:///D:/nodeDemo/node-echo/tester/mocha.js",
            "line": 12619
          }
        ]
      }
    }
  ],
  "passes": []
}