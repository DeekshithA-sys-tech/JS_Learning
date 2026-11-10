# JavaScript Learning

A collection of small JavaScript examples and interview-practice notes. The files are standalone learning exercises rather than a packaged application.

## Repository contents

### `advanceJS/`

| File | What it covers |
| --- | --- |
| `callback.js` | Passing a callback to a function and returning its result. |
| `callbackHell.js` | Nested callbacks to illustrate sequential asynchronous work. |
| `promise.js` | Promise states and handlers (with a commented-out example), plus a Fetch example that logs an API response status. |
| `async_await.js` | Sequential asynchronous work with `async`/`await`, and an unfinished Fetch example. |
| `constructor_chaining.js` | Constructor-function inheritance notes and ES6 class inheritance with `extends` and `super`. |
| `forloops.js` | Empty placeholder for loop exercises. |
| `api.js` | Fetches a random joke and displays it in the page. |
| `index.html` | Minimal page that loads `api.js`. |

### `technical_Interview/`

| File | What it covers |
| --- | --- |
| `QUE.js` | A collection of mostly commented interview questions and experiments covering arrays, strings, coercion, equality, and functions. Its final active example maps an array to squares. |

## Running the examples

There is no package manifest, build step, or test suite. Most standalone JavaScript examples can be run with a recent Node.js installation:

```sh
node advanceJS/callback.js
node advanceJS/callbackHell.js
node advanceJS/constructor_chaining.js
node technical_Interview/QUE.js
```

The Fetch examples need network access and a runtime with Fetch support (for example, a current browser or Node.js 18+). To try the page example, open `advanceJS/index.html` in a browser and click the page; the current script registers a document-level click handler and requests a random joke from `official-joke-api.appspot.com`.

These are practice files and some examples are intentionally incomplete or commented out. For example, `advanceJS/async_await.js` defines but does not call `fetchDATA`, and its JSON parsing line is a learning-in-progress example. Review each snippet before relying on it as production code.

## Notes

- Each example is independent; run or open it from its own context.
- The API demonstrations depend on a third-party service and an internet connection.
- VS Code Code Runner temporary files are excluded from version control.
