# codeceptjs-graphql-demo

# Introduction
This project demonstrates how to use CodeceptJS with GraphQL helper.

## How to use
This is done using CodeceptJS <https://codecept.io/>

### Tech
This test uses a number of open source projects to work properly:

* <https://nodejs.org/en/> - evented I/O for the backend
* <https://codecept.io/> - CodeceptJS
* <https://bahnql.herokuapp.com/graphql> - Endpoints that are used in this porject

### Installation
This requires [Node.js](https://nodejs.org/) v8+ to run.

Install the dependencies.

```sh
cd codeceptjs-graphql-demo
npm i
```

### How to trigger API tests
To run all GraphQL tests just simply type

```sh
npm test
```

Example output
```sh
CodeceptJS v2.5.0
Running tests in 2 workers...

[1] GraphQL Acceptance Tests --
[2] GraphQL Acceptance Tests --
[1]   ✔ Send query to GraphQL endpoint over http in 963ms
[2]   ✔ Send query to GraphQL endpoint over http - with variables in 960ms

  OK  | 2 passed   // 1.157s
```