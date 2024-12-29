# Express.js Route Handler Missing Error Handling

This repository demonstrates a common error in Express.js route handlers: missing error handling for invalid input.  The `bug.js` file shows a route that is vulnerable to crashing if an invalid user ID is provided. The `bugSolution.js` file shows the corrected version.

## Bug Description

The buggy route handler doesn't handle cases where the `userId` parameter is not a valid number or does not correspond to an existing user in the database.  This leads to unhandled exceptions and server crashes.

## Solution

The solution involves adding appropriate error handling using `try...catch` blocks or middleware to gracefully handle invalid input and prevent server crashes.  The corrected code provides more informative error responses to the client.