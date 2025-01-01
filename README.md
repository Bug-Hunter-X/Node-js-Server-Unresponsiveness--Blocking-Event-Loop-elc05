# Node.js Server Unresponsiveness: Blocking Event Loop

This repository demonstrates a common issue in Node.js where a long-running synchronous operation in the request handler blocks the event loop, leading to server unresponsiveness. The `bug.js` file contains the problematic code, while `bugSolution.js` shows the solution using asynchronous operations.

## Bug Description
The server becomes unresponsive when handling a request due to a CPU-bound task within the request handler. This blocks the event loop, preventing other requests from being processed.  This results in a poor user experience and potential application failure.

## Solution
The solution involves refactoring the code to use asynchronous operations or offloading the long-running task to a worker thread or a separate process.  The example uses `async/await` to allow the event loop to remain responsive.